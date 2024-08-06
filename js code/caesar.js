function encryptCaesar() {
    const plaintext = document.getElementById('caesar-plaintext').value.toUpperCase();
    const shiftKey = parseInt(document.getElementById('caesar-shift').value);
    let ciphertext = '';

    for (let i = 0; i < plaintext.length; i++) {
        let char = plaintext[i];

        if (char >= 'A' && char <= 'Z') {
            let shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shiftKey) % 26) + 65);
            ciphertext += shiftedChar;
        } else {
            ciphertext += char;
        }
    }

    document.getElementById('caesar-ciphertext').innerText = `Ciphertext: ${ciphertext}`;
}

function decryptCaesar() {
    const ciphertext = document.getElementById('caesar-ciphertext-input').value.toUpperCase();
    const shiftKey = parseInt(document.getElementById('caesar-shift-decrypt').value);
    let plaintext = '';

    for (let i = 0; i < ciphertext.length; i++) {
        let char = ciphertext[i];

        if (char >= 'A' && char <= 'Z') {
            let shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 65 - shiftKey + 26) % 26) + 65);
            plaintext += shiftedChar;
        } else {
            plaintext += char;
        }
    }

    document.getElementById('caesar-plaintext-output').innerText = `Plaintext: ${plaintext}`;
}
function submitQuiz(event) {
    event.preventDefault();

    const form = document.getElementById('caesar-quiz');
    const formData = new FormData(form);
    let correctAnswers = 0;
    const correctAnswersKeys = ['C', 'A', 'B', 'D', 'B', 'B']; // Correct answers for each question
    const questionsTotal = 6;
    const questionsText = [
        " What is the shift key in a Caesar Cipher?",
        " What happens to letters that shift beyond the end of the alphabet?",
        " The Caesar Cipher is a form of monoalphabetic substitution cipher.",
        " In the Caesar Cipher, how many positions can each letter in the plaintext be shifted?",
        " The Caesar Cipher uses a complex key for encryption and decryption.",
        " How many different possible keys exist in a standard Caesar Cipher?"
    ];
    const answersText = [
        "C: The number of positions each letter is shifted in the alphabet.",
        "A: They wrap around to the beginning of the alphabet.",
        "B: True.",
        "D: Any number of positions within the range of the alphabet.",
        "B: False.",
        "B: 26."
    ];

    let resultsHTML = "";

    for (let i = 0; i < questionsTotal; i++) {
        const userAnswer = formData.get(`q${i+1}`);
        const isCorrect = userAnswer === correctAnswersKeys[i];
        if (isCorrect) {
            correctAnswers++;
        }
        
        resultsHTML += `<li>${questionsText[i]}
                        <ul>
                            <li>Your Answer: ${userAnswer || "No answer given"}</li>
                            <li>Correct Answer: ${answersText[i]}</li>
                            <li>${isCorrect ? "<h4>Correct</h4>" : "<h4>Incorrect</h4>"}</li>
                        </ul>
                        </li>`;
    }

    resultsHTML = `<h3>You answered ${correctAnswers} out of ${questionsTotal} questions correctly.</h3>` + `<ol>` + resultsHTML + `</ol>`;

    document.getElementById('caesar-quiz-results').innerHTML = resultsHTML;
}

