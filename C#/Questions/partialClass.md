> Explain `Partial class` in C#?

- Partial classes enable multiple people to work on the same file simultaneously.
- Enables us to work with system generated code. For example in `Windows Forms` projects
    there is a _form.generated.cs_**[partial]** and  _form.cs_**[partial]**. If our generated class was not partial,
    code we write inside form.cs would be overridden every time when we build our project.
- **In compile time these partial classes are merged into one class by the compiler.**
- Classes,interfaces,methods can be partial.
 
 ### Datagrid.core.cs
 ```C#
  /// <summary>
    /// classes can be partial.
    /// </summary>
    partial class DataGrid
    {
        /*
             1- partial classes enables us to work on the same file simultaneously.
             2- Enables us to work with system generated classes. For example in Windows Forms
             there is a form.generated[partial] class and  form.cs[partial] class
             In compile time these partial classes are merged into one class.
             3- Classes,interfaces,methods can be partial
         */

        //partial methods must be Private and have void return type.
        //can not be accessed from outside class
        partial void PrintGridCreator();

        public string GiveClassInfo()
        {
            return "Datagrid.core";
        }

    } 
 ```
 
 ### Datagrid.customization.cs
 ```c#
     /// <summary>
    /// classes can be partial.
    /// </summary>
    partial class DataGrid
    {
        //This method is used to access our partial method from outside
        public void PrintCreator()
        {
            PrintGridCreator();
        }

        //partial methods must be Private and have void return type.
        //can not be accessed from outside class
        partial void PrintGridCreator()
        {
            Console.WriteLine("ag-Grid");
        }

        public string GetCustomizationInfo()
        {
            return "Office-2020 blue theme";
        }
    }
 ```
 
 ### Main Program
 ```c#
 using System;

namespace Dummy
{
    
    class Program
    {
        static void Main(string[] args)
        {
            var dataGrid = new DataGrid();
            Console.WriteLine(dataGrid.GetCustomizationInfo());
            Console.WriteLine(dataGrid.GiveClassInfo());
            dataGrid.PrintCreator();

            Console.ReadLine();
        }
    }
}

 ```
