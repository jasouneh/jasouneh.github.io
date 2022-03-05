function textBigger() {
    document.getElementById("textInput").style.fontSize = "2em";
}

function changeText() {
    const fancyRadio = document.getElementById("fancyRadio");
    const textInput = document.getElementById("textInput");
    const boringRadio = document.getElementById("boringRadio");

    if(fancyRadio.checked) {
        boringRadio.checked = false;
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline"
    }
    if(boringRadio.checked) {
        fancyRadio.checked = false;
        textInput.style.fontWeight = "";
    }
}

function moo() {
    const textInput = document.getElementById("textInput");
    
    textInput.value = textInput.value.toLocaleUpperCase();

    var str = textInput.value;
    var split = str.split(". ");
    str = split.join("-Moo ")
    textInput.value = str;
}