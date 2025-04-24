from django.shortcuts import render
from django.views.generic import TemplateView
from projects.models import Project, Type
from articles.models import Article
from pages.models import Accordion, PageType, PageSEO, PageContent, Price

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
    seo = PageSEO.objects.filter(type=PageType.MAIN).first()
    content = PageContent.objects.filter(type=PageType.MAIN).first()
    accordion = Accordion.objects.filter(
        type=Accordion.Page.MAIN
    ).prefetch_related('accordion_items').first()
    return render(request, 'index.html', {
        'types_with_projects': types_with_projects,
        'articles': articles,
        'seo': seo,
        'content': content,
        'accordion': accordion
    })

class SEOPageView(TemplateView):
    seo_type = None

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context['seo'] = PageSEO.objects.filter(
            type=self.seo_type
        ).first()

        context['content'] = PageContent.objects.filter(
            type=self.seo_type
        ).first()

        if self.seo_type == PageType.SERVICES:
            context['accordion'] = Accordion.objects.filter(
                type=self.seo_type
            ).prefetch_related('accordion_items').first()
        
        if self.seo_type == PageType.PRICE:
            context['prices'] = Price.objects.all()

        return context