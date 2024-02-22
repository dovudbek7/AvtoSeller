var data = {
        "uz":
        {
            "brends": "Marka",
            "model": "Model",
            "submit": "Natijalar",
            "header": "Obuna bo'lmoq"
        },
        "ru":
        {
            "brends": "Бренд",
            "model": "Модель",
            "submit": "Результаты",
            "header": "Подписаться"    
        },

}
let hide = document.getElementById("hidden").innerHTML;
console.log(hide);
if (hide == 1) {
    let brends = document.getElementById("brends");
    brends.textContent = data.ru.brends;
    
    let model = document.getElementById("model");
    model.textContent = data.ru.model;
    
    let submit = document.getElementById("submit");
    submit.textContent = data.ru.submit;
    
    let header = document.getElementById("header");
    header.textContent = data.ru.header;






}


else {
    let results = document.getElementById("results");
    results.textContent = data.uz.results;
    
}