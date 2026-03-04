// function use to get the exact date in 

function theDate(){
    const date=new Date();
    const currentDate=date.getDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const year=date.getFullYear();
    const todayDays=document.getElementById("date-container").innerHTML= currentDate + "-" + month + "-" + year;
}
theDate();



