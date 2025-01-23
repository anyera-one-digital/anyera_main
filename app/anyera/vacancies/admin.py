# from django.contrib import admin
# from django.utils.html import format_html
# from vacancies.models import (
#     Vacancy,
#     Requirement,
#     Responsibility,
#     InfoBlock,
#     Response
# )


# class RequirementInline(admin.TabularInline):
#     model = Requirement
#     extra = 1
#     fields = ('text', 'order')


# class ResponsibilityInline(admin.TabularInline):
#     model = Responsibility
#     extra = 1
#     fields = ('text', 'order')


# class InfoBlockInline(admin.TabularInline):
#     model = InfoBlock
#     extra = 1
#     fields = ('title', 'content', 'order')


# class ResponseInline(admin.TabularInline):
#     model = Response
#     classes = ['collapse']
#     fields = ('email', 'name', 'edit_link')
#     extra = 0
#     readonly_fields = ('email', 'name', 'edit_link')
#     can_delete = False

#     def edit_link(self, obj):
#         url = f"/admin/vacancies/response/{obj.pk}/change/"
#         return format_html('<a href="{}">Edit</a>', url)


# @admin.register(Vacancy)
# class VacancyAdmin(admin.ModelAdmin):
#     inlines = [
#         InfoBlockInline,
#         RequirementInline,
#         ResponsibilityInline,
#         ResponseInline
#     ]
#     list_display = ['title', 'description', 'salary']
#     search_fields = ['title']


# @admin.register(Response)
# class ResponseAdmin(admin.ModelAdmin):
#     list_display = ['email', 'name', 'get_vacancy_title']
#     search_fields = ['vacancy__title', 'email', 'name']
#     readonly_fields = [
#         'name', 'email', 'telegram',
#         'portfolio_url', 'portfolio_file',
#         'vacancy'
#     ]

#     def get_vacancy_title(self, obj):
#         return obj.vacancy.title
