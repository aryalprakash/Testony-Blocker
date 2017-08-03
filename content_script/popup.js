document.getElementById("saveButton").addEventListener("click", function(e) {
    var domain = document.domains.webaddress.value;
    var reason = document.domains.reason.value;
    
    var payload = {
        "domain_name": domain, 
        "user": 'extension',
        "article_link": reason
    }
    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );
    var opts = {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {'Content-Type': 'application/json'}
        };
    fetch('http://localhost:8000/api/pinklist/', opts).then(function (response) {
      return response.json();
    })
    .then(function (body) {
      console.log(body);
      //doSomething with body;
    });
         
    // return false;
});

function getCurrentDomain(){
  var fullName = window.location.hostname;
  return fullName.substring(fullName.lastIndexOf(".", fullName.lastIndexOf(".") - 1) + 1);
}

// document.domains.webaddress.innerHTML = getCurrentDomain();
