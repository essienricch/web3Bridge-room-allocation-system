export type Role = "facilitator" | "developer";
export type SkillSet = "smart contract" | "frontend" | "server-side";

export interface Member {
  name: string;
  role: Role;
  skillSet?: SkillSet;
  gender?: "male" | "female";
}

export interface Room {
  id: number;
  facilitator: Member | null;
  developers: Member[];
  gender: "male" | "female" | null | undefined;
}
