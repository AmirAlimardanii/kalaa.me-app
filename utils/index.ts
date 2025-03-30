export const imageResourceName = (url: string) => {
  return url.split(".")[url.split(".").length - 2].split("/").pop();
};
