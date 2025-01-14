from rest_framework import mixins, viewsets
from django.shortcuts import render
from articles.models import Article, ContentBlock
from articles.serializers import ArticleSerializer, ArticleListSerializer

def article_list(request):
    articles = Article.objects.all()
    return render(request, 'articles.html', {'articles': articles})

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

    def get_serializer_class(self):
        if self.action == "retrieve":
            return ArticleSerializer
        return ArticleListSerializer
