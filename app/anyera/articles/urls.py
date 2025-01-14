from django.urls import path
from articles.views import article_list, article_detail

urlpatterns = [
    path('', article_list, name='article_list'),
    path('<int:id>/', article_detail, name='article_detail'),
]