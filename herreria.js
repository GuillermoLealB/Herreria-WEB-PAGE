
 

//    const mediaQ = matchMedia('(max-width: 800px)');
//       cambiaNumero = mql => {
//         mql.match
//             ?console.log("True")
        
//             :console.log("false")
        
//         }
        
const query = matchMedia('(max-width: 800px)');
query.onchange = (evt) => {
  if( query.matches ) { swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    })
     } 
  else { swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    })
     } 
};
// perform the initial check


 addEventListener('resize' ,query.onchange());
addEventListener('DOMContentLoaded',() =>query.onchange());

