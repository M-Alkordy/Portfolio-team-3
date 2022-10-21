/* start Clients slider */
let SecSliderItems= Array.from(document.querySelectorAll('.slider-img'));

let SecCount=SecSliderItems.length;

let SecCurrentSlide=3;

let SecNextButton=document.getElementById('Secnext');

let SecPrevButton=document.getElementById('Secprev');

const SecNextSlide =() =>{
    if(SecCurrentSlide==SecCount){
        SecCurrentSlide=1
    }else{
        SecCurrentSlide++;
    }
    SecCheck();
}

const SecPrevSlide =() =>{
    if(SecCurrentSlide==1){
        SecCurrentSlide=SecCount;
    }else{
        SecCurrentSlide--;
    }
    SecCheck();
}

SecNextButton.onclick = SecNextSlide;

SecPrevButton.onclick = SecPrevSlide;

let SecIndicatorsElement =document.createElement('ul');

SecIndicatorsElement.setAttribute('id' , 'secindicators-ul');

for (let i =1;  i <=SecCount;i++) {
    let SecIndicatorsItems=document.createElement('li');
    SecIndicatorsItems.setAttribute('data' ,i);
    SecIndicatorsElement.appendChild(SecIndicatorsItems);
}
document.getElementById('secindicators').appendChild(SecIndicatorsElement);

let SecIndicatorsBolets= Array.from(document.querySelectorAll('#secindicators-ul li'));

for(let i=0;i<SecIndicatorsBolets.length;i++){
    SecIndicatorsBolets[i].onclick= ()=>{
        SecCurrentSlide=parseInt(SecIndicatorsBolets[i].getAttribute('data'));
        SecCheck();
    }
}

const SecCheck =() =>{
    SecInactiveAll();
    SecSliderItems[SecCurrentSlide-1].classList.add('active');
    SecIndicatorsElement.children[SecCurrentSlide-1].classList.add('active');
}

const SecInactiveAll =()=>{
    SecSliderItems.forEach((img) =>{
        img.classList.remove('active');
    });

    SecIndicatorsBolets.forEach((Element) =>{
        Element.classList.remove('active');
    });
}

SecCheck();
/* end Clients slider */