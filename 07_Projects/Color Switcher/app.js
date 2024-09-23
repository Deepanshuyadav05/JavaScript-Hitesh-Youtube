const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');
buttons.forEach((button) => {
button.addEventListener('click', function (e) {
    if(e.target.id == 'grey'){
        body.style.backgroundColor = 'grey';
    }
    if(e.target.id == 'red'){
        body.style.backgroundColor = 'red';
    }
    if(e.target.id == 'blue'){
        body.style.backgroundColor = 'blue';
    }
    if(e.target.id == 'purple'){
        body.style.backgroundColor = 'purple';
    }
})
})