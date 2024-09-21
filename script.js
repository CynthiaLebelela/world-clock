function updateTime() {
    let southElement = document.querySelector("#south");
    if (southElement) {
    let southDateElement = southElement.querySelector(".date");
    let southTimeElement = southElement.querySelector(".time");
    let southTime = moment().tz("Atlantic/South_Georgia");
    southDateElement.innerHTML = southTime.format("MMMM	Do YYYY");
    southTimeElement.innerHTML = southTime.format(
      "h:mm:ss [<small>]A[</small>]");
    }

    let parisElement = document.querySelector("#paris");
    if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]");
    }
}
updateTime();
setInterval(updateTime, 1000);

