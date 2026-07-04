document.getElementById("greetBtn").addEventListener("click", function () {
    let name = document.getElementById("nameInput").value;


    if (name.trim() !== "") {
        document.getElementById("greeting").textContent = "Hello, " + name;

    } else {
        document.getElementById("greeting").textContent = "Hello";
    }
})


//color fill function
let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", function () {
        let color = this.getAttribute("data-color");
        this.style.backgroundColor = color;

        if (color === "yellow") {
            this.style.color = "black";
        } else {
            this.style.color = "white";
        }
    })
})