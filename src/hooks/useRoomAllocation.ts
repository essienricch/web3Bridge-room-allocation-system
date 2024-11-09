import { useState } from 'react';
import { Room, Member } from '../types';

const MAX_DEVELOPERS = 3;
const MAX_ROOMS = 6;

export const useRoomAllocation = () => {
  const [rooms, setRooms] = useState<Room[]>(Array.from({ length: MAX_ROOMS }, (_, i) => ({
    id: i,
    facilitator: null,
    developers: [],
    gender: null,
  })));
  const addMemberToRoom = (roomId: number, member: Member) => {
    setRooms(prevRooms => {
      const room = prevRooms[roomId];
      if (room.developers.length >= MAX_DEVELOPERS && member.role === 'developer') {
        alert("Room is full!");
        return prevRooms;
      }

      if (room.gender === null) {
        room.gender = member.gender;
      } else if (room.gender !== member.gender) {
        alert("Gender mismatch in room!");
        return prevRooms;
    }

    if (member.role === 'facilitator') {
      room.facilitator = member;
    } else {
        const sameSkillCount = room.developers.filter(dev => dev.skillSet === member.skillSet).length;
        if (sameSkillCount >= 2) {
          alert("Cannot add more than 2 developers with the same skill set!");
          return prevRooms;
        }
        room.developers.push(member);
      }

      return [...prevRooms];
    });
  };

  return { rooms, addMemberToRoom };
}
