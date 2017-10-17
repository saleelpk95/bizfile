from django.conf.urls import url
from entity_search.views import *

urlpatterns = [
		url(r'^search/$', SearchView.as_view()),
]