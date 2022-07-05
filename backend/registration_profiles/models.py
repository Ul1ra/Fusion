import random
import os

from django.contrib.auth import get_user_model
from django.core.mail import EmailMessage
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Registration_Profile(models.Model):
    code = models.IntegerField(default=code_generator)
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='profile', primary_key=True)
    # related name example
    # Registration_profile.objects.get(id=1).user
    # User.objects.get(id=1).profile.code

    def __str__(self):
        return f'ID {self.pk}: Profile for {self.user.username}'

    @receiver(post_save, sender=User)
    def create_registration_profile(sender, instance, **kwargs):
        profile, created = Registration_Profile.objects.get_or_create(user=instance)
        if created:
            profile.save()
            sender_email = os.environ.get('EMAIL_HOST_USER')
            email = EmailMessage(
                'Hello',
                profile.code,
                sender_email,
                [instance.email],
                reply_to=[sender_email],
                headers={'Message-ID': 'foo'},
            )
            email.send()
