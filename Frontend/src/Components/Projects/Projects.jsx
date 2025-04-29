import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Recipe Project"
          main="A Django-based recipe website with user CRUD operations, and a search function for recipes by ingredients or categories."
          //demoLink="https://amitrzk77.github.io/Cricbuzz/"
          sourceLink="https://github.com/AmitRzk77/Recipe_Project-_Backend-Django-"
          
        
  
        />
        <ProjectCard
          title="Student Management"
          main="A student management system built with Django, featuring user authentication, student enrollment, add student, grade management, and search functionality for student records."
          sourceLink=" https://github.com/AmitRzk77/Django--Student-Management-System"
        />
        <ProjectCard
          title="Employee Management"
          main="An employee management system built with Django, allowing users to add, delete, and manage employee records efficiently."
        />
      </div>
    </div>
  );
};

export default Projects;
