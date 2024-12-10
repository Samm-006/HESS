from django.shortcuts import render
from rest_framework import viewsets
from .models import Student, Module, Section, SectionTag, Assignment, StudentAssignment, Feedback
from .serializers import (
    StudentSerializer, ModuleSerializer, SectionSerializer, SectionTagSerializer, AssignmentSerializer, StudentAssignmentSerializer, FeedbackSerializer
)

# Create your views here.
