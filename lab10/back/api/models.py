from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=55)
    description = models.TextField()
    city = models.CharField(max_length=55)
    address = models.TextField()

    def __str__(self):
        return f'{self.name}'


class Vacancy(models.Model):
    name = models.CharField(max_length=55)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(to=Company, on_delete=models.CASCADE, related_name='vacancy')

    def __str__(self):
        return f'{self.name}'
