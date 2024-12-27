from rest_framework import serializers
from applications.models import NewProject


class NewProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = NewProject
        fields = '__all__'

