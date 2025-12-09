const input = document.getElementById("input");
const buttons = document.querySelectorAll("button[data-value]")
const submit = document.getElementById("Submit");
const clear = document.getElementById("Clear");

//for indivual buttons clicked, it goes into the input bar
buttons.forEach(button => {
   button.addEventListener("click", () => {
       console.log("button", button.getAttribute('data-value'));
       input.value += button.getAttribute("data-value");
   });
});

//When clicked it will clear the input section
clear.addEventListener("click", () =>{
    console.log("clear clicked");
    input.value = "";
});

//when clicked, will submit to either a indivual account or a master section
submit.addEventListener("click", () =>{
    console.log("submit clicked, with code", input.value);
    // if nothing then just tell the user to enter a password
    if (input.value === ""){
        alert("Please enter a valid input");
    }
    //if the code is 62492, its the master key
    if (input.value === "6249"){
        console.log("MASTER KEY")
    }
    //if code is 2004, Diego
    if (input.value === "2004"){
        console.log("Diego's logs")
    }
    //if code is 1109, Semaj
    if (input.value === "1109"){
        console.log("Semaj's logs")
        window.location.href = "People's_Logs/Semaj/Semaj_Home_Page.html"
    }
    //auto clear
    input.value = "";
})
