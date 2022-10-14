ymaps.ready(init);
var myMap;

function init () {
    myMap = new ymaps.Map("map", {
        center: [57.5262, 38.3061], // Углич
        zoom: 11
    }, {
        balloonMaxWidth: 200,
        searchControlProvider: 'yandex#search'
    });

    myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
            myMap.balloon.open(coords, {
                contentBody:
                    '<p>Ваши координаты: ' + [
                        coords[0].toPrecision(6),
                        coords[1].toPrecision(6)
                    ].join(', ') + '</p>',
                contentFooter:'<sup>Щелкните еще раз</sup>'
            });
        }
        else {
            myMap.balloon.close();
        }
    });

    myMap.events.add('contextmenu', function (e) {
        myMap.hint.open(e.get('coords'), 'Кто-то щелкнул правой кнопкой');
    });

    myMap.events.add('balloonopen', function (e) {
        myMap.hint.close();
    });
}