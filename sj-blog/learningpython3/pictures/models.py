from django.db import models



# Create your models here.

class Picture(models.Model):
    file = models.FileField(null=True)

    class meta:
        ordering = ['file']
