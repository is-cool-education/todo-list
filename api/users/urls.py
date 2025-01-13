from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView
from .views import UserViewSet

router = routers.SimpleRouter(trailing_slash=False)
router.register(r"", UserViewSet, basename="user")

urlpatterns = [
    path('users/signin', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/', include(router.urls)),
]
