var school=document.getElementById("school");
var college=document.getElementById("college");
school.style.display="none";
college.style.display="none"
function onselected(){
var select=document.getElementById("select").value;
if(select=="school"){
  school.style.display="flex";
  college.style.display="none";
}
else if(select=="college"){
  college.style.display="flex";
  school.style.display="none";
}
else{
  school.style.display="none";
  college.style.display="none"

}
}
onselected();
