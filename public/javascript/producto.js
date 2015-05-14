var productos = {
	'falda1':{'id':'falda1', 'imgurl':'/images/faldanegra.png', 'title':'Falda negra', 'rating':5, 'description':'falda verano negra', 'price':'30 €'},
	'falda2':{'id':'falda2', 'imgurl':'/images/faldaroja.png', 'title':'Falda roja', 'rating':3, 'description':'falda verano roja', 'price':'40 €'},
	'falda3':{'id':'falda3', 'imgurl':'/images/faldaverde.png', 'title':'Falda verde', 'rating':2, 'description':'falda verano verde', 'price':'25 €'},
	'camiseta1':{'id':'camiseta1', 'imgurl':'/images/camisetanegra.png', 'title':'Camiseta azul', 'rating':5, 'description':'camiseta manga corta azul hombre', 'price':'25 €'},
	'camiseta2':{'id':'camiseta2', 'imgurl':'/images/camisetaroja.png', 'title':'Camiseta roja', 'rating':3, 'description':'camiseta manga corta roja hombre', 'price':'21 €'},
	'camiseta3':{'id':'camiseta3', 'imgurl':'/images/camisetaverde.png', 'title':'Camiseta verde', 'rating':1, 'description':'camiseta manga corta verde mujer', 'price':'19 €'},
	'zapato1':{'id':'zapato1', 'imgurl':'/images/zapatonegro.png', 'title':'Zapatos negros', 'rating':1, 'description':'zapatos caballero negros', 'price':'60 €'},
	'zapato2':{'id':'zapato2', 'imgurl':'/images/zapatorojo.png', 'title':'Zapatos rojos', 'rating':4, 'description':'zapatos de tacón rojos', 'price':'80 €'},
	'zapato3':{'id':'zapato3', 'imgurl':'/images/zapatoverde.png', 'title':'Zapatos verdes', 'rating':3, 'description':'bambas verdes', 'price':'55 €'}
};

window.onload = function() {
	var p = document.getElementById('productid');
	var producto = p.textContent;

	var data = productos[producto];

	if (data) {
		var imgurl = data["imgurl"];
		var title = data["title"];
		var rating = data["rating"];
		var price = data["price"];
		var description = data["description"];

		var productimage = document.getElementById("productimage");
		productimage.firstChild.src = imgurl;
		var productdetails = document.getElementById("productdetails");
		var titulo = productdetails.getElementsByTagName("h1")[0];
		titulo.textContent = title;
		var estrellas = productdetails.children[1];

		if (rating <= 5) {
			for(var i = 4; i >= (5-rating); i--) {

				var estrella = estrellas.children[i];
				estrella.src = "/images/starfull.png";
			}
		}

		var precio = productdetails.children[2];
		precio.textContent = price;
		var des = productdetails.children[4];
		des.textContent = description;
	}
	else
		alert("No existe el producto");
};