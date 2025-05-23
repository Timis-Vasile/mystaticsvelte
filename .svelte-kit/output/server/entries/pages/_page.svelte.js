import { d as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload) {
  $$payload.out += `<h1>Welcome to SvelteKit</h1> <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation</p> <a${attr("href", `${stringify(base)}/about`)}>ABOUT</a>`;
}
export {
  _page as default
};
