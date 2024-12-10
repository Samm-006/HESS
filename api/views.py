from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Student, Module, Section, SectionTag, Assignment, StudentAssignment, Feedback
from .serializers import (
    StudentSerializer, ModuleSerializer, SectionSerializer, SectionTagSerializer, AssignmentSerializer, StudentAssignmentSerializer, FeedbackSerializer
)
from django.shortcuts import get_object_404

# Create your views here.
################# Student #################
# Get Student Endpoints
@api_view(['GET'])
def get_students(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many = True)
    return Response(serializer.data)

# Add New Student
@api_view(['POST'])
def create_student(request):
    
    # Extract data from request.data
    serializer = StudentSerializer(data = request.data)
    
    # Check if serializer is valid
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
# Student Specific Endpoints
@api_view(['GET'])
def student_details(request, pk):
    
    # Find student
    try:
        student = Student.objects.get(pk = pk)
    except Student.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    
    # Determine HTTP method
    if request.method == 'GET':
        serializer = StudentSerializer(module)
        return Response(serializer.data)
    
    
################# Modules #################
# Get Modules Endpoints
@api_view(['GET'])
def get_modules(request):
    modules = Module.objects.all()
    serializer = ModuleSerializer(modules, many = True)
    return Response(serializer.data)

# Add New Module
@api_view(['POST'])
def create_module(request):
    
    # Extract data from request.data
    serializer = ModuleSerializer(data = request.data)
    
    # Check if serializer is valid
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
# Module Specific Endpoints
@api_view(['GET'])
def module_details(request, pk):
    
    # Find module
    try:
        module = Module.objects.get(pk = pk)
    except Module.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    
    # Determine HTTP method
    if request.method == 'GET':
        serializer = ModuleSerializer(module)
        return Response(serializer.data)
    
    
################# Sections #################
# Get Sections Endpoints
@api_view(['GET'])
def get_sections(request):
    sections = Section.objects.all()
    serializer = SectionSerializer(sections, many = True)
    return Response(serializer.data)

# Add New Section
@api_view(['POST'])
def create_section(request):
    
    # Extract data from request.data
    serializer = SectionSerializer(data = request.data)
    
    # Check if serializer is valid
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
# Section Specific Endpoints
@api_view(['GET'])
def section_details(request, pk):
    
    # Find section
    try:
        section = Section.objects.get(pk = pk)
    except Section.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    
    # Determine HTTP method
    if request.method == 'GET':
        serializer = SectionSerializer(section)
        return Response(serializer.data)
    

################# Assignments #################
# Get Assignments Endpoints
@api_view(['GET'])
def get_assignments(request):
    assignments = Assignment.objects.all()
    serializer = AssignmentSerializer(assignments, many = True)
    return Response(serializer.data)

# Add New Assignment
@api_view(['POST'])
def create_assignment(request):
    
    # Extract data from request.data
    serializer = AssignmentSerializer(data = request.data)
    
    # Check if serializer is valid
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
# Assignment Specific Endpoints
@api_view(['GET'])
def assignment_details(request, pk):
    
    # Find assignment
    try:
        assignment = Assignment.objects.get(pk = pk)
    except Assignment.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    
    # Determine HTTP method
    if request.method == 'GET':
        serializer = AssignmentSerializer(assignment)
        return Response(serializer.data)
    
    
################# StudentAssignment #################
# Get StudentAssignment Endpoints
@api_view(['GET'])
def get_student_assignments(request):
    assignments = StudentAssignment.objects.all()
    serializer = StudentAssignmentSerializer(assignments, many = True)
    return Response(serializer.data)

# Add New Student Assignment
@api_view(['POST'])
def create_student_assignment(request):
    
    # Extract data from request.data
    serializer = StudentAssignmentSerializer(data = request.data)
    
    # Check if serializer is valid
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
# Student Assignment Specific Endpoints
@api_view(['GET'])
def student_assignment_details(request, pk):
    
    # Find student assignment
    try:
        assignment = StudentAssignment.objects.get(pk = pk)
    except StudentAssignment.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    
    # Determine HTTP method
    if request.method == 'GET':
        serializer = StudentAssignmentSerializer(assignment)
        return Response(serializer.data) 
    
################# Feedback #################
# Get Feedback Endpoints
@api_view(['GET'])
def get_feedbacks(request):
    feedbacks = Feedback.objects.all()
    serializer = FeedbackSerializer(feedbacks, many = True)
    return Response(serializer.data)

# Add New Feedback
@api_view(['POST'])
def create_feedback(request):
    
    # Extract data from request.data
    serializer = FeedbackSerializer(data = request.data)
    
    # Check if serializer is valid
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
# Feedback Specific Endpoints
@api_view(['GET'])
def feedback_details(request, pk):
    
    # Find feedback
    try:
        feedback = Feedback.objects.get(pk = pk)
    except Feedback.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    
    # Determine HTTP method
    if request.method == 'GET':
        serializer = FeedbackSerializer(feedback)
        return Response(serializer.data)   