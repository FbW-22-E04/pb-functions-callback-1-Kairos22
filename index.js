// Callbacks
// 1 Greet Message
function greet (name) {
    return `Good Morning, ${name}`; 
        
}

console.log(greet('John')); 

console.log('---------------------------1');

// 2 Greet Users
const persons = ['John', 'Peter', 'Mark'];

const messages = persons.map(greet);
console.log(messages);  

console.log('------------------------2');