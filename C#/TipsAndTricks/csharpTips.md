> Below are some `c#` _new features_ examples that can make a developer life easier

```c#
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;

namespace TipsAndTricks
{
    class Program
    {
        static string[] words = new[]
            {
                "One",
                "Two",
                "Three",
                "Four",
                "Five",
                "Six",
                "Seven",
                "Eight",
                "Nine",
                "Ten"
            };
        static void Main(string[] args)
        {
            //DictionaryExample();
            //SwitchExample();
            //IndexExample();
            //RangeExample();

            //Discard example - 1
            //var robot = new Robot
            //{
            //    IsDangerous = false,
            //    Manifacturer = "Chety Robotics",
            //    WheelCount = 4
            //};
            ////I do not want to use wheelcount, to satisfy compiler i use underscore to discard this value
            //var (producer,_ ,isDangerous) = robot.GetStats();
            //Console.WriteLine($"{producer} produces {isDangerous} robots");

            //Discard example - 2
            //DiscardExample();

            Console.ReadLine();
        }

        static void DictionaryExample()
        {
            var languages = new Dictionary<string, int>();
            languages.Add("C#", 2001);
            languages.Add("Java", 1995);
            languages.Add("Golang", 2006);

            string key = "Java";

            //Not a thread safe approach. When you read contains key, before reading this value 
            //another thread may delete this key(Race conditions)
            if (languages.ContainsKey(key))
            {
                Console.WriteLine($"{key} is founded on {languages[key]}");
            }

            //Recommended way. Even a thread delete this key from dictionary, 
            //our key value will be cached in foundedYear variable
            if (languages.TryGetValue(key, out int foundedYear))
            {
                Console.WriteLine($"{key} is founded on {foundedYear}");
            }
        }

        //switch case with pattern matching is awsome
        static void SwitchExample()
        {
            var numbers = Enumerable.Range(1, 100);
            var eighties = new List<int> { 80, 81, 82, 83, 84, 85, 86, 87, 88, 89 };
            string message = "";
            foreach (int num in numbers)
            {
                switch (num)
                {
                    case 42:
                        message = "Meaning of the life";
                        break;
                    case var luckyNumber when (luckyNumber % 10 == 0):
                        message = "Divided by ten";
                        break;
                    case var eightyNum when (eighties.Contains(eightyNum)):
                        message = "eighty number";
                        break;
                    default:
                        message = "Nothing fancy";
                        break;
                }
                Console.WriteLine($"{num:D2}: {message}");
            }

        }

        static void IndexExample()
        {
            //index example
            var firstIndex = new System.Index(0);
            var lastIndex = new Index(1, fromEnd: true);
            Console.WriteLine($"First Value: {words[firstIndex]}");
            Console.WriteLine($"Last Value: {words[lastIndex]}");

            //hat operator(^). It is counting from backward. last element is ^1
            Console.WriteLine($"First Element via hat operator: {words[^words.Length]}");
            Console.WriteLine($"Last Element via hat operator: {words[^1]}");

            //hat operator also can be used with strings
            string name = "Chety";
            Console.WriteLine($"{name[^2]}"); //t

            //Range Example
        }

        static void RangeExample()
        {
            //let say i want to grap "four" to "seven" from words array
            //If you know LINQ then it is easy peasy
            var query = from word in words
                        select word;

            IEnumerable<string> wordsInRange = query.Skip(3).Take(4);
            wordsInRange.ToList().ForEach(word => Console.Write($"{word} ")); //Four Five Six Seven
            Console.WriteLine("\n------------------");


            var range = new Range(start: 8, end: 10);
            words[range].ToList().ForEach(word => Console.Write($"{word} ")); //nine ten
            Console.WriteLine("\n------------------");

            //[0..4] is known as slicing
            words[0..4].ToList().ForEach(word => Console.Write($"{word} ")); //one two three four
            Console.WriteLine("\n------------------");

            //also we can combine hat operator with slice
            string name = "Chety is an awsome full time daddy";
            Console.WriteLine($"{name[6..^0]}"); //is an awsome full time daddy
        }

        static void DiscardExample()
        {
            var returnValues = new List<string> { "123", "456", "abc", "def" };
            foreach (string item in returnValues)
            {
                //I am not interested in return value, just want to check its state
                //to keep compiler stasfied use discard operator which is basically underscore(_)
                //Just like golang :)
                if (int.TryParse(item, out _))
                {
                    Console.WriteLine($"{item} is a valid number");
                }
                else
                {
                    Console.WriteLine($"{item} is a UNVALID");
                }

            }

        }

    }

    class Robot
    {
        public int WheelCount { get; set; }
        public string Manifacturer { get; set; }
        public bool IsDangerous { get; set; }

        public (string, int, bool) GetStats()
        {
            return (Manifacturer, WheelCount, IsDangerous);
        }

    }
}

```
