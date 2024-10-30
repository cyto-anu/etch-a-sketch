const container = document.querySelector(".container");


//creates and appends square number of divs:
function makeDivs(number) {

    if (number <= 30) {

        let containerWidth = 600;

        for (let i=1; i<=(number*number); i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.toggle("newDiv");
            newDiv.style.width = containerWidth/number + "px";
            container.appendChild(newDiv);
        };
    } else {
        console.log("too many divs!");
    }
};



makeDivs(10);
