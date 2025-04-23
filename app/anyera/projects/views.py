from rest_framework import mixins, viewsets
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from django.db.models import Count, Q
from django_filters.rest_framework import DjangoFilterBackend
from pages.models import PageType, PageSEO, PageContent, ProjectSEO
from projects.models import Project, Block, Industry, Type, Service
from projects.serializers import ProjectSerializer, ProjectsListSerializer
from projects.filters import ProjectFilter

def project_list(request):
    projects = Project.objects.filter(is_visible=True)

    industries = (
        Industry.objects.annotate(
            project_count=Count(
                'project',
                filter=Q(project__is_visible=True)
            )
        )
        .filter(project_count__gt=0)
    )
    industries_count = industries.count()

    types = (
        Type.objects.annotate(
            project_count=Count(
            'project',
                filter=Q(project__is_visible=True)
            )
        )
        .filter(project_count__gt=0)
    )
    types_count = types.count()

    services = (
        Service.objects.annotate(
            project_count=Count(
            'project',
                filter=Q(project__is_visible=True)
            )
        )
        .filter(project_count__gt=0)
    )
    services_count = services.count()

    seo = PageSEO.objects.filter(type=PageType.PROJECTS).first()
    content = PageContent.objects.filter(type=PageType.PROJECTS).first()

    return render(request, 'projects.html', {
        'projects': projects,
        'industries_count': industries_count,
        'industries': industries,
        'types_count': types_count,
        'types': types,
        'services_count': services_count,
        'services': services,
        'seo': seo,
        'content': content
    })

def project_detail(request, id):
    project = Project.objects.get(id=id)
    other_projects = project.other_projects.all()
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

    queryset = Project.objects.filter(is_visible=True)
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProjectFilter

    def get_serializer_class(self):
        if self.action == "retrieve":
            return ProjectSerializer
        return ProjectsListSerializer
    
    def list(self, request, *args, **kwargs):
        qs = self.filter_queryset(self.get_queryset())

        projects_data = self.get_serializer(qs, many=True).data


        params_no_ind = request.query_params.copy()
        params_no_ind.pop('industries', None)
        qs_no_ind = ProjectFilter(params_no_ind, queryset=self.get_queryset()).qs

        industry_facets = (
            Industry.objects.filter()
            .annotate(count=Count('project', filter=Q(project__in=qs_no_ind)))
            .filter(count__gt=0)
            .values('id', 'name', 'count')
        )

        params_no_type = request.query_params.copy()
        params_no_type.pop('types', None)
        qs_no_type = ProjectFilter(params_no_type, queryset=self.get_queryset()).qs

        type_facets = (
            Type.objects.filter()
            .annotate(count=Count('project', filter=Q(project__in=qs_no_type)))
            .filter(count__gt=0)
            .values('id', 'name', 'count')
        )
 
        params_no_srv = request.query_params.copy()
        params_no_srv.pop('services', None)
        qs_no_srv = ProjectFilter(params_no_srv, queryset=self.get_queryset()).qs

        service_facets = (
            Service.objects.filter()
            .annotate(count=Count('project', filter=Q(project__in=qs_no_srv)))
            .filter(count__gt=0)
            .values('id', 'name', 'count')
        )

        return Response({
            'projects': projects_data,
            'facets': {
                'industries': list(industry_facets),
                'types':      list(type_facets),
                'services':   list(service_facets),
            }
        })