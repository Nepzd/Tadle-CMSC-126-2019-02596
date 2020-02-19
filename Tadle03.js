function getInputValue() {
    var x = document.getElementById("Input1").value;
    var y;
    if (x > 0)    
        {
            document.write("The number is positive. <br />");
        }
    else if (x == 0) 
        {
            document.write("The number is zero.<br />");
            return;
        }
    else 
        {
            document.write("The number is negative.<br />");
        }
    
    y = x % 2;
    if (y < 0)
        {
            y = y * -1;
        }
    
    if (y == 0)
        {
            document.write("<br />The number is even.");
        }
    else 
        {
            document.write("<br />The number is odd.");
        }
    
}