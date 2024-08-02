const element_div = document.getElementById('periodic_table');
const element_details = document.getElementById('element_details')
const element_img = document.getElementById('element_img')

// Fetch the elements data from a local JSON file
fetch('elements.json')
    .then(response => response.json())
    .then(data => {
        const elements = data.elements;

        elements.forEach(element => {
            const elementDiv = document.createElement('div');
            elementDiv.classList.add('element');

            elementDiv.innerHTML = `
            <div class="symbol">${element.symbol}</div>
            `;

            // handling for lanthanoids and actinoids
            if (element.number >= 57 && element.number <= 71) {
                // Lanthanoids
                elementDiv.style.gridArea = `8 / ${element.number - 56}`;
            } else if (element.number >= 89 && element.number <= 103) {
                // Actinoids
                elementDiv.style.gridArea = `9 / ${element.number - 88}`;
            } else {
                // General elements
                elementDiv.style.gridArea = `${element.period} / ${element.group}`;
            }

            if (element.group <= 2) {
                elementDiv.style.background = '#ACECF7';
                elementDiv.style.color = "#1b1b1b"
                elementDiv.style.border = "1px solid #ACECF7"
            }

            if ((element.group > 2) && (element.group <= 12)) {
                elementDiv.style.background = '#F4989C';
                elementDiv.style.color = "#1b1b1b"
                elementDiv.style.border = "1px solid #F4989C"
            }
            if (element.group > 12) {
                elementDiv.style.background = '#EBD2B4';
                elementDiv.style.color = "#1b1b1b"
                elementDiv.style.border = "1px solid #EBD2B4"
            }

            elementDiv.addEventListener('click', () => {
                element_img.innerHTML = `
                                <img style="width: 100%;" src=${element.image.url} alt="">
                `
                element_details.innerHTML = `
                <h3>Name: ${element.name} </h3>
                <h3>Symbol: ${element.symbol}</h3>
                <h3>Atomic Mass: ${element.atomic_mass}</h3>
                <h3>Density: ${element.density}</h3>
                <h3>Number: ${element.number}</h3>
                <h3>Group: ${element.group}</h3>
                <h3>Period: ${element.period}</h3>
                <h3>Block: ${element.block}</h3>
                <h3>Electron Configuration: ${element.electron_configuration}</h3>
                <h3>Shells: ${element.shells}</h3>
            `
            })

            element_div.appendChild(elementDiv);
        });

        // Add placeholders for the lanthanoids and actinoids labels
        const lanthanoidsLabel = document.createElement('div');
        lanthanoidsLabel.classList.add('element');
        lanthanoidsLabel.style.gridArea = '8 / 1 / 8 / 19';
        lanthanoidsLabel.innerHTML = '<div class="name">Lanthanoids</div>';
        lanthanoidsLabel.style.background = "#E7CFCD";
        lanthanoidsLabel.style.border = "1px solid #E7CFCD"
        element_div.appendChild(lanthanoidsLabel);

        const actinoidsLabel = document.createElement('div');
        actinoidsLabel.classList.add('element');
        actinoidsLabel.style.gridArea = '9 / 1 / 9 / 19';
        actinoidsLabel.style.background = "#E7CFCD"
        actinoidsLabel.style.border = "1px solid #E7CFCD"
        actinoidsLabel.innerHTML = '<div class="name">Actinoids</div>';
        element_div.appendChild(actinoidsLabel);


    });