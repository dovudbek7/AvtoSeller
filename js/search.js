var data = {
    "uz":
    {
        "brends": "Marka",
        "model": "Model",
        "adress": "Manzil",
        "price": "Narxi:",
        "from": "dan",
        "to": "gacha",
        "year": "Yili:",
        "submit": "Natijalar",
        "search": "Qidirish"
    },
    "ru":
    {
        "brends": "Бренд",
        "model": "Модель",
        "adress": "Адрес",
        "price": "Цена:",
        "from": "Oт",
        "to": "До",
        "year": "Год:",
        "submit": "Результаты",
        "search": "Поиск"

    },
}
let hide = document.getElementById("hidden").innerHTML;
console.log(hide);
if (hide == 1) {
    let brends = document.getElementById("brends");
    brends.textContent = data.ru.brends;

    let model = document.getElementById("model");
    model.textContent = data.ru.model;

    let adress = document.getElementById("adress");
    adress.textContent = data.ru.adress;

    let price = document.getElementById("price");
    price.textContent = data.ru.price;

    let year = document.getElementById("year");
    year.textContent = data.ru.year;

    let submit = document.getElementById("submit");
    submit.textContent = data.ru.submit;

    let search = document.getElementById("search");
    search.textContent = data.ru.search;

    let from = document.getElementById("from");
    from.placeholder = data.ru.from;

    let to = document.getElementById("to");
    to.placeholder = data.ru.to;

    let from2 = document.getElementById("from2");
    from2.placeholder = data.ru.from;

    let to2 = document.getElementById("to2");
    to2.placeholder = data.ru.to;
}
else {
    let brends = document.getElementById("brends");
    brends.textContent = data.uz.brends;

    let model = document.getElementById("model");
    model.textContent = data.uz.model;

    let adress = document.getElementById("adress");
    adress.textContent = data.uz.adress;

    let price = document.getElementById("price");
    price.textContent = data.uz.price;

    let year = document.getElementById("year");
    year.textContent = data.uz.year;

    let submit = document.getElementById("submit");
    submit.textContent = data.uz.submit;

    let search = document.getElementById("search");
    search.textContent = data.uz.search;

    let from = document.getElementById("from");
    from.placeholder = data.uz.from;

    let to = document.getElementById("to");
    to.placeholder = data.uz.to;

    let from2 = document.getElementById("from2");
    from2.placeholder = data.uz.from;

    let to2 = document.getElementById("to2");
    to2.placeholder = data.uz.to;
}