from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
from articles.models import Article
from projects.models import Project

class StaticViewSitemap(Sitemap):
    priority = 1
    changefreq = "monthly"

    def items(self):
        return [
            'main_page',
            'contacts',
            'policy',
            'certificates',
            'team',
            'price',
            'briefing',
            'services',
            'project_list',
            'article_list',
            'vacancy_list',
        ]

    def location(self, item):
        return reverse(item)


class ArticleSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.6

    def items(self):
        return Article.objects.all().order_by('-created_at')

    def location(self, obj):
        return f"/articles/{obj.code}/"


class ProjectSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.6

    def items(self):
        return Project.objects.filter(is_visible=True)

    def location(self, obj):
        return f"/projects/{obj.id}/"


sitemaps = {
    "static": StaticViewSitemap,
    "articles": ArticleSitemap,
    "projects": ProjectSitemap,
}
