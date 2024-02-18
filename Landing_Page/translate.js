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
let heart = "muvofaqiyatli saqalandi";
function myFunction() {
    document.getElementById('icon_heart').classList = 'bx bxs-heart';
}
