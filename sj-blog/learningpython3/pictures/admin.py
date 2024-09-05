from django.contrib import admin
from django import forms

from .models import Picture

class PictureAdminForm(forms.ModelForm):
    class Meta:
        fields = ('__all__')

        model = Picture


class PictureAdmin(admin.ModelAdmin):
    form = PictureAdminForm

admin.site.register(Picture, PictureAdmin)
# Register your models here.