$(document).ready(function() {
    $('#first').hide();
    $('#second').hide();
    $('#third').hide();

    $('#btn1').on('click' , function() {
        $('#first').show();
        $('#second').hide();
        $('#third').hide();
    })
    $('#btn4').on('click' , function() {
        var x = (Math.floor(Math.random() * 3) +1);
        var y = $('#input1').val();
        if(x == y){
            document.getElementById('result').innerHTML = "YOU WIN";
        } else {
            document.getElementById('result').innerHTML = "YOU LOSE";
        }
    })
})

$('#btn2').on('click' , function() {
    $('#first').hide();
    $('#second').show();
    $('#third').hide();
})
$('#btn3').on('click' , function() {
    $('#first').hide();
    $('#second').hide();
    $('#third').show();
})
