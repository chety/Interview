> What is `constructor` mechanism in C#?

- Special mechanism to use construct an instance from a class
- Has same name with the corresponding class and has no return value and return type in their signature
- If we do not specify any external constructor, C# compiler will automatically define a `default constructor`
- There are different kind of constructors._Default constructor,parameterized constructor,copy constructor,static constructor_ ..etc
- `Static constructors` are special constructor that works **first and only once**. They are used to initialize
`static values` or any static operation that need to be executed before anything else.
***

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dummy
{
    class Programmer
    {
        public static string AwsomeProgrammingLanguage { get; set; }
        public int Salary { get; set; } = 4000;
        public string FullName { get; set; } = "Chety Clooney";

        public Programmer()
        {
            Console.WriteLine("Default constructor. If we do not specify any external" +
                "constructor like this, C# compiler will automatically define this" +
                "constructor for us :)");
        }

        //Parameterized constructor
        public Programmer(int _salary, string _fullName)
        {
            Salary = _salary;
            FullName = _fullName;
        }

        //Copy constructor
        public Programmer(Programmer copyProgrammer)
        {
            Salary = copyProgrammer.Salary;
            FullName = copyProgrammer.FullName;
        }

        //Static constructor. Works only once and before anything else in the class
        //It does not get any access modifiers. And only static members can be used inside
        static Programmer()
        {
            AwsomeProgrammingLanguage = "C#";
            Console.WriteLine(GetLanguageInfo());
        }

        public static string  GetLanguageInfo()
        {
            return   $"The best programming language is {AwsomeProgrammingLanguage}";
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var programmer = new Programmer();
            var programmer2 = new Programmer();

            Console.ReadLine();
        }
    }
}

```
