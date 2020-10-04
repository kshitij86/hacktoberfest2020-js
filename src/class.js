/**
 * In javascript Classes are special function which is a template to create objects.
 * 
 * Similar to function in classes we can have class expression and class declaration.
 * 
 * An important difference between function declarations and class declarations is that 
   function declarations are hoisted and class declarations are not. 

 * You first need to declare your class and then access it, otherwise it will throw reference error.

 */

 //Let's see with an example

 //class declaration
class Library {

    //constructor method initialize properties when class gets initiated.

    constructor(book,person){
        
        this.book = book;
        this.person = person;
        this.novel = [
            {
             Name:"A Tale of two cities",
             Author:"Charles dickens",
             Genre:"Novel",
             Language:"English"
            },
            {
             Name:"Harry Potter",
             Author:"J.K.Rowling",
             Genre:"Novel",
             Language:"English"
            }
          ];
    };

    //Static methods are defined on the class itself, and not on the prototype 
    //i.e it can be invoked only using class rather than objects.

    static display(obj){

        console.log(`${obj.person} lends ${obj.book.Name}`);
    }

    //method which can be invoked using object

    displayId(id){
        console.log(`${this.person} id is ${id}`);
    }

}


let lendedBook = {
    Name:"Two States",
    Author:"Chetan Bhagat",
    Genre:"Novel",
    Language:"English"
   };

//instance of Library is created   
obj1 = new Library(lendedBook,"James");

//static method is called
obj1.displayId("123");

//method is called
Library.display(obj1);


/**
 
 * Now let's declare a new class which inherits the Library class.
 * To inherit a class "extend" is used.
 * class expression is used to declare the class below.
 * class expression can be named or unnamed.

 */
 let addBook = class add extends Library{

    constructor(book,person,){

        //By calling the super() method in the constructor method, we call the parent's constructor method 
        //and gets access to the parent's properties and methods.

        super(book,person);
    }

    //getters can be used to return values 
    get _book(){

        return this.novel.map(item =>{
            console.log(`Name:${item.Name},Author:${item.Author}`);
        });

    }
    //setters can be used to set values
    set _book(book){
        this.novel.push(book);
    }

    //getters and setters are useful when we have to add special properties before getting or setting an element.
 }

 let obj2 = new addBook(lendedBook,"gary");

 console.log("Books before addition");
 //returns the book that are already in library.
 obj2._book;
 
 //adding the "lendedbook" in library.
 obj2._book = lendedBook;
 
 console.log("Books after addition");
 //Now if you get the books in library the lended book will also be there.
 obj2._book;