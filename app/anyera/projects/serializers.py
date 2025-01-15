from rest_framework import serializers
from projects.models import (
    Project, Block, SliderImage, Industry, Type, Service
)


class IndustrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Industry
        fields = ['name']


class TypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Type
        fields = ['name']


class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = ['name']


class SliderImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = SliderImage
        fields = ['order', 'image']


class BlockSerializer(serializers.ModelSerializer):

    images = SliderImageSerializer(many=True)

    class Meta:
        model = Block
        fields = ['type', 'images']


class ProjectsListSerializer(serializers.ModelSerializer):

    services = ServiceSerializer(many=True)

    class Meta:
        model = Project
        fields = ['id', 'name', 'intro_text', 'services', 'intro_image']


class ProjectSerializer(serializers.ModelSerializer):

    sliders = BlockSerializer(many=True)
    services = ServiceSerializer(many=True)
    industries = IndustrySerializer(many=True)
    type = serializers.CharField(source='type.name')
    other_projects = ProjectsListSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'
