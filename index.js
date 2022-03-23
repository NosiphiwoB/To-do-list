let formData = []

const mySubmit = (event) => {
  event.preventDefault();
  let subject = document.getElementById("subject").value;
  let description = document.getElementById("description").value;
  let date = document.getElementById("date").value;

  if ((subject, description, date)) {
    document.getElementById(
      "msg"
    ).innerHTML = `<p style="color:green;">Succesfuly submitted</p>`;
    myDisplay()
  } else {
    document.getElementById(
      "msg"
    ).innerHTML = `<p style="color:red;">Fill all the required fields</p>`;
  }
};

const myDisplay = () => {
let formDataValue = {subject:subject.value, description:description.value, date:date.value} 
formData.push(formDataValue)
localStorage.setItem('user', JSON.stringify(formData));
 var output = JSON.parse(localStorage.getItem("user"));
 output.forEach(function(element){
   document.getElementById("tbody").innerHTML +=`
   <td>${subject.value}</td>
   <td>${description.value}</td>
   <td>${date.value}</td>
   <td><button onclick="myEdit()">Edit</button>
   <button onclick="myDelete()">Delete X</button></td>
   ` ;
   
 }


