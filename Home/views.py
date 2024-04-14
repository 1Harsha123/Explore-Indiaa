from django.shortcuts import render, HttpResponse
from .models import book as BookModel  # Alias the book model as BookModel

# Create your views here.
def mini_project(request):
    return render(request, 'html/first.html')

def book(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        place_number = request.POST.get('place_number')
        # arrival_date = request.POST.get('arrival_date')
        # leaving_date = request.POST.get('leaving_date')
        


        # Create and save the BookModel instance
        BookModel.objects.create(name=name, place_number=place_number)
        return HttpResponse('Data saved successfully!')
    return render(request, 'html/first.html')
