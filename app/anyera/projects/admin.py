from django.contrib import admin
from django.core.exceptions import ValidationError
from django.forms.models import BaseInlineFormSet
from django.utils.html import format_html
from django.urls import reverse
from unfold.admin import ModelAdmin, TabularInline
from projects.models import (
    Project,
    Industry,
    Type,
    Service,
    # DescriptionBlock,
    Block,
    SliderImage
)


@admin.register(Industry)
class IndustryAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Type)
class TypeAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Service)
class ServiceAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("name", )
    search_fields = ("name",)


class BlockInline(TabularInline):
    model = Block
    extra = 0
    fields = ("title", "text", "image", "order")
    # readonly_fields = ("edit_block_link",)

    # def edit_block_link(self, obj):
    #     if obj.pk:
    #         url = reverse("admin:projects_block_change", args=[obj.pk])
    #         return format_html(f'<a href="{url}" class="button">Изменить</a>')
    #     return "Слайдер еще не сохранен"

    # edit_block_link.short_description = "Изменить"


@admin.register(Project)
class ProjectAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("name", "type", "is_visible")
    search_fields = ("name", )
    list_filter = ("type", "industries", "services")
    list_filter_submit = True
    filter_horizontal = ("industries", "services", "other_projects")
    inlines = [BlockInline]
    exclude = ['select_on_main', 'banner_image', 'laptop_image', 
               'background_image', ]
