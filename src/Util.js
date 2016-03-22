

function classes(options) {
    var cls = [];
    for(var p in options) {
        if(options[p])
            cls.push(p);
    }
    return cls;
}

module.exports = {
    classes: classes
};