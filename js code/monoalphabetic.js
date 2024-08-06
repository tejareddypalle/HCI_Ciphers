function encryptMono() {
    const plaintext = document.getElementById('mono-plaintext').value.toUpperCase();
    const substitutionAlphabet = document.getElementById('mono-alphabet').value.toUpperCase();
    let ciphertext = '';

    if (substitutionAlphabet.length !== 26) {
        document.getElementById('mono-ciphertext').innerText = 'Substitution alphabet must contain 26 unique letters.';
        return;
    }

    const standardAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetMap = {};

    for (let i = 0; i < 26; i++) {
        alphabetMap[standardAlphabet[i]] = substitutionAlphabet[i];
    }

    for (let i = 0; i < plaintext.length; i++) {
        let char = plaintext[i];

        if (char >= 'A' && char <= 'Z') {
            ciphertext += alphabetMap[char];
        } else {
            ciphertext += char;
        }
    }

    document.getElementById('mono-ciphertext').innerText = `Ciphertext: ${ciphertext}`;
}

function decryptMono() {
    const ciphertext = document.getElementById('mono-ciphertext-input').value.toUpperCase();
    const substitutionAlphabet = document.getElementById('mono-alphabet-decrypt').value.toUpperCase();
    let plaintext = '';

    if (substitutionAlphabet.length !== 26) {
        document.getElementById('mono-plaintext-output').innerText = 'Substitution alphabet must contain 26 unique letters.';
        return;
    }

    const standardAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const reverseAlphabetMap = {};

    for (let i = 0; i < 26; i++) {
        reverseAlphabetMap[substitutionAlphabet[i]] = standardAlphabet[i];
    }

    for (let i = 0; i < ciphertext.length; i++) {
        let char = ciphertext[i];

        if (char >= 'A' && char <= 'Z') {
            plaintext += reverseAlphabetMap[char];
        } else {
            plaintext += char;
        }
    }

    document.getElementById('mono-plaintext-output').innerText = `Plaintext: ${plaintext}`;
}

function submitQuiz(event) {
    event.preventDefault();

    const form = document.getElementById('mono-quiz');
    const formData = new FormData(form);
    let correctAnswers = 0;
    const correctAnswersKeys = ['B', 'B', 'B', 'A', 'C', 'D']; // Correct answers for each question
    const questionsTotal = 6;
    const questionsText = [
        " What is a Monoalphabetic Cipher?",
        " How is the substitution alphabet determined in a Monoalphabetic Cipher?",
        " The Monoalphabetic Cipher is considered a strong encryption method for secure communication in modern times.",
        " If two different plaintext letters are encrypted using the same Monoalphabetic Cipher, they will always result in different ciphertext letters.",
        " In a Monoalphabetic Cipher, the key used for encryption and decryption is:",
        " What is a major weakness of the Monoalphabetic Cipher?"
    ];
    const answersText = [
        "B: A substitution cipher using a fixed substitution alphabet.",
        "B: By randomly shuffling the standard alphabet.",
        "B: False.",
        "A: True.",
        "C: A mapping of each letter to another letter.",
        "D: It's easy to crack with frequency analysis."
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

    document.getElementById('mono-quiz-results').innerHTML = resultsHTML;
}


