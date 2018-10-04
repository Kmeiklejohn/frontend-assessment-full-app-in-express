const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const about = document.getElementById('about')

userCreateSubmitButton.addEventListener("click",formSubmit);

function formSubmit(event){
    event.preventDefault();
    let userData = {
                username: username.value,
                password: password.value,
                email: email.value,
                about: about.value
    }
    const userJson = JSON.stringify(userData)
    console.log(userJson)
fetchData(userJson);
}

fetchData = (userInfo) => {
const postRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: userInfo
  };

fetch('http://localhost:5000/api/user', postRequestOptions)
    .then(res =>{ 
        if (res.status === 201){
            alert("Success")
        }else{
            alert("Username is taken")
        } 
        return res.json()
    })
        .then(data =>{
        console.log(data)
    }).catch(error => console.log('err',error))
    
}
