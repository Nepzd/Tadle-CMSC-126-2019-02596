function input() {
    var GrossIncome;
    var TotalExemptions;
    var TotalDeductions;
    var PayableTax;
    var AnnualIncome = parseInt(document.getElementById("AnnualIncome").value);
    var extraPay = parseInt(document.getElementById("extraPay").value);
    var Deductions = parseInt(document.getElementById("Deductions").value);
    var Dependents = parseInt(document.getElementById("Dependendts").value);
    var PersonalExemptions = 250000;

    document.write("Annual Income = Php " + AnnualIncome + "<br>");
    document.write("13th Month Pay Amount = Php " + extraPay + "<br>");
    document.write("Deductions = Php " + Deductions + "<br>");
    document.write("Number of Dependents = " + Dependents + "<br>");
    document.write("Personal Exemptions = " + PersonalExemptions + "<br>");
    GrossIncome = AnnualIncome + extraPay;
    document.write("Gross Income = Php " + GrossIncome + "<br><br><br>");
    if (Dependents <= 4) {
        TotalExemptions = 50000 * Dependents;
    } else {
        TotalExemptions = 200000;
    }
    TotalDeductions = Deductions + TotalExemptions + PersonalExemptions;
    TaxableIncome = GrossIncome - TotalDeductions;

    document.write("Total Deductions = Php " + TotalDeductions + "<br>");


    if (TaxableIncome <= 250000) {
        PayableTax = 0;
        document.write("Taxable Income = Php " + TaxableIncome + "<br><br>Income Tax Rate = 0% since Taxable Income is less than Php 250,000<br><br> Income Bracket: 1<br><br>Payable Tax = Php " + PayableTax + "");
    } else if (TaxableIncome > 250000 && TaxableIncome <= 400000) {
        PayableTax = (TaxableIncome - 250000) * .20;
        document.write("Taxable Income = Php " + TaxableIncome + "<br><br>Income Tax Rate = 20% of the excess since Taxable Income is over Php 250,000 but less than Php 400,000<br><br>Income Bracket: 2<br><br>Payable Tax = Php " + PayableTax + "");
    } else if (TaxableIncome > 400000 && TaxableIncome <= 800000) {
        PayableTax = ((TaxableIncome - 400000) * .25) + 30000;
        document.write("Taxable Income = Php " + TaxableIncome + "<br><br>Income Tax Rate = Php 30,000 + 25% of the excess since income is over Php 400,000 but less than Php  800,000<br><br>Income Bracket: 3<br><br>Payable Tax = Php " + PayableTax + "");
    } else if (TaxableIncome > 800000 && TaxableIncome <= 2000000) {
        PayableTax = ((TaxableIncome - 800000) * .30) + 130000;
        document.write("Taxable Income = Php " + TaxableIncome + "<br><br>Income Tax Rate = Php 130,000 + 30% of the excess since income is over P800,000 but less than Php 2,000,000<br><br>Income Bracket: 4<br><br>Payable Tax = Php " + PayableTax + "");
    } else if (TaxableIncome > 2000000 && TaxableIncome <= 8000000) {
        PayableTax = ((TaxableIncome - 2000000) * .32) + 490000;
        document.write("Taxable Income = Php " + TaxableIncome + "<br><br>Income Tax Rate = Php 490,000 + 32% of the excess since income is over Php 2,000,000 but less than Php 8,000,000<br><br>Income Bracket: 5<br><br>Payable Tax = Php " + PayableTax + "");
    } else if (TaxableIncome > 8000000) {
        PayableTax = ((TaxableIncome - 2410000) * .35) + 490000;
        document.write("Taxable Income = Php " + TaxableIncome + "<br><br>Income Tax Rate = Php 2,410,000 + 35% of the excess since income is over P8,000,000<br><br>Income Bracket: 6<br><br>Payable Tax = Php " + PayableTax);
    }

}
