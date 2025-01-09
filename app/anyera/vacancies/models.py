from django.db import models


class Vacancy(models.Model):

    title = models.CharField(
        "Название вакансии",
        max_length=255
    )
    description = models.TextField(
        "Описание вакансии"
    )
    salary = models.CharField(
        "Зарплата",
        max_length=255
    )

    class Meta:
        verbose_name = "Вакансия"
        verbose_name_plural = "Вакансии"

    def __str__(self):
        return self.title


class Requirement(models.Model):

    text = models.TextField(
        "Требование"
    )
    order = models.PositiveSmallIntegerField(
        "Положение"
    )
    vacancy = models.ForeignKey(
        Vacancy,
        on_delete=models.CASCADE,
        related_name="requirement",
        verbose_name="Вакансия"
    )

    class Meta:
        verbose_name = "Требование"
        verbose_name_plural = "Требования"
        unique_together = ["vacancy", "order", ]

    def __str__(self):
        return self.text


class Responsibility(models.Model):

    text = models.TextField(
        "Обязанность"
    )
    order = models.PositiveSmallIntegerField(
        "Положение"
    )
    vacancy = models.ForeignKey(
        Vacancy,
        on_delete=models.CASCADE,
        related_name="responsibility",
        verbose_name="Вакансия"
    )

    class Meta:
        verbose_name = "Обязанность"
        verbose_name_plural = "Обязанности"
        unique_together = ["vacancy", "order", ]

    def __str__(self):
        return self.text
    

class InfoBlock(models.Model):

    title = models.CharField(
        "Название",
        max_length=255
    )
    content = models.TextField(
        "Содержание"
    )
    order = models.PositiveSmallIntegerField(
        "Положение"
    )
    vacancy = models.ForeignKey(
        Vacancy,
        on_delete=models.CASCADE,
        related_name="info_block",
        verbose_name="Вакансия"
    )

    class Meta:
        verbose_name = "Информационный блок"
        verbose_name_plural = "Информационные блоки"
        unique_together = ["vacancy", "order", ]

    def __str__(self):
        return self.title
    

class Response(models.Model):

    name = models.CharField(
        "Имя",
        max_length=255
    )
    email = models.EmailField(
        "Почта"
    )
    telegram = models.CharField(
        "Имя",
        max_length=255,
        blank=True,
        null=True
    )
    portfolio_url = models.URLField(
        "Ссылка на портфолио",
        blank=True,
        null=True
    )
    portfolio_file = models.FileField(
        "Файл с портфолио",
        upload_to="files/",
        blank=True,
        null=True
    )
    vacancy = models.ForeignKey(
        Vacancy,
        on_delete=models.CASCADE,
        related_name="response",
        verbose_name="Вакансия"
    )

    class Meta:
        verbose_name = "Отклик"
        verbose_name_plural = "Отклики"
        unique_together = ["vacancy", "email", ]

    def __str__(self):
        return f"{self.email} -> {self.vacancy.title}"
