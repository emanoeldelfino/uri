const convertBtn = document.querySelector(".convert-btn");
const textBox = document.querySelector(".text-input textarea");
const uriEncodedBox = document.querySelector(".result textarea");

let lastEditElem = "";

[textBox, uriEncodedBox].forEach((elem) => {
    elem.addEventListener("input", (event) => {
        lastEditElem = event.target.className;
    })
})

convertBtn.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(lastEditElem)
    
    if (lastEditElem == "text-box")
        uriEncodedBox.value = encodeURIComponent(textBox.value);
    else
        textBox.value = decodeURIComponent(uriEncodedBox.value);
});
