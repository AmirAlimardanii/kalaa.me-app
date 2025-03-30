export const imageResourceName = (url: string) => {
  return url.split(".")[url.split(".").length - 2].split("/").pop();
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
