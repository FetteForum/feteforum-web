
const scriptURL = 'https://script.google.com/macros/s/AKfycbzW1HglLDCHDpfiFrophOFSdwckOAK8o_uX7xxss7B7_cWiAeDPmtRfRr7UHCE3l9YUDw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Information received, you will be contacted within the next 24 hours!!") )
    .catch(error => console.error('Error!', error.message))
})