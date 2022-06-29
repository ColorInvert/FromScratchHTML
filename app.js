let usrname = "nothing";
function getusr(){
    let usrnamelocal = prompt("Live and breathe, Scrapworker. Please input your name now.");
    document.write("User " + usrnamelocal + " validated. You are now logged in, and your account and scrip values have been linked.");
     usrname = usrnamelocal;
}

function getcreds(){
    let creds = prompt("Please enter your current funds in raw number form only.");
    if (creds < 58) {
        document.write("Insufficient funds for any product on offer. Scrapworker " + usrname + "'s wasting of RE:Fresh. bandwith has been noted.");
    } else {
        document.write("Acceptable value of scrip (¤ " + creds + ") verified. Enjoy your shopping, " + usrname + ".");
    } 
}

function getreason(){
    let reason = prompt("Please state your reason for arriving at this page.");
    document.write("User " + usrname + " has stated that \"" + reason + "\" was the reason for arrival to this page, and response has been recorded for satisfaction survey purposes.");
}
