from django.conf import settings
from django.core.mail import EmailMessage
from django.shortcuts import render
from rest_framework import mixins, viewsets, status
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from applications.utils.telegram_utils import send_telegram_message
from vacancies.models import Vacancy, Response as ResponseModel
from vacancies.serializers import VacancySerializer, ResponseSerializer
from pages.models import PageContent, PageType

def vacancy_list(request):
    vacancies = Vacancy.objects.all()


    content = PageContent.objects.filter(
        type=PageType.CAREER
    ).first()

    return render(request, 'career.html', {
        'vacancies': vacancies,
        'content': content
    })


class VacancyViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):

    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    @action(detail=True, methods=['post'])
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
        self.send_notifications(serializer.validated_data, vacancy.title)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED
        )

    def send_notifications(self, response, vacancy_title):
        subject = "Отклик на вакансию"
        message = (
            f"Детали отклика:\n\n"
            f"Вакансия: {vacancy_title}\n"
            f"Имя: {response['name']}\n"
            f"Email: {response['email']}\n"
            f"Telegram: {response['telegram'] if response.get('telegram') else "Не указано"}\n"
            f"Ссылка на резюме: {response.get('portfolio_url') if response.get('portfolio_url') else "Не указано"}\n"
        )
        recipient_list = ["anyera.one@yandex.ru"]

        # email = EmailMessage(
        #     subject,
        #     message,
        #     settings.EMAIL_HOST_USER,
        #     recipient_list
        # )

        # if response.get('portfolio_file'):
        #     file = response.get('portfolio_file')
        #     file.seek(0)
        #     email.attach(file.name, file.read(), file.content_type)

        # email.send()

        send_telegram_message(message=f"{subject}\n\n{message}", html=True)


