exports.home = function(req, res) {
    res.send("Welcome to NodeJS page");
}

exports.html = function(req, res) {
    res.sendFile(__dirname.replace("app\\controllers", "") + "/index.html");
}

exports.json = function(req, res) {
    var data = [
        {"id":1, "name": "Demo JSon string 1"},
        {"id":1, "name": "Demo JSon string 1"},
        {"id":1, "name": "Demo JSon string 1"},
        {"id":1, "name": "Demo JSon string 1"},
        {"id":1, "name": "Demo JSon string 1"},
        {"id":1, "name": "Demo JSon string 1"},
    ];
    res.send({data});
}