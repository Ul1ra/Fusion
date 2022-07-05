from django.contrib.auth import get_user_model
from rest_framework import serializers

from commentsonreviews.models import Comment
#from users.serializers import UserSerializer

#User = get_user_model()


class CommentSerializer(serializers.ModelSerializer):
    #user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
        depth = 1