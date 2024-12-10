from rest_framework import serializers
from .models import Student, Module, Section, SectionTag, Assignment, StudentAssignment, Feedback

# Student Model Serializer
class StudentSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Student 
        fields = '__all__'

# Module Model Serializer
class ModuleSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Module 
        fields = '__all__'

# Section Model Serializer
class SectionSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Section 
        fields = '__all__'

# SectionTag Model Serializer
class SectionTagSerializer(serializers.ModelSerializer):
    class Meta: 
        model = SectionTag 
        fields = '__all__'

# Assignment Model Serializer
class AssignmentSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Assignment 
        fields = '__all__'        

# StudentAssignment Model Serializer
class StudentAssignmentSerializer(serializers.ModelSerializer):
    class Meta: 
        model = StudentAssignment 
        fields = '__all__'        

# Feedback Model Serializer
class FeedbackSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Feedback 
        fields = '__all__'        
