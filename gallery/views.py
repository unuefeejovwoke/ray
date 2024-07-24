from django.shortcuts import render, redirect
from .models import Photo
from django.contrib import messages
from .forms import PhotoForm

def gallery_view(request):
    photos = Photo.objects.all()
    return render(request, 'gallery/gallery.html', {'photos': photos})


def upload_image_view(request):
    if request.method == 'POST':
        form = PhotoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Image added successfully!')
            return redirect('gallery')  # Redirect back to the gallery page after upload
    else:
        form = PhotoForm()
    return render(request, 'gallery/upload_image.html', {'form': form})