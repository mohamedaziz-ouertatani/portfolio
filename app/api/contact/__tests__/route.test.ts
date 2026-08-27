/**
 * @jest-environment node
 */
import { POST } from '../route';
import { NextRequest } from 'next/server';

const sendMock = jest.fn();
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: (...args: unknown[]) => sendMock(...args) },
  })),
}));

function makeRequest(body: unknown) {
  return new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    sendMock.mockReset();
    process.env.RESEND_API_KEY = 'test-key';
  });

  it('rejects an invalid payload with 400 and field errors', async () => {
    const res = await POST(
      makeRequest({
        name: 'A',
        email: 'not-an-email',
        subject: '',
        message: 'short',
      })
    );
    const body = await res.json();

    expect(res.status).toBe(400);
    expect(body.ok).toBe(false);
    expect(body.errors.name).toBeDefined();
    expect(body.errors.email).toBeDefined();
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('sends an email and returns 200 for a valid payload', async () => {
    sendMock.mockResolvedValue({ data: { id: 'email_123' }, error: null });

    const res = await POST(
      makeRequest({
        name: 'Jane Recruiter',
        email: 'jane@example.com',
        subject: 'Internship opportunity',
        message: 'We would love to talk to you about a role.',
      })
    );
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(sendMock).toHaveBeenCalledTimes(1);
  });

  it('returns 500 when Resend fails to send', async () => {
    sendMock.mockResolvedValue({
      data: null,
      error: { message: 'send failed' },
    });

    const res = await POST(
      makeRequest({
        name: 'Jane Recruiter',
        email: 'jane@example.com',
        subject: 'Internship opportunity',
        message: 'We would love to talk to you about a role.',
      })
    );
    const body = await res.json();

    expect(res.status).toBe(500);
    expect(body.ok).toBe(false);
  });

  it('returns 503 with a graceful message when RESEND_API_KEY is unset', async () => {
    const originalKey = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;

    try {
      const res = await POST(
        makeRequest({
          name: 'Jane Recruiter',
          email: 'jane@example.com',
          subject: 'Internship opportunity',
          message: 'We would love to talk to you about a role.',
        })
      );
      const body = await res.json();

      expect(res.status).toBe(503);
      expect(body.ok).toBe(false);
      expect(body.error).toBeDefined();
      expect(sendMock).not.toHaveBeenCalled();
    } finally {
      process.env.RESEND_API_KEY = originalKey;
    }
  });

  it('returns 400 for a malformed JSON body', async () => {
    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: '{not valid json',
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    const body = await res.json();

    expect(res.status).toBe(400);
    expect(body.ok).toBe(false);
    expect(sendMock).not.toHaveBeenCalled();
  });
});
