from rest_framework import serializers
from applications.models import NewProject, Briefing


class NewProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = NewProject
        fields = '__all__'

    def validate(self, attrs):
        communication = attrs.get("communications")
        email = attrs.get("email")
        telegram_name = attrs.get("telegram_name")
        if communication == NewProject.Communication.EMAIL and not email:
            raise serializers.ValidationError(
                "Необходимо указать почту"
            )
        if communication == NewProject.Communication.TELEGRAM and not telegram_name:
            raise serializers.ValidationError(
                "Необходимо указать имя Telegram"
            )
        return attrs



class BriefingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Briefing
        fields = '__all__'