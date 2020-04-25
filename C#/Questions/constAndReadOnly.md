> ***What are differences between const and readonly keyword ?***

- **Const** variable must be initialized when declared._Compile Time Checking._ You can not initialize in other places. 
- Const variable behaves like **static variable**. *You can access const variable via class not the object*.
- You can not apply Const to reference types except **strings**.(Class,Array,Interface,Delegate ...etc)
- Readonly behaves like const but has some subtle difference. You do not have to initialize it immediately.
- You can initialize a readonly variable in _constructor_. **Run Time Checking**
- You can access a readonly variable via _class object instance_. 


