/**
 * Bind Color aliases to _Base. Run from repo root:
 *   node skills/scripts/bind-color-tokens.js
 */
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "..", "tokens.json");
const t = JSON.parse(fs.readFileSync(file, "utf8"));
const color = t.Color;
const tipografiaBefore = JSON.stringify(t.Tipografia);
const elevacionSetBefore = JSON.stringify(t.Elevacion);
const spaceBefore = JSON.stringify(t.Space);
const radiusBefore = JSON.stringify(t.Radius);

function cloneColorLeaves(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === "object" && "value" in v && v.type === "color") {
      const node = { value: v.value, type: "color" };
      if (v.description) node.description = v.description;
      out[k] = node;
    } else if (v && typeof v === "object") {
      out[k] = cloneColorLeaves(v);
    }
  }
  return out;
}

function walk(obj, parts, acc) {
  for (const [k, v] of Object.entries(obj || {})) {
    const p = [...parts, k];
    if (v && typeof v === "object" && "value" in v && v.type === "color") {
      acc.push({ path: p.join("."), parts: p, value: String(v.value), node: v });
    } else if (v && typeof v === "object" && !("value" in v)) {
      walk(v, p, acc);
    }
  }
}

color._Base.Transparent = { value: "#00000000", type: "color" };
color._Base.Facultad = cloneColorLeaves(color.Facultad);
color._Base.Secondary = cloneColorLeaves(color.Secondary);

color["☾ Dark mode"].Background["Background 4"] = {
  value: "{_Base.Secondary - Verde.Secondary 90}",
  type: "color",
};

const baseLeaves = [];
walk(color._Base, ["_Base"], baseLeaves);
const hexToBase = new Map();
for (const leaf of baseLeaves) {
  const hex = leaf.value.toLowerCase();
  if (!hex.startsWith("#")) continue;
  if (!hexToBase.has(hex)) hexToBase.set(hex, leaf.path);
}

const overrides = {
  "Light mode.Background.Background 3": "{_Base.Secondary - Verde.Secondary 10}",
  "Light mode.Background.Background 4": "{_Base.Secondary - Verde.Secondary 20}",
  "☾ Dark mode.Background.Background 3": "{_Base.Secondary - Verde.Secondary 100}",
  "☾ Dark mode.Background.Background 4": "{_Base.Secondary - Verde.Secondary 90}",
  "Light mode.Surface.Surface ghost - default": "{_Base.Transparent}",
  "☾ Dark mode.Surface.☾ Surface ghost - default": "{_Base.Transparent}",
  "text.facultad.on-light.primary": "{Facultad.on-light.A}",
  "elevacion.on-dark.1": "{_Base.Neutral.Neutral 88}",
  "elevacion.on-dark.2": "{_Base.Neutral.Neutral 88}",
  "elevacion.on-dark.3": "{_Base.Neutral.Neutral 88}",
  "elevacion.on-dark.4": "{_Base.Neutral.Neutral 88}",
};

function rootAlias(leaf) {
  const [root, step] = leaf.parts;
  if (root === "Neutral") {
    return step === "10"
      ? "{_Base.Neutral.Neutral 10 (blanco)}"
      : `{_Base.Neutral.Neutral ${step}}`;
  }
  if (root === "Primary") return `{_Base.Primary.Primary ${step}}`;
  if (root === "Secondary") return `{_Base.Secondary.${step}}`;
  if (root === "Info") return `{_Base.Info.Info ${step}}`;
  if (root === "Exito") return `{_Base.Success.Success ${step}}`;
  if (root === "Alerta") return `{_Base.Warning.Warning ${step}}`;
  if (root === "Error") return `{_Base.Error.Error ${step}}`;
  if (root === "Facultad") return `{_Base.Facultad.${leaf.parts.slice(1).join(".")}}`;
  return null;
}

const all = [];
walk(color, [], all);
const unmatched = [];

for (const leaf of all) {
  if (leaf.path.startsWith("_Base.")) continue;
  if (String(leaf.value).startsWith("{")) continue;

  if (overrides[leaf.path]) {
    leaf.node.value = overrides[leaf.path];
    continue;
  }

  const fromRoot = rootAlias(leaf);
  if (fromRoot) {
    leaf.node.value = fromRoot;
    continue;
  }

  const hit = hexToBase.get(leaf.value.toLowerCase());
  if (hit) {
    leaf.node.value = `{${hit}}`;
    continue;
  }

  unmatched.push(leaf.path + " " + leaf.value);
}

if (unmatched.length) {
  console.error("UNMATCHED:\n" + unmatched.join("\n"));
  process.exit(1);
}

fs.writeFileSync(file, JSON.stringify(t, null, 2) + "\n");

if (JSON.stringify(t.Tipografia) !== tipografiaBefore) throw new Error("Tipografia changed");
if (JSON.stringify(t.Elevacion) !== elevacionSetBefore) throw new Error("Elevacion set changed");
if (JSON.stringify(t.Space) !== spaceBefore) throw new Error("Space changed");
if (JSON.stringify(t.Radius) !== radiusBefore) throw new Error("Radius changed");

const after = [];
walk(t.Color, [], after);
let hexOutsideBase = 0;
for (const leaf of after) {
  if (leaf.path.startsWith("_Base.")) continue;
  if (/^#/.test(leaf.value)) hexOutsideBase++;
}
console.log("Color color leaves:", after.length);
console.log("Hex outside _Base:", hexOutsideBase);
console.log("Dark BG4:", t.Color["☾ Dark mode"].Background["Background 4"].value);
console.log("Facultad A:", t.Color.Facultad["on-light"].A.value);
console.log("text facultad:", t.Color.text.facultad["on-light"].primary.value);
console.log("OK");
