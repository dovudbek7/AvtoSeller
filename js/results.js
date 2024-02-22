var data = {
    "uz":
    {
        "results": "Natijalar",
    },
    "ru":
    {
        "results": "Rезультаты",
    },
}
let hide = document.getElementById("hidden").innerHTML;
console.log(hide);
if (hide == 1) {
    let results = document.getElementById("results");
    results.textContent = data.ru.results;
}
else {
    let results = document.getElementById("results");
    results.textContent = data.uz.results;

}