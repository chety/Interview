> What is `operator overloading` in C#?

- We can **override operators**(+,-,== ...etc) according to our needs
- Override operators means _change their default behavior_ as we need.
***
```c#
using System;

namespace Dummy
{
    class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public int Salary { get; set; }

        public static bool operator ==(User user1, User user2)
        {
            return user1.FirstName == user2.FirstName && user1.LastName == user2.LastName;
        }

        public static bool operator !=(User user1, User user2)
        {
            return !(user1 == user2);
        }

        public static string operator +(User user1, User user2)
        {
            return $"Sum of the salaries is -> {user1.Salary + user2.Salary}";
        }

        public override bool Equals(object obj)
        {
            if (obj is User user)
            {
                return this.FirstName == user.FirstName && this.LastName == user.LastName;
            }
            return base.Equals(obj);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

    }
    class Program
    {
        static void Main(string[] args)
        {

            var user1 = new User
            {
                FirstName = "Chety",
                LastName = "Clooney",
                Salary = 15000
            };

            var user2 = new User
            {
                FirstName = "Chety",
                LastName = "Clooney",
                Salary = 15000
            };

            /* user1 and user2 are different object hence they must be different in normal case.
             * But we overload operator "==" and "Equals" method according to our needs :)
            */
            Console.WriteLine($"Is Equal: {user1 == user2}"); //true
            Console.WriteLine($"Is Equal With Equals method: {user1.Equals(user2)}"); //true

            /*
            Normally "+" operator can not be applied to operands of type User objects but 
            we override default behavior of the "+" operator. Our new behavior will sum
            salaries of the given users
            */
            Console.WriteLine($"Sum of salaries: {user1 + user2}"); //Sum of the salaries is -> 30.000

            Console.ReadLine();
        }
    }
}

```
