'use strict';

{
  const todos = [
    {title: 'aaa aaaaaa aaaaaaaaaaaa', isCompleted: false},
    {title: 'bbb', isCompleted: true},
    {title: 'ccc', isCompleted: false},
    {title: 'ddd', isCompleted: false},
  ];

  const renderTodo = (todo) => {
    /*
    -li
      -label
        -input
        -span
      -button
    */ 
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = todo.isCompleted;
    const span = document.createElement('span');
    span.textContent = todo.title;
    const label = document.createElement('label');
    label.appendChild(input);
    label.appendChild(span);
    const button = document.createElement('button');
    button.textContent = 'x';
    const li = document.createElement('li');
    li.appendChild(label);
    li.appendChild(button);
    document.querySelector('#todos').appendChild(li);
  };

  const renderTods = () => {
    todos.forEach((todo) => {
      renderTodo(todo);
    });
  };

  document.querySelector('#add-form').addEventListener('submit',(e) => {
    e.preventDefault();
    const todo = {
      title: document.querySelector('#add-form input').value,
      isCompleted: false,
    };
    renderTodo(todo);
  });

  renderTods();
}