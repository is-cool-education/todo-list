from rest_framework import serializers
from tasks import models


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Task
        fields = ['id']
