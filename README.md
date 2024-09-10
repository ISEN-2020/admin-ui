# Admin UI Service

Cette application est une interface web d'administration pour un système de bibliothèque. Elle permet d'ajouter de nouveaux livres dans le système et de voir quels livres sont expirés.

## Prérequis

- Avoir Docker installé sur votre machine
- Avoir activer Kubernetes

## Déployer le Microservice

Récupérer l'image Docker depuis Docker Hub :

`docker pull enzo10villa/admin-ui-service:latest`

Cloner le repository en local :

`git clone https://github.com/ISEN-2020/admin-ui.git`

Déployer les configurations dans votre cluster Kubernetes :

`kubectl apply -f deployment.yaml`

`kubectl apply -f service.yaml`

Une fois le cluster en cours d'exécution, vous pouvez accéder à l'UI Utilisateur localement en vous rendant à l'adresse suivante : http://localhost:4000/ ou http://127.0.0.1:4000/

## Utilisateur de Connexion
Pour accéder au tableau de bord administrateur, veuillez utiliser les informations de connexion simulées suivantes :

Adresse e-mail : admin@example.com
Mot de passe : adminpassword

## Lire les logs

Lister vos pods en cours : `kubectl get pods`

Vous pouvez lire les journaux des pods en utilisant la commande : `kubectl logs <pod-name>`
