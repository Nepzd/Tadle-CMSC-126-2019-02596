function getInputValue() {
    var n1 = document.getElementById("Input1").value;
    var n2 = document.getElementById("Input2").value;
    var gcd;
    var i;
    
    if (n1 < 0 || n2 < 0)
    {
        document.write("Do not use negative values.");
        return;
    }
    
    if (n1 == 0)
    {
        document.write("The GCD of " + n1 + " and " + n2 + " is " + n2);
    }
    else if (n2 == 0)
    {
        document.write("The GCD of " + n1 + " and " + n2 + " is " + n1);
    }
    else
    {
        for(i = 1; i <= n1 && i <= n2; ++i)
        {
            if(n1 % i==0 && n2 % i==0)
                {        
                    gcd = i;
                }
        }   
        document.write("The GCD of " + n1 + " and " + n2 + " is " + gcd);
    }
}