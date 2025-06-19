This repo is focused on using Playwright with MCP Server in order to create automation tests using CoPilot 

Resources needed 
- NodeJs : https://nodejs.org/en
- Visual Studio Code : https://code.visualstudio.com/
- Existing Github account needed to install copilot
- Playwright MCP Server : https://github.com/microsoft/playwright-mcp?tab=readme-ov-file 
- Video resource you can use for a step  by step guide : https://www.youtube.com/watch?v=lCTdBIF6oO8&t=261s


How Playwright MCP works 
Article : https://modelcontextprotocol.io/introduction

Steps for Setup 
1- Complete Playwright MCP and CoPilot setup 
2- Install Playwtight 
  2.1 - You can name your test folder anything you would like ( you are not limited to this repos naming ) 


MCP and Copilot setup  
Once you have VS Code and NodeJS installed you can navigate to the Microsoft/Playwright-mcp gitgub accunt : https://github.com/microsoft/playwright-mcp?tab=readme-ov-file
Scroll down till you see the following section 

![{2E0233EB-E5CD-49BE-9AA9-EFC60345DE3C}](https://github.com/user-attachments/assets/367b027c-5ce5-412e-abf2-cb8fb4bf9302)

Then under it click the Install Server VS Code 
![image](https://github.com/user-attachments/assets/1e622490-d3fb-427e-8c81-0aeb9cd1d955)

Once you click this you will be reqested to open vs Code.
Depending on where you want the installation to take place , you can select a different option. However  you can install it in your user settings 
![image](https://github.com/user-attachments/assets/ce5f883f-4180-4551-b4d0-713c4cc9e6b5)

Once this is done you will have the following file settings. json file on your pc.
![image](https://github.com/user-attachments/assets/20d29c94-29c5-46cc-8592-ec46118ab85e)

If you cannot find it do the following ,
---
Press Ctrl+Shift+P to open the search menu in vs code and type MPC List server 
![image](https://github.com/user-attachments/assets/c9abc511-a110-4071-8ce1-3bb81eca3b56)
when you click on this you will find a list of servers, click on it and select show configuration to open the server 
![image](https://github.com/user-attachments/assets/f6fb3f6f-a452-4b07-aa22-dcb61f2d24a1)
---

Once you can see the server file you will be able to start the server by clicking the start button 
![image](https://github.com/user-attachments/assets/22f3eccb-1ce9-40f2-ac8b-e136337d05f7)

when the server is running you can open Copilot on visual studio code.
Ensure you change the mode from Ask to agent and then click on configure tools 
![image](https://github.com/user-attachments/assets/6192dab0-d9ab-4cf9-99e1-139664ea4e0b)

You should ne able to see all the playwright related functionality 
![image](https://github.com/user-attachments/assets/4a83d82c-be29-4ff4-a1a9-2da8d5ce3ce0)

As long as the server is running you can now create playwright scripts with copilot after you install Playwright into your project 


Installing Playwright 
In your project root directory run : npm init playwright@latest
During instillatiion select typescript and then install the browsers. 






