from django.contrib.auth import get_user_model


from django.conf import settings
from django.db import models

from restaurantreviews.models import Restaurantreview

User = get_user_model()


class Comment(models.Model):
    commented_by = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name='comment')
    commented_restaurantreview = models.ForeignKey(to=Restaurantreview, on_delete=models.CASCADE, null=True, related_name='comment')
    text_content = models.CharField(max_length=400)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Comment from {self.commented_restaurantreview.reviewed_by.username} commented by  {self.commented_by.username}: {self.text_content}'
