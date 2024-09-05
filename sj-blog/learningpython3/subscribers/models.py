from django.db import models
from tinymce.models import HTMLField


# Create your models here.

class Subscriber(models.Model):
    email = models.CharField(max_length=100, unique=True,error_messages={'unique':"This email has already been registered."})


    class meta:
        ordering = ['email']
