> Explain `delegate` mechanism in C#

- `Delegates` are simply references to `methods` in C#. It is just like reference variables. 
- Reference variables(_in stack_) keeps references to the objects(_in the heap_). 
- Delegates keep reference to the corresponding methods. There are 2 kinds of delegate
            1 - **Singlecast Delegate:** Delegate which points only 1 method is known as singlecast
            2 - **Multicast Delegate:** As it's name implies that, delegate which points multiple methods
            is known as multicast delegate.
         
- The most important 2 delegates in .NET Framework are **Func and Predicate**. Almost  these 2 delegates    
provides all solution to our needs. There is no need to declare custom delegates in much situations.

```c#
using System;
using System.Collections.Generic;

namespace Dummy
{
    //our delegate can point to methods which has this signature -> bool(ProgrammingLanguage)
    //public delegate bool ProgrammingLanguageDelegate(ProgrammingLanguage language);

    public class ProgrammingLanguage
    {
        public string Name { get; set; }
        public string Company { get; set; }
        public int Year { get; set; }
        public bool IsObjectOriented { get; set; }

        public override string ToString()
        {
            return $"Name: {Name}, Company: {Company}, Year: {Year}";
        }

        //Thanks to the delegates, we can abstract our filter . First Version
        //public static void FilterLanguage(List<ProgrammingLanguage> languages, ProgrammingLanguageDelegate filter)
        //{
        //    foreach (var language in languages)
        //    {
        //        if (filter(language))
        //        {
        //            Console.WriteLine(language);
        //        }
        //    }
        //}

        // Instead of declare custom delegate like above , we can use .NET provided predicate
        public static void FilterLanguage(List<ProgrammingLanguage> languages, Predicate<ProgrammingLanguage> filter)
        {
            foreach (var language in languages)
            {
                if (filter(language))
                {
                    Console.WriteLine(language);
                }
            }
        }

    }

    class Program
    {
        static void Main(string[] args)
        {
            var languageList = new List<ProgrammingLanguage> {
                new ProgrammingLanguage{ Name = "C#", Company = "Microsoft", Year = 2001, IsObjectOriented = true},
                new ProgrammingLanguage{ Name = "Java", Company = "Sun", Year = 1990, IsObjectOriented = true},
                new ProgrammingLanguage{ Name = "Javascript", Company = "Netscape", Year = 1995, IsObjectOriented = false},
             };

            //via delegate i can pass functions as parameters to the another function. H

            //list object oriented languages. I can pass a predicate function to second parameter
            ProgrammingLanguage.FilterLanguage(languageList, isObjectOrientedLanguage);

            //Lambda functions are easier way to write predicates. This is the same as the above one
            //ProgrammingLanguage.FilterLanguage(languageList, l => l.IsObjectOriented == true);

            //list object which is founded after 1990
            ProgrammingLanguage.FilterLanguage(languageList, l => l.Year > 1990);

            Console.ReadLine();
        }

        static bool isObjectOrientedLanguage(ProgrammingLanguage language)
        {
            return language.IsObjectOriented == true;
        }

    }
}

```
  
