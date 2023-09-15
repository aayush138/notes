/*
 * JavaScript most popular programming languages that makes websites dynamic and interactive. Used to create apps, games & process data, so on!
 * A computer program is a list of "instructions" to be "executed" by a computer.
 * In a programming language, these programming instructions are called statements.
 * 'console' is part of the web browser which allows to log messages, run JavaScript code, errors and warnings.
 * Semi-colons is optional in javascript but recommended to insert to avoid bugs. JS engine use Automatic Semicolon Insertion (ASI) to insert missing one.
*/


// First JavaScript Program: 

    /*
        console.log("Hello JavaScript!");   // Display a text to the console.
        console.log(38);

        alert("This is Browser default alert with JavaScript!");       // Used & Works in web browser to create alert message.


        let test= " JavaScript";                                                                   
        console.log(`This is value of ${test} print to console after substitution.`);
    */



   
// JavaScript in HTML:

    /*
        <body>
            <script>
                console.log("JavaScript in HTML");
            </script>
        </body>
    */
 



// Comments: The compiler ignores everything that appears in the comment, so none of that information affects the result.

    // Single line: Commenting using single-line comments.

    /* Multi Line:
                Commenting using multi-line comments.
    */            



  
/* Name Convention: There are several naming rules that you need to follow in JavaScript
        * variable names must begin with a letter, an underscore _ or a dollar sign $.
        * variable names cannot contain spaces.
        * variable names can only contain letters, numbers, underscores, or dollar signs.
        * variable names are case-sensitive, which means that, for example, Name and name variables are different.
*/




/* JavaScript Operators:
    * Arithmatic Operators:
    	**	Exponentiation(ES2016)	    10 ** 2
    	*	Multiplication	            10 * 5
    	/	Division	                10 / 5
    	%	Modulus (Remainder)	        10 % 5
    	+	Addition	                10 + 5
    	-	Subtraction	                10 - 5
        +	Concatenation	            "John" + "Doe"
        ++	Increment                   only with variable
        --	Decrement                   only with variable

    * Assignment Operators:
    	=	Simple Assignment	            x = y
    	:	Colon Assignment	            x: 5
    	+=	Addition Assignment	            x += y
    	-=	Subtraction Assignment	        x -= y
    	*=	Multiplication Assignment	    x *= y
    	**=	Exponentiation Assignment	    x **= y
    	/=	Division Assignment	            x /= y
    	%=	Remainder Assignment	        x %= y    

    * Comparision Operators:    
        <	Less than	                    x < y 
        <=	Less than or equal	            x <= y
        >	Greater than	                x > y
        >=	Greater than or equal	        x >= y
        ==	Equal	                        x == y
        ===	Strict equal (Data Type)	    x === y
        !=	Unequal	                        x != y
        !==	Strict unequal	                x !== y  

    * Logical operators:    
    	&&	AND	                            x && y
    	||	OR	                            x || y
    	??	Nullish Coalescing ES2020	    x ?? y                     // Replace x with y if x is null.

    * Other operators:  
        ?:	Condition	                    ? "yes" : "no"             // let voteable = (age < 18) ? "Too young":"Old enough";

    	typeof	    Data Type	            typeof x
        instanceof	Instance of Object	    x instanceof Array | Object | String | Number       // obj instanceof class
        in	        Property in Object	    "PI" in Math
*/




/* JavaScript DataTypes: It's dynamic in nature like python(change based on value assigned)
        String	    represents textual data	                                            'hello', "hello world!" etc
        Number	    an integer or a floating-point number (64-bit floating point)	    3, 3.234, 3e-2 etc.
        BigInt	    an integer with arbitrary precision	                                900719925124740999n , 1n etc.
        Boolean	    any of two values: true or false	                                true and false, 1 and 0 (numerical representation)
        undefined	a data type whose variable is not initialized	                    let a;
        null	    denotes a null value	                                            let a = null;
        Symbol	    data type whose instances are unique and immutable	                let value = Symbol('hello');
        Object	    key-value pairs of collection of data (Object, Array, Date)	        let student = { };

        Note: In JavaScript 'typeof' keyword is used to get the datatype of variable.

        Example:
            // Strings:
            let color = 'Yellow Stone';                      // Single-quote
            let lastName = "John Wick";                      // Double-quote
            let car = "";                                    // The value is "", the typeof is "string"
            let msg = 'She said "Yes!"';
            Note:- Everything in quotes is a string, even numbers.

            // Numbers:
            let length = 16;
            let weight = 7.5;
            let y = 123e5;    // 12300000 (Exponential Notation)
            let z = 123e-5;   // 0.00123 (Exponential Notation)

            // Bigint(ES2020):
                let x = BigInt("123456789012345678901234567890");

            // Booleans
            let x = true;
            let y = false;

            // Undefined
            let x; 

            // Object:
            const person = {firstName:"John", lastName:"Doe"};

            // Array object:
            const cars = ["Saab", "Volvo", "BMW"];

            // Date object:
            const date = new Date("2022-03-25");
*/        




// Simple Operations:

    /*
        console.log(5+2);
        console.log(5-2);
        console.log(5*2);
        console.log(5/2);
        console.log(9**(1/2));
        console.log((10-2.5)+5+2-6*3/4);      // BODMAS Rule for single line mathematical operations as Operator Precedence.
    */

   /*
        Postfix increment: Using then increment
            let x = 5;
            console.log(x++);                     // 5
            console.log(x);                       // 6

        Prefix increment: Increment then use    
            let x= 8
            console.log(++x);                     // 9
            console.log(x);                       // 9

        (Same for decrement)    
    */

    /* Example: How many items left after putting 200 items into box where each box contain 7 items?
        let items = 200;
        console.log(items%7);
    */    


// Example: How many seconds in a month?

    /* 
        30 days
        1 day = 24 hours
        1 hour = 60 minutes
        1 minute = 60 seconds
        
        console.log(30*24*60*60); 
    */
    

    
/* Variables: Container for storing values which is used throughout the program. There are 3 types of variables (2 types basically).

    * var   (1995-2015) : Older way of define varible. Should be used only when older browsers support is needed.
    * let   (2015)      : Newer & recommend way of defining varibles.
    * const (2015)      : Used when value & type should not be changed like Array, Objects.


    /* let:
        * 'let' (recommended) is the modern way of declaring variables and has a number of advantages over 'var' which in used in older version of JavaScript.
        * For example, 'var' allows you to re-declare variables with the same name, while 'let' results in an error, which makes the code safer (var name = 'James';)
        
        let name;                        // Initialization
        name = "James";                  // Assigning value
        console.log(name);               // Output

        OR
        
        let name = "James";
        console.log(name);


        let x = 5, name = 'Ron', z = 8; // Multiple assignment
        console.log(x, name, z);


        let age= 13;                    // Dynamic nature of Js variable.
        age= "patric";
        console.log(age);
    */


    /* constants:
        * There can be cases when you need to tell the program that the variable can't change its value throughout the program. Re- declaration not allowed.
        * Constants are similar to variables and must have a value when declared using 'const' keyword and not allowed to change their value.
        
        const color = 'red';
        console.log(color);
        color = 'yellow';               //this will result in error
        
        
    */    


    // 'let' VS 'var' VS 'const' variable:       
        /*
            _____________________________________________________________________________________________
            |   Feature variable	    |   'let'	        |   'var'	           |     'const'        | 
            |   Scope	                |   Block-scoped*   |   Function-scoped*   |     Block-scoped*  |
            |   Hoisting*	            |   Hoisted		    |   Hoisted            |     Hoisted        |
            |   Reassignment	        |   Allowed		    |   Allowed            |     Not allowed    |
            |   Redeclaration           |   Not allowed	    |   Allowed	           |     Not allowed    |
            |   Initial value required  |   No              |   No	               |     Yes            |
            ---------------------------------------------------------------------------------------------

            * Block-scoped    : Only accessible within the block (e.g., inside loops or conditionals) where they are declared. 
            * Function-scoped : It's accessible within the nearest enclosing function, not just the block.
            * Hoisting        : Means the declarations are moved to the top of their containing function or block during compilation. So declaration need before use.
        */        




// Input in nodejs:
    /*
        npm install readline-sync
        const readline = require("readline-sync");
        let x= Number(readline.question());             // Type convertion String -> Number
        console.log(x);
    */




// Strings:
    /* Escape Characters: backslash(\) used to represent escape characters denote certain things in string like newline, tabs, etc.
        \n  : new-line
        \t  : tab
        \'  : single-quote
        \"  : double-quote


        console.log('I'm happy');                               //error
        console.log('I\'m happy');                              // single-quote as escape character
        console.log("She said \"Yes!\"");                       // double-quote as escape character
    */


    /* Template-literals: 
            * Another way of creating strings. 
            * Having Variable substitution feature "${variable}" , ability to use both qutoes, multiline strings without new-line or tab escape character. 
            * Back-tick(``) is used instead of quotes. 
             
    
            let msg = 'dinner';
            let temp = `I'm happy, she said "Yes" for ${msg}!
            Isn't it awesome?`;
            console.log(temp);
    */ 

   
    /* Example: Country card with capital?
    
        let country = 'India';
        let capital = 'Delhi';
        console.log(`Country: ${country}, Capital: ${capital}`);
    */  
   

    /* String Concatenation: Addition operator(+) is used to join 2 or more strings.

        let x= "Four plus three is not ";
        console.log(x + "4" + "3");
    */
