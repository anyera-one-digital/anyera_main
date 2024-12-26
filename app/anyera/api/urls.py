from rest_framework.routers import DefaultRouter
from django.urls import include, path
from articles.views import ArticleViewSet

router = DefaultRouter()

router.register('articles',
                ArticleViewSet,
                basename='articles')

urlpatterns = [
    path('', include(router.urls)),
]