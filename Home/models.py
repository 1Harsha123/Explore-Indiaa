from django.db import models


# Create your models here.
class book(models.Model):
    name = models.CharField(max_length=50)
    place_number = models.IntegerField()
    # arrival_date = models.DateField()  # Change this line
    # leaving_date = models.DateField()
    

    
  




def __str__(self):
     return self.name
       


    