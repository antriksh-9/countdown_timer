let endDate = "6 September 2023 10:00 AM";
document.getElementById("end-date").innerText = endDate;

let inputs = document.querySelectorAll("input");

let clock = () => {
    let end = new Date(endDate);
    let now = new Date();
    let diff = (end-now)/1000;

    if(diff<0){
        return ;
    }
    
    inputs[0].value = Math.floor(diff/3600/24);  // convert to days
    inputs[1].value = Math.floor((diff/3600)%24);  // calc remaining hours
    inputs[2].value = Math.floor((diff/60)%60); // calc remaining minutes
    inputs[3].value = Math.floor(diff)%60;  //  calc remaining seconds
}
clock();   // initial call

setInterval(() => {
    clock();
},1000);