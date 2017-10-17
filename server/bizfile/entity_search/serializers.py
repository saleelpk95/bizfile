from rest_framework import serializers
from entity_search.models import *

class EntitySerializer(serializers.ModelSerializer):

	class Meta:

		model = Entity
		fields = ('uen','issuance_agency_id','uen_status','entity_name','entity_type','uen_issue_date','reg_street_name','reg_postal_code')