let lives = 5;
let counter = 0;

function addWord() {
    let word = document.getElementById("word").value;
    for (let i = 0; i < word.length; ++i) {
        document.getElementById("boxes").innerHTML += '<input type="text" class="letters">';
    }
}

function addIndication() {
    let indication = document.getElementById("indication").value;
    let list = document.getElementById("list");
    list.append(indication);
}

function check(valueButton) {
    let char = valueButton;
    let x = document.getElementsByClassName("letters");
    for (let i = 0; i < x.length; ++i) {
        if (word.value[i] == char.value) {
            ++counter;
            x[i].value = char.value;
            char.disabled = true;
        } else if (!word.value.includes(char.value) && i == x.length - 1) {
            document.getElementById("lives").innerHTML = --lives;
        }
    }
    if (lives > 0 && counter == x.length) {
        document.getElementById("rez").innerHTML = "<span class='color-green'>Congratulation, You Win!</span>";
    } else if (lives == 0) {
        document.getElementById("rez").innerHTML = "<span class='color-red'>Sorry, You Lost!</span>";
    }
}
