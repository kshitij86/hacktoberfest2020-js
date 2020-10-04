/* 
    * Prototypes are the mechanism by which JavaScript objects inherit features from one another.
    
    * This mechanism can be used to inherit properties from function constructor
    and also we can add properties and methods to the function constructor .

    * This is called prototypical chaining.With the help of prototypical chaining 
    inheritance can be acheived.

*/

//Initialisation of constructor function
function Library (book) {
    
    //Each time a new object is created this takes the value of the new object.
    this.book = book;

    //property definition
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

     this.science = [
                    {
                     Name:"A Brief History of Time",
                     Author:"Stephen Hawking",
                     Genre:"Science",
                     Language:"English"
                    },
                    {
                     Name:"Cosmos",
                     Author:"Carl Sagan",
                     Genre:"Science",
                     Language:"English"
                    }
                ];
    
    //this method invokes when the object instance is created
    this.FindCategory(this.book);
}

//method defined on the constructor prototype of Library

Library.prototype.FindCategory = function(book){

    //Here we are categorising books based on "Genre"
    switch(book.Genre){
        case "Novel":
            this.Add_Novel(book);
            break;
        case "Science":
            this.Add_Science(book);
            break;
        default:
            console.log("Libraray has no category on this Genre!");
    }
}

Library.prototype.Add_Novel = function(engBook){

//this.novel comes from Library(constructor function) which is inherited using prototype chain 

    this.novel.push(engBook);
    console.log("Novel is added successfully")
}


Library.prototype.Add_Science = function(sciBook){

//this.science comes from Library(constructor function) which is inherited using prototype chain 

    this.science.push(sciBook);
    console.log("Science Book added successfully");
}

let book1 = {
    Name:"Two States",
    Author:"Chetan Bhagat",
    Genre:"Novel",
    Language:"English"
   };

let book2 = {
    Name:"Infinite Powers",
    Author:"Steven Strogatz",
    Genre:"Science",
    Language:"English"
   }

//a new object is created that adds novel

let novel = new Library(book1);

//a new object is created that adds science book

let science = new Library(book2);

//Two objects have two different reference of Libraray(constructor function) which u can check by logging out
console.log(novel);

console.log(science);