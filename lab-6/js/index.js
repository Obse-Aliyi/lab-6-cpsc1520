/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/

async function getContacts(){
  const res = await fetch('/public/data/contacts.json');
  const payload = await res.json()
 getContacts = [...payload]
  renderContacts(getContacts)
}


function renderContacts(contacts){
const contactPerson = document.getElementById('contacts')
contactPerson.innerHTML ='';

contacts.forEach(contact => {
  const template = `
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${contact.name}</h5>
    </div>
  <small>${contact.email}<</small>
  </div>
  
  `;
  contactPerson.innerHTML += template;
});


}
getContacts()