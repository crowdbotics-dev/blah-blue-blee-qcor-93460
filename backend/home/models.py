from django.conf import settings
from django.db import models
class Test(models.Model):
    'Generated Model'
    test = models.BigIntegerField()
    rr = models.BigIntegerField(null=True,blank=True,)
    ddbbb = models.TimeField(auto_now=True,null=True,blank=True,)
