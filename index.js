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

  formValues(details);

}

const formValues = (details) => {
  details.innerHTML = "";
  const elements = document.getElementsByTagName('label');
  const list = document.createElement('ul');
  for(var i = 0; i < elements.length; ++i) {
    if(!(elements[i].value)) {
      const id = elements[i].getAttribute('for');
      const inputvalue = document.getElementById(id);
      if(inputvalue.type == 'color') {
        const line = document.createElement('li');
        const color = renderColor(inputvalue.value);
        line.innerHTML += `<p>${elements[i].textContent}:</p>`;
        line.appendChild(color);
        list.appendChild(line);
      }
      else {
        const line = document.createElement("li");
        line.textContent = elements[i].textContent + ": " + inputvalue.textContent + inputvalue.value;
        list.appendChild(line);
      }
    }
  }
  details.appendChild(list);
}

personForm.addEventListener('submit', handleSubmit);
