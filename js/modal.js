function openbox(id, toggler) {
	var div = document.getElementById(id);
	if(div.style.display == 'block') {
		div.style.display = 'none';
	}
	else {
		div.style.display = 'block';
	}
}
