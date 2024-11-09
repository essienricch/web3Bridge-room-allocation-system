
import React, { useState } from 'react';
import { Member } from '../types';

interface AddMemberDialogProps {
  onClose: () => void;
  onAdd: (member: Member) => void;
}

const AddMemberDialog: React.FC<AddMemberDialogProps> = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState<'facilitator' | 'developer'>('developer');
  const [skillSet, setSkillSet] = useState<'smart contract' | 'frontend' | 'server-side' | undefined>(undefined);
  const [gender, setGender] = useState<'male' | 'female' | undefined>(undefined);

  const handleSubmit = () => {
    if (!name || !role || (role === 'developer' && !skillSet) || !gender) {
      alert("Please fill in all fields.");
      return;
    }
    const newMember: Member = { name, role, skillSet, gender };
    onAdd(newMember);
    setName('');
    setRole('developer');
    setSkillSet(undefined);
    setGender(undefined);
  };

  return (
    <div className="dialog">
      <h2>Add Member</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value as 'facilitator' | 'developer')}>
        <option value="developer">Developer</option>
        <option value="facilitator">Facilitator</option>
      </select>
      {role === 'developer' && (
        <select value={skillSet} onChange={(e) => setSkillSet(e.target.value as 'smart contract' | 'frontend' | 'server-side')}>
          <option value="">Select Skill Set</option>
          <option value="smart contract">Smart Contract</option>
          <option value="frontend">Frontend</option>
          <option value="server-side">Server-side</option>
        </select>
      )}
      <select value={gender} onChange={(e) => setGender(e.target.value as 'male' | 'female')}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={handleSubmit}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddMemberDialog;
