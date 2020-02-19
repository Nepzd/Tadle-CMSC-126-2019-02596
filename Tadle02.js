function numericsort(a, b) {
  return a - b;
}

function getInputValue() {
    var x = document.getElementById("Input1").value;
    var y = document.getElementById("Input2").value;
    var z = document.getElementById("Input3").value;
    var arr = [x, y, z];
    arr.sort(numericsort);
    document.write("The numbers sorted in ascending order: " + arr);

}