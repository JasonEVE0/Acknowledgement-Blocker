const elements = document.querySelectorAll('p');

elements.forEach(element => {
    if (element.textContent.toLowerCase().includes("traditional custodians")) {
        if (element.parentElement != null){
            element.parentElement.style.visibility = "hidden";
        } else {
            element.style.visibility = "hidden";
        }
    }
});