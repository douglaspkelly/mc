let packs = [];
function init() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            packs = json;
            initPacks();
        })
        .catch(function () {
        });
}

function initPacks() {
    let h = '';
    for (let i = 0; i < packs.length; i++) {
        h += htmlForPack(packs[i]);
    }
    g('left').innerHTML = h;
}

function htmlForPack(pack) {
    let h = '<div class=packDiv onclick=setActivePack("' + pack.id + '")>';
    h += '<h3 class=packName>' + pack.name + '</h3>'
        + '<img class=packImg src=' + pack.img + '><br>'
        + '<span class=packDescription>' + pack.description + '><br>'
        + '</div>';
    return h;
}

function g(id) {
    return document.getElementById(id);
}