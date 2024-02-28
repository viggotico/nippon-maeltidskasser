const selectors = [
    '#tilpas-content-part-1',
    '#tilpas-content-part-2',
    '#tilpas-content-part-3',
    '#tilpas-content-part-4',
    '#tilpas-content-part-5'
];
const sections = document.querySelectorAll(selectors.join(', '));

const getPartId = (partNumber) => `tilpas-content-part-${partNumber}`;
const togglePart = (partNumber, reset = false) => {
    const part = getPartId(partNumber);
    sections.forEach((section) => {
        if (part !== section.id) section.style.display = "none";
        else {
            section.style.display = "flex";
            const backButton = section.querySelector('#tilpas-content-back');
            if (backButton) {
                backButton.addEventListener("click", () => {
                    togglePart(!reset ? (parseFloat(part.split('-')[3]) - 1) : 1);
                });
            }
        }
    });
};

sections.forEach((section, i) => {
    const optionNumbers = section.querySelectorAll('.tilpas-content-number');
    const optionCards = section.querySelectorAll('.tilpas-content-card');
    const button = section.querySelector('button');
    switch (i) {
        case 0: optionNumbers.forEach(option => option.addEventListener('click', () => togglePart(2))); break;
        case 1: optionCards.forEach(option => option.addEventListener('click', () => togglePart(3))); break;
        case 2: optionNumbers.forEach(option => option.addEventListener('click', () => togglePart(4))); break;
        case 3:
            button.addEventListener('click', () => {
                let valid = true;
                const inputs = section.querySelectorAll("input");
                inputs.forEach(input => {
                    if (!valid) return;
                    if (input.type === 'checkbox' && !input.checked) {
                        varsel();
                        return;
                    }
                    if (!input.value || input.value.length === 0) {
                        varsel();
                        return;
                    }

                    function varsel() {
                        alert("Felterne må ikke være tomme og husk at acceptér betingelserne!");
                        valid = false;
                    }
                });
                if (!valid) return;
                togglePart(5, true);
            });
        break;
    }
});