var Express = require('express');
var ExpressLoad = require('express-load'); // Módulo responsável por ajudar o carregamento de dependências do Express
var BodyParser = require('body-parser');

module.exports = function() {
    var app = new Express();

    /** Parse para permitir que as respostas sejam em json. */
    app.use(BodyParser.urlencoded({extended: true}));
	app.use(BodyParser.json());

	/**
	 * Por seguranca, o browser nao permite o acesso Ajax completo a requests de 
	 * outros dominios (outras origens). Só é permitido acessar o conteudo do Ajax 
	 * se for mesmo dominio ou se a URL que voce esta chamando permitir.
	 * Essa permissao é dada atraves de um cabecalho que o servidor precisa incluir, 
	 * chamado Access-Control-Allow-Origin que faz parte do CORS - Cross Origin Resource Sharing.
	*/
    app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	  next();
	});
    
    /** 
     * Realiza o carregamento das pastas a partir da pasta informada: "src"
     */ 
    ExpressLoad('routes', {cwd: 'src'}) // realiza o carregamento de TODOS os módulos da pasta "rotas"
            .then('connection') // realiza o carregamento de todos os módulos da pasta "connection"
            .into(app); // adiciona tudo que foi carregado ao objeto "app".

    return app;
}