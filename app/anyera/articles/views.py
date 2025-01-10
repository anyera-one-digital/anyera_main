from rest_framework import mixins, viewsets
from articles.models import Article
from articles.serializers import ArticleSerializer, ArticleListSerializer


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
