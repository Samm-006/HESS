from django.shortcuts import render
from django.http import HttpResponse

#INSEAD of return a plain http respone  
#def say_hello(request):
#return HttpResponse('Hello World')

def say_hello(request):
    return render(request, 'hello.html')