from django.urls import path
from . import views

app_name = 'polls'
urlpatterns = [
    # ex: http://127.0.0.1:8000
    path('', views.home, name='home'),
    # ex: /polls/
    path('index/', views.index, name='index'),
    # ex: /polls/5/
    path('<int:question_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/final/
    path('final/', views.finalvotes, name='final'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),

    path('raffle/', views.user_email, name='raffle'),

    path('thankyou/', views.thankyou, name='thankyou'),
]
