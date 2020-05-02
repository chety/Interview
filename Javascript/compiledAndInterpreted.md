## What is the difference between _compiled and interpreted_ language ?

> Compiled languages are compiled before their execution. (C#,Java ...etc).

- Lets say our program has 4 lines of code. If our language is a compiled language, before compiler execute this 4 lines of code, it will compile it to a ***intermediate language(CIL in C#, Bytecode in Java)***. 
- If we have a syntax error in the third line, it won't execute our program. Because it is syntactically wrong thus it will not be converted to the intermediate or machine language.

> Interpreted languages are interpreted/executed line by line.(Bash,scripting languages ...etc)

- In the above scenerio , Our program will be executed until third line, then will throw an error.
- This translation of commands is typically done from top to bottom, line by line, every time the program is run, which is usually called interpreting the code.
- It's typically asserted that JavaScript is interpreted, because your JavaScript source code is processed each time it's run. But that's not entirely accurate. ***The JavaScript engine actually compiles the program on the fly*** and then immediately runs the compiled code.
