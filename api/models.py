from django.db import models

# Create your models here.
# All these models are based on the database schema

# Student Table
class Student(models.Model):
    student_id = models.AutoField(primary_key = True)
    first_name = models.CharField(max_length = 100)
    last_name = models.CharField(max_length = 100)
    email = models.EmailField(unique = True)
    password = models.CharField(max_length = 128)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
 
# Module Table    
class Module(models.Model):
    module_id = models.AutoField(primary_key = True)
    title = models.CharField(max_length = 100)
    
    def __str__(self):
        return self.title
    
# Section Table    
class Section(models.Model):
    section_id = models.AutoField(primary_key = True)
    overall_marks = models.FloatField()
    custom_name = models.CharField(max_length = 100)
    
    def __str__(self):
        return self.custom_name
    
# Section Tag Table    
class SectionTag(models.Model):
    tag_id = models.AutoField(primary_key = True)
    section_id = models.ForeignKey(Section, on_delete = models.CASCADE)
    tag_name = models.CharField(max_length = 100)
    
    def __str__(self):
        return self.tag_name

# Assignment Table    
class Assignment(models.Model):
    assignment_id = models.AutoField(primary_key = True)
    module_id = models.ForeignKey(Module, on_delete = models.CASCADE)
    text = models.TextField()
    total_marks = models.IntegerField()
    
    def __str__(self):
        return self.text

# Student Assignment Table
class StudentAssignment(models.Model):
    student_id = models.ForeignKey(Student, on_delete = models.CASCADE)
    assignment_id = models.ForeignKey(Student, on_delete = models.CASCADE)
    score = models.FloatField()

# Feedback Table    
class Feedback(models.Model):
    assignment_id = models.ForeignKey(Assignment, on_delete = models.CASCADE)
    student_id = models.ForeignKey(Student, on_delete = models.CASCADE)
    comment = models.CharField(max_length = 255)
    category = models.CharField(max_length = 50, choices = [
        ('Strength', 'Strength'),
        ('Weakness', 'Weakness'),
        ('Custom', 'Custom'),
    ])