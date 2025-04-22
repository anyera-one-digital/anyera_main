from django.contrib import admin
from unfold.admin import ModelAdmin, TabularInline
from pages.models import PageSEO, PageContent, ArticleSEO, ProjectSEO


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
