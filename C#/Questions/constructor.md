> What is `constructor` mechanism in C#?

- Special mechanism to use construct an instance from a class
- Has same name with the corresponding class and has no return value and return type in their signature
- If we do not specify any external constructor, C# compiler will automatically define a `default constructor`
- There are different kind of constructors._Default constructor,parameterized constructor,copy constructor,static constructor_ ..etc
- `Static constructors` are special constructor that works **first and only once**. They are used to initialize
`static values` or any static operation that need to be executed before anything else. They are **parameterless** and can not take
any **access modifiers**.
***
```c#

using System;

namespace Dummy
{
    class Person
    {
        public string FirstName { get; set; } = "Chety";
        public string LastName { get; set; } = "Clooney";

        public Person()
        {

        }
        public Person(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }

    }
    class Programmer : Person
    {
        public static string AwsomeProgrammingLanguage { get; set; }
        public int Salary { get; set; } = 4000;
        public string FullName => $"{this.FirstName} -- {LastName}";

        public Programmer()
        {
            Console.WriteLine("Default constructor. If we do not specify any external " +
                "constructor like this, C# compiler will automatically define for us :)");
        }

        //Parameterized constructor. With base keyword we can call parent constructor
        public Programmer(int _salary, string _fullName) : base(_fullName.Split(' ')[0], _fullName.Split(' ')[1])
        {
            Salary = _salary;
        }

        //Copy constructor
        public Programmer(Programmer copyProgrammer)
        {
            Salary = copyProgrammer.Salary;
            FirstName = copyProgrammer.FirstName;
            LastName = copyProgrammer.LastName;
        }

        //Static constructor. Works only once and before anything else in the class
        //It does not get any access modifiers. And does not have parameters
        static Programmer()
        {
            AwsomeProgrammingLanguage = "C#";
            Console.WriteLine("Static Constructor");
            Console.WriteLine(GetLanguageInfo());
        }

        public static string GetLanguageInfo()
        {
            return $"The best programming language is {AwsomeProgrammingLanguage}";
        }

        public override string ToString()
        {
            return $"Hello my name is {FirstName} {LastName}. I am a programmer and I get {Salary} per month";
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
            var programmer = new Programmer();
            var programmer2 = new Programmer(15000, "Joe Armstrong");

            Console.WriteLine(programmer);
            Console.WriteLine("*************");
            Console.WriteLine(programmer2);

            Console.ReadLine();
        }
    }
}


```c#


```
