from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, \
    GenericAPIView
from rest_framework.response import Response

from restaurantreviews.models import Restaurantreview
from restaurantreviews.serializers import RestaurantreviewSerializer
from restaurants.models import Restaurant
from commentsonreviews.models import Comment
from commentsonreviews.serializers import CommentSerializer


class ListRestaurantsreviews(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = Restaurantreview.objects.all()
    permission_classes = []
    serializer_class = RestaurantreviewSerializer


class CreateRestaurantReview(CreateAPIView):
    """
    post:
    Create a new restaurant review
    """
    permission_classes = []
    serializer_class = RestaurantreviewSerializer

    def perform_create(self, serializer):
        serializer.save(reviewed_by=self.request.user)

    # def create(self, request, restaurant_id, **kwargs):
    #    queryset_restaurant = Restaurant.objects.get(id=restaurant_id)
    #    review = Restaurantreview(reviewed_by=request.user, reviewed_restaurant=queryset_restaurant,
    #    text_content=request.data['text_content'], rating=request.data['rating'])
    #    review.save()
    #return Response(status=200)




class GetRestaurantReviewByRestaurant(ListAPIView):
    queryset = Restaurantreview.objects.all()
    serializer_class = RestaurantreviewSerializer
    lookup_field = 'restaurant_id'

    def get_queryset(self, **kwargs):
        queryset = Restaurantreview.objects.filter(
            reviewed_restaurant_id=self.kwargs['restaurant_id'])
        return queryset


class GetRestaurantReviewByUser(ListAPIView):
    queryset = Restaurantreview.objects.all()
    serializer_class = RestaurantreviewSerializer
    lookup_field = 'user_id'

    def get_queryset(self, **kwargs):
        queryset = Restaurantreview.objects.filter(
            reviewed_by_id=self.kwargs['user_id'])
        return queryset


class GetUpdateDeleteRestaurantReviewByID(RetrieveUpdateDestroyAPIView):
    queryset = Restaurantreview.objects.all()
    serializer_class = RestaurantreviewSerializer
    lookup_field = 'id'

    def get_queryset(self, **kwargs):
        queryset = Restaurantreview.objects.filter(
            id=self.kwargs['id'])
        return queryset


class ToggleLike(GenericAPIView):
    """
    patch:
    Toggle like a review by logged in user
    """
    serializer_class = RestaurantreviewSerializer

    def post(self, request, *args, **kwargs):
        liked_review_by_user = request.user.review_like.all()
        review = Restaurantreview.objects.get(id=kwargs.get('pk'))
        if review in liked_review_by_user:
            request.user.review_like.remove(review)
        else:
            request.user.review_like.add(review)
        return Response(status=status.HTTP_200_OK)


class GetRestaurantReviewLikeByUser(ListAPIView):
    queryset = Restaurantreview.objects.all()
    serializer_class = RestaurantreviewSerializer

    def get_queryset(self, **kwargs):
        queryset = Restaurantreview.objects.filter(
            like__id=self.request.user.id)
        return queryset


class GetRestaurantReviewCommentedByUser(ListAPIView):
    queryset = Restaurantreview.objects.all()
    serializer_class = RestaurantreviewSerializer

    def get_queryset(self, **kwargs):
        queryset = Restaurantreview.objects.filter(
            commented_by__id=self.request.user.id)
        return queryset
