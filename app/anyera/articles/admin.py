from django.contrib import admin
from articles.models import Article, ContentBlock, Theme


class ContentBlockInline(admin.TabularInline):
    model = ContentBlock
    classes = ['collapse']
    fields = ('name', 'text', 'order')
    extra = 0

@admin.register(Theme)
class TypeAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    inlines = [ContentBlockInline]
    list_display = ['title', 'preview', 'created_at']
    search_fields = ['title']
