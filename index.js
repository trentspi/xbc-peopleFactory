const App = {
  init() {
    const personForm = document.querySelector('form');
    personForm.addEventListener('submit', this.handleSubmit.bind(this));
  },

  renderColor(hairColor) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = hairColor;
    colorDiv.style.height = '50px';
    colorDiv.style.width = '100px';
    return colorDiv;
  },

  handleSubmit(event) {
    event.preventDefault();
    const details = document.querySelector('.details');

    this.formValues(details);

  },

  formValues(details) {
    details.innerHTML = "";
    const elements = document.getElementsByTagName('label');
    const list = document.createElement('ul');
    for(let i = 0; i < elements.length; ++i) {
      const id = elements[i].getAttribute('for');
      const inputvalue = document.getElementById(id);
      if(inputvalue.value) {
        if(inputvalue.type === 'color') {
          const line = document.createElement('li');
          const color = this.renderColor(inputvalue.value);
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
  },
}

App.init();

//Block Wrapping
