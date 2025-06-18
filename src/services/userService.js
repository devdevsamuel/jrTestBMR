export const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Error fetching users');
    return await response.json();
  } catch (error) {
    console.error('Error in fetchUsers:', error);
    throw error;
  }
};
