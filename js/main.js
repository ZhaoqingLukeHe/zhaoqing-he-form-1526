let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

let fn = document.getElementById('full-name');
let em = document.getElementById('email');
let mg = document.getElementById('message');
let sb = document.getElementById('submitbutton');

function formValidation() {
    let data = {};
    let errors = [];

    if (fn.value.trim() !== '') {
        data.fullname = fn.value;
    } else {
        errors.push('Please fill in your full name.');
    }

    if (em.value.trim() !== '') {
        if (pattern.test(em.value)) {
            data.email = em.value;
        } else {
            errors.push('Invalid email.');
        }
    } else {
        errors.push('Please fill in your email.');
    }

    if (mg.value.trim() !== '') {
        data.message = mg.value;
    } else {
        errors.push('Please fill in a message.');
    }

    if (errors.length === 0) {
        console.log(data);
    } else {
        console.log(errors);
    }
}

sb.addEventListener('click', formValidation);
