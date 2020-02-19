function input() {
    var n1 = document.getElementById("Input1").value;
    if (n1 < 0 || n1 == 0)
    {
        document.write("Do not input negative numbers or 0.");
        return;
    }
    if (n1 === 1) {
        document.write("The number is not prime by definition.");
        return;
    } else {
        for (var x = 2; x < n1; x++) {
            if (n1 % x === 0) {
                document.write("The number is not prime.");
                return;
            }
        }
        document.write("The number is a prime number.");
        return;
    }
}
