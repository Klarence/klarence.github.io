var words = document.querySelectorAll(".word");
words.forEach(function (word) {
    var letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(function (letter) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
var currentWordIndex = 0;
var maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
var rotateText = function () {
    var currentWord = words[currentWordIndex];
    var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach(function (letter, i) {
        setTimeout(function () {
            letter.className = "letter out";
        }, i * 80);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach(function (letter, i) {
        letter.className = "letter behind";
        setTimeout(function () {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000);
// https://blog.hubspot.com/website/css-animation-examples
// Old Implementation
// var texts = [
//     "UX Engineer",
//     "Design Technologist",
//     "Usability Analyst",
//     "Accessibility Engineer",
// eslint-disable-next-line no-tabs
// 	"Web Developer"
//     //, "Entrepreneur"
// ];
// var count = 0;
//
// function changeText() {
//     $("#whoAmI").text(texts[count]);
//     count < 3 ? count++ : count = 0;
// }
// // console.log("Ran");
// setInterval(changeText, 3000);
