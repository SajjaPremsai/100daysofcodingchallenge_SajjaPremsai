class Contact{
    constructor(name,email,phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displaycontact(){
        console.log(`Name : ${this.name} \n Email : ${this.email} \n Phone : ${this.phone}`)
    }
}


let ContactList = []

function InsertContact(name,email,phone){
    const contact = new Contact(name,email,phone);
    ContactList.push(contact)
}

function DisplayContacts(){
    for(let i = 0 ; i < ContactList.length; i++){
        ContactList[i].displaycontact()
    }
}

function ViewContact(name){
    let x = ContactList.find((contact)=>{
        contact.name.toLowerCase() === name.toLowerCase()
    })
    if(x){
        x.displaycontact()
    }
    else{
        console.log("Contact doesn't exists")
    }
}


// Adding Contacts
InsertContact('Alice Johnson', 'alice.johnson@example.com', '123-456-7890');
InsertContact('Bob Smith', 'bob.smith@example.com', '098-765-4321');

// Viewing Contacts
console.log('Viewing all contacts:');
DisplayContacts();

// Searching for a Contact
console.log('Searching for Bob:');
ViewContact('Bob Smith');