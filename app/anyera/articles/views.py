#from django.shortcuts import render
from rest_framework import generics, mixins, viewsets
from articles.models import Article
from articles.serializers import ArticleSerializer
#from rest_framework.views import APIView
#from rest_framework.response import Response


class ArticleViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
    ):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


#class ArticleApiView(APIView):
#    def get(self, request):
#        return Response({'test':'test'})

