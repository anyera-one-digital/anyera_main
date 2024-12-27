from rest_framework import serializers
from projects.models import (
    Project, DescriptionBlock, Slider, SliderImage, Industry, Type, Service
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


class DescriptionBlockSerializer(serializers.ModelSerializer):

    class Meta:
        model = DescriptionBlock
        fields = ['order', 'title', 'text']


class SliderImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = SliderImage
        fields = ['order', 'image']


class SliderSerializer(serializers.ModelSerializer):

    images = serializers.SerializerMethodField()

    class Meta:
        model = Slider
        fields = ['type', 'images']

    def get_images(self, obj):
        images = SliderImage.objects.filter(
            slider=obj
        )
        return SliderImageSerializer(images, many=True).data


class ProjectsListSerializer(serializers.ModelSerializer):

    services = ServiceSerializer(many=True)

    class Meta:
        model = Project
        fields = ['id', 'name', 'intro_text', 'services', 'intro_image']


class ProjectSerializer(serializers.ModelSerializer):

    content_blocks = serializers.SerializerMethodField()
    sliders = serializers.SerializerMethodField()
    services = ServiceSerializer(many=True)
    industries = IndustrySerializer(many=True)
    type = serializers.CharField(source='type.name')
    other_projects = ProjectsListSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'

    def get_content_blocks(self, obj):
        blocks = DescriptionBlock.objects.filter(
            project=obj
        ).order_by('order')
        return DescriptionBlockSerializer(blocks, many=True).data

    def get_sliders(self, obj):
        sliders = Slider.objects.filter(
            project=obj
        )
        return SliderSerializer(sliders, many=True).data
