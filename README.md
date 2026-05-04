# AI-Augmented QA Engineer Assignment — Careerflow

## 👨‍💻 Candidate
Animesh Gupta

---

## 🚀 Overview
This project demonstrates end-to-end QA capabilities including:
- UI Automation using Playwright (POM architecture)
- API Testing
- Test Design for AI-powered features
- Practical usage of AI tools in QA workflow

---

## 🧱 Tech Stack
- Playwright (JavaScript)
- Node.js
- GitHub Actions (CI)

---

## 📁 Project Structure
tests/
├── e2e/
├── api/
pages/
utils/


---

## ✅ Task 1 — UI Automation

### 🔹 Flow Covered
Student Form Submission:
- Fill user details
- Validate required fields
- Submit form
- Verify success modal

### 🔹 Key Highlights
- Page Object Model (POM)
- No hard waits (uses Playwright auto-wait)
- Positive + Negative scenarios
- Robust assertions

---

## 🌐 Task 1 — API Testing

### 🔹 Scenario
- Fetch user data from public API
- Validate response structure and data

### 🔹 Highlights
- Status validation
- Schema validation
- Stable API usage (non-flaky)

---

## 🧠 Task 2 — Test Design

Covered:
- Functional scenarios
- Edge cases
- Integration risks
- AI feedback validation strategy

👉 See attached document (Test Plan)

---

## 🤖 AI Tools Usage

- ChatGPT → test design, debugging, framework structuring
- GitHub Copilot → code assistance

👉 Used AI for productivity but validated outputs manually

---

## ⚙️ Setup Instructions

```bash
npm install
npx playwright install

--Run Tests
npx playwright test