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
		client: {start:"_app/immutable/entry/start.Pya78Uq9.js",app:"_app/immutable/entry/app.C_c0Aej6.js",imports:["_app/immutable/entry/start.Pya78Uq9.js","_app/immutable/chunks/BxFZ7Bz-.js","_app/immutable/chunks/BhXK8Sv5.js","_app/immutable/chunks/BIX6BA1I.js","_app/immutable/chunks/D_h8Iqox.js","_app/immutable/entry/app.C_c0Aej6.js","_app/immutable/chunks/BhXK8Sv5.js","_app/immutable/chunks/CJXIdqiy.js","_app/immutable/chunks/CIbTKPDu.js","_app/immutable/chunks/D_h8Iqox.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
