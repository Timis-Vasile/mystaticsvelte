

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BbJLHEEC.js","_app/immutable/chunks/CIbTKPDu.js","_app/immutable/chunks/BhXK8Sv5.js","_app/immutable/chunks/Cc1Wc1vR.js"];
export const stylesheets = [];
export const fonts = [];
