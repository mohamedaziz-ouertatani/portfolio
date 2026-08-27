import '@testing-library/jest-dom'

// Mock IntersectionObserver for framer-motion
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    // Simulate immediate intersection for tests
    this.callback([{ isIntersecting: true }]);
  }
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = MockIntersectionObserver;
