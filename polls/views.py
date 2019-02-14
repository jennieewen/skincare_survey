from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse

from .models import Question
# from .forms import NameForm
from .forms import UserForm

def home(request):
    return render(request, 'polls/home.html')

def index(request):
    #latest_question_list = Question.objects.order_by('-pub_date')[:5]
    question_list = Question.objects.all()
    context = {'latest_question_list': question_list}
    return render(request, 'polls/index.html', context)

def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html', {'question': question})


def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })

def finalvotes(request):
    question_list = Question.objects.all()
    return render(request, 'polls/finalvotes.html', {
            'question_list': question_list,
            'error_message': "",
        })

def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))

'''def get_email(request):

   if request.method == 'POST':
       # create a form instance and populate it with data from the request:
       form = NameForm(request.POST)
       # check whether it's valid:
       if form.is_valid():
            form = form.save(commit=False)

           # process the data in form.cleaned_data as required
           # ...
           # redirect to a new URL:
            return HttpResponseRedirect(reverse('polls:thankyou'))

       # if a GET (or any other method) we'll create a blank form
   else:
       form = NameForm()

   return render(request, 'polls/raffle.html', {'form': form})
'''


def user_email(request):
    if request.method == "POST":
        form = UserForm(request.POST)

        if form.is_valid():
            model_instance =form.save(commit=False)
            model_instance.save()
            return HttpResponseRedirect(reverse('polls:thankyou'))
    else:
        form = UserForm()

    return render(request, 'polls/raffle.html', {'form': form})



def thankyou(request):
    # question_list = Question.objects.all(),
    return render(request, 'polls/thankyou.html')
