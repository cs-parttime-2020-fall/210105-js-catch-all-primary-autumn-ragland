# 21 01 05 JS "Catch All" Primary

Add comments above each exercise solution (at minium). HTML and JS files have already been included in the assignment. Push after completing each exercise. Comment out any broken code before 9PM submission and provide context on what's not working. 

## Review 

Create a class `Artist`. An `Artist` object will have properties name, popular medium, number of works, and is/isn't currently showing all set in the constructor. Create an `Artist` class method that outputs all artist properties as a formatted message : 
```
The artist NAME primarily uses MEDIUM and IS/IS NOT currently showing. They have a total of NUMBER works
```
Create an instance of the `Artist` class and call the class method to output all properties.

## Scope 

What will output to the console from the code snippet below.
```JS
let a = 1; 
function b() { 
    a = 10; 
    return; 
} 
b(); 
console.log(a);    
```

Explain your answer below : 
```
The global variable `a` is equal to one and the value is updated in the function `b`. the function `b` is called before logging the value of the variable `a` so the value of `a` when logged is the updated value from the function `b`
```

## Try Catch 

What will output to the console from the code snippet below.
```JS
experimentWithTries();
function experimentWithTries() {
    try {
        try {
            console.log('Starting the process...');
            throw new Error('Something went wrong');
            console.log('Ending the process...');
        }
        catch (ex) {
            console.log(ex);
            throw new Error(ex);
        }
        finally {
            console.log('The inner finally block')
        }
    }
    catch (ex) {
        console.log(ex);
    }
    finally {
        console.log('The outer finally block')
    }
console.log('Glad to be done!');
}
```
Explain your answer below : 
```
The inner try block executes first. So "starting the process" is logged then a message is thrown to the inner cath. The "ending the process" message is not logged because it comes after the throw. The inner catch logs the message and throws to the outer catch. The finally message is logged before the outer catch message. The outer catch message is logged then the outer finally. Lastly, the console log outside the outer try catch is logged. 
```

## Switch Statement + Review
Create student, teacher, and parent arrays to keep track of attendance at parent teacher conferences. Prompt the user to enter student, parent or teacher and separately prompt them to enter their name. Add their name to the correct array based on their first input using a switch case. Then confirm if the user would like to sign in another person or cancel. If they choose okay continue the process. When they choose cancel stop prompting them and output the number of people in each array in the message : 
```
NUMBER students NUMBER teacher and NUMBER parents came to tonight's parent teacher conferences. 
```
