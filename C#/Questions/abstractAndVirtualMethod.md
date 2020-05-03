> What is the difference between abstract and virtual methods?

| _Abstract Method_ | _Virtual Method_ |
|--|--|
|Define with **abstract** keyword.| Define with **virtual** keyword|
|Does not have any method  body/implementation. Just method signature| Has method implementation.|
|Has to be overridden in sub/child classes| Not obligated to be overridden. It is optional.|

***

```c#
abstract class Staff
    {
        //abstract and virtual members have to be public
        public abstract double GetSalary();


        //if this method is not overridden in child class, then this method will be called
        public virtual string GetStaffDefinition()
        {
            return "Base staff";
        }

    }

    class Manager : Staff
    {
        public override double GetSalary()
        {
            return 12345.34;
        }
    }

    class Programmer : Staff
    {
        public override double GetSalary()
        {
            return 33444.44;
        }

        public override string GetStaffDefinition()
        {
            return "Programmer";
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var manager = new Manager();
            Console.WriteLine(manager.GetSalary()); // 12345.34
            Console.WriteLine(manager.GetStaffDefinition()); // Base staff

            var programmer = new Programmer();
            Console.WriteLine(programmer.GetSalary()); //33444.44
            Console.WriteLine(programmer.GetStaffDefinition()); //Programmer

            Console.ReadLine();
        }
    }

```
