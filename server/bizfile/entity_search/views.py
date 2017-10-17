# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework.views import APIView
from rest_framework.exceptions import APIException
from django.http import JsonResponse
from entity_search.models import *
from entity_search.serializers import *

class SearchView(APIView):
	def post(self, request):
		entity_name = None
		try:
			entity_name = request.data['entity_name']
		except:
			raise APIException("entity_name cannot be None")

		entity = Entity.objects.filter(entity_name__contains = entity_name)
		print entity, len(entity)
		return JsonResponse({'data':EntitySerializer(entity,many=True).data})