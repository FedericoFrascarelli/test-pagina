(function(){
   
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#Next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener ('click', ()=>{
        changePosition(1);
    })

    buttonBefore.addEventListener ('click',  ()=>{
        changePosition(-1); 
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').datase.id;
        value = Number(currentTestimony);
        value+= add; 

        slider[Number(currentTestimony)-1].classList.remove('')
        if(value === sliders.length+1 || value === 0 ){
            value = value === 0 ? sliders.length  : 1;

        }

        sliders[value-1].classList.add('testimony__body--show');


    }
})();