var Express = require('express');
var ExpressLoad = require('express-load'); // Módulo responsável por ajudar o carregamento de dependências do Express

module.exports = function() {
    var app = new Express();
    
    /** 
     * Realiza o carregamento das pastas a partir da pasta informada: "src"
     */ 
    ExpressLoad('routes', {cwd: 'src'}) // realiza o carregamento de TODOS os módulos da pasta "rotas"
            .then('connection') // realiza o carregamento de todos os módulos da pasta "connection"
            .into(app); // adiciona tudo que foi carregado ao objeto "app".

    return app;
}