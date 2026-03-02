// Task 1 - Click Event
let clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", function () {
    alert("Button Clicked Successfully");
});


// Task 2 - Change Paragraph Text
let changeTextBtn = document.getElementById("changeTextBtn");
let textPara = document.getElementById("textPara");

changeTextBtn.addEventListener("click", function () {
    textPara.textContent = "Text Updated Successfully";
});


// Task 3 - Change Background Color
let bgBtn = document.getElementById("bgBtn");

bgBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#d0f0ff";
});


// Task 4 - Live Input Display
let liveInput = document.getElementById("liveInput");
let liveText = document.getElementById("liveText");

liveInput.addEventListener("input", function () {
    liveText.textContent = liveInput.value;
});


// Task 5 - Mouse Enter & Leave
let hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseenter", function () {
    hoverBox.style.backgroundColor = "#ffcc00";
});

hoverBox.addEventListener("mouseleave", function () {
    hoverBox.style.backgroundColor = "#ddd";
});


// Task 6 - Double Click Event
let doubleBtn = document.getElementById("doubleBtn");

doubleBtn.addEventListener("dblclick", function () {
    alert("Double Click Detected");
});