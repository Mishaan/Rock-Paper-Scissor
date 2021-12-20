// document.querySelector("h1").innerHTML = "Welcome";

function func1() {
    document.getElementById("image2").src = "rock.png";
    var x = randfun();
    document.getElementById("results").style.color = "white";
    // document.getElementById("results").style.textAlign = "centre";
    document.getElementById("results").style.fontSize = "140%";
    document.getElementById("results").style.fontStyle = "bold";
    if(x == 1)          document.getElementById("results").innerHTML = "Draw!";
    else if(x == 2)     document.getElementById("results").innerHTML = "You Win!";
    else                document.getElementById("results").innerHTML = "Lose !";
}

function func2() {
    document.getElementById("image2").src = "scissor.png";
    var x = randfun();
    document.getElementById("results").style.color = "white";
    if(x == 1)          document.getElementById("results").innerHTML = "Lose !";
    else if(x == 2)     document.getElementById("results").innerHTML = "Draw !";
    else                document.getElementById("results").innerHTML = "You Win!";
}

function func3() {
    document.getElementById("image2").src = "paper.png";
    var x = randfun();
    document.getElementById("results").style.color = "white";
    if(x == 1)          document.getElementById("results").innerHTML = "You Win!";
    else if(x == 2)     document.getElementById("results").innerHTML = "Lose !";
    else                document.getElementById("results").innerHTML = "Draw !";
}

function randfun() {
    var x = Math.random() * 3;
    x = Math.floor(x) + 1;
    if(x == 1)          document.getElementById("image1").src = "rock.png";
    else if(x == 2)     document.getElementById("image1").src = "scissor.png";
    else                document.getElementById("image1").scr = "paper.png";
    return x;
}