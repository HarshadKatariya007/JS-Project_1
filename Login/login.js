

let User_Arry = JSON.parse(localStorage.getItem("User_Data")) || [];

const Login = (e) => {

    e.preventDefault();

   let Email = document.querySelector("#user_email").value;
   let Password = document.querySelector("#user_password").value;

    if (Email == "") {
        Toastify(
            {
                text: "Fill Blank Email",
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
    
    if (Password == "") {
        Toastify(
            {
                text: "Fill Blank Password",
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


    let USER_DATA = User_Arry.filter((ele)=>ele.Email==Email && ele.Password==Password)

    if(USER_DATA.length==1)
    {
        Toastify(
            {
                text: "Login Successfully",
                duration: 3000,
                newWindow: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "#000000",
                    color:"#5bf700ff"
                },
            }
        ).showToast()
        window.location.href="/Add_Product/add_product.html"
    }
    else
    {
        Toastify(
            {
                text: "Invalid Email And Password Plese Check Email And Password",
                duration: 3000,
                newWindow: true,
                close:true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "#000000",
                },
            }
        ).showToast()
        return
    }
}

document.querySelector("#Login_Form").addEventListener("submit",Login);