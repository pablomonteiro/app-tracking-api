
module.exports = function(app) {
    var _QUERY_FIND_BY_KEYWORD = "select a.name " +
                                 "  from keyword k " +
                                 "          join application_keyword ak on (k.id = ak.id_keyword) " +
                                 "        join application a on (ak.id_application = a.id) " +
                                 " where upper(k.description) LIKE upper( $1 ) || '%'" +
                                 " group by a.name ";
    
    var _QUERY_FIND_ALL = "select a.name " +
                                 "  from keyword k " +
                                 "          join application_keyword ak on (k.id = ak.id_keyword) " +
                                 "        join application a on (ak.id_application = a.id) " +
                                 " group by a.name ";

    app.get('/application/v1/findByKeyword/:keyword', function(request, response) {
        var connection = app.connection.DBConnection.createSingleConnection();
        var keywordParam = request.params.keyword;
        connection.manyOrNone(_QUERY_FIND_BY_KEYWORD, keywordParam)
            .then(result => {
                response.send(result);
            })
            .catch(error => {
                console.log(error);
            });
    });

    app.get('/application/v1/all', function(request, response) {
        var connection = app.connection.DBConnection.createSingleConnection();
        var keywordParam = request.params.keyword;
        connection.manyOrNone(_QUERY_FIND_ALL, null)
            .then(result => {
                response.send(result);
            })
            .catch(error => {
                console.log(error);
            });
    });
}