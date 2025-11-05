# Contributing to Metrics Dashboard

Thank you for considering contributing to Metrics Dashboard! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## 📜 Code of Conduct

This project follows a Code of Conduct to ensure a welcoming and inclusive environment:

- **Be respectful**: Treat everyone with respect and kindness
- **Be collaborative**: Work together and help each other
- **Be professional**: Keep discussions constructive and on-topic
- **Be inclusive**: Welcome contributors of all backgrounds and experience levels

## 🚀 Getting Started

### Prerequisites

Before you start contributing, ensure you have:

- **Node.js** >= 18.0
- **npm** or **yarn** package manager
- **Git** for version control
- **Expo CLI** (optional): `npm install -g expo-cli`
- A code editor (VS Code recommended)

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork locally:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/metricsDashboard.git
   cd metricsDashboard
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/mohammadfirmansyah/metricsDashboard.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Start development server:**
   ```bash
   npm start
   ```

## 🔄 Development Workflow

### Creating a New Feature

1. **Sync with upstream:**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** and test thoroughly

4. **Commit your changes** (see commit guidelines below)

5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

### Testing Your Changes

Before submitting a PR, ensure:

- ✅ Code runs without errors: `npm start`
- ✅ Test on web platform: `npm run web`
- ✅ Test on mobile platforms if possible
- ✅ All charts display correctly
- ✅ Navigation works smoothly between tabs
- ✅ Data fetching completes successfully
- ✅ No console errors or warnings

## 💻 Coding Standards

### General Guidelines

- **Language**: Write code comments in **English**
- **Style**: Follow existing code patterns and conventions
- **Formatting**: Use consistent indentation (2 spaces)
- **Line Length**: Keep lines under 100 characters when possible
- **Naming**: Use descriptive, meaningful variable and function names

### React Native Best Practices

1. **Component Structure:**
   ```javascript
   // Import statements
   import React, { useState, useEffect } from 'react';
   
   // Component definition
   function ComponentName() {
     // State declarations
     const [state, setState] = useState(initialValue);
     
     // Effect hooks
     useEffect(() => {
       // Side effects
     }, []);
     
     // Event handlers
     const handleEvent = () => {
       // Handler logic
     };
     
     // Render
     return (
       // JSX
     );
   }
   
   export default ComponentName;
   ```

2. **State Management:**
   - Use `useState` for local component state
   - Keep state as close to where it's used as possible
   - Initialize state with appropriate default values

3. **Async Operations:**
   - Always use try-catch blocks for async/await
   - Log errors to console for debugging
   - Provide user feedback for failed operations

4. **Styling:**
   - Use `StyleSheet.create()` for performance
   - Keep styles at the bottom of the file
   - Use meaningful style names

### Comment Style

Write tutorial-style comments that explain the "why" and "how":

```javascript
// Fetch daily usage metrics from API
// This data populates the line chart with weekly trends
const fetchDailyUsageMetrics = async () => {
  try {
    // Make GET request to retrieve usage data
    const response = await axios.get(API_ENDPOINT);
    
    // Update state with response data (values and labels)
    setDailyUsageData(response.data);
  } catch (error) {
    // Log error for debugging - consider showing user-friendly message
    console.log('Error fetching data:', error);
  }
};
```

## 📝 Commit Message Guidelines

We follow **Conventional Commits** format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(charts): add loading spinner for data fetching

- Add ActivityIndicator while charts load
- Improve user experience during API calls
- Set loading state in all screen components

fix(navigation): correct tab bar icon alignment

- Adjust icon size for consistency
- Fix spacing between icon and label
```

## 🔀 Pull Request Process

### Before Submitting

1. ✅ Update documentation if needed
2. ✅ Test your changes thoroughly
3. ✅ Ensure code follows style guidelines
4. ✅ Write clear commit messages
5. ✅ Sync with latest upstream changes

### PR Template

When opening a PR, provide:

1. **Description**: What does this PR do?
2. **Motivation**: Why is this change needed?
3. **Testing**: How was it tested?
4. **Screenshots**: Visual changes (if applicable)
5. **Checklist**:
   - [ ] Code follows style guidelines
   - [ ] Comments added where necessary
   - [ ] Documentation updated
   - [ ] No new warnings or errors
   - [ ] Tested on web platform
   - [ ] Ready for review

### Review Process

- Maintainers will review your PR within 2-3 days
- Address any requested changes
- Once approved, your PR will be merged

## 🐛 Reporting Bugs

### Before Reporting

- Check if the bug has already been reported
- Verify the bug exists in the latest version
- Test on multiple platforms if possible

### Bug Report Template

```markdown
**Description:**
A clear description of the bug

**To Reproduce:**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Screenshots:**
If applicable

**Environment:**
- Platform: [Web/iOS/Android]
- React Native: [version]
- Expo: [version]
- Node: [version]
```

## 💡 Suggesting Enhancements

We welcome feature suggestions! When proposing enhancements:

1. **Check existing issues** to avoid duplicates
2. **Provide clear description** of the feature
3. **Explain the use case** and benefits
4. **Include mockups** if it's a UI change
5. **Consider implementation** complexity

### Enhancement Template

```markdown
**Feature Request:**
Brief title

**Problem:**
What problem does this solve?

**Solution:**
Proposed solution

**Alternatives:**
Other approaches considered

**Additional Context:**
Any other relevant information
```

## 📊 Chart Library Guidelines

When working with charts:

- **react-native-chart-kit**: Use for Bar, Pie, Progress charts
- **react-native-gifted-charts**: Use for advanced Line charts
- Maintain consistent styling across all charts
- Ensure responsive width calculations
- Test with various data sizes

## 🙏 Thank You!

Thank you for contributing to Metrics Dashboard! Your efforts help make this project better for everyone.

If you have questions, feel free to:
- Open an issue for discussion
- Contact the maintainer
- Check existing documentation

---

Happy Coding! 🚀
