from rest_framework import mixins, viewsets
from django.shortcuts import render
from django.core.paginator import Paginator
from django.db.models import Count
from django_filters.rest_framework import DjangoFilterBackend
from articles.models import Article, ContentBlock, Theme
from articles.serializers import ArticleSerializer, ArticleListSerializer
from articles.filters import ArticleFilter
from articles.pagination import ArticlePagination
from pages.models import PageType, PageSEO, PageContent, ArticleSEO

def article_list(request):
    articles = Article.objects.all().order_by('-created_at')
    themes = (
        Theme.objects.annotate(article_count=Count('article'))
        .filter(article_count__gt=0)
    )
    
    paginator = Paginator(articles, 8)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    seo = PageSEO.objects.filter(type=PageType.ARTICLE).first()
    content = PageContent.objects.filter(type=PageType.ARTICLE).first()

    return render(request, 'articles.html', {
        'articles': page_obj.object_list,
        'themes': themes,
        'page_obj': page_obj,
        'total_pages': paginator.num_pages,
        'seo': seo,
        'content': content
    })

def article_detail(request, code):
    article = Article.objects.get(code=code)
    blocks = ContentBlock.objects.filter(article=article)
    other_articles = Article.objects.exclude(code=code)
    seo = ArticleSEO.objects.filter(article=article).first()
    return render(request, 'article.html', {
        'article': article,
        'blocks' : blocks,
        'other_articles' : other_articles,
        'seo': seo
    })


class ArticleViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):
    queryset = Article.objects.all().order_by('-created_at')
    serializer_class = ArticleSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ArticleFilter
    pagination_class = ArticlePagination

    def get_serializer_class(self):
        if self.action == "retrieve":
            return ArticleSerializer
        return ArticleListSerializer
