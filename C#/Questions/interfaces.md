> Interfaces are rule makers. They impose methods/properties to classes. 

- A class can implement many interfaces 
- An interface can extends many interfaces.
- Interfaces only include property and method signatures not implementation.
- _No access modifier allowed in interfaces_. Interfaces members are ***public abstract by default***.
- ***Via C# 8 there is a default method implementation in interfaces***
- You can not make an instance of an interface but can create a class instance and assign it to Interface type variable.(see below code 1)
- A class can implement multiple interfaces. If multiple interfaces have same method, implementing one of the method is enough. If we want to implement interfaces method explicitly you can do it like below in code sample 2.

## Code Sample 1

```C#
interface ILoggable
    {
        int LogId { get; set; }
        DateTime LogDate { get; set; }
    }
    interface IDatabaseLoggable : ILoggable
    {
        void LogToDatabase(string data);
    }

    class DatabaseLogger : IDatabaseLoggable
    {
        public int LogId { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public DateTime LogDate { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public string DatabaseName { get; set; }

        public string GetDatabaseName()
        {
            return "Oracle";
        }
        public void LogToDatabase(string data)
        {
            Console.WriteLine($"Logging -> {data}");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            IDatabaseLoggable database = new DatabaseLogger();
            database.LogToDatabase("Very important data. Top secret");

            //Below code segment create error. Because database variable is IDatabaseLoggable type
            //this interface does not include GetDatabaseName method and DatabaseName property
            database.GetDatabaseName();
            Console.WriteLine(database.DatabaseName);


            Console.ReadLine();
        }
    }
```

## Code Sample 2

```c#
interface ISquare
    {
        void draw();
    }
    interface IRectangle
    {
        void draw();
    }
    class Shape : ISquare, IRectangle
    {
        void ISquare.draw()
        {
            Console.WriteLine("Square shape draw method");
        }

        void IRectangle.draw()
        {
            Console.WriteLine("Rectangle  shape draw method");
        }

        public void draw()
        {
            Console.WriteLine("Shape class draw method");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var shape = new Shape();
            shape.draw(); //Shape class draw method

            ISquare square = new Shape();
            square.draw(); //Square shape draw method

            IRectangle rectangle = new Shape();
            rectangle.draw(); //Rectangle  shape draw method
            Console.ReadLine();
        }
    }
```
