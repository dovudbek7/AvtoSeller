var data = {
    "uz":
    {
        "search": "Qidirmoq",
        "home": "AvtoSeller",
        "liked": "Saqlangan",
        "plus": "Qo'shish",
        "tell": "Qo'ng'iroq qilish"
    },
    "ru":
    {
        "search": "поиск",
        "home": "AvtoSeller",
        "liked": "понравши",
        "plus": "дабавит",
        "tell": "позвонить"
    },
}
let hide = document.getElementById("hidden").innerHTML;
console.log(hide);
if (hide == 1) {

    let search = document.querySelector(".p_search");
    search.textContent = data.ru.search;

    let tell = document.querySelector(".tr_btn");
    tell.textContent = data.ru.tell;

    let home = document.getElementById("home");
    home.textContent = data.ru.home;

    let liked = document.getElementById("liked");
    liked.textContent = data.ru.liked;

    let plus = document.getElementById("plus");
    plus.textContent = data.ru.plus;
}
else {
    let search = document.querySelector(".p_search");
    search.textContent = data.uz.search;

    let tell = document.querySelector(".tr_btn");
    tell.textContent = data.uz.tell;

    let home = document.getElementById("home");
    home.textContent = data.uz.home;

    let liked = document.getElementById("liked");
    liked.textContent = data.uz.liked;

    let plus = document.getElementById("plus");
    plus.textContent = data.uz.plus;
}

let like = document.getElementById('icon_heart');
function myFunction() {
    if (like.classList == "bx bx-heart") {
        like.classList = "bx bxs-heart"
    }
    else {
        like.classList = "bx bx-heart"
    }
}

let home = document.getElementById("home_i");
let liked = document.getElementById("like_i");
let plus = document.getElementById("plus_i");
function homeFunction(){
    if (home.classList == "bx bx-home") {
        home.classList = "bx bxs-home-alt-2"
        liked.classList = "bx bx-heart"
        plus.classList = "bx bx-plus-circle"
    }
    else {
        home.classList = "bx bx-home"
    }
}

function likeFunction(){
    if (liked.classList == "bx bx-heart") {
        liked.classList = "bx bxs-heart"
        home.classList = "bx bx-home"
        plus.classList = "bx bx-plus-circle"
    }
    else {
        liked.classList = "bx bx-heart"
    }
}
function plusFunction(){
    if (plus.classList == "bx bx-plus-circle") {
        plus.classList = "bx bxs-plus-circle"
        liked.classList = "bx bx-heart"
        home.classList = "bx bx-home"
    }
    else {
        plus.classList = "bx bx-plus-circle"
    }
}

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})