let headerMenuBlurSet = document.querySelector("#menuButton");
let headerMenuBlurErase = document.querySelector("#closeMenu");
let menuHyperLink = document.querySelector(".menuHyperLink")

headerMenuBlurSet.addEventListener("click", addHeaderBlur);
headerMenuBlurErase.addEventListener("click", eraseHeaderBlur);
menuHyperLink.addEventListener("click", closeSideMenuOnHyperLink)

function addHeaderBlur() {
    document.getElementById("headerElement").classList.replace("bg-[#091021]", "bg-[#0f1627]");
    document.getElementById("logoCover").classList.add("bg-gray-900/50");
};

function eraseHeaderBlur() {
    document.getElementById("headerElement").classList.replace("bg-[#0f1627]", "bg-[#091021]");
    document.getElementById("logoCover").classList.remove("bg-gray-900/50");
};

function closeSideMenuOnHyperLink() {
    document.getElementById("drawer-right-example").classList.replace("transform-none", "translate-x-full");
    document.getElementById("drawer-right-example").removeAttribute("aria-modal");
    document.getElementById("drawer-right-example").removeAttribute("role");
    document.getElementById("drawer-right-example").setAttribute("aria-hidden", "true");
    document.getElementById("headerElement").classList.replace("bg-[#0f1627]", "bg-[#091021]");
    document.getElementById("logoCover").classList.remove("bg-gray-900/50");
    document.body.classList.remove("overflow-hidden")
    document.querySelector("[drawer-backdrop]").remove()
};