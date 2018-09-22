function Nfor(n, f) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}


Math.getRandomNumber = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1) + min))
}


function createE(type, attr, childOf) {
    var e = document.createElement(type);
    Nfor(Object.keys(attr).length, i => {
        e.setAttribute(Object.keys(attr)[i], attr[Object.keys(attr)[i]]);
    });
    childOf.appendChild(e);
    return e;
}
