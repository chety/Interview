> Explain `event` mechanism in C#

- Events are automatically raised when we interact with the system.
- When click a button, writing text,drag&drop some images, resizing window ...etc  corresponding events will be `raised` automatically
- Events are used with `delegates`
- ***Case:***
    - If you have an inventory system, and your stock is below some control value, you might want to be notified via email/sms
    - This is a perfect example for event mechanism. When your stock is below you can raise an event
***    
```c#
using System;

namespace Dummy
{

    class Car
    {
        private int _speed;
        public event Action<int> SpeedLimitEvent;
        public string Model { get; set; }
        public int Speed
        {
            get => _speed;
            set
            {
                //If our speed is above 80 raise event
                if (value > 80 && SpeedLimitEvent != null)
                {
                    SpeedLimitEvent(value);
                }
                _speed = value;
            }
        }

    }

    class Program
    {
        static void Main(string[] args)
        {
            var car = new Car
            {
                Model = "Lamborgini"
            };
            car.SpeedLimitEvent += (speed) =>
            {
                Console.WriteLine($"Speed limit is exceeded. Current Speed:::{speed}");
            };
            for (int i = 50; i <= 100; i += 5)
            {
                System.Threading.Thread.Sleep(400);
                car.Speed = i;
                Console.WriteLine($"Car speed:::{i}");
            }
            Console.ReadLine();
        }

    }
}

```
