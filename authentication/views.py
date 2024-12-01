from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.conf import settings

#INSEAD of return a plain http respone  
#def say_hello(request):
#return HttpResponse('Hello World')

#def say_hello(request):
#   return render(request, 'login.html')

def User_login(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, email=email, password=password) 
        if user is not None:
            login(request, user)
            if user.role == 'student':
                return redirect('student_dashboard')
            elif user.role == 'module_orgainzer':
                return redirect('module_orgainzer_dashboard')
            elif user.role == 'marker':
                return redirect('marker_dashboard')
            else:
                return render(request, 'authentication/login.html', {'error': 'Invalid username or password'})
    return render(request,'authentication/login.html')
        
            