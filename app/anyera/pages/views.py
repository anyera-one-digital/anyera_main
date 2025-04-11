from django.shortcuts import render
from django.views.generic import TemplateView
from projects.models import Project
from articles.models import Article
from pages.models import SEO

def main_page(request):
    projects = Project.objects.filter(is_visible=True)
    articles = Article.objects.all()
    seo = SEO.objects.filter(type=SEO.SEOType.MAIN).first()
    return render(request, 'index.html', {
        'projects': projects,
        'articles': articles,
        'seo': seo
    })

class SEOPageView(TemplateView):
    seo_type = None

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['seo'] = SEO.objects.filter(type=self.seo_type).first()
        return context