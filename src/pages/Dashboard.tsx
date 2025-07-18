import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  username: string;
  xp: number;
  streak: number;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // protected route logic
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => setUser(res.data));
    }
  }, []);

  return (
    <div className="p-8">
      <h1>Dashboard</h1>
      {user && (
        <>
          <h1 className="text-2xl font-bold">Welcome back, {user.username}</h1>
          <p className="mt-2">XP: {user.xp} | Streak: {user.streak}</p>
        </>
      )}
    </div>
  );
}