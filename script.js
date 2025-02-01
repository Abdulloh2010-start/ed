let body = document.querySelector('body');
let daynight = document.getElementById('daynight');
let send = document.getElementById('send');
let input = document.getElementById('input');
let tasklist = document.getElementById('tasklist');

daynight.addEventListener('click', () =>{
  if(body.classList.toggle('dark-mode')){
    daynight.textContent = '☀️'
  }else{
    daynight.textContent = '🌙'
  }
});

send.addEventListener('click', () => {
  let li = document.createElement('li');
  li.className = 'li-element';
  tasklist.appendChild(li);
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  let span = document.createElement('span');
  span.textContent = input.value;
  let editDelete = document.createElement('div');
  editDelete.style.display = 'flex';
  editDelete.style.gap = '10px';
  let editBtn = document.createElement('button');
  editBtn.textContent = '🖋️';
  editBtn.style.backgroundColor = 'white';
  editBtn.style.border = 'none';
  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.style.backgroundColor = 'white';
  deleteBtn.style.border = 'none';
  editDelete.appendChild(editBtn);
  editDelete.appendChild(deleteBtn);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(editDelete);
  input.value = '';

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
  editBtn.addEventListener('click', () => {
    let newText = prompt('Edit task:', span.textContent);
    if (newText !== null) {
      span.textContent = newText;
    }
  });
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      span.style.textDecoration = 'line-through';
      span.style.color = 'gray';
    } else {
      span.style.textDecoration = 'none';
      span.style.color = 'black';
    }
  });
});