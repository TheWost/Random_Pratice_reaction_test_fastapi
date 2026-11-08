export const yellow = getComputedStyle(document.documentElement)
  .getPropertyValue("--yellow").trim();

export const red = getComputedStyle(document.documentElement)
  .getPropertyValue("--red").trim();

export function toggleTwoButtons(b1, b2) {
  const b1Hidden = b1.style.display === "none";

  b1.style.display = b1Hidden ? "block" : "none";
  b2.style.display = b1Hidden ? "none" : "block";
}
