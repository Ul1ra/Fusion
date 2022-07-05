from .views import ListUserAPIView, UserValidationProfile, RetrieveUserByIdAPIView, DeleteUserAccount, GetUserMeAPIView, \
    SearchUserByStringAPIView, RegisterUser, Me, AllInfoFromUserAPIView
from django.urls import path


urlpatterns = [
    path('users/<int:pk>/', DeleteUserAccount.as_view()),
    path('all/', AllInfoFromUserAPIView.as_view()),
    path('users/', ListUserAPIView.as_view()),
    path('registration/validation/', UserValidationProfile.as_view()),
    path('<int:pk>/', RetrieveUserByIdAPIView.as_view()),
    path('me/', Me.as_view()),
    path('', SearchUserByStringAPIView.as_view()),
    # path('me/', RetrieveCurrentUserAPIView.as_view()),
    path('registration/', RegisterUser.as_view()),

]
