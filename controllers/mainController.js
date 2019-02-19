
module.exports.main = function(req, res, next) {
    let img = picRotator();
    res.render('./index', {title: "SMR Jo", img:img});
}

module.exports.history = function(req, res, next) {
    res.render('./partials/history', {title: "SMR Jo history"});
}

module.exports.lineage = function(req, res, next) {
    res.render('./partials/lineage', {title: "SMR Lineage"});
}

module.exports.teachers = function(req, res, next) {
    let img = picRotator();
    res.render('./teachers', {title: "SMR Teachers", img:img});
}

module.exports.heiden = function(req, res, next) {
    res.render('./partials/heiden', {title: "Heiden Bujutsu"});
}

module.exports.map = function(req, res, next) {
    res.redirect("http://localhost:3100/");
}
picRotator = function(req, res, next) {
    let picCount = 4;
    let num = Math.ceil(Math.random() * picCount);
    return (num + ".jpg");   
}