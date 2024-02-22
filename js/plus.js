var data = {
    "uz":
    {
        "plus": "Qo'shish",
        "give_subscribtion": "Obuna bo'lish",
        "give_post": "E'lon berish",
        "posts": "E'lonlar:",
        "subscribtions": "Obunalar:"
    },
    "ru":
    {
        "plus": "дабавит",
        "give_subscribtion": "Подписаться",
        "give_post": "паставить oбъявление",
        "posts": "oбъявление:",
        "subscribtions": "Подписки:"

    },
}

let hide = document.getElementById("hidden").innerHTML;
console.log(hide);
if (hide == 1) {
    let plus = document.getElementById("plus");
    plus.textContent = data.ru.plus;

    let give_subscribtion = document.getElementById("give_subscribtion");
    give_subscribtion.textContent = data.ru.give_subscribtion;

    let give_post = document.getElementById("give_post");
    give_post.textContent = data.ru.give_post;

    let posts = document.getElementById("posts");
    posts.textContent = data.ru.posts;

    let subscribtions = document.getElementById("subscribtions");
    subscribtions.textContent = data.ru.subscribtions;

}
else {
    let plus = document.getElementById("plus");
    plus.textContent = data.uz.plus;

    let give_subscribtion = document.getElementById("give_subscribtion");
    give_subscribtion.textContent = data.uz.give_subscribtion;

    let give_post = document.getElementById("give_post");
    give_post.textContent = data.uz.give_post;

    let posts = document.getElementById("posts");
    posts.textContent = data.uz.posts;

    let subscribtions = document.getElementById("subscribtions");
    subscribtions.textContent = data.uz.subscribtions;
}