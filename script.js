function s4_slider(){
    $(".s4_slider_2").slideDown(1000).css({"display": "flex","justify-content": "space-between"})
    $(".s4_slider_3").slideDown(2000).css({"display": "flex","justify-content": "space-between"})
    $("#bt4").css({"display":"none"})
}

function s5_slider(){
    $(".s5_creat_2").slideDown(1000).css({"display": "flex", "justify-content": "space-between",
    "flex-wrap": "wrap",
    "align-content": "space-between"})
    $(".s5_creat_3").slideDown(2000).css({"display": "flex", "justify-content": "space-between",
    "flex-wrap": "wrap",
    "align-content": "space-between"})
    $("#bt5").css({"display":"none"})
}

$( function() {
    $( "#dialog1" ).dialog({
      autoOpen: false, width: 300, height: 100,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog1" ).dialog( "open" );
    });
  } );

  $( function() {
    $( "#dialog2" ).dialog({
      autoOpen: false, width: 300, height: 130,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener1" ).on( "click", function() {
      $( "#dialog2" ).dialog( "open" );
    });
  } );

  $( function() {
    $( "#dialog3" ).dialog({
      autoOpen: false, width: 300, height: 100,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener2" ).on( "click", function() {
      $( "#dialog3" ).dialog( "open" );
    });
  } );

  $( function() {
    $( "#dialog4" ).dialog({
      autoOpen: false, width: 300, height: 100,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener3" ).on( "click", function() {
      $( "#dialog4" ).dialog( "open" );
    });
  } );

  let clicks=92
  let clicks1=72
  let clicks2=120
  let boost_click=1

function seat_1(){
    $("#img_1").attr("src","img/Vector (7).png")
    clicks=+(clicks+(1*boost_click))
    $('#s1_h3').text( `${clicks}`).css("color","red")
}

function seat_2(){
    $("#img_2").attr("src","img/Vector (7).png")
    clicks1=+(clicks1+(1*boost_click))
    $('#s1_h4').text( `${clicks1}`).css("color","red")
}

function seat_3(){
    $("#img_3").attr("src","img/Vector (7).png")
    clicks2=+(clicks2+(1*boost_click))
    $('#s1_h5').text( `${clicks2}`).css("color","red")
}

$(document).ready(function(){
  let swiper=new Swiper('.slider_cont',{
    slidesPerView:2.9, 
    spaceBetween: 40,
    loop:true,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })

  let swiper2=new Swiper('.slider_cont2',{
    slidesPerView:2.9, 
    spaceBetween: 40,
    loop:true,
    centeredSlides: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
    },
    
  })

  let swiper3=new Swiper('.slider_cont3',{
    slidesPerView:3, 
    loop:true,
    width: 1200,
    centeredSlides: true,
  
    effect: 'cards',
    cardsEffect: {
      // ...
    },
    
  })
})