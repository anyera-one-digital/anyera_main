from django.db import models


class Vacancy(models.Model):

    title = models.CharField(
        "Название вакансии",
        max_length=255
    )
    short_description = models.TextField(
        "Короткое описание вакансии",
        max_length=150
    )
    description = models.TextField(
        "Полное описание вакансии"
    )
    location = models.CharField(
        "Локация",
        max_length=255
    )
    work_experience = models.CharField(
        "Опыт работы",
        max_length=255
    )
    hard_skills = models.CharField(
        "Hard skills",
        max_length=255
    )
    soft_skills = models.CharField(
        "Soft skills",
        max_length=255
    )

    class Meta:
        verbose_name = "Вакансия"
        verbose_name_plural = "Вакансии"

    def __str__(self):
        return self.title


class Requirement(models.Model):

    text = models.CharField(
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
        ordering = ['order']

    def __str__(self):
        return self.text


class Responsibility(models.Model):

    text = models.CharField(
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
        ordering = ['order']

    def __str__(self):
        return self.text
    

class Condition(models.Model):

    text = models.CharField(
        "Условие"
    )
    order = models.PositiveSmallIntegerField(
        "Положение"
    )
    vacancy = models.ForeignKey(
        Vacancy,
        on_delete=models.CASCADE,
        related_name="сondition",
        verbose_name="Вакансия"
    )

    class Meta:
        verbose_name = "Условие"
        verbose_name_plural = "Условия"
        unique_together = ["vacancy", "order", ]
        ordering = ['order']

    def __str__(self):
        return self.text


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
