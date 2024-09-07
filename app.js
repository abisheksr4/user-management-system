let users = []; //empty array
let userscontainer = document.getElementById('userscontainer');
let alert = document.getElementById('alert');

function renderusers() {  //2nd function
    userscontainer.innerHTML = "";

    // Using for loop to iterate through the users array
    for (let i = 0; i < users.length; i++){
        let user = users[i];  // Getting the current user
        let div = document.createElement('div');
        let name = document.createElement('p');
        let email = document.createElement('p');
        div.classList.add('user');
        
        name.innerText = user.name;// Setting the text content for name and email
        email.innerText = user.email;
        div.appendChild(name);
        div.appendChild(email);
        userscontainer.appendChild(div);
    }
}
function doesuserexist(email) {  //3rd function
    // Check if a user with the same email exists
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return true;  // Email exists
        }
    }
    return false;  // Email does not exist
}

function hideAlert() {  //4t h function
    setTimeout(()=>{
        alert.classList.remove('success', 'danger');
    }, 2000);  // Hide alert after 2 seconds
}

function adduser() {    //1st function
    // Get values from the input fields
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    // Create a user object with name and email
    let user = {
        name: name,
        email: email
    };
    let userexist = doesuserexist(email);
    if (!userexist) {
        // If the user does not exist, add them to the users array
        users.push(user);
        alert.classList.add('success');
        alert.innerText = 'User added successfully!';
        hideAlert();  
    } else{
        alert.classList.add('danger');
        alert.innerText = 'Email already exists!';
        hideAlert();   
    }
    renderusers();
}
