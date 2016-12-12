'use strict';

document.addEventListener('DOMContentLoaded', function(){

  var button = document.getElementById('check_btn');
  button.onclick = function(){

    // check user height
    var userHeight = document.getElementById('user_height').value;
    if( (userHeight < 130) || (userHeight > 250) ){
      throw new Error('Height is not valid');
    }

    // check user width
    var userWeigth = document.getElementById('user_weigth').value;  
    if( (userWeigth < 30) || (userWeigth > 300) ){
      throw new Error('Weith is not valid');
    }

    // show table with result
    // working only at first time running
    var blockToShow = document.querySelector('.hidden_block');
    if(blockToShow.className === 'hidden_block'){
      blockToShow.className = "hidden_block visible";
    }
    
    // calculate formula     
    var bmiResult = userWeigth / Math.pow(userHeight / 100, 2);
    var resultText = document.getElementsByClassName('user_bmi_result')[0];

    // put result in field
    resultText.innerHTML = bmiResult.toFixed(2);

    // create value x and return result to know what tr should be highlighted
    var bmiResultv2 = bmiResult.toFixed(1);
    var x;
    switch (true){
      case (bmiResultv2 < 18.5): 
        x = 0;
        break;
      case ( (bmiResultv2 > 18.5) && (bmiResultv2 < 24.9) ):
        x = 1;
        break;
      case ( (bmiResultv2 > 25.0) && (bmiResultv2 < 29.9) ):
        x = 2;
        break;
      case ( (bmiResultv2 > 30.0) && (bmiResultv2 < 34.9) ):
        x = 3;
        break;
      case ( (bmiResultv2 > 35.0) && (bmiResultv2 < 39.9) ):
        x = 4;
        break;
      case ( bmiResultv2 > 40):
        x = 5;
        break;
    }
    
    // get all tr, highlight tr[x]
    var tr = document.querySelectorAll('#table_body tr');

    [].forEach.call(tr, function(el) {
      el.classList.remove("highlight");
    });

    tr[x].className += 'highlight';

  };

});