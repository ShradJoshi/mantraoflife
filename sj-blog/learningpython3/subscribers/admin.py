from django.contrib import admin
from django import forms

from .models import Subscriber

class SubscriberAdminForm(forms.ModelForm):
    class Meta:
        fields = ('__all__')

        model = Subscriber

class SubscriberAdmin(admin.ModelAdmin):
    form = SubscriberAdminForm

admin.site.register(Subscriber, SubscriberAdmin)
# Register your models here.
