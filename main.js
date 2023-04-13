const names = document.querySelector('.names');
const runBtn = document.querySelector('.run-btn');
const timeToSelect = 3000;

const namesArr = ["Шарипов Джумар", "Болотова Мээрим", "Расторгуев Владислав", "Ибраимов Айдарбек", "Жайлообеков Нурбол", "Абдылдаев Айдар", "Курбанкулов Ислам", "Курманалиев Нурбек", "Карасартов Азамат", "Кадыров Мирбек", "Аскарбекова Магира", "Абакиров Баястан", "Жылдызбек у. Актилек", "Асанов Акжол"];

const render = () => {
  names.innerHTML = ``;
  namesArr.forEach((name) => {
    names.innerHTML += `
    <p class="name">${name}</p>
    ` 
  })
}

render()

let nameBlocks = document.querySelectorAll('.name');

const randomStudentIndex = (arr = namesArr) => {
  return Math.floor(Math.random() * arr.length);
}

const randomizeAction = () => {
  let colorize = setInterval(() => {
    let randIndex = Math.floor(Math.random() * nameBlocks.length);
    nameBlocks[randIndex].style.backgroundColor = 'rgb(255, 192, 184)';
    setTimeout(() => {
      nameBlocks[randIndex].style.backgroundColor = 'white';
    }, 150)
  }, 150)
  setTimeout(() => {
    clearInterval(colorize);
  }, timeToSelect)
}

const runRandomize = () => {
  let winner = randomStudentIndex();
  randomizeAction();
  setTimeout(() => {
    let pointing = setInterval(() => {
      nameBlocks[winner].style.backgroundColor = 'white';
      setTimeout(() => {
        nameBlocks[winner].style.backgroundColor = 'rgb(255, 192, 184)';
      }, 50)
    }, 150)
    setTimeout(() => {
      clearInterval(pointing);
    }, 2000);
  }, timeToSelect)
}

runBtn.addEventListener('click', () => {
  nameBlocks.forEach((name) => {
    name.style.backgroundColor = 'white';
  })
  runRandomize();
})