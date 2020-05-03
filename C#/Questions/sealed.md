> What is the purpose of the sealed keyword in C# ?

1. In classes if you define a class sealed, that class can not be inherited anymore. You just prevent the inheritance from this class
2. In methods if you define a method sealed, you can not override this method in child/subclasses anymore.

***

```c#
   internal sealed class LonelyClass
    {
        public string NoManIsAnIsland { get; set; }
    }

    //Error.Can not derive from a sealed class
    internal class RobinsonCrouse : LonelyClass
    {

    }
```
***
```c#
 internal  class LonelyClass
    {
        public virtual string GetName()
        {
            return "Mr Lonely";
        }
    }

    internal class RobinsonCrouse : LonelyClass
    {
        //Sub classes that inherit from RobinsonCrouse can not override GetName anymore
        public sealed override string GetName()
        {
            return "Robinson Crouse";
        }

    }

    internal class ChildRobinson : RobinsonCrouse
    {
        //we can not override GetName method anymore. Because it is defined sealed in base class
    }
```
