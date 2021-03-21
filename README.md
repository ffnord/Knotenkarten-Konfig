# Knotenkarten-Konfig
Dieses Repository enthält die Konfiguration für https://github.com/ffrgb/meshviewer

Zum Aufsetzen einer Karte clonst du das https://github.com/ffrgb/meshviewer repository und löscht die config.js sowie die config-default.js

Danach clonst du dieses Repository auf gleicher Ebene.

```
/opt
    /meshviewer
    /nord-meshviewer-config
```

Dann linkst du an Stelle der vorher gelöschten dateien, die beiden Dateien aus diesem Repositroy.
```
ln -s /opt/nord-meshviewer-config/config.js /opt/meshviewer/config.js
ln -s /opt/nord-meshviewer-config/config.default.js /opt/meshviewer/config.default.js
```