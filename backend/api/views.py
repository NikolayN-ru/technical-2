from django.shortcuts import render
from rest_framework import generics, permissions
from .models import NoteBook
from .serializers import NoteBookSerializer


class NoteBookAPIView(generics.ListCreateAPIView):
	queryset = NoteBook.objects.all()
	serializer_class = NoteBookSerializer
	
class DetailNoteBookAPIView(generics.RetrieveUpdateDestroyAPIView):
	permission_classes = (permissions.IsAdminUser,)
	queryset = NoteBook.objects.all()
	serializer_class = NoteBookSerializer