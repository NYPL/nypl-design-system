export default function getCSSVariable(name: string) {
  const propertyValue =
    getComputedStyle(document.documentElement).getPropertyValue(name) || "";
  return propertyValue;
}
