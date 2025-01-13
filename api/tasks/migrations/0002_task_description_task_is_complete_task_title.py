# Generated by Django 5.1.4 on 2025-01-13 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='task',
            name='is_complete',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='task',
            name='title',
            field=models.CharField(default='Tarefa sem título', max_length=255),
            preserve_default=False,
        ),
    ]