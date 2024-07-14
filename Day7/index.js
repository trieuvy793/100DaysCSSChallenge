function handleMove() {
  let left = document.querySelector('.section-left');
  let right = document.querySelector('.section-right');
  left.classList.toggle('move-left');
  right.classList.toggle('move-right');
}

function handleSearch() {
  let search = document.querySelector('.search > input');
  console.log(search);
  search.classList.toggle('move-input');
  
}