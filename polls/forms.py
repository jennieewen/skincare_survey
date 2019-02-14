from django import forms
from polls.models import User
from django.forms import ModelForm

#class NameForm(forms.Form):
    #form = forms.CharField(label='Your email', max_length=100)

class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ['First_Name', 'Email']
# TO ALTER FORM ON WEBSITE, JUST ALTER MODEL AND FORM FIELDS
# MAKE SURE FIELD IN FORM CLASS CLASS MATCHES FIELD IN MODEL CLASS
