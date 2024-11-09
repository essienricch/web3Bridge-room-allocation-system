import React from "react";
import { useRoomAllocation } from "./hooks/useRoomAllocation";
import RoomList from "./components/RoomList";

const App: React.FC = () => {
  const { rooms, addMemberToRoom } = useRoomAllocation();

  return (
    <div>
      <h1>Room Allocation System</h1>
      <RoomList rooms={rooms} addMember={addMemberToRoom} />
    </div>
  );
};

export default App;
