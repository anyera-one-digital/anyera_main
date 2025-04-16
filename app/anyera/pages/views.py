from django.shortcuts import render
from django.views.generic import TemplateView
from projects.models import Project, Type
from articles.models import Article
from pages.models import SEO

def main_page(request):
    types_with_projects = []
    types = Type.objects.filter(select_on_main=True)

    for t in types:
        projects = Project.objects.filter(
            select_on_main=True,
            type=t
        )
        if projects:
            types_with_projects.append({
                "type": t,
                "projects": projects
            })
    
    articles = Article.objects.all()
    seo = SEO.objects.filter(type=SEO.SEOType.MAIN).first()
    return render(request, 'index.html', {
        'types_with_projects': types_with_projects,
        'articles': articles,
        'seo': seo
    })

class SEOPageView(TemplateView):
    seo_type = None

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['seo'] = SEO.objects.filter(type=self.seo_type).first()
        return context