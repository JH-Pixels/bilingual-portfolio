// language switch
document.addEventListener("DOMContentLoaded", function () {
    const deBtn = document.getElementById("deBtn");
    const enBtn = document.getElementById("enBtn");
    const deLang = document.querySelectorAll(".de_lang");
    const enLang = document.querySelectorAll(".en_lang");

    const userLanguage = navigator.language || navigator.userLanguage;
    if (userLanguage.startsWith("de")) {
        switchLanguage(deLang, deBtn);
    } else {
        switchLanguage(enLang, enBtn);
    }

    deBtn.addEventListener("click", () => switchLanguage(deLang, deBtn));
    enBtn.addEventListener("click", () => switchLanguage(enLang, enBtn));

    function switchLanguage(langToShow, langBtn) {
        // Hide all language elements
        deLang.forEach((element) => element.style.display = "none");
        enLang.forEach((element) => element.style.display = "none");

        // Show the selected language
        langToShow.forEach((element) => element.style.display = "");

        // Update button styles
        deBtn.classList.remove("active-button");
        enBtn.classList.remove("active-button");
        langBtn.classList.add("active-button");
    }
});

// nav
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

window.addEventListener("scroll", fixNav);

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add("active");
		if (nav.classList.contains("active")) {
			footer.classList.add("fixed");
		} else {
			footer.classList.remove("fixed");
		}
	} else {
		nav.classList.remove("active");
		footer.classList.remove("fixed");
	}
}

// h1 update
const enHeading = document.querySelector("h1.en_lang");
const deHeading = document.querySelector("h1.de_lang");

const enTexts = [
	"<span class='highlight'>Websites</span> Creator",
	"Freelance <span class='highlight'>Developer</span>",

	"<span class='highlight'>Front-End</span> Expert",
];

const deTexts = [
	"Créatrice de <span class='highlight'>sites web</span>",
	"<span class='highlight'>Développeuse</span> Freelance",

	"Experte <span class='highlight'>Front-end</span>",
];

let currentTextIndex = 0;

function updateText() {
	const enUnderline = enHeading.querySelector(".underline");
	const deUnderline = deHeading.querySelector(".underline");

	enUnderline.classList.add("hidden");
	deUnderline.classList.add("hidden");

	setTimeout(() => {
		enUnderline.innerHTML = enTexts[currentTextIndex];
		deUnderline.innerHTML = deTexts[currentTextIndex];

		enUnderline.classList.remove("hidden");
		deUnderline.classList.remove("hidden");
		currentTextIndex = (currentTextIndex + 1) % enTexts.length;
	}, 500);
}

updateText();
setInterval(updateText, 3000);
