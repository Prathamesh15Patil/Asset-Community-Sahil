//FAQ JS
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.f-icon');
    const ans = accordian.querySelector('.ans');

    accordian.addEventListener('click',()=>{
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            ans.style.maxHeight = null;
        }else{
            icon.classList.add('active');
            ans.style.maxHeight = ans.scrollHeight + 'px';
        }
    })
})

//pop JS

document.addEventListener("DOMContentLoaded", function() {

    const popUpButtons = document.querySelectorAll("[data-pop-target]");
    
    const overlay = document.getElementById("overlay");
    
    const closePopUpButtons = document.querySelectorAll("[data-close-button]");

    popUpButtons.forEach(button => {
        button.addEventListener("click", () => {
            const popUp = document.querySelector(button.dataset.popTarget);
            openPopUp(popUp);
        });
    });

    closePopUpButtons.forEach(button => {
        button.addEventListener("click", () => {
            const popUp = button.closest(".pop-up");
            closePopUp(popUp);
        });
    });

    
    overlay.addEventListener("click", () => {
        const popUps = document.querySelectorAll(".pop-up.active");
        popUps.forEach(popUp => {
            closePopUp(popUp);
        });
    });

    function openPopUp(popUp) {
        if (popUp == null) return;
        popUp.classList.add("active");
        overlay.classList.add("active");
    }

    function closePopUp(popUp) {
        if (popUp == null) return;
        popUp.classList.remove("active");
        overlay.classList.remove("active");
    }
});
