# Handivity
La plateforme web qui met en avant le handisport français, ses valeurs ainsi que les parasportifs français en vue des jeux paralympiques de Paris 2024.
Projet réalisé en DUT MMI 2e année
### Lien du site
[Handivity](https://handivity.robinleroux.fr/)
### Technos utilisés
- HTML, CSS, JS
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview?hl=fr)
- [Swiper.js](https://swiperjs.com/)
- Suite Adobe (Photoshop, Illustrator, After Effect, XD)

## Configuration
Dans *connexion.php*, modifier les variables ```host, dbname, user, password``` par les infos de la bdd

Dans *presentation_parasportif.php*, modifier les variables ```url-site``` par le nom de domaine :

ligne 216 : 
```html
value="url-site/presentation_parasportif.php?id=<?php echo $result["id_sportif"] ?>"
```

ligne 225 : 
```html
data-url="url-site/presentation_parasportif.php?id=<?php echo $result["id_sportif"] ?>"
```

ligne 231 : 
```html
data-url="url-site/presentation_parasportif.php?id=<?php echo $result["id_sportif"] ?>"
```

## Equipe
### Développeurs
- [Robin](https://github.com/robinlrx)
- [Guénolé](https://github.com/gueno-m)

### Designers / Vidéastes
- [Priveen](http://priveenamir.fr/)
- [Calvin](http://calvinvatel.fr/)
- [Luca](http://perso-etudiant.u-pem.fr/~lmirenda/portfolio/)

### Communicant
- [Mehdi](http://mehditanine.fr/)
