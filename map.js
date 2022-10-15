const form = document.getElementById('form_car');
function getFormValue(event) {
    event.preventDefault();
    const fields = document.querySelectorAll('input, select, text, textarea');
    const values = {};
    fields.forEach(field => {
        const {name, value} = field;
        values[name] = value;
    });
    console.log(values);
}
form.addEventListener('submit', getFormValue);