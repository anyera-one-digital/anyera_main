from rest_framework import serializers
from articles.models import Article
from articles.models import ContentBlock


class ContentBlockSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContentBlock
        fields = ['order', 'name', 'text']


class ThemeSerializers(serializers.ModelSerializer):

    class Meta:
        model = ContentBlock
        fields = ['name']


class ArticleSerializer(serializers.ModelSerializer):

    content_blocks = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = '__all__'

    def get_content_blocks(self, obj):
        blocks = ContentBlock.objects.filter(
            article=obj
        ).order_by('order')
        return ContentBlockSerializer(blocks, many=True).data


class ArticleListSerializer(serializers.ModelSerializer):

    theme = ThemeSerializers(many=True)

    class Meta:
        model = Article
        fields = ['code', 'title', 'preview', 'preview_img', 'theme']
