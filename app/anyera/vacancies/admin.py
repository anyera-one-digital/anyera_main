from django.contrib import admin
from django.utils.html import format_html
from unfold.admin import ModelAdmin, TabularInline
from vacancies.models import (
    Vacancy,
    Requirement,
    Responsibility,
    Response
)


class RequirementInline(TabularInline):
    model = Requirement
    extra = 0
    fields = ('text', 'order')
    classes = ['collapse']


class ResponsibilityInline(TabularInline):
    model = Responsibility
    extra = 0
    fields = ('text', 'order')
    classes = ['collapse']


class ResponseInline(TabularInline):
    model = Response
    classes = ['collapse']
    fields = ('email', 'name')
    extra = 0
    readonly_fields = ('email', 'name')
    can_delete = False
    show_change_link = True


@admin.register(Vacancy)
class VacancyAdmin(ModelAdmin):
    compressed_fields = True
    inlines = [
        RequirementInline,
        ResponsibilityInline,
        ResponseInline
    ]
    list_display = ['title', 'description', 'salary']
    search_fields = ['title']


@admin.register(Response)
class ResponseAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ['email', 'name', 'get_vacancy_title']
    search_fields = ['vacancy__title', 'email', 'name']
    readonly_fields = [
        'name', 'email', 'telegram',
        'portfolio_url', 'portfolio_file',
        'vacancy'
    ]

    def get_vacancy_title(self, obj):
        return obj.vacancy.title
