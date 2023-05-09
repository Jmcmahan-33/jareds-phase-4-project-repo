
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/user";

function AppointmentEdit({ appointment, onClose }) {
  const { updateAppointment, user } = useContext(UserContext);
  const [aptInfo, setAptInfo] = useState(
    appointment?.date_field || ""
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAppointment(appointment.id, {
      date_field: aptInfo,
      user_id: user.id,
      id: appointment.id,
    });
    setIsEditing(false);
    onClose();
  };

  useEffect(() => {
    return () => {
      setAptInfo("");
    };
  }, []);

  if (appointment === null) {
    return null;
  }

  if (!isEditing) {
    return (
      <div className="edit-form">
        <h2>Edit Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="date_field"
            type="date"
            placeholder="Date"
            value={aptInfo}
            onChange={(e) => setAptInfo(e.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" type="submit">
            Change Date
          </Button>
        </form>
      </div>
    );
  }
}

export default AppointmentEdit;

