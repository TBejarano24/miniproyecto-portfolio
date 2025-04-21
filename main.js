let headerMenuBlurSet = document.querySelector("#menuButton");
let headerMenuBlurErase = document.querySelector("#closeMenu");
let menuHyperLink = document.querySelector(".menuHyperLink")
let darkModeToggle = document.querySelector("#darkModeToggleButton")

headerMenuBlurSet.addEventListener("click", addHeaderBlur);
headerMenuBlurErase.addEventListener("click", eraseHeaderBlur);
menuHyperLink.addEventListener("click", closeSideMenuOnHyperLink)
darkModeToggle.addEventListener("click", switchDarkMode)

function addHeaderBlur() {
    if (document.documentElement.classList.contains("dark")) {
        document.getElementById("headerElement").classList.replace("dark:bg-[#091021]", "dark:bg-[#0f1627]");
        document.getElementById("logoCover").classList.add("bg-[#0f162780]");
    }
    else {
        document.getElementById("headerElement").classList.replace("bg-white", "bg-[#888c94]");
        document.getElementById("logoCover").classList.add("bg-[#888c94]");
    }
};

function eraseHeaderBlur() {
    if (document.documentElement.classList.contains("dark")) {
        document.getElementById("headerElement").classList.replace("dark:bg-[#0f1627]", "dark:bg-[#091021]");
        document.getElementById("logoCover").classList.remove("bg-[#0f162780]");
    }
    else {
        document.getElementById("headerElement").classList.replace("bg-[#888c94]", "bg-white");
        document.getElementById("logoCover").classList.remove("bg-[#888c94]");
    }
};

function closeSideMenuOnHyperLink() {
    document.getElementById("drawer-right-example").classList.replace("transform-none", "translate-x-full");
    document.getElementById("drawer-right-example").removeAttribute("aria-modal");
    document.getElementById("drawer-right-example").removeAttribute("role");
    document.getElementById("drawer-right-example").setAttribute("aria-hidden", "true");
    if (document.documentElement.classList.contains("dark")) {
        document.getElementById("headerElement").classList.replace("bg-[#0f1627]", "bg-[#091021]");
        document.getElementById("logoCover").classList.remove("bg-[#0f162780]");
    }
    else {
        document.getElementById("headerElement").classList.replace("bg-[#888c94]", "bg-white");
        document.getElementById("logoCover").classList.remove("bg-[#888c94]");
    }
    document.body.classList.remove("overflow-hidden");
    document.querySelector("[drawer-backdrop]").remove();
};

function switchDarkMode() {
    document.documentElement.classList.toggle("dark");
};