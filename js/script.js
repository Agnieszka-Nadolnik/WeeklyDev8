AOS.init();

//MENU
const btnHamburger = document.querySelector('.menu_toggle');
const menu = document.querySelector('nav');
// const menuContainer = document.querySelector('.menu_container');
// const mobile = window.matchMedia('screen and (max-width = 768px)');

const showMenu = () => {
    btnHamburger.classList.toggle('active_menu');
    btnHamburger.classList.toggle('is-active');
    
    if(btnHamburger.classList.contains('active_menu')) {
        menu.style.top = '0';
    } else if(!btnHamburger.classList.contains('active_menu')) {
        menu.style.top = '-800%';
    }
}
btnHamburger.addEventListener('click', showMenu);


$(document).on('click', 'a', function(event){
    event.preventDefault();
 
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 70
    }, 700);
});




//PROGRESS BAR


const counterProject = document.getElementById('counter_project').getContext('2d');
const counterClient = document.getElementById('counter_client').getContext('2d');
const counterMonth = document.getElementById('counter_month').getContext('2d');

const divContainer = [...document.querySelectorAll('.progress_bar')];

const counterArr = [counterProject, counterClient, counterMonth];

const counterColor = ['#f34739', '#009989', '#152b3c'];
const counterNumber = [50, 35, 80];
const innerTxt = ['Big projects', 'Clients', 'Months'];
let pointToFill = 4.72;
let cw = 200;
let ch = 200;


const setTime = (counter, color, numberOf) => {
    let num = 0;

    let idInterval = setInterval(() => {
    let diff=((num/100) * Math.PI*2*10);
    counter.clearRect(0,0,cw,ch);

    counter.lineWidth = 5;

    counter.fillStyle = color;

    counter.strokeStyle = color;

    counter.textAlign = 'center';

    counter.font = '50px arial';
    
    counter.fillText(num, 100, 110);

    counter.beginPath();

    counter.arc(100,100,90,pointToFill, diff/10+pointToFill);

    counter.stroke();

    if(num >= numberOf) {
        clearTimeout(idInterval);
    }
    num++;
    }, 50);
}



const showCounter = () => {
    for(let i=0; i < counterArr.length; i++) {
        setTime(counterArr[i], counterColor[i], counterNumber[i], innerTxt[i]); 
    }

    divContainer.forEach((container, i) => {
       let txt = document.createElement('p');
        container.appendChild(txt);
        txt.classList.add('txt_progress_bar');
        txt.innerHTML = innerTxt[i].toUpperCase();;
    })
}

window.addEventListener('load', showCounter);



//BRANDS 


const brandsContainer = document.querySelector('.brands_content');

const brandList = ['allegro.png', 'AMD.png', 'Android.png', 'apple.png', 'AVG.png', 'bosh.png', 'Dell.png', 'EA.png', 'HF2.png', 'HP.png', 'HTML5.png', 'Insta.png', "Intel.png", 'KFC.png', 'microsoft.png', 'NIKE.png', 'Nivea.png', 'playstation.png', 'Shell.png', 'teamspeak.png', 'ubuntu.png', 'ups.png', 'vw.png'];

let numberOfBrand = 0;
let maxMobileBrand = 12
  
const showBrands = () => {

  for(let i=0; i < brandList.length; i++) {
        if(numberOfBrand < maxMobileBrand ) {
            const brandImg = document.createElement('img');
            brandsContainer.appendChild(brandImg);
            brandImg.src =`./img/brand/${brandList[i]}`;
            brandImg.setAttribute('data-aos', "flip-left");
        } else if(numberOfBrand > maxMobileBrand) {
            return;
        };
        numberOfBrand++;
    }
}
window.addEventListener('load', showBrands);


//PORTFOLIO

const portfolioContainer = document.querySelector('.portfolio_content');
const samplePortfolioImg =[...portfolioContainer.querySelectorAll('.sample_portfolio')];
let numPortfolio = 20;


const showPortfolio = () => {
    let innerW = window.innerWidth;

    for(let i = 1; i<=numPortfolio; i++) {
        
            const portfolioImg = document.createElement('div');
            portfolioContainer.appendChild(portfolioImg);
            portfolioImg.classList.add('sample_portfolio');
            portfolioImg.style.backgroundImage =`url('./img/portfolio/Layer${i}.png')`;
            
            const eye = document.createElement('img');
            portfolioImg.appendChild(eye);
            eye.src = './img/eye.png';
    }
}



window.addEventListener('load', showPortfolio);














