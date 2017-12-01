
document.addEventListener('DOMContentLoaded', start);

function start () {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var quotes = JSON.parse(this.responseText);
        document.getElementById('maori').innerHTML = quotes.source;
        document.getElementById('english').innerHTML = quotes.translation;
        quotes.innerHTML = httpRequest.responseText;
        console.log(quotes);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
}
