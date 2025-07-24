 const menu = document.querySelector(".header__menu")
 const menuBtn = document.querySelector(".menu__icon")

 const body = document.body;

 if (menu && menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active")
        menuBtn.classList.toggle("active")
        body.classList.toggle("lock")
    })

    menu.querySelectorAll(".header__link").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active")
            menuBtn.classList.toggle("active")
            body.classList.toggle("lock")
        })
    })
 }

//  ----------------------------

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
    anchor.addEventListener("click", event => {
        event.preventDefault()

        const blockID = anchor.getAttribute('href').substring(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})


// ANIMATION

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.scroll__animation').forEach(elem => {
  observer.observe(elem);
});
