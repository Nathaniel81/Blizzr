# Generated by Django 5.0.1 on 2024-01-21 13:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0005_remove_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='reviews', to='store.product'),
        ),
    ]
