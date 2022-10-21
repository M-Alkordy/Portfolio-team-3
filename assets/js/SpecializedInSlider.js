/* start Specialized in slider */
let sliderItems= Array.from(document.querySelectorAll('.slider-items'));

let count=sliderItems.length;

let currentSlide=3;

let nextButton=document.getElementById('next');

let prevButton=document.getElementById('prev');

const nextSlide =() =>{
    if(currentSlide==count){
        currentSlide=1
    }else{
        currentSlide++;
    }
    check();
}

const prevSlide =() =>{
    if(currentSlide==1){
        currentSlide=count;
    }else{
        currentSlide--;
    }
    check();
}

nextButton.onclick = nextSlide;

prevButton.onclick = prevSlide;

let indicatorsElement =document.createElement('ul');

indicatorsElement.setAttribute('id' , 'indicators-ul');

for (let i =1;  i <=count;i++) {
    let indicatorsItems=document.createElement('li');
    indicatorsItems.setAttribute('data' ,i);
    indicatorsElement.appendChild(indicatorsItems);
}

document.getElementById('indicators').appendChild(indicatorsElement);

let indicatorsBolets= Array.from(document.querySelectorAll('#indicators-ul li'));

for(let i=0;i<indicatorsBolets.length;i++){
    indicatorsBolets[i].onclick= ()=>{
        currentSlide=parseInt(indicatorsBolets[i].getAttribute('data'));
        check();
    }
}

const check =() =>{
    inactiveAll();
    sliderItems[currentSlide-1].classList.add('active');
    indicatorsElement.children[currentSlide-1].classList.add('active');
}

const inactiveAll =()=>{
    sliderItems.forEach((img) =>{
        img.classList.remove('active');
    });

    indicatorsBolets.forEach((Element) =>{
        Element.classList.remove('active');
    });
}

check();
/* end Specialized in slider */