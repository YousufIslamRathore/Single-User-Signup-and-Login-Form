const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const contact = document.getElementById("contact");

const setData = () => {
    const userObj = {
        firstname : firstname.value,
        lastname : lastname.value,
        email : email.value,
        password : password.value,
        contact : contact.value
    }

    localStorage.setItem("data", JSON.stringify(userObj))

    window.location.assign("./login.html")

    alert("Account Created Successfully")
}


////// For Login 

const login = (e) => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const userData = JSON.parse(localStorage.getItem("data"));
    if(email.value === userData.email && password.value === userData.password) {
        alert("Login Successful")
        e.setAttribute("action", "./dashboard.html")
    }
    else {
        alert("Credential Errors")
    }
}

////// Viewing Dashboard Page 

const show = () => {
    const p = document.getElementById("p");
    const tr = document.getElementById("tr")
    const userData = JSON.parse(localStorage.getItem("data"));
    p.innerHTML = `Hello, ${userData.firstname + " " + userData.lastname}!`
    tr.innerHTML = `<td>${userData.firstname} ${userData.lastname}</td>
                    <td>${userData.email}</td>
                    <td>${userData.password}</td>
                    <td>${userData.contact}</td>`
}