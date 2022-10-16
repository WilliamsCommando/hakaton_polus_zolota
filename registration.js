const form = document.getElementById('form');

function getFormValue(event) {
    event.preventDefault();
    const fields = document.querySelectorAll('input, select, text, textarea, email, radio, date, time');
    const values = {};
    fields.forEach(field => {
        const {name, value} = field;
        values[name] = value;
    });
    console.log(values);
}

form.addEventListener('submit', getFormValue);