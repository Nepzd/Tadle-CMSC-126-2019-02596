function finalGrade() {
    var userInput = prompt("What is the Final Class Score?");
    var grade;
    
    document.write("With a grade of ", userInput, ", <br>");
    if (userInput <= 100 && userInput >= 90) {
        grade = 1;

    } else if (userInput < 90 && userInput >= 80) {
        grade = 2;

    } else if (userInput < 80 && userInput >= 70) {
        grade = 3;

    } else if (userInput < 70 && userInput >= 60) {
        grade = 4;

    } else if (userInput < 60 && userInput >= 50) {
        grade = 5;

    }

    switch (grade) {
        case 1:
            document.write("Final Grade = A");
            break;
        case 2:
            document.write("Final Grade = B");
            break;
        case 3:
            document.write("Final Grade = C");
            break;
        case 4:
            document.write("Final Grade = D");
            break;
        case 5:
            document.write("Final Grade = E");
            break;
    }
}
