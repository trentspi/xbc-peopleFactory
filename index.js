const personForm = document.querySelector('form');

personForm.onsubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const personName = form.personName.value;
  //console.log(form.personName);

  const details = document.querySelector('.details');
  details.innerHTML += `<em>${personName}</em>`;
}
