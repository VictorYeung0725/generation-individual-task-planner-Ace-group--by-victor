// Requirement
// Task Planner DOM project
// insert an image in a random position (initiate 5 random places, randomly insert when click button)
// Insert a youtube video
// Change / remove content of a header text
// change the src of the image

const projectBtn = document.querySelector('#project');
const taskContainer = document.querySelectorAll('.task-container');
const youtube = document.querySelector('#youtube');
const changeBtn = document.querySelector('#change');

//SECTION chaneg the task name
changeBtn.addEventListener('click', () => {
  if (changeBtn.textContent === 'Workspace Visible') {
    changeBtn.textContent = '👋Gues My name🤪';
  } else {
    changeBtn.textContent = 'Workspace Visible';
  }
});

// SECTION append youtube into overdue section ;
const yT = document.createElement('div');
yT.innerHTML = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/ytp8AHiJZjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`;
youtube.append(yT);

// SECTION press btn to create random img into task-container;
function randomImg() {
  let randomPosition = Math.floor(Math.random() * taskContainer.length);
  let imgs = document.createElement('img');
  imgs.setAttribute('src', `https://picsum.photos/id/237/200/300`);
  taskContainer[randomPosition].appendChild(imgs);
}

projectBtn.addEventListener('click', () => {
  console.log('Testing');
  randomImg();
});
