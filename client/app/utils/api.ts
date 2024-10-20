export const loginUser = async ({ email, password }: { email: string; password: string }) => {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Login failed');
  }

  const user = await res.json();
  return user;
};

export const logoutUser = async () => {
  await fetch('http://localhost:3001/auth/logout', {
    method: 'POST',
    credentials: 'include',
  });
};

export const getCurrentUser = async () => {
  const res = await fetch('http://localhost:3001/auth/me', {
    method: 'GET',
    credentials: 'include',
  });
  if (!res.ok) {
    console.error('Failed to get current user');
    return null;
  }

  const user = await res.json();
  return user;
};
