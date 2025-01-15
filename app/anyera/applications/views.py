import requests
from rest_framework import mixins, viewsets, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from applications.models import NewProject, Briefing, Feedback
from applications.serializers import (
    NewProjectSerializer,
    BriefingSerializer,
    FeedbackSerializer
)


class NewProjectViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet
):
    queryset = NewProject.objects.all()
    serializer_class = NewProjectSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        new_project = serializer.save()

        message = (
            f"Email: {new_project.email}\n"
            f"Бюджет проекта: {new_project.budget}\n"
            f"Описание проекта: {new_project.project_descr}\n"
            f"Промокод: {new_project.promocode}\n"
        )

        self.send_to_bitrix24(message, new_project)
        self.send_email_notification(message, new_project)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def send_to_bitrix24(self, message, new_project):
        url = "https://anyera.bitrix24.ru/rest/6/eh6y29fnoal7d14n/crm.lead.add.json"
        payload = {
            'fields': (
                {
                    'NAME': new_project.fio,
                    'UF_CRM_TEXTAREA': message,
                }
            ),
            'params': {'REGISTER_SONET_EVENT': 'Y'}
        }
        requests.post(url, json=payload)

    def send_email_notification(self, message, new_project):
        subject = "Заявка на новый проект"
        message = (
            f"Детали заявки 'Новый проект':\n\n"
            f"Как обращаться: {new_project.fio}\n"
        ) + message
        recipient_list = ["NikSen09@mail.ru"]

        send_mail(subject, message, settings.EMAIL_HOST_USER, recipient_list)


class BriefingViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet
):
    queryset = Briefing.objects.all()
    serializer_class = BriefingSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        briefing = serializer.save()

        message = (
            f"E-mail: {briefing.email}\n"
            f"Продукт: {briefing.product}\n"
            f"Бюджет: {briefing.budget}\n"
            f"Описание проекта в основных чертах: {briefing.project_descr}\n"
            f"Главные цели, которые должны решатьсяс помощью сайта: {briefing.purpose}\n"
            f"Что важно знать пользователям сайта о продукте: {briefing.main_info}\n"
            f"Предположительная главная целевая аудитория: {briefing.target_audience}\n"
            f"Преимущества относительно конкурентов: {briefing.advantages}\n"
            f"Ссылки на конкурентов: {briefing.url_competitors}\n"
            f"Хорошие сайты с похожей тематикой: {briefing.url_same_like}\n"
            f"Плохие сайты с похожей тематикой: {briefing.url_same_dislike}\n"
            f"Основания для формирования цен: {briefing.price}\n"
            f"Что отталкивает клиентов: {briefing.repulsive_impression}\n"
            f"Критерии, то что ВАЖНО: {briefing.сriteria}\n"
            f"Сильные стороны конкурентов: {briefing.target}\n"
            f"Проблемы, которые планируется решить продуктом: {briefing.problems}\n"
            f"Триггеры клиента: {briefing.triggers}\n"
            f"Инфоболь клиента: {briefing.info_pain}\n"
            f"Потребности клиента: {briefing.needs}\n"
            f"Барьеры клиента: {briefing.barriers}\n"
            f"Цель клиента при выборе продукта: {briefing.look_for}\n"
            f"Общее описание дизайна сайта: {briefing.design}\n"
            f"Ассоциации вызываемые сайтои: {briefing.associations}\n"
            f"Основной сегмент целевой аудитории: {briefing.main_segment}\n"
        )

        self.send_to_bitrix24(message, briefing)
        self.send_email_notification(message, briefing)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def send_to_bitrix24(self, message, briefing):
        url = "https://anyera.bitrix24.ru/rest/6/eh6y29fnoal7d14n/crm.lead.add.json"
        payload = {
            'fields': (
                {
                    'NAME': briefing.fio,
                    'PHONE': briefing.phone,
                    'UF_CRM_TEXTAREA': message,
                }
            ),
            'params': {'REGISTER_SONET_EVENT': 'Y'}
        }
        requests.post(url, json=payload)

    def send_email_notification(self, message, briefing):
        subject = "Заявка на новый проект"
        message = (
            f"Детали заявки 'Брифинг':\n\n"
            f"Как обращаться: {briefing.fio}\n"
            f"Номер телефона: {briefing.phone}\n"
        ) + message
        recipient_list = ["NikSen09@mail.ru"]

        send_mail(subject, message, settings.EMAIL_HOST_USER, recipient_list)


class FeedbackViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet
):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        feedback = serializer.save()

        message = (
            f"Telegram: {feedback.telegram if feedback.telegram else "Не указано"}\n"
        )

        self.send_to_bitrix24(message, feedback)
        self.send_email_notification(message, feedback)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def send_to_bitrix24(self, message, feedback):
        url = "https://anyera.bitrix24.ru/rest/6/eh6y29fnoal7d14n/crm.lead.add.json"
        payload = {
            'fields': (
                {
                    'NAME': feedback.name,
                    'PHONE': feedback.phone,
                    'UF_CRM_TEXTAREA': message,
                }
            ),
            'params': {'REGISTER_SONET_EVENT': 'Y'}
        }
        requests.post(url, json=payload)

    def send_email_notification(self, message, feedback):
        subject = "Заявка на обратную связь"
        message = (
            f"Детали заявки 'Обратная связь':\n\n"
            f"Имя: {feedback.name}\n"
            f"Телефон: {feedback.phone if feedback.phone else "Не указано"}\n"
        ) + message
        recipient_list = ["NikSen09@mail.ru"]

        send_mail(subject, message, settings.EMAIL_HOST_USER, recipient_list)
