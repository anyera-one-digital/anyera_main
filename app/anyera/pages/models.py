from django.db import models
from ckeditor.fields import RichTextField
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


# class Block(models.Model):

#     class Page(models.TextChoices):
#         MAIN = 'main', 'Главная'
#         SERVICES = 'services', 'Услуги'

#     type = models.CharField(
#         "Страница",
#         max_length=20,
#         choices=Page.choices,
#         unique=True
#     )
#     title = models.CharField(
#         max_length=255
#     )
#     description = models.TextField(
#         blank=True
#     )

#     def __str__(self):
#         return self.title


# class SubBlock(models.Model):

#     parent = models.ForeignKey(
#         Block,
#         on_delete=models.CASCADE,
#         related_name='subblocks'
#     )
#     title = models.CharField(max_length=255)
#     content = models.TextField()
#     order = models.PositiveIntegerField(default=0)

#     def __str__(self):
#         return f"{self.parent.title} > {self.title}"