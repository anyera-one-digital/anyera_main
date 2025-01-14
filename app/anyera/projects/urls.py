from django.urls import path
from projects.views import project_list, project_detail

urlpatterns = [
    path('', project_list, name='project_list'),
    path('<int:id>/', project_detail, name='project_detail'),
]