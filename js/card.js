var data = {
    "uz":
    {
        "tell": "Qo'ng'iroq qilish",
        "subscribes": "Obunalar",
        "posts": "E'lonlar",
        "model": "Modeli",
        "brend": "Marka",
        "year": "Yili",
        "like_that": "Shunga o'xshashlari:",
        "adress": "Manzil",
        "others": "Boshqalar"
    },
    "ru":
    {
        "tell": "позвонить",
        "subscribes": "Подписки",
        "posts": "объявление",
        "model": "модель",
        "brend": "бренд",
        "year": "Год выпуска",
        "like_that": "Похожие:",
        "adress": "Адрес",
        "others": "другие"
    },
}
let hide = document.getElementById("hidden").innerHTML;
console.log(hide);
if (hide == 1) {


    let brend = document.getElementById("brend");
    brend.textContent = data.ru.brend;

    let model = document.getElementById("model");
    model.textContent = data.ru.model;

    let adress = document.getElementById("adress");
    adress.textContent = data.ru.adress;

    let date = document.getElementById("date");
    date.textContent = data.ru.adress;

    let others = document.getElementById("others");
    others.textContent = data.ru.others;

    let like_that = document.getElementById("like_that");
    like_that.textContent = data.ru.like_that;

    let tells = document.querySelectorAll(".tr_btn");
    tells.forEach(function (tell) {
        tell.textContent = data.ru.tell;
    });
}
else {
    let brend = document.getElementById("brend");
    brend.textContent = data.uz.brend;

    let model = document.getElementById("model");
    model.textContent = data.uz.model;

    let adress = document.getElementById("adress");
    adress.textContent = data.uz.adress;

    let date = document.getElementById("date");
    date.textContent = data.uz.adress;

    let others = document.getElementById("others");
    others.textContent = data.uz.others;

    let like_that = document.getElementById("like_that");
    like_that.textContent = data.uz.like_that;

    let tells = document.querySelectorAll(".tr_btn");
    tells.forEach(function (tell) {
        tell.textContent = data.uz.tell;
    });
}

function myFunction(btn) {
    let iconHeart = btn.querySelector('.icon_heart');

    if (iconHeart && iconHeart.classList) {
        if (iconHeart.classList.contains("bx-heart")) {
            iconHeart.classList.remove("bx-heart");
            iconHeart.classList.add("bxs-heart");
        } else {
            iconHeart.classList.remove("bxs-heart");
            iconHeart.classList.add("bx-heart");
        }
    }
}

