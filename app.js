var windowWidth = $(window).width();
var navbarWidth = $('.header').width();
var navBarScrolled = function() {
  $('.main-nav').animate({
    width: windowWidth,
    marginLeft: 0
  }, {
    duration: 150,
    queue: false
  }, 'linear')
};
var navBarOriginal = function() {
  var setLeftMargin = (windowWidth - navbarWidth)/2
  $('.main-nav').animate({
    width: navbarWidth,
    marginLeft: setLeftMargin
  }, {
    duration: 150,
    queue: false
  }, 'linear')
};

var dropdownBigBorderBeigeTop = '-88px';
var dropdownBigBorderSalmonTop = '-32px';
var dropdownBigBorderBlueTop = '-60px';
var dropdownSmallBorderBeigeTop = '-86px';
var dropdownSmallBorderSalmonTop = '-30px';
var dropdownSmallBorderBlueTop = '-58px';

var dropdownBorderReverseSalmon = function() {
  $('.dropdown-border-circle').animate({
    padding: '10px',
    left: '8px',
    top: dropdownSmallBorderSalmonTop
  }, {
    duration: 200,
    // queue: false
  }, 'linear')
};
var dropdownBorderSalmon = function() {
  $('.dropdown-border-circle').animate({
    padding: '12px',
    left: '6px',
    top: dropdownBigBorderSalmonTop
  }, {
    duration: 200,
    // queue: false
  }, 'linear')
};
var dropdownBorderReverseBeige = function() {
  $('.dropdown-border-circle').animate({
    padding: '10px',
    left: '8px',
    top: dropdownSmallBorderBeigeTop
  }, {
    duration: 200,
    // queue: false
  }, 'linear')
};
var dropdownBorderBeige = function() {
  $('.dropdown-border-circle').animate({
    padding: '12px',
    left: '6px',
    top: dropdownBigBorderBeigeTop
  }, {
    duration: 200,
    // queue: false
  }, 'linear')
};
var dropdownBorderReverseBlue = function() {
  $('.dropdown-border-circle').animate({
    padding: '10px',
    left: '8px',
    top: dropdownSmallBorderBlueTop
  }, {
    duration: 200,
    // queue: false
  }, 'linear')
};
var dropdownBorderBlue = function() {
  $('.dropdown-border-circle').animate({
    padding: '12px',
    left: '6px',
    top: dropdownBigBorderBlueTop
  }, {
    duration: 200
  }, 'linear')
};
$('a.change-color.beige').on('click', function(){
  dropdownBorderReverseBeige();
  // dropdownBorderFinderBeige();
  dropdownBorderBeige();
})
// every 28px for top, starting from 88px downwards
$('a.change-color.lightblue').on('click', function(){
  dropdownBorderReverseBlue();
  // dropdownBorderFinderBlue();
  dropdownBorderBlue();
})
$('a.change-color.salmon').on('click', function(){
  dropdownBorderReverseSalmon();
  // dropdownBorderFinderSalmon();
  dropdownBorderSalmon();
})

$(window).scroll(function() {
  if ($(this).scrollTop() > $('.header').height()) {
    $('.main-nav').addClass('main-nav-scrolled');
    navBarScrolled();
  } else {
    $('.main-nav').removeClass('main-nav-scrolled');
    navBarOriginal();
  }
});

$('li.dropdown a').on('click', function () {
  $(this).parent().toggleClass('open');
});

$('body').on('click', function (e) {
  if (!$('li.dropdown').is(e.target)
    && $('li.dropdown').has(e.target).length === 0
    && $('.open').has(e.target).length === 0) {
      $('li.dropdown').removeClass('open');
  }
});

$('a.change-color.beige').on('click', function () {
  $('div.header').removeClass('lightblue');
  $('div.header').removeClass('salmon');
  $('div.header').addClass('beige');
  $('.main-circle').removeClass('lightblue')
  $('.main-circle').removeClass('salmon')
  $('.main-circle').addClass('beige')
  $('.hello').removeClass('lightblue-text')
  $('.hello').removeClass('salmon-text')
  $('.hello').addClass('beige-text')
  $('.box1').removeClass('lightblue');
  $('.box1').removeClass('salmon');
  $('.box1').addClass('beige');
  $('.box2').removeClass('lightblue');
  $('.box2').removeClass('salmon');
  $('.box2').addClass('beige');
  $('.box3').removeClass('lightblue');
  $('.box3').removeClass('salmon');
  $('.box3').addClass('beige');
  $('.box4').removeClass('lightblue-box');
  $('.box4').removeClass('salmon-box');
  $('.box4').addClass('beige-box');
  $('.box4').removeClass('lightblue-text');
  $('.box4').removeClass('salmon-text');
  $('.box4').addClass('beige-text');
  $('.link').removeClass('lightblue-text');
  $('.link').removeClass('salmon-text');
  $('.link').addClass('beige-text');
})

$('a.change-color.lightblue').on('click', function () {
  $('div.header').removeClass('beige');
  $('div.header').removeClass('salmon');
  $('div.header').addClass('lightblue');
  $('.main-circle').removeClass('beige')
  $('.main-circle').removeClass('salmon')
  $('.main-circle').addClass('lightblue')
  $('.hello').removeClass('beige-text')
  $('.hello').removeClass('salmon-text')
  $('.hello').addClass('lightblue-text')
  $('.box1').removeClass('beige');
  $('.box1').removeClass('salmon');
  $('.box1').addClass('lightblue');
  $('.box2').removeClass('beige');
  $('.box2').removeClass('salmon');
  $('.box2').addClass('lightblue');
  $('.box3').removeClass('beige');
  $('.box3').removeClass('salmon');
  $('.box3').addClass('lightblue');
  $('.box4').removeClass('beige-box');
  $('.box4').removeClass('salmon-box');
  $('.box4').addClass('lightblue-box');
  $('.box4').removeClass('beige-text');
  $('.box4').removeClass('salmon-text');
  $('.box4').addClass('lightblue-text');
  $('.link').removeClass('beige-text');
  $('.link').removeClass('salmon-text');
  $('.link').addClass('lightblue-text');
})

$('a.change-color.salmon').on('click', function () {
  $('div.header').removeClass('beige');
  $('div.header').removeClass('lightblue');
  $('div.header').addClass('salmon');
  $('.main-circle').removeClass('lightblue')
  $('.main-circle').removeClass('beige')
  $('.main-circle').addClass('salmon')
  $('.hello').removeClass('lightblue-text')
  $('.hello').removeClass('beige-text')
  $('.hello').addClass('salmon-text')
  $('.box1').removeClass('beige');
  $('.box1').removeClass('lightblue');
  $('.box1').addClass('salmon');
  $('.box2').removeClass('beige');
  $('.box2').removeClass('lightblue');
  $('.box2').addClass('salmon');
  $('.box3').removeClass('beige');
  $('.box3').removeClass('lightblue');
  $('.box3').addClass('salmon');
  $('.box4').removeClass('beige-box');
  $('.box4').removeClass('lightblue-box');
  $('.box4').addClass('salmon-box');
  $('.box4').removeClass('beige-text');
  $('.box4').removeClass('lightblue-text');
  $('.box4').addClass('salmon-text');
  $('.link').removeClass('beige-text');
  $('.link').removeClass('lightblue-text');
  $('.link').addClass('salmon-text');
})

$('.clothing-fun').on('click', function() {
  window.open('https://edwinc91.github.io/clothing-fun/', '_blank');
});

$('.bookmarker').on('click', function() {
  window.open('https://powerful-waters-72917.herokuapp.com/', '_blank');
});

$('.something-borrowed').on('click', function() {
  window.open('http://still-sea-2278.herokuapp.com/', '_blank');
});

$('.nutrition').on('click', function() {
  window.open('http://thawing-reaches-4422.herokuapp.com/', '_blank');
});

$('.forum').on('click', function() {
  window.open('https://glacial-brook-9343.herokuapp.com/', '_blank');
});

$('.blackjack').on('click', function() {
  window.open('https://edwinc91.github.io/blackjack/', '_blank');
});
