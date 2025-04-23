from django.urls import path
from django.views.generic import TemplateView
from pages.views import main_page, SEOPageView
from pages.models import PageType

urlpatterns = [
    path('', main_page, name='main_page'),
    path('contacts/',SEOPageView.as_view(
        template_name='contacts.html',
        seo_type=PageType.CONTACTS
    ), name='contacts'),
    path('policy/',SEOPageView.as_view(
        template_name='policy.html',
        seo_type = PageType.POLICY
    ), name='policy'),
    path('certificates/',SEOPageView.as_view(
        template_name='certificates.html',
        seo_type=PageType.CERTIFICATES
    ), name='certificates'),
    path('team/',SEOPageView.as_view(
        template_name='team.html',
        seo_type=PageType.TEAM
    ), name='team'),
    path('price/',SEOPageView.as_view(
        template_name='price.html',
        seo_type=PageType.PRICE
    ), name='price'),
    path('briefing/',SEOPageView.as_view(
        template_name='briefing.html',
        seo_type=PageType.BRIEFING
    ), name='briefing'),
    path('competencies/',SEOPageView.as_view(
        template_name='competencies.html',
        seo_type=PageType.COMPETENCIES
    ), name='competencies'),
    path('services/',SEOPageView.as_view(
        template_name='services.html',
        seo_type=PageType.SERVICES
    ), name='services'),
]