from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
# from api.views import get_csrf_token
from projects.views import project_list, project_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('projects/', project_list, name='project_list'),
    path('projects/<int:id>/', project_detail, name='project_detail'),
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
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)