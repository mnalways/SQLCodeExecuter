export const getCurrentDate = () => {
  const currentDate = new Date();
  return currentDate.toLocaleDateString("en", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
