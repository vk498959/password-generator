var submit = document.getElementById("submit");
var copy = document.getElementById("copy");

function generate() {
    //all possible supported character used for sites
    select = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#_-";
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var push="";
    //user input validation
    if (input <= 0) {
        output.innerText = "Length is not valid!!";
    }

    else {
        for (i = 0; i <= input; i++) {
            push += select[Math.floor(Math.random() * 66)];
        }
        output.innerText = push;
    }
}

submit.addEventListener("click", function () {
    generate();
});
copy.addEventListener("click",function(){
    if(output.innerText=="Length is not valid!!" || output.innerText==""){
        navigator.clipboard.writeText("");
    }
    else{
    navigator.clipboard.writeText(output.innerText);
    }
});