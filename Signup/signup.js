
/* let SignUp_Arry = JSON.parse(localStorage.getItem("User_Data")) || []; */

let User_Arry = [];

const SignUp = (e) => {
    e.preventDefault();

    const User_P =/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    const Password_P =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let SignUp_Object =
    {
        User: document.querySelector("#user_name").value,
        Email: document.querySelector("#user_email").value,
        Password: document.querySelector("#user_password").value,   
    }
  
    if ((SignUp_Object.User=="")|| (SignUp_Object.Email=="") || (SignUp_Object.Password=="")) {
        Toastify(
            {
                text: "Please Fill Blank UserName, Email, Password ",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "#000000",
                },
            }
        ).showToast()
        return;
    }

    if(User_P.test(SignUp_Object.User)==false)
    {
        Toastify(
            {
                text: "Please Enter Valid User Name",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "#000000",
                },
            }
        ).showToast()
        return;
    }
   
    if(SignUp_Object.Password.length < 6 || SignUp_Object.Password.length > 15)
    {
        Toastify(
            {
                text: "Password Length Must Be Atleast 8 Characters",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "#000000",
                },
            }
        ).showToast()
        return;
    }

    if(Password_P.test(SignUp_Object.Password)==false)
    {
        Toastify(
            {
                text: "Password Must Be Characters Which Contain At Least One Lowercase Letter, One Uppercase Letter, One Numeric Digit, And One Special Character",
                duration:50000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "#000000",
                },
            }
        ).showToast()
        return;
    }
   
    

  
    User_Arry.push(SignUp_Object);
    
    localStorage.setItem("User_Data",JSON.stringify(User_Arry));

    localStorage.setItem("is_Login",true);

   
   

    window.location="/Login/login.html";
   
}

document.querySelector("#signup_form").addEventListener("submit", SignUp)