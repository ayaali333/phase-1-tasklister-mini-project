document.addEventListener("DOMContentLoaded", () => {
 
  form = document.querySelector('#form')
 
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new-task-description.value)
    form.reset()
  })
  });
  
  function buildToDo(e){
  const li =document.createElement('li')
   li.innerHTML = e
   document.getElementById('taks').appendChild(li)
  }