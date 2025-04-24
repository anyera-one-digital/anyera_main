from django.contrib import admin
from unfold.admin import ModelAdmin, TabularInline
from pages.models import (
    Accordion,
    AccordionItem,
    ArticleSEO,
    PageSEO,
    PageContent,
    ProjectSEO,
    Price
)


class AccordionItemInline(TabularInline):
    model = AccordionItem
    extra = 0
    classes = ['collapse']
    fields = ("title", "content", "order")
    hide_title = True


@admin.register(Accordion)
class AccordionAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("type", "title")
    inlines = [AccordionItemInline,]


@admin.register(PageSEO)
class PageSEOAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("type",)


@admin.register(PageContent)
class PageSEOAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("type",)


class ArticleSEOInline(TabularInline):
    model = ArticleSEO
    classes = ['collapse']
    extra = 0


class ProjectSEOInline(TabularInline):
    model = ProjectSEO
    classes = ['collapse']
    extra = 0


@admin.register(Price)
class PriceAdmin(ModelAdmin):
    compressed_fields = True
    list_display = ("name", "price", "order")
    list_editable = ("order",)
    readonly_fields = (
        'price_discount_4',
        'price_discount_6',
        'price_discount_7',
        'price_discount_12',
    )