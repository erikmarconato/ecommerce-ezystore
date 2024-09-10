import { useState, useEffect } from 'react';

function useRole() {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
    setLoading(false);
  }, []);

  return { role, loading };
}

export default useRole;
