from django.urls import path
from . import views

urlpatterns = [
    
    path ('students/', views.get_students, name ='get_students'),
    path ('students/create/', views.create_student, name ='create_student'),
    path ('students/<int:pk>/', views.student_details, name ='student_details'),

    path ('modules/', views.get_modules, name ='get_modules'),
    path ('modules/create/', views.create_module, name ='create_module'),
    path ('modules/<int:pk>/', views.module_details, name ='module_details'),

    path ('sections/', views.get_sections, name ='get_sections'),
    path ('sections/create/', views.create_section, name ='create_section'),
    path ('sections/<int:pk>/', views.section_details, name ='section_details'),

    path ('tags/', views.get_section_tags, name ='get_section_tags'),
    path ('tags/create/', views.create_section_tag, name ='create_section_tags'),
    path ('tags/<int:pk>/', views.section_tag_details, name ='section_details'),

    path ('assignments/', views.get_assignments, name ='get_assignments'),
    path ('assignments/create/', views.create_assignment, name ='create_assignment'),
    path ('assignments/<int:pk>/', views.assignment_details, name ='assignment_details'),


    path ('studentassignments/', views.get_student_assignments, name ='get_student_assignments'),
    path ('studentassignments/create/', views.create_student_assignment, name ='create_student_assignment'),
    path ('studentassignments/<int:pk>/', views.student_assignment_details, name ='student_assignment_details'),

    path ('feedbacks/', views.get_feedbacks, name ='get_feedbacks'),
    path ('feedbacks/create/', views.create_feedback, name ='create_feedback'),
    path ('feedbacks/<int:pk>/', views.feedback_details, name ='feedback_details'),
]