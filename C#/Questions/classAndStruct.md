> What are the differences between structs and classes?

| **Class** | **Struct** |
| --- | --- |
| Support Inheritance | Does not support inheritance. _Support interface implement_ |
| Reference type. It's data is stored in ***Heap***. Hence it is ***slower*** than struct | It's data stored in ***Stack***. ***Faster*** than Class |
| Has Destructors. | Does not support Destructors |
| You can create _Default constructor_. When you create, class does not have default constructor anymore. | You can not create default constructor in stack, ***it is not allowed***.Even you create a constructor with parameters, stack still continue to have default constructor  |
| Can have abstract,virtual , protected ..etc access modifiers with its members(method). | Since we can not use inheritance with struct, this access modifiers are not allowed |

## Code sample 

```C#

  interface IGetable
    {
        int GetVAlue();
    }
    struct MyStruct : IGetable
    {
        private int PrivateProperty { get; set; }
       

        public int GetVAlue()
        {
            return 45;
        }

        /// <summary>
        /// Structs does not support destructors
        /// </summary>
        ~MyStruct()
        {

        }

        /// <summary>
        /// virtual,abstract , protected is not allowed within stack. 
        /// Because it does not support inheritance
        /// </summary>
        /// <returns></returns>
        protected int GetValue()
        {
            return 49;
        }

        /// <summary>
        /// Stacks can not have explicit parameterless constructor. Even we create a constructor 
        /// with parameter, stack still will have the parameterless constructor
        /// </summary> 
        public MyStruct()
        {

        }
    }
```
