const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections= document.querySelector('.main-content');

function pageNext(){ 
    //active botton
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    //section active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if (id){
            //remove selested from the other botton
            secBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other section
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

pageNext();