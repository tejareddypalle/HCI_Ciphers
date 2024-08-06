// Get the navigation links
const caesarLink = document.getElementById('caesar-link');
const monoalphabeticLink = document.getElementById('monoalphabetic-link');
const indexLink = document.getElementById('index-link');

// Add event listeners for navigation links
caesarLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'caesar.html'; // Redirect to Caesar Cipher page
    function openPdf() {
        window.open('../documents/1901 cscmat 483 section 2 caesar ciphers.pdf', '_blank')
    }
});
monoalphabeticLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'monoalphabetic.html'; // Redirect to Monoalphabetic Cipher page
    function openPdf() {
        window.open('../documents/1901 cscmat 483 section 1 introduction and MASCs.pdf', '_blank')
    }
});
