# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2017-03-11 02:37
from __future__ import unicode_literals

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_auto_20170106_0913'),
    ]

    operations = [
        migrations.AddField(
            model_name='stepconfig',
            name='script_data',
            field=jsonfield.fields.JSONField(default={}, verbose_name=True),
            preserve_default=False,
        ),
    ]
