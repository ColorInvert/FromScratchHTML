let usrname = "nothing";
let rating = "NOT YET DEFINED";


var myImage = new Image(100, 200);
myImage.src = 'Star.png';


function getusr(){
    let usrnamelocal = prompt("Live and breathe, Scrapworker. Please input your name now.");
    document.write("User " + usrnamelocal + " validated. You are now logged in, and your account and scrip values have been linked.");
     usrname = usrnamelocal;
}

function getcreds(){
    let creds = prompt("Please enter your current funds in raw number form only.");
    if (isNaN(creds) === false) {
        
        if (creds < 58) {
            document.write("Insufficient funds for any product on offer. Scrapworker " + usrname + "'s wasting of RE:Fresh. bandwith has been noted.");
            return;
        } else {
            document.write("Acceptable value of scrip (¤ " + creds + ") verified. Enjoy your shopping, " + usrname + ".");
            return;
        } 
    }
    else {

        creds = prompt("Invalid response. Please enter your current funds in RAW NUMBER FORM, ONLY.");
        if (isNaN(creds) === false){

            if (creds < 58) {
                document.write("Insufficient funds for any product on offer. Scrapworker " + usrname + "'s wasting of RE:Fresh. bandwith has been noted.");
                return;
            } else {
                document.write("Acceptable value of scrip (¤ " + creds + ") verified. Enjoy your shopping, " + usrname + ".");
                return;
            } 
        }
        else {
            document.write("A demerit has been added to " + usrname + "'s account for willful wasting of company resources through repeated refusal to follow instruction.");
        }
    }
}

function getreason(){
    let reason = prompt("Please state your reason for arriving at this page.");
    document.write("User " + usrname + " has stated that \"" + reason + "\" was the reason for arrival to this page, and response has been recorded for satisfaction survey purposes.");
}

function getrating(){
    
    let rating = prompt("What star rating, would you give our company, RE:Fresh.?");
        
    while (isNaN(rating) === true) {
        rating = prompt("Enter a number, please.");
    }

    for (let i = rating; i >= 1; i--) {
       document.write('<img src="Star.png" width="30" height="30"</img>');
    }
        
    document.write("\nRE:Fresh. A customer focused company with a " + rating + " star rating.");
          
}


