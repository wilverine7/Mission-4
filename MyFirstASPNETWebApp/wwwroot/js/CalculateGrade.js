$('#CalcGrade').click(function () {
    let weightedAssignemnts = ((parseInt($("#Assignments").val()) / 100) * 50)
    let weightedGP = ((parseInt($("#GroupProjects").val()) / 100) * 10)
    let weightedQuizzes = ((parseInt($("#Quizzes").val()) / 100) * 10)
    let weightedMidterm = ((parseInt($("#Midterm").val()) / 100) * 10)
    let weightedFinal = ((parseInt($("#Final").val()) / 100) * 10)
    let weightedIntex = ((parseInt($("#Intex").val()) / 100) * 10)

    let percentGrade = (weightedAssignemnts + weightedGP + weightedQuizzes + weightedMidterm + weightedFinal + weightedIntex)

    let letterGrade = ""

    if (percentGrade >= 94) {
        letterGrade = "A";
    } else if (percentGrade > 90) {
        letterGrade = "A-";
    } else if (percentGrade > 87) {
        letterGrade = "B+";
    } else if (percentGrade > 84) {
        letterGrade = "B";
    } else if (percentGrade > 80) {
        letterGrade = "B-";
    } else if (percentGrade > 77) {
        letterGrade = "C+";
    } else if (percentGrade > 74) {
        letterGrade = "C";
    } else if (percentGrade > 70) {
        letterGrade = "C-";
    } else if (percentGrade > 67) {
        letterGrade = "D+";
    } else if (percentGrade > 64) {
        letterGrade = "D";
    } else if (percentGrade > 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E"
    }

    $("#grade").text(percentGrade + " " + letterGrade) 
    /*alert(percentGrade + " " + letterGrade)*/
})