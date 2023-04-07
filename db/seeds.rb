doc1= Doctor.create(name: "Doctor Octavis", speciality: "brain surgeon", room_number: "1b", rate: 60, notes: "In on Tuesdays")

user1= User.create(full_name: "Rachel Adams", age: 30,username: "Radams@1234", password_digest: "testingRachel")

apt1= Appointment.create(doctor_id: 1, user_id: 1, reason_for_visit: "really bad headaches")


# ActiveRecord::Base.connection.reset_pk_sequence!('users')
# ActiveRecord::Base.connection.reset_pk_sequence!('appointments')
# ActiveRecord::Base.connection.reset_pk_sequence!('users')