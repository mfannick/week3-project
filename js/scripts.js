
$(document).ready(function(){
  /********************************* input and submition*******************************/
    $('#submit').submit(function(){
      var inputName=$('#name').val();
      var inputEmail=$('#email').val();
      var inputMessage=$('#message').val();
     alert(inputName + " your message was received. Thank you!!!!!")
    });
  /********************************* end of input and submition*************************/

  /********************************* hovering on portofolio images***********************/
  var overlays=['overlay1','overlay2','overlay3','overlay4','overlay5'
  ,'overlay6','overlay7','overlay8']
  var portos=['porto1','porto2','porto3','porto4','porto5','porto6',
  'porto7','porto8']
  
  overlays.forEach(function(overlay){
      $('.' + overlay).hide();
  })
    
      $('.porto1').hover(
          function(){   
           $('this').stop();
              $('.overlay1').fadeIn('slow');
      },function(){
        $('this').stop()
          $('.overlay1').fadeOut('slow');
      
      });
      $('.porto2').hover(
          function(){   
           $('this').stop();
              $('.overlay2').fadeIn('slow');
      },function(){
        $('this').stop()
          $('.overlay2').fadeOut('slow');
      
      });
      $('.porto3').hover(
          function(){   
           $('this').stop();
              $('.overlay3').fadeIn('slow');
      },function(){
        $('this').stop()
          $('.overlay3').fadeOut('slow');
      
      });
      $('.porto4').hover(
          function(){   
           $('this').stop();
              $('.overlay4').fadeIn('slow');
      },function(){
        $('this').stop()
          $('.overlay4').fadeOut('slow');
      
      });
      $('.porto5').hover(
          function(){   
           $('this').stop();
              $('.overlay5').fadeIn('slow');
      },function(){
        $('this').stop()
          $('.overlay5').fadeOut('slow');
      
      });
      $('.porto6').hover(
          function(){   
           $('this').stop();
              $('.overlay6').fadeIn('slow');
      },function(){
        $('this').stop()
          $('.overlay6').fadeOut('slow');
      
      });
      $('.porto7').hover(
          function(){   
           $('this').stop();
              $('.overlay7').fadeIn('slow');
      },function(){
        $('this').stop()
          $('.overlay7').fadeOut('slow');
      
      });
      $('.porto8').hover(
          function(){   
           $('this').stop();
              $('.overlay8').fadeIn('slow');
      },function(){
        $('this').stop()
          $('.overlay8').fadeOut('slow');
      
      });
  







   /***************************end of hovering on portofolio images***********************/
});

