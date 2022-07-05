from django.urls import path

from restaurants.views import ListRestaurants, CreateRestaurant, GetRestaurantCategory, GetPatchDeleteRestaurant, \
    GetRestaurantsByUser, List4BestRatedRestaurant, GetListAllCategories



urlpatterns = [
    path('home/', List4BestRatedRestaurant.as_view()),
    path('category/list/', GetListAllCategories.as_view()),

    path('restaurants/', ListRestaurants.as_view()),
    path('restaurants/new/', CreateRestaurant.as_view()),
    path('restaurants/category/<int:category_id>/', GetRestaurantCategory.as_view()),  # not working :/
    path('restaurants/user/<int:user_id>/', GetRestaurantsByUser.as_view()),
    path('restaurants/<int:id>/', GetPatchDeleteRestaurant.as_view()),

]
