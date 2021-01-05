console.log(`21 01 05 JS "Catch All" Primary`);

// REVIEW - CLASSES

// Create a class Artist. 
class Artist {
    // An Artist object will have properties name, popular medium, number of works, and is/isn't currently showing all set in the constructor. 
    constructor(artistName, popularMedium, numberOfWorks, isShowing){
        this.artistName = artistName;
        this.popularMedium = popularMedium;
        this.numberOfWorks = numberOfWorks;
        this.isShowing = isShowing;
    }

    // Create an Artist class method that outputs all artist properties as a formatted message : The artist NAME primarily uses MEDIUM and IS/IS NOT currently showing. They have a total of NUMBER works
    outputProperties(){
        let showing = "is not"
        if(this.isShowing){
            showing = "is"
        }
        console.log(`The artist ${this.artistName} primarily uses ${this.popularMedium} and ${showing} currently showing. They have a total of ${this.numberOfWorks} works`);
    }
}

// Create an instance of the Artist class 
let exampleArtist = new Artist("Example", "ink", 14, false);
console.log(exampleArtist);

// call the class method to output all properties.
exampleArtist.outputProperties();

// SCOPE
let a = 1; 
function b() { 
    a = 10; 
    return; 
} 
b(); 
console.log(a); 

// TRY CATCH
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

// SWITCH + REVIEW
// Create student, teacher, and parent arrays to keep track of attendance at parent teacher conferences.

let students = [];
let parents = [];
let teachers = [];

// confirm if the user would like to sign in another person or cancel. If they choose okay continue the process. 

additionalSignIn = true;
while (additionalSignIn) {
    // Prompt the user to enter student, parent or teacher and separately prompt them to enter their name.
    let signInType = prompt("Are you a parent, teacher, or student.");
    let signName = prompt("Enter your name.");

    // Add their name to the correct array based on their first input using a switch case.
    switch (signInType) {
        case "parent":
            parents.push(signName);
            break;
        case "teacher":
            teachers.push(signName);
            break;
        case "student":
            students.push(signName);
            break;
    }
    additionalSignIn = confirm("Do you want to sign in an additional person?");
}
// When they choose cancel stop prompting them and output the number of people in each array
console.log(`${students.length} students ${teachers.length} teacher and ${parents.length} parents came to tonight's parent teacher conferences.`);
