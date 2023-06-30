# PetitProjet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.2.


Exercice =>

Affichage des formes

On crée un component ShapeComponent ou autre, on fait du html css dedans pour faire qu'il affiche un carré

Dans le AppComponent, on fait un tableau de nom, et dans le template on fait une boucle sur les noms, et pour chaque nom on affiche un app-shape

On peut ajouter un petit input et button permettant de rajouter un nouveau nom dans la liste

On peut aussi faire du css pour faire que les shapes s'affichent les unes à côté des autres (avec du flex par exemple)

Édition des formes

Dans le ShapeComponent, on peut commencer par rajouter une propriété width initialisée à 100

Dans le template on fait un input number permettant de mettre à jour cette valeur

On assigne la valeur au style du carré en utilisant un [ngStyle] (voir la doc de comment il s'utilise, il faudra préciser l'unité px d'une manière ou d'une autre)

On répète le processus pour toutes les valeurs qu'on veut pouvoir modifier

Finitions

On rajoute un booléen initialisé à false dans le ShapeComponent et on s'en sert dans le template pour faire qu'avec un ngIf ça affiche ou non les inputs

On fait en sorte de pouvoir changer la valeur du booléen au click sur le carré ou sur un bouton ou autre

On fait du CSS pour faire que l'affichage soit "bien" (genre moi il est pas si fou que ça)

Autres pistes à creuser si on a tout fini

Faire qu'on puisse changer la forme (rond ou carré)

Afficher combien de formes on a

Faire qu'on puisse modifier l'opacité

Faire qu'on puisse ajouter du texte à l'intérieur de la forme

Rajouter un bouton X près du titre pour pouvoir supprimer une des formes

Faire que quand on passe sa souris sur une des formes, ça affiche ses dimensions sur les côtés comme sur un plan

Bonus difficiles (que je ne corrigerai pas)

Faire qu'on puisse déplacer les formes en les glissant-déposant plutôt qu'avec des inputs

Faire qu'une forme puisse avoir des "ouvertures" en choisissant haut/bas/droite/gauche

Faire qu'une forme puisse contenir d'autres formes
