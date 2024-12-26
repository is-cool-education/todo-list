from rest_framework import routers
from tasks import views

router = routers.SimpleRouter(trailing_slash=False)

router.register('tasks', views.TaskViewSet)

urlpatterns = router.urls
