from django.contrib import admin
from unfold.admin import ModelAdmin
from applications.models import NewProject, Briefing


@admin.register(NewProject)
class NewProjectAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ['fio', 'budget', 'email']
    search_fields = ['fio', 'budget', 'email', 'project_descr']


@admin.register(Briefing)
class BriefingAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ['fio', 'product', 'budget']
    search_fields = ['fio', 'budget', 'product', 'project_descr']
