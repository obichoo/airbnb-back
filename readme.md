//Back end : 

-> createLocation: Créer et utiliser un middleware pour la création des lieux seulement par les utilisateurs de type "OWNER"
  -> rajouter dans le token le "type" du model User

-> getMyLocations: finir ce controller et utiliser middleware verifyToken. Récupérer l'id de l'utilisateur pour récupérer le user et ses locations.

-> getMyLocation : récupérer un lieu créé par un utilisateur

-> updateMyLocation : modiifer un lieu par l'utilisateur qui l'a créé

-> deleteMyLocation : supprimer un lieu par l'utilisateur qui l'a créé

-> createTypeLocation : utiliser le middleware verifyAdmin - ne doit être permis seulment par les utilisateurs de type admin

-> deleteTypeLocation : supprimer un type de lieu (seulement pour les admins)

-> updateTypeLocation : modifier un type de lieu (seulement pour les admins)
