# Pratique-JS-Advance


# Cas pratique n°1

Créez les éléments suivants en utilisant leur constructeurs :

- Une fonction calculant la moyenne de 3 paramètres
- Un tableau contenant 4 éléments
- Un objet littéral contenant votre nom, votre prénom et une fonction affichant
« bonjour »
- Une erreur dont le message est « What’s going on ? And I say heyyyyyy » et levez la


# Cas pratique n°2

Ecrivez une fonction "constructeur" User permettant de créer un objet utilisateur
contenant les propriétés :

    - nom
    - prénom
    - email
    - pseudo
    - âge

- Créez deux objets à l’aide de la fonction User

- Modifiez le prototype afin d’ajouter :
    - une propriété « role » contenant la valeur « visiteur »
    - une méthode "enableNSFW" retournant true ou false selon si l’utilisateur est
    majeur ou non

    - une méthode "randomizeName » attribuant à l’utilisateur un pseudo aléatoire

- Affichez maintenant le contenu complet d’un objet "user » (via un console.log), les
propriétés et méthode du prototypes sont elles visibles ?

- Essayez maintenant d’afficher directement le role d’un utilisateur (unqiuement
propriété), la voyez vous ?

- Appelez les deux méthodes précédemment créées sur un utilisateur et vérifiez qu’elles
produisent le bon résultat.

- Changer la propriété « role » d'un utilisateur en lui donnant la valeur « admin » puis affichez là dans la console. A-t-elle remplacé la propriété du prototype ?


# Cas pratique n°3

Créez un objet littéral produit et définissez les propriétés (ou accesseurs) selon
contraintes suivantes :

- id (ne peut pas être modifié ou supprimé)
- nom
- prix d’achat
- prix de vente
- marge (doit être calculée automatiquement, modifier la marge doit influer sur
le prix de vente sans modifier le prix d’achat, ne doit pas être énumérable)
- ref (ne peut pas être modifiée, supprimée et ne doit pas être énumérable)
- description

Créez maintenant un proxy pour l’objet produit apportant les fonctionnalités suivantes :

- Tous les prix doivent être retournés avec le symbole €.
- La description doit être retournée tronquée (suivi de "…") si elle fait plus de 100
caractères.
- Les prix d’achat et de vente doivent toujours être positifs.
- On ne peut modifier un prix de vente pour le rendre inférieur au prix d’achat.
- On ne peut modifier un prix d’achat pour le rendre supérieur au prix de vente.