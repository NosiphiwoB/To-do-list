

const mySubmit = (event) => {
  event.preventDefault();
  let subject = document.getElementById("subject").value;
  let description = document.getElementById("description").value;
  let date = document.getElementById("date").value;

  if ((subject, description, date)) {
    document.getElementById(
      "msg"
    ).innerHTML = `<p style="color:green;">Succesfuly submitted</p>`;
    myDisplay();
    reset();
  } else {
    document.getElementById(
      "msg"
    ).innerHTML = `<p style="color:red;">Fill all the required fields</p>`;
  }
};

const myDelete = (event) => {
  let element = document.getElementById("tbl");
  element.parentNode.removeChild(element);
};

const reset =() => {
  document.getElementById("form").reset();
}


const myDisplay = () => {
   document.getElementById("tbody").innerHTML +=`
  <tr id="tbl"> 
  <td>${subject.value}</td>
   <td>${description.value}</td>
   <td>${date.value}</td>
   <td><button onclick="myEdit()">Edit</button>
   <button onclick="myDelete(event)">Delete</button>
   </td>
   </tr>
   ` ;
   
 }


