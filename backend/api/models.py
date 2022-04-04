from django.db import models


class NoteBook(models.Model):
    title = models.CharField(max_length=250)
    desc = models.CharField(max_length=250)
    price = models.IntegerField()

    def __str__(self):
        return self.title
