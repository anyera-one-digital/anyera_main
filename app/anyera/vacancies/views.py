from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework import mixins, viewsets, status
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from vacancies.models import Vacancy, Response as ResponseModel
from vacancies.serializers import VacancySerializer, ResponseSerializer


class VacancyViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):

    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    @action(detail=True, methods=['post'], url_path='response')
    def response(self, request, **kwargs):
        vacancy = self.get_object()

        serializer = ResponseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        if ResponseModel.objects.filter(
            vacancy=vacancy,
            email=serializer.validated_data['email']
        ).exists():
            raise ValidationError(
                'Отклик с этой почтой на данную вакансию уже отправлен'
            )

        serializer.save(vacancy=vacancy)
        self.send_email_notification(serializer.validated_data, vacancy.title)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED
        )
    
    def send_email_notification(self, response, vacancy_title):
        subject = "Отклик на вакансию"
        message = (
            f"Детали отклика:\n\n"
            f"Вакансия: {vacancy_title}\n"
            f"Имя: {response['name']}\n"
            f"Email: {response['email']}\n"
            f"Telegram: {response['telegram'] if response.get('telegram') else "Не указано"}\n"
            f"Ссылка на резюме: {response.get('portfolio_url') if response.get('portfolio_url') else "Не указано"}\n"
        )
        recipient_list = ["NikSen09@mail.ru"]

        email = EmailMessage(subject, message, settings.EMAIL_HOST_USER, recipient_list)

        if response.get('portfolio_file'):
            file = response.get('portfolio_file')
            file.seek(0)
            email.attach(file.name, file.read(), file.content_type)

        email.send()