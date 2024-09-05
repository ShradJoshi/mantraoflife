from django.contrib import admin
from django import forms

from .models import Post, Comment

class PostAdminForm(forms.ModelForm):
    class Meta:
        fields = ('__all__')

        model = Post
        widgets = {
            'text': forms.Textarea(attrs={'cols': 100, 'rows': 50}),
        }

class PostAdmin(admin.ModelAdmin):
    form = PostAdminForm


class CommentAdminForm(forms.ModelForm):
    class Meta:
        fields = ('__all__')

        model = Comment

class CommentAdmin(admin.ModelAdmin):
    form = CommentAdminForm

admin.site.register(Comment, CommentAdmin)
admin.site.register(Post, PostAdmin)
# Register your models here.
