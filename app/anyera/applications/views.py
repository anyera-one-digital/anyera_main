from rest_framework import mixins, viewsets
from applications.models import NewProject
from applications.serializers import NewProjectSerializer

class NewProjectViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet
):
    queryset = NewProject.objects.all()
    serializer_class = NewProjectSerializer

    #def create(self, request):
    #    pass
