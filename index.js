let tab = [150,250,100];
let plus = document.querySelectorAll('.plus');
let moins = document.querySelectorAll('.moins');
let modelNumber = document.querySelectorAll('.model-number');
let modelPrice = document.querySelectorAll('.model-price');
let totalPrice = document.querySelector('.total-price');

for(let i = 0; i< tab.length; i++) {
    plus[i].addEventListener('click', () => {
        modelNumber[i].value = parseInt(modelNumber[i].value) + 1;
        modelPrice[i].value = parseInt(modelPrice[i].value) + tab[i];
        totalPrice.value= parseInt(totalPrice.value) + tab[i]
    })
    moins[i].addEventListener('click', () => {
        if(parseInt(modelNumber[i].value) >0) {
            modelNumber[i].value = parseInt(modelNumber[i].value) - 1;
            modelPrice[i].value = parseInt(modelPrice[i].value) - tab[i];
            totalPrice.value= parseInt(totalPrice.value) - tab[i]
        }
        
    })
}
let heartIcons = document.querySelectorAll('.heart');
for(let element of heartIcons) {
    let newColor = "";
    element.addEventListener('click', () => {
        console.log('click heart');
        if (newColor === 'red') {
            element.style.color = '#aab8c2';
            newColor = '#aab8c2';
        } else {
            element.style.color = 'red';
            newColor = 'red';
        }
        
    })
}

let deleteIcons = document.querySelectorAll('.delete');
 
for(let element of deleteIcons) {
    element.addEventListener('click', () => {
        console.log(element);
        console.log(element.parentNode);
        console.log(element.parentNode.parentNode);
        element.parentNode.parentNode.remove();
        // element.remove();
    })
}