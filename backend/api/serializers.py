from rest_framework import serializers
from .models import NoteBook


class NoteBookSerializer(serializers.ModelSerializer):
	class Meta:
		model = NoteBook
		fields = ('title','desc', 'price');
		