export async function getAllUsers() {
  const API_URL = "http://localhost:8083/user";
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function createUser(data) {
  const response = await fetch(
    `http://localhost:8083/user?id=${data.id}&firstName=${data.firstName}&lastName=${data.lastName}&phoneNumber=${data.phoneNumber}&email=${data.email}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ team: data }),
    }
  );
  return await response.json();
}
