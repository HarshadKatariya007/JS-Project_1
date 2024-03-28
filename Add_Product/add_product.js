let Add = JSON.parse(localStorage.getItem("Product_Data")) || [];


const Add_Product = (e) =>
{
    e.preventDefault();

    let Add_Product_Object = 
    {
        add_title : document.querySelector("#add_title").value,
        add_url : document.querySelector("#add_url").value,
        add_detail : document.querySelector("#add_detail").value,
        add_price :  document.querySelector("#add_price").value,
        add_type : document.querySelector("#add_type").value,

    };

    if((Add_Product_Object.add_title=="") || (Add_Product_Object.add_url=="") || (Add_Product_Object.add_detail=="") || (Add_Product_Object.add_price==""))
    {
        Toastify(
            {
                text: "Fill Blank First",
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

    if(Add_Product_Object.add_type=="")
    {
        
        Toastify(
            {
                text: "Select Product Type...",
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

    Add.push(Add_Product_Object);

    localStorage.setItem("Product_Data",JSON.stringify(Add))
}

let Is_Login = localStorage.getItem("is_Login")
    if(Is_Login)
    {
        document.querySelector("#Login_1").innerHTML="Logout"
    }
    else
    {
       window.location.href="/Login/login.html";
    }

document.querySelector("#Add_Product_1").addEventListener("submit", Add_Product);