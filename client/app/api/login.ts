export const login = async ({ email, password }: { email: string; password: string }) => {
  const res = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error('Login failed');
  }

  const { access_token } = await res.json();
  localStorage.setItem('token', access_token);

  return true;
};
