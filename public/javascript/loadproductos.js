var productos = {
	'faldas':
			[
				{'id':'falda1', 'url':'product/falda1', 'imgurl':'/images/faldanegra.png', 'title':'Falda negra'},
				{'id':'falda2', 'url':'product/falda2', 'imgurl':'/images/faldaroja.png', 'title':'Falda roja'},
				{'id':'falda3', 'url':'product/falda3', 'imgurl':'/images/faldaverde.png', 'title':'Falda verde'}
			],
	'camisetas':
			[
				{'id':'camiseta1', 'url':'product/camiseta1', 'imgurl':'/images/camisetanegra.png', 'title':'Camiseta azul'},
				{'id':'camiseta2', 'url':'product/camiseta2', 'imgurl':'/images/camisetaroja.png', 'title':'Camiseta roja'},
				{'id':'camiseta3', 'url':'product/camiseta3', 'imgurl':'/images/camisetaverde.png', 'title':'Camiseta verde'}
			],
	'zapatos':
			[
				{'id':'zapato1', 'url':'product/zapato1', 'imgurl':'/images/zapatonegro.png', 'title':'Zapato negro'},
				{'id':'zapato2', 'url':'product/zapato2', 'imgurl':'/images/zapatorojo.png', 'title':'Zapato rojo'},
				{'id':'zapato3', 'url':'product/zapato3', 'imgurl':'/images/zapatoverde.png', 'title':'Zapato verde'}
			]
};

window.onload = function() {
	var p = document.getElementById('categoriaid');
	var categoria = p.textContent;

	if (categoria && categoria != "" && categoria in productos) {
		loadProductsCategoria(categoria);
	}
	else {
		loadAllProducts();
	}
};

function loadAllProducts() {

	var cuerpo = document.getElementById("cuerpo");

	var listaProductos = [];

	var cont = 0;
	for( var categ in productos ) {

		listaProductos[cont] = productos[categ];
		cont++;
	}

	for(var i = 0; i < listaProductos.length; i++ ) {

		var proc1 = listaProductos[0][i];
		var proc2 = listaProductos[1][i];
		var proc3 = listaProductos[2][i];

		var cajagra = createCajaGrande(proc1);
		var cajapeq1 = createCajaPeque(proc2);
		var cajapeq2 = createCajaPeque(proc3);

		if ( cajagra) {
			var caja = createProductsBox(cajagra, cajapeq1, cajapeq2);
			cuerpo.appendChild(caja);
		}
	}
};

function loadProductsCategoria(categoria) {
	var listCategory = productos[categoria];
	var cuerpo = document.getElementById("cuerpo");

	var listastrios = [];
	var trio = [];
	for(var ind in listCategory) {

		if (trio.length == 3) {
			listastrios[listastrios.length] = trio;
			trio = [];
		}

		var product = listCategory[ind];
		trio[trio.length] = product;
	}

	if ( trio.length >0 ) {
		listastrios[listastrios.length] = trio;
	}

	for (var list in listastrios) {
		var cajagra = createCajaGrande(listastrios[list][0]);
		var cajapeq1 = createCajaPeque(listastrios[list][1]);
		var cajapeq2 = createCajaPeque(listastrios[list][2]);
		if(cajagra) {
			var caja = createProductsBox(cajagra, cajapeq1, cajapeq2);
			cuerpo.appendChild(caja);
		}
	}
}

function createProductsBox(cajagra, cajapeq1, cajapeq2) {
	var caja = document.createElement("div");
	caja.setAttribute('class', "caja");

	caja.appendChild(cajagra);
	caja.appendChild(cajapeq1);
	caja.appendChild(cajapeq2);

	return caja;
};

function createCajaGrande(product) {
	var cajagra = undefined;
	if ( product ) {
		var title = product["title"];
		var imgurl = product["imgurl"];
		var url = product["url"];

		cajagra = document.createElement("div");
		cajagra.setAttribute('class', "cajagra");
		createProducto(cajagra, title, url, imgurl, 'productogra');
	}

	return cajagra;
}

function createCajaPeque(product) {
	var cajapeq = undefined;
	if ( product ) {
		var title = product["title"];
		var imgurl = product["imgurl"];
		var url = product["url"];

		cajapeq = document.createElement("div");
		cajapeq.setAttribute('class', "cajapeq");
		createProducto(cajapeq, title, url, imgurl, 'productopeq');
	}

	return cajapeq;
}

function createProducto(caja, title, urltipo, imgurl, tipoproducto) {
	var img = document.createElement("img");
	img.setAttribute('src', imgurl);

	var link = document.createElement("a");
	link.setAttribute('href', urltipo);
	link.appendChild(img);

	var p = document.createElement("p");
	p.setAttribute('class', 'texto-producto');
	p.appendChild(document.createTextNode(title));

	var producto = document.createElement("div");
	producto.setAttribute('id', tipoproducto);
	producto.setAttribute('class', 'producto');

	producto.appendChild(link);
	producto.appendChild(p);

	caja.appendChild(producto);
};