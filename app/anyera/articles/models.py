from django.db import models

class ContentBlock(models.Model):
    name = models.CharField(
        "Название блока", 
        max_length=200
    )
    text = models.TextField("Текст блока")

    def __str__(self):
        return self.name


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
    txt_block = models.ManyToManyField(
        ContentBlock, 
        verbose_name="Блок с текстом"
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
