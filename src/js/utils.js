import check from "../img/check.svg";

export function setCheckSvgImages() {
    document.querySelectorAll("[data-check]").forEach((e) => {
        const svg = document.createElement("svg");
        svg.className = "check";
        svg.innerHTML = check;
        e.prepend(svg);
    });
}