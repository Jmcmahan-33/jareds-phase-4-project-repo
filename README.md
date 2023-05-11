# HealthTrack


## Description
HealthTrack is a web application designed to simplify the process of scheduling medical appointments and make it easier for users to manage their healthcare needs. Users can log in or sign up to request an appointment with a doctor from the shared list of doctor recommendations. Once requested, the user can update the appointment date or cancel the appointment. Each user can only see their own scheduled appointments and cannot see appointments scheduled by other users to ensure privacy and security of personal health information. With this feature, users can easily find a doctor that meets their specific needs and book appointments conveniently.


## Installation/Project Startup
This application uses Ruby on Rails for a backend API and React for the front end. In order to use the application, you will need to follow along with this installation steps: 
- Clone the repository and open it in your terminal. 
        git@github.com:Jmcmahan-33/jareds-phase-4-project-repo.git

    To run installs for the backend API:
     1. In the terminal, cd into the project directory and run the following commands:
         - `bundle install`

    2. once the dependencies are installed, run the following commands:
         - `rails db:migrate`
         - `rails db:seed`(optional- if you want to seed the database with sample data)

    3. After the database is set up, run the following command to start the server:
        - `rails s`

    To run installs for the front end:  
     4. In the terminal, make sure you are in the project directory and run the following commands:
      - `npm install --prefix client`

    5. Once frontend install is complete, run the following command to start the frontend server:
        - `npm start --prefix client`

    "please note to kill the backend server, you will need to use the command 'ctrl + c' in the terminal. To kill the frontend server, you will need to use the command 'ctrl + z' in the terminal."


## How to Use
1. Once the server is running, open your browser and navigate to http://localhost:3000/ to view the application.
2. On the home page, you will be asked to either log in or sign up. If you are a new user, click the sign up button and fill out the form. If you are a returning user, click the log in button and enter your username and password.
3. Once logged in, you will see a welcome user page. From here, you can click the "browse doctors" link to view a list of doctors. You can also click the "My Appointments" link to view your scheduled appointments.
4. In the doctors page, you have the ability to create a new doctor recommendation. Click the "Add New Doctor" button and fill out the form. Once submitted, you will see the new doctor recommendation added to the list.
5. In the appointments page, you have the ability to create a new appointment. Click the "Add New Appointment" button and fill out the form. Once submitted, you will see the new appointment added to the list.
6. You can also update or delete an appointment by clicking the "Edit" or "Delete" buttons next to the appointment you wish to update or delete.
7. Once you are finished using the application, you can log out by clicking the "Log Out" button.



## Route Usage
### Login/Signup Custom Routes
- POST /login
- POST /signup
- GET /me
- delete /logout


 ## Tables and Assocations
    ### Users
    - has_many :appointments
    - has_many :doctors, through: :appointments

    ### Doctors
    - has_many :appointments
    - has_many :users, through: :appointments
    
    ### Appointments
    - belongs_to :user
    - belongs_to :doctor

## ToDo's 
- [ ] Add a search bar to the doctors page to search for doctors by name
- [ ] Add a search bar to the appointments page to search for appointments by date
- [ ] Add a feature to allow users to add a doctor to their list of favorites 

