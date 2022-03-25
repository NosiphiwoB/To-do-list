var records =[]
const mySubmit = (event) => {
  event.preventDefault();
  let subject = document.getElementById("subject").value;
  let description = document.getElementById("description").value;
  let date = document.getElementById("date").value;

  if ((subject, description, date)) {
    document.getElementById(
      "msg"
    ).innerHTML = `<p style="color:green;">Succesfuly submitted</p>`;
    records.push(subject)
    myDisplay();
    reset();
  } else {
    document.getElementById(
      "msg"
    ).innerHTML = `<p style="color:red;">Fill all the required fields</p>`;
  }
};

const myDelete = (id) => {
  let element = document.getElementById(id);
  element.remove();
};

const reset = () => {
  document.getElementById("form").reset();
};

function save(id){
  const subject = document.getElementById("edit_subject").value;
  const description = document.getElementById("edit_description").value;
  const date = document.getElementById("edit_date").value;

  document.getElementById("subject_"+id).innerHTML=subject;
  document.getElementById("description_"+id).innerHTML=description;
  document.getElementById("date_"+id).innerHTML=date;
  document.getElementById("editform").style.display ="none";

}

function cancel(){
  document.getElementById("editform").style.display ="none";
}

const myEdit = (id) => {
  const subject = document.getElementById("subject_"+id).innerHTML;
  const description = document.getElementById("description_"+id).innerHTML;
  const date = document.getElementById("date_"+id).innerHTML;
  
  document.getElementById("editform").style.display ="block";
  document.getElementById("editform").innerHTML =`
  <h1 id="header">Edit</h1>
      <div>
        <label>Subject</lsubjectabel>
        <input id="edit_subject" type="text" value="${subject}" />
      </div>
      <div>
        <label>Description</label>
        <input id="edit_description" type="text" value="${description}" />
      </div>
      <div>
        <label>Date</label>
        <input id="edit_date" type="date" value="${date}" />
      </div>
      <br />
      <br />
      <div>
      <button onclick="cancel()">cancel</button>
    </div>
      <div>
        <button onclick="save(${id})">Save</button>
      </div>
  `

}
var id = 0;
const myDisplay = () => {
  let copy = subject ;
  console.log(copy)

  document.getElementById("tbody").innerHTML += `
  <tr id="${id}"> 
   <td id="subject_${id}">${subject.value}</td>
   <td id="description_${id}">${description.value}</td>
   <td id="date_${id}">${date.value}</td>
   <td><button onclick="myEdit(${id})" id="edit"></button>
   <button onclick="myDelete(${id})" id="delete"></button>
   </td>
   </tr>
   `;
   id++;
};
