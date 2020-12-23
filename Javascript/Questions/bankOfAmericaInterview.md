1- Given a String. Convert the String to alternate lowercase, uppercase.
  - Input: "This is a book". Output: "ThIs Is A bOoK"
  
```js
function alternateLowerCase(sentence){
    const words = sentence.split(/\s+/);
    const vowels = "aeiouAEIOU";
    return words.map(word => {
        const processed = new Set();        
        return word.split("").map(ch => {
            if(!processed.has(ch) && vowels.includes(ch)){
                processed.add(ch);
                return ch.toLocaleUpperCase() === ch ? ch.toLocaleLowerCase() : ch.toLocaleUpperCase();
            }
            return ch;
        }).join("");               
    }).join(" ")
}
```

2- Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp
  - Input: exp = “[()]{}{[()()]()}” Output: Balanced.
  - Input: exp = “[(])”             Output: Not Balanced 
  
  ```js
  function isBalanced(expression){
    const brackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }  
    const closingMatches = [];
    for(const char of expression.split("")){
        if(char in brackets){
            closingMatches.push(brackets[char]);
        }else{
           if(closingMatches.slice(-1)[0] !== char){
                return "Unbalanced";
            }
            closingMatches.pop(); 
        }
    }
    return "Balanced";
}
  ```
