from django.contrib import admin
from django.contrib.auth.models import Group
from unfold.admin import ModelAdmin, TabularInline
from articles.models import Article, ContentBlock, Theme
from pages.admin import ArticleSEOInline

admin.site.unregister(Group)


class ContentBlockInline(TabularInline):
    model = ContentBlock
    classes = ['collapse']
    fields = ('name', 'text', 'order')
    extra = 0

@admin.register(Theme)
class TypeAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("name",)
    search_fields = ("name",)

@admin.register(Article)
class ArticleAdmin(ModelAdmin):
    compressed_fields = True
    inlines = [ContentBlockInline, ArticleSEOInline]
    list_display = ['title', 'preview', 'created_at']
    search_fields = ['title']
    prepopulated_fields = {'code': ('title',)}