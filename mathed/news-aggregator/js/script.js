const noSvgIcons = document.querySelectorAll('[data-no-svg]');

if (document.location.hostname === '') {
	console.log('иконка svg не загружена');
	noSvgIcons.forEach(icon => {
		const newIcon = document.createElement('img');
		newIcon.className = icon.parentNode.className.baseVal;
		const iconPath = icon.getAttribute('data-no-svg');
		const iconAlt = icon.getAttribute('data-alt');
		icon.parentNode.classList.add('visually-hidden');
		newIcon.setAttribute('src', iconPath);
		newIcon.setAttribute('alt', iconAlt);
		icon.parentNode.parentNode.appendChild(newIcon);
	});
}