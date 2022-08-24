$(document).ready(function(){


  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('.header').css({'background':'#407BFF','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    }else{
      $('.header').css({'background':'none','box-shadow':'none'});
    }
  });


  $('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp();
    $(this).next('.accordion-body').slideDown();
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
  });
});

//Read More function
let noOfCharac = 335;
let contents = document.querySelectorAll(".msg");
contents.forEach(content => {
    //If text length is less that noOfCharac... then hide the read more button
    if(content.textContent.length < noOfCharac){
        content.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = content.textContent.slice(0,noOfCharac);
        let moreText = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}

//Senku
var letB = function(){
document.getElementById("alpha").src = "img/josh.jpg";
document.getElementById("beta").src = "img/josh2.jpg";
document.getElementById("flipswitch").setAttribute( "onClick", "javascript: letA();" );
document.getElementById("card-object-hf").style.animation = "flip-horizontal-bottom 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
}

var letA = function(){
document.getElementById("alpha").src = "img/josh2.jpg";
document.getElementById("beta").src = "img/josh.jpg";
document.getElementById("flipswitch").setAttribute("onClick", "javascript: letB();");
document.getElementById("card-object-hf").style.animation = "flip-horizontal-top 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
}

//RYY
var letB2 = function(){
document.getElementById("alpha2").src = "img/ry.jpg";
document.getElementById("beta2").src = "img/ry2.jpg";
document.getElementById("flipswitch2").setAttribute( "onClick", "javascript: letA2();" );
document.getElementById("card-object-hf2").style.animation = "flip-horizontal-bottom 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
}

var letA2 = function(){
document.getElementById("alpha2").src = "img/ry2.jpg";
document.getElementById("beta2").src = "img/ry.jpg";
document.getElementById("flipswitch2").setAttribute("onClick", "javascript: letB2();");
document.getElementById("card-object-hf2").style.animation = "flip-horizontal-top 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
}

//CYY
var letB3 = function(){
document.getElementById("alpha3").src = "img/cy.jpg";
document.getElementById("beta3").src = "img/cy2.jpg";
document.getElementById("flipswitch3").setAttribute( "onClick", "javascript: letA3();" );
document.getElementById("card-object-hf3").style.animation = "flip-horizontal-bottom 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
}

var letA3 = function(){
document.getElementById("alpha3").src = "img/cy2.jpg";
document.getElementById("beta3").src = "img/cy.jpg";
document.getElementById("flipswitch3").setAttribute("onClick", "javascript: letB3();");
document.getElementById("card-object-hf3").style.animation = "flip-horizontal-top 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
}

//LEE
var letB4 = function(){
document.getElementById("alpha4").src = "img/lee.jpg";
document.getElementById("beta4").src = "img/lee2.jpg";
document.getElementById("flipswitch4").setAttribute( "onClick", "javascript: letA4();" );
document.getElementById("card-object-hf4").style.animation = "flip-horizontal-bottom 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
}

var letA4 = function(){
document.getElementById("alpha4").src = "img/lee2.jpg";
document.getElementById("beta4").src = "img/lee.jpg";
document.getElementById("flipswitch4").setAttribute("onClick", "javascript: letB4();");
document.getElementById("card-object-hf4").style.animation = "flip-horizontal-top 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
}
