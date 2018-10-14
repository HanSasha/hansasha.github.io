// $(document).ready(function(){
//     $(".hamburger").click(function(){
//         $(this).toggleClass("is-active");
// });
//     });
document.addEventListener("DOMContentLoaded", function () {
    var navmenu = document.querySelector(".navmenu")
    document.querySelector(".hamburger").addEventListener("click", function () {
        if (this.classList.contains("is-active")) {
            this.classList.remove("is-active");
            navmenu.classList.remove("active");
        } else {
            this.classList.add("is-active");
            navmenu.classList.add("active");
        }
    });
});