//Defining controller
var indexController = {};

//Adding controller methods
indexController.index = function(req, res) {
    var result = {};
    result.ipaddress = req.headers["x-forwarded-for"];
    var user_language = req.headers["accept-language"];
    result.language = user_language.substring(0, user_language.indexOf(","));
    var user_agent = req.headers["user-agent"];
    result.software = user_agent.substring(user_agent.indexOf("(")+1,user_agent.indexOf(")"));
    
    //Send response back to the client
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
};

module.exports = indexController;