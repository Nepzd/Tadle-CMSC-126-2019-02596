function input() {

    var temp = document.getElementById("palindrome").value;
    var specChar = /[\W_]/g;
    var s = temp.toLowerCase().replace(specChar, '');
    var p = s.split('').reverse().join('');


    document.getElementById("display").innerHTML = s;
    document.getElementById("display").innerHTML = p;
    var compare = s.localeCompare(p);


    if (compare != 0) {
        document.getElementById("display").innerHTML = "Not a palindrome";
    } else {
        document.getElementById("display").innerHTML = "The word/sentence is a palindrome";
    }

}
