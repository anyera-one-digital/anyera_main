from rest_framework import mixins, viewsets
from django.shortcuts import render
from django.db.models import Count
from articles.models import Article, ContentBlock, Theme
from articles.serializers import ArticleSerializer, ArticleListSerializer
from django_filters.rest_framework import DjangoFilterBackend
from articles.filters import ArticleFilter

def article_list(request):
    articles = Article.objects.all()
    themes = (
        Theme.objects.annotate(article_count=Count('article'))
        .filter(article_count__gt=0)
    )
    return render(request, 'articles.html', {'articles': articles, 'themes': themes})

def article_detail(request, id):
    article = Article.objects.get(id=id)
    blocks = ContentBlock.objects.filter(article=article)
    other_articles = Article.objects.exclude(id=id)
    return render(request, 'article.html', {'article': article, 'blocks' : blocks, "other_articles" : other_articles})


class ArticleViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ArticleFilter

    def get_serializer_class(self):
        if self.action == "retrieve":
            return ArticleSerializer
        return ArticleListSerializer
