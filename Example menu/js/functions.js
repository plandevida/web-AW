function showSubOptions (elem) {	
	var nodes = elem.childNodes;
	for(var i = 0; i < nodes.length; i++) {
		var node = nodes[i];
		if(node.className == "subOptions") {
			node.style.display = "block";
			break;
		}
	}
}

function hideSubOptions (elem) {
	var nodes = elem.childNodes;
	for(var i = 0; i < nodes.length; i++) {
		var node = nodes[i];
		if(node.className == "subOptions") {
			node.style.display = "none";
			break;
		}
	}
}