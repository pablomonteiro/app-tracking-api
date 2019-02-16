
module.exports = function(app) {
    var _QUERY_FIND_BY_KEYWORD = "select a.id, a.name " +
                                 "  from keyword k " +
                                 "          join application_keyword ak on (k.id = ak.id_keyword) " +
                                 "        join application a on (ak.id_application = a.id) " +
                                 " where upper(k.description) LIKE upper( $1 ) || '%'" +
                                 " group by a.id, a.name " + 
                                 " order by a.name";
    
    var _QUERY_FIND_ALL = "select a.id, a.name " +
                                 "  from keyword k " +
                                 "          join application_keyword ak on (k.id = ak.id_keyword) " +
                                 "        join application a on (ak.id_application = a.id) " +
                                 " group by a.id, a.name " +
                                 " order by a.name";

    var _QUERY_APPLICATION_BY_ID = " select * from application where id = $1 ";

    var _QUERY_FIND_KEYWORD_BY_APPLICATION = "select k.id, k.description " +
                                 "  from keyword k " +
                                 "          join application_keyword ak on (k.id = ak.id_keyword) " +
                                 " where ak.id_application = $1 " +
                                 " group by k.id, k.description " + 
                                 " order by k.description";

    var _CONNECTION = function(app) {
        return app.connection.DBConnection.createSingleConnection();
    }

    app.get('/application/v1/findByKeyword/:keyword', function(request, response) {
        var keywordParam = request.params.keyword;
        _CONNECTION(app).manyOrNone(_QUERY_FIND_BY_KEYWORD, keywordParam)
            .then(result => {
                response.send(result);
            })
            .catch(error => {
                console.log(error);
            });
    });

    app.get('/application/v1/all', function(request, response) {
        _CONNECTION(app).manyOrNone(_QUERY_FIND_ALL, null)
            .then(result => {
                response.send(result);
            })
            .catch(error => {
                console.log(error);
            });
    });

    app.get('/getApplicationData/:id', function(request, response) {
        var id = request.params.id;
        _CONNECTION(app).one(_QUERY_APPLICATION_BY_ID, [id])
            .then(result => {
                response.send(result)
            })
            .catch(error => {
                console.log(error)
            })
    });

    app.get('/getKeywordsByApplication/:id', function(request, response) {
        var idApplication = request.params.id;
        _CONNECTION(app).manyOrNone(_QUERY_FIND_KEYWORD_BY_APPLICATION, [idApplication])
            .then(result => {
                response.send(result)
            })
            .catch(error => {
                console.log(error)
            })
    })


}