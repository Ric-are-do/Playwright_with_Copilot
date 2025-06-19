# Playwright Automation with MCP Server and GitHub Copilot

This repository focuses on using **[Playwright](https://playwright.dev/)** with the **MCP Server** to create automation tests powered by **GitHub Copilot**.

## 🛠 Required Resources

- [Node.js](https://nodejs.org/en)  
- [Visual Studio Code](https://code.visualstudio.com/)  
- Existing GitHub account (required for Copilot setup)  
- [Playwright MCP Server](https://github.com/microsoft/playwright-mcp?tab=readme-ov-file)  
- 🎥 [Video walkthrough](https://www.youtube.com/watch?v=lCTdBIF6oO8&t=261s)

## 📘 How Playwright MCP Works

Read the official article:  
[https://modelcontextprotocol.io/introduction](https://modelcontextprotocol.io/introduction)

---

## ✅ Setup Steps

1. Complete setup for **Playwright MCP** and **GitHub Copilot**  
2. Install Playwright  
   - You can name your test folder anything you like (you are not limited to this repo’s naming)

---

## 🧩 MCP and Copilot Setup

Once you have **Node.js** and **VS Code** installed, navigate to the [Playwright MCP GitHub page](https://github.com/microsoft/playwright-mcp?tab=readme-ov-file).

Scroll down to find the following section:

![Install MCP](https://github.com/user-attachments/assets/367b027c-5ce5-412e-abf2-cb8fb4bf9302)

Click on **Install Server VS Code**:

![Install Button](https://github.com/user-attachments/assets/1e622490-d3fb-427e-8c81-0aeb9cd1d955)

You will be prompted to open VS Code. Choose the installation location as needed, but installing to user settings is recommended:

![Install Options](https://github.com/user-attachments/assets/ce5f883f-4180-4551-b4d0-713c4cc9e6b5)

After installation, you should see a `settings.json` file like this:

![Settings File](https://github.com/user-attachments/assets/20d29c94-29c5-46cc-8592-ec46118ab85e)

If you cannot find it, follow these steps:

---

Press `Ctrl+Shift+P` to open the command palette and search for:


![List Servers](https://github.com/user-attachments/assets/c9abc511-a110-4071-8ce1-3bb81eca3b56)

Click it, and then select **Show Configuration** to open the server settings:

![Show Config](https://github.com/user-attachments/assets/f6fb3f6f-a452-4b07-aa22-dcb61f2d24a1)

---

Once open, click the **Start** button to start the server:

![Start Server](https://github.com/user-attachments/assets/22f3eccb-1ce9-40f2-ac8b-e136337d05f7)

When the server is running, open **Copilot** in VS Code. Change the mode from **Ask** to **Agent**, then click on **Configure Tools**:

![Copilot Agent Mode](https://github.com/user-attachments/assets/6192dab0-d9ab-4cf9-99e1-139664ea4e0b)

You should now see all Playwright-related functionality:

![Playwright Tools](https://github.com/user-attachments/assets/4a83d82c-be29-4ff4-a1a9-2da8d5ce3ce0)

As long as the server is running, you can now generate Playwright scripts using Copilot after installing Playwright in your project.

---

## 📦 Installing Playwright

In your project root directory, run the following command:


npm init playwright@latest

## 🧪 Playwright Setup Questions (for `npm init playwright@latest`)

When you run the `npm init playwright@latest` command, you’ll be prompted with a few setup questions:

1. **Where to put your end-to-end tests?**  
   _Default:_ `tests`  
   You can rename this to any folder name you'd like.

2. **Add a GitHub Actions workflow?**  
   _Optional:_ You can choose `Yes` or `No` depending on whether you want to set up CI/CD via GitHub Actions.

3. **Install Playwright browsers?**  
   _Choose:_ `Yes`  
   This installs Chromium, Firefox, and WebKit locally for testing.

4. **Select a language:**  
   _Choose:_ `TypeScript`  
   This enables strong typing support and works well with modern editors like VS Code.

5. **Generate tests for components?**  
   _Optional:_ Typically `No` unless you are doing component-level testing with frameworks like React or Vue.

These questions help scaffold the Playwright project in a way that suits your structure and preferred tech stack.



---

## 🤖 Example: Using Copilot to Generate UI Tests

Once the MCP server is running and Playwright is installed in your project, you can begin using GitHub Copilot to generate tests.

Here’s an example prompt you can type into Copilot:
go to this website: https://example.com
create short UI tests where we click on all the buttons on the site

Inside the tests folder ( where you set your default tests) the new test will be stored in typescript 
---
---

## ▶️ Running Tests in UI Mode

To run your Playwright tests in UI mode (headed mode with the Inspector), use the following command:

```bash
npx playwright test --ui


