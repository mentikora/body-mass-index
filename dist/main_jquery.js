'use strict';

$.noConflict();
jQuery(document).ready(function($){

  $('#check_btn').on('click', function(){

    // variables
    let userHeight = $('#user_height').val(),
        userWeight = $('#user_weigth').val(),
        tableTr = $('.table tbody tr'),
        bmiResult = userWeight / Math.pow(userHeight / 100, 2),
        getTrCounter;

    // check height&weight
    if( (userHeight < 130) || (userHeight > 250) ){
      alert('Height is not valid');
      $('.table').slideUp();
    }
    if( (userWeight < 30) || (userWeight > 300) ){
      alert('Weight is not valid');
      $('.table').slideUp();
    }

    // table magic
    switch (true){
      case (bmiResult < 18.5): 
        getTrCounter = 0;
        break;
      case ( (bmiResult > 18.5) && (bmiResult < 24.99) ):
        getTrCounter = 1;
        break;
      case ( (bmiResult > 25.0) && (bmiResult < 29.99) ):
        getTrCounter = 2;
        break;
      case ( (bmiResult > 30.0) && (bmiResult < 34.99) ):
        getTrCounter = 3;
        break;
      case ( (bmiResult > 35.0) && (bmiResult < 39.99) ):
        getTrCounter = 4;
        break;
      case ( bmiResult > 40):
        getTrCounter = 5;
        break;
    }
    tableTr.removeClass('highlight');
    $(tableTr[getTrCounter]).addClass('highlight'); // ???? ask Antonio about this

    // show hidden block with result and table
    $('.user_bmi_result').html( bmiResult.toFixed(2) );
    $('.hidden_block').slideDown();

  });

});