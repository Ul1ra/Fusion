# Script to follow WHEN CHANGING a models.py in Django locally !!!

1. Check logs via
```
docker logs $name
```
  - If in error log table of ... is missing you need to nuke the postgres
2. Shutdown the docker containers with 
```
docker-compose down
```
3. Check which docker volume to delete
```
docker volume ls
```
4. Copy the name of the postgres volume
```
docker volume rm $postgres-name
```
5. Then
```
docker-compose up -d
```
6. Now jump into the backend volume
```
docker ps
docker exec -ti $backendname bash
python manage.py migrate
python manage.py createsuperuser
```
7. Now go back on the browser and test 
```
localhost:8000/backend/admin
```