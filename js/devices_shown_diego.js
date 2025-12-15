//getting the items
const phone = document.getElementById("Phone");
const smart_jorunal = document.getElementById("Smart_Journal");
const all_devices = document.getElementById("all_devices");
//getting all the elements in the data values
const medias = document.querySelectorAll("div[data-value]")

//code for the phone
phone.addEventListener("click", () =>{
    console.log(phone, " clicked")
    medias.forEach(media => {
        console.log(media);
        if (media.dataset.value !== "Phone") {
            media.style.display = "none";
        }
        else{
            media.style.display = "block";
        }
    })
});

//code for the "smart" journal
smart_jorunal.addEventListener("click", () =>{
    console.log(smart_jorunal, " clicked")
    medias.forEach(media => {
        console.log(media);
        if (media.dataset.value !== "Smart_Journal") {
            media.style.display = "none";
        }
        else{
            media.style.display = "block";
        }
    });
});

//for all devices
all_devices.addEventListener("click", () =>{
    console.log(all_devices, " clicked")
    medias.forEach(media => {
        console.log(media);
        media.style.display = "block";
    });
})