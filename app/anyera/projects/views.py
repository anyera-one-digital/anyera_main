from rest_framework import mixins, viewsets
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from projects.models import Project, Slider
from projects.serializers import ProjectSerializer, ProjectsListSerializer

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

    mobile_sliders = get_object_or_none(
        Slider,
        project=project,
        type=Slider.SliderType.MOBILE
    )

    desktop_sliders = get_object_or_none(
        Slider,
        project=project,
        type=Slider.SliderType.DESKTOP
    )

    tablet_sliders = get_object_or_none(
        Slider,
        project=project,
        type=Slider.SliderType.TABLET
    )

    presentation_sliders = get_object_or_none(
        Slider,
        project=project,
        type=Slider.SliderType.PRESENTATION
    )

    return render(request, 'project.html', {
        'project': project,
        'other_projects': other_projects,
        'mobile_sliders': mobile_sliders,
        'desktop_sliders': desktop_sliders,
        'tablet_sliders': tablet_sliders,
        'presentation_sliders': presentation_sliders,
    })


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