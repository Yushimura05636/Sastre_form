let username = "Adrian", password = "Adrian123";

function login()
{
    let tuser = document.getElementById("username-text-field").value;
    let tpass = document.getElementById("password-text-field").value;

    if(tuser == username && tpass == password)
    {
        alert("Login Successfully!");

        
    }
    else
    {
        //start login page
        location.replace("https://google.com.ph");
    }
}