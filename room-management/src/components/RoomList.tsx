import React from 'react';
import { Room as RoomInterface, Member } from '../types';
import Room from './Room';

interface RoomListProps {
  rooms: RoomInterface[];
  addMember: (roomId: number, member: Member) => void;
}

const RoomList: React.FC<RoomListProps> = ({ rooms, addMember }) => {
  return (
    <div>
      {rooms.map(room => (
        <Room key={room.id} room={room} addMember={addMember} />
      ))}
    </div>
  );
};

export default RoomList;