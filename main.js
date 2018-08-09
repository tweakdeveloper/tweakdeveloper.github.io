function getAllNavLinks() {
    var navContainer = document.getElementsByTagName("nav")[0];
    return navContainer.getElementsByTagName("a");
}

function navigateToContent(event) {
    var clickedLink = event.target;
    var sections = document.getElementsByTagName("section");
    var navRef = clickedLink.getAttribute("href");
    var contentId = navRef.substring(1);
    for(var section = 0; section < sections.length; section++) {
        var contentSection = sections[section];
        if(contentSection.id == contentId) {
            contentSection.classList.add("selected-content");
        } else {
            contentSection.classList.remove("selected-content");
        }
    }
    var navLinks = getAllNavLinks();
    for(var link = 0; link < navLinks.length; link++) {
        var navLink = navLinks[link];
        if(navLink.getAttribute("href") == navRef) {
            navLink.classList.add("selected-tab");
        } else {
            navLink.classList.remove("selected-tab");
        }
    }
}

document.addEventListener("DOMContentLoaded", function(e) {
    var navLinks = getAllNavLinks();
    for(var link = 0; link < navLinks.length; link++) {
        var navLink = navLinks[link];
        navLink.addEventListener("click", navigateToContent);
    }
    var navAddress = window.location.hash;
    if(navAddress != null) {
        for(var link = 0; link < navLinks.length; link++) {
            var navLink = navLinks[link];
            if(navLink.getAttribute("href") == navAddress) {
                navLink.click();
                break;
            }
        }
    }
});