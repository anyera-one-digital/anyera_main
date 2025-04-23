from django_filters import rest_framework as filters
from projects.models import Project, Industry, Type, Service

class ProjectFilter(filters.FilterSet):
    industries = filters.ModelMultipleChoiceFilter(
        field_name="industries__id",
        queryset=Industry.objects.all(),
        to_field_name="id",
        label="Отрасли"
    )
    types = filters.ModelMultipleChoiceFilter(
        field_name="type__id",
        queryset=Type.objects.all(),
        to_field_name="id",
        label="Тип"
    )
    services = filters.ModelMultipleChoiceFilter(
        field_name="services__id",
        queryset=Service.objects.all(),
        to_field_name="id",
        label="Услуги"
    )

    class Meta:
        model = Project
        fields = ['industries', 'types', 'services']
