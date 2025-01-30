from pathlib import Path
from datetime import timedelta
import os
from django.urls import reverse_lazy
from django.templatetags.static import static


env = os.environ

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = "django-insecure-s8x5@g8%ad_m&kd!+=3wbh!5$ndd@4b+_a65&d@%z5hw3^x&3*"

CORS_ALLOW_ALL_ORIGINS = True

DEBUG = os.environ.get("DEBUG", "False") == "True"

ALLOWED_HOSTS = ["*"]

INSTALLED_APPS = [
    'unfold',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt',
    'django_filters',
    'drf_spectacular',
    'ckeditor',
    'articles',
    'projects',
    'applications',
    'vacancies',
    'pages'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.locale.LocaleMiddleware'
]

ROOT_URLCONF = 'anyera.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'anyera.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': env.get("POSTGRES_DB"),
        'USER': env.get("POSTGRES_USER"),
        'PASSWORD': env.get("POSTGRES_PASSWORD"),
        'HOST': 'db',
        'PORT': '5432',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
    ],
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(hours=168),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),
}

SPECTACULAR_SETTINGS = {
    'TITLE': 'Anyera',
    'DESCRIPTION': 'Your project description',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
    'SCHEMA_PATH_PREFIX': '/api/v[0-9]',
}

CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'full',
        'height': 300,
        'width': '100%',
    },
}


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / 'static',
]
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

MEDIA_URL = "media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")


# Email
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_HOST = env.get("EMAIL_HOST")

EMAIL_PORT = env.get("EMAIL_PORT")

EMAIL_HOST_USER = env.get("EMAIL_HOST_USER")

EMAIL_HOST_PASSWORD = env.get("EMAIL_HOST_PASSWORD")

EMAIL_USE_SSL = env.get("EMAIL_USE_SSL")

DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
SERVER_EMAIL = EMAIL_HOST_USER
EMAIL_ADMIN = EMAIL_HOST_USER


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
CSRF_TRUSTED_ORIGINS = ["http://127.0.0.1:8083", "http://92.53.127.219", "https://anyera.one", "http://anyera.one"]
CORS_ALLOW_CREDENTIALS = True

UNFOLD = {
    "SITE_TITLE": "ANYERA",
    "SITE_LOGO": {
        "light": lambda request: static("img/Logo.svg"),
        "dark": lambda request: static("img/logo-dark-admin.svg"),
    },
    "SITE_FAVICONS": [
        {
            "rel": "icon",
            "sizes": "32x32",
            "type": "image/ico",
            "href": lambda request: static("img/favicon.ico"),
        },
    ],
    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": True,
        "navigation": [
            {
                "title": "Основное",
                "separator": True,
                "collapsible": True,
                "items": [
                    {
                        "title": "Dashboard",
                        "icon": "dashboard",
                        "link": reverse_lazy("admin:index"),
                        "badge": "3",
                    },
                    {
                        "title": "SEO",
                        "icon": "search",
                        "link": reverse_lazy("admin:pages_seo_changelist"),
                    },
                ],
            },
            {
                "title": "Проекты",
                "separator": True,
                "collapsible": True,
                "items": [
                    {
                        "title": "Проекты",
                        "icon": "devices",
                        "link": reverse_lazy("admin:projects_project_changelist"),
                    },
                    {
                        "title": "Отрасли",
                        "icon": "drag_indicator",
                        "link": reverse_lazy("admin:projects_industry_changelist"),
                    },
                    {
                        "title": "Типы",
                        "icon": "drag_indicator",
                        "link": reverse_lazy("admin:projects_type_changelist"),
                    },
                    {
                        "title": "Услуги",
                        "icon": "drag_indicator",
                        "link": reverse_lazy("admin:projects_service_changelist"),
                    },

                ],
            },
            {
                "title": "Статьи",
                "separator": True,
                "collapsible": True,
                "items": [
                    {
                        "title": "Статьи",
                        "icon": "article",
                        "link": reverse_lazy("admin:articles_article_changelist"),
                    },
                    {
                        "title": "Темы",
                        "icon": "drag_indicator",
                        "link": reverse_lazy("admin:articles_theme_changelist"),
                    },
                ],
            },
        ],
    },
}