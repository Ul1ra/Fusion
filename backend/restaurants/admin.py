from django.contrib import admin
from restaurants.models import Restaurant


class RestaurantAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'country', 'price_level']


admin.site.register(Restaurant, RestaurantAdmin)
