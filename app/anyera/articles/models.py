from django.db import models


class Article(models.Model):
    title = models.CharField(
        "Название",
        max_length=200
    )
    preview = models.TextField(
        "Превью текст",
        max_length=200,
        default=''
    )
    preview_img = models.ImageField(
        "Превью",
        upload_to='imgs/'
    )
    element_img = models.ImageField(
        "Картинка в элементе",
        upload_to='imgs/'
    )

    class Meta:
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'

    def __str__(self):
        return self.title


class ContentBlock(models.Model):
    name = models.CharField(
        "Название блока",
        max_length=200
    )
    text = models.TextField("Текст блока")
    article = models.ForeignKey(
        Article,
        on_delete=models.CASCADE,
        related_name="content_block",
        verbose_name="Статья"
    )
    order = models.PositiveSmallIntegerField(
        "Положение"
    )

    class Meta:
        verbose_name = 'Блок'
        verbose_name_plural = 'Блоки'
        unique_together = ["article", "order", ]

    def __str__(self):
        return self.name
