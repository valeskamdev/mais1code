function printCalendar(year, month) {
    const date = new Date(year, month - 1);
    const monthName = date.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();
    console.log("        "+ monthName + " " + year);

    let firstDay = new Date(year, month - 1, 1);
    let lastDay = new Date(year, month, 0);
    let daysInMonth = lastDay.getDate();
    let firstDayOfWeek = firstDay.getDay();

    let calendar = "DOM SEG TER QUA QUI SEX SAB\n";

    for (let i = 0; i < firstDayOfWeek; i++) {
        calendar += "   ";
    }

    for (let i = 1; i <= daysInMonth; i++) {
        if (i < 10) {
            calendar += "  " + i + " ";
        } else {
            calendar += i + "  ";
        }
        if ((i + firstDayOfWeek) % 7 == 0) {
            calendar += "\n";
        }
    }

    console.log(calendar);
}

printCalendar(2016, 8);

//       AGOSTO 2016
// DOM SEG TER QUA QUI SEX SAB
//      1   2   3   4   5   6 
//  7   8   9  10  11  12  13  
// 14  15  16  17  18  19  20  
// 21  22  23  24  25  26  27  
// 28  29  30  31  