// Hamburger menu toggle
function hamburg() {
    document.querySelector('.dropdown').style.transform = "translateY(0)";
}

function cancel() {
    document.querySelector('.dropdown').style.transform = "translateY(-500px)";
}

// Typewriter Effect
const words = ["Full Stack Web Developer", "Frontend Developer", "Backend Developer"];
let wordIndex = 0;
let charIndex = 0;
let typewriterElement = document.querySelector(".typewriter-text");

function type() {
    if (charIndex < words[wordIndex].length) {
        typewriterElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, 500);
});

// Form submission handling
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    let name = document.getElementById("Username").value.trim();
    let email = document.getElementById("Email").value.trim();
    let message = document.getElementById("Message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    let formData = {
        name: name,
        email: email,
        message: message
    };

    console.log("Form Data Submitted: ", formData);

    alert("Message Sent Successfully!");
    
    document.getElementById("Username").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
