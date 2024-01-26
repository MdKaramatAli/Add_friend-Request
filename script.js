
const addfrient = document.getElementById("add");
let check = 0;
addfrient.addEventListener("click", function()
{
    if(check == 0)
    {
        let text = document.querySelector("p");
        text.style.color = "green";
        text.innerHTML = "Now you are friend !"
        const friend = document.getElementById("add");
        friend.innerHTML = "Remove"
        check = 1;
    }
    else
    {
        let text1 = document.querySelector("p");
        text1.style.color = "red";
       setTimeout(function()
       {
        text1.innerHTML = "Want to make friend"
       }, 2000)
       text1.innerHTML = "Now you are not friend !"
        const friend = document.getElementById("add");
        friend.innerHTML = "Add Request"
        check = 0;
    }
})

