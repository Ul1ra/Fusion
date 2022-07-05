"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt import views as jwt_views

schema_view = get_schema_view(
    openapi.Info(
        title="Motion API official Documentaion",
        default_version='v1',
        description="Description of your Django App",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="learn@propulsionacademy.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,  # Set to False restrict access to protected endpoints
    permission_classes=(permissions.AllowAny,),  # Permissions for docs access
)

BASE_URL = 'backend/'

urlpatterns = [
    # Admin
    # path( BASE_URL +'api/admin/', admin.site.urls),

    path(BASE_URL + 'admin/', admin.site.urls),
    path(BASE_URL + 'api/', include('restaurants.urls')),
    path(BASE_URL + 'api/reviews/', include('restaurantreviews.urls')),
    # comments
    path(BASE_URL + 'api/review/comment/', include('commentsonreviews.urls')),

    # Users
    path(BASE_URL + 'api/users/', include('users.urls')),
    # Registration
    path(BASE_URL + 'api/auth/', include('users.urls')),
    # Users
    path(BASE_URL + 'api/users/', include('users.urls')),
    # login
    path(BASE_URL + 'api/auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path(BASE_URL + 'api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path(BASE_URL + 'api/auth/token/verify', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
    path(BASE_URL + 'api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),

]
