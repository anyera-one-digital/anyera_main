from rest_framework import generics, mixins, viewsets
from projects.models import Project
from projects.serializers import ProjectSerializer

class ProjectViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
    ):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

