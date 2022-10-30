const wordsTextarea = document.querySelector(".word-counter-container .words");
const countbtn = document.querySelector(".word-counter-container .count-btn");
const wordCount = document.querySelector(".word-counter-container .word-count span");


const countWord = () => {
    let words = wordsTextarea.value;
    let wordsTrimmed = words.replace(/\s/g, " ").trim();
    let splitWord = wordsTrimmed.split(" ");

    let numberofword = splitWord.length;

    wordCount.innerHTML = numberofword;

};

countbtn.addEventListener("click", countWord);