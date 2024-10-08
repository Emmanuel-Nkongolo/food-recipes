# Generated by Django 5.1 on 2024-08-22 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='image'),
        ),
        migrations.AlterField(
            model_name='blog',
            name='postlabel',
            field=models.CharField(blank=True, choices=[('POPULAR', 'Popular')], max_length=100, null=True),
        ),
    ]
