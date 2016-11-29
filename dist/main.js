'use strict';

window.onload = function(){

  var button = document.getElementById('check_btn');
  button.onclick = function(){

    var userHeight = document.getElementById('user_height').value;
    if( (userHeight < 1) || (userHeight > 250) ){
      throw new Error('Height is not valid');
    }

    var userWidth = document.getElementById('user_width').value;  
    if( (userWidth < 1) || (userWidth > 300) ){
      throw new Error('Width is not valid');
    }
    
    var bmiResult = userWidth / Math.pow(userHeight / 100, 2);
    var resultText = document.getElementsByClassName('user_bmi_result')[0];

    resultText.innerHTML = bmiResult.toFixed(2);

    var bmiResultv2 = bmiResult.toFixed(1);
    var x;
    switch (true){
      case (bmiResultv2 < 18.5): 
        // alert('Insufficient weight');
        x = 0;
        break;
      case ( (bmiResultv2 > 18.5) && (bmiResultv2 < 24.9) ):
        // alert('Normal');
        x = 1;
        break;
      case ( (bmiResultv2 > 25.0) && (bmiResultv2 < 29.9) ):
        // alert('Before obesity');
        x = 2;
        break;
      case ( (bmiResultv2 > 30.0) && (bmiResultv2 < 34.9) ):
        // alert('Obesity level I');
        x = 3;
        break;
      case ( (bmiResultv2 > 35.0) && (bmiResultv2 < 39.9) ):
        // alert('Obesity level II');
        x = 4;
        break;
      case ( bmiResultv2 > 40):
        // alert('Obesity level III');
        x = 5;
        break;
    }
    
    var tr = document.querySelectorAll('#table_body tr');

    [].forEach.call(tr, function(el) {
      el.classList.remove("highlight");
    });

    tr[x].className += 'highlight';

  }

};