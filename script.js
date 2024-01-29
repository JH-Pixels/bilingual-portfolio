// language switch
document.addEventListener("DOMContentLoaded", function () {
	const frBtn = document.getElementById("frBtn");
	const enBtn = document.getElementById("enBtn");
	const frLang = document.querySelectorAll(".fr_lang");
	const enLang = document.querySelectorAll(".en_lang");

	switchLanguage(enLang, enBtn);

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
