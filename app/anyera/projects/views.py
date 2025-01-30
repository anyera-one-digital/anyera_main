from rest_framework import mixins, viewsets
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from django.db.models import Count
from django_filters.rest_framework import DjangoFilterBackend
from pages.models import SEO, ProjectSEO
from projects.models import Project, Block, Industry, Type, Service
from projects.serializers import ProjectSerializer, ProjectsListSerializer
from projects.filters import ProjectFilter

def project_list(request):
    projects = Project.objects.filter(is_visible=True)

    industries = (
        Industry.objects.annotate(project_count=Count('project'))
        .filter(project_count__gt=0)
    )
    industries_count = industries.count()

    types = (
        Type.objects.annotate(project_count=Count('project'))
        .filter(project_count__gt=0)
    )
    types_count = types.count()

    services = (
        Service.objects.annotate(project_count=Count('project'))
        .filter(project_count__gt=0)
    )
    services_count = services.count()

    seo = SEO.objects.filter(type=SEO.SEOType.PROJECTS).first()

    return render(request, 'projects.html', {
        'projects': projects,
        'industries_count': industries_count,
        'industries': industries,
        'types_count': types_count,
        'types': types,
        'services_count': services_count,
        'services': services,
        'seo': seo
    })

def project_detail(request, id):
    project = Project.objects.get(id=id)
    other_projects = Project.objects.exclude(id=id)
    blocks = Block.objects.filter(project=project)
    seo = ProjectSEO.objects.filter(project=project).first()

    return render(request, 'project.html', {
        'project': project,
        'other_projects': other_projects,
        'blocks': blocks,
        'seo': seo
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
