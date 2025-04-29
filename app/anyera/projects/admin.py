from django.contrib import admin
from unfold.admin import ModelAdmin, TabularInline
from projects.models import (
    Project,
    Industry,
    Type,
    Service,
    Block
)
from pages.admin import ProjectSEOInline


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
    classes = ['collapse']
    fields = ("title", "text", "image", "order")
    hide_title = True


@admin.register(Project)
class ProjectAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("name", "select_on_main", "is_visible", "order")
    list_editable = ("order", )
    search_fields = ("name", )
    list_filter = ("type", "industries", "services")
    list_filter_submit = True
    filter_horizontal = ("industries", "services", "other_projects")
    inlines = [BlockInline, ProjectSEOInline]
    exclude = ['banner_image', 'laptop_image', 'background_image', ]
