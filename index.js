async function checkLinks() {
    const links = document.querySelectorAll(".buttons a.item");

    for (const link of links) {
        const href = link.getAttribute("href");
        
        if (!href) {
            link.classList.add("disabled");
            continue;
        }

        try {
            await fetch(href, { method: "HEAD", mode: "no-cors" });
        } catch (err) {
            link.onclick = preventDefault;

            link.classList.add("disabled");
            continue;
        }

        link.onclick = null;
        link.classList.remove("disabled");
    }
}
checkLinks();

function preventDefault(e) {
    e?.preventDefault();
}