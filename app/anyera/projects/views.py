from rest_framework import mixins, viewsets
from django.shortcuts import render
from projects.models import Project
from projects.serializers import ProjectSerializer, ProjectsListSerializer

def project_list(request):
    projects = Project.objects.filter(is_visible=True)
    return render(request, 'projects.html', {'projects': projects})

def project_detail(request, id):
    project = Project.objects.get(id=id)
    other_projects = Project.objects.exclude(id=id)
    return render(request, 'project.html', {'project': project, 'other_projects': other_projects})


class ProjectViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_serializer_class(self):
        if self.action == "retrieve":
            return ProjectSerializer
        return ProjectsListSerializer