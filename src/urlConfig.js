export const api = "http://localhost:2000/api";
// export const api = "https://mobile-project-server.onrender.com/api";
export const generatePublicUrl = (fileName) => {
  return `http://localhost:2000/public/${fileName}`;
};
