from django.http import JsonResponse
from django.views import View
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer, RestaurantSerializerMedia
import statistics
from django.db.models import Avg


class ListRestaurants(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = Restaurant.objects.all()
    permission_classes = []
    serializer_class = RestaurantSerializerMedia


class CreateRestaurant(CreateAPIView):
    """
    post:
    Create a new restaurant
    """
    queryset = Restaurant.objects.all()
    permission_classes = []
    serializer_class = RestaurantSerializerMedia

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class GetRestaurantCategory(ListAPIView):
    """
    get:
    Returns all the restaurants of the provided category (int)
    """

    def get_queryset(self):
        queryset = Restaurant.objects.all().filter(category=self.kwargs['category_id'])
        return queryset

    permission_classes = []
    serializer_class = RestaurantSerializer


class GetRestaurantsByUser(ListAPIView):  # not working missing link with user :/
    """
    get:
    Returns all the restaurants created by the user of the provided id (int)
    """

    def get_queryset(self):
        queryset = Restaurant.objects.all().filter(owner_id=self.kwargs['user_id'])
        return queryset

    permission_classes = []
    serializer_class = RestaurantSerializerMedia


class GetPatchDeleteRestaurant(RetrieveUpdateDestroyAPIView):
    """
    get:
    Get the details of a restaurant by providing the id of the restaurant.

    patch:
    Update a restaurant by id (only by owner or restaurant admin) .

    delete:
    Delete a restaurant by id (only by owner or restaurant admin).
    """
    lookup_field = 'id'
    queryset = Restaurant.objects.all()
    permission_classes = []
    serializer_class = RestaurantSerializer


class List4BestRatedRestaurant(ListAPIView):
    serializer_class = RestaurantSerializerMedia

    def get_queryset(self):
        rated_restaurants = Restaurant.objects.filter(reviewed_restaurants__rating__gte=1)
        best_rated_restaurants = rated_restaurants.annotate(
            average_rating=Avg('reviewed_restaurants__rating')).order_by('-average_rating')[: 4]
        return best_rated_restaurants


class GetListAllCategories(View):
    def get(self, request, *args, **kwargs):
        categories = Restaurant.CATEGORY_CHOICES
        return JsonResponse(categories, safe=False)
