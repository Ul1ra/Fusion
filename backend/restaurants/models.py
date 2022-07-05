from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


def restaurants_directory_path(instance, filename):
    return f'restaurants/{instance.name}/{filename}'


class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    CATEGORY_CHOICES = [
        (1, 'Mediterranean Cuisine'),
        (2, 'French Cuisine'),
        (3, 'Japanese Cuisine'),
        (4, 'Italian Cuisine'),
        (5, 'Greek Cuisine'),
        (6, 'Spanish Cuisine'),
    ]
    restaurant_image = models.ImageField(upload_to=restaurants_directory_path, blank=True, null=True)
    category = models.IntegerField(choices=CATEGORY_CHOICES)
    country = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zip = models.CharField(max_length=30, blank=True)
    website = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=30)
    e_mail = models.EmailField(blank=True)
    opening_hours = models.CharField(max_length=300)
    PRICE_LEVEL = [
        (1, ''),
        (2, '$'),
        (3, '$$'),
        (4, '$$$'),
    ]
    price_level = models.IntegerField(choices=PRICE_LEVEL, default=1)
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='restaurants_owned', null=True)



    def __str__(self):
        return f'{self.name}'
