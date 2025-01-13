from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'is_complete', 'user')

admin.site.register(Task, TaskAdmin)
