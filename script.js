// language switch
document.addEventListener("DOMContentLoaded", function () {
	const frBtn = document.getElementById("frBtn");
	const enBtn = document.getElementById("enBtn");
	const frLang = document.querySelectorAll(".fr_lang");
	const enLang = document.querySelectorAll(".en_lang");

	const userLanguage = navigator.language || navigator.userLanguage;
	if (userLanguage.startsWith("fr")) {
		switchLanguage(frLang, frBtn);
	} else {
		switchLanguage(enLang, enBtn);
	}

	frBtn.addEventListener("click", () => switchLanguage(frLang, frBtn));
	enBtn.addEventListener("click", () => switchLanguage(enLang, enBtn));

	function switchLanguage(lang, langBtn) {
		lang.forEach((element) => element.classList.remove("inactive-lang"));

		const otherLang = langBtn === frBtn ? enLang : frLang;
		otherLang.forEach((element) => element.classList.add("inactive-lang"));

		langBtn.classList.add("active-button");
		const otherLangBtn = langBtn === frBtn ? enBtn : frBtn;
		otherLangBtn.classList.remove("active-button");
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
const frHeading = document.querySelector("h1.fr_lang");

const enTexts = [
	"<span class='highlight'>Websites</span> Creator",
	"Freelance <span class='highlight'>Developer</span>",

	"<span class='highlight'>Front-End</span> Expert",
];

const frTexts = [
	"Créatrice de <span class='highlight'>sites web</span>",
	"<span class='highlight'>Développeuse</span> Freelance",

	"Experte <span class='highlight'>Front-end</span>",
];

let currentTextIndex = 0;

function updateText() {
	const enUnderline = enHeading.querySelector(".underline");
	const frUnderline = frHeading.querySelector(".underline");

	enUnderline.classList.add("hidden");
	frUnderline.classList.add("hidden");

	setTimeout(() => {
		enUnderline.innerHTML = enTexts[currentTextIndex];
		frUnderline.innerHTML = frTexts[currentTextIndex];

		enUnderline.classList.remove("hidden");
		frUnderline.classList.remove("hidden");
		currentTextIndex = (currentTextIndex + 1) % enTexts.length;
	}, 500);
}

updateText();
setInterval(updateText, 3000);
