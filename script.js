const container = document.querySelector(".container");


function makeDivs(number) {

    if (number <= 10) {

        for (let i=1; i<=(number*number); i++) {
            const newDiv = document.createElement("div");
            container.appendChild(newDiv);
        };
    }

    
};

makeDivs(2);
