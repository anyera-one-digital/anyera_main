from django.db import models
from ckeditor.fields import RichTextField


class Industry(models.Model):
    name = models.CharField(
        "Отрасль",
        max_length=200
    )

    class Meta:
        verbose_name = 'Отрасль'
        verbose_name_plural = 'Отрасли'

    def __str__(self):
        return self.name


class Type(models.Model):
    name = models.CharField(
        "Тип сайта",
        max_length=200
    )

    class Meta:
        verbose_name = 'Тип'
        verbose_name_plural = 'Типы'

    def __str__(self):
        return self.name


class Service(models.Model):
    name = models.CharField(
        "Услуга",
        max_length=200
    )

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(
        "Название",
        max_length=200
    )
    intro_text = models.TextField(
        "Вводный текст"
    )
    additional_intro_field = models.CharField(
        "Доп. вводное поле",
        max_length=200,
        blank=True,
        null=True
    )
    intro_image = models.ImageField(
        "Картинка вводного текста",
        upload_to="projects/images/"
    )
    background_image = models.ImageField(
        "Картинка на фон",
        upload_to="projects/images/",
        blank=True,
        null=True
    )
    element_image = models.ImageField(
        "Картинка в элементе",
        upload_to="projects/images/",
        blank=True,
        null=True
    )
    banner_image = models.ImageField(
        "Картинка на баннере",
        upload_to="projects/images/",
        blank=True,
        null=True
    )
    laptop_image = models.ImageField(
        "Картинка на ноутбуке",
        upload_to="projects/images/",
        blank=True,
        null=True
    )
    industries = models.ManyToManyField(
        Industry,
        verbose_name="Отрасли"
    )
    type = models.ForeignKey(
        Type,
        on_delete=models.CASCADE,
        verbose_name="Тип"
    )
    services = models.ManyToManyField(
        Service,
        verbose_name="Услуги"
    )
    is_visible = models.BooleanField(
        "Выводить в общий список",
        default=False
    )
    presentation_title = models.CharField(
        "Заголовок презентации",
        max_length=200,
        blank=True,
        null=True
    )
    presentation_text = models.TextField(
        "Текст презентации",
        blank=True,
        null=True
    )
    color = models.CharField(
        "Цвет",
        max_length=7,
    )
    other_projects = models.ManyToManyField(
        "self", 
        blank=True, 
        null=True, 
        verbose_name="Другие проекты"
    )

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

    def __str__(self):
        return self.name


class DescriptionBlock(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="description_blocks",
        verbose_name="Проект"
    )
    title = models.CharField(
        "Заголовок блока",
        max_length=200,
        blank=True,
        null=True
    )
    text = RichTextField(
        "Текст блока"
    )
    order = models.PositiveSmallIntegerField(
        "Положение",
        unique=True
    )

    class Meta:
        verbose_name = 'Блок описания'
        verbose_name_plural = 'Блоки описания'


class Slider(models.Model):
    class SliderType(models.TextChoices):
        MOBILE = "mobile", "Мобильная версия"
        DESKTOP = "desktop", "Компьютерная версия"
        TABLET = "tablet", "Планшетная версия"
        PRESENTATION = "presentation", "Презентация"

    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="sliders",
        verbose_name="Проект"
    )
    type = models.CharField(
        "Тип слайдера",
        max_length=50,
        choices=SliderType.choices
    )

    class Meta:
        verbose_name = 'Слайдер'
        verbose_name_plural = 'Слайдеры'
        unique_together = ["project", "type", ]

    def __str__(self):
        return f"{self.get_type_display()} ({self.project.name})"


class SliderImage(models.Model):
    slider = models.ForeignKey(
        Slider,
        on_delete=models.CASCADE,
        related_name="images",
        verbose_name="Слайдер"
    )
    image = models.ImageField(
        "Картинка слайдера",
        upload_to="projects/images/sliders"
    )
    order = models.PositiveSmallIntegerField(
        "Положение",
        unique=True
    )

    class Meta:
        verbose_name = 'Картинка слайдера'
        verbose_name_plural = 'Картинки слайдера'