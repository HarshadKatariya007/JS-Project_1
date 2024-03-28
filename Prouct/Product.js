let Add = JSON.parse(localStorage.getItem("Product_Data")) || [];
console.log(Add);
const Product_UI = (Product_Data_2) =>
{
    document.querySelector("#Product_ui").innerHTML=""
    Product_Data_2.map((ele) =>
    {
        let Product_Title = document.createElement("h5");
        Product_Title.innerHTML = `Product Title :- ${ele.add_title}`;

        let Product_URl = document.createElement("img");
        Product_URl.src = ele.add_url

        let Product_Detail = document.createElement("p");
        Product_Detail.innerHTML = ele.add_detail;

        let Product_Price = document.createElement("h5");
        Product_Price.innerHTML=`₹ ${ele.add_price}`;

        let Product_Category = document.createElement("h6");
        Product_Category.innerHTML=`Category :- ${ele.add_type}`

        let btn = document.createElement("button");
        btn.innerHTML="Buy Now"

        let btn_2 = document.createElement("button")
        btn_2.innerHTML="Add To Cart"

        let Div = document.createElement("div");
        
        Div.append(btn,btn_2)

        let div = document.createElement("div");
        div.append(Product_URl,Product_Title,Product_Detail,Product_Category,Product_Price,Div)

        document.querySelector("#Product_ui").append(div)

        div.setAttribute("class","col-3")
        btn.setAttribute("class","buy-now-btn")
        Div.setAttribute("class","w-2")
        btn_2.setAttribute("class","add_cart_btn")
    })
}
Product_UI(Add);

let Is_Login = localStorage.getItem("is_Login");
if(Is_Login)
{
    document.querySelector("#Login_1").innerHTML="Logout";
}


const Price_Sorting = (val) =>
{
    if(val=="high")
    {
        Add.sort((a,b) => b.add_price - a.add_price)
    }
    else
    {
        Add.sort((a,b) => a.add_price - b.add_price)
    }
    Product_UI(Add)
} 

const Filter = (val) =>
{
   let add_temp =Add.filter((ele) => ele.add_type==val)
   Product_UI(add_temp)
}

const Serach_Filter = (val) =>
{
    let add_temp =Add.filter((ele) => ele.add_title==val)
    Product_UI(add_temp)
}
const Serach = (e) =>
{
    e.preventDefault();
    let Serach_Title = document.querySelector("#serach_2").value;
    Serach_Filter(Serach_Title);
}

document.querySelector("#low").addEventListener("click",() =>Price_Sorting("low")); 
document.querySelector("#high").addEventListener("click",() =>Price_Sorting("high")); 
document.querySelector("#kids").addEventListener("click",() =>Filter("Kids"));
document.querySelector("#male").addEventListener("click",() =>Filter("Male"));
document.querySelector("#toy").addEventListener("click",() =>Filter("Toy"));
document.querySelector("#access").addEventListener("click",() =>Filter("Computer Accessories"));
document.querySelector("#female").addEventListener("click",() =>Filter("Female"));
document.querySelector("#serach_1").addEventListener("submit",Serach)
