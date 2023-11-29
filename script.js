const testBody = document.querySelector('.test__body');
const btnLog = document.querySelector('.test__log');
const input = document.querySelector('.test__body input');
const btnClear = document.querySelector('.test__clear');
const btnBlock = document.querySelector('.test__block');
const btnHide = document.querySelector('.test__hide');
const btnColor = document.querySelector('.test__color');
const btnCreate = document.querySelector('.test__creare');
const btnRemove = document.querySelector('.test__remove');
const btnNthRemove = document.querySelector('.test__remove-nth');
const inputNum = document.querySelector('.test__numbers input');

document.addEventListener('DOMContentLoaded', () => {
    btnLog.addEventListener('click', () => input.value !=='' && console.log(input.value));
    btnClear.addEventListener('click', () => input.value = '');
    btnBlock.addEventListener('click', () => input.disabled =  input.disabled === false ? true : false)
    btnHide.addEventListener('click', () => input.classList.toggle('hide'));
    btnColor.addEventListener('click', () => {
        const colors = ['black', 'red', 'green', 'blue'];
        const randomNum = Math.floor(Math.random() * 4);
        input.style.backgroundColor = colors[randomNum];
    });
    btnCreate.addEventListener('click', () => {
        if(input.value !== ''){
            const createBlock = document.createElement('div');
            createBlock.classList.add('new-block')
            createBlock.textContent = input.value;
            testBody.append(createBlock);
            input.value = '';
        }
    });
    btnRemove.addEventListener('click', () => {
        if(document.querySelector('.new-block')){
            testBody.lastElementChild.remove()
        }
    });
    btnNthRemove.addEventListener('click', () => {
        const newBlock = document.querySelectorAll('.new-block');
        let numValue = inputNum.value;
        if(numValue !== ''){
            if(newBlock[numValue - 1]){
                newBlock[numValue - 1].remove();
                numValue = 0
            }
        }
        inputNum.value = ''
    })
})