
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.db import models


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return f'user/{instance.id}/{filename}'


class User(AbstractUser):
    # Field used for login
    USERNAME_FIELD = 'email'
    # Additional fields required when using createsuperuser
    REQUIRED_FIELDS = ['username']

    user_image = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    date_joined = models.DateField(auto_now_add=True)
    descriptions = models.CharField(max_length=100, blank=True)
    things_i_love = models.CharField(max_length=200, blank=True, null=True)
    phone = models.CharField(max_length=30, blank=True, null=True)
    location = models.CharField(max_length=100, blank=True)
    email = models.EmailField(unique=True)
    username_validator = UnicodeUsernameValidator()

    username = models.CharField(
        ("username"),
        max_length=150,
        unique=True,
        validators=[username_validator],
        blank=True,
        null=True,
    )

    test_field = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f'User {self.username}'
