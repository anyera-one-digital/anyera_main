from django.db import models
from ckeditor.fields import RichTextField
from rest_framework.exceptions import ValidationError
from articles.models import Article
from projects.models import Project


class PageType(models.TextChoices):
    MAIN = 'main', 'Главная'
    CONTACTS = 'contacts', 'Контакты'
    POLICY = 'policy', 'Политика'
    CERTIFICATES = 'certificates', 'Сертификаты'
    TEAM = 'team', 'Команда'
    PRICE = 'price', 'Цены'
    CAREER = 'career', 'Карьера'
    BRIEFING = 'briefing', 'Брифинг'
    COMPETENCIES = 'competencies', 'Компетенции'
    SERVICES = 'services', 'Услуги'
    PROJECTS = 'projects', 'Проекты'
    ARTICLE = 'articles', 'Статьи'


class PageSEO(models.Model):

    type = models.CharField(
        "Страница",
        max_length=20,
        choices=PageType.choices,
        unique=True
    )
    title = models.CharField(
        "Содержание для title",
        blank=True,
        null=True
    )
    description = models.TextField(
        "Содержание для meta(description)",
        blank=True,
        null=True
    )
    keywords = models.TextField(
        "Содержание для meta(keywords)",
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = 'SEO'
        verbose_name_plural = 'SEO'

    def __str__(self):
        return self.type


class PageContent(models.Model):

    type = models.CharField(
        "Страница",
        max_length=20,
        choices=PageType.choices,
        unique=True
    )
    title = models.CharField(
        "Содержание заголовка",
        blank=True,
        null=True,
        help_text="Может отсутствовать на странице"
    )
    description = RichTextField(
        "Содержание описания",
        blank=True,
        null=True,
        help_text="Может отсутствовать на странице"
    )

    class Meta:
        verbose_name = 'Content'
        verbose_name_plural = 'Content'

    def __str__(self):
        return self.type


class ArticleSEO(models.Model):
    article = models.OneToOneField(
        Article,
        on_delete=models.CASCADE,
        related_name="seo"
    )
    title = models.CharField(
        "Содержание для title",
        blank=True,
        null=True
    )
    description = models.TextField(
        "Содержание для meta(description)",
        blank=True,
        null=True
    )
    keywords = models.TextField(
        "Содержание для meta(keywords)",
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = "SEO (Статья)"
        verbose_name_plural = "SEO (Статьи)"

    def __str__(self):
        return self.article.title

class ProjectSEO(models.Model):
    project = models.OneToOneField(
        Project,
        on_delete=models.CASCADE,
        related_name="seo"
    )
    title = models.CharField(
        "Содержание для title",
        blank=True,
        null=True
    )
    description = models.TextField(
        "Содержание для meta(description)",
        blank=True,
        null=True
    )
    keywords = models.TextField(
        "Содержание для meta(keywords)",
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = "SEO (Статья)"
        verbose_name_plural = "SEO (Статьи)"

    def __str__(self):
        return self.project.name


class Accordion(models.Model):

    class Page(models.TextChoices):
        MAIN = 'main', 'Главная'
        SERVICES = 'services', 'Услуги'

    type = models.CharField(
        "Страница",
        max_length=20,
        choices=Page.choices,
        unique=True
    )
    title = models.CharField(
        "Заголовок",
        max_length=255
    )
    description = RichTextField(
        "Текст",
        blank=True
    )

    class Meta:
        verbose_name = "Аккордеон"
        verbose_name_plural = "Аккордеоны"

    def __str__(self):
        return self.title


class AccordionItem(models.Model):

    parent = models.ForeignKey(
        Accordion,
        on_delete=models.CASCADE,
        related_name='accordion_items',
        verbose_name='Аккордеон'
    )
    title = models.CharField(
        "Заголовок",
        max_length=255
    )
    content = RichTextField(
        "Текст"
    )
    order = models.PositiveIntegerField(
        "Порядок",
        default=0
    )

    class Meta:
        verbose_name = "Элемент аккордеона"
        verbose_name_plural = "Элементы аккордеона"
        ordering = ['order',]
        unique_together = ["parent", "order", ]

    def __str__(self):
        return f"{self.parent.title} > {self.title}"


class Price(models.Model):

    name = models.CharField(
        "Название",
        max_length=255
    )
    description = RichTextField(
        "Текст",
        max_length=255
    )
    price = models.PositiveIntegerField(
        "Цена"
    )
    price_discount_4 = models.PositiveIntegerField(
        "Цена со скидкой 4%",
        blank=True,
        null=True
    )
    price_discount_6 = models.PositiveIntegerField(
        "Цена со скидкой 6%",
        blank=True,
        null=True
    )
    price_discount_7 = models.PositiveIntegerField(
        "Цена со скидкой 7%",
        blank=True,
        null=True
    )
    price_discount_12 = models.PositiveIntegerField(
        "Цена со скидкой 12%",
        blank=True,
        null=True
    )
    order = models.PositiveIntegerField(
        "Порядок",
        default=0
    )

    class Meta:
        verbose_name = "Элемент таблицы цен"
        verbose_name_plural = "Элементы таблицы цен"
        ordering = ['order',]

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.price:
            self.price_discount_4 = round(self.price * 0.96)
            self.price_discount_6 = round(self.price * 0.94)
            self.price_discount_7 = round(self.price * 0.93)
            self.price_discount_12 = round(self.price * 0.88)
        super().save(*args, **kwargs)


class TeamPage(models.Model):

    title = models.CharField(
        "Заголовок",
        max_length=100,
        blank=True,
        null=True
    )
    description = RichTextField(
        "Описание",
        max_length=255,
        blank=True,
        null=True
    )
    number_of_projects = models.CharField(
        "Кол-во проектов",
        max_length=20
    )
    experience_of_specialists = models.CharField(
        "Опыт специалистов",
        max_length=20
    )
    number_of_experts = models.CharField(
        "Кол-во экспертов",
        max_length=20
    )
    clients_title = models.CharField(
        "Заголовок у клиентов",
        max_length=100,
        blank=True,
        null=True
    )
    clients_description = RichTextField(
        "Описание у клиентов",
        max_length=255,
        blank=True,
        null=True
    )

    def clean(self):
        super().clean()
        if TeamPage.objects.exists() and not self.pk:
            raise ValidationError("Можно создать только одну страницу 'Команда'.")

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Страница \"Команда\""
        verbose_name_plural = "Страница \"Команда\""

    def __str__(self):
        return self.title


class Team(models.Model):

    page = models.ForeignKey(
        TeamPage,
        on_delete=models.CASCADE,
        related_name='team',
        verbose_name='Страница команды'
    )
    name = models.CharField(
        "Имя и фамилия",
        max_length=100
    )
    text = models.CharField(
        "Текст",
        max_length=100
    )
    image = models.ImageField(
        "Фото",
        upload_to='imgs/'
    )
    order = models.PositiveIntegerField(
        "Порядок"
    )

    class Meta:
        verbose_name = "Член команды"
        verbose_name_plural = "Команда"
        ordering = ['order',]
        unique_together = ["page", "order", ]

    def __str__(self):
        return self.name


class ClientImage(models.Model):

    page = models.ForeignKey(
        TeamPage,
        on_delete=models.CASCADE,
        related_name='client_image',
        verbose_name='Страница команды'
    )
    image = models.ImageField(
        "Изображение",
        upload_to='imgs/'
    )
    order = models.PositiveIntegerField(
        "Порядок"
    )

    class Meta:
        verbose_name = "Изображение клиента"
        verbose_name_plural = "Изображения клиентов"
        ordering = ['order',]
        unique_together = ["page", "order", ]

    def __str__(self):
        return f"Изображение №{self.order}"
    

class ClientFeedBack(models.Model):

    page = models.ForeignKey(
        TeamPage,
        on_delete=models.CASCADE,
        related_name='client_feedback',
        verbose_name='Страница команды'
    )
    text = RichTextField(
        "Текст"
    )
    name = models.CharField(
        "Имя и фамилия клиента",
        max_length=100
    )
    position = models.CharField(
        "Должность",
        max_length=100
    )
    image = models.ImageField(
        "Фото клиента",
        upload_to='imgs/'
    )
    order = models.PositiveIntegerField(
        "Порядок"
    )

    class Meta:
        verbose_name = "Отзыв клиента"
        verbose_name_plural = "Отзывы клиентов"
        ordering = ['order',]
        unique_together = ["page", "order", ]

    def __str__(self):
        return f"Отзыв: {self.name}"
    

