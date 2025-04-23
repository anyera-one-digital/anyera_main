from rest_framework import serializers
from vacancies.models import (
    Vacancy,
    Requirement,
    Responsibility,
    Response
)


class RequirementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Requirement
        fields = ['order', 'text']


class ResponsibilitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Responsibility
        fields = ['order', 'text']


class VacancySerializer(serializers.ModelSerializer):

    requirements = serializers.SerializerMethodField()
    responsibilities = serializers.SerializerMethodField()

    class Meta:
        model = Vacancy
        fields = '__all__'

    def get_requirements(self, obj):
        return self.sort_object(Requirement, obj, RequirementSerializer)

    def get_responsibilities(self, obj):
        return self.sort_object(Responsibility, obj, ResponsibilitySerializer)

    def sort_object(self, type_obj, object, serializer):
        blocks = type_obj.objects.filter(
            vacancy=object
        ).order_by('order')
        return serializer(blocks, many=True).data


class ResponseSerializer(serializers.ModelSerializer):

    vacancy = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Response
        fields = '__all__'
