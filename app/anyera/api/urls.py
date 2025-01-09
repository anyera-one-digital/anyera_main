from rest_framework.routers import DefaultRouter
from django.urls import include, path
from articles.views import ArticleViewSet
from projects.views import ProjectViewSet
from applications.views import NewProjectViewSet, BriefingViewSet
from vacancies.views import VacancyViewSet


router = DefaultRouter()

router.register('articles',
                ArticleViewSet,
                basename='articles')
router.register('projects',
                ProjectViewSet,
                basename='projects')
router.register('new_project',
                NewProjectViewSet,
                basename='new_project')
router.register('briefing',
                BriefingViewSet,
                basename='briefing')
router.register('vacancies',
                VacancyViewSet,
                basename='vacancies')


urlpatterns = [
    path('', include(router.urls)),
]