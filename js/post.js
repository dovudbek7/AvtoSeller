var data = {
    "uz":
    {
        "brends": "Marka",
        "model": "Model",
        "header": "Obuna qo'shish",
        "price": "Narxi",
        "adress": "Manzil",
        "year": "Yili",
        "tell": "Tell",
        "others": "Boshqalar",
        "input_file": "Rasmni yuklang",
        "submit": "Qo'shish"
    },
    "ru":
    {
        "brends": "Марка",
        "model": "Модель",
        "header": "Добавить объявление",
        "price": "Цена",
        "adress": "Адрес",
        "year": "Год випуска",
        "tell": "Телефон",
        "others": "Другие",
        "input_file": "загрузите изображение",
        "submit": "Добавить"

    },

}

let brends = document.getElementById("brends");
let header = document.getElementById("header");
let model = document.getElementById("model");
let input_file = document.getElementById("input_file");
let submit = document.getElementById("submit");
let price = document.getElementById("price");
let inp_price = document.getElementById("inp_price");
let year = document.getElementById("year");
let inp_year = document.getElementById("inp_year");
let tell = document.getElementById("tell");
let inp_tell = document.getElementById("inp_tell");
let others = document.getElementById("others");
let inp_others = document.getElementById("inp_others");
let adress = document.getElementById("adress");
let inp_adress = document.getElementById("inp_adress");




let hide = document.getElementById("hidden").innerHTML;
console.log(hide);
if (hide == 1) {

    brends.textContent = data.ru.brends;
    header.textContent = data.ru.header;
    model.textContent = data.ru.model;
    input_file.textContent = data.ru.input_file;
    submit.textContent = data.ru.submit;
    price.textContent = data.ru.price;
    inp_price.placeholder = data.ru.price;
    year.textContent = data.ru.year;
    inp_year.placeholder = data.ru.year;
    tell.textContent = data.ru.tell;
    inp_tell.placeholder = data.ru.tell;
    others.textContent = data.ru.others;
    inp_others.placeholder = data.ru.others;
    adress.textContent = data.ru.adress;
    inp_adress.placeholder = data.ru.adress;
}

else {
    brends.textContent = data.uz.brends;
    header.textContent = data.uz.header;
    model.textContent = data.uz.model;
    input_file.textContent = data.uz.input_file;
    submit.textContent = data.uz.submit;
    price.textContent = data.uz.price;
    inp_price.placeholder = data.uz.price;
    year.textContent = data.uz.year;
    inp_year.placeholder = data.uz.year;
    tell.textContent = data.uz.tell;
    inp_tell.placeholder = data.uz.tell;
    others.textContent = data.uz.others;
    inp_others.placeholder = data.uz.others;
    adress.textContent = data.uz.adress;
    inp_adress.placeholder = data.uz.adress;
}
