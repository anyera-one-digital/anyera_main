# anyera_main

docker compose down
docker compose up --build  -d

docker compose exec app sh
python3 manage.py makemigrations
python3 manage.py migrate

python3 manage.py collectstatic

python3 manage.py runserver 0:8000

python3 manage.py createsuperuser

ps aux
kill -9
