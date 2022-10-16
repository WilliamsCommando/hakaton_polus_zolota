const form = document.getElementById('form');
const orderForm = document.getElementById('orderForm');

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
orderForm.addEventListener('submit', getFormValue);