from rest_framework import mixins, viewsets
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from projects.models import Project, Block
from projects.serializers import ProjectSerializer, ProjectsListSerializer
from projects.filters import ProjectFilter

def get_object_or_none(model, **kwargs):
    try:
        return model.objects.get(**kwargs)
    except ObjectDoesNotExist:
        return None

def project_list(request):
    projects = Project.objects.filter(is_visible=True)
    return render(request, 'projects.html', {'projects': projects})

def project_detail(request, id):
    project = Project.objects.get(id=id)
    other_projects = Project.objects.exclude(id=id)

    main_block = get_object_or_none(
        Block,
        project=project,
        type=Block.Type.MAIN
    )

    mobile_block = get_object_or_none(
        Block,
        project=project,
        type=Block.Type.MOBILE
    )

    desktop_block = get_object_or_none(
        Block,
        project=project,
        type=Block.Type.DESKTOP
    )

    tablet_block = get_object_or_none(
        Block,
        project=project,
        type=Block.Type.TABLET
    )

    presentation_block = get_object_or_none(
        Block,
        project=project,
        type=Block.Type.PRESENTATION
    )

    return render(request, 'project.html', {
        'project': project,
        'other_projects': other_projects,
        'main_block': main_block,
        'mobile_block': mobile_block,
        'desktop_block': desktop_block,
        'tablet_block': tablet_block,
        'presentation_block': presentation_block,
    })


class ProjectViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProjectFilter

    def get_serializer_class(self):
        if self.action == "retrieve":
            return ProjectSerializer
        return ProjectsListSerializer
