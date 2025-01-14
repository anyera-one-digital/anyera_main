from django.shortcuts import render
from projects.models import Project
from articles.models import Article

def main_page(request):
    projects = Project.objects.filter(is_visible=True)
    articles = Article.objects.all()
    return render(request, 'index.html', {
        'projects': projects,
        'articles': articles
    })
