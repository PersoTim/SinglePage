const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    const img = card.querySelector("img")
    const contenu = card.querySelector(".contenu")

    let flipped = false

    card.addEventListener("click", () => {
        if (!flipped) {
            img.style.transform = "rotateY(-180deg)"
            contenu.style.transform = "rotateY(0deg)"
            flipped = true

            setTimeout(() => {
                img.style.transform = "rotateY(0deg)"
                contenu.style.transform = "rotateY(180deg)"
                flipped = false;
            }, 5000)
        } else {
            img.style.transform = "rotateY(0deg)"
            contenu.style.transform = "rotateY(180deg)"
            flipped = false
        }
    })
})



const uls = document.querySelectorAll("nav ul")
const lis = document.querySelectorAll("nav ul li")

lis.forEach((li) => {
    li.addEventListener("mouseenter", () => {
        lis.forEach((li) => {
            li.classList.remove("underline", "underline-offset-6")
        })

        li.classList.add("underline", "underline-offset-6")
    })
})

uls.forEach((ul) => {
    ul.addEventListener("mouseleave", () => {
        lis.forEach((li) => {
            if (li.classList.contains("selected")) {
                li.classList.add("underline", "underline-offset-6")
            } else {
                li.classList.remove("underline", "underline-offset-6")
            }
        })
    })
})



const buttons = document.querySelectorAll(".card a")
const cart = document.querySelector(".cart")
const popup = document.querySelector(".popup")

let objets = 0

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        objets++
        cart.innerHTML = `Cart (${objets})`

        popup.style.top = "0"
        setTimeout(() => {
            popup.style.top = "-200px"
        }, 1500)
    })
})