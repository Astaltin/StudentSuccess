const addAgendaButton = document.querySelector('#addAgendaButton');
const agendasList = document.querySelector('#agendasList');

addAgendaButton.addEventListener('click', (event) => {
    event.preventDefault();

    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('placeholder', 'Any plans?');
    agendasList.appendChild(textInput); 

    textInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && textInput.value !== '') {
            const li = document.createElement('li');
            const inputCheckBox = document.createElement('input');
            const p = document.createElement('p');

            const newAgendaValue = textInput.value;

            textInput.remove();
            inputCheckBox.setAttribute('type', 'checkbox');
            p.innerText = newAgendaValue;
            agendasList.appendChild(li);

            const li_last = agendasList.lastChild;

            li_last.appendChild(inputCheckBox);
            li_last.appendChild(p);
        }   
    });
});

agendasList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName === 'LI')
        agendasList.removeChild(event.target);
});