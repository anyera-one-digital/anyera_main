from rest_framework import mixins, viewsets
from django.shortcuts import render
from django.core.paginator import Paginator
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
    
    paginator = Paginator(articles, 8)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request, 'articles.html', {
        'articles': page_obj.object_list,
        'themes': themes,
        'page_obj': page_obj,
        'total_pages': paginator.num_pages
    })

def article_detail(request, code):
    article = Article.objects.get(code=code)
    blocks = ContentBlock.objects.filter(article=article)
    other_articles = Article.objects.exclude(code=code)
    return render(request, 'article.html', {
        'article': article,
        'blocks' : blocks,
        "other_articles" : other_articles
    })


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
