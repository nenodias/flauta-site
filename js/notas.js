let NOTAS = {
	"do":"do",
	"do#":"doSustenido",
	"reb":"reBemol",
	"re":"re",
	"re#":"reSustenido",
	"mib":"miBemol",
	"mi":"mi",
	"fa":"fa",
	"fa#":"faSustenido",
	"solb":"solBemol",
	"sol":"sol",
	"sol#":"solSustenido",
	"lab":"laBemol",
	"la":"la",
	"la#":"laSustenido",
	"sib":"siBemol",
	"si":"si",
	"DO":"DO",
	"DO#":"DOSustenido",
	"REb":"REBemol",
	"RE":"RE",
	"RE#":"RESustenido",
	"MIb":"MIBemol",
	"MI":"MI",
	"FA":"FA",
	"FA#":"FASustenido",
	"SOLb":"SOLBemol",
	"SOL":"SOL",
	"SOL#":"SOLSustenido",
	"LAb":"LABemol",
	"LA":"LA",
	"LA#":"LASustenido",
	"SIb":"SIBemol",
	"SI":"SI"
};

function requisicao(url){
	let headers = new Headers();
	headers.append('Accept','text/plain');
	headers.append('Content-type','text/plain');
	let method = 'GET';
	let init = {
		headers,
		method
	}
	return fetch(url, init).then(function(res){
		return res.text();
	});
}

function adicionarElemento(nota){
	let div = document.createElement('DIV');
	console.log("'" + nota + "' => " + NOTAS[nota]);
	div.setAttribute('class', NOTAS[nota]);
	div.setAttribute('data-bs-toggle', 'tooltip');
	div.setAttribute('title', NOTAS[nota]);
	document.querySelector('.app').appendChild(div);
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})
}

function adicionarBR(){
	let br = document.createElement('BR');
	br.setAttribute('style','clear: both;')
	document.querySelector('.app').appendChild(br);
}

function notas(url){
	requisicao(url)
	.then(function(dados){
		console.log(' ');
		console.log(dados);
		console.log(' ');
		dados = dados.replace(/(?:\r\n|\r|\n)/g, '<br/>');
		let lista_notas = dados.split(' ');
		for (var i = 0; i < lista_notas.length; i++) {
			let item = lista_notas[i];
			let cifras = item.split('<br/>');
			if(cifras.length > 1){
				for (var j = 0; j < cifras.length; j++) {
					let sub = cifras[j];
					if(sub){
						adicionarElemento(sub);
					}else{
						adicionarBR();
					}
				};
			}else if(cifras.length === 1){
				adicionarElemento(cifras[0]);
			}
		};
	});
}