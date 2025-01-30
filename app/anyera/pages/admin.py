from django.contrib import admin
from unfold.admin import ModelAdmin, TabularInline
from pages.models import SEO, ArticleSEO, ProjectSEO


@admin.register(SEO)
class SEOAdmin(ModelAdmin):
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