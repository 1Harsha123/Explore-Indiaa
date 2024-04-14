from django.urls import path
from . import views

urlpatterns = [
    path('', views.mini_project, name='mini_project'),
    path('book/', views.book, name='book')
    
]
