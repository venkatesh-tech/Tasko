# Tasko - Modern way of tracking tasks

### Tasko-Details
#### Start date: 14/12/2022
#### Submission date: 6/01/2022
#### Work: Still in progress

Note: There are many bugs and rendering issues in the project.

### Aim:
This project aims to build a JIRA/Trello-like page to track a list of tasks, allowing users to create tasks, move them between columns, and change 
their status. The four stages of a task are "TODO," "In-Progress," "Testing," and "Done." Users can move tasks between columns by dragging 
and dropping them between the status columns.

### Problem Statement
How can we enable users to move tasks between different status columns (e.g. "TODO", "IN-PROGRESS", "TESTING", "DONE") using drag 
and drop?
It can be difficult for users to track and manage tasks effectively without a centralized and organized system.
Audience:
The target audience for this project would be anyone who needs a tool to track tasks and manage their workflow. This could include project 
managers, team leads, developers, or anyone else who needs to keep track of tasks and their status in an organized manner.

### Introduction:
The task tracking page is a web application that allows users to create, organize, and track tasks in different stages of completion. The page is 
similar to popular project management tools such as JIRA and Trello, with features like drag and drop and columns to represent different stages 
of a task.

### Solution:
The task tracking page offers a convenient and efficient solution to these problems by providing users with a visual and interactive way to track 
tasks. The page allows users to create new tasks, assign them to different stages of completion, and move them between stages using drag and 
drop.
To build a task-tracking page like JIRA or Trello, you can use the tech stack mentioned in the requirements.
Set up a React project using Create React App (CRA).
Install and configure Redux Toolkit for managing application state.
Implement the task tracking page as a React component, with four columns for the different stages of a task (TODO, In-Progress, Testing, 
and Done). Each column should contain a list of tasks.
Use React DND (Drag and Drop) to enable users to move tasks between columns by dragging and dropping them.
Implement the logic for changing the status of a task when it is moved between columns.
Use Craco to configure Webpack for the project.
Test the page to ensure that it is functioning as expected.
task.mp4
### Real-Life Example:
One example of a real-life scenario where task tracking might be useful is in a software development project. Let's say that a team of developers 
is working on building a new application. They have a list of features that they need to implement, and they want to track the progress of each 
feature as they work on it.
The team could use a task tracking page like Tasko to keep track of their tasks. They could create a task for each feature that needs to be 
implemented. The task could start in the "TODO" column, and as the team member works on it, they could move it to the "In-Progress" column. 
Once the feature is complete and ready for testing, the task could be moved to the "Testing" column. Finally, once the feature has been tested 
and any issues have been resolved, the task could be moved to the "Done" column.
This would allow the team to see at a glance which tasks have been completed and which ones are still in progress. It would also allow them to 
see who is working on which tasks, and to assign new tasks as needed. Overall, a task-tracking page like this could help the team stay organized 
and on track as they work on their project.
### Future scope:
Implementing user authentication and access control, allowing different users to have different levels of access and permissions within the 
task tracking page.
Adding a user profile allows slowing users to view and update r information and preferences.
Adding the ability for users to add comments or attachments to tasks.

### References:
https://notion-templates.notion.site/7754cf02251f4bc9ab2f9cc897765336?v=3513893787af408e8838df43d0e70b77
https://trello.com/tour
https://www.atlassian.com/software/jir
