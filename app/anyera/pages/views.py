from django.shortcuts import render
from projects.models import Project
from articles.models import Article
from pages.models import SEO

def main_page(request):
    projects = Project.objects.filter(select_on_main=True)
    articles = Article.objects.all()
    seo = SEO.objects.filter(type=SEO.SEOType.MAIN).first()
    return render(request, 'index.html', {
        'projects': projects,
        'articles': articles,
        'seo': seo
    })