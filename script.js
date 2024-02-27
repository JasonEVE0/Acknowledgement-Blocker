let timer = 0;
let bigw_interval;

if (window.location.href.includes("bigw.com.au")){
    bigw_interval = setInterval(remove_ack_bigw, 10);
}

window.addEventListener("load", remove_ack_paragraphs);

// remove acknowledgements from dynamic websites that aren't covered by the general cases
function remove_ack_bigw() {
        let element = document.querySelector('.footer-section.footer-country');
        if (element) {
            element.remove();
        }
        timer += 10;
        if (timer >= 500){
            clearInterval(bigw_interval);
        }
}

// remove acknowledgements in general cases
function remove_ack_paragraphs() {
    const elements = document.querySelectorAll('p');

    elements.forEach(element => {
        if (element.textContent.toLowerCase().includes("traditional custodians") || element.textContent.toLowerCase().includes("traditional owners")) {
            if (element.parentElement != null) {
                element.parentElement.style.visibility = "hidden";
            } else {
                element.style.visibility = "hidden";
            }
        }
    });
}
