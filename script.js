const container = document.querySelector(".container");

//creates and appends square number of divs and sets width of divs:
function makeDivs(number) {

    if (number <= 100) {

        let containerWidth = 600;

        for (let i=1; i<=(number*number); i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.toggle("newDiv");
            newDiv.style.width = containerWidth/number + "px";
            container.appendChild(newDiv);
        };
        const newDivs = document.querySelectorAll(".newDiv");

        newDivs.forEach((div) => {
            div.addEventListener("mouseover", ()=> {
            div.style.backgroundColor = "black";
    });
});

    } else {
        console.log("too many divs!");
    }
};

makeDivs(50);

//function to change size and delete previous etch
const sizeBtn = document.querySelector("button");

sizeBtn.addEventListener("click", ()=> {
    const userInput = prompt("please input number of boxes");
    container.replaceChildren();
    makeDivs(userInput);
});
