from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
# from api.views import get_csrf_token
from pages.views import main_page

urlpatterns = [
    path('', include("pages.urls")), 
    path('projects/', include("projects.urls")), 
    path('articles/', include("articles.urls")), 
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
]