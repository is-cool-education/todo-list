from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=255, null=False)
    description = models.TextField(blank=True)
    is_complete = models.BooleanField(default=False)
    user = models.ForeignKey('users.User', on_delete=models.PROTECT)


    def __str__(self):
        return self.title
