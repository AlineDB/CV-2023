

if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
    let observer = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < 0) {
            document.querySelector(".header__nav").classList.add("fixed");
        } else {
            document.querySelector(".header__nav").classList.remove("fixed");
        }
    });
    observer.observe(document.querySelector(".header__nav"));
}