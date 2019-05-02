export function setUser(text) {
  console.log("coucou", text);
  return { type: "SET_USER", text };
}
