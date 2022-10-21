/* start Specialized in slider */
let thSliderItems= Array.from(document.querySelectorAll('.th-slider-items'));

let thCount=thSliderItems.length;

let thCurrentSlide=3;

let thNextButton=document.getElementById('thnext');

let thPrevButton=document.getElementById('thprev');

const thNextSlide =() =>{
    if(thCurrentSlide==thCount){
        thCurrentSlide=1
    }else{
        thCurrentSlide++;
    }
    thCheck();
}

const thPrevSlide =() =>{
    if(thCurrentSlide==1){
        thCurrentSlide=count;
    }else{
        thCurrentSlide--;
    }
    thCheck();
}

thNextButton.onclick = thNextSlide;

thPrevButton.onclick = thPrevSlide;

let thIndicatorsElement =document.createElement('ul');

thIndicatorsElement.setAttribute('id' , 'thindicators-ul');

for (let i =1;  i <=thCount;i++) {
    let thIndicatorsItems=document.createElement('li');
    thIndicatorsItems.setAttribute('data' ,i);
    thIndicatorsElement.appendChild(thIndicatorsItems);
}

document.getElementById('thindicators').appendChild(thIndicatorsElement);

let thIndicatorsBolets= Array.from(document.querySelectorAll('#thindicators-ul li'));

for(let i=0;i<thIndicatorsBolets.length;i++){
    thIndicatorsBolets[i].onclick= ()=>{
        thCurrentSlide=parseInt(thIndicatorsBolets[i].getAttribute('data'));
        thCheck();
    }
}

const thCheck =() =>{
    thInactiveAll();
    thSliderItems[thCurrentSlide-1].classList.add('active');
    thIndicatorsElement.children[thCurrentSlide-1].classList.add('active');
}

const thInactiveAll =()=>{
    thSliderItems.forEach((img) =>{
        img.classList.remove('active');
    });

    thIndicatorsBolets.forEach((Element) =>{
        Element.classList.remove('active');
    });
}

thCheck();
/* end Specialized in slider */