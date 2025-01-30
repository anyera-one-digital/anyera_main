from django.urls import path
from django.views.generic import TemplateView
from pages.views import main_page
from pages.models import SEO

urlpatterns = [
    path('', main_page, name='main_page'),
    path('contacts/',TemplateView.as_view(
        template_name='contacts.html',
        extra_context={
            'seo': SEO.objects.filter(
                type=SEO.SEOType.CONTACTS
            ).first()
        }
    ), name='contacts'),
    path('policy/',TemplateView.as_view(
        template_name='policy.html',
        extra_context={
            'seo': SEO.objects.filter(
            type=SEO.SEOType.POLICY
            ).first()
        }
    ), name='policy'),
    path('certificates/',TemplateView.as_view(
        template_name='certificates.html',
        extra_context={
            'seo': SEO.objects.filter(
            type=SEO.SEOType.CERTIFICATES
            ).first()
        }
    ), name='certificates'),
    path('team/',TemplateView.as_view(
        template_name='team.html',
        extra_context={
            'seo': SEO.objects.filter(
            type=SEO.SEOType.TEAM
            ).first()
        }
    ), name='team'),
    path('price/',TemplateView.as_view(
        template_name='price.html',
        extra_context={
            'seo': SEO.objects.filter(
            type=SEO.SEOType.PRICE
            ).first()
        }
    ), name='price'),
    path('briefing/',TemplateView.as_view(
        template_name='briefing.html',
        extra_context={
            'seo': SEO.objects.filter(
            type=SEO.SEOType.BRIEFING
            ).first()
        }
    ), name='briefing'),
    path('competencies/',TemplateView.as_view(
        template_name='competencies.html',
        extra_context={
            'seo': SEO.objects.filter(
            type=SEO.SEOType.COMPETENCIES
            ).first()
        }
    ), name='competencies'),
    path('services/',TemplateView.as_view(
        template_name='services.html',
        extra_context={
            'seo': SEO.objects.filter(
            type=SEO.SEOType.SERVICES
            ).first()
        }
    ), name='services'),
]