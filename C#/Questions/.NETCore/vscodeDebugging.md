### Config settings for debugging projects in `vscode`

> ### `.NET Core` settings
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
***
> ### Debug & Trace
- Below are some code snippets to manage our _debug_ and _trace_ environments
```cs
using System;
using System.Diagnostics;

namespace DotNetDebugging
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 55;

            //will assert x is not 33. If it is 33 then whole application will stop
            Debug.Assert(x != 33, $"{nameof(x)} can not be 33");


            //if x > 5 then it will write following message
            Debug.WriteLineIf(x > 5, $"x is greater than 5 and x value is {x}");

            Debug.Write("Debug- ");
            Debug.WriteLine("First line of debug");
            Debug.WriteLine("Second line of debug");

            Trace.Write("Trace - ");
            Trace.WriteLine("First line of trace");
            Trace.WriteLine("Second line of trace");
        }
    }
}

```
