//==================================================
// KASTURI DENTAL CARE
// PREMIUM WEBSITE JS
//==================================================

document.addEventListener("DOMContentLoaded", () => {

    /*==========================
      FAQ ACCORDION
    ==========================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector("i");

        question.addEventListener("click", () => {

            faqItems.forEach((otherItem) => {

                if (otherItem !== item) {

                    otherItem.querySelector(".faq-answer").style.maxHeight = null;

                    otherItem.querySelector("i").classList.remove("fa-minus");

                    otherItem.querySelector("i").classList.add("fa-plus");

                }

            });

            if (answer.style.maxHeight) {

                answer.style.maxHeight = null;

                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");

            } else {

                answer.style.maxHeight = answer.scrollHeight + "px";

                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");

            }

        });

    });

    /*==========================
      SMOOTH SCROLL
    ==========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*==========================
      STICKY NAVBAR SHADOW
    ==========================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.12)";

            navbar.style.background =
                "rgba(255,255,255,.98)";

        } else {

            navbar.style.boxShadow =
                "0 4px 15px rgba(0,0,0,.05)";

            navbar.style.background =
                "rgba(255,255,255,.95)";

        }

    });

    /*==========================
      ACTIVE MENU
    ==========================*/

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*==========================
      APPOINTMENT FORM
      REDIRECT TO WHATSAPP
    ==========================*/

    const form = document.querySelector(".appointment-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                this.querySelector('input[type="text"]').value;

            const phone =
                this.querySelector('input[type="tel"]').value;

            const treatment =
                this.querySelector("select").value;

            const date =
                this.querySelector('input[type="date"]').value;

            const message =
                this.querySelector("textarea").value;

            const whatsappMessage =

`Hello Kasturi Dental Care,

I would like to book an appointment.

Name: ${name}

Phone: ${phone}

Treatment: ${treatment}

Preferred Date: ${date}

Problem:
${message}`;

            const url =
                "https://wa.me/918079087600?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(url, "_blank");

        });

    }

});

console.log("Kasturi Dental Care Website Loaded Successfully");
