let but1 = document.querySelector('.but1');
let but2 = document.querySelector('.but2');
let but3 = document.querySelector('.but3');
let but4 = document.querySelector('.but4');
let but5 = document.querySelector('.but5');
let minSorted =  document.querySelector('.minSorted');
let maxSorted =  document.querySelector('.maxSorted');
let min =  document.querySelector('.min');
let max = document.querySelector('.max');
let multipl = document.querySelector('.multipl');
let arra = document.querySelector('.arr');
let arr = [];

class newProp extends Array{
    sortMin(){
        arr.sort((a,b) => a-b);
        minSorted.innerText = '';
        minSorted.innerText = arr;
    }
    sortMax(){
        arr.sort((a,b) => b-a);
        maxSorted.innerText = '';
        maxSorted.innerText = arr;
    }
    minim(){
        min.innerText = Math.min(...arr);
    }
    maxim(){
        max.innerText = Math.max(...arr);
    }
    multi(){
        multipl.innerText = arr.reduce((pr, el) => pr * el,1);
    }
}
let newP = new newProp;
for(let i = 0; i < Math.floor(Math.random()*6+6); i++){
    arr.push(Math.floor(Math.random()*19+1))
}
arra.innerText = `[ ` + arr + ` ]`;

but1.addEventListener('click', newP.sortMin);
but2.addEventListener('click', newP.sortMax);
but3.addEventListener('click', newP.maxim);
but4.addEventListener('click', newP.minim);
but5.addEventListener('click', newP.multi);

