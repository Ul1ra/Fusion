from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from rest_framework import permissions, filters
from rest_framework.generics import get_object_or_404, GenericAPIView, RetrieveAPIView, ListAPIView, CreateAPIView, \
    RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UserSerializer, UserRegistrationSerializer, UserSerializerAll, UserSerializerMedia

User = get_user_model()


# list all users 1
class ListUserAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []


# list all users with all fields
class AllInfoFromUserAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializerMedia
    permission_classes = []
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'email', 'location', 'phone', 'things_i_love', 'first_name',]

# get user by id 2
class RetrieveUserByIdAPIView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializerAll
    permission_classes = []
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'email', 'location', 'phone', 'things_i_love', 'first_name']

# search user by string
class SearchUserByStringAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'email', 'location', 'phone', 'things_i_love', 'first_name']


# delete user account 4
class DeleteUserAccount(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        user = self.request.user
        user.delete()

        return Response({"result": "user delete"})


# Get logged in user profile 5
class GetUserMeAPIView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        instance = self.request.user
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.request.user
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# user validation 6
class UserValidationProfile(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = []
    lookup_field = "email"

    def get_object(self):
        obj = get_object_or_404(self.get_queryset().filter(email=self.request.data['email']))
        return obj

    def patch(self, request, *args, **kwargs):
        user_to_be_validated = self.get_object()
        serializer = self.get_serializer(user_to_be_validated, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(password=make_password(serializer.validated_data['password']))
        return Response(serializer.data)


class RegisterUser(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class Me(RetrieveUpdateDestroyAPIView):
    permission_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializerMedia
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'email', 'location', 'phone', 'things_i_love', 'first_name']

    http_method_names = ['get', 'patch', 'delete']

    def get_object(self):
        return self.request.user
