# Generated by Django 2.1.5 on 2019-02-13 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='choice',
            name='choice_image',
            field=models.CharField(default='', max_length=200),
        ),
    ]