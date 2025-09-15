const goodPassword = "182011143";
const pinInput = document.getElementById("pin");
const go = document.getElementById("go");
const message = document.getElementById("message");

function showMessage(text, ok = false) {
    message.textContent = text;
    message.style.color = ok ? 'green' : 'red';
}


go.addEventListener("click", (checkpin));

function checkpin () {
    const pin = pinInput.value;

    if (goodPassword === pin) {
        window.location.href = "name.html";
    } else {
        console.log("ntm");
        showMessage("Pin incorrect");
    }
};

pinInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkpin();
    }
});
