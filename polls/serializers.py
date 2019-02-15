from rest_framework import serializers
from polls.models import Question

class questionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ['question_text', 'pub_date']