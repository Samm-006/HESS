from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework import status 

from rest_framework.authtoken.models import Token 
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from .serializers import UserSerializer
from api.models import Student, Module, Section, SectionTag, Assignment, StudentAssignment, Feedback

# Create your views here.
################# Authentication #################
@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username = request.data['username'])
    if not user.check_password(request.data['password']):
        return Response({"details": "Not found"}, status = status.HTTP_401_UNAUTHORIZED)
    token, created = Token.objects.get_or_create(user = user)
    serializer = UserSerializer(instance = user)
    return Response({"token": token.key, "user": serializer.data})

################# Authentication #################
@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        
        # Fetch username being created to return
        user = User.objects.get(username = request.data['username'])
        
        # Hash password
        user.set_password(request.data['password'])
        user.save()
        
        # Create token
        token = Token.objects.create(user = user)
        return Response({"token": token.key, "user" : serializer.data})
        
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

################# Authentication #################
@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response("Passed for User: {}".format(request.user.email))

################# Get User Endpoint #################
@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many = True)
    return Response(serializer.data)