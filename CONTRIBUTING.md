# Contributing to Portfolio

Thank you for considering contributing to this project! 

## How to Contribute

### Reporting Bugs

- Check if the bug has already been reported
- Use the issue tracker to report bugs
- Include detailed steps to reproduce
- Include screenshots if applicable

### Suggesting Enhancements

- Use the issue tracker for feature requests
- Explain why this enhancement would be useful
- Provide examples of how it would work

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Run linting (`npm run lint`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/portfolio.git

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

### Code Style

- Follow the existing code style
- Run `npm run format` before committing
- Write meaningful commit messages
- Add tests for new features

### Testing

- Write unit tests for components
- Write E2E tests for critical user flows
- Ensure all tests pass before submitting PR

## Code of Conduct

Please note that this project follows a Code of Conduct. By participating, you are expected to uphold this code.
