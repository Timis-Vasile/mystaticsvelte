export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "mysveltekit/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DTYgNQB0.js",app:"_app/immutable/entry/app.DJTRHElK.js",imports:["_app/immutable/entry/start.DTYgNQB0.js","_app/immutable/chunks/Bfo-m-u5.js","_app/immutable/chunks/BhXK8Sv5.js","_app/immutable/chunks/B943lc6s.js","_app/immutable/chunks/D_h8Iqox.js","_app/immutable/entry/app.DJTRHElK.js","_app/immutable/chunks/BhXK8Sv5.js","_app/immutable/chunks/CJXIdqiy.js","_app/immutable/chunks/CIbTKPDu.js","_app/immutable/chunks/D_h8Iqox.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/mysveltekit/","/mysveltekit/about"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
