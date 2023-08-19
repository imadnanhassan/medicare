export const formatDate = (day, config) => {
  const defaultOption = { day: "numeric", month: "short", year: "numeric" };
  const options = config ? config : defaultOption;
  return new Date(day).toLocaleDateString("en-us", options);
};
