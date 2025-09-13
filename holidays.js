const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;


function isProgrammersDay(day, month) { 
    const year = new Date().getFullYear(); // текущий год
    const programmersDate = new Date(year, 0, 256); 
    return day === programmersDate.getDate() && (month - 1) === programmersDate.getMonth(); 
}

if (month === 12) {
    //декабрь
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/winter-1.jpg?raw=true');
}
else if (month === 1) {
    //январь
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/winter-2.jpg?raw=true');
}
else if (month === 2) {
    //февраль
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/winter-3.jpg?raw=true');
}
else if (month === 3) {
    //март
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/spring-1.jpg?raw=true');
}
else if (month === 4) {
    //апрель
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/spring-2.jpg?raw=true');
}
else if (month === 5) {
    //май
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/spring-3.jpg?raw=true');
}
else if (month === 6) {
    //июнь
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/summer-1.jpg?raw=true');
}
else if (month === 7) {
    //июль
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/summer-2.jpg?raw=true');
}
else if (month === 8) {
    //август
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/summer-3.jpg?raw=true');
}
else if (month === 9) {
    //сентябрь
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/autumn-1.jpg?raw=true');
}
else if (month === 10) {
    //октябрь
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/autumn-2.jpg?raw=true');
}
else if (month === 11) {
    //ноябрь
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/img-seasons/autumn-3.jpg?raw=true');
}


if ((day === 31 && month === 12) || (day <= 8 && month === 1)) {
    //новогодние праздники, с 31.12 по 08.01
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/images/new-year-tree.png?raw=true');
    addImage('left-top', 'https://github.com/diy-electron1cs/DE_calendar/blob/main/images/new-year.png?raw=true', 'auto', '-180px', '0px');
}
else if (day === 23 && month === 2) {
    //день защитника отечества, 23.02
    addImage('center-top', 'https://github.com/diy-electron1cs/DE_calendar/blob/main/images/23-feb.png?raw=true', '160px', '-10px', '0px');
    changePaddingTopByClass('90px');
}
else if (day === 8 && month === 3) {
    //междунароный женский день, 08.03
    addImage('center-top', 'https://github.com/diy-electron1cs/DE_calendar/blob/main/images/8-mar.png?raw=true', '200px', '0px', '0px');
}
else if (day === 12 && month === 4) {
    //день космонавтики, 12.04
    addImage('center-top', 'https://github.com/diy-electron1cs/DE_calendar/blob/main/images/12-apr.png?raw=true', '190px', '10px', '0px');
}
else if (day === 1 && month === 5) {
    //день весны и труда, 01.05
    addImage('center-top', 'https://github.com/diy-electron1cs/DE_calendar/blob/main/images/1-may.png?raw=true', '100px', '20px', '0px');
}
else if (day === 7 && month === 5) {
    //день радио, 07.05
    addImage('center-top', 'https://github.com/diy-electron1cs/DE_calendar/blob/main/images/7-may.png?raw=true', '140px', '-5px', '0px');
}
else if (day === 9 && month === 5) {
    //день победы, 09.05
    //addImage('right-top', 'https://github.com/diy-electron1cs/DE_calendar/blob/main/images/9-may-2025.png?raw=true', '100px', '-80px', '-10px');
    addImage('center-top', 'https://github.com/diy-electron1cs/DE_calendar/blob/main/images/9-may.png?raw=true', '150px', '-5px', '0px');
}
else if (day === 12 && month === 6) {
    //день России, 12.06
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/images/russian-flag.jfif?raw=true');
}
else if (day === 3 && month === 9) {
    //3-е сентября!
    let elem1 = document.getElementById('container-1');
    let elem2 = document.getElementById('container-2');
    elem1.style.setProperty('transform', 'rotate(180deg)');
    elem2.style.setProperty('transform', 'rotate(180deg)');
}
else if (day === 4 && month === 11) {
    //день народного единства, 04.11
    addImage('center-top', 'https://github.com/diy-electron1cs/DE_calendar/blob/main/images/4-now.png?raw=true', '150px', '0px', '0px');
}
else if (isProgrammersDay(day, month) === true) {
    //день программиста, 256 посчёту
    setResponsiveBackground('https://github.com/diy-electron1cs/DE_calendar/blob/main/images/matrix.png?raw=true');
}
