

// let toggler = `     <div class="toggler">
//                     <div class="line"></div>
//                     <div class="line"></div>
//                     <div class="line"></div>
//                     </div>`;

// let place = document.querySelector('.page-container');
// function abc(){
//     if(window.innerWidth <= 900) {
//         place.insertAdjacentHTML('beforeend', toggler);
//         console.log('gotowe');
        
//     }
   
    
// }

// window.addEventListener('resize', abc);
const sections = {
    hero: '.hero',
    features: '.features',
    charging: '.charging',
    strapts: '.strapts',
    moreFeatures: '.moreFeatures',
    price: '.price',
    newsletter: '.newsletter'
}

let sectionsStatus = {
    hero: false,
    features: false,
    charging: false,
    strapts: false,
    moreFeatures: false,
    price: false,
    newsletter: false
}

const sectionOffset = {
    features: document.querySelector(sections.features).offsetTop,
    charging: document.querySelector(sections.charging).offsetTop,
    strapts: document.querySelector(sections.strapts).offsetTop,
    moreFeatures: document.querySelector(sections.moreFeatures).offsetTop,
    price: document.querySelector(sections.price).offsetTop,
    newsletter: document.querySelector(sections.newsletter).offsetTop,
}



window.addEventListener('DOMContentLoaded', () => {
    TweenMax.to(['.hero-img','.hero-text-box'], 1, {x: "0", opacity: "1"})
    TweenMax.to('.navbar-content ul li', 1.2, {x: "0", opacity: "1"})

});


function featuresAnimation() {

        TweenMax.to('.f1 > .content', 1, {x: "0", opacity: "1"})
        TweenMax.to('.f2 > .content', 1, {delay: .5, x: "0", opacity: "1"})
        TweenMax.to('.f3 > .content', 1, {delay: 1, x: "0", opacity: "1"})

        TweenMax.to('.f4 > .content', 1, {delay: 1.5, x: "0", opacity: "1"})
        TweenMax.to('.f5 > .content', 1, {delay: 2, x: "0", opacity: "1"})
        TweenMax.to('.f6 > .content', 1, {delay: 2.5, x: "0", opacity: "1"}) 
     
        sectionsStatus.features = true;
}

function chargingAnimation() {
   
  
        TweenMax.to('.charging__picture-box', 1, {x: "0", opacity: "1"})
        TweenMax.to('.charging__text-box', 1, {x: "0", opacity: "1"})
        sectionsStatus.charging = true;
    
}

function heroAnimation(){
   
        TweenMax.to('.hero-text-box', 2, {x: "300px", opacity: "0"} )
        TweenMax.to('.hero-img', 2, {x: "-300px", opacity: "0"})
        TweenMax.to('.navbar-content ul li', 3.1, {x: "300px", opacity: "0"})
        sectionsStatus.hero = true;
}

function straptsAnimation(){
   
    TweenMax.to('.strapts__picture-box', 1, {x: "0", opacity: "1"})
    TweenMax.to('.strapts__text-box', 1, {x: "0", opacity: "1"})
    sectionsStatus.strapts = true;
}

function moreFeaturesAnimation(){
    delay = {
       delay1: 1,
       delay2: .5,
       delay3: 0   
    }

   if(window.innerWidth < 1026) {
       delay.delay1 = 0;
       delay.delay3 = 1;
   }
    TweenMax.to('.f11', 1, {delay: delay.delay1, x: "0", opacity: "1"})
    TweenMax.to('.f22', 1, {delay: delay.delay2, x: "0", opacity: "1"})
    TweenMax.to('.f33', 1, {delay: delay.delay3, x: "0", opacity: "1"}) 
    sectionsStatus.moreFeatures = true;
}

function animate() {
    let windowBottom = window.pageYOffset + window.innerHeight;

    if( sectionsStatus.features == false && windowBottom - 500 >= sectionOffset.features) featuresAnimation();

    else if (sectionsStatus.charging == false && windowBottom - 300 >= sectionOffset.charging) chargingAnimation();

    else if (sectionsStatus.strapts == false && windowBottom - 300 >= sectionOffset.strapts) straptsAnimation();

    else if (sectionsStatus.moreFeatures == false && windowBottom - 300 >= sectionOffset.moreFeatures) moreFeaturesAnimation();

    console.log(windowBottom);
    
}


window.addEventListener('scroll', animate);