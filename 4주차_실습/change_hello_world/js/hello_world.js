var content = document.getElementById("content");
var sizeUpButton = document.getElementById("size-up");
var sizeDownButton = document.getElementById("size-down");
var englishButton = document.getElementById("english");
var koreanButton = document.getElementById("korean");

sizeUpButton.addEventListener("click",function() {
    var fontSize = window.getComputedStyle(content, null).getPropertyValue("font-size");
    var currentSize = parseFloat(fontSize);
    content.style.fontSize = currentSize + 10 + "px";
});

sizeDownButton.addEventListener("click", function() {
    var fontSize = window.getComputedStyle(content, null).getPropertyValue("font-size");
    var currentSize = parseFloat(fontSize);
    content.style.fontSize = currentSize - 10 + "px";
});

englishButton.addEventListener("click", function() {
    content.innerHTML = "hello World";
});

koreanButton.addEventListener("click",function(){
    content.innerHTML = "안녕, 세상";
});