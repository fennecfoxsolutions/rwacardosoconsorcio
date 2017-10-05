app.factory('contatoFactory', function ($http, config) {
    
    var _sendMail = function (contact) {
        return $http.post(config.baseUrl + "/home/sendmail", contact);
    };

    return {
        sendMail: _sendMail
    };

});