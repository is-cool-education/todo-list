from django.db import models


class Task(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.PROTECT)
