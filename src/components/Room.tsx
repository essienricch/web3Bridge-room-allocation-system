import React, { useState } from "react";
import { Room as RoomInterface, Member } from "../types";
import AddMemberDialog from "../components/AddMemberDialog";

interface RoomProps {
  room: RoomInterface;
  addMember: (roomId: number, member: Member) => void;
}

const Room: React.FC<RoomProps> = ({ room, addMember }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddMember = (member: Member) => {
    addMember(room.id, member);
    setDialogOpen(false);
  };

  return (
    <div>
      <h3>Room {room.id + 1}</h3>
      <p>Facilitator: {room.facilitator ? room.facilitator.name : "None"}</p>
      <p>
        Developers:{" "}
        {room.developers.map((dev) => dev.name).join(", ") || "None"}
      </p>
      <button onClick={() => setDialogOpen(true)}>Add Member</button>
      {dialogOpen && (
        <AddMemberDialog
          onClose={() => setDialogOpen(false)}
          onAdd={handleAddMember}
        />
      )}
    </div>
  );
};

export default Room;
