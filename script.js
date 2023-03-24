const $ = document;

let input = $.querySelector("#input")
let col_white = $.querySelector(".white")
let col_orange = $.querySelector(".orange")
let col_yellow = $.querySelector(".yellow")
let col_lightGreen = $.querySelector(".light-green")
let col_darkGreen = $.querySelector(".dark-green")
let col_aqua = $.querySelector(".aqua")
let col_lighterBlue = $.querySelector(".lighter-blue")
let col_lightBlue = $.querySelector(".light-blue")
let col_darkBlue = $.querySelector(".dark-blue")
let col_purple = $.querySelector(".purple")
let col_pink = $.querySelector(".pink")
let plus = $.querySelector(".icon-plus")
let remove = $.querySelector(".icon-remove")
let boxText = $.querySelector(".box-txt")
//backgroundColor Input
col_white.addEventListener("click", function () {
    input.classList.add("white")
})
col_orange.addEventListener("click", function () {
    input.classList.add("orange")
})
col_yellow.addEventListener("click", function () {
    input.classList.add("yellow")
})
col_lightGreen.addEventListener("click", function () {
    input.classList.add("light-green")
})
col_darkGreen.addEventListener("click", function () {
    input.classList.add("dark-green")
})
col_aqua.addEventListener("click", function () {
    input.classList.add("aqua")
})
col_lightBlue.addEventListener("click", function () {
    input.classList.add("light-blue")
})
col_lighterBlue.addEventListener("click", function () {
    input.classList.add("lighter-blue")
})
col_darkBlue.addEventListener("click", function () {
    input.classList.add("dark-blue")
})
col_purple.addEventListener("click", function () {
    input.classList.add("purple")
})
col_pink.addEventListener("click", function () {
    input.classList.add("pink")
})

//Plus && Remove

plus.addEventListener("click", function () {
    let newText = $.createElement("div")
    newText.classList.add("note")
    if (input.value != "") {
        newText.innerHTML = input.value;
        boxText.append(newText)
    }
    input.value = "";
    if (input.classList == "orange") {
        newText.classList.add("orange")
        input.classList.remove("orange")
    }
    if (input.classList == "yellow") {
        newText.classList.add("yellow")
        input.classList.remove("yellow")
    }
    if (input.classList == "light-green") {
        newText.classList.add("light-green")
        input.classList.remove("light-green")
    }
    if (input.classList == "dark-green") {
        newText.classList.add("dark-green")
        input.classList.remove("dark-green")
    }
    if (input.classList == "aqua") {
        newText.style.backgroundColor = "aqua"
        input.classList.remove("aqua")
    }
    if (input.classList == "lighter-blue") {
        newText.style.backgroundColor = "aquamarine"
        input.classList.remove("lighter-blue")
    }
    if (input.classList == "light-blue") {
        newText.style.backgroundColor = "rgb(135, 214, 240)"
        input.classList.remove("light-blue")
    }
    if (input.classList == "dark-blue") {
        newText.style.backgroundColor = "rgb(115, 115, 250)"
        input.classList.remove("dark-blue")
    }
    if (input.classList == "purple") {
        newText.style.backgroundColor = "rgb(193, 130, 193)"
        input.classList.remove("purple")
    }
    if (input.classList == "pink") {
        newText.style.backgroundColor = "lightpink"
        input.classList.remove("pink")
    }
    if (input.classList == "white") {
        newText.style.backgroundColor = "white"
        input.classList.remove("white")
    }


    newText.addEventListener("click", function () {
        newText.classList.remove("note")
        newText.innerHTML = ""
    })
})

$.body.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        let newText = $.createElement("div")
        newText.classList.add("note")
        if (input.value != "") {
            newText.innerHTML = input.value;
            boxText.append(newText)
        }
        input.value = ""
        if (input.classList == "orange") {
            newText.classList.add("orange")
            input.classList.remove("orange")
        }
        if (input.classList == "yellow") {
            newText.classList.add("yellow")
            input.classList.remove("yellow")
        }
        if (input.classList == "light-green") {
            newText.classList.add("light-green")
            input.classList.remove("light-green")
        }
        if (input.classList == "dark-green") {
            newText.classList.add("dark-green")
            input.classList.remove("dark-green")
        }
        if (input.classList == "aqua") {
            newText.style.backgroundColor = "aqua"
            input.classList.remove("aqua")
        }
        if (input.classList == "lighter-blue") {
            newText.style.backgroundColor = "aquamarine"
            input.classList.remove("lighter-blue")
        }
        if (input.classList == "light-blue") {
            newText.style.backgroundColor = "rgb(135, 214, 240)"
            input.classList.remove("light-blue")
        }
        if (input.classList == "dark-blue") {
            newText.style.backgroundColor = "rgb(115, 115, 250)"
            input.classList.remove("dark-blue")
        }
        if (input.classList == "purple") {
            newText.style.backgroundColor = "rgb(193, 130, 193)"
            input.classList.remove("purple")
        }
        if (input.classList == "pink") {
            newText.style.backgroundColor = "lightpink"
            input.classList.remove("pink")
        }
        if (input.classList == "white") {
            newText.style.backgroundColor = "white"
            input.classList.remove("white")
        }
    }
})
remove.addEventListener("click", function () {
    input.value = "";
})
