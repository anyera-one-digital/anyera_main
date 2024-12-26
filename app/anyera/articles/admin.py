from django.contrib import admin
from .models import Article, ContentBlock


class ContentBlockInline(admin.TabularInline):
    model = ContentBlock
    classes = ['collapse']
    fields = ('name', 'text', )
    extra = 0


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    inlines = [ContentBlockInline]
    list_display = ['title', 'preview']
    search_fields = ['title']
