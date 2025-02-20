// Function to validate the form
function validateForm(event) { 
    event.preventDefault();
    const name = form.getElementById('name').value;
    const email = form.getElementById('email').value;
    
    if (name == "ukhti" && email == "deerinthedawn@gmail.com") {
       alert("pesan gagal dikirim");
        return false;
    }

    if (name.trim() === "") {
        errormessage.innerText = "Name cannot be empty";
        return false
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errormessage.innerText = "Invalid email address";
        return false;
    }
    errormessage.innerText = "";
    form.submit();
}
form.addEventListener('submit', validateForm);