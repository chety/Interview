### Config settings for debugging projects in `vscode`

#### `.NET Core` settings
- type `mkdir .vscode` in project root directory. Add two files `launch.json` and `tasks.json` inside this directory. 
- Content of `launch.json`. Adjust program directory as your program
   ```json
    {
      "version": "0.2.0",
      "configurations": [
          {
              "name": ".NET Core Launch (console)",
              "type": "coreclr",
              "request": "launch",
              "preLaunchTask": "build",
              "program": "${workspaceRoot}/bin/Debug/net5.0/dotnetdebugging.dll",
              "args": [],
              "cwd": "${workspaceRoot}",
              "stopAtEntry": false,
              "externalConsole": false
          },
          {
              "name": ".NET Core Attach",
              "type": "coreclr",
              "request": "attach",
              "processId": "${command:pickProcess}"
          }
      ]
  }
  ```
***
- Content of `tasks.json`
    ```json
      {
        "version": "2.0.0",
        "tasks": [
            {
                "label": "build",
                "command": "dotnet",
                "type": "shell",
                "args": [
                    "build",
                    "/property:GenerateFullPaths=true",
                    "/consoleloggerparameters:NoSummary"
                ],
                "group": "build",
                "presentation": {
                    "reveal": "silent"
                },
                "problemMatcher": "$msCompile"
            }
        ]
    }
```
