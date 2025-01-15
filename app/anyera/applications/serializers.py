from rest_framework import serializers
from applications.models import NewProject, Briefing, Feedback


class NewProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = NewProject
        fields = '__all__'


class BriefingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Briefing
        fields = '__all__'


class FeedbackSerializer(serializers.ModelSerializer):

    class Meta:
        model = Feedback
        fields = '__all__'
