 alert("Hello");
function updateTime() {
    let joburgElement = document.querySelector("#johannesburg");
    let joburgDateElement = joburgElement.querySelector(".date");
    let joburgTimeElement = joburgElement.querySelector(".time");
    let joburbTime = moment().tz("Africa/Johannesburg");
    joburgDateElement.innerHTML = joburbTime.format("MMMM	Do YYYY");
    joburgTimeElement.innerHTML = joburbTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );

    let parisElement = document.querySelector("#paris");
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );

}
updateTime();
setInterval(updateTime, 1000);
