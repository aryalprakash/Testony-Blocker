var hide = true;

var blacklist = [{domain_name: 'en.testony.com'}];

function checkDomain(domain){
  return blacklist.filter(function(obj){
    return obj.domain_name == domain
  })
}

function getCurrentDomain(){
  var fullName = window.location.hostname;
  return fullName.substring(fullName.lastIndexOf(".", fullName.lastIndexOf(".") - 1) + 1);
}

function showThisDiv(hiddenDiv){
  hiddenDiv.style.height = 'initial';
  hiddenDiv.childNodes[0].style.display = 'none';
}

function overlayLoaded(){
  document.querySelector('body').addEventListener('click', function(event) {
      if (event.target.className == 'show-alert-button') {
            var hiddenDiv = event.target.parentNode.parentNode;
            showThisDiv(hiddenDiv);
            // var overlayDiv = event.target.parentNode;
            // overlayDiv.style.display = 'none';
            // hiddenDiv.style.height = 'initial';
      };
    });   
}

function hideThisDiv(alertdiv){
  // alertdiv.style.height = '150px';
  //           alertdiv.style.overflow = 'hidden';
  //           alertdiv.setAttribute('checked', 'true');
  //           var overlay = document.createElement('div');
  //           overlay.className = 'grey-overlay';
  //           overlay.innerHTML = "<div class='alert-message'>This content is reported to be from a unreliable source.</div><div class='show-alert-button'>Show Me</div>"
  //           alertdiv.insertBefore(overlay, alertdiv.childNodes[0]);
  //           overlay.onload = overlayLoaded();

            alertdiv.style.display = 'none';
}

function flagThisDiv(alertdiv){
  alertdiv.setAttribute('checked', 'true');
  var flagMessage = document.createElement('div');
  flagMessage.className="flag-message";
  flagMessage.innerHTML = "<div class='flag-message-content'>This content is reported to be from a unreliable source.</div>";
  alertdiv.insertBefore(flagMessage, alertdiv.childNodes[0]);
}

function hideDot(hide, start,end) {
  for (i = start; i < end; i++) {
    var x = document.getElementsByClassName('_6lz _6mb ellipsis')[i];

    if (x !== null) {
      console.log('x no null');
      var domain = x.innerHTML;
        if(domain.indexOf('<') > 0){
          domain = domain.substring(0, domain.indexOf('<'));  
        }
        // console.log(domain);
        var alertdiv = x.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        
        if(checkDomain(domain)[0]){
          console.log('hello');
          if(alertdiv.getAttribute('checked') != 'true'){
            hideThisDiv(alertdiv);
            // showReportOption(alertdiv, domain);
            // flagThisDiv(alertdiv);
        
            } 
          }
    }
  }
}


function timeout() {
    setTimeout(function () {
		var end = document.getElementsByClassName('_6lz _6mb ellipsis').length;
		hideDot(hide, 0, end);
        timeout();
    }, 1000);
}

timeout();