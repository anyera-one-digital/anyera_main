from django.contrib import admin
from applications.models import NewProject, Briefing


@admin.register(NewProject)
class NewProjectAdmin(admin.ModelAdmin):
    list_display = ['fio', 'budget', 'phone']
    search_fields = ['fio', 'budget', 'phone', 'project_descr']


@admin.register(Briefing)
class BriefingAdmin(admin.ModelAdmin):
    list_display = ['fio', 'product', 'budget']
    search_fields = ['fio', 'budget', 'product', 'project_descr']
