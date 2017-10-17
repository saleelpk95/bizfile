# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Entity(models.Model):
    uen = models.TextField(max_length=1000)
    issuance_agency_id = models.TextField(max_length=1000)
    uen_status = models.TextField(max_length=1000)
    entity_name = models.TextField(max_length=1000)
    entity_type = models.TextField(max_length=1000)
    uen_issue_date = models.DateField()
    reg_street_name = models.TextField(max_length=1000)
    reg_postal_code = models.TextField(max_length=1000)
    
    def __str__(self):
        return str(self.entity_name)
