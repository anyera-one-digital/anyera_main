from django_filters import rest_framework as filters
from projects.models import Project, Industry, Type, Service

class ProjectFilter(filters.FilterSet):
    industries = filters.ModelMultipleChoiceFilter(
        field_name="industries__id",
        queryset=Industry.objects.all(),
        to_field_name="id",
        label="Отрасли"
    )
    type = filters.ModelChoiceFilter(
        field_name="type",
        queryset=Type.objects.all(),
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
        fields = ['industries', 'type', 'services']
