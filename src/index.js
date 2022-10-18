let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const toyCollection = document.querySelector('#toy-collection')

fetch("http://localhost:3000/toys")
.then(response => response.json())
.then(toyData => toyData.forEach(toyData => toyRender(toyData)))

function toyRender(toy){
  const toyDiv = document.createElement('div')
  toyDiv.classList.add("card")

  const h2 = document.createElement('h2')
  h2.innerText = toy.name

  const img = document.createElement('img')
  img.classList.add("toy-avatar")
  img.src = toy.image
  

  toyCollection.append(toyDiv)
  toyDiv.append(h2)
  toyDiv.append(img)
  // const currentToy = toyData
  // console.log(toyDiv)
  // console.log(toyData[0].name)
}