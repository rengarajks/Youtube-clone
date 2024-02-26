# Generated by Django 3.1 on 2024-02-26 03:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=120)),
                ('Video', models.FileField(upload_to='uploaded_videos')),
                ('Views', models.IntegerField()),
                ('Likes', models.IntegerField()),
                ('Dislikes', models.IntegerField()),
                ('Description', models.CharField(default='', max_length=10000)),
                ('Published_at', models.DateTimeField(auto_now_add=True)),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]