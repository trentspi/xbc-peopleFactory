const personForm = document.querySelector('form');

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = hairColor;
  colorDiv.style.height = '50px';
  colorDiv.style.width = '100px';
  return colorDiv;
}

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const details = document.querySelector('.details');

  const personName = form.personName.value;
  const hairColor = form.hairColor.value;
  const age = form.age.value;
  const birthPlace = form.birthPlace.value;

  const colorDiv = renderColor(hairColor);

  details.innerHTML = `
    <ul>
      <li>Name: ${personName}</li>
      <li>Hair Color: ${colorDiv.outerHTML}</li>
      <li>Age: ${age}</li>
      <li>Birth Place: ${birthPlace}</li>
    </ul>
  `
}

personForm.onsubmit = handleSubmit();
