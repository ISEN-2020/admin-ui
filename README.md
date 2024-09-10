# Admin UI

Bienvenue dans le projet *Admin UI*. Ce projet est une application front-end conçue pour gérer l'interface utilisateur de la bibliothèque.

## Déployer le Microservice

Assurez-vous d'avoir Docker installé sur votre machine.

Récupérer l'image Docker depuis Docker Hub :

### `docker pull enzo10villa/admin-ui-service:latest`

Lancer le conteneur Docker avec l'image que vous venez de récupérer :

### `docker run -p 4000:80 enzo10villa/admin-ui-service:latest`

Une fois le conteneur en cours d'exécution, vous pouvez accéder à l'UI Utilisateur localement en vous rendant à l'adresse suivante : http://localhost:4000/ ou http://127.0.0.1:4000/

## Utilisateur de Connexion
Pour accéder au tableau de bord administrateur, veuillez utiliser les informations de connexion simulées suivantes :

Adresse e-mail : admin@example.com
Mot de passe : adminpassword
