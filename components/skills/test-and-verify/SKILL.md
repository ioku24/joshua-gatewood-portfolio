---
name: test-and-verify
description: Tests and verifies implementations work correctly before moving forward. Use after building features, fixing bugs, or making changes. Combines code testing with browser automation via /chrome to ensure everything actually works.
---

# Test and Verify

Comprehensive testing skill that ensures your code actually works before you ship it or move to the next task.

## When I Activate

I activate when:
- Just finished building a feature (need to verify it works)
- Fixed a bug (need to confirm it's actually fixed)
- Made changes to existing code (need to ensure nothing broke)
- User asks "does this work?" or "can you test this?"
- Before committing code or deploying
- User requests end-to-end testing

## Testing Philosophy

**Test early, test often:**
- Catch bugs before they compound
- Verify each piece works before building on it
- Save time by finding issues immediately

**Multi-layer verification:**
- Code level: Does it run without errors?
- Browser level: Does the UI work as expected?
- Integration level: Do all pieces work together?

---

## Testing Workflow

### Phase 1: Code-Level Testing

**Check 1: Syntax and Imports**
```
1. Read the code files that changed
2. Verify:
   - No syntax errors
   - All imports exist
   - Variables are defined before use
   - Types match (TypeScript)
```

**Check 2: Run the Code**
```
1. Start the development server
2. Check terminal output for:
   - Compilation errors
   - Runtime errors
   - Warnings that need attention
3. Confirm server starts successfully
```

**Check 3: Static Analysis**
```
1. Check for common issues:
   - Unused variables
   - Missing error handling
   - Potential null/undefined access
   - Logic errors
```

---

### Phase 2: Browser-Level Testing (use /chrome)

**Setup:**
```
1. Ensure dev server is running
2. Connect to Chrome: /chrome
3. Navigate to localhost:[PORT]
4. Identify the feature/page to test
```

**Visual Verification:**
```
1. Take screenshot of initial state
2. Verify:
   - Page renders correctly
   - No visual glitches
   - Elements are positioned properly
   - Styles applied correctly
   - Content displays as expected
```

**Console Check:**
```
1. Read console messages filtering for "error" or "warn"
2. Verify:
   - No JavaScript errors
   - No React/framework warnings
   - No failed imports
3. Document any issues found
```

**Network Check:**
```
1. Read network requests
2. Verify:
   - API calls succeed (200/201 status)
   - Correct endpoints called
   - Data formats match expectations
   - No 404 or 500 errors
3. Check response data is valid
```

---

### Phase 3: Interaction Testing (use /chrome)

**User Flow Testing:**
```
For each critical user action:
1. Identify the interaction (click, type, submit, etc.)
2. Execute the action in browser
3. Verify expected result
4. Check console for errors after action
5. Verify network requests triggered (if applicable)
6. Screenshot the result state
```

**Example Flow:**
```
Feature: Login Form

Test Steps:
1. Navigate to /login page
2. Type in email field: test@example.com
3. Type in password field: password123
4. Click submit button
5. Verify redirect to /dashboard
6. Check network for POST /api/auth/login (200 status)
7. Verify token stored in localStorage
8. Screenshot dashboard page
```

---

### Phase 4: Edge Case Testing

**Common Edge Cases:**
```
1. Empty form submission
2. Invalid input (wrong format, too long, etc.)
3. Network failure simulation
4. Missing/null data
5. Rapid repeated actions
6. Browser back/forward
7. Page refresh
```

**Testing Pattern:**
```
For each edge case:
1. Set up the scenario
2. Execute the action
3. Verify graceful handling:
   - Shows appropriate error message
   - Doesn't crash or break
   - User can recover
4. Check console for errors
```

---

## Test Checklist by Feature Type

### Form Testing

- [ ] Form renders correctly
- [ ] All fields accept input
- [ ] Validation works (required fields, format checks)
- [ ] Error messages display appropriately
- [ ] Submit button triggers correctly
- [ ] Success/error states shown
- [ ] Network request sent with correct data
- [ ] Response handled properly
- [ ] Form clears/resets after success (if expected)

**Browser Commands:**
```
/chrome navigate to localhost:3000/form-page
/chrome type in email field: test@example.com
/chrome click submit button
/chrome read console messages filtering for "error"
/chrome read network requests for /api/
/chrome screenshot
```

---

### API Integration Testing

- [ ] Correct endpoint called
- [ ] Request includes necessary data/headers
- [ ] Response returns expected data structure
- [ ] Loading states shown during request
- [ ] Success state updates UI correctly
- [ ] Error handling works (network error, 4xx, 5xx)
- [ ] Data transforms correctly before display

**Browser Commands:**
```
/chrome navigate to localhost:3000/data-page
/chrome read network requests filtering for "/api/"
/chrome read console for API responses
/chrome verify data displays correctly
```

---

### Navigation/Routing Testing

- [ ] Links navigate to correct pages
- [ ] URL updates properly
- [ ] Page content loads
- [ ] Back button works
- [ ] Direct URL access works
- [ ] 404 page shows for invalid routes
- [ ] Protected routes redirect if unauthorized

**Browser Commands:**
```
/chrome navigate to localhost:3000
/chrome click on [link/button]
/chrome verify URL changed
/chrome screenshot
/chrome navigate back
```

---

### State Management Testing

- [ ] Initial state correct
- [ ] State updates after actions
- [ ] UI reflects state changes
- [ ] State persists (if expected)
- [ ] State resets when needed
- [ ] No stale state issues

**Browser Commands:**
```
/chrome execute: console.log(window.__REDUX_STATE__)
/chrome perform action
/chrome execute: verify state changed
```

---

### Authentication Testing

- [ ] Login flow works
- [ ] Token stored correctly
- [ ] Protected routes accessible after login
- [ ] Logout clears session
- [ ] Token refresh works (if applicable)
- [ ] Unauthorized redirects work

**Browser Commands:**
```
/chrome navigate to localhost:3000/login
/chrome type credentials
/chrome click login
/chrome verify redirect to dashboard
/chrome execute: console.log(localStorage.getItem('token'))
/chrome navigate to protected route
/chrome verify access granted
```

---

## GIF Recording for Documentation

When testing complex flows, create GIF recordings:

```
1. Start GIF recording: /chrome start recording
2. Execute the complete user flow
3. Stop recording: /chrome stop recording
4. Export GIF with filename describing the flow
5. Use for documentation or sharing
```

**Example:**
```
Recording: Login and Dashboard Access Flow

1. /chrome start recording
2. Screenshot initial state
3. Navigate to /login
4. Fill in credentials
5. Click submit
6. Wait for redirect
7. Screenshot dashboard
8. /chrome stop recording
9. Export as "login-flow.gif"
```

---

## Test Report Format

After testing, provide a structured report:

```
## Test Report: [Feature Name]

**Date:** [Current date]
**Environment:** localhost:[PORT]

### Code-Level Tests
✓ No syntax errors
✓ Server starts successfully
✓ No compilation warnings

### Browser Tests
✓ Page renders correctly
✓ No console errors
✓ Network requests succeed

### Interaction Tests
✓ [Action 1] works as expected
✓ [Action 2] works as expected
✓ [Action 3] works as expected

### Edge Cases
✓ Empty input handled
✓ Invalid input shows error
✓ Network error handled gracefully

### Issues Found
[None] OR [List specific issues]

### Screenshots
- Initial state: [screenshot]
- After interaction: [screenshot]
- Final state: [screenshot]

### Verification Status
✅ PASSED - Ready to commit/deploy
⚠️  PASSED WITH NOTES - Works but has minor issues
❌ FAILED - Issues must be fixed before proceeding
```

---

## Quick Test Templates

### Basic Feature Test
```
1. Start server
2. /chrome navigate to localhost:PORT/feature-page
3. Read console for errors
4. Screenshot page
5. Click/interact with main feature
6. Verify expected behavior
7. Screenshot result
8. Report: ✅ or ❌
```

### API Test
```
1. Start server
2. /chrome navigate to page using API
3. Read network requests for API calls
4. Verify status codes (200/201)
5. Check response data structure
6. Verify UI displays data correctly
7. Report: ✅ or ❌
```

### Form Test
```
1. /chrome navigate to form page
2. Fill all fields with valid data
3. Submit form
4. Check network for POST request
5. Verify success message/redirect
6. Test with invalid data
7. Verify error handling
8. Report: ✅ or ❌
```

---

## Regression Testing

After fixing bugs or adding features:

**Quick Regression Check:**
```
1. Test the new/fixed feature (primary test)
2. Test related features (impact test)
3. Test core user flows (smoke test)
```

**Example:**
```
Fixed: Login form validation

Regression Tests:
1. ✓ Login with valid credentials (primary)
2. ✓ Login with invalid credentials (related)
3. ✓ Registration still works (related)
4. ✓ Dashboard loads after login (core flow)
5. ✓ Logout works (core flow)
```

---

## Performance Checks

Basic performance verification:

```
1. Check page load time (should feel fast)
2. Check for unnecessary re-renders (React DevTools)
3. Check network waterfall (parallel vs sequential)
4. Check bundle size warnings
5. Check for memory leaks (long sessions)
```

**Browser Commands:**
```
/chrome navigate to page
/chrome read network requests
/chrome check for performance warnings
/chrome screenshot network timing
```

---

## Mobile/Responsive Testing

```
1. /chrome resize window to mobile dimensions
2. Navigate to page
3. Verify:
   - Layout adapts correctly
   - Touch targets are adequate
   - No horizontal scroll (unless intended)
   - Text is readable
4. Screenshot mobile view
```

---

## Pre-Deployment Checklist

Before committing or deploying:

- [ ] All tests pass
- [ ] No console errors
- [ ] No network errors
- [ ] Core user flows work end-to-end
- [ ] Edge cases handled
- [ ] Responsive design works (if applicable)
- [ ] No performance regressions
- [ ] Code reviewed (using quick-review skill)
- [ ] Documentation updated (if needed)

---

## Integration with Other Skills

**After debug-buddy fixes issues:**
→ Use test-and-verify to confirm fix works

**Before using quick-review:**
→ Use test-and-verify to ensure code runs

**After research-and-implement:**
→ Use test-and-verify to validate implementation

---

## Cost-Conscious Testing

- Test only what changed + directly related features
- Use targeted console/network filters
- Take screenshots only for documentation or issue reporting
- Record GIFs only for complex flows worth documenting
- Don't test unchanged, stable features every time

---

## Examples in Action

### Example 1: New Login Feature

```
Task: Verify login feature works

1. Code Check:
   - Read src/pages/Login.tsx
   - Verify no syntax errors
   - Check imports exist

2. Browser Test:
   - /chrome navigate to localhost:3000/login
   - Screenshot initial state
   - Read console (no errors ✓)

3. Interaction Test:
   - Type email: test@example.com
   - Type password: password123
   - Click submit
   - Verify redirect to /dashboard

4. Network Test:
   - Read network requests for /api/auth/login
   - Status: 200 ✓
   - Response includes token ✓

5. Edge Cases:
   - Empty fields → shows validation error ✓
   - Wrong password → shows error message ✓
   - Network error → shows appropriate error ✓

Result: ✅ PASSED - Login feature works correctly
```

### Example 2: Bug Fix Verification

```
Task: Verify dashboard crash fix

Original Bug: Dashboard crashed when loading with no data

1. Code Check:
   - Read src/pages/Dashboard.tsx:45
   - Verify added null check before .map()

2. Browser Test:
   - /chrome navigate to localhost:3000/dashboard
   - Simulate empty data state
   - Verify no crash ✓
   - Shows "No data yet" message ✓

3. Console Check:
   - No errors ✓

4. Data Load Test:
   - Add data
   - Dashboard displays correctly ✓

Result: ✅ PASSED - Bug is fixed, no regression
```

---

## When to Report Issues

If testing reveals problems:

```
## Issues Found During Testing

**Issue 1:** [Description]
- Location: [File:line or page]
- Severity: Critical/Major/Minor
- Steps to reproduce: [Steps]
- Expected: [Expected behavior]
- Actual: [Actual behavior]
- Screenshot: [If applicable]

[Recommend fix or escalate to debug-buddy]
```

---

## Success Metrics

Testing is successful when:
- ✅ All planned functionality works
- ✅ No console errors or warnings
- ✅ Network requests succeed
- ✅ User flows complete end-to-end
- ✅ Edge cases handled gracefully
- ✅ No regressions in existing features
- ✅ Code is ready for next step (commit/deploy/iterate)
