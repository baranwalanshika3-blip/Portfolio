function validate form() {
  let name =
document.getElementById("name").value;
  let email=
document.getElementById("email").value;
  let destination= document.getElementById("destination").value;

  if(name===""||email===""||destination==="") {
    alert("please fill all details");
    return false;
  }

  alert("Booking Successful!");
  return true;
}
