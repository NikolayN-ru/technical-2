from importlib.resources import path
from django.urls import path
from .views import NoteBookAPIView, DetailNoteBookAPIView

urlpatterns = [
	path('<int:pk>/', DetailNoteBookAPIView.as_view()),
	path('', NoteBookAPIView.as_view()),
]