from django.shortcuts import render
from django.http import HttpResponse
import datetime
import time

def hello(request):
    today = datetime.datetime.now()
    daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return render(request, "hello.html", {"today" : today, "days_of_week" : daysOfWeek})

def viewArticle(request,articleId):
   text = "Displaying article Number : %s"%articleId
   return HttpResponse(text)

def viewArticles(request, month, year):
    text = "Display Month and Year : %s/%s"%(month, year)
    return HttpResponse(text)

# Create your views here.
