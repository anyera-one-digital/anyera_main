from django.db import models
from django.core.exceptions import ValidationError
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
    link = models.CharField(
        "Ссылка на сайт",
        null=True,
        max_length=200,
        default=""
    )
    select_on_main = models.BooleanField(
        "Выводить в блоке на главной?",
        default=False
    )
    intro_text = models.TextField(
        "Вводный текст"
    )
    additional_intro_field = models.CharField(
        "Вводное описание",
        max_length=200,
        blank=True,
        null=True
    )
    intro_image = models.ImageField(
        "Картинка в списке объектов",
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

    def clean(self):
        super().clean()
        if self.is_visible:
            qs = Project.objects.filter(is_visible=True)
            if self.pk:
                qs = qs.exclude(pk=self.pk)
            if qs.count() >= 6:
                raise ValidationError(
                    "Можно установить флаг 'Выводить в общий список' максимум для 6 проектов."
                )

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)


# class DescriptionBlock(models.Model):
#     project = models.ForeignKey(
#         Project,
#         on_delete=models.CASCADE,
#         related_name="description_blocks",
#         verbose_name="Проект"
#     )
#     title = models.CharField(
#         "Заголовок блока",
#         max_length=200,
#         blank=True,
#         null=True
#     )
#     text = RichTextField(
#         "Текст блока"
#     )
#     order = models.PositiveSmallIntegerField(
#         "Положение"
#     )

#     class Meta:
#         verbose_name = 'Блок описания'
#         verbose_name_plural = 'Блоки описания'
#         unique_together = ["project", "order", ]


class Block(models.Model):

    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="blocks",
        verbose_name="Проект"
    )
    title = models.CharField(
        "Заголовок блока",
        max_length=200,
        blank=True,
        null=True
    )
    text = RichTextField(
        "Текст блока",
        blank=True,
        null=True
    )
    image = models.ImageField(
        "Изображение блока",
        upload_to="projects/images/",
        blank=True,
        null=True
    )
    order = models.PositiveSmallIntegerField(
        "Положение"
    )
    

    class Meta:
        verbose_name = 'Блок'
        verbose_name_plural = 'Блоки'
        ordering = ["order"]
        unique_together = ["project", "order", ]

    def __str__(self):
        return f"Блок №{self.order} ({self.project.name})"


class SliderImage(models.Model):
    block = models.ForeignKey(
        Block,
        on_delete=models.CASCADE,
        related_name="images",
        verbose_name="Слайдер"
    )
    image = models.ImageField(
        "Картинка слайдера",
        upload_to="projects/images/sliders"
    )
    order = models.PositiveSmallIntegerField(
        "Положение"
    )

    class Meta:
        verbose_name = 'Картинка слайдера'
        verbose_name_plural = 'Картинки слайдера'
        unique_together = ["block", "order", ]
