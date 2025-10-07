/* ulaşıp değiştirmek istediğimiz classlarımızı değişkenlerini oluştuyoruz.
css de bulunan elementlerim progress butonlar prev ve next.. şeklinde gdiyor.
sadece circles da querySelectorAll kullandım çünkü birden fazla var. */

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
let currentActive = 1 // bu değişkeni active basamak için kullandım.

/* next değişkenime event listener ekleyip tıklama olayı gerçekleştiğinde basamağı
yani currentActive'i bir arttırıyorum yani 2 oluyor. */
next.addEventListener('click', ()=>{
    currentActive++

/* burada circle nodes da 4 adet olduğu için  */    
    if (currentActive > circles.length){
            currentActive = circles.length
    }
/* update fonksiyonumuzu çağırarak currentActive'i güncelliyorum. */   
    update()
})

prev.addEventListener('click', ()=>{
    currentActive--

    if (currentActive < 1){
        currentActive = 1
    }
    update()
})

function update(){
    circles.forEach((circle, idx)=>{
        if (idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    /* active olan class larımızın hepsini actives değişkenine alıyoruz. */
    const actives = document.querySelectorAll('.active')

    /* Yüzde olarak ilerlemesi için 100 ile çarptık ve concatenate yaptık % ile */
    progress.style.width = (actives.length-1)/(circles.length-1)*100+'%'

    if (currentActive === 1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}