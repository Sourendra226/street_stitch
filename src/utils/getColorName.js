import namer from "color-namer";

export default function getColorName(hex) {
  if (!hex || typeof hex !== "string" || !hex.startsWith("#")) {
    return "Unknown Color";
  }

  try {
    const names = namer(hex);
    return names.html[0]?.name || "Unknown Color";
  } catch (err) {
    console.error("Invalid color code:", hex, err);
    return "Unknown Color";
  }
}
