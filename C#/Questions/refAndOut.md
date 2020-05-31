> What is `ref` and `out` keyword in c#

- **Ref vs. out** keywords are used to _return multiple values from methods._
- When we use **ref** with _primitive types_ like int,double,float ...etc They behave like _reference types_
- In newer versions of C#, you can use `tuple` to return multiple  values more elegantly.

***
```c#
using System;

namespace Dummy
{
    class Program
    {
        static void Main(string[] args)
        {
            int meaningOfLife = 42;
            Console.WriteLine($"Before calling method. MeaningOfLife: {meaningOfLife}");
            /*
             Normally primitive values are passed by value. That means if we do not use "out" before our
             argument, the copy of the meaningOfLife will be passed. Even we mutate this variable
             in our method, our variable will preserve its original value. But when we use "out" or "ref"
             with primitive values, they basically behaves like "reference variables"
             */
            changeMeaningOfLife(out meaningOfLife);
            Console.WriteLine($"After calling method. MeaningOfLife: {meaningOfLife}");


            MathProcess(2, 5, out int sum, out int multiply, out int sub, out int mod);
            Console.WriteLine($"Sum: {sum}, Multiply: {multiply}, Substraction: {sub}, Mod: {mod}");

            /*
              before passing arguments with "ref", we have to initialize them. That is the main difference
              between "out" and "ref"  
             */
            int sum2 = 0, multiply2 = 0, sub2 = 0, mod2 = 0;
            MathProcess2(2, 5, ref sum2, ref multiply2, ref sub2, ref mod2);

            (string message, int value) = GetMultiplyReturnValue();
            Console.WriteLine($"{message}: {value}");

            Console.ReadLine();
        }


        static void changeMeaningOfLife(out int meaningOfLife)
        {
            meaningOfLife = 49;
        }

        static void MathProcess(int num1, int num2, out int sum, out int multiply, out int subtraction, out int modulo)
        {
            /*
              In our method you have to assign this out variables.
             */
            sum = num1 + num2;
            multiply = num1 * num2;
            subtraction = num2 - num1;
            modulo = num2 % num1;
        }

        static void MathProcess2(int num1, int num2, ref int sum, ref int multiply, ref int subtraction, ref int modulo)
        {
            /*
             In our method you do not have to assign this "ref" parameter variables. Because
             when calling this "MathProcess2" method you have to initialize ref arguments !!!
            */
            sum = num1 + num2;
            multiply = num1 * num2;
            subtraction = num2 - num1;
            modulo = num2 % num1;
        }

        //return multiple values via tuples
        static (string,int) GetMultiplyReturnValue()
        {
            return ("Meaning of the life", 42);
        }

    }
}

```
