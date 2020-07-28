export default function getCSSVariable(name: string) {
    let propertyValue = "";
    propertyValue = getComputedStyle(document.documentElement).getPropertyValue(
        name
    );
    return propertyValue;
}
