var radio=document.getElementsByName('r1');
var debitcard=document.getElementById('debitcard');
var creditcard=document.getElementById('creditcard');
var radio2=document.getElementsByName('r2');
var paytm=document.getElementById('paytm');
var google=document.getElementById('google');
function radiodisplay(){
if(radio[0].checked){
  creditcard.style.display="none";
  debitcard.style.display="block";
  net.style.display="none";
  upi.style.display="none";
}
else if(radio[1].checked){
  creditcard.style.display="block";
  debitcard.style.display="none";
  net.style.display="none";
  upi.style.display="none";
}
else if(radio[2].checked){
  creditcard.style.display="none";
  debitcard.style.display="none";
  net.style.display="block";
  upi.style.display="none";
}
else if(radio[3].checked){
  creditcard.style.display="none";
  debitcard.style.display="none";
  net.style.display="none";
  upi.style.display="block";
}
};
function upidisplay(){
  if(radio2[0].checked){
    paytm.style.display="block";
    google.style.display="none";
  }
  else if(radio2[1].checked){
    paytm.style.display="none";
    google.style.display="block";
  }
}
radiodisplay();
upidisplay();
