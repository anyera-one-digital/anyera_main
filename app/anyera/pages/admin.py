from django.contrib import admin
from unfold.admin import ModelAdmin, TabularInline
from pages.models import Accordion, AccordionItem, PageSEO, PageContent, ArticleSEO, ProjectSEO


class AccordionItemInline(TabularInline):
    model = AccordionItem
    extra = 0
    classes = ['collapse']
    fields = ("title", "content", "order")
    hide_title = True


@admin.register(Accordion)
class AccordionAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("type", "title")
    inlines = [AccordionItemInline,]


@admin.register(PageSEO)
class PageSEOAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("type",)


@admin.register(PageContent)
class PageSEOAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("type",)


class ArticleSEOInline(TabularInline):
    model = ArticleSEO
    classes = ['collapse']
    extra = 0


class ProjectSEOInline(TabularInline):
    model = ProjectSEO
    classes = ['collapse']
    extra = 0
