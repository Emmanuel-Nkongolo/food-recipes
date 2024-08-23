1 create an .env file and inside it add  VITE_REACT_APP_URL='localhost:5173'
2 run yarn in the client to install all dependencies
inside server folder using the terminal type venv\Scripts\activate *on windows* or source venv/bin/activate *on mac*
next type pip install -r requirements.txt to install dependencies 
then follow by python manage.py migrate to apply migration
next type python manage.py createsuperuser to create a superuser
finally type python manage.py runserver

