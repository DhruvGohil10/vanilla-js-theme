let button = document.querySelector('.button-85');
button.addEventListener('click', changeTheme);

let isLight = true;

function changeTheme () {
	isLight = !isLight;
   
	if (isLight === true) {
      let titleTag = document.querySelector('.title');
		titleTag.innerHTML = 'Morning Sunshine 🌞';
	}

	if (isLight === false) {
      let titleTag = document.querySelector('.title');
		titleTag.innerHTML = 'You think Darkness is you ally? I was born in it 🌑';
	}

	let containerTag = document.querySelector('.container');
	containerTag.classList.toggle('container-dark');

	let titleTag = document.querySelector('.title');
	titleTag.classList.toggle('title-dark');
}
