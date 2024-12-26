from django.contrib import admin
from .models import (
    Project, 
    Industry, 
    Type, 
    Service, 
    DescriptionBlock, 
    Slider, 
    SliderImage
)

@admin.register(Industry)
class IndustryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Type)
class TypeAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


class DescriptionBlockInline(admin.TabularInline):
    model = DescriptionBlock
    extra = 1


class SliderImageInline(admin.TabularInline):
    model = SliderImage
    extra = 1


class SliderInline(admin.TabularInline):
    model = Slider
    extra = 1


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("name", "type", "is_visible")
    search_fields = ("name", )
    filter_horizontal = ("industries", "services")
    inlines = [DescriptionBlockInline, SliderInline]


@admin.register(Slider)
class SliderAdmin(admin.ModelAdmin):
    list_display = ("project", "type")
    list_filter = ("project",)
    search_fields = ("project__name",)
    inlines = [SliderImageInline]
