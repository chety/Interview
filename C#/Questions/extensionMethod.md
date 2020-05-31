> What is `extension method` in c#

- **Extension methods** are used to extend our existing type behaviors.
- Extension methods must be `static` and must be located in a `static class`
- **Possible Use Case**
  - Let's say we need a ***Repeat*** method that takes count and splitter(If not provided, default is ",") , join them together and returns it.
  - "chety".Repeat(3,"#") -> "chety#chety#chety"
  
```c#


using System;
using System.Text;

namespace Dummy
{
    /*
        Extension methods are as their names implies, we extend our  current type behaviors. 
        Let's say we want to have a "Repeat" function in string type that repeats our string in given number
        example: "chety".Repeat(3,"-");  -> "chety-chety-chety"
    */
    static class ExtensionMethodProvider
    {
        public static string Repeat(this string word,int count,string splitter =",")
        {
            var builder = new StringBuilder(word.Length * count);
            for (int i = 0; i < count; i++)
            {
                if (i != 0)
                {
                    builder.Append(splitter);
                }
                builder.Append(word);
            }
            return builder.ToString();
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            string name = "Chety";
            Console.WriteLine(name.Repeat(3,"$")); //Chety$Chety$Chety
            Console.ReadLine();
        }
    }
}

```
