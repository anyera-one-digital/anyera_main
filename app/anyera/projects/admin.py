from django.contrib import admin
from projects.models import Project, ContentBlock


class ContentBlockInline(admin.TabularInline):
    model = ContentBlock
    classes = ['collapse']
    fields = ('name', 'text', )
    extra = 0


@admin.register(Project)

class ProjectAdmin(admin.ModelAdmin):
    inlines = [ContentBlockInline]
    list_display = ['name', 'preview']
    search_fields = ['name']
