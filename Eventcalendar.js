const btns = document.querySelectorAll(".button-value");
const events = document.querySelectorAll(".card");


for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        console.log(filter)
        events.forEach((events) => {
            if (filter == "all") {
                events.style.display = "block"
            } else {
                if (events.classList.contains(filter)){
                    events.style.display = "block"
                } else{
                    events.style.display = "none"
                }
            }
        })
    })

}


for (i = 0; i < mnth.length; i++) {

    mnth[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        console.log(filter)
        events.forEach((events) => {
            if (filter == "all") {
                events.style.display = "block"
            } else {
                if (events.classList.contains(filter)){
                    events.style.display = "block"
                } else{
                    events.style.display = "none"
                }
            }
        })
    })

}

