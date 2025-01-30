from django.db import models
from articles.models import Article
from projects.models import Project

class SEO(models.Model):

    class SEOType(models.TextChoices):
        MAIN = 'main', 'Главная'
        CONTACTS = 'contacts', 'Контакты'
        POLICY = 'policy', 'Политика'
        CERTIFICATES = 'certificates', 'Сертификаты'
        TEAM = 'team', 'Команда'
        PRICE = 'price', 'Цены'
        BRIEFING = 'briefing', 'Брифинг'
        COMPETENCIES = 'competencies', 'Компетенции'
        SERVICES = 'services', 'Услуги'
        PROJECTS = 'projects', 'Проекты'
        ARTICLE = 'articles', 'Статьи'

    type = models.CharField(
        "Страница",
        max_length=20,
        choices=SEOType.choices,
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
