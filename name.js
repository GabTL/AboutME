const username = document.getElementById("pin");
const go = document.getElementById("go");

go.addEventListener("click", checkname);

function checkname() {
    const pseudo = username.value;
    localStorage.setItem("pseudo", pseudo);
    window.location.href = "easteregg.html";
    console.log(pseudo)
};

username.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkname();
    }
});
