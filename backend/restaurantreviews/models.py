from django.contrib.auth import get_user_model
from django.db import models
from django.conf import settings

from restaurants.models import Restaurant

User = get_user_model()


class Restaurantreview(models.Model):
    text_content = models.CharField(max_length=300)
    RATING_CHOICES = [
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5'),
    ]
    rating = models.IntegerField(choices=RATING_CHOICES)
    date_created = models.DateField(auto_now_add=True)
    date_modified = models.DateField(auto_now=True)
    reviewed_by = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                                    related_name='restaurantreviewed', null=True)
    reviewed_restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE,
                                            related_name='reviewed_restaurants')
    like = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='review_like', blank=True)

    def __str__(self):
        return f'{self.reviewed_restaurant.name}: by {self.reviewed_by.username}, {self.rating}/5: "{self.text_content}"'
