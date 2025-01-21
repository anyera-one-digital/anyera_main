from django_filters import rest_framework as filters
from articles.models import Article, Theme

class ArticleFilter(filters.FilterSet):
    theme = filters.ModelMultipleChoiceFilter(
        field_name="theme__id",
        queryset=Theme.objects.all(),
        to_field_name="id",
        label="Темы"
    )

    class Meta:
        model = Article
        fields = ['theme']
