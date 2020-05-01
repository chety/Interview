
- Abstract classes are used for base/parent class purpose.(_Inheritance mechanism_)
- We ***can not*** make an instance of abstract class
- Abstract classes can include normal methods(_with implementation_) and abstract methods(_Only method signature, not the implementation_)
- Abstract methods can only be in _abstract classes_. You have to ***override*** abstract methods in child class(Main difference from _virtual methods_. Overriding virtual method in child class is optional)

| **Abstract** | **Interface** |
| --- | --- |
|Can have fields,properties,methods|Can not have fields. Only methods and properties |
|Can have access modifiers.|No access modifiers. All the members are the ***public abstract by default***.|
|Can have abstract and normal methods.|Have only abstract methods. **Only method signature(method name,parameters,return type)**, not the implementation.|

> **Talk is cheap, show me your code!!**  Oh.. Calm down _linus_, you can check the below :)

```C#
 abstract class Personnel
    {
        //Abstract methods can have constructors. But you can make an instance of it
        public Personnel()
        {

        }
        //These are common properties that will be in child classes
        public int Id { get; set; }
        public string FullName { get; set; } = "Chety Clooney";

        //can contain field
        public string Department;

        //can contain static members
        public static double Wage;
        public static string SalaryInfo() => $"Your salary is : {Wage}";
        

        //This is common method. All the child methods can call this method
        public string GetLaborDayMessage() => $"Bîjî Yek Gulan. Hi there {FullName}";

        //abstract methods can only be in abstract classes
        public abstract double GetSalary();
    }

    class Manager : Personnel
    {
        public override double GetSalary() => 12000;
    }

    class Programmer : Personnel
    {
        public override double GetSalary() => 20000;
    }

    class Program
    {
        static void Main(string[] args)
        {
            //Error. Can not make an instance of the abstract classes
            //Personnel p = new Personnel();

            Personnel.Wage = 4500;

            var programmer = new Programmer
            {
                Id = 1,
                FullName = "Hack the world hacker."
            };
            Console.WriteLine(programmer.GetLaborDayMessage());
            Console.WriteLine(programmer.GetSalary());
            Console.WriteLine(Programmer.SalaryInfo());

            var manager = new Manager
            {
                Id = 2,
                FullName = "Continue to Suck the management "
            };
            Console.WriteLine(manager.GetLaborDayMessage());
            Console.WriteLine(manager.GetSalary());

            Console.ReadLine();
        }
    }
```
