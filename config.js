module.exports = function () {
  return {
    // Array of data provider are supported
    'dataPath': [
      '//mesh.freifunknord.de/data/',
      '//mesh.freifunknord.de/iz/',
      '//mesh.freifunknord.de/ploh/'
    ],
    'siteName': 'Freifunk Nord',
    'mapLayers': [
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        54.1109,
        9.805298
      ],
      // Southeast
      [
        53.2,
        10.5
      ]
    ],
    'domainNames': [
      {
        'domain': '',
        'name': 'Gateways'
      },
      {
        'domain': 'ffnord',
        'name': 'Freifunk Nord Hauptdomäne'
      },
      {
        'domain': 'ffnord-iz',
        'name': 'Freifunk Kreis Steinburg'
      },
      {
        'domain': 'ffnord-oh',
        'name': 'Freifunk Kreis Plön Ostholstein'
      },
      {
        'domain': 'ffki',
        'name': 'Freifunk Kiel'
      },
      {
        'domain': 'ffhh',
        'name': 'Freifunk Hamburg'
      },
      {
        'domain': 'ffnh',
        'name': 'Freifunk Nordheide'
      }

    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': '//nord.freifunk.net/impressum.html'
      },
      {
        'title': 'Datenschutz',
        'href': '//nord.freifunk.net/datenschutzerklaerung.html'
      }
    ]
  };
};
