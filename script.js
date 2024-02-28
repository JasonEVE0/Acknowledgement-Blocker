let bigw_timer = 0;
let bigw_interval;

if (window.location.href.includes("bigw.com.au")){
    bigw_interval = setInterval(remove_ack_bigw, 10);
}

// gmail is a single page application (SPA) so the removal process needs to run continuously.
if (window.location.href.includes("mail.google.com")){
    setInterval(remove_ack_spans, 100);
}

window.addEventListener("load", remove_ack_paragraphs);

// remove acknowledgements from dynamic websites that aren't covered by the general cases
function remove_ack_bigw() {
        let element = document.querySelector('.footer-section.footer-country');
        if (element) {
            element.remove();
        }
        bigw_timer += 10;
        if (bigw_timer >= 1000){
            clearInterval(bigw_interval);
        }
}

function remove_ack_spans() {
    const elements = document.querySelectorAll('span');

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
