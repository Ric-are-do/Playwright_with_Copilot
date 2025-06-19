This repo is focused on using Playwright with MCP Server in order to create automation tests using CoPilot 

Resources needed 
- NodeJs : https://nodejs.org/en
- Visual Studio Code : https://code.visualstudio.com/
- Existing Github account needed to install copilot
- Playwright MCP Server : https://github.com/microsoft/playwright-mcp?tab=readme-ov-file 
- Video resource you can use for a step  by step guide : https://www.youtube.com/watch?v=lCTdBIF6oO8&t=261s

Setup 
Once you have VS Code and NodeJS installed you can navigate to the Microsoft/Playwright-mcp gitgub accunt : https://github.com/microsoft/playwright-mcp?tab=readme-ov-file
Scroll down till you see the following section 

![{2E0233EB-E5CD-49BE-9AA9-EFC60345DE3C}](https://github.com/user-attachments/assets/367b027c-5ce5-412e-abf2-cb8fb4bf9302)
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}

Then under it click the Install Server VS Code 
![image](https://github.com/user-attachments/assets/1e622490-d3fb-427e-8c81-0aeb9cd1d955)

