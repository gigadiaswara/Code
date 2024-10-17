"use client";

import { useState, useEffect } from 'react';

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  picture: string;
}

const TeamPage = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=4');
      const data = await response.json();
      setMembers(data.results.map((user: any) => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        picture: user.picture.medium,
      })));
    };
    fetchTeamMembers();
  }, []);

  return (
    <main>
      <h1>Meet Our Team</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <div key={index} className="border p-4 text-center">
            <img src={member.picture} alt={member.name} className="rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">Email: {member.email}</p>
            <p className="text-gray-600">Phone: {member.phone}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default TeamPage;
