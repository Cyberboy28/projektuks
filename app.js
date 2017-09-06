// Intervals & Timeouts

setTimeout(fn, 2000)

function fn(){
    console.log('2s atidejimas')
}

var startCount = setInterval(getNr, 500)

var x= 0;

function getNr(){
//    console.log(x)
    x++;
    if(x==10){
        clearInterval(startCount)
    }
}

// Nuotrauku galerija

var foto = document.querySelector('.foto');
var i =0;
setInterval(function(){
    console.log(i);
    i++;
    foto.style.transition='1s';
    if(i==4){
        i=1
    }
    foto.style.backgroundImage= `url('b${i}.jpg')`;
//    foto.style.backgroundImage= "url('b"+i+".jpg')";
    
    
},2000)


// padaryti besikecianti uzrasas landing page
// parsisiusti GIT BASH
// uzsiregistruoti github.com svetaineje













