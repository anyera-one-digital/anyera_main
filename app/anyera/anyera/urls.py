from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.views.generic import TemplateView
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from anyera.sitemaps import sitemaps
# from api.views import get_csrf_token

urlpatterns = [
    path('', include("pages.urls")), 
    path('projects/', include("projects.urls")), 
    path('articles/', include("articles.urls")),
    path("career/", include("vacancies.urls")),
    path('admin/', admin.site.urls),
    path("api/v1/", include("api.urls")),
    path(
        'api/swagger/download/',
        SpectacularAPIView.as_view(), name='schema'
    ),
    path(
        'api/swagger/',
        SpectacularSwaggerView.as_view(url_name='schema')
    ),
    # path('api/csrf/', get_csrf_token),
    path("sitemap.xml", sitemap, {"sitemaps": sitemaps}, name="sitemap"),
    path("robots.txt", TemplateView.as_view(template_name="robots.txt", content_type="text/plain")),

]