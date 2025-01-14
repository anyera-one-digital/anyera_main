from django.urls import path
from pages.views import main_page, contacts_page

urlpatterns = [
    path('', main_page, name='main_page'),
    path('contacts/', contacts_page, name='contacts')
]