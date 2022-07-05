from rest_framework import serializers

from restaurants.models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
        depth = 1


class RestaurantSerializerMedia(serializers.ModelSerializer):
    restaurant_image_url = serializers.SerializerMethodField()

    def get_restaurant_image_url(self, obj):
        try:
            domain_main = 'https://luna-team-2.propulsion-learn.ch'
            full_path = domain_main + obj.restaurant_image.url
            return full_path
        except Exception:
            return None


    class Meta:
        model = Restaurant
        fields = '__all__'
        # write_only_fields = ('username',)
        depth = 1

