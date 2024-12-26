from rest_framework import viewsets
from tasks import models, serializers


class TaskViewSet(viewsets.ModelViewSet):
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializer

    def get_queryset(self):
        return super().get_queryset().filter(user=self.request.user)
