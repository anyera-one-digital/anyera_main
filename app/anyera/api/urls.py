from rest_framework.routers import DefaultRouter
from django.urls import include, path
from articles.views import ArticleViewSet
from projects.views import ProjectViewSet
from applications.views import NewProjectViewSet


router = DefaultRouter()

router.register('articles',
                ArticleViewSet,
                basename='articles')
router.register('projects',
                ProjectViewSet,
                basename='projects')
router.register('applications',
                NewProjectViewSet,
                basename='applications')


urlpatterns = [
    path('', include(router.urls)),
]