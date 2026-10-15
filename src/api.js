
const API_URL = import.meta.env.VITE_API_URL;

export async function testBackend() {
  const response = await fetch(`${API_URL}/`);

  if (!response.ok) {
    throw new Error(`Backend returned ${response.status}`);
  }

  return response.json();
}
