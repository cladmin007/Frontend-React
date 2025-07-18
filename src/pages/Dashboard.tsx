import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Dashboard() {
  const [user, setUser] = useState({});

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
      <h1 className="text-2xl font-bold">Welcome back, {user.username}</h1>
      <p className="mt-2">XP: {user.xp} | Streak: {user.streak}</p>
    </div>
  );
}