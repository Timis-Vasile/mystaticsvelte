import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Bt0gMIlk.js","_app/immutable/chunks/CIbTKPDu.js","_app/immutable/chunks/BhXK8Sv5.js"];
export const stylesheets = [];
export const fonts = [];
