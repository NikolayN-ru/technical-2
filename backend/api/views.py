from django.shortcuts import render
from rest_framework import generics
from .models import NoteBook
from .serializers import NoteBookSerializer


class NoteBookAPIView(generics.ListAPIView):
	queryset = NoteBook.objects.all()
	serializer_class = NoteBookSerializer
	
class DetailNoteBookAPIView(generics.RetrieveAPIView):
	queryset = NoteBook.objects.all()
	serializer_class = NoteBookSerializer