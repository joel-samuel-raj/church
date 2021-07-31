/*************************CONTENT************************ */
function scrollAppear () {
    var toAppear = document.getElementsByClassName("magic");
    for (var i = 0 ; i < toAppear.length ; i++) {
            var position = toAppear[i].getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.7;
            if ( position < screenPosition) {
                if (i % 2 === 0) {
                toAppear[i].classList.add("product-magic");
                }
                else {
                    toAppear[i].classList.add("product-magic1");  
                }
            }
    }
}
window.addEventListener("scroll", scrollAppear);
/**********************************************************/

/*************************NAVBAR****************************/
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("navbar", window.scrollY > 0);
});
/**********************************************************/

/***********************TOGGLE***********************/
function toggleClass (x) {
    x.classList.toggle("change");
    document.getElementById("modal").classList.toggle("modal-right");
}
/************************************************************/

/************************FIXING******************************/
/************************************************************/

/*************************TRIVIAL*******************************/
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        document.getElementsByClassName("modal-inside")[0].style.marginTop = "5rem";
    }
    else {
        document.getElementsByClassName("modal-inside")[0].style.marginTop = "7rem";
    }
})