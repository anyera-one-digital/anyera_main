from django.urls import path
from django.views.generic import TemplateView
from pages.views import main_page

urlpatterns = [
    path('', main_page, name='main_page'),
    path('contacts/',TemplateView.as_view(
        template_name='contacts.html'
    ), name='contacts'),
    path('policy/',TemplateView.as_view(
        template_name='policy.html'
    ), name='policy'),
    path('certificates/',TemplateView.as_view(
        template_name='certificates.html'
    ), name='certificates'),
    path('team/',TemplateView.as_view(
        template_name='team.html'
    ), name='team'),
    path('price/',TemplateView.as_view(
        template_name='price.html'
    ), name='price'),
    path('briefing/',TemplateView.as_view(
        template_name='briefing.html'
    ), name='briefing'),
    path('competencies/',TemplateView.as_view(
        template_name='competencies.html'
    ), name='competencies'),
    path('services/',TemplateView.as_view(
        template_name='services.html'
    ), name='services'),
]