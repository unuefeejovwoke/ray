from django.urls import path
from .views import gallery_view, upload_image_view

urlpatterns = [
    path('', gallery_view, name='gallery'),
    path('upload/', upload_image_view, name='upload_image'),
]
