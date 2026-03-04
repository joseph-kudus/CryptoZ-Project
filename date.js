// function use to get the exact date in 

function theDate(){
    const date=new Date();
    const currentDate=date.getDate();
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const month = months[date.getMonth()];
    const year=date.getFullYear();
    const todayDays=document.getElementById("date-container").innerHTML= currentDate + "/" + month + "/" + year;
}
theDate();



