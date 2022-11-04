whoWroteIt("4", "Рух тіла, кинутого під кутом до горизонту", "Олексієнко Б.Р.", "ТР-22-1")
//==================================================
function whoWroteIt(lessonNumber, lessonTheme,
 studentName, studetnGroup) {
 document.title="Practice " + String(lessonNumber);
 document.write("Практичне заняття " +
 String(lessonNumber));
 document.write("<h2>" + lessonTheme + "</h2>");
 document.write("<p>" + studentName + "</p>");
 document.write("<p>" + studetnGroup + "</p>");
}