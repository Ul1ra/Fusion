from rest_framework import serializers

from restaurantreviews.models import Restaurantreview


class RestaurantreviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurantreview
        fields = '__all__'
        depth = 1