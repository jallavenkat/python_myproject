from django.conf.urls import url
from . import views

urlpatterns=[
    url(r'hello/', views.hello, name='hello'),
    url(r'^article/(\d+)/',  views.viewArticle, name = 'article'),
    url(r'^articles/(\d+)/(\d{4})', views.viewArticles, name='articles')

]