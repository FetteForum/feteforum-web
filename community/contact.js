const scriptURL = 'https://script.google.com/macros/s/AKfycbz5WajsFXgL6ZWm_7JwNYpsDXPKNZY264KA9vfwzBK_eQfKDSJ7DPtY-KExRuWQGiY2_g/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Information received, you will be contacted within the next 24 hours!!") )
    .catch(error => console.error('Error!', error.message))
})