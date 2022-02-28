function game() {
    var html = '<div id="first">'
    html += '<h1>Guess the Random no:-form 1,2,3</h1>'
    html += '<input type="text" id="input1" ><br>'
    html += '<button type="submit" id="btn4" onclick="guess()">submit</button>'
    html += '<p id="result" ></p>'
    html += '</div>'

    document.getElementById('display').innerHTML = html;
 
}
function guess() {
    var x = (Math.floor(Math.random() * 3) +1);
    console.log(x);
    var y = document.getElementById('input1').value;
    if(x == y){
        document.getElementById('result').innerHTML = "YOU WIN";
    } else {
        document.getElementById('result').innerHTML = "YOU LOSE";
    }
}
function image() {
    var html = '<div id="second">'
    html += '<i class="glyphicon glyphicon-thumbs-up"></i>'
    html += '</div>'

    document.getElementById('display').innerHTML = html;
}
function form1() {
    var html = '<div id="third">'
    html += '<form> <input type="text" id="input2" placeholder="NAME" ><br>'
    html += '<input type="text" id="input3" placeholder="EMAIL" ><br>' 
    html += ' <input type="radio" name="gender" id="male" >male' 
    html += ' <input type="radio" name="gender" id="female" >female<br>' 
    html += ' <input type="text" id="input4" placeholder="ABOUT" ><br></form>' 
    html += '<button type="submit" id="btn5" >submit</button>'
    html += '</div>'

    document.getElementById('display').innerHTML = html;
}