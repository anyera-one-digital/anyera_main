from rest_framework import serializers
from articles.models import Article
from articles.models import ContentBlock


class ContentBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentBlock
        fields = ['id', 'name', 'text']
    

class ArticleSerializer(serializers.ModelSerializer):
    content_blocks = serializers.SerializerMethodField()
    class Meta:
        model = Article
        fields = '__all__'  
    def get_content_blocks(self, obj):
        blocks = ContentBlock.objects.filter(
            article=obj
        )
        return ContentBlockSerializer(blocks, many=True).data