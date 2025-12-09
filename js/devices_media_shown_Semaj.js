//getting the image and also the text ids
const sony_camera = document.getElementById("Sony_Camera");
const all_devices = document.getElementById("all_devices");
//getting the data values of the items that are in the media item class
const items = document.querySelectorAll("div[data-value]")

sony_camera.addEventListener("click", () => {
    console.log(sony_camera, "clicked");
    items.forEach(item => {
        console.log(item.dataset.value);
        if (item.dataset.value !== "sony"){
            item.style.display = "none";
        }
        else{
            item.style.display = "block";
        }
    });
});

all_devices.addEventListener("click", () => {
    console.log(all_devices, "clicked");
    items.forEach(item => {
        item.style.display = "block";
    });
});