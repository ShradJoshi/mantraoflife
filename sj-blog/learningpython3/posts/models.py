from django.db import models
from tinymce.models import HTMLField


# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = HTMLField()
    file = models.FileField(null=True)


    class meta:
        ordering = ['title']

class Comment(models.Model):
    author = models.CharField(max_length=200)
    text = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    approved_comment = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def approve(self):
        self.approved_comment = True
        self.save()


    class meta:
        ordering = ['created_at']