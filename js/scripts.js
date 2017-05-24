  var portfolioInner = document.querySelectorAll('.portfolio__inner');
  var showExample = document.querySelectorAll('.example');

  var removeActiveExample = function () {
    for (var j = 0; j < showExample.length; j++){
      showExample[j].classList.remove('example--active');
    }
  }

  for (var i = 0; i < portfolioInner.length; i++){
    portfolioInner[i].addEventListener('click', function(event){
      removeActiveExample();
      var target = event.target.parentNode;
      if(target.classList.contains('portfolio__project')){
        target.nextElementSibling.classList.add('example--active');
      }
    });
  };

  /*MENU*/
  var menuBtn = document.querySelector('.main-nav__btn');
  var menuOpen = document.querySelector('.main-nav__list');
  var menuWrap = document.querySelector('.main-nav');

  menuBtn.addEventListener('click', function(){
    menuOpen.classList.toggle('main-nav__list--active');
    menuWrap.classList.toggle('main-nav--active');
  })

  /*hello and contacts*/
  var contactsBtn = document.querySelectorAll('.contacts__item');
  var infotabArea = document.querySelector('.infotab__area');
  var infotabBtn = document.querySelector('.infotab__btn');

  for (var i = 0; i < contactsBtn.length; i++){
    contactsBtn[i].addEventListener('click', function(event){
      event.preventDefault();
      var targetSVG = event.currentTarget.firstElementChild;

      if(targetSVG.classList.contains('contacts__email')){
        infotabArea.innerHTML = 'satrik90@gmail.com';
      } else if (targetSVG.classList.contains('contacts__skype')) {
        infotabArea.innerHTML= 'satrikts';
      } else if(targetSVG.classList.contains('contacts__github')){
        infotabArea.innerHTML = 'https://github.com/SatrikTS';
      };
    });

  infotabBtn.addEventListener('click', function(){
    infotabArea.innerHTML = 'Александр Л. фронтендер, верстальщик, кодер, разработчик интерфейсов ;)';
  });

  };

  var removeActiveClass = function (arr, classN) {
    for (var j = 0; j < arr.length; j++){
      arr[j].classList.remove(classN);
    }
  }

  var activeArea = (function () {
    return function(){
      for (var i = 0; i < tabsInfo.length; i++){
        var idArea = tabsInfo[i].getAttribute('id');
      }
    }
  })();

  /*random background-color technology-btns*/
  var scillsCube = document.querySelectorAll('.scils__item');

  function getRandom() {
    return Math.floor(Math.random() * 256).toFixed(0);
  }

  var changeBtnsBackground = setInterval(function(){
    for (var j = 0; j < scillsCube.length; j++){
      scillsCube[j].style.background = 'rgba(160,' + getRandom() + ',' + getRandom() + ',' + 0.5 * (j + 1) + ')';
    };
  }, 2000);



  /*portfolio-filter*/
  var portfolioBtns = document.querySelectorAll('.portfolio__btn-item a');
  var portfolioSection = document.querySelectorAll('.portfolio__inner');
  var portfolioListBtns = document.querySelectorAll('.portfolio__btn-item');



  for(var i = 0; i<portfolioBtns.length; i++){
    portfolioBtns[i].addEventListener('click', function(event){
      event.preventDefault();
      var target = event.target.getAttribute('id');
      removeActiveClass(portfolioListBtns, 'portfolio__btn-item--active');
      this.parentNode.classList.add('portfolio__btn-item--active');

      switch (target) {
        case 'coder':
          $(".portfolio__inner").show(400);
          break;
        case 'design':
          $(".portfolio__inner").hide(300);
          $(".design").show(400);
          break;
        case 'cms':
        $(".portfolio__inner").hide(300);
        $(".cms").show(400);
          break;
        case 'studio':
        $(".portfolio__inner").hide(300);
        $(".studio").show(400);
          break;
        default:
        console.log('end');
      }
    });
  };

  var removeBlocks = function(){
    for (var j=0; j<portfolioSection.length; j++){
      $('.portfolio__inner').hide(900);
    }
  };


  $(document).ready(function(){
   $("#menu").on("click","a", function (event) {

     event.preventDefault();

     var id  = $(this).attr('href'),

     top = $(id).offset().top;

     $('body,html').animate({scrollTop: top}, 1500);
   });
  });
