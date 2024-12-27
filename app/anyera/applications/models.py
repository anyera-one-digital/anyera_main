from django.db import models

# Create your models here.
class NewProject(models.Model):
    fio = models.CharField(
        "Как обращаться", 
        max_length=40
    )
    phone = models.CharField(
        "Номер для связи", 
        max_length=17, 
        default=''
    )
    communications = models.TextField(
        "Способ связи",
    )
    budget = models.TextField(
        "Бюджет проекта"
    )
    project_descr = models.TextField(
        "Описание проекта"
    )
    promocode = models.CharField(
        "Промокод", 
        max_length=40
    )

    class Meta:
        verbose_name = 'Заявка "Обсудить проект"'
        verbose_name_plural = 'Заявки "Обсудить проект"'

    def __str__(self):
        return self.fio


class Briefing(models.Model):
    fio = models.CharField(
        "Как обращаться", 
        max_length=40
    )
    phone = models.CharField(
        "Номер телефона", 
        max_length=17, 
        default=''
    )
    email = models.CharField(
        "E-mail",
        max_length=40,
    )
    product = models.CharField(
        "Какой продукт нужен", 
        max_length=300
    )
    budget = models.CharField(
        "Бюджет проекта", 
        max_length=300
    )
    project_descr = models.TextField(
        "Описание проекта в основных чертах", 
        max_length=300
    )
    purpose = models.CharField(
        "Цели сайта", 
        max_length=300
    )
    main_info = models.TextField(
        "Необходимая информация", 
        max_length=300
    )
    target_audience = models.TextField(
        "Целевая аудитория", 
        max_length=300
    )
    advantages = models.TextField(
        "Преимущества", 
        max_length=300
    )
    url_competitors = models.TextField(
        "Ссылки на конкурентов", 
        max_length=300
    )
    url_same_like = models.TextField(
        "Нравящиеся сайты", 
        max_length=300
    )
    url_same_dislike = models.TextField(
        "Плохие сайты", 
        max_length=300
    )
    price = models.TextField(
        "Основа для формирования цен", 
        max_length=300
    )
    repulsive_impression = models.TextField(
        "Отталкивающее клиентов", 
        max_length=300
    )
    сriteria = models.TextField(
        "Критерии", 
        max_length=300
    )
    target = models.TextField(
        "Сильные стороны конкурентов", 
        max_length=300
    )
    problems = models.TextField(
        "Проблемы", 
        max_length=300
    )
    triggers = models.TextField(
        "Триггеры", 
        max_length=300
    )
    info_pain = models.TextField(
        "Инфоболь", 
        max_length=300
    )
    needs = models.TextField(
        "Потребности", 
        max_length=300
    )
    barriers = models.TextField(
        "Барьеры", 
        max_length=300
    )
    look_for = models.TextField(
        "Цель при выборе продукта", 
        max_length=300
    )
    design = models.TextField(
        "Впечатление", 
        max_length=300
    )
    associations = models.TextField(
        "Дизайн", 
        max_length=300
    )
    main_segment = models.TextField(
        "Основной сегмент ЦА", 
        max_length=300
    )
    class Meta:
        verbose_name = 'Заявка "Брифинг"'
        verbose_name_plural = 'Заявки "Брифинг"'

    def __str__(self):
        return self.product