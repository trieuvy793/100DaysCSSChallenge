function move() {
  let top = document.querySelector('.top');
  if (top.classList.contains('moveTop')) {
    top.classList.remove('moveTop');
    top.classList.remove('stopTop');
    top.classList.add('backTop');
  } else {
    top.classList.add('moveTop');
    top.classList.add('stopTop');
    top.classList.remove('backTop');
  }

  let middle = document.querySelector('.middle');
  if (middle.classList.contains('moveMiddle')) {
    middle.classList.remove('moveMiddle');
    middle.classList.remove('stopMiddle');
    middle.classList.add('backMiddle');
  } else {
    middle.classList.add('moveMiddle');
    middle.classList.add('stopMiddle');
    middle.classList.remove('backMiddle');
  }

  let bottom = document.querySelector('.bottom');
  if (bottom.classList.contains('moveBottom')) {
    bottom.classList.remove('moveBottom');
    bottom.classList.remove('stopBottom');
    bottom.classList.add('backBottom');
  } else {
    bottom.classList.add('moveBottom');
    bottom.classList.add('stopBottom');
    bottom.classList.remove('backBottom');
  }
}