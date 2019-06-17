 $('#banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa fa-angle-left flecha1" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-right flecha2" aria-hidden="true"></i>',
});


 $('a.go-to').click(function() {

          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {

              $('html,body').animate({

                scrollTop: target.offset().top

              }, 1000);

              return false;

            }

          }
        });


  $('.view-testimonial').click(function(){
          var vid = $(this).data('testimonial');
        

          $('#player-testimonial').attr('src','https://www.youtube.com/embed/'+vid+'?rel=0');

         

          $('.view-testimonial').removeClass('active');
          $(this).addClass('active');

        });

      $('.video-galeria').click(function(){
          var vid = $(this).data('galeria');
        

          $('.video-g').attr('src','https://www.youtube.com/embed/'+vid+'?rel=0');



        });


  $("#btn-check-terms").click(function() {
    $('#termin').prop('checked', true);
  });

$("#form_terms_check_frm").click(function() {
    $('#terms').prop('checked', true);
  });


$("#n_form_terms_check_frm").click(function() {
    $('#n_terms').prop('checked', true);
  });



$('#blogarea').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});