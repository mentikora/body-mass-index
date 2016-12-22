'use strict';

$.noConflict();
jQuery(document).ready(function($){
  
  let history = {}, 
      clickCounter = 0;
  
  $('#check_btn').on('click', function(){

    // variables
    let userHeight = $('#user_height').val(),
        userWeight = $('#user_weight').val(),
        tableTr = $('.bmi_result_table tbody tr'),
        bmiResult = userWeight / Math.pow(userHeight / 100, 2),
        getTrCounter;

    // check height&weight
    if( (userHeight < 130) || (userHeight > 250) ){
      alert('Height is not valid');
      $('.hidden_block').slideUp();
      return
    }
    if( (userWeight < 30) || (userWeight > 300) ){
      alert('Weight is not valid');
      $('.hidden_block').slideUp();
      return
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

    /*
      trying to make history
      should looks like:
      { clickCounter:{height:.., weight:.., bmi:...}, ... }
    */
    history[clickCounter] = {
      height: userHeight,
      weight: userWeight,
      bmi: bmiResult.toFixed(2)
    }

    for(var i = clickCounter; i < Object.keys(history).length; i++){
      $('.history').append('<li>'+ 'Height: '+ history[i].height + ', weight: ' + history[i].weight + ', bmi: ' + history[i].bmi + '</li>');
    }

    clickCounter++;

    // show hidden block with result and table
    $('.user_bmi_result').html( bmiResult.toFixed(2) );
    $('.hidden_block').slideDown();

    console.log(history);
  });

});