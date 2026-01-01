---
name: prompt-helper
description: Helps users structure clear, effective prompts for coding tasks. Use when user asks 'how do I ask Claude to...', needs guidance on prompting, or their request is vague and needs clarification on how to phrase it better.
---

# Prompt Helper

Guides you on structuring effective prompts for Claude Code to get exactly what you need without wasting tokens or context.

## Core Principles

Every effective prompt should have:
1. **Clear Objective** - What specific outcome you want
2. **Context** - Relevant file paths, existing patterns, or constraints
3. **Scope** - Boundaries of what should/shouldn't change
4. **Success Criteria** - How to know when it's complete

## Prompt Templates by Task Type

### Adding a New Feature

**Template:**
```
Add [specific feature] to [file path or component name].

Context:
- Use the pattern from [reference file/example]
- Integrate with [existing system/API]
- Should work with [constraints or requirements]

Scope:
- Only modify [specific files]
- Don't change [things to leave alone]

Success criteria:
- [Specific behavior to verify]
- [Edge cases to handle]
```

**Good Example:**
```
Add user authentication to src/components/LoginForm.tsx.

Context:
- Use the same pattern as src/components/RegisterForm.tsx
- Integrate with our existing API at /api/auth/login
- Should store JWT token in localStorage

Scope:
- Only modify LoginForm.tsx and create auth.ts utility
- Don't change the existing RegisterForm

Success criteria:
- Successful login redirects to /dashboard
- Failed login shows error message
- Token persists on page refresh
```

**Bad Example:**
```
Make login work
```
*Why it's bad: No file path, no context, no clear requirements*

---

### Fixing a Bug

**Template:**
```
Fix the [specific issue] in [file path].

Error/Problem:
- [Exact error message or unexpected behavior]
- Occurs when [steps to reproduce]

Expected behavior:
- [What should happen instead]

Files involved:
- [List files if known, or ask Claude to find them]
```

**Good Example:**
```
Fix the "Cannot read property 'map' of undefined" error in src/pages/Dashboard.tsx:45.

Error occurs when:
- User loads dashboard before data fetch completes
- The posts array is undefined initially

Expected behavior:
- Show loading state while data fetches
- Only render posts.map() after data loads

File: src/pages/Dashboard.tsx
```

**Bad Example:**
```
Dashboard is broken, fix it
```
*Why it's bad: No specific error, no file path, no reproduction steps*

---

### Refactoring Code

**Template:**
```
Refactor [specific code section] in [file path] to [improvement goal].

Current issue:
- [What's wrong with current approach]

Desired outcome:
- [What the refactored version should achieve]

Constraints:
- Keep the same external API/interface
- Don't break existing tests
- [Other requirements]
```

**Good Example:**
```
Refactor the data fetching logic in src/hooks/useUserData.ts to reduce code duplication.

Current issue:
- Three similar fetch functions with repeated error handling
- Hard to maintain when API patterns change

Desired outcome:
- Single reusable fetch wrapper
- Centralized error handling
- Type-safe responses

Constraints:
- Keep the same hook interface (useUserData, usePostData, useComments)
- Don't break existing components using these hooks
```

**Bad Example:**
```
Make the code cleaner
```
*Why it's bad: Too vague, no specific target, unclear what "cleaner" means*

---

### Implementing from Documentation

**Template:**
```
Implement [feature/library] in [file path] based on [documentation source].

What to build:
- [Specific functionality needed]

Reference:
- [Link to docs or example]
- Key points: [Important details from docs]

Integration:
- Should work with [existing code/system]
- [Any adaptations needed]
```

**Good Example:**
```
Implement Stripe checkout in src/pages/Checkout.tsx based on Stripe docs.

What to build:
- Payment form with card input
- Handle successful payment
- Display error messages

Reference:
- Use Stripe Elements React library
- Need to create PaymentIntent on backend first
- Key: Use stripe.confirmCardPayment() client-side

Integration:
- Backend endpoint already exists at /api/create-payment-intent
- On success, redirect to /order-confirmation
- Store order in our database via /api/orders
```

**Bad Example:**
```
Add Stripe payments
```
*Why it's bad: No specifics on what docs to use, no integration details*

---

### Testing Code

**Template:**
```
Test [feature/component] in [location].

Test cases:
1. [Happy path - what should work]
2. [Edge case 1]
3. [Edge case 2]
4. [Error conditions]

Method:
- [Manual testing via /chrome, unit tests, integration tests]

Success criteria:
- [All test cases pass]
```

**Good Example:**
```
Test the login form at localhost:3000/login using /chrome.

Test cases:
1. Valid credentials should redirect to dashboard
2. Invalid password shows error message
3. Empty fields show validation errors
4. Network error shows appropriate message

Method:
- Use /chrome to interact with form
- Check console for errors
- Verify API requests in network tab

Success criteria:
- All 4 test cases pass
- No console errors
- API calls use correct endpoints
```

**Bad Example:**
```
Test if login works
```
*Why it's bad: No specific test cases, no method specified*

---

## Cost-Conscious Patterns

### Provide File Paths

**Good:**
```
Fix the validation logic in src/utils/validators.ts:23-45
```

**Bad:**
```
Fix the validation logic
```
*Claude has to search entire codebase - wastes tokens*

---

### Reference Existing Patterns

**Good:**
```
Add error handling using the same pattern as src/api/users.ts
```

**Bad:**
```
Add error handling
```
*Claude has to research or make assumptions*

---

### Be Specific About Scope

**Good:**
```
Only modify src/components/Header.tsx - don't change navigation logic
```

**Bad:**
```
Update the header
```
*Claude might change more than needed*

---

### Ask Incremental Questions

**Good:**
```
1. First, show me the current authentication flow
2. Then, suggest where to add 2FA
3. Finally, implement the 2FA feature
```

**Bad:**
```
Add authentication with 2FA and everything needed
```
*Too broad - leads to over-exploration*

---

## Common Pitfalls to Avoid

### Vague Requests
- "Make it better"
- "Optimize everything"
- "Fix all bugs"
- "Clean up the code"

**Fix:** Specify exactly what to improve, where, and why

---

### Missing Context
- Not providing file paths when you know them
- Not mentioning existing patterns to follow
- Not explaining constraints or requirements

**Fix:** Include all relevant context upfront

---

### Undefined Scope
- "Update the app"
- "Refactor the backend"
- "Fix the database"

**Fix:** Specify exactly which files, functions, or components

---

### No Success Criteria
- No clear end goal
- Unclear how to verify it works
- No edge cases mentioned

**Fix:** Define what "done" looks like

---

## Quick Reference: Task → Prompt Structure

| Task | Must Include |
|------|--------------|
| Add Feature | File path, pattern reference, integration points |
| Fix Bug | Error message, file path, reproduction steps |
| Refactor | Target code, current issue, desired outcome |
| Implement API | Endpoint/library, docs reference, integration needs |
| Test | Test cases, method (browser/unit), success criteria |
| Debug | Error details, expected behavior, relevant files |
| Research | What to research, where to look, what to do with findings |

---

## Examples in Action

### Scenario: You want to add a feature but don't know how to ask

**Your Thought:** "I want users to be able to delete their posts"

**Use This Template:**
```
Add delete functionality for user posts in [component name].

Context:
- Posts are displayed in [component file]
- API endpoint for deletion: [if known, or ask Claude to check]
- Should show confirmation dialog before deleting

Scope:
- Add delete button to each post
- Create confirmation modal
- Update post list after deletion

Success criteria:
- User clicks delete → sees confirmation
- User confirms → post deleted from UI and backend
- User cancels → nothing happens
```

---

### Scenario: Something broke and you need help

**Your Thought:** "The page won't load"

**Use This Template:**
```
Debug the page load issue in [page name/file].

Error:
- [Copy exact error from console]
- OR: Page shows blank screen
- OR: Specific error message displayed

When it happens:
- [Steps to reproduce]
- [What you were doing when it broke]

Expected:
- [What should happen instead]

Files that might be involved:
- [List if you know, or ask Claude to investigate]
```

---

## When to Use This Skill

I'll activate this skill when you:
- Ask "How do I ask Claude to..."
- Say "I need help with..." but it's unclear what you need
- Give a vague request like "fix the app"
- Ask for guidance on structuring prompts
- Seem unsure how to phrase your coding request

I'll then guide you to restructure your request using the templates above, making it specific, contextual, and cost-efficient.

---

## Integration with Your Workflow

1. **Before asking Claude:** Check the template for your task type
2. **Fill in the template:** Add specifics from your project
3. **Submit clear prompt:** Claude executes efficiently
4. **Iterate if needed:** Use templates for follow-ups too

This approach follows your CLAUDE.md principles: intentional, focused, and cost-conscious.
