from django.urls import path

from restaurantreviews.views import CreateRestaurantReview, ListRestaurantsreviews, GetRestaurantReviewByRestaurant, \
    GetRestaurantReviewByUser, GetUpdateDeleteRestaurantReviewByID, ToggleLike, GetRestaurantReviewCommentedByUser, GetRestaurantReviewLikeByUser

urlpatterns = [
    path('', ListRestaurantsreviews.as_view()), #not needed just for test
    path('new/<int:restaurant_id>/', CreateRestaurantReview.as_view()),
    path('restaurant/<int:restaurant_id>/', GetRestaurantReviewByRestaurant.as_view()),
    path('user/<int:user_id>/', GetRestaurantReviewByUser.as_view()),
    path('<int:id>/', GetUpdateDeleteRestaurantReviewByID.as_view()),
    path('like/<int:pk>/', ToggleLike.as_view()),
    path('like/', GetRestaurantReviewLikeByUser.as_view()),

    path('comments/', GetRestaurantReviewCommentedByUser.as_view())
]
