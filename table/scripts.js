const array = [ // Define an array of objects, where each object represents a person with first and last names
    {
        firstname1: 'Géza', // The primary first name of the person
        firstname2: 'Ferenc', // The secondary first name of the person
        lastname: 'Kocsis', // The last name of the person
    },
    {
        firstname1: 'Mária', // The primary first name of the person
        firstname2: 'Júlia', // The secondary first name of the person
        lastname: 'Horváth', // The last name of the person
    },
    {
        firstname1: 'Ferenc', // The primary first name of the person
        lastname: 'Balogh', // The last name of the person
    },
    {
        firstname1: 'Gábor', // The primary first name of the person
        firstname2: 'Attila', // The secondary first name of the person
        lastname: 'Horváth' // The last name of the person
    },
]

class Person { // Define a class to represent a person
    constructor(object) { // Constructor initializes the properties of the class based on the passed object
        this.firstname1 = object.firstname1 // Assign the value of `firstname1` from the object to the instance
        this.firstname2 = object.firstname2 // Assign the value of `firstname2` from the object to the instance
        this.lastname = object.lastname // Assign the value of `lastname` from the object to the instance
    }
    render(parent) { // Method to render the person data as a table row
        const sor = document.createElement('tr') // Create a new table row (tr) element
        parent.appendChild(sor) // Append the row to the parent element (usually a tbody)

        const td1 = document.createElement('td') // Create a new table cell (td) for the last name
        td1.innerHTML = this.lastname // Set the innerHTML of the cell to the person's last name
        sor.appendChild(td1) // Append the cell to the row

        const td2 = document.createElement('td') // Create another table cell for the primary first name
        td2.innerHTML = this.firstname1 // Set the innerHTML of the cell to the primary first name
        sor.appendChild(td2) // Append the cell to the row

        if (this.firstname2 == undefined) { // Check if the secondary first name is undefined
            td2.colSpan = "2"; // If undefined, span the primary first name cell across two columns
        } else { // If the secondary first name exists
            const td3 = document.createElement('td') // Create a new table cell for the secondary first name
            td3.innerHTML = this.firstname2 // Set the innerHTML of the cell to the secondary first name
            sor.appendChild(td3) // Append the cell to the row
        }
    }
}

function init() { // Function to initialize the rendering of the table
    const tbody = document.getElementById('tbodyId') // Get the tbody element where rows will be added
    for (const elem of array) { // Loop through each object in the array
        const person = new Person(elem) // Create a new Person instance for each object
        person.render(tbody) // Call the render method to append the row to the tbody
    }
}

class FormController { // Define a class to handle form-related functionality
    #form; // Private property to hold the form element
    
    get lastname(){
        const v = this.#getInputById('lastname')
        return v.value
    }

    get firstname1(){
        const v = this.#getInputById('firstname1')
        return v.value
    }

    get firstname2(){
        const v = this.#getInputById('firstname2')
        return v.value
    }
    
    constructor(form) { // Constructor to initialize the FormController
        this.#form = form // Assign the passed form element to the private property
    }
    
    
    #getInputById(id){
        return this.#form.querySelector('#' + id)
    }
}

function init(){
    const tbody = document.getElementById('tbodyId')
    const form = document.getElementById('form')
    
    const controller = new FormController(form)
    form.addEventListener('submit', function(e){
        e.preventDefault()
        const obj = {
            lastname: controller.lastname,
            firstname1: controller.firstname1,
            firstname2 : controller.firstname2
        }
        const pers = new Person(obj)
        pers.render(tbody)
    })

    for(const elem of array){
        const person = new Person(elem)
        person.render(tbody)
    }
}

init(); // Call the init function to start the rendering process