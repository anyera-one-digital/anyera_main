from django.db import models
from ckeditor.fields import RichTextField

class SectionProject(models.Model):
    title = models.CharField("Название раздела", max_length=200)

    def __str__(self):
        return self.title

class Industry(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Type(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Service(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class ImgsSlider(models.Model):
    img_slider = models.ImageField("Картинка в слайдер", upload_to='imgs/')
    order = models.PositiveSmallIntegerField("Сортировка", unique = True)

    def __str__(self):
        return self.name


class Slider(models.Model):
    class Type(models.TextChoices):
        MOBILE_SLIDER = "mobile", "Слайдер \'телефон\'"
        DESKTOP_SLIDER = "desktop", "Слайдер \'компьютер\'"
        TABLET_SLIDER = "tablet", "Слайдер \'tablet\'" #Картинки для Tablet версия = несколько фото
        PRESENTATION_SLIDER = "presentation", "Слайдер презентация"  #Презентация - несколько фото

    type = models.CharField(
        max_length=20,
        choices=Type.choices,
        null=True,
        blank=True
    )

    img_slider = models.ManyToManyField(ImgsSlider)

    def __str__(self):
        return self.name




class Project(models.Model):
    section = models.ForeignKey(
        SectionProject, 
        on_delete=models.CASCADE
    )
    name = models.CharField(
        "Название элемента", 
        max_length=200
    )
    preview = models.CharField(
        "Превью текст", 
        max_length=200, default=''
    )    
    content = models.TextField("Текст") 
    image1 = models.ImageField("Превью", upload_to='imgs/')
    image2 = models.ImageField("Картинка в элементе", upload_to='imgs/')
    link = models.URLField("Ссылка") 
   
    industries = models.ManyToManyField(Industry)  #industry = Отрасль - список из готовых вариантов + может быть несколько
    title1 = models.CharField("Блок 1 с информацией - заголовок", max_length=200)
    block1_html = RichTextField(verbose_name="Блок 1 html")

    title2 = models.CharField("Блок 2 с информацией - заголовок", max_length=200)
    block2_html = RichTextField(verbose_name="Блок 2 html")

    title3 = models.CharField("Блок 3 с информацией - заголовок", max_length=200)
    block3_html = RichTextField(verbose_name="Блок 3 html")

    title4 = models.CharField("Блок 4 с информацией - заголовок", max_length=200) 
    block4_html = RichTextField(verbose_name="Блок 4 html")
    block5_html = RichTextField(verbose_name="Блок 5 html")
    block6_html = RichTextField(verbose_name="Блок 6 html")

    slider = models.ManyToManyField(Slider) #slider_desk = Картинки слайдера "дектоп" - несколько файлов#slider_mob = Картинки слайдера "мобильный" - также
    
    other = models.ManyToManyField(
        "self", 
        blank=True, 
        null=True, 
        verbose_name="Другие проекты"
    ) #other = models.ManyToManyField("Другие проекты", self, blank=True) #other = Похожие кейсы - связанные элементы/ссылки на другие проекты, в админке должен быть их выбор


    img_back = models.ImageField(
        "Картинка на фон", 
        upload_to='imgs/'
    )
    type = models.ManyToManyField(Type) #Тип сайта - список из уже прописанных вариантов
    service =  models.ManyToManyField(Service)  #Услуги - можем иметь несколько значений

    color = models.CharField(
        "Цвет", 
        max_length=50
    )
    
    select_on_main = models.BooleanField("Выводить в блоке на главной") #Выводить в блоке на главной (1/0)
    
    text_teblet = models.TextField("Текст для блока Tablet версия") 
    
    pres_title = models.CharField("Заголовок для презентации", max_length=200)
    pres_text = models.TextField("Текст презентации")
   
    shadow = models.ImageField("Фон на баннере", upload_to='imgs/')
    img_laptop = models.ImageField("Картинка ноутбук", upload_to='imgs/')

class Meta:
    verbose_name = 'Проект'
    verbose_name_plural = 'Проекты'

    def __str__(self):
        return self.name
