export const validEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};
