// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gzp3I":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ee62429a5d9dacde";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1Z4Rq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const const_1 = require("./const");
const ui_1 = require("./ui");
const request_1 = require("./request");
const messages_1 = require("./messages");
const set = new Set();
const_1.ELEMENTS.authorizationForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    (0, request_1.setCookie)("thisUser", const_1.ELEMENTS.emailInput.value.trim());
    (0, request_1.sendRequest)({
        method: const_1.METHOD.POST,
        URL: `${const_1.ELEMENTS.URL}${"/user"}`,
        body: {
            body: (0, messages_1.stringifyJSON)({
                email: const_1.ELEMENTS.emailInput.value.trim()
            })
        }
    });
    const_1.ELEMENTS.emailInput.value = "";
    (0, ui_1.closeModal)(const_1.ELEMENTS.modalAuthorization);
    (0, ui_1.showModal)(const_1.ELEMENTS.modalCode);
});
const_1.ELEMENTS.codeForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    (0, request_1.setCookie)("token", const_1.ELEMENTS.code.value.trim());
    const_1.ELEMENTS.code.value = "";
    (0, ui_1.closeModal)(const_1.ELEMENTS.modalCode);
    document.location.reload();
});
const_1.ELEMENTS.nameForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const token = (0, request_1.getCookie)("token");
    if (const_1.ELEMENTS.name.value !== "") (0, request_1.sendRequest)({
        method: const_1.METHOD.PATCH,
        URL: `${const_1.ELEMENTS.URL}${"/user"}`,
        body: {
            body: (0, messages_1.stringifyJSON)({
                name: const_1.ELEMENTS.name.value.trim()
            })
        },
        headers: {
            Authorization: `${const_1.ELEMENTS.authorizationWord} ${token}`
        }
    });
    else (0, ui_1.showWarning)(const_1.ELEMENTS.nameWarning);
    const_1.ELEMENTS.name.value = "";
});
document.addEventListener("DOMContentLoaded", showCurrentHistory);
function showCurrentHistory() {
    const token = (0, request_1.getCookie)("token");
    if (!token) {
        (0, ui_1.showModal)(const_1.ELEMENTS.modalAuthorization);
        return;
    }
    const responseResult = (0, request_1.sendRequest)({
        method: const_1.METHOD.GET,
        URL: `${const_1.ELEMENTS.URL}${"/messages/"}`,
        body: {},
        headers: {
            Authorization: `${const_1.ELEMENTS.authorizationWord} ${token}`
        }
    });
    responseResult.then((result)=>{
        localStorage.setItem("history", (0, messages_1.stringifyJSON)(result.messages) || "");
        (0, messages_1.downloadHistory)("thisUser");
        if (const_1.ELEMENTS.contentWrapper) const_1.ELEMENTS.contentWrapper.scrollTop = const_1.ELEMENTS.contentWrapper.scrollHeight;
    });
    setConnection();
}
const_1.ELEMENTS.scrollDown.hidden = true;
const_1.ELEMENTS.contentWrapper.addEventListener("scroll", ()=>{
    (0, ui_1.addScrollIcon)();
    const messagesList = (0, messages_1.parseJSON)(localStorage.getItem("history") || "");
    if (const_1.ELEMENTS.contentWrapper) {
        if (const_1.ELEMENTS.contentWrapper.scrollTop === 0) {
            const currentContentHeight = const_1.ELEMENTS.contentWrapper.scrollHeight;
            if (messagesList.length >= const_1.MESSAGE.step) (0, messages_1.downloadHistory)("thisUser");
            const newContentHeight = const_1.ELEMENTS.contentWrapper.scrollHeight;
            const_1.ELEMENTS.contentWrapper.scrollTop = newContentHeight - currentContentHeight;
        }
    }
});
function setConnection() {
    const socket = new WebSocket(`wss://edu.strada.one/websockets?${(0, request_1.getCookie)("token")}`);
    const_1.ELEMENTS.textArea.addEventListener("keydown", (event)=>{
        set.add(event.key);
        if (set.has("Enter") && !set.has("Shift")) {
            socket.send(JSON.stringify({
                text: const_1.ELEMENTS.textArea.value
            }));
            (0, ui_1.returnTextAreaSie)();
            event.preventDefault();
        }
    });
    const_1.ELEMENTS.textArea.addEventListener("keyup", (event)=>{
        set.clear();
        (0, ui_1.changeTextAreaSize)(event);
    });
    const_1.ELEMENTS.messageForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        socket.send(JSON.stringify({
            text: const_1.ELEMENTS.textArea.value
        }));
        (0, ui_1.returnTextAreaSie)();
    });
    socket.onmessage = function(event) {
        const data = (0, messages_1.parseJSON)(event.data);
        if ((0, request_1.getCookie)("thisUser") === data.user.email) (0, messages_1.addMessage)({
            userClass: const_1.ELEMENTS.myMessages,
            text: data.text,
            time: data.createdAt,
            userName: undefined,
            insert: "append"
        });
        else (0, messages_1.addMessage)({
            userClass: const_1.ELEMENTS.interlocutorMessages,
            text: data.text,
            time: data.createdAt,
            userName: data.user.name,
            insert: "append"
        });
    };
    const_1.ELEMENTS.buttonExit.addEventListener("click", ()=>{
        socket.close();
        (0, ui_1.showModal)(const_1.ELEMENTS.modalAuthorization);
        (0, request_1.setCookie)("token", "token", -1);
        (0, request_1.setCookie)("thisUser", "user", -1);
        localStorage.removeItem("history");
    });
}

},{"./const":"hKAsx","./ui":"1hWqh","./messages":"cV4xq","./request":"7c4ZJ"}],"hKAsx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.METHOD = exports.MESSAGE = exports.ELEM_HEIGHTS = exports.ELEMENTS = void 0;
exports.ELEMENTS = {
    modalButtonName: document.querySelector(".modal-name"),
    modalName: document.querySelector("#modal-name"),
    modals: document.querySelectorAll("[data-modal]"),
    modalWindow: document.querySelectorAll(".modal__window"),
    modalAuthorization: document.querySelector("#modal-authorization"),
    modalCode: document.querySelector("#modal-code"),
    closestModal: "[data-modal]",
    buttonsClose: document.querySelectorAll("[data-modal-close]"),
    buttonExit: document.querySelector(".inline-button-exit"),
    textArea: document.querySelector(".input-message"),
    contentWindow: document.querySelector(".content"),
    contentWrapper: document.querySelector(".content__wrapper"),
    messageForm: document.querySelector(".texting-area__wrapper"),
    scrollDown: document.querySelector(".scroll-down"),
    getCodeButton: document.querySelector("#modal-authorization  .button"),
    authorizationForm: document.querySelector("#modal-authorization .input-data"),
    emailInput: document.querySelector("#modal-authorization .modal__input"),
    codeForm: document.querySelector("#modal-code .input-data"),
    code: document.querySelector("#modal-code .modal__input"),
    nameForm: document.querySelector("#modal-name .input-data"),
    name: document.querySelector("#modal-name .modal__input"),
    hiddenClass: "hidden",
    codeWarning: document.querySelector("#modal-code .modal__warning"),
    nameWarning: document.querySelector("#modal-name .modal__warning"),
    myMessages: [
        "message",
        "message--user-me",
        "message--sent"
    ],
    interlocutorMessages: [
        "message",
        "message--interlocutor"
    ],
    URL: "https://edu.strada.one/api",
    authorizationWord: "Bearer",
    template: document.querySelector("#tmpl")
};
exports.ELEM_HEIGHTS = {
    windowHeight: document.documentElement.clientHeight,
    headerHeight: document.querySelector(".header").clientHeight,
    inputMessageHeight: 50,
    messageMargin: 15,
    inputMessagePadding: 42.5
};
exports.MESSAGE = {
    step: 20
};
exports.METHOD = {
    POST: "POST",
    PATCH: "PATCH",
    GET: "GET"
};

},{}],"1hWqh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showEndHistory = exports.returnTextAreaSie = exports.showWarning = exports.addScrollIcon = exports.changeTextAreaSize = exports.closeModal = exports.showModal = void 0;
const const_1 = require("./const");
function showModal(modalItem) {
    if (modalItem) modalItem.classList.remove(const_1.ELEMENTS.hiddenClass);
}
exports.showModal = showModal;
function closeModal(modalItem) {
    if (modalItem) modalItem.classList.add(const_1.ELEMENTS.hiddenClass);
}
exports.closeModal = closeModal;
const_1.ELEMENTS.buttonsClose.forEach(function(item) {
    item.addEventListener("click", function() {
        const currentModal = this.closest(const_1.ELEMENTS.closestModal);
        closeModal(currentModal);
    });
});
const_1.ELEMENTS.modals.forEach(function(item) {
    item.addEventListener("click", function() {
        this.classList.add(const_1.ELEMENTS.hiddenClass);
    });
});
const_1.ELEMENTS.modalWindow.forEach(function(item) {
    item.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
const_1.ELEMENTS.modalButtonName.addEventListener("click", ()=>{
    showModal(const_1.ELEMENTS.modalName);
});
function changeTextAreaSize(event) {
    if (event.target.scrollHeight < 300) {
        if (const_1.ELEM_HEIGHTS.headerHeight && const_1.ELEM_HEIGHTS.inputMessagePadding) {
            const_1.ELEMENTS.textArea.style.height = `${const_1.ELEM_HEIGHTS.inputMessageHeight}px`;
            let scHeight = event.target.scrollHeight;
            const_1.ELEMENTS.textArea.style.height = ` ${scHeight}px`;
            const_1.ELEMENTS.contentWindow.style.height = `${const_1.ELEM_HEIGHTS.windowHeight - (const_1.ELEM_HEIGHTS.headerHeight + const_1.ELEM_HEIGHTS.inputMessagePadding + scHeight)}px`;
        }
    }
}
exports.changeTextAreaSize = changeTextAreaSize;
function addScrollIcon() {
    if (const_1.ELEMENTS.contentWindow && const_1.ELEMENTS.contentWrapper) {
        const lastMessage = const_1.ELEMENTS.contentWindow.querySelector(".message:last-child");
        const scrollBottom = const_1.ELEMENTS.contentWrapper.scrollHeight - const_1.ELEMENTS.contentWrapper.clientHeight - const_1.ELEMENTS.contentWrapper.scrollTop;
        if (const_1.ELEM_HEIGHTS.messageMargin) {
            if (scrollBottom < lastMessage.clientHeight + const_1.ELEM_HEIGHTS.messageMargin) {
                const_1.ELEMENTS.scrollDown.hidden = true;
                return scrollBottom;
            } else const_1.ELEMENTS.scrollDown.hidden = false;
        }
    }
}
exports.addScrollIcon = addScrollIcon;
const_1.ELEMENTS.scrollDown.addEventListener("click", ()=>{
    if (const_1.ELEMENTS.contentWindow) {
        const lastMessage = const_1.ELEMENTS.contentWindow.querySelector(".message:last-child");
        lastMessage.scrollIntoView({
            behavior: "smooth"
        });
    }
});
function showWarning(element) {
    if (element) {
        element.classList.remove(const_1.ELEMENTS.hiddenClass);
        setTimeout(()=>{
            element.classList.add(const_1.ELEMENTS.hiddenClass);
        }, 3000);
    }
}
exports.showWarning = showWarning;
function returnTextAreaSie() {
    const_1.ELEMENTS.textArea.value = "";
    const_1.ELEMENTS.textArea.style.height = `50px`;
    if (const_1.ELEM_HEIGHTS.headerHeight && const_1.ELEM_HEIGHTS.inputMessagePadding) const_1.ELEMENTS.contentWindow.style.height = `${const_1.ELEM_HEIGHTS.windowHeight - (const_1.ELEM_HEIGHTS.headerHeight + const_1.ELEM_HEIGHTS.inputMessagePadding + const_1.ELEM_HEIGHTS.inputMessageHeight)}px`;
}
exports.returnTextAreaSie = returnTextAreaSie;
function showEndHistory() {
    let div = document.createElement("div");
    div.classList.add("messages-warning");
    let p = document.createElement("p");
    p.innerHTML = "Вся история загружена:)";
    div.append(p);
    if (const_1.ELEMENTS.contentWrapper) const_1.ELEMENTS.contentWrapper.prepend(div);
}
exports.showEndHistory = showEndHistory;

},{"./const":"hKAsx"}],"cV4xq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.downloadHistory = exports.parseJSON = exports.stringifyJSON = exports.addMessage = void 0;
const const_1 = require("./const");
const request_1 = require("./request");
const date_fns_1 = require("date-fns");
const ui_1 = require("./ui");
function addMessage(message) {
    let div = document.createElement("div");
    div.classList.add(...message.userClass);
    if (message.text.trim() !== "") {
        div.append(const_1.ELEMENTS.template.content.cloneNode(true));
        div.querySelector(".message__text").textContent = message.text;
        div.querySelector(".message__delivery-time").textContent = (0, date_fns_1.format)(Date.parse(message.time), "HH:mm");
        if (message.insert && const_1.ELEMENTS.contentWrapper) const_1.ELEMENTS.contentWrapper.append(div);
        else if (const_1.ELEMENTS.contentWrapper) const_1.ELEMENTS.contentWrapper.prepend(div);
    }
    if (message.userName) {
        let span = document.createElement("span");
        span.classList.add("message__user");
        div.prepend(span);
        span.textContent = message.userName;
    } else div.scrollIntoView({
        behavior: "smooth"
    });
}
exports.addMessage = addMessage;
function stringifyJSON(item) {
    try {
        return JSON.stringify(item);
    } catch (error) {
        alert(error.message);
    }
}
exports.stringifyJSON = stringifyJSON;
function parseJSON(item) {
    try {
        return JSON.parse(item);
    } catch (error) {
        alert(error.message);
    }
}
exports.parseJSON = parseJSON;
function downloadHistory(key) {
    const messagesList = parseJSON(localStorage.getItem("history") || "");
    messagesList.slice(0, const_1.MESSAGE.step).forEach((item)=>{
        if (item.user.email === (0, request_1.getCookie)(key)) addMessage({
            userClass: const_1.ELEMENTS.myMessages,
            text: item.text,
            time: item.updatedAt
        });
        else addMessage({
            userClass: const_1.ELEMENTS.interlocutorMessages,
            text: item.text,
            time: item.updatedAt,
            userName: item.user.name
        });
    });
    const history = messagesList.filter((item, index)=>index >= const_1.MESSAGE.step);
    localStorage.setItem("history", stringifyJSON(history) || "");
    if (messagesList.length <= const_1.MESSAGE.step) (0, ui_1.showEndHistory)();
}
exports.downloadHistory = downloadHistory;

},{"./const":"hKAsx","./request":"7c4ZJ","date-fns":"9yHCA","./ui":"1hWqh"}],"7c4ZJ":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendRequest = exports.getCookie = exports.setCookie = void 0;
const const_1 = require("./const");
const ui_1 = require("./ui");
function setCookie(name, value, age = 1728000) {
    if (value !== "") document.cookie = `${name}=${value}; max-age= ${age}`;
    else (0, ui_1.showWarning)(const_1.ELEMENTS.codeWarning);
}
exports.setCookie = setCookie;
function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
exports.getCookie = getCookie;
function sendRequest(item) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            let response = yield fetch(item.URL, Object.assign({
                method: item.method,
                headers: Object.assign({
                    "Content-Type": "application/json"
                }, item.headers)
            }, item.body));
            if (!response.ok) alert("Ошибка запроса:" + response.status);
            let result = yield response.json();
            return result;
        } catch (err) {
            console.log(err);
        }
    });
}
exports.sendRequest = sendRequest;

},{"./const":"hKAsx","./ui":"1hWqh"}],"9yHCA":[function(require,module,exports) {
// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "addBusinessDays", ()=>(0, _indexJsDefault1.default));
parcelHelpers.export(exports, "addDays", ()=>(0, _indexJsDefault2.default));
parcelHelpers.export(exports, "addHours", ()=>(0, _indexJsDefault3.default));
parcelHelpers.export(exports, "addISOWeekYears", ()=>(0, _indexJsDefault4.default));
parcelHelpers.export(exports, "addMilliseconds", ()=>(0, _indexJsDefault5.default));
parcelHelpers.export(exports, "addMinutes", ()=>(0, _indexJsDefault6.default));
parcelHelpers.export(exports, "addMonths", ()=>(0, _indexJsDefault7.default));
parcelHelpers.export(exports, "addQuarters", ()=>(0, _indexJsDefault8.default));
parcelHelpers.export(exports, "addSeconds", ()=>(0, _indexJsDefault9.default));
parcelHelpers.export(exports, "addWeeks", ()=>(0, _indexJsDefault10.default));
parcelHelpers.export(exports, "addYears", ()=>(0, _indexJsDefault11.default));
parcelHelpers.export(exports, "areIntervalsOverlapping", ()=>(0, _indexJsDefault12.default));
parcelHelpers.export(exports, "clamp", ()=>(0, _indexJsDefault13.default));
parcelHelpers.export(exports, "closestIndexTo", ()=>(0, _indexJsDefault14.default));
parcelHelpers.export(exports, "closestTo", ()=>(0, _indexJsDefault15.default));
parcelHelpers.export(exports, "compareAsc", ()=>(0, _indexJsDefault16.default));
parcelHelpers.export(exports, "compareDesc", ()=>(0, _indexJsDefault17.default));
parcelHelpers.export(exports, "daysToWeeks", ()=>(0, _indexJsDefault18.default));
parcelHelpers.export(exports, "differenceInBusinessDays", ()=>(0, _indexJsDefault19.default));
parcelHelpers.export(exports, "differenceInCalendarDays", ()=>(0, _indexJsDefault20.default));
parcelHelpers.export(exports, "differenceInCalendarISOWeekYears", ()=>(0, _indexJsDefault21.default));
parcelHelpers.export(exports, "differenceInCalendarISOWeeks", ()=>(0, _indexJsDefault22.default));
parcelHelpers.export(exports, "differenceInCalendarMonths", ()=>(0, _indexJsDefault23.default));
parcelHelpers.export(exports, "differenceInCalendarQuarters", ()=>(0, _indexJsDefault24.default));
parcelHelpers.export(exports, "differenceInCalendarWeeks", ()=>(0, _indexJsDefault25.default));
parcelHelpers.export(exports, "differenceInCalendarYears", ()=>(0, _indexJsDefault26.default));
parcelHelpers.export(exports, "differenceInDays", ()=>(0, _indexJsDefault27.default));
parcelHelpers.export(exports, "differenceInHours", ()=>(0, _indexJsDefault28.default));
parcelHelpers.export(exports, "differenceInISOWeekYears", ()=>(0, _indexJsDefault29.default));
parcelHelpers.export(exports, "differenceInMilliseconds", ()=>(0, _indexJsDefault30.default));
parcelHelpers.export(exports, "differenceInMinutes", ()=>(0, _indexJsDefault31.default));
parcelHelpers.export(exports, "differenceInMonths", ()=>(0, _indexJsDefault32.default));
parcelHelpers.export(exports, "differenceInQuarters", ()=>(0, _indexJsDefault33.default));
parcelHelpers.export(exports, "differenceInSeconds", ()=>(0, _indexJsDefault34.default));
parcelHelpers.export(exports, "differenceInWeeks", ()=>(0, _indexJsDefault35.default));
parcelHelpers.export(exports, "differenceInYears", ()=>(0, _indexJsDefault36.default));
parcelHelpers.export(exports, "eachDayOfInterval", ()=>(0, _indexJsDefault37.default));
parcelHelpers.export(exports, "eachHourOfInterval", ()=>(0, _indexJsDefault38.default));
parcelHelpers.export(exports, "eachMinuteOfInterval", ()=>(0, _indexJsDefault39.default));
parcelHelpers.export(exports, "eachMonthOfInterval", ()=>(0, _indexJsDefault40.default));
parcelHelpers.export(exports, "eachQuarterOfInterval", ()=>(0, _indexJsDefault41.default));
parcelHelpers.export(exports, "eachWeekOfInterval", ()=>(0, _indexJsDefault42.default));
parcelHelpers.export(exports, "eachWeekendOfInterval", ()=>(0, _indexJsDefault43.default));
parcelHelpers.export(exports, "eachWeekendOfMonth", ()=>(0, _indexJsDefault44.default));
parcelHelpers.export(exports, "eachWeekendOfYear", ()=>(0, _indexJsDefault45.default));
parcelHelpers.export(exports, "eachYearOfInterval", ()=>(0, _indexJsDefault46.default));
parcelHelpers.export(exports, "endOfDay", ()=>(0, _indexJsDefault47.default));
parcelHelpers.export(exports, "endOfDecade", ()=>(0, _indexJsDefault48.default));
parcelHelpers.export(exports, "endOfHour", ()=>(0, _indexJsDefault49.default));
parcelHelpers.export(exports, "endOfISOWeek", ()=>(0, _indexJsDefault50.default));
parcelHelpers.export(exports, "endOfISOWeekYear", ()=>(0, _indexJsDefault51.default));
parcelHelpers.export(exports, "endOfMinute", ()=>(0, _indexJsDefault52.default));
parcelHelpers.export(exports, "endOfMonth", ()=>(0, _indexJsDefault53.default));
parcelHelpers.export(exports, "endOfQuarter", ()=>(0, _indexJsDefault54.default));
parcelHelpers.export(exports, "endOfSecond", ()=>(0, _indexJsDefault55.default));
parcelHelpers.export(exports, "endOfToday", ()=>(0, _indexJsDefault56.default));
parcelHelpers.export(exports, "endOfTomorrow", ()=>(0, _indexJsDefault57.default));
parcelHelpers.export(exports, "endOfWeek", ()=>(0, _indexJsDefault58.default));
parcelHelpers.export(exports, "endOfYear", ()=>(0, _indexJsDefault59.default));
parcelHelpers.export(exports, "endOfYesterday", ()=>(0, _indexJsDefault60.default));
parcelHelpers.export(exports, "format", ()=>(0, _indexJsDefault61.default));
parcelHelpers.export(exports, "formatDistance", ()=>(0, _indexJsDefault62.default));
parcelHelpers.export(exports, "formatDistanceStrict", ()=>(0, _indexJsDefault63.default));
parcelHelpers.export(exports, "formatDistanceToNow", ()=>(0, _indexJsDefault64.default));
parcelHelpers.export(exports, "formatDistanceToNowStrict", ()=>(0, _indexJsDefault65.default));
parcelHelpers.export(exports, "formatDuration", ()=>(0, _indexJsDefault66.default));
parcelHelpers.export(exports, "formatISO", ()=>(0, _indexJsDefault67.default));
parcelHelpers.export(exports, "formatISO9075", ()=>(0, _indexJsDefault68.default));
parcelHelpers.export(exports, "formatISODuration", ()=>(0, _indexJsDefault69.default));
parcelHelpers.export(exports, "formatRFC3339", ()=>(0, _indexJsDefault70.default));
parcelHelpers.export(exports, "formatRFC7231", ()=>(0, _indexJsDefault71.default));
parcelHelpers.export(exports, "formatRelative", ()=>(0, _indexJsDefault72.default));
parcelHelpers.export(exports, "fromUnixTime", ()=>(0, _indexJsDefault73.default));
parcelHelpers.export(exports, "getDate", ()=>(0, _indexJsDefault74.default));
parcelHelpers.export(exports, "getDay", ()=>(0, _indexJsDefault75.default));
parcelHelpers.export(exports, "getDayOfYear", ()=>(0, _indexJsDefault76.default));
parcelHelpers.export(exports, "getDaysInMonth", ()=>(0, _indexJsDefault77.default));
parcelHelpers.export(exports, "getDaysInYear", ()=>(0, _indexJsDefault78.default));
parcelHelpers.export(exports, "getDecade", ()=>(0, _indexJsDefault79.default));
parcelHelpers.export(exports, "getDefaultOptions", ()=>(0, _indexJsDefault80.default));
parcelHelpers.export(exports, "getHours", ()=>(0, _indexJsDefault81.default));
parcelHelpers.export(exports, "getISODay", ()=>(0, _indexJsDefault82.default));
parcelHelpers.export(exports, "getISOWeek", ()=>(0, _indexJsDefault83.default));
parcelHelpers.export(exports, "getISOWeekYear", ()=>(0, _indexJsDefault84.default));
parcelHelpers.export(exports, "getISOWeeksInYear", ()=>(0, _indexJsDefault85.default));
parcelHelpers.export(exports, "getMilliseconds", ()=>(0, _indexJsDefault86.default));
parcelHelpers.export(exports, "getMinutes", ()=>(0, _indexJsDefault87.default));
parcelHelpers.export(exports, "getMonth", ()=>(0, _indexJsDefault88.default));
parcelHelpers.export(exports, "getOverlappingDaysInIntervals", ()=>(0, _indexJsDefault89.default));
parcelHelpers.export(exports, "getQuarter", ()=>(0, _indexJsDefault90.default));
parcelHelpers.export(exports, "getSeconds", ()=>(0, _indexJsDefault91.default));
parcelHelpers.export(exports, "getTime", ()=>(0, _indexJsDefault92.default));
parcelHelpers.export(exports, "getUnixTime", ()=>(0, _indexJsDefault93.default));
parcelHelpers.export(exports, "getWeek", ()=>(0, _indexJsDefault94.default));
parcelHelpers.export(exports, "getWeekOfMonth", ()=>(0, _indexJsDefault95.default));
parcelHelpers.export(exports, "getWeekYear", ()=>(0, _indexJsDefault96.default));
parcelHelpers.export(exports, "getWeeksInMonth", ()=>(0, _indexJsDefault97.default));
parcelHelpers.export(exports, "getYear", ()=>(0, _indexJsDefault98.default));
parcelHelpers.export(exports, "hoursToMilliseconds", ()=>(0, _indexJsDefault99.default));
parcelHelpers.export(exports, "hoursToMinutes", ()=>(0, _indexJsDefault100.default));
parcelHelpers.export(exports, "hoursToSeconds", ()=>(0, _indexJsDefault101.default));
parcelHelpers.export(exports, "intervalToDuration", ()=>(0, _indexJsDefault102.default));
parcelHelpers.export(exports, "intlFormat", ()=>(0, _indexJsDefault103.default));
parcelHelpers.export(exports, "intlFormatDistance", ()=>(0, _indexJsDefault104.default));
parcelHelpers.export(exports, "isAfter", ()=>(0, _indexJsDefault105.default));
parcelHelpers.export(exports, "isBefore", ()=>(0, _indexJsDefault106.default));
parcelHelpers.export(exports, "isDate", ()=>(0, _indexJsDefault107.default));
parcelHelpers.export(exports, "isEqual", ()=>(0, _indexJsDefault108.default));
parcelHelpers.export(exports, "isExists", ()=>(0, _indexJsDefault109.default));
parcelHelpers.export(exports, "isFirstDayOfMonth", ()=>(0, _indexJsDefault110.default));
parcelHelpers.export(exports, "isFriday", ()=>(0, _indexJsDefault111.default));
parcelHelpers.export(exports, "isFuture", ()=>(0, _indexJsDefault112.default));
parcelHelpers.export(exports, "isLastDayOfMonth", ()=>(0, _indexJsDefault113.default));
parcelHelpers.export(exports, "isLeapYear", ()=>(0, _indexJsDefault114.default));
parcelHelpers.export(exports, "isMatch", ()=>(0, _indexJsDefault115.default));
parcelHelpers.export(exports, "isMonday", ()=>(0, _indexJsDefault116.default));
parcelHelpers.export(exports, "isPast", ()=>(0, _indexJsDefault117.default));
parcelHelpers.export(exports, "isSameDay", ()=>(0, _indexJsDefault118.default));
parcelHelpers.export(exports, "isSameHour", ()=>(0, _indexJsDefault119.default));
parcelHelpers.export(exports, "isSameISOWeek", ()=>(0, _indexJsDefault120.default));
parcelHelpers.export(exports, "isSameISOWeekYear", ()=>(0, _indexJsDefault121.default));
parcelHelpers.export(exports, "isSameMinute", ()=>(0, _indexJsDefault122.default));
parcelHelpers.export(exports, "isSameMonth", ()=>(0, _indexJsDefault123.default));
parcelHelpers.export(exports, "isSameQuarter", ()=>(0, _indexJsDefault124.default));
parcelHelpers.export(exports, "isSameSecond", ()=>(0, _indexJsDefault125.default));
parcelHelpers.export(exports, "isSameWeek", ()=>(0, _indexJsDefault126.default));
parcelHelpers.export(exports, "isSameYear", ()=>(0, _indexJsDefault127.default));
parcelHelpers.export(exports, "isSaturday", ()=>(0, _indexJsDefault128.default));
parcelHelpers.export(exports, "isSunday", ()=>(0, _indexJsDefault129.default));
parcelHelpers.export(exports, "isThisHour", ()=>(0, _indexJsDefault130.default));
parcelHelpers.export(exports, "isThisISOWeek", ()=>(0, _indexJsDefault131.default));
parcelHelpers.export(exports, "isThisMinute", ()=>(0, _indexJsDefault132.default));
parcelHelpers.export(exports, "isThisMonth", ()=>(0, _indexJsDefault133.default));
parcelHelpers.export(exports, "isThisQuarter", ()=>(0, _indexJsDefault134.default));
parcelHelpers.export(exports, "isThisSecond", ()=>(0, _indexJsDefault135.default));
parcelHelpers.export(exports, "isThisWeek", ()=>(0, _indexJsDefault136.default));
parcelHelpers.export(exports, "isThisYear", ()=>(0, _indexJsDefault137.default));
parcelHelpers.export(exports, "isThursday", ()=>(0, _indexJsDefault138.default));
parcelHelpers.export(exports, "isToday", ()=>(0, _indexJsDefault139.default));
parcelHelpers.export(exports, "isTomorrow", ()=>(0, _indexJsDefault140.default));
parcelHelpers.export(exports, "isTuesday", ()=>(0, _indexJsDefault141.default));
parcelHelpers.export(exports, "isValid", ()=>(0, _indexJsDefault142.default));
parcelHelpers.export(exports, "isWednesday", ()=>(0, _indexJsDefault143.default));
parcelHelpers.export(exports, "isWeekend", ()=>(0, _indexJsDefault144.default));
parcelHelpers.export(exports, "isWithinInterval", ()=>(0, _indexJsDefault145.default));
parcelHelpers.export(exports, "isYesterday", ()=>(0, _indexJsDefault146.default));
parcelHelpers.export(exports, "lastDayOfDecade", ()=>(0, _indexJsDefault147.default));
parcelHelpers.export(exports, "lastDayOfISOWeek", ()=>(0, _indexJsDefault148.default));
parcelHelpers.export(exports, "lastDayOfISOWeekYear", ()=>(0, _indexJsDefault149.default));
parcelHelpers.export(exports, "lastDayOfMonth", ()=>(0, _indexJsDefault150.default));
parcelHelpers.export(exports, "lastDayOfQuarter", ()=>(0, _indexJsDefault151.default));
parcelHelpers.export(exports, "lastDayOfWeek", ()=>(0, _indexJsDefault152.default));
parcelHelpers.export(exports, "lastDayOfYear", ()=>(0, _indexJsDefault153.default));
parcelHelpers.export(exports, "lightFormat", ()=>(0, _indexJsDefault154.default));
parcelHelpers.export(exports, "max", ()=>(0, _indexJsDefault155.default));
parcelHelpers.export(exports, "milliseconds", ()=>(0, _indexJsDefault156.default));
parcelHelpers.export(exports, "millisecondsToHours", ()=>(0, _indexJsDefault157.default));
parcelHelpers.export(exports, "millisecondsToMinutes", ()=>(0, _indexJsDefault158.default));
parcelHelpers.export(exports, "millisecondsToSeconds", ()=>(0, _indexJsDefault159.default));
parcelHelpers.export(exports, "min", ()=>(0, _indexJsDefault160.default));
parcelHelpers.export(exports, "minutesToHours", ()=>(0, _indexJsDefault161.default));
parcelHelpers.export(exports, "minutesToMilliseconds", ()=>(0, _indexJsDefault162.default));
parcelHelpers.export(exports, "minutesToSeconds", ()=>(0, _indexJsDefault163.default));
parcelHelpers.export(exports, "monthsToQuarters", ()=>(0, _indexJsDefault164.default));
parcelHelpers.export(exports, "monthsToYears", ()=>(0, _indexJsDefault165.default));
parcelHelpers.export(exports, "nextDay", ()=>(0, _indexJsDefault166.default));
parcelHelpers.export(exports, "nextFriday", ()=>(0, _indexJsDefault167.default));
parcelHelpers.export(exports, "nextMonday", ()=>(0, _indexJsDefault168.default));
parcelHelpers.export(exports, "nextSaturday", ()=>(0, _indexJsDefault169.default));
parcelHelpers.export(exports, "nextSunday", ()=>(0, _indexJsDefault170.default));
parcelHelpers.export(exports, "nextThursday", ()=>(0, _indexJsDefault171.default));
parcelHelpers.export(exports, "nextTuesday", ()=>(0, _indexJsDefault172.default));
parcelHelpers.export(exports, "nextWednesday", ()=>(0, _indexJsDefault173.default));
parcelHelpers.export(exports, "parse", ()=>(0, _indexJsDefault174.default));
parcelHelpers.export(exports, "parseISO", ()=>(0, _indexJsDefault175.default));
parcelHelpers.export(exports, "parseJSON", ()=>(0, _indexJsDefault176.default));
parcelHelpers.export(exports, "previousDay", ()=>(0, _indexJsDefault177.default));
parcelHelpers.export(exports, "previousFriday", ()=>(0, _indexJsDefault178.default));
parcelHelpers.export(exports, "previousMonday", ()=>(0, _indexJsDefault179.default));
parcelHelpers.export(exports, "previousSaturday", ()=>(0, _indexJsDefault180.default));
parcelHelpers.export(exports, "previousSunday", ()=>(0, _indexJsDefault181.default));
parcelHelpers.export(exports, "previousThursday", ()=>(0, _indexJsDefault182.default));
parcelHelpers.export(exports, "previousTuesday", ()=>(0, _indexJsDefault183.default));
parcelHelpers.export(exports, "previousWednesday", ()=>(0, _indexJsDefault184.default));
parcelHelpers.export(exports, "quartersToMonths", ()=>(0, _indexJsDefault185.default));
parcelHelpers.export(exports, "quartersToYears", ()=>(0, _indexJsDefault186.default));
parcelHelpers.export(exports, "roundToNearestMinutes", ()=>(0, _indexJsDefault187.default));
parcelHelpers.export(exports, "secondsToHours", ()=>(0, _indexJsDefault188.default));
parcelHelpers.export(exports, "secondsToMilliseconds", ()=>(0, _indexJsDefault189.default));
parcelHelpers.export(exports, "secondsToMinutes", ()=>(0, _indexJsDefault190.default));
parcelHelpers.export(exports, "set", ()=>(0, _indexJsDefault191.default));
parcelHelpers.export(exports, "setDate", ()=>(0, _indexJsDefault192.default));
parcelHelpers.export(exports, "setDay", ()=>(0, _indexJsDefault193.default));
parcelHelpers.export(exports, "setDayOfYear", ()=>(0, _indexJsDefault194.default));
parcelHelpers.export(exports, "setDefaultOptions", ()=>(0, _indexJsDefault195.default));
parcelHelpers.export(exports, "setHours", ()=>(0, _indexJsDefault196.default));
parcelHelpers.export(exports, "setISODay", ()=>(0, _indexJsDefault197.default));
parcelHelpers.export(exports, "setISOWeek", ()=>(0, _indexJsDefault198.default));
parcelHelpers.export(exports, "setISOWeekYear", ()=>(0, _indexJsDefault199.default));
parcelHelpers.export(exports, "setMilliseconds", ()=>(0, _indexJsDefault200.default));
parcelHelpers.export(exports, "setMinutes", ()=>(0, _indexJsDefault201.default));
parcelHelpers.export(exports, "setMonth", ()=>(0, _indexJsDefault202.default));
parcelHelpers.export(exports, "setQuarter", ()=>(0, _indexJsDefault203.default));
parcelHelpers.export(exports, "setSeconds", ()=>(0, _indexJsDefault204.default));
parcelHelpers.export(exports, "setWeek", ()=>(0, _indexJsDefault205.default));
parcelHelpers.export(exports, "setWeekYear", ()=>(0, _indexJsDefault206.default));
parcelHelpers.export(exports, "setYear", ()=>(0, _indexJsDefault207.default));
parcelHelpers.export(exports, "startOfDay", ()=>(0, _indexJsDefault208.default));
parcelHelpers.export(exports, "startOfDecade", ()=>(0, _indexJsDefault209.default));
parcelHelpers.export(exports, "startOfHour", ()=>(0, _indexJsDefault210.default));
parcelHelpers.export(exports, "startOfISOWeek", ()=>(0, _indexJsDefault211.default));
parcelHelpers.export(exports, "startOfISOWeekYear", ()=>(0, _indexJsDefault212.default));
parcelHelpers.export(exports, "startOfMinute", ()=>(0, _indexJsDefault213.default));
parcelHelpers.export(exports, "startOfMonth", ()=>(0, _indexJsDefault214.default));
parcelHelpers.export(exports, "startOfQuarter", ()=>(0, _indexJsDefault215.default));
parcelHelpers.export(exports, "startOfSecond", ()=>(0, _indexJsDefault216.default));
parcelHelpers.export(exports, "startOfToday", ()=>(0, _indexJsDefault217.default));
parcelHelpers.export(exports, "startOfTomorrow", ()=>(0, _indexJsDefault218.default));
parcelHelpers.export(exports, "startOfWeek", ()=>(0, _indexJsDefault219.default));
parcelHelpers.export(exports, "startOfWeekYear", ()=>(0, _indexJsDefault220.default));
parcelHelpers.export(exports, "startOfYear", ()=>(0, _indexJsDefault221.default));
parcelHelpers.export(exports, "startOfYesterday", ()=>(0, _indexJsDefault222.default));
parcelHelpers.export(exports, "sub", ()=>(0, _indexJsDefault223.default));
parcelHelpers.export(exports, "subBusinessDays", ()=>(0, _indexJsDefault224.default));
parcelHelpers.export(exports, "subDays", ()=>(0, _indexJsDefault225.default));
parcelHelpers.export(exports, "subHours", ()=>(0, _indexJsDefault226.default));
parcelHelpers.export(exports, "subISOWeekYears", ()=>(0, _indexJsDefault227.default));
parcelHelpers.export(exports, "subMilliseconds", ()=>(0, _indexJsDefault228.default));
parcelHelpers.export(exports, "subMinutes", ()=>(0, _indexJsDefault229.default));
parcelHelpers.export(exports, "subMonths", ()=>(0, _indexJsDefault230.default));
parcelHelpers.export(exports, "subQuarters", ()=>(0, _indexJsDefault231.default));
parcelHelpers.export(exports, "subSeconds", ()=>(0, _indexJsDefault232.default));
parcelHelpers.export(exports, "subWeeks", ()=>(0, _indexJsDefault233.default));
parcelHelpers.export(exports, "subYears", ()=>(0, _indexJsDefault234.default));
parcelHelpers.export(exports, "toDate", ()=>(0, _indexJsDefault235.default));
parcelHelpers.export(exports, "weeksToDays", ()=>(0, _indexJsDefault236.default));
parcelHelpers.export(exports, "yearsToMonths", ()=>(0, _indexJsDefault237.default));
parcelHelpers.export(exports, "yearsToQuarters", ()=>(0, _indexJsDefault238.default));
var _indexJs = require("./add/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./addBusinessDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./addDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./addHours/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./addISOWeekYears/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./addMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./addMinutes/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./addMonths/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./addQuarters/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./addSeconds/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./addWeeks/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _indexJs11 = require("./addYears/index.js");
var _indexJsDefault11 = parcelHelpers.interopDefault(_indexJs11);
var _indexJs12 = require("./areIntervalsOverlapping/index.js");
var _indexJsDefault12 = parcelHelpers.interopDefault(_indexJs12);
var _indexJs13 = require("./clamp/index.js");
var _indexJsDefault13 = parcelHelpers.interopDefault(_indexJs13);
var _indexJs14 = require("./closestIndexTo/index.js");
var _indexJsDefault14 = parcelHelpers.interopDefault(_indexJs14);
var _indexJs15 = require("./closestTo/index.js");
var _indexJsDefault15 = parcelHelpers.interopDefault(_indexJs15);
var _indexJs16 = require("./compareAsc/index.js");
var _indexJsDefault16 = parcelHelpers.interopDefault(_indexJs16);
var _indexJs17 = require("./compareDesc/index.js");
var _indexJsDefault17 = parcelHelpers.interopDefault(_indexJs17);
var _indexJs18 = require("./daysToWeeks/index.js");
var _indexJsDefault18 = parcelHelpers.interopDefault(_indexJs18);
var _indexJs19 = require("./differenceInBusinessDays/index.js");
var _indexJsDefault19 = parcelHelpers.interopDefault(_indexJs19);
var _indexJs20 = require("./differenceInCalendarDays/index.js");
var _indexJsDefault20 = parcelHelpers.interopDefault(_indexJs20);
var _indexJs21 = require("./differenceInCalendarISOWeekYears/index.js");
var _indexJsDefault21 = parcelHelpers.interopDefault(_indexJs21);
var _indexJs22 = require("./differenceInCalendarISOWeeks/index.js");
var _indexJsDefault22 = parcelHelpers.interopDefault(_indexJs22);
var _indexJs23 = require("./differenceInCalendarMonths/index.js");
var _indexJsDefault23 = parcelHelpers.interopDefault(_indexJs23);
var _indexJs24 = require("./differenceInCalendarQuarters/index.js");
var _indexJsDefault24 = parcelHelpers.interopDefault(_indexJs24);
var _indexJs25 = require("./differenceInCalendarWeeks/index.js");
var _indexJsDefault25 = parcelHelpers.interopDefault(_indexJs25);
var _indexJs26 = require("./differenceInCalendarYears/index.js");
var _indexJsDefault26 = parcelHelpers.interopDefault(_indexJs26);
var _indexJs27 = require("./differenceInDays/index.js");
var _indexJsDefault27 = parcelHelpers.interopDefault(_indexJs27);
var _indexJs28 = require("./differenceInHours/index.js");
var _indexJsDefault28 = parcelHelpers.interopDefault(_indexJs28);
var _indexJs29 = require("./differenceInISOWeekYears/index.js");
var _indexJsDefault29 = parcelHelpers.interopDefault(_indexJs29);
var _indexJs30 = require("./differenceInMilliseconds/index.js");
var _indexJsDefault30 = parcelHelpers.interopDefault(_indexJs30);
var _indexJs31 = require("./differenceInMinutes/index.js");
var _indexJsDefault31 = parcelHelpers.interopDefault(_indexJs31);
var _indexJs32 = require("./differenceInMonths/index.js");
var _indexJsDefault32 = parcelHelpers.interopDefault(_indexJs32);
var _indexJs33 = require("./differenceInQuarters/index.js");
var _indexJsDefault33 = parcelHelpers.interopDefault(_indexJs33);
var _indexJs34 = require("./differenceInSeconds/index.js");
var _indexJsDefault34 = parcelHelpers.interopDefault(_indexJs34);
var _indexJs35 = require("./differenceInWeeks/index.js");
var _indexJsDefault35 = parcelHelpers.interopDefault(_indexJs35);
var _indexJs36 = require("./differenceInYears/index.js");
var _indexJsDefault36 = parcelHelpers.interopDefault(_indexJs36);
var _indexJs37 = require("./eachDayOfInterval/index.js");
var _indexJsDefault37 = parcelHelpers.interopDefault(_indexJs37);
var _indexJs38 = require("./eachHourOfInterval/index.js");
var _indexJsDefault38 = parcelHelpers.interopDefault(_indexJs38);
var _indexJs39 = require("./eachMinuteOfInterval/index.js");
var _indexJsDefault39 = parcelHelpers.interopDefault(_indexJs39);
var _indexJs40 = require("./eachMonthOfInterval/index.js");
var _indexJsDefault40 = parcelHelpers.interopDefault(_indexJs40);
var _indexJs41 = require("./eachQuarterOfInterval/index.js");
var _indexJsDefault41 = parcelHelpers.interopDefault(_indexJs41);
var _indexJs42 = require("./eachWeekOfInterval/index.js");
var _indexJsDefault42 = parcelHelpers.interopDefault(_indexJs42);
var _indexJs43 = require("./eachWeekendOfInterval/index.js");
var _indexJsDefault43 = parcelHelpers.interopDefault(_indexJs43);
var _indexJs44 = require("./eachWeekendOfMonth/index.js");
var _indexJsDefault44 = parcelHelpers.interopDefault(_indexJs44);
var _indexJs45 = require("./eachWeekendOfYear/index.js");
var _indexJsDefault45 = parcelHelpers.interopDefault(_indexJs45);
var _indexJs46 = require("./eachYearOfInterval/index.js");
var _indexJsDefault46 = parcelHelpers.interopDefault(_indexJs46);
var _indexJs47 = require("./endOfDay/index.js");
var _indexJsDefault47 = parcelHelpers.interopDefault(_indexJs47);
var _indexJs48 = require("./endOfDecade/index.js");
var _indexJsDefault48 = parcelHelpers.interopDefault(_indexJs48);
var _indexJs49 = require("./endOfHour/index.js");
var _indexJsDefault49 = parcelHelpers.interopDefault(_indexJs49);
var _indexJs50 = require("./endOfISOWeek/index.js");
var _indexJsDefault50 = parcelHelpers.interopDefault(_indexJs50);
var _indexJs51 = require("./endOfISOWeekYear/index.js");
var _indexJsDefault51 = parcelHelpers.interopDefault(_indexJs51);
var _indexJs52 = require("./endOfMinute/index.js");
var _indexJsDefault52 = parcelHelpers.interopDefault(_indexJs52);
var _indexJs53 = require("./endOfMonth/index.js");
var _indexJsDefault53 = parcelHelpers.interopDefault(_indexJs53);
var _indexJs54 = require("./endOfQuarter/index.js");
var _indexJsDefault54 = parcelHelpers.interopDefault(_indexJs54);
var _indexJs55 = require("./endOfSecond/index.js");
var _indexJsDefault55 = parcelHelpers.interopDefault(_indexJs55);
var _indexJs56 = require("./endOfToday/index.js");
var _indexJsDefault56 = parcelHelpers.interopDefault(_indexJs56);
var _indexJs57 = require("./endOfTomorrow/index.js");
var _indexJsDefault57 = parcelHelpers.interopDefault(_indexJs57);
var _indexJs58 = require("./endOfWeek/index.js");
var _indexJsDefault58 = parcelHelpers.interopDefault(_indexJs58);
var _indexJs59 = require("./endOfYear/index.js");
var _indexJsDefault59 = parcelHelpers.interopDefault(_indexJs59);
var _indexJs60 = require("./endOfYesterday/index.js");
var _indexJsDefault60 = parcelHelpers.interopDefault(_indexJs60);
var _indexJs61 = require("./format/index.js");
var _indexJsDefault61 = parcelHelpers.interopDefault(_indexJs61);
var _indexJs62 = require("./formatDistance/index.js");
var _indexJsDefault62 = parcelHelpers.interopDefault(_indexJs62);
var _indexJs63 = require("./formatDistanceStrict/index.js");
var _indexJsDefault63 = parcelHelpers.interopDefault(_indexJs63);
var _indexJs64 = require("./formatDistanceToNow/index.js");
var _indexJsDefault64 = parcelHelpers.interopDefault(_indexJs64);
var _indexJs65 = require("./formatDistanceToNowStrict/index.js");
var _indexJsDefault65 = parcelHelpers.interopDefault(_indexJs65);
var _indexJs66 = require("./formatDuration/index.js");
var _indexJsDefault66 = parcelHelpers.interopDefault(_indexJs66);
var _indexJs67 = require("./formatISO/index.js");
var _indexJsDefault67 = parcelHelpers.interopDefault(_indexJs67);
var _indexJs68 = require("./formatISO9075/index.js");
var _indexJsDefault68 = parcelHelpers.interopDefault(_indexJs68);
var _indexJs69 = require("./formatISODuration/index.js");
var _indexJsDefault69 = parcelHelpers.interopDefault(_indexJs69);
var _indexJs70 = require("./formatRFC3339/index.js");
var _indexJsDefault70 = parcelHelpers.interopDefault(_indexJs70);
var _indexJs71 = require("./formatRFC7231/index.js");
var _indexJsDefault71 = parcelHelpers.interopDefault(_indexJs71);
var _indexJs72 = require("./formatRelative/index.js");
var _indexJsDefault72 = parcelHelpers.interopDefault(_indexJs72);
var _indexJs73 = require("./fromUnixTime/index.js");
var _indexJsDefault73 = parcelHelpers.interopDefault(_indexJs73);
var _indexJs74 = require("./getDate/index.js");
var _indexJsDefault74 = parcelHelpers.interopDefault(_indexJs74);
var _indexJs75 = require("./getDay/index.js");
var _indexJsDefault75 = parcelHelpers.interopDefault(_indexJs75);
var _indexJs76 = require("./getDayOfYear/index.js");
var _indexJsDefault76 = parcelHelpers.interopDefault(_indexJs76);
var _indexJs77 = require("./getDaysInMonth/index.js");
var _indexJsDefault77 = parcelHelpers.interopDefault(_indexJs77);
var _indexJs78 = require("./getDaysInYear/index.js");
var _indexJsDefault78 = parcelHelpers.interopDefault(_indexJs78);
var _indexJs79 = require("./getDecade/index.js");
var _indexJsDefault79 = parcelHelpers.interopDefault(_indexJs79);
var _indexJs80 = require("./getDefaultOptions/index.js");
var _indexJsDefault80 = parcelHelpers.interopDefault(_indexJs80);
var _indexJs81 = require("./getHours/index.js");
var _indexJsDefault81 = parcelHelpers.interopDefault(_indexJs81);
var _indexJs82 = require("./getISODay/index.js");
var _indexJsDefault82 = parcelHelpers.interopDefault(_indexJs82);
var _indexJs83 = require("./getISOWeek/index.js");
var _indexJsDefault83 = parcelHelpers.interopDefault(_indexJs83);
var _indexJs84 = require("./getISOWeekYear/index.js");
var _indexJsDefault84 = parcelHelpers.interopDefault(_indexJs84);
var _indexJs85 = require("./getISOWeeksInYear/index.js");
var _indexJsDefault85 = parcelHelpers.interopDefault(_indexJs85);
var _indexJs86 = require("./getMilliseconds/index.js");
var _indexJsDefault86 = parcelHelpers.interopDefault(_indexJs86);
var _indexJs87 = require("./getMinutes/index.js");
var _indexJsDefault87 = parcelHelpers.interopDefault(_indexJs87);
var _indexJs88 = require("./getMonth/index.js");
var _indexJsDefault88 = parcelHelpers.interopDefault(_indexJs88);
var _indexJs89 = require("./getOverlappingDaysInIntervals/index.js");
var _indexJsDefault89 = parcelHelpers.interopDefault(_indexJs89);
var _indexJs90 = require("./getQuarter/index.js");
var _indexJsDefault90 = parcelHelpers.interopDefault(_indexJs90);
var _indexJs91 = require("./getSeconds/index.js");
var _indexJsDefault91 = parcelHelpers.interopDefault(_indexJs91);
var _indexJs92 = require("./getTime/index.js");
var _indexJsDefault92 = parcelHelpers.interopDefault(_indexJs92);
var _indexJs93 = require("./getUnixTime/index.js");
var _indexJsDefault93 = parcelHelpers.interopDefault(_indexJs93);
var _indexJs94 = require("./getWeek/index.js");
var _indexJsDefault94 = parcelHelpers.interopDefault(_indexJs94);
var _indexJs95 = require("./getWeekOfMonth/index.js");
var _indexJsDefault95 = parcelHelpers.interopDefault(_indexJs95);
var _indexJs96 = require("./getWeekYear/index.js");
var _indexJsDefault96 = parcelHelpers.interopDefault(_indexJs96);
var _indexJs97 = require("./getWeeksInMonth/index.js");
var _indexJsDefault97 = parcelHelpers.interopDefault(_indexJs97);
var _indexJs98 = require("./getYear/index.js");
var _indexJsDefault98 = parcelHelpers.interopDefault(_indexJs98);
var _indexJs99 = require("./hoursToMilliseconds/index.js");
var _indexJsDefault99 = parcelHelpers.interopDefault(_indexJs99);
var _indexJs100 = require("./hoursToMinutes/index.js");
var _indexJsDefault100 = parcelHelpers.interopDefault(_indexJs100);
var _indexJs101 = require("./hoursToSeconds/index.js");
var _indexJsDefault101 = parcelHelpers.interopDefault(_indexJs101);
var _indexJs102 = require("./intervalToDuration/index.js");
var _indexJsDefault102 = parcelHelpers.interopDefault(_indexJs102);
var _indexJs103 = require("./intlFormat/index.js");
var _indexJsDefault103 = parcelHelpers.interopDefault(_indexJs103);
var _indexJs104 = require("./intlFormatDistance/index.js");
var _indexJsDefault104 = parcelHelpers.interopDefault(_indexJs104);
var _indexJs105 = require("./isAfter/index.js");
var _indexJsDefault105 = parcelHelpers.interopDefault(_indexJs105);
var _indexJs106 = require("./isBefore/index.js");
var _indexJsDefault106 = parcelHelpers.interopDefault(_indexJs106);
var _indexJs107 = require("./isDate/index.js");
var _indexJsDefault107 = parcelHelpers.interopDefault(_indexJs107);
var _indexJs108 = require("./isEqual/index.js");
var _indexJsDefault108 = parcelHelpers.interopDefault(_indexJs108);
var _indexJs109 = require("./isExists/index.js");
var _indexJsDefault109 = parcelHelpers.interopDefault(_indexJs109);
var _indexJs110 = require("./isFirstDayOfMonth/index.js");
var _indexJsDefault110 = parcelHelpers.interopDefault(_indexJs110);
var _indexJs111 = require("./isFriday/index.js");
var _indexJsDefault111 = parcelHelpers.interopDefault(_indexJs111);
var _indexJs112 = require("./isFuture/index.js");
var _indexJsDefault112 = parcelHelpers.interopDefault(_indexJs112);
var _indexJs113 = require("./isLastDayOfMonth/index.js");
var _indexJsDefault113 = parcelHelpers.interopDefault(_indexJs113);
var _indexJs114 = require("./isLeapYear/index.js");
var _indexJsDefault114 = parcelHelpers.interopDefault(_indexJs114);
var _indexJs115 = require("./isMatch/index.js");
var _indexJsDefault115 = parcelHelpers.interopDefault(_indexJs115);
var _indexJs116 = require("./isMonday/index.js");
var _indexJsDefault116 = parcelHelpers.interopDefault(_indexJs116);
var _indexJs117 = require("./isPast/index.js");
var _indexJsDefault117 = parcelHelpers.interopDefault(_indexJs117);
var _indexJs118 = require("./isSameDay/index.js");
var _indexJsDefault118 = parcelHelpers.interopDefault(_indexJs118);
var _indexJs119 = require("./isSameHour/index.js");
var _indexJsDefault119 = parcelHelpers.interopDefault(_indexJs119);
var _indexJs120 = require("./isSameISOWeek/index.js");
var _indexJsDefault120 = parcelHelpers.interopDefault(_indexJs120);
var _indexJs121 = require("./isSameISOWeekYear/index.js");
var _indexJsDefault121 = parcelHelpers.interopDefault(_indexJs121);
var _indexJs122 = require("./isSameMinute/index.js");
var _indexJsDefault122 = parcelHelpers.interopDefault(_indexJs122);
var _indexJs123 = require("./isSameMonth/index.js");
var _indexJsDefault123 = parcelHelpers.interopDefault(_indexJs123);
var _indexJs124 = require("./isSameQuarter/index.js");
var _indexJsDefault124 = parcelHelpers.interopDefault(_indexJs124);
var _indexJs125 = require("./isSameSecond/index.js");
var _indexJsDefault125 = parcelHelpers.interopDefault(_indexJs125);
var _indexJs126 = require("./isSameWeek/index.js");
var _indexJsDefault126 = parcelHelpers.interopDefault(_indexJs126);
var _indexJs127 = require("./isSameYear/index.js");
var _indexJsDefault127 = parcelHelpers.interopDefault(_indexJs127);
var _indexJs128 = require("./isSaturday/index.js");
var _indexJsDefault128 = parcelHelpers.interopDefault(_indexJs128);
var _indexJs129 = require("./isSunday/index.js");
var _indexJsDefault129 = parcelHelpers.interopDefault(_indexJs129);
var _indexJs130 = require("./isThisHour/index.js");
var _indexJsDefault130 = parcelHelpers.interopDefault(_indexJs130);
var _indexJs131 = require("./isThisISOWeek/index.js");
var _indexJsDefault131 = parcelHelpers.interopDefault(_indexJs131);
var _indexJs132 = require("./isThisMinute/index.js");
var _indexJsDefault132 = parcelHelpers.interopDefault(_indexJs132);
var _indexJs133 = require("./isThisMonth/index.js");
var _indexJsDefault133 = parcelHelpers.interopDefault(_indexJs133);
var _indexJs134 = require("./isThisQuarter/index.js");
var _indexJsDefault134 = parcelHelpers.interopDefault(_indexJs134);
var _indexJs135 = require("./isThisSecond/index.js");
var _indexJsDefault135 = parcelHelpers.interopDefault(_indexJs135);
var _indexJs136 = require("./isThisWeek/index.js");
var _indexJsDefault136 = parcelHelpers.interopDefault(_indexJs136);
var _indexJs137 = require("./isThisYear/index.js");
var _indexJsDefault137 = parcelHelpers.interopDefault(_indexJs137);
var _indexJs138 = require("./isThursday/index.js");
var _indexJsDefault138 = parcelHelpers.interopDefault(_indexJs138);
var _indexJs139 = require("./isToday/index.js");
var _indexJsDefault139 = parcelHelpers.interopDefault(_indexJs139);
var _indexJs140 = require("./isTomorrow/index.js");
var _indexJsDefault140 = parcelHelpers.interopDefault(_indexJs140);
var _indexJs141 = require("./isTuesday/index.js");
var _indexJsDefault141 = parcelHelpers.interopDefault(_indexJs141);
var _indexJs142 = require("./isValid/index.js");
var _indexJsDefault142 = parcelHelpers.interopDefault(_indexJs142);
var _indexJs143 = require("./isWednesday/index.js");
var _indexJsDefault143 = parcelHelpers.interopDefault(_indexJs143);
var _indexJs144 = require("./isWeekend/index.js");
var _indexJsDefault144 = parcelHelpers.interopDefault(_indexJs144);
var _indexJs145 = require("./isWithinInterval/index.js");
var _indexJsDefault145 = parcelHelpers.interopDefault(_indexJs145);
var _indexJs146 = require("./isYesterday/index.js");
var _indexJsDefault146 = parcelHelpers.interopDefault(_indexJs146);
var _indexJs147 = require("./lastDayOfDecade/index.js");
var _indexJsDefault147 = parcelHelpers.interopDefault(_indexJs147);
var _indexJs148 = require("./lastDayOfISOWeek/index.js");
var _indexJsDefault148 = parcelHelpers.interopDefault(_indexJs148);
var _indexJs149 = require("./lastDayOfISOWeekYear/index.js");
var _indexJsDefault149 = parcelHelpers.interopDefault(_indexJs149);
var _indexJs150 = require("./lastDayOfMonth/index.js");
var _indexJsDefault150 = parcelHelpers.interopDefault(_indexJs150);
var _indexJs151 = require("./lastDayOfQuarter/index.js");
var _indexJsDefault151 = parcelHelpers.interopDefault(_indexJs151);
var _indexJs152 = require("./lastDayOfWeek/index.js");
var _indexJsDefault152 = parcelHelpers.interopDefault(_indexJs152);
var _indexJs153 = require("./lastDayOfYear/index.js");
var _indexJsDefault153 = parcelHelpers.interopDefault(_indexJs153);
var _indexJs154 = require("./lightFormat/index.js");
var _indexJsDefault154 = parcelHelpers.interopDefault(_indexJs154);
var _indexJs155 = require("./max/index.js");
var _indexJsDefault155 = parcelHelpers.interopDefault(_indexJs155);
var _indexJs156 = require("./milliseconds/index.js");
var _indexJsDefault156 = parcelHelpers.interopDefault(_indexJs156);
var _indexJs157 = require("./millisecondsToHours/index.js");
var _indexJsDefault157 = parcelHelpers.interopDefault(_indexJs157);
var _indexJs158 = require("./millisecondsToMinutes/index.js");
var _indexJsDefault158 = parcelHelpers.interopDefault(_indexJs158);
var _indexJs159 = require("./millisecondsToSeconds/index.js");
var _indexJsDefault159 = parcelHelpers.interopDefault(_indexJs159);
var _indexJs160 = require("./min/index.js");
var _indexJsDefault160 = parcelHelpers.interopDefault(_indexJs160);
var _indexJs161 = require("./minutesToHours/index.js");
var _indexJsDefault161 = parcelHelpers.interopDefault(_indexJs161);
var _indexJs162 = require("./minutesToMilliseconds/index.js");
var _indexJsDefault162 = parcelHelpers.interopDefault(_indexJs162);
var _indexJs163 = require("./minutesToSeconds/index.js");
var _indexJsDefault163 = parcelHelpers.interopDefault(_indexJs163);
var _indexJs164 = require("./monthsToQuarters/index.js");
var _indexJsDefault164 = parcelHelpers.interopDefault(_indexJs164);
var _indexJs165 = require("./monthsToYears/index.js");
var _indexJsDefault165 = parcelHelpers.interopDefault(_indexJs165);
var _indexJs166 = require("./nextDay/index.js");
var _indexJsDefault166 = parcelHelpers.interopDefault(_indexJs166);
var _indexJs167 = require("./nextFriday/index.js");
var _indexJsDefault167 = parcelHelpers.interopDefault(_indexJs167);
var _indexJs168 = require("./nextMonday/index.js");
var _indexJsDefault168 = parcelHelpers.interopDefault(_indexJs168);
var _indexJs169 = require("./nextSaturday/index.js");
var _indexJsDefault169 = parcelHelpers.interopDefault(_indexJs169);
var _indexJs170 = require("./nextSunday/index.js");
var _indexJsDefault170 = parcelHelpers.interopDefault(_indexJs170);
var _indexJs171 = require("./nextThursday/index.js");
var _indexJsDefault171 = parcelHelpers.interopDefault(_indexJs171);
var _indexJs172 = require("./nextTuesday/index.js");
var _indexJsDefault172 = parcelHelpers.interopDefault(_indexJs172);
var _indexJs173 = require("./nextWednesday/index.js");
var _indexJsDefault173 = parcelHelpers.interopDefault(_indexJs173);
var _indexJs174 = require("./parse/index.js");
var _indexJsDefault174 = parcelHelpers.interopDefault(_indexJs174);
var _indexJs175 = require("./parseISO/index.js");
var _indexJsDefault175 = parcelHelpers.interopDefault(_indexJs175);
var _indexJs176 = require("./parseJSON/index.js");
var _indexJsDefault176 = parcelHelpers.interopDefault(_indexJs176);
var _indexJs177 = require("./previousDay/index.js");
var _indexJsDefault177 = parcelHelpers.interopDefault(_indexJs177);
var _indexJs178 = require("./previousFriday/index.js");
var _indexJsDefault178 = parcelHelpers.interopDefault(_indexJs178);
var _indexJs179 = require("./previousMonday/index.js");
var _indexJsDefault179 = parcelHelpers.interopDefault(_indexJs179);
var _indexJs180 = require("./previousSaturday/index.js");
var _indexJsDefault180 = parcelHelpers.interopDefault(_indexJs180);
var _indexJs181 = require("./previousSunday/index.js");
var _indexJsDefault181 = parcelHelpers.interopDefault(_indexJs181);
var _indexJs182 = require("./previousThursday/index.js");
var _indexJsDefault182 = parcelHelpers.interopDefault(_indexJs182);
var _indexJs183 = require("./previousTuesday/index.js");
var _indexJsDefault183 = parcelHelpers.interopDefault(_indexJs183);
var _indexJs184 = require("./previousWednesday/index.js");
var _indexJsDefault184 = parcelHelpers.interopDefault(_indexJs184);
var _indexJs185 = require("./quartersToMonths/index.js");
var _indexJsDefault185 = parcelHelpers.interopDefault(_indexJs185);
var _indexJs186 = require("./quartersToYears/index.js");
var _indexJsDefault186 = parcelHelpers.interopDefault(_indexJs186);
var _indexJs187 = require("./roundToNearestMinutes/index.js");
var _indexJsDefault187 = parcelHelpers.interopDefault(_indexJs187);
var _indexJs188 = require("./secondsToHours/index.js");
var _indexJsDefault188 = parcelHelpers.interopDefault(_indexJs188);
var _indexJs189 = require("./secondsToMilliseconds/index.js");
var _indexJsDefault189 = parcelHelpers.interopDefault(_indexJs189);
var _indexJs190 = require("./secondsToMinutes/index.js");
var _indexJsDefault190 = parcelHelpers.interopDefault(_indexJs190);
var _indexJs191 = require("./set/index.js");
var _indexJsDefault191 = parcelHelpers.interopDefault(_indexJs191);
var _indexJs192 = require("./setDate/index.js");
var _indexJsDefault192 = parcelHelpers.interopDefault(_indexJs192);
var _indexJs193 = require("./setDay/index.js");
var _indexJsDefault193 = parcelHelpers.interopDefault(_indexJs193);
var _indexJs194 = require("./setDayOfYear/index.js");
var _indexJsDefault194 = parcelHelpers.interopDefault(_indexJs194);
var _indexJs195 = require("./setDefaultOptions/index.js");
var _indexJsDefault195 = parcelHelpers.interopDefault(_indexJs195);
var _indexJs196 = require("./setHours/index.js");
var _indexJsDefault196 = parcelHelpers.interopDefault(_indexJs196);
var _indexJs197 = require("./setISODay/index.js");
var _indexJsDefault197 = parcelHelpers.interopDefault(_indexJs197);
var _indexJs198 = require("./setISOWeek/index.js");
var _indexJsDefault198 = parcelHelpers.interopDefault(_indexJs198);
var _indexJs199 = require("./setISOWeekYear/index.js");
var _indexJsDefault199 = parcelHelpers.interopDefault(_indexJs199);
var _indexJs200 = require("./setMilliseconds/index.js");
var _indexJsDefault200 = parcelHelpers.interopDefault(_indexJs200);
var _indexJs201 = require("./setMinutes/index.js");
var _indexJsDefault201 = parcelHelpers.interopDefault(_indexJs201);
var _indexJs202 = require("./setMonth/index.js");
var _indexJsDefault202 = parcelHelpers.interopDefault(_indexJs202);
var _indexJs203 = require("./setQuarter/index.js");
var _indexJsDefault203 = parcelHelpers.interopDefault(_indexJs203);
var _indexJs204 = require("./setSeconds/index.js");
var _indexJsDefault204 = parcelHelpers.interopDefault(_indexJs204);
var _indexJs205 = require("./setWeek/index.js");
var _indexJsDefault205 = parcelHelpers.interopDefault(_indexJs205);
var _indexJs206 = require("./setWeekYear/index.js");
var _indexJsDefault206 = parcelHelpers.interopDefault(_indexJs206);
var _indexJs207 = require("./setYear/index.js");
var _indexJsDefault207 = parcelHelpers.interopDefault(_indexJs207);
var _indexJs208 = require("./startOfDay/index.js");
var _indexJsDefault208 = parcelHelpers.interopDefault(_indexJs208);
var _indexJs209 = require("./startOfDecade/index.js");
var _indexJsDefault209 = parcelHelpers.interopDefault(_indexJs209);
var _indexJs210 = require("./startOfHour/index.js");
var _indexJsDefault210 = parcelHelpers.interopDefault(_indexJs210);
var _indexJs211 = require("./startOfISOWeek/index.js");
var _indexJsDefault211 = parcelHelpers.interopDefault(_indexJs211);
var _indexJs212 = require("./startOfISOWeekYear/index.js");
var _indexJsDefault212 = parcelHelpers.interopDefault(_indexJs212);
var _indexJs213 = require("./startOfMinute/index.js");
var _indexJsDefault213 = parcelHelpers.interopDefault(_indexJs213);
var _indexJs214 = require("./startOfMonth/index.js");
var _indexJsDefault214 = parcelHelpers.interopDefault(_indexJs214);
var _indexJs215 = require("./startOfQuarter/index.js");
var _indexJsDefault215 = parcelHelpers.interopDefault(_indexJs215);
var _indexJs216 = require("./startOfSecond/index.js");
var _indexJsDefault216 = parcelHelpers.interopDefault(_indexJs216);
var _indexJs217 = require("./startOfToday/index.js");
var _indexJsDefault217 = parcelHelpers.interopDefault(_indexJs217);
var _indexJs218 = require("./startOfTomorrow/index.js");
var _indexJsDefault218 = parcelHelpers.interopDefault(_indexJs218);
var _indexJs219 = require("./startOfWeek/index.js");
var _indexJsDefault219 = parcelHelpers.interopDefault(_indexJs219);
var _indexJs220 = require("./startOfWeekYear/index.js");
var _indexJsDefault220 = parcelHelpers.interopDefault(_indexJs220);
var _indexJs221 = require("./startOfYear/index.js");
var _indexJsDefault221 = parcelHelpers.interopDefault(_indexJs221);
var _indexJs222 = require("./startOfYesterday/index.js");
var _indexJsDefault222 = parcelHelpers.interopDefault(_indexJs222);
var _indexJs223 = require("./sub/index.js");
var _indexJsDefault223 = parcelHelpers.interopDefault(_indexJs223);
var _indexJs224 = require("./subBusinessDays/index.js");
var _indexJsDefault224 = parcelHelpers.interopDefault(_indexJs224);
var _indexJs225 = require("./subDays/index.js");
var _indexJsDefault225 = parcelHelpers.interopDefault(_indexJs225);
var _indexJs226 = require("./subHours/index.js");
var _indexJsDefault226 = parcelHelpers.interopDefault(_indexJs226);
var _indexJs227 = require("./subISOWeekYears/index.js");
var _indexJsDefault227 = parcelHelpers.interopDefault(_indexJs227);
var _indexJs228 = require("./subMilliseconds/index.js");
var _indexJsDefault228 = parcelHelpers.interopDefault(_indexJs228);
var _indexJs229 = require("./subMinutes/index.js");
var _indexJsDefault229 = parcelHelpers.interopDefault(_indexJs229);
var _indexJs230 = require("./subMonths/index.js");
var _indexJsDefault230 = parcelHelpers.interopDefault(_indexJs230);
var _indexJs231 = require("./subQuarters/index.js");
var _indexJsDefault231 = parcelHelpers.interopDefault(_indexJs231);
var _indexJs232 = require("./subSeconds/index.js");
var _indexJsDefault232 = parcelHelpers.interopDefault(_indexJs232);
var _indexJs233 = require("./subWeeks/index.js");
var _indexJsDefault233 = parcelHelpers.interopDefault(_indexJs233);
var _indexJs234 = require("./subYears/index.js");
var _indexJsDefault234 = parcelHelpers.interopDefault(_indexJs234);
var _indexJs235 = require("./toDate/index.js");
var _indexJsDefault235 = parcelHelpers.interopDefault(_indexJs235);
var _indexJs236 = require("./weeksToDays/index.js");
var _indexJsDefault236 = parcelHelpers.interopDefault(_indexJs236);
var _indexJs237 = require("./yearsToMonths/index.js");
var _indexJsDefault237 = parcelHelpers.interopDefault(_indexJs237);
var _indexJs238 = require("./yearsToQuarters/index.js");
var _indexJsDefault238 = parcelHelpers.interopDefault(_indexJs238);
var _indexJs239 = require("./constants/index.js");
parcelHelpers.exportAll(_indexJs239, exports);

},{"./add/index.js":"h7zb2","./addBusinessDays/index.js":"O4ld6","./addDays/index.js":"g6fAH","./addHours/index.js":"6s0f5","./addISOWeekYears/index.js":"cPWmk","./addMilliseconds/index.js":"7Tp9s","./addMinutes/index.js":"fZ0OC","./addMonths/index.js":"hES3W","./addQuarters/index.js":"c1KfH","./addSeconds/index.js":"foXxx","./addWeeks/index.js":"gPOA0","./addYears/index.js":"g0YQq","./areIntervalsOverlapping/index.js":"8H8km","./clamp/index.js":"gXC0L","./closestIndexTo/index.js":"b81Ly","./closestTo/index.js":"b7NNO","./compareAsc/index.js":"h01l4","./compareDesc/index.js":"3KzED","./daysToWeeks/index.js":"lKPIF","./differenceInBusinessDays/index.js":"34m3y","./differenceInCalendarDays/index.js":"adZXy","./differenceInCalendarISOWeekYears/index.js":"4D0W0","./differenceInCalendarISOWeeks/index.js":"hfMMJ","./differenceInCalendarMonths/index.js":"8oypH","./differenceInCalendarQuarters/index.js":"bgfRW","./differenceInCalendarWeeks/index.js":"7Le9T","./differenceInCalendarYears/index.js":"f4WIY","./differenceInDays/index.js":"1mpAo","./differenceInHours/index.js":"9Vac7","./differenceInISOWeekYears/index.js":"bDaH9","./differenceInMilliseconds/index.js":"Eb6qZ","./differenceInMinutes/index.js":"4Qv17","./differenceInMonths/index.js":"8lj6Z","./differenceInQuarters/index.js":"55zSJ","./differenceInSeconds/index.js":"5uZgU","./differenceInWeeks/index.js":"8EidL","./differenceInYears/index.js":"2tncr","./eachDayOfInterval/index.js":"a6iyr","./eachHourOfInterval/index.js":"3OI93","./eachMinuteOfInterval/index.js":"b8VGF","./eachMonthOfInterval/index.js":"jPOjf","./eachQuarterOfInterval/index.js":"iUMoa","./eachWeekOfInterval/index.js":"hFCm6","./eachWeekendOfInterval/index.js":"gO2Cl","./eachWeekendOfMonth/index.js":"kiJXc","./eachWeekendOfYear/index.js":"2QMF6","./eachYearOfInterval/index.js":"97N8I","./endOfDay/index.js":"kLkh7","./endOfDecade/index.js":"1writ","./endOfHour/index.js":"eMgQO","./endOfISOWeek/index.js":"2KsgN","./endOfISOWeekYear/index.js":"lfisj","./endOfMinute/index.js":"gw4uA","./endOfMonth/index.js":"4tHlS","./endOfQuarter/index.js":"ajYge","./endOfSecond/index.js":"1JZ5k","./endOfToday/index.js":"7eH17","./endOfTomorrow/index.js":"kfyjL","./endOfWeek/index.js":"5zQJ5","./endOfYear/index.js":"kAT7v","./endOfYesterday/index.js":"cnkmB","./format/index.js":"lnm6V","./formatDistance/index.js":"lPnhm","./formatDistanceStrict/index.js":"gN5ZD","./formatDistanceToNow/index.js":"kV5oc","./formatDistanceToNowStrict/index.js":"9FmDM","./formatDuration/index.js":"gZD5H","./formatISO/index.js":"lbaH6","./formatISO9075/index.js":"lReZa","./formatISODuration/index.js":"iFSRd","./formatRFC3339/index.js":"cNE6k","./formatRFC7231/index.js":"56K9a","./formatRelative/index.js":"k1fV5","./fromUnixTime/index.js":"zfeMe","./getDate/index.js":"754fh","./getDay/index.js":"jNMnL","./getDayOfYear/index.js":"7jK3j","./getDaysInMonth/index.js":"d31S3","./getDaysInYear/index.js":"7P4ES","./getDecade/index.js":"lbqEx","./getDefaultOptions/index.js":"5eSfl","./getHours/index.js":"k3IR8","./getISODay/index.js":"51Xb0","./getISOWeek/index.js":"hp1by","./getISOWeekYear/index.js":"bI5NI","./getISOWeeksInYear/index.js":"1w5ZO","./getMilliseconds/index.js":"lHyw5","./getMinutes/index.js":"4kIX6","./getMonth/index.js":"f3U40","./getOverlappingDaysInIntervals/index.js":"17c0H","./getQuarter/index.js":"ghgKl","./getSeconds/index.js":"cZ7mt","./getTime/index.js":"1UhOp","./getUnixTime/index.js":"9kv80","./getWeek/index.js":"8sqtB","./getWeekOfMonth/index.js":"ib5n1","./getWeekYear/index.js":"aNYMo","./getWeeksInMonth/index.js":"jaE4J","./getYear/index.js":"U2SFP","./hoursToMilliseconds/index.js":"jsXWh","./hoursToMinutes/index.js":"iKCoT","./hoursToSeconds/index.js":"bwPIg","./intervalToDuration/index.js":"5hNtu","./intlFormat/index.js":"3jNm6","./intlFormatDistance/index.js":"gKVnj","./isAfter/index.js":"4VQv8","./isBefore/index.js":"CNBdH","./isDate/index.js":"kqNhT","./isEqual/index.js":"8JhlH","./isExists/index.js":"jvlDW","./isFirstDayOfMonth/index.js":"gOq2g","./isFriday/index.js":"4Ebbi","./isFuture/index.js":"bpCF8","./isLastDayOfMonth/index.js":"1as6x","./isLeapYear/index.js":"6KuLK","./isMatch/index.js":"dbqMp","./isMonday/index.js":"d0i8V","./isPast/index.js":"3SVMT","./isSameDay/index.js":"jEo6n","./isSameHour/index.js":"742NB","./isSameISOWeek/index.js":"3dXq3","./isSameISOWeekYear/index.js":"hBy4o","./isSameMinute/index.js":"egnlO","./isSameMonth/index.js":"43kxe","./isSameQuarter/index.js":"f2sKq","./isSameSecond/index.js":"3IE8J","./isSameWeek/index.js":"dIVlT","./isSameYear/index.js":"iSGWj","./isSaturday/index.js":"ktdj3","./isSunday/index.js":"5p92z","./isThisHour/index.js":"4VqIF","./isThisISOWeek/index.js":"cYJzm","./isThisMinute/index.js":"g51WS","./isThisMonth/index.js":"72clh","./isThisQuarter/index.js":"zWFQi","./isThisSecond/index.js":"4Uqbu","./isThisWeek/index.js":"clTOk","./isThisYear/index.js":"fJM8N","./isThursday/index.js":"XTAVB","./isToday/index.js":"7yvKb","./isTomorrow/index.js":"1mbGz","./isTuesday/index.js":"drchl","./isValid/index.js":"eXoMl","./isWednesday/index.js":"76j3z","./isWeekend/index.js":"g6YSA","./isWithinInterval/index.js":"ilmRT","./isYesterday/index.js":"boQVU","./lastDayOfDecade/index.js":"dwRxL","./lastDayOfISOWeek/index.js":"iLDh9","./lastDayOfISOWeekYear/index.js":"h2Ysi","./lastDayOfMonth/index.js":"6a7AM","./lastDayOfQuarter/index.js":"1sQGK","./lastDayOfWeek/index.js":"hHR4c","./lastDayOfYear/index.js":"epPul","./lightFormat/index.js":"31chA","./max/index.js":"3DbJE","./milliseconds/index.js":"aphl3","./millisecondsToHours/index.js":"2GgQk","./millisecondsToMinutes/index.js":"lhxbc","./millisecondsToSeconds/index.js":"bOMgx","./min/index.js":"lvUfp","./minutesToHours/index.js":"gQa6v","./minutesToMilliseconds/index.js":"cvRd5","./minutesToSeconds/index.js":"hU2Jm","./monthsToQuarters/index.js":"5YZwR","./monthsToYears/index.js":"19Bf0","./nextDay/index.js":"8L4S3","./nextFriday/index.js":"cCUkL","./nextMonday/index.js":"c1niG","./nextSaturday/index.js":"bMXsa","./nextSunday/index.js":"jXVF3","./nextThursday/index.js":"2W2QK","./nextTuesday/index.js":"8H5Tm","./nextWednesday/index.js":"2U2tm","./parse/index.js":"kVw8O","./parseISO/index.js":"3UpeK","./parseJSON/index.js":"bwkDs","./previousDay/index.js":"4yyOo","./previousFriday/index.js":"gwW5m","./previousMonday/index.js":"1jXoF","./previousSaturday/index.js":"6S7QL","./previousSunday/index.js":"5bEdV","./previousThursday/index.js":"5ceXm","./previousTuesday/index.js":"4jl28","./previousWednesday/index.js":"kkbGx","./quartersToMonths/index.js":"lDlLj","./quartersToYears/index.js":"gt4go","./roundToNearestMinutes/index.js":"8kc9v","./secondsToHours/index.js":"3VDkD","./secondsToMilliseconds/index.js":"jFr9Y","./secondsToMinutes/index.js":"bHUPS","./set/index.js":"lqSMT","./setDate/index.js":"l1cbV","./setDay/index.js":"90thz","./setDayOfYear/index.js":"azBxA","./setDefaultOptions/index.js":"hnMe7","./setHours/index.js":"aEL1Z","./setISODay/index.js":"9widl","./setISOWeek/index.js":"b5Vrh","./setISOWeekYear/index.js":"iPFyd","./setMilliseconds/index.js":"cAmcB","./setMinutes/index.js":"5O4xT","./setMonth/index.js":"8IC8x","./setQuarter/index.js":"hWjdt","./setSeconds/index.js":"fCMSm","./setWeek/index.js":"agYKW","./setWeekYear/index.js":"6cNLB","./setYear/index.js":"39i1J","./startOfDay/index.js":"4Tvs3","./startOfDecade/index.js":"22I1I","./startOfHour/index.js":"gnPY3","./startOfISOWeek/index.js":"eEFWQ","./startOfISOWeekYear/index.js":"d30Dg","./startOfMinute/index.js":"ScWrF","./startOfMonth/index.js":"6xvSk","./startOfQuarter/index.js":"3J36e","./startOfSecond/index.js":"9ePjK","./startOfToday/index.js":"lNLPu","./startOfTomorrow/index.js":"i1zFa","./startOfWeek/index.js":"fD46d","./startOfWeekYear/index.js":"6b4m8","./startOfYear/index.js":"lgYqj","./startOfYesterday/index.js":"epyzi","./sub/index.js":"lF4Wf","./subBusinessDays/index.js":"knA4J","./subDays/index.js":"8gyqn","./subHours/index.js":"7p7WB","./subISOWeekYears/index.js":"eQjZy","./subMilliseconds/index.js":"lL2M9","./subMinutes/index.js":"ddvuy","./subMonths/index.js":"8bL71","./subQuarters/index.js":"7Vwlx","./subSeconds/index.js":"dQGem","./subWeeks/index.js":"2aYSV","./subYears/index.js":"d6aiM","./toDate/index.js":"fsust","./weeksToDays/index.js":"hccRZ","./yearsToMonths/index.js":"48b03","./yearsToQuarters/index.js":"hKBEY","./constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h7zb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/toInteger/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function add(dirtyDate, duration) {
    (0, _indexJsDefault3.default)(2, arguments);
    if (!duration || _typeof(duration) !== "object") return new Date(NaN);
    var years = duration.years ? (0, _indexJsDefault4.default)(duration.years) : 0;
    var months = duration.months ? (0, _indexJsDefault4.default)(duration.months) : 0;
    var weeks = duration.weeks ? (0, _indexJsDefault4.default)(duration.weeks) : 0;
    var days = duration.days ? (0, _indexJsDefault4.default)(duration.days) : 0;
    var hours = duration.hours ? (0, _indexJsDefault4.default)(duration.hours) : 0;
    var minutes = duration.minutes ? (0, _indexJsDefault4.default)(duration.minutes) : 0;
    var seconds = duration.seconds ? (0, _indexJsDefault4.default)(duration.seconds) : 0; // Add years and months
    var date = (0, _indexJsDefault2.default)(dirtyDate);
    var dateWithMonths = months || years ? (0, _indexJsDefault1.default)(date, months + years * 12) : date; // Add weeks and days
    var dateWithDays = days || weeks ? (0, _indexJsDefault.default)(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds
    var minutesToAdd = minutes + hours * 60;
    var secondsToAdd = seconds + minutesToAdd * 60;
    var msToAdd = secondsToAdd * 1000;
    var finalDate = new Date(dateWithDays.getTime() + msToAdd);
    return finalDate;
}
exports.default = add;

},{"../addDays/index.js":"g6fAH","../addMonths/index.js":"hES3W","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6fAH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addDays(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    if (!amount) // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
    date.setDate(date.getDate() + amount);
    return date;
}
exports.default = addDays;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7kKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) return NaN;
    var number = Number(dirtyNumber);
    if (isNaN(number)) return number;
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}
exports.default = toInteger;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fsust":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function toDate(argument) {
    (0, _indexJsDefault.default)(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
    else if (typeof argument === "number" || argStr === "[object Number]") return new Date(argument);
    else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
exports.default = toDate;

},{"../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wUgQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function requiredArgs(required, args) {
    if (args.length < required) throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
}
exports.default = requiredArgs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hES3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addMonths(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    if (!amount) // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
    var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
    else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return date;
    }
}
exports.default = addMonths;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"O4ld6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isWeekend/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../isSunday/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../isSaturday/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
function addBusinessDays(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault3.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var startedOnWeekend = (0, _indexJsDefault.default)(date);
    var amount = (0, _indexJsDefault2.default)(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    var hours = date.getHours();
    var sign = amount < 0 ? -1 : 1;
    var fullWeeks = (0, _indexJsDefault2.default)(amount / 5);
    date.setDate(date.getDate() + fullWeeks * 7); // Get remaining days not part of a full week
    var restDays = Math.abs(amount % 5); // Loops over remaining days
    while(restDays > 0){
        date.setDate(date.getDate() + sign);
        if (!(0, _indexJsDefault.default)(date)) restDays -= 1;
    } // If the date is a weekend day and we reduce a dividable of
    // 5 from it, we land on a weekend date.
    // To counter this, we add days accordingly to land on the next business day
    if (startedOnWeekend && (0, _indexJsDefault.default)(date) && amount !== 0) {
        // If we're reducing days, we want to add days until we land on a weekday
        // If we're adding days we want to reduce days until we land on a weekday
        if ((0, _indexJsDefault5.default)(date)) date.setDate(date.getDate() + (sign < 0 ? 2 : -1));
        if ((0, _indexJsDefault4.default)(date)) date.setDate(date.getDate() + (sign < 0 ? 1 : -2));
    } // Restore hours to avoid DST lag
    date.setHours(hours);
    return date;
}
exports.default = addBusinessDays;

},{"../isWeekend/index.js":"g6YSA","../toDate/index.js":"fsust","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","../isSunday/index.js":"5p92z","../isSaturday/index.js":"ktdj3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6YSA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isWeekend(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getDay();
    return day === 0 || day === 6;
}
exports.default = isWeekend;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5p92z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSunday(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate).getDay() === 0;
}
exports.default = isSunday;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktdj3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSaturday(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate).getDay() === 6;
}
exports.default = isSaturday;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6s0f5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_HOUR = 3600000;
function addHours(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}
exports.default = addHours;

},{"../_lib/toInteger/index.js":"f7kKX","../addMilliseconds/index.js":"7Tp9s","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Tp9s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addMilliseconds(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var timestamp = (0, _indexJsDefault1.default)(dirtyDate).getTime();
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return new Date(timestamp + amount);
}
exports.default = addMilliseconds;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cPWmk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../getISOWeekYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../setISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function addISOWeekYears(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault3.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault2.default)(dirtyDate, (0, _indexJsDefault1.default)(dirtyDate) + amount);
}
exports.default = addISOWeekYears;

},{"../_lib/toInteger/index.js":"f7kKX","../getISOWeekYear/index.js":"bI5NI","../setISOWeekYear/index.js":"iPFyd","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bI5NI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function getISOWeekYear(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = (0, _indexJsDefault1.default)(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = (0, _indexJsDefault1.default)(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getISOWeekYear;

},{"../toDate/index.js":"fsust","../startOfISOWeek/index.js":"eEFWQ","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eEFWQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfISOWeek(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate, {
        weekStartsOn: 1
    });
}
exports.default = startOfISOWeek;

},{"../startOfWeek/index.js":"fD46d","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fD46d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/defaultOptions/index.js");
function startOfWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault2.default)(1, arguments);
    var defaultOptions = (0, _indexJs3.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault1.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfWeek;

},{"../toDate/index.js":"fsust","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWs8l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultOptions", ()=>getDefaultOptions);
parcelHelpers.export(exports, "setDefaultOptions", ()=>setDefaultOptions);
var defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iPFyd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function setISOWeekYear(dirtyDate, dirtyISOWeekYear) {
    (0, _indexJsDefault4.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var isoWeekYear = (0, _indexJsDefault.default)(dirtyISOWeekYear);
    var diff = (0, _indexJsDefault3.default)(date, (0, _indexJsDefault2.default)(date));
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setFullYear(isoWeekYear, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    date = (0, _indexJsDefault2.default)(fourthOfJanuary);
    date.setDate(date.getDate() + diff);
    return date;
}
exports.default = setISOWeekYear;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../startOfISOWeekYear/index.js":"d30Dg","../differenceInCalendarDays/index.js":"adZXy","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d30Dg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfISOWeekYear(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    var year = (0, _indexJsDefault.default)(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    var date = (0, _indexJsDefault1.default)(fourthOfJanuary);
    return date;
}
exports.default = startOfISOWeekYear;

},{"../getISOWeekYear/index.js":"bI5NI","../startOfISOWeek/index.js":"eEFWQ","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adZXy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_DAY = 86400000;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault2.default)(2, arguments);
    var startOfDayLeft = (0, _indexJsDefault1.default)(dirtyDateLeft);
    var startOfDayRight = (0, _indexJsDefault1.default)(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() - (0, _indexJsDefault.default)(startOfDayLeft);
    var timestampRight = startOfDayRight.getTime() - (0, _indexJsDefault.default)(startOfDayRight); // Round the number of days to the nearest integer
    // because the number of milliseconds in a day is not constant
    // (e.g. it's different in the day of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
exports.default = differenceInCalendarDays;

},{"../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../startOfDay/index.js":"4Tvs3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bc74C":[function(require,module,exports) {
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
}
exports.default = getTimezoneOffsetInMilliseconds;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Tvs3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfDay(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfDay;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZ0OC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_MINUTE = 60000;
function addMinutes(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}
exports.default = addMinutes;

},{"../_lib/toInteger/index.js":"f7kKX","../addMilliseconds/index.js":"7Tp9s","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1KfH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addQuarters(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    var months = amount * 3;
    return (0, _indexJsDefault1.default)(dirtyDate, months);
}
exports.default = addQuarters;

},{"../_lib/toInteger/index.js":"f7kKX","../addMonths/index.js":"hES3W","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"foXxx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addSeconds(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, amount * 1000);
}
exports.default = addSeconds;

},{"../_lib/toInteger/index.js":"f7kKX","../addMilliseconds/index.js":"7Tp9s","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPOA0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addWeeks(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    var days = amount * 7;
    return (0, _indexJsDefault1.default)(dirtyDate, days);
}
exports.default = addWeeks;

},{"../_lib/toInteger/index.js":"f7kKX","../addDays/index.js":"g6fAH","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0YQq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addYears(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, amount * 12);
}
exports.default = addYears;

},{"../_lib/toInteger/index.js":"f7kKX","../addMonths/index.js":"hES3W","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8H8km":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function areIntervalsOverlapping(intervalLeft, intervalRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var leftStartTime = (0, _indexJsDefault.default)(intervalLeft === null || intervalLeft === void 0 ? void 0 : intervalLeft.start).getTime();
    var leftEndTime = (0, _indexJsDefault.default)(intervalLeft === null || intervalLeft === void 0 ? void 0 : intervalLeft.end).getTime();
    var rightStartTime = (0, _indexJsDefault.default)(intervalRight === null || intervalRight === void 0 ? void 0 : intervalRight.start).getTime();
    var rightEndTime = (0, _indexJsDefault.default)(intervalRight === null || intervalRight === void 0 ? void 0 : intervalRight.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) throw new RangeError("Invalid interval");
    if (options !== null && options !== void 0 && options.inclusive) return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
    return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}
exports.default = areIntervalsOverlapping;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gXC0L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../max/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../min/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function clamp(date, _ref) {
    var start = _ref.start, end = _ref.end;
    (0, _indexJsDefault2.default)(2, arguments);
    return (0, _indexJsDefault1.default)([
        (0, _indexJsDefault.default)([
            date,
            start
        ]),
        end
    ]);
}
exports.default = clamp;

},{"../max/index.js":"3DbJE","../min/index.js":"lvUfp","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3DbJE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function max(dirtyDatesArray) {
    (0, _indexJsDefault1.default)(1, arguments);
    var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
    if (dirtyDatesArray && typeof dirtyDatesArray.forEach === "function") datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
    else if (_typeof(dirtyDatesArray) === "object" && dirtyDatesArray !== null) datesArray = Array.prototype.slice.call(dirtyDatesArray);
    else // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
    var result;
    datesArray.forEach(function(dirtyDate) {
        var currentDate = (0, _indexJsDefault.default)(dirtyDate);
        if (result === undefined || result < currentDate || isNaN(Number(currentDate))) result = currentDate;
    });
    return result || new Date(NaN);
}
exports.default = max;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lvUfp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function min(dirtyDatesArray) {
    (0, _indexJsDefault1.default)(1, arguments);
    var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
    if (dirtyDatesArray && typeof dirtyDatesArray.forEach === "function") datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
    else if (_typeof(dirtyDatesArray) === "object" && dirtyDatesArray !== null) datesArray = Array.prototype.slice.call(dirtyDatesArray);
    else // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
    var result;
    datesArray.forEach(function(dirtyDate) {
        var currentDate = (0, _indexJsDefault.default)(dirtyDate);
        if (result === undefined || result > currentDate || isNaN(currentDate.getDate())) result = currentDate;
    });
    return result || new Date(NaN);
}
exports.default = min;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b81Ly":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function closestIndexTo(dirtyDateToCompare, dirtyDatesArray) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateToCompare = (0, _indexJsDefault.default)(dirtyDateToCompare);
    if (isNaN(Number(dateToCompare))) return NaN;
    var timeToCompare = dateToCompare.getTime();
    var datesArray; // `dirtyDatesArray` is undefined or null
    if (dirtyDatesArray == null) datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
    else if (typeof dirtyDatesArray.forEach === "function") datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
    else datesArray = Array.prototype.slice.call(dirtyDatesArray);
    var result;
    var minDistance;
    datesArray.forEach(function(dirtyDate, index) {
        var currentDate = (0, _indexJsDefault.default)(dirtyDate);
        if (isNaN(Number(currentDate))) {
            result = NaN;
            minDistance = NaN;
            return;
        }
        var distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result == null || distance < Number(minDistance)) {
            result = index;
            minDistance = distance;
        }
    });
    return result;
}
exports.default = closestIndexTo;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7NNO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function closestTo(dirtyDateToCompare, dirtyDatesArray) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateToCompare = (0, _indexJsDefault.default)(dirtyDateToCompare);
    if (isNaN(Number(dateToCompare))) return new Date(NaN);
    var timeToCompare = dateToCompare.getTime();
    var datesArray; // `dirtyDatesArray` is undefined or null
    if (dirtyDatesArray == null) datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
    else if (typeof dirtyDatesArray.forEach === "function") datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
    else datesArray = Array.prototype.slice.call(dirtyDatesArray);
    var result;
    var minDistance;
    datesArray.forEach(function(dirtyDate) {
        var currentDate = (0, _indexJsDefault.default)(dirtyDate);
        if (isNaN(Number(currentDate))) {
            result = new Date(NaN);
            minDistance = NaN;
            return;
        }
        var distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result == null || distance < Number(minDistance)) {
            result = currentDate;
            minDistance = distance;
        }
    });
    return result;
}
exports.default = closestTo;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h01l4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function compareAsc(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var diff = dateLeft.getTime() - dateRight.getTime();
    if (diff < 0) return -1;
    else if (diff > 0) return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    else return diff;
}
exports.default = compareAsc;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3KzED":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function compareDesc(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var diff = dateLeft.getTime() - dateRight.getTime();
    if (diff > 0) return -1;
    else if (diff < 0) return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    else return diff;
}
exports.default = compareDesc;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lKPIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function daysToWeeks(days) {
    (0, _indexJsDefault.default)(1, arguments);
    var weeks = days / (0, _indexJs1.daysInWeek);
    return Math.floor(weeks);
}
exports.default = daysToWeeks;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iOhcx":[function(require,module,exports) {
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "daysInWeek", ()=>daysInWeek);
parcelHelpers.export(exports, "daysInYear", ()=>daysInYear);
parcelHelpers.export(exports, "maxTime", ()=>maxTime);
parcelHelpers.export(exports, "millisecondsInMinute", ()=>millisecondsInMinute);
parcelHelpers.export(exports, "millisecondsInHour", ()=>millisecondsInHour);
parcelHelpers.export(exports, "millisecondsInSecond", ()=>millisecondsInSecond);
parcelHelpers.export(exports, "minTime", ()=>minTime);
parcelHelpers.export(exports, "minutesInHour", ()=>minutesInHour);
parcelHelpers.export(exports, "monthsInQuarter", ()=>monthsInQuarter);
parcelHelpers.export(exports, "monthsInYear", ()=>monthsInYear);
parcelHelpers.export(exports, "quartersInYear", ()=>quartersInYear);
parcelHelpers.export(exports, "secondsInHour", ()=>secondsInHour);
parcelHelpers.export(exports, "secondsInMinute", ()=>secondsInMinute);
parcelHelpers.export(exports, "secondsInDay", ()=>secondsInDay);
parcelHelpers.export(exports, "secondsInWeek", ()=>secondsInWeek);
parcelHelpers.export(exports, "secondsInYear", ()=>secondsInYear);
parcelHelpers.export(exports, "secondsInMonth", ()=>secondsInMonth);
parcelHelpers.export(exports, "secondsInQuarter", ()=>secondsInQuarter);
var daysInWeek = 7;
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 86400000;
var millisecondsInMinute = 60000;
var millisecondsInHour = 3600000;
var millisecondsInSecond = 1000;
var minTime = -maxTime;
var minutesInHour = 60;
var monthsInQuarter = 3;
var monthsInYear = 12;
var quartersInYear = 4;
var secondsInHour = 3600;
var secondsInMinute = 60;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"34m3y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../isSameDay/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../isValid/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../isWeekend/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../toDate/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../_lib/toInteger/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
function differenceInBusinessDays(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault6.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault5.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault5.default)(dirtyDateRight);
    if (!(0, _indexJsDefault3.default)(dateLeft) || !(0, _indexJsDefault3.default)(dateRight)) return NaN;
    var calendarDifference = (0, _indexJsDefault1.default)(dateLeft, dateRight);
    var sign = calendarDifference < 0 ? -1 : 1;
    var weeks = (0, _indexJsDefault7.default)(calendarDifference / 7);
    var result = weeks * 5;
    dateRight = (0, _indexJsDefault.default)(dateRight, weeks * 7); // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
    while(!(0, _indexJsDefault2.default)(dateLeft, dateRight)){
        // sign is used to account for both negative and positive differences
        result += (0, _indexJsDefault4.default)(dateRight) ? 0 : sign;
        dateRight = (0, _indexJsDefault.default)(dateRight, sign);
    }
    return result === 0 ? 0 : result;
}
exports.default = differenceInBusinessDays;

},{"../addDays/index.js":"g6fAH","../differenceInCalendarDays/index.js":"adZXy","../isSameDay/index.js":"jEo6n","../isValid/index.js":"eXoMl","../isWeekend/index.js":"g6YSA","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jEo6n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameDay(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeftStartOfDay = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRightStartOfDay = (0, _indexJsDefault.default)(dirtyDateRight);
    return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}
exports.default = isSameDay;

},{"../startOfDay/index.js":"4Tvs3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXoMl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isValid(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    if (!(0, _indexJsDefault.default)(dirtyDate) && typeof dirtyDate !== "number") return false;
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    return !isNaN(Number(date));
}
exports.default = isValid;

},{"../isDate/index.js":"kqNhT","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqNhT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function isDate(value) {
    (0, _indexJsDefault.default)(1, arguments);
    return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
exports.default = isDate;

},{"../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4D0W0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInCalendarISOWeekYears(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    return (0, _indexJsDefault.default)(dirtyDateLeft) - (0, _indexJsDefault.default)(dirtyDateRight);
}
exports.default = differenceInCalendarISOWeekYears;

},{"../getISOWeekYear/index.js":"bI5NI","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hfMMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_WEEK = 604800000;
function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault2.default)(2, arguments);
    var startOfISOWeekLeft = (0, _indexJsDefault1.default)(dirtyDateLeft);
    var startOfISOWeekRight = (0, _indexJsDefault1.default)(dirtyDateRight);
    var timestampLeft = startOfISOWeekLeft.getTime() - (0, _indexJsDefault.default)(startOfISOWeekLeft);
    var timestampRight = startOfISOWeekRight.getTime() - (0, _indexJsDefault.default)(startOfISOWeekRight); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}
exports.default = differenceInCalendarISOWeeks;

},{"../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../startOfISOWeek/index.js":"eEFWQ","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8oypH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
    var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
}
exports.default = differenceInCalendarMonths;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bgfRW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getQuarter/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault2.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault1.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault1.default)(dirtyDateRight);
    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
    var quarterDiff = (0, _indexJsDefault.default)(dateLeft) - (0, _indexJsDefault.default)(dateRight);
    return yearDiff * 4 + quarterDiff;
}
exports.default = differenceInCalendarQuarters;

},{"../getQuarter/index.js":"ghgKl","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ghgKl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getQuarter(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var quarter = Math.floor(date.getMonth() / 3) + 1;
    return quarter;
}
exports.default = getQuarter;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Le9T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_WEEK = 604800000;
function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, options) {
    (0, _indexJsDefault2.default)(2, arguments);
    var startOfWeekLeft = (0, _indexJsDefault.default)(dirtyDateLeft, options);
    var startOfWeekRight = (0, _indexJsDefault.default)(dirtyDateRight, options);
    var timestampLeft = startOfWeekLeft.getTime() - (0, _indexJsDefault1.default)(startOfWeekLeft);
    var timestampRight = startOfWeekRight.getTime() - (0, _indexJsDefault1.default)(startOfWeekRight); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}
exports.default = differenceInCalendarWeeks;

},{"../startOfWeek/index.js":"fD46d","../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4WIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    return dateLeft.getFullYear() - dateRight.getFullYear();
}
exports.default = differenceInCalendarYears;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mpAo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js"); // Like `compareAsc` but uses local time not UTC, which is needed
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
    var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
    if (diff < 0) return -1;
    else if (diff > 0) return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    else return diff;
}
function differenceInDays(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault2.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var sign = compareLocalAsc(dateLeft, dateRight);
    var difference = Math.abs((0, _indexJsDefault1.default)(dateLeft, dateRight));
    dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
    var result = sign * (difference - isLastDayNotFull); // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.default = differenceInDays;

},{"../toDate/index.js":"fsust","../differenceInCalendarDays/index.js":"adZXy","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Vac7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../constants/index.js");
var _indexJs1 = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/roundingMethods/index.js");
function differenceInHours(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / (0, _indexJs.millisecondsInHour);
    return (0, _indexJs3.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInHours;

},{"../constants/index.js":"iOhcx","../differenceInMilliseconds/index.js":"Eb6qZ","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Eb6qZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInMilliseconds(dateLeft, dateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    return (0, _indexJsDefault.default)(dateLeft).getTime() - (0, _indexJsDefault.default)(dateRight).getTime();
}
exports.default = differenceInMilliseconds;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ilPgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRoundingMethod", ()=>getRoundingMethod);
var roundingMap = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function trunc(value) {
        return value < 0 ? Math.ceil(value) : Math.floor(value);
    } // Math.trunc is not supported by IE
};
var defaultRoundingMethod = "trunc";
function getRoundingMethod(method) {
    return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bDaH9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarISOWeekYears/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../compareAsc/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../subISOWeekYears/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function differenceInISOWeekYears(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault4.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var sign = (0, _indexJsDefault2.default)(dateLeft, dateRight);
    var difference = Math.abs((0, _indexJsDefault1.default)(dateLeft, dateRight));
    dateLeft = (0, _indexJsDefault3.default)(dateLeft, sign * difference); // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
    // if last calendar ISO year is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastISOWeekYearNotFull = Number((0, _indexJsDefault2.default)(dateLeft, dateRight) === -sign);
    var result = sign * (difference - isLastISOWeekYearNotFull); // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.default = differenceInISOWeekYears;

},{"../toDate/index.js":"fsust","../differenceInCalendarISOWeekYears/index.js":"4D0W0","../compareAsc/index.js":"h01l4","../subISOWeekYears/index.js":"eQjZy","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eQjZy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addISOWeekYears/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subISOWeekYears(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault1.default)(2, arguments);
    var amount = (0, _indexJsDefault2.default)(dirtyAmount);
    return (0, _indexJsDefault.default)(dirtyDate, -amount);
}
exports.default = subISOWeekYears;

},{"../addISOWeekYears/index.js":"cPWmk","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Qv17":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../constants/index.js");
var _indexJs1 = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/roundingMethods/index.js");
function differenceInMinutes(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / (0, _indexJs.millisecondsInMinute);
    return (0, _indexJs3.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInMinutes;

},{"../constants/index.js":"iOhcx","../differenceInMilliseconds/index.js":"Eb6qZ","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lj6Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../compareAsc/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../isLastDayOfMonth/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault3.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var sign = (0, _indexJsDefault2.default)(dateLeft, dateRight);
    var difference = Math.abs((0, _indexJsDefault1.default)(dateLeft, dateRight));
    var result; // Check for the difference of less than month
    if (difference < 1) result = 0;
    else {
        if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) // This will check if the date is end of Feb and assign a higher end of month date
        // to compare it with Jan
        dateLeft.setDate(30);
        dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
        // If so, result must be decreased by 1 in absolute value
        var isLastMonthNotFull = (0, _indexJsDefault2.default)(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month
        if ((0, _indexJsDefault4.default)((0, _indexJsDefault.default)(dirtyDateLeft)) && difference === 1 && (0, _indexJsDefault2.default)(dirtyDateLeft, dateRight) === 1) isLastMonthNotFull = false;
        result = sign * (difference - Number(isLastMonthNotFull));
    } // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.default = differenceInMonths;

},{"../toDate/index.js":"fsust","../differenceInCalendarMonths/index.js":"8oypH","../compareAsc/index.js":"h01l4","../_lib/requiredArgs/index.js":"9wUgQ","../isLastDayOfMonth/index.js":"1as6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1as6x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../endOfDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../endOfMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function isLastDayOfMonth(dirtyDate) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    return (0, _indexJsDefault1.default)(date).getTime() === (0, _indexJsDefault2.default)(date).getTime();
}
exports.default = isLastDayOfMonth;

},{"../toDate/index.js":"fsust","../endOfDay/index.js":"kLkh7","../endOfMonth/index.js":"4tHlS","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLkh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfDay(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfDay;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tHlS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfMonth(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfMonth;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"55zSJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInMonths/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/roundingMethods/index.js");
function differenceInQuarters(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / 3;
    return (0, _indexJs2.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInQuarters;

},{"../differenceInMonths/index.js":"8lj6Z","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5uZgU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/roundingMethods/index.js");
function differenceInSeconds(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / 1000;
    return (0, _indexJs2.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInSeconds;

},{"../differenceInMilliseconds/index.js":"Eb6qZ","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8EidL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/roundingMethods/index.js");
function differenceInWeeks(dateLeft, dateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var diff = (0, _indexJsDefault.default)(dateLeft, dateRight) / 7;
    return (0, _indexJs2.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInWeeks;

},{"../differenceInDays/index.js":"1mpAo","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/roundingMethods/index.js":"ilPgA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2tncr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarYears/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../compareAsc/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function differenceInYears(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault3.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    var sign = (0, _indexJsDefault2.default)(dateLeft, dateRight);
    var difference = Math.abs((0, _indexJsDefault1.default)(dateLeft, dateRight)); // Set both dates to a valid leap year for accurate comparison when dealing
    // with leap days
    dateLeft.setFullYear(1584);
    dateRight.setFullYear(1584); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastYearNotFull = (0, _indexJsDefault2.default)(dateLeft, dateRight) === -sign;
    var result = sign * (difference - Number(isLastYearNotFull)); // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.default = differenceInYears;

},{"../toDate/index.js":"fsust","../differenceInCalendarYears/index.js":"f4WIY","../compareAsc/index.js":"h01l4","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6iyr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function eachDayOfInterval(dirtyInterval, options) {
    var _options$step;
    (0, _indexJsDefault1.default)(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = (0, _indexJsDefault.default)(interval.start);
    var endDate = (0, _indexJsDefault.default)(interval.end);
    var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startDate.getTime() <= endTime)) throw new RangeError("Invalid interval");
    var dates = [];
    var currentDate = startDate;
    currentDate.setHours(0, 0, 0, 0);
    var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
    if (step < 1 || isNaN(step)) throw new RangeError("`options.step` must be a number greater than 1");
    while(currentDate.getTime() <= endTime){
        dates.push((0, _indexJsDefault.default)(currentDate));
        currentDate.setDate(currentDate.getDate() + step);
        currentDate.setHours(0, 0, 0, 0);
    }
    return dates;
}
exports.default = eachDayOfInterval;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3OI93":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addHours/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function eachHourOfInterval(dirtyInterval, options) {
    var _options$step;
    (0, _indexJsDefault2.default)(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = (0, _indexJsDefault1.default)(interval.start);
    var endDate = (0, _indexJsDefault1.default)(interval.end);
    var startTime = startDate.getTime();
    var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startTime <= endTime)) throw new RangeError("Invalid interval");
    var dates = [];
    var currentDate = startDate;
    currentDate.setMinutes(0, 0, 0);
    var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
    if (step < 1 || isNaN(step)) throw new RangeError("`options.step` must be a number greater than 1");
    while(currentDate.getTime() <= endTime){
        dates.push((0, _indexJsDefault1.default)(currentDate));
        currentDate = (0, _indexJsDefault.default)(currentDate, step);
    }
    return dates;
}
exports.default = eachHourOfInterval;

},{"../addHours/index.js":"6s0f5","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b8VGF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addMinutes/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfMinute/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachMinuteOfInterval(interval, options) {
    var _options$step;
    (0, _indexJsDefault3.default)(1, arguments);
    var startDate = (0, _indexJsDefault2.default)((0, _indexJsDefault1.default)(interval.start));
    var endDate = (0, _indexJsDefault1.default)(interval.end);
    var startTime = startDate.getTime();
    var endTime = endDate.getTime();
    if (startTime >= endTime) throw new RangeError("Invalid interval");
    var dates = [];
    var currentDate = startDate;
    var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
    if (step < 1 || isNaN(step)) throw new RangeError("`options.step` must be a number equal to or greater than 1");
    while(currentDate.getTime() <= endTime){
        dates.push((0, _indexJsDefault1.default)(currentDate));
        currentDate = (0, _indexJsDefault.default)(currentDate, step);
    }
    return dates;
}
exports.default = eachMinuteOfInterval;

},{"../addMinutes/index.js":"fZ0OC","../toDate/index.js":"fsust","../startOfMinute/index.js":"ScWrF","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ScWrF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfMinute(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setSeconds(0, 0);
    return date;
}
exports.default = startOfMinute;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPOjf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function eachMonthOfInterval(dirtyInterval) {
    (0, _indexJsDefault1.default)(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = (0, _indexJsDefault.default)(interval.start);
    var endDate = (0, _indexJsDefault.default)(interval.end);
    var endTime = endDate.getTime();
    var dates = []; // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startDate.getTime() <= endTime)) throw new RangeError("Invalid interval");
    var currentDate = startDate;
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setDate(1);
    while(currentDate.getTime() <= endTime){
        dates.push((0, _indexJsDefault.default)(currentDate));
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    return dates;
}
exports.default = eachMonthOfInterval;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUMoa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addQuarters/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfQuarter/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachQuarterOfInterval(dirtyInterval) {
    (0, _indexJsDefault3.default)(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = (0, _indexJsDefault2.default)(interval.start);
    var endDate = (0, _indexJsDefault2.default)(interval.end);
    var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startDate.getTime() <= endTime)) throw new RangeError("Invalid interval");
    var startDateQuarter = (0, _indexJsDefault1.default)(startDate);
    var endDateQuarter = (0, _indexJsDefault1.default)(endDate);
    endTime = endDateQuarter.getTime();
    var quarters = [];
    var currentQuarter = startDateQuarter;
    while(currentQuarter.getTime() <= endTime){
        quarters.push((0, _indexJsDefault2.default)(currentQuarter));
        currentQuarter = (0, _indexJsDefault.default)(currentQuarter, 1);
    }
    return quarters;
}
exports.default = eachQuarterOfInterval;

},{"../addQuarters/index.js":"c1KfH","../startOfQuarter/index.js":"3J36e","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3J36e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfQuarter(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var currentMonth = date.getMonth();
    var month = currentMonth - currentMonth % 3;
    date.setMonth(month, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfQuarter;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hFCm6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addWeeks/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachWeekOfInterval(dirtyInterval, options) {
    (0, _indexJsDefault3.default)(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = (0, _indexJsDefault2.default)(interval.start);
    var endDate = (0, _indexJsDefault2.default)(interval.end);
    var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startDate.getTime() <= endTime)) throw new RangeError("Invalid interval");
    var startDateWeek = (0, _indexJsDefault1.default)(startDate, options);
    var endDateWeek = (0, _indexJsDefault1.default)(endDate, options); // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet
    startDateWeek.setHours(15);
    endDateWeek.setHours(15);
    endTime = endDateWeek.getTime();
    var weeks = [];
    var currentWeek = startDateWeek;
    while(currentWeek.getTime() <= endTime){
        currentWeek.setHours(0);
        weeks.push((0, _indexJsDefault2.default)(currentWeek));
        currentWeek = (0, _indexJsDefault.default)(currentWeek, 1);
        currentWeek.setHours(15);
    }
    return weeks;
}
exports.default = eachWeekOfInterval;

},{"../addWeeks/index.js":"gPOA0","../startOfWeek/index.js":"fD46d","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gO2Cl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../eachDayOfInterval/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isSunday/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../isWeekend/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachWeekendOfInterval(interval) {
    (0, _indexJsDefault3.default)(1, arguments);
    var dateInterval = (0, _indexJsDefault.default)(interval);
    var weekends = [];
    var index = 0;
    while(index < dateInterval.length){
        var date = dateInterval[index++];
        if ((0, _indexJsDefault2.default)(date)) {
            weekends.push(date);
            if ((0, _indexJsDefault1.default)(date)) index = index + 5;
        }
    }
    return weekends;
}
exports.default = eachWeekendOfInterval;

},{"../eachDayOfInterval/index.js":"a6iyr","../isSunday/index.js":"5p92z","../isWeekend/index.js":"g6YSA","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kiJXc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../eachWeekendOfInterval/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfMonth/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../endOfMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachWeekendOfMonth(dirtyDate) {
    (0, _indexJsDefault3.default)(1, arguments);
    var startDate = (0, _indexJsDefault1.default)(dirtyDate);
    if (isNaN(startDate.getTime())) throw new RangeError("The passed date is invalid");
    var endDate = (0, _indexJsDefault2.default)(dirtyDate);
    return (0, _indexJsDefault.default)({
        start: startDate,
        end: endDate
    });
}
exports.default = eachWeekendOfMonth;

},{"../eachWeekendOfInterval/index.js":"gO2Cl","../startOfMonth/index.js":"6xvSk","../endOfMonth/index.js":"4tHlS","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xvSk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfMonth(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfMonth;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2QMF6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../eachWeekendOfInterval/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../endOfYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachWeekendOfYear(dirtyDate) {
    (0, _indexJsDefault3.default)(1, arguments);
    var startDate = (0, _indexJsDefault2.default)(dirtyDate);
    var endDate = (0, _indexJsDefault1.default)(dirtyDate);
    return (0, _indexJsDefault.default)({
        start: startDate,
        end: endDate
    });
}
exports.default = eachWeekendOfYear;

},{"../eachWeekendOfInterval/index.js":"gO2Cl","../endOfYear/index.js":"kAT7v","../startOfYear/index.js":"lgYqj","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kAT7v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getFullYear();
    date.setFullYear(year + 1, 0, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfYear;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lgYqj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var cleanDate = (0, _indexJsDefault.default)(dirtyDate);
    var date = new Date(0);
    date.setFullYear(cleanDate.getFullYear(), 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfYear;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97N8I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function eachYearOfInterval(dirtyInterval) {
    (0, _indexJsDefault1.default)(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = (0, _indexJsDefault.default)(interval.start);
    var endDate = (0, _indexJsDefault.default)(interval.end);
    var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startDate.getTime() <= endTime)) throw new RangeError("Invalid interval");
    var dates = [];
    var currentDate = startDate;
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setMonth(0, 1);
    while(currentDate.getTime() <= endTime){
        dates.push((0, _indexJsDefault.default)(currentDate));
        currentDate.setFullYear(currentDate.getFullYear() + 1);
    }
    return dates;
}
exports.default = eachYearOfInterval;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1writ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfDecade(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getFullYear();
    var decade = 9 + Math.floor(year / 10) * 10;
    date.setFullYear(decade, 11, 31);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfDecade;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eMgQO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfHour(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setMinutes(59, 59, 999);
    return date;
}
exports.default = endOfHour;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KsgN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../endOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfISOWeek(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate, {
        weekStartsOn: 1
    });
}
exports.default = endOfISOWeek;

},{"../endOfWeek/index.js":"5zQJ5","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5zQJ5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/defaultOptions/index.js");
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs3);
function endOfWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault2.default)(1, arguments);
    var defaultOptions = (0, _indexJs.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault1.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    date.setDate(date.getDate() + diff);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfWeek;

},{"../_lib/defaultOptions/index.js":"dWs8l","../toDate/index.js":"fsust","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lfisj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function endOfISOWeekYear(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    var year = (0, _indexJsDefault.default)(dirtyDate);
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var date = (0, _indexJsDefault1.default)(fourthOfJanuaryOfNextYear);
    date.setMilliseconds(date.getMilliseconds() - 1);
    return date;
}
exports.default = endOfISOWeekYear;

},{"../getISOWeekYear/index.js":"bI5NI","../startOfISOWeek/index.js":"eEFWQ","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gw4uA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfMinute(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setSeconds(59, 999);
    return date;
}
exports.default = endOfMinute;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajYge":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfQuarter(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var currentMonth = date.getMonth();
    var month = currentMonth - currentMonth % 3 + 3;
    date.setMonth(month, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfQuarter;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1JZ5k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfSecond(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setMilliseconds(999);
    return date;
}
exports.default = endOfSecond;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7eH17":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../endOfDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function endOfToday() {
    return (0, _indexJsDefault.default)(Date.now());
}
exports.default = endOfToday;

},{"../endOfDay/index.js":"kLkh7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kfyjL":[function(require,module,exports) {
/**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * @returns {Date} the end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function endOfTomorrow() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var date = new Date(0);
    date.setFullYear(year, month, day + 1);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfTomorrow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnkmB":[function(require,module,exports) {
/**
 * @name endOfYesterday
 * @category Day Helpers
 * @summary Return the end of yesterday.
 * @pure false
 *
 * @description
 * Return the end of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * @returns {Date} the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function endOfYesterday() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var date = new Date(0);
    date.setFullYear(year, month, day - 1);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfYesterday;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnm6V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isValid/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../subMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/format/formatters/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/format/longFormatters/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/protectedTokens/index.js");
var _indexJs7 = require("../_lib/toInteger/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../_lib/defaultOptions/index.js");
var _indexJs10 = require("../_lib/defaultLocale/index.js"); // This RegExp consists of three parts separated by `|`:
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs10);
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    (0, _indexJsDefault7.default)(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var defaultOptions = (0, _indexJs9.getDefaultOptions)();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : (0, _indexJsDefault8.default);
    var firstWeekContainsDate = (0, _indexJsDefault6.default)((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var weekStartsOn = (0, _indexJsDefault6.default)((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!locale.localize) throw new RangeError("locale must contain localize property");
    if (!locale.formatLong) throw new RangeError("locale must contain formatLong property");
    var originalDate = (0, _indexJsDefault2.default)(dirtyDate);
    if (!(0, _indexJsDefault.default)(originalDate)) throw new RangeError("Invalid time value");
     // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = (0, _indexJsDefault5.default)(originalDate);
    var utcDate = (0, _indexJsDefault1.default)(originalDate, timezoneOffset);
    var formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale,
        _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            var longFormatter = (0, _indexJsDefault4.default)[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map(function(substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") return "'";
        var firstCharacter = substring[0];
        if (firstCharacter === "'") return cleanEscapedString(substring);
        var formatter = (0, _indexJsDefault3.default)[firstCharacter];
        if (formatter) {
            if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0, _indexJs6.isProtectedWeekYearToken)(substring)) (0, _indexJs6.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
            if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0, _indexJs6.isProtectedDayOfYearToken)(substring)) (0, _indexJs6.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
            return formatter(utcDate, substring, locale.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        return substring;
    }).join("");
    return result;
}
exports.default = format;
function cleanEscapedString(input) {
    var matched = input.match(escapedStringRegExp);
    if (!matched) return input;
    return matched[1].replace(doubleQuoteRegExp, "'");
}

},{"../isValid/index.js":"eXoMl","../subMilliseconds/index.js":"lL2M9","../toDate/index.js":"fsust","../_lib/format/formatters/index.js":"3cYKM","../_lib/format/longFormatters/index.js":"1ztit","../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../_lib/protectedTokens/index.js":"4R0Xq","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/defaultOptions/index.js":"dWs8l","../_lib/defaultLocale/index.js":"1rVeP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lL2M9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subMilliseconds(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault1.default)(2, arguments);
    var amount = (0, _indexJsDefault2.default)(dirtyAmount);
    return (0, _indexJsDefault.default)(dirtyDate, -amount);
}
exports.default = subMilliseconds;

},{"../addMilliseconds/index.js":"7Tp9s","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3cYKM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/getUTCDayOfYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/getUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../../../_lib/getUTCISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../../../_lib/getUTCWeek/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../../../_lib/getUTCWeekYear/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../../addLeadingZeros/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../lightFormatters/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */ var formatters = {
    // Era
    G: function G(date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function y(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return (0, _indexJsDefault6.default).y(date, token);
    },
    // Local week-numbering year
    Y: function Y(date, token, localize, options) {
        var signedWeekYear = (0, _indexJsDefault4.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year
        if (token === "YY") {
            var twoDigitYear = weekYear % 100;
            return (0, _indexJsDefault5.default)(twoDigitYear, 2);
        } // Ordinal number
        if (token === "Yo") return localize.ordinalNumber(weekYear, {
            unit: "year"
        });
         // Padding
        return (0, _indexJsDefault5.default)(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function R(date, token) {
        var isoWeekYear = (0, _indexJsDefault2.default)(date); // Padding
        return (0, _indexJsDefault5.default)(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function u(date, token) {
        var year = date.getUTCFullYear();
        return (0, _indexJsDefault5.default)(year, token.length);
    },
    // Quarter
    Q: function Q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, _indexJsDefault5.default)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, _indexJsDefault5.default)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function M(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            case "M":
            case "MM":
                return (0, _indexJsDefault6.default).M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function L(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, _indexJsDefault5.default)(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function w(date, token, localize, options) {
        var week = (0, _indexJsDefault3.default)(date, options);
        if (token === "wo") return localize.ordinalNumber(week, {
            unit: "week"
        });
        return (0, _indexJsDefault5.default)(week, token.length);
    },
    // ISO week of year
    I: function I(date, token, localize) {
        var isoWeek = (0, _indexJsDefault1.default)(date);
        if (token === "Io") return localize.ordinalNumber(isoWeek, {
            unit: "week"
        });
        return (0, _indexJsDefault5.default)(isoWeek, token.length);
    },
    // Day of the month
    d: function d(date, token, localize) {
        if (token === "do") return localize.ordinalNumber(date.getUTCDate(), {
            unit: "date"
        });
        return (0, _indexJsDefault6.default).d(date, token);
    },
    // Day of year
    D: function D(date, token, localize) {
        var dayOfYear = (0, _indexJsDefault.default)(date);
        if (token === "Do") return localize.ordinalNumber(dayOfYear, {
            unit: "dayOfYear"
        });
        return (0, _indexJsDefault5.default)(dayOfYear, token.length);
    },
    // Day of week
    E: function E(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function e(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, _indexJsDefault5.default)(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function c(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, _indexJsDefault5.default)(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function i(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, _indexJsDefault5.default)(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function a(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function b(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
        else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
        else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function B(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
        else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
        else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
        else dayPeriodEnumValue = dayPeriodEnum.night;
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function h(date, token, localize) {
        if (token === "ho") {
            var hours = date.getUTCHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, _indexJsDefault6.default).h(date, token);
    },
    // Hour [0-23]
    H: function H(date, token, localize) {
        if (token === "Ho") return localize.ordinalNumber(date.getUTCHours(), {
            unit: "hour"
        });
        return (0, _indexJsDefault6.default).H(date, token);
    },
    // Hour [0-11]
    K: function K(date, token, localize) {
        var hours = date.getUTCHours() % 12;
        if (token === "Ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _indexJsDefault5.default)(hours, token.length);
    },
    // Hour [1-24]
    k: function k(date, token, localize) {
        var hours = date.getUTCHours();
        if (hours === 0) hours = 24;
        if (token === "ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _indexJsDefault5.default)(hours, token.length);
    },
    // Minute
    m: function m(date, token, localize) {
        if (token === "mo") return localize.ordinalNumber(date.getUTCMinutes(), {
            unit: "minute"
        });
        return (0, _indexJsDefault6.default).m(date, token);
    },
    // Second
    s: function s(date, token, localize) {
        if (token === "so") return localize.ordinalNumber(date.getUTCSeconds(), {
            unit: "second"
        });
        return (0, _indexJsDefault6.default).s(date, token);
    },
    // Fraction of second
    S: function S(date, token) {
        return (0, _indexJsDefault6.default).S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function X(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) return "Z";
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function x(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function O(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function z(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function t(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1000);
        return (0, _indexJsDefault5.default)(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function T(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return (0, _indexJsDefault5.default)(timestamp, token.length);
    }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    var delimiter = dirtyDelimiter || "";
    return sign + String(hours) + delimiter + (0, _indexJsDefault5.default)(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
        var sign = offset > 0 ? "-" : "+";
        return sign + (0, _indexJsDefault5.default)(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = (0, _indexJsDefault5.default)(Math.floor(absOffset / 60), 2);
    var minutes = (0, _indexJsDefault5.default)(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
exports.default = formatters;

},{"../../../_lib/getUTCDayOfYear/index.js":"7wqIf","../../../_lib/getUTCISOWeek/index.js":"4nEkI","../../../_lib/getUTCISOWeekYear/index.js":"03QaQ","../../../_lib/getUTCWeek/index.js":"b7GgV","../../../_lib/getUTCWeekYear/index.js":"8i6st","../../addLeadingZeros/index.js":"6pP6x","../lightFormatters/index.js":"9oZiA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wqIf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
exports.default = getUTCDayOfYear;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nEkI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var diff = (0, _indexJsDefault1.default)(date).getTime() - (0, _indexJsDefault2.default)(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getUTCISOWeek;

},{"../../toDate/index.js":"fsust","../startOfUTCISOWeek/index.js":"3ta4C","../startOfUTCISOWeekYear/index.js":"4u8O6","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ta4C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfUTCISOWeek(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var weekStartsOn = 1;
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfUTCISOWeek;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4u8O6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getUTCISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfUTCISOWeekYear(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    var year = (0, _indexJsDefault.default)(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = (0, _indexJsDefault1.default)(fourthOfJanuary);
    return date;
}
exports.default = startOfUTCISOWeekYear;

},{"../getUTCISOWeekYear/index.js":"03QaQ","../startOfUTCISOWeek/index.js":"3ta4C","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03QaQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function getUTCISOWeekYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _indexJsDefault2.default)(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _indexJsDefault2.default)(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getUTCISOWeekYear;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../startOfUTCISOWeek/index.js":"3ta4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7GgV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var diff = (0, _indexJsDefault1.default)(date, options).getTime() - (0, _indexJsDefault2.default)(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getUTCWeek;

},{"../../toDate/index.js":"fsust","../startOfUTCWeek/index.js":"dDZbE","../startOfUTCWeekYear/index.js":"bJAVl","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDZbE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../defaultOptions/index.js");
function startOfUTCWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault1.default)(1, arguments);
    var defaultOptions = (0, _indexJs3.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault2.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfUTCWeek;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../toInteger/index.js":"f7kKX","../defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJAVl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getUTCWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../defaultOptions/index.js");
function startOfUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault1.default)(1, arguments);
    var defaultOptions = (0, _indexJs4.getDefaultOptions)();
    var firstWeekContainsDate = (0, _indexJsDefault3.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = (0, _indexJsDefault.default)(dirtyDate, options);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = (0, _indexJsDefault2.default)(firstWeek, options);
    return date;
}
exports.default = startOfUTCWeekYear;

},{"../getUTCWeekYear/index.js":"8i6st","../requiredArgs/index.js":"9wUgQ","../startOfUTCWeek/index.js":"dDZbE","../toInteger/index.js":"f7kKX","../defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8i6st":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../defaultOptions/index.js");
function getUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getUTCFullYear();
    var defaultOptions = (0, _indexJs4.getDefaultOptions)();
    var firstWeekContainsDate = (0, _indexJsDefault3.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _indexJsDefault2.default)(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _indexJsDefault2.default)(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getUTCWeekYear;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../startOfUTCWeek/index.js":"dDZbE","../toInteger/index.js":"f7kKX","../defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pP6x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while(output.length < targetLength)output = "0" + output;
    return sign + output;
}
exports.default = addLeadingZeros;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9oZiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../addLeadingZeros/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */ var formatters = {
    // Year
    y: function y(date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, _indexJsDefault.default)(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M: function M(date, token) {
        var month = date.getUTCMonth();
        return token === "M" ? String(month + 1) : (0, _indexJsDefault.default)(month + 1, 2);
    },
    // Day of the month
    d: function d(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function a(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h: function h(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function H(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCHours(), token.length);
    },
    // Minute
    m: function m(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function s(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function S(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, _indexJsDefault.default)(fractionalSeconds, token.length);
    }
};
exports.default = formatters;

},{"../../addLeadingZeros/index.js":"6pP6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ztit":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) return dateLongFormatter(pattern, formatLong);
    var dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
exports.default = longFormatters;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4R0Xq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isProtectedDayOfYearToken", ()=>isProtectedDayOfYearToken);
parcelHelpers.export(exports, "isProtectedWeekYearToken", ()=>isProtectedWeekYearToken);
parcelHelpers.export(exports, "throwProtectedError", ()=>throwProtectedError);
var protectedDayOfYearTokens = [
    "D",
    "DD"
];
var protectedWeekYearTokens = [
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
    if (token === "YYYY") throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    else if (token === "YY") throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    else if (token === "D") throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    else if (token === "DD") throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rVeP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../locale/en-US/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = (0, _indexJsDefault.default);

},{"../../locale/en-US/index.js":"8XKCq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8XKCq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./_lib/formatDistance/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./_lib/formatLong/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./_lib/formatRelative/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./_lib/localize/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./_lib/match/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */ var locale = {
    code: "en-US",
    formatDistance: (0, _indexJsDefault.default),
    formatLong: (0, _indexJsDefault1.default),
    formatRelative: (0, _indexJsDefault2.default),
    localize: (0, _indexJsDefault3.default),
    match: (0, _indexJsDefault4.default),
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
exports.default = locale;

},{"./_lib/formatDistance/index.js":"lLrcE","./_lib/formatLong/index.js":"cA6Xb","./_lib/formatRelative/index.js":"9QlMp","./_lib/localize/index.js":"jv1Fa","./_lib/match/index.js":"1wA2o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLrcE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
var formatDistance = function formatDistance(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace("{{count}}", count.toString());
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) return "in " + result;
        else return result + " ago";
    }
    return result;
};
exports.default = formatDistance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cA6Xb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildFormatLongFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
var formatLong = {
    date: (0, _indexJsDefault.default)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, _indexJsDefault.default)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, _indexJsDefault.default)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
exports.default = formatLong;

},{"../../../_lib/buildFormatLongFn/index.js":"h1FGd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1FGd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // TODO: Remove String()
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
exports.default = buildFormatLongFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9QlMp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
exports.default = formatRelative;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jv1Fa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildLocalizeFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
var quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
var dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
    var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
    }
    return number + "th";
};
var localize = {
    ordinalNumber: ordinalNumber,
    era: (0, _indexJsDefault.default)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, _indexJsDefault.default)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: function argumentCallback(quarter) {
            return quarter - 1;
        }
    }),
    month: (0, _indexJsDefault.default)({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, _indexJsDefault.default)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, _indexJsDefault.default)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
exports.default = localize;

},{"../../../_lib/buildLocalizeFn/index.js":"5l2rZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5l2rZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildLocalizeFn(args) {
    return function(dirtyIndex, options) {
        var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
        var valuesArray;
        if (context === "formatting" && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
exports.default = buildLocalizeFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wA2o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildMatchFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/buildMatchPatternFn/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: (0, _indexJsDefault1.default)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function valueCallback(value) {
            return parseInt(value, 10);
        }
    }),
    era: (0, _indexJsDefault.default)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, _indexJsDefault.default)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: function valueCallback(index) {
            return index + 1;
        }
    }),
    month: (0, _indexJsDefault.default)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, _indexJsDefault.default)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, _indexJsDefault.default)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
exports.default = match;

},{"../../../_lib/buildMatchFn/index.js":"2nEf9","../../../_lib/buildMatchPatternFn/index.js":"4GjCS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nEf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchFn;
function findKey(object, predicate) {
    for(var key in object){
        if (object.hasOwnProperty(key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4GjCS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchPatternFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPnhm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/defaultOptions/index.js");
var _indexJs1 = require("../compareAsc/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../differenceInMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../differenceInSeconds/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/defaultLocale/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../toDate/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/cloneObject/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../_lib/assign/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs9);
var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
function formatDistance(dirtyDate, dirtyBaseDate, options) {
    var _ref, _options$locale;
    (0, _indexJsDefault8.default)(2, arguments);
    var defaultOptions = (0, _indexJs.getDefaultOptions)();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : (0, _indexJsDefault3.default);
    if (!locale.formatDistance) throw new RangeError("locale must contain formatDistance property");
    var comparison = (0, _indexJsDefault.default)(dirtyDate, dirtyBaseDate);
    if (isNaN(comparison)) throw new RangeError("Invalid time value");
    var localizeOptions = (0, _indexJsDefault6.default)((0, _indexJsDefault5.default)(options), {
        addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
        comparison: comparison
    });
    var dateLeft;
    var dateRight;
    if (comparison > 0) {
        dateLeft = (0, _indexJsDefault4.default)(dirtyBaseDate);
        dateRight = (0, _indexJsDefault4.default)(dirtyDate);
    } else {
        dateLeft = (0, _indexJsDefault4.default)(dirtyDate);
        dateRight = (0, _indexJsDefault4.default)(dirtyBaseDate);
    }
    var seconds = (0, _indexJsDefault2.default)(dateRight, dateLeft);
    var offsetInSeconds = ((0, _indexJsDefault7.default)(dateRight) - (0, _indexJsDefault7.default)(dateLeft)) / 1000;
    var minutes = Math.round((seconds - offsetInSeconds) / 60);
    var months; // 0 up to 2 mins
    if (minutes < 2) {
        if (options !== null && options !== void 0 && options.includeSeconds) {
            if (seconds < 5) return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
            else if (seconds < 10) return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
            else if (seconds < 20) return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
            else if (seconds < 40) return locale.formatDistance("halfAMinute", 0, localizeOptions);
            else if (seconds < 60) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            else return locale.formatDistance("xMinutes", 1, localizeOptions);
        } else {
            if (minutes === 0) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            else return locale.formatDistance("xMinutes", minutes, localizeOptions);
        } // 2 mins up to 0.75 hrs
    } else if (minutes < 45) return locale.formatDistance("xMinutes", minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
    else if (minutes < 90) return locale.formatDistance("aboutXHours", 1, localizeOptions); // 1.5 hrs up to 24 hrs
    else if (minutes < MINUTES_IN_DAY) {
        var hours = Math.round(minutes / 60);
        return locale.formatDistance("aboutXHours", hours, localizeOptions); // 1 day up to 1.75 days
    } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) return locale.formatDistance("xDays", 1, localizeOptions); // 1.75 days up to 30 days
    else if (minutes < MINUTES_IN_MONTH) {
        var days = Math.round(minutes / MINUTES_IN_DAY);
        return locale.formatDistance("xDays", days, localizeOptions); // 1 month up to 2 months
    } else if (minutes < MINUTES_IN_TWO_MONTHS) {
        months = Math.round(minutes / MINUTES_IN_MONTH);
        return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = (0, _indexJsDefault1.default)(dateRight, dateLeft); // 2 months up to 12 months
    if (months < 12) {
        var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
        return locale.formatDistance("xMonths", nearestMonth, localizeOptions); // 1 year up to max Date
    } else {
        var monthsSinceStartOfYear = months % 12;
        var years = Math.floor(months / 12); // N years up to 1 years 3 months
        if (monthsSinceStartOfYear < 3) return locale.formatDistance("aboutXYears", years, localizeOptions); // N years 3 months up to N years 9 months
        else if (monthsSinceStartOfYear < 9) return locale.formatDistance("overXYears", years, localizeOptions); // N years 9 months up to N year 12 months
        else return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
}
exports.default = formatDistance;

},{"../_lib/defaultOptions/index.js":"dWs8l","../compareAsc/index.js":"h01l4","../differenceInMonths/index.js":"8lj6Z","../differenceInSeconds/index.js":"5uZgU","../_lib/defaultLocale/index.js":"1rVeP","../toDate/index.js":"fsust","../_lib/cloneObject/index.js":"PgZBT","../_lib/assign/index.js":"hBuJM","../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"PgZBT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../assign/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function cloneObject(object) {
    return (0, _indexJsDefault.default)({}, object);
}
exports.default = cloneObject;

},{"../assign/index.js":"hBuJM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBuJM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function assign(target, object) {
    if (target == null) throw new TypeError("assign requires that input parameter not be null or undefined");
    for(var property in object)if (Object.prototype.hasOwnProperty.call(object, property)) target[property] = object[property];
    return target;
}
exports.default = assign;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gN5ZD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/defaultOptions/index.js");
var _indexJs1 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../compareAsc/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/cloneObject/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/assign/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/defaultLocale/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs7);
var MILLISECONDS_IN_MINUTE = 60000;
var MINUTES_IN_DAY = 1440;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;
function formatDistanceStrict(dirtyDate, dirtyBaseDate, options) {
    var _ref, _options$locale, _options$roundingMeth;
    (0, _indexJsDefault6.default)(2, arguments);
    var defaultOptions = (0, _indexJs.getDefaultOptions)();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : (0, _indexJsDefault5.default);
    if (!locale.formatDistance) throw new RangeError("locale must contain localize.formatDistance property");
    var comparison = (0, _indexJsDefault1.default)(dirtyDate, dirtyBaseDate);
    if (isNaN(comparison)) throw new RangeError("Invalid time value");
    var localizeOptions = (0, _indexJsDefault4.default)((0, _indexJsDefault3.default)(options), {
        addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
        comparison: comparison
    });
    var dateLeft;
    var dateRight;
    if (comparison > 0) {
        dateLeft = (0, _indexJsDefault2.default)(dirtyBaseDate);
        dateRight = (0, _indexJsDefault2.default)(dirtyDate);
    } else {
        dateLeft = (0, _indexJsDefault2.default)(dirtyDate);
        dateRight = (0, _indexJsDefault2.default)(dirtyBaseDate);
    }
    var roundingMethod = String((_options$roundingMeth = options === null || options === void 0 ? void 0 : options.roundingMethod) !== null && _options$roundingMeth !== void 0 ? _options$roundingMeth : "round");
    var roundingMethodFn;
    if (roundingMethod === "floor") roundingMethodFn = Math.floor;
    else if (roundingMethod === "ceil") roundingMethodFn = Math.ceil;
    else if (roundingMethod === "round") roundingMethodFn = Math.round;
    else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
    var milliseconds = dateRight.getTime() - dateLeft.getTime();
    var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
    var timezoneOffset = (0, _indexJsDefault.default)(dateRight) - (0, _indexJsDefault.default)(dateLeft); // Use DST-normalized difference in minutes for years, months and days;
    // use regular difference in minutes for hours, minutes and seconds.
    var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
    var defaultUnit = options === null || options === void 0 ? void 0 : options.unit;
    var unit;
    if (!defaultUnit) {
        if (minutes < 1) unit = "second";
        else if (minutes < 60) unit = "minute";
        else if (minutes < MINUTES_IN_DAY) unit = "hour";
        else if (dstNormalizedMinutes < MINUTES_IN_MONTH) unit = "day";
        else if (dstNormalizedMinutes < MINUTES_IN_YEAR) unit = "month";
        else unit = "year";
    } else unit = String(defaultUnit);
     // 0 up to 60 seconds
    if (unit === "second") {
        var seconds = roundingMethodFn(milliseconds / 1000);
        return locale.formatDistance("xSeconds", seconds, localizeOptions); // 1 up to 60 mins
    } else if (unit === "minute") {
        var roundedMinutes = roundingMethodFn(minutes);
        return locale.formatDistance("xMinutes", roundedMinutes, localizeOptions); // 1 up to 24 hours
    } else if (unit === "hour") {
        var hours = roundingMethodFn(minutes / 60);
        return locale.formatDistance("xHours", hours, localizeOptions); // 1 up to 30 days
    } else if (unit === "day") {
        var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
        return locale.formatDistance("xDays", days, localizeOptions); // 1 up to 12 months
    } else if (unit === "month") {
        var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
        return months === 12 && defaultUnit !== "month" ? locale.formatDistance("xYears", 1, localizeOptions) : locale.formatDistance("xMonths", months, localizeOptions); // 1 year up to max Date
    } else if (unit === "year") {
        var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
        return locale.formatDistance("xYears", years, localizeOptions);
    }
    throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
exports.default = formatDistanceStrict;

},{"../_lib/defaultOptions/index.js":"dWs8l","../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../compareAsc/index.js":"h01l4","../toDate/index.js":"fsust","../_lib/cloneObject/index.js":"PgZBT","../_lib/assign/index.js":"hBuJM","../_lib/defaultLocale/index.js":"1rVeP","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kV5oc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../formatDistance/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function formatDistanceToNow(dirtyDate, options) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate, Date.now(), options);
}
exports.default = formatDistanceToNow;

},{"../formatDistance/index.js":"lPnhm","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9FmDM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../formatDistanceStrict/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function formatDistanceToNowStrict(dirtyDate, options) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate, Date.now(), options);
}
exports.default = formatDistanceToNowStrict;

},{"../formatDistanceStrict/index.js":"gN5ZD","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gZD5H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/defaultOptions/index.js");
var _indexJs1 = require("../_lib/defaultLocale/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var defaultFormat = [
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds"
];
function formatDuration(duration, options) {
    var _ref, _options$locale, _options$format, _options$zero, _options$delimiter;
    if (arguments.length < 1) throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
    var defaultOptions = (0, _indexJs.getDefaultOptions)();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : (0, _indexJsDefault.default);
    var format = (_options$format = options === null || options === void 0 ? void 0 : options.format) !== null && _options$format !== void 0 ? _options$format : defaultFormat;
    var zero = (_options$zero = options === null || options === void 0 ? void 0 : options.zero) !== null && _options$zero !== void 0 ? _options$zero : false;
    var delimiter = (_options$delimiter = options === null || options === void 0 ? void 0 : options.delimiter) !== null && _options$delimiter !== void 0 ? _options$delimiter : " ";
    if (!locale.formatDistance) return "";
    var result = format.reduce(function(acc, unit) {
        var token = "x".concat(unit.replace(/(^.)/, function(m) {
            return m.toUpperCase();
        }));
        var value = duration[unit];
        if (typeof value === "number" && (zero || duration[unit])) return acc.concat(locale.formatDistance(token, value));
        return acc;
    }, []).join(delimiter);
    return result;
}
exports.default = formatDuration;

},{"../_lib/defaultOptions/index.js":"dWs8l","../_lib/defaultLocale/index.js":"1rVeP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbaH6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/addLeadingZeros/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function formatISO(date, options) {
    var _options$format, _options$representati;
    (0, _indexJsDefault2.default)(1, arguments);
    var originalDate = (0, _indexJsDefault.default)(date);
    if (isNaN(originalDate.getTime())) throw new RangeError("Invalid time value");
    var format = String((_options$format = options === null || options === void 0 ? void 0 : options.format) !== null && _options$format !== void 0 ? _options$format : "extended");
    var representation = String((_options$representati = options === null || options === void 0 ? void 0 : options.representation) !== null && _options$representati !== void 0 ? _options$representati : "complete");
    if (format !== "extended" && format !== "basic") throw new RangeError("format must be 'extended' or 'basic'");
    if (representation !== "date" && representation !== "time" && representation !== "complete") throw new RangeError("representation must be 'date', 'time', or 'complete'");
    var result = "";
    var tzOffset = "";
    var dateDelimiter = format === "extended" ? "-" : "";
    var timeDelimiter = format === "extended" ? ":" : ""; // Representation is either 'date' or 'complete'
    if (representation !== "time") {
        var day = (0, _indexJsDefault1.default)(originalDate.getDate(), 2);
        var month = (0, _indexJsDefault1.default)(originalDate.getMonth() + 1, 2);
        var year = (0, _indexJsDefault1.default)(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.
        result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
    } // Representation is either 'time' or 'complete'
    if (representation !== "date") {
        // Add the timezone.
        var offset = originalDate.getTimezoneOffset();
        if (offset !== 0) {
            var absoluteOffset = Math.abs(offset);
            var hourOffset = (0, _indexJsDefault1.default)(Math.floor(absoluteOffset / 60), 2);
            var minuteOffset = (0, _indexJsDefault1.default)(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.
            var sign = offset < 0 ? "+" : "-";
            tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
        } else tzOffset = "Z";
        var hour = (0, _indexJsDefault1.default)(originalDate.getHours(), 2);
        var minute = (0, _indexJsDefault1.default)(originalDate.getMinutes(), 2);
        var second = (0, _indexJsDefault1.default)(originalDate.getSeconds(), 2); // If there's also date, separate it with time with 'T'
        var separator = result === "" ? "" : "T"; // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
        var time = [
            hour,
            minute,
            second
        ].join(timeDelimiter); // HHmmss or HH:mm:ss.
        result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
    }
    return result;
}
exports.default = formatISO;

},{"../toDate/index.js":"fsust","../_lib/addLeadingZeros/index.js":"6pP6x","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lReZa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isValid/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/addLeadingZeros/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function formatISO9075(dirtyDate, options) {
    var _options$format, _options$representati;
    if (arguments.length < 1) throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
    var originalDate = (0, _indexJsDefault.default)(dirtyDate);
    if (!(0, _indexJsDefault1.default)(originalDate)) throw new RangeError("Invalid time value");
    var format = String((_options$format = options === null || options === void 0 ? void 0 : options.format) !== null && _options$format !== void 0 ? _options$format : "extended");
    var representation = String((_options$representati = options === null || options === void 0 ? void 0 : options.representation) !== null && _options$representati !== void 0 ? _options$representati : "complete");
    if (format !== "extended" && format !== "basic") throw new RangeError("format must be 'extended' or 'basic'");
    if (representation !== "date" && representation !== "time" && representation !== "complete") throw new RangeError("representation must be 'date', 'time', or 'complete'");
    var result = "";
    var dateDelimiter = format === "extended" ? "-" : "";
    var timeDelimiter = format === "extended" ? ":" : ""; // Representation is either 'date' or 'complete'
    if (representation !== "time") {
        var day = (0, _indexJsDefault2.default)(originalDate.getDate(), 2);
        var month = (0, _indexJsDefault2.default)(originalDate.getMonth() + 1, 2);
        var year = (0, _indexJsDefault2.default)(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.
        result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
    } // Representation is either 'time' or 'complete'
    if (representation !== "date") {
        var hour = (0, _indexJsDefault2.default)(originalDate.getHours(), 2);
        var minute = (0, _indexJsDefault2.default)(originalDate.getMinutes(), 2);
        var second = (0, _indexJsDefault2.default)(originalDate.getSeconds(), 2); // If there's also date, separate it with time with a space
        var separator = result === "" ? "" : " "; // HHmmss or HH:mm:ss.
        result = "".concat(result).concat(separator).concat(hour).concat(timeDelimiter).concat(minute).concat(timeDelimiter).concat(second);
    }
    return result;
}
exports.default = formatISO9075;

},{"../toDate/index.js":"fsust","../isValid/index.js":"eXoMl","../_lib/addLeadingZeros/index.js":"6pP6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFSRd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function formatISODuration(duration) {
    (0, _indexJsDefault.default)(1, arguments);
    if (_typeof(duration) !== "object") throw new Error("Duration must be an object");
    var _duration$years = duration.years, years = _duration$years === void 0 ? 0 : _duration$years, _duration$months = duration.months, months = _duration$months === void 0 ? 0 : _duration$months, _duration$days = duration.days, days = _duration$days === void 0 ? 0 : _duration$days, _duration$hours = duration.hours, hours = _duration$hours === void 0 ? 0 : _duration$hours, _duration$minutes = duration.minutes, minutes = _duration$minutes === void 0 ? 0 : _duration$minutes, _duration$seconds = duration.seconds, seconds = _duration$seconds === void 0 ? 0 : _duration$seconds;
    return "P".concat(years, "Y").concat(months, "M").concat(days, "DT").concat(hours, "H").concat(minutes, "M").concat(seconds, "S");
}
exports.default = formatISODuration;

},{"../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cNE6k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isValid/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/addLeadingZeros/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function formatRFC3339(dirtyDate, options) {
    var _options$fractionDigi;
    if (arguments.length < 1) throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    var originalDate = (0, _indexJsDefault.default)(dirtyDate);
    if (!(0, _indexJsDefault1.default)(originalDate)) throw new RangeError("Invalid time value");
    var fractionDigits = Number((_options$fractionDigi = options === null || options === void 0 ? void 0 : options.fractionDigits) !== null && _options$fractionDigi !== void 0 ? _options$fractionDigi : 0); // Test if fractionDigits is between 0 and 3 _and_ is not NaN
    if (!(fractionDigits >= 0 && fractionDigits <= 3)) throw new RangeError("fractionDigits must be between 0 and 3 inclusively");
    var day = (0, _indexJsDefault2.default)(originalDate.getDate(), 2);
    var month = (0, _indexJsDefault2.default)(originalDate.getMonth() + 1, 2);
    var year = originalDate.getFullYear();
    var hour = (0, _indexJsDefault2.default)(originalDate.getHours(), 2);
    var minute = (0, _indexJsDefault2.default)(originalDate.getMinutes(), 2);
    var second = (0, _indexJsDefault2.default)(originalDate.getSeconds(), 2);
    var fractionalSecond = "";
    if (fractionDigits > 0) {
        var milliseconds = originalDate.getMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, fractionDigits - 3));
        fractionalSecond = "." + (0, _indexJsDefault2.default)(fractionalSeconds, fractionDigits);
    }
    var offset = "";
    var tzOffset = originalDate.getTimezoneOffset();
    if (tzOffset !== 0) {
        var absoluteOffset = Math.abs(tzOffset);
        var hourOffset = (0, _indexJsDefault2.default)((0, _indexJsDefault3.default)(absoluteOffset / 60), 2);
        var minuteOffset = (0, _indexJsDefault2.default)(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.
        var sign = tzOffset < 0 ? "+" : "-";
        offset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else offset = "Z";
    return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second).concat(fractionalSecond).concat(offset);
}
exports.default = formatRFC3339;

},{"../toDate/index.js":"fsust","../isValid/index.js":"eXoMl","../_lib/addLeadingZeros/index.js":"6pP6x","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56K9a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isValid/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/addLeadingZeros/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function formatRFC7231(dirtyDate) {
    if (arguments.length < 1) throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    var originalDate = (0, _indexJsDefault.default)(dirtyDate);
    if (!(0, _indexJsDefault1.default)(originalDate)) throw new RangeError("Invalid time value");
    var dayName = days[originalDate.getUTCDay()];
    var dayOfMonth = (0, _indexJsDefault2.default)(originalDate.getUTCDate(), 2);
    var monthName = months[originalDate.getUTCMonth()];
    var year = originalDate.getUTCFullYear();
    var hour = (0, _indexJsDefault2.default)(originalDate.getUTCHours(), 2);
    var minute = (0, _indexJsDefault2.default)(originalDate.getUTCMinutes(), 2);
    var second = (0, _indexJsDefault2.default)(originalDate.getUTCSeconds(), 2); // Result variables.
    return "".concat(dayName, ", ").concat(dayOfMonth, " ").concat(monthName, " ").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(second, " GMT");
}
exports.default = formatRFC7231;

},{"../toDate/index.js":"fsust","../isValid/index.js":"eXoMl","../_lib/addLeadingZeros/index.js":"6pP6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k1fV5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/defaultOptions/index.js");
var _indexJs1 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../format/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/defaultLocale/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../subMilliseconds/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../toDate/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("../_lib/toInteger/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
function formatRelative(dirtyDate, dirtyBaseDate, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$weekStartsOn, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault6.default)(2, arguments);
    var date = (0, _indexJsDefault4.default)(dirtyDate);
    var baseDate = (0, _indexJsDefault4.default)(dirtyBaseDate);
    var defaultOptions = (0, _indexJs.getDefaultOptions)();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : (0, _indexJsDefault2.default);
    var weekStartsOn = (0, _indexJsDefault7.default)((_ref2 = (_ref3 = (_ref4 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.weekStartsOn) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : 0);
    if (!locale.localize) throw new RangeError("locale must contain localize property");
    if (!locale.formatLong) throw new RangeError("locale must contain formatLong property");
    if (!locale.formatRelative) throw new RangeError("locale must contain formatRelative property");
    var diff = (0, _indexJsDefault.default)(date, baseDate);
    if (isNaN(diff)) throw new RangeError("Invalid time value");
    var token;
    if (diff < -6) token = "other";
    else if (diff < -1) token = "lastWeek";
    else if (diff < 0) token = "yesterday";
    else if (diff < 1) token = "today";
    else if (diff < 2) token = "tomorrow";
    else if (diff < 7) token = "nextWeek";
    else token = "other";
    var utcDate = (0, _indexJsDefault3.default)(date, (0, _indexJsDefault5.default)(date));
    var utcBaseDate = (0, _indexJsDefault3.default)(baseDate, (0, _indexJsDefault5.default)(baseDate));
    var formatStr = locale.formatRelative(token, utcDate, utcBaseDate, {
        locale: locale,
        weekStartsOn: weekStartsOn
    });
    return (0, _indexJsDefault1.default)(date, formatStr, {
        locale: locale,
        weekStartsOn: weekStartsOn
    });
}
exports.default = formatRelative;

},{"../_lib/defaultOptions/index.js":"dWs8l","../differenceInCalendarDays/index.js":"adZXy","../format/index.js":"lnm6V","../_lib/defaultLocale/index.js":"1rVeP","../subMilliseconds/index.js":"lL2M9","../toDate/index.js":"fsust","../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"zfeMe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function fromUnixTime(dirtyUnixTime) {
    (0, _indexJsDefault2.default)(1, arguments);
    var unixTime = (0, _indexJsDefault1.default)(dirtyUnixTime);
    return (0, _indexJsDefault.default)(unixTime * 1000);
}
exports.default = fromUnixTime;

},{"../toDate/index.js":"fsust","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"754fh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getDate(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var dayOfMonth = date.getDate();
    return dayOfMonth;
}
exports.default = getDate;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNMnL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getDay(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getDay();
    return day;
}
exports.default = getDay;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jK3j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function getDayOfYear(dirtyDate) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var diff = (0, _indexJsDefault2.default)(date, (0, _indexJsDefault1.default)(date));
    var dayOfYear = diff + 1;
    return dayOfYear;
}
exports.default = getDayOfYear;

},{"../toDate/index.js":"fsust","../startOfYear/index.js":"lgYqj","../differenceInCalendarDays/index.js":"adZXy","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d31S3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getDaysInMonth(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getFullYear();
    var monthIndex = date.getMonth();
    var lastDayOfMonth = new Date(0);
    lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
    lastDayOfMonth.setHours(0, 0, 0, 0);
    return lastDayOfMonth.getDate();
}
exports.default = getDaysInMonth;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7P4ES":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isLeapYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function getDaysInYear(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    if (String(new Date(date)) === "Invalid Date") return NaN;
    return (0, _indexJsDefault1.default)(date) ? 366 : 365;
}
exports.default = getDaysInYear;

},{"../toDate/index.js":"fsust","../isLeapYear/index.js":"6KuLK","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KuLK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isLeapYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getFullYear();
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
exports.default = isLeapYear;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbqEx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getDecade(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getFullYear();
    var decade = Math.floor(year / 10) * 10;
    return decade;
}
exports.default = getDecade;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5eSfl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/defaultOptions/index.js");
var _indexJs1 = require("../_lib/assign/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
function getDefaultOptions() {
    return (0, _indexJsDefault.default)({}, (0, _indexJs.getDefaultOptions)());
}
exports.default = getDefaultOptions;

},{"../_lib/defaultOptions/index.js":"dWs8l","../_lib/assign/index.js":"hBuJM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k3IR8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getHours(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var hours = date.getHours();
    return hours;
}
exports.default = getHours;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"51Xb0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getISODay(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getDay();
    if (day === 0) day = 7;
    return day;
}
exports.default = getISODay;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hp1by":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000;
function getISOWeek(dirtyDate) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var diff = (0, _indexJsDefault1.default)(date).getTime() - (0, _indexJsDefault2.default)(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getISOWeek;

},{"../toDate/index.js":"fsust","../startOfISOWeek/index.js":"eEFWQ","../startOfISOWeekYear/index.js":"d30Dg","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1w5ZO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addWeeks/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_WEEK = 604800000;
function getISOWeeksInYear(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    var thisYear = (0, _indexJsDefault.default)(dirtyDate);
    var nextYear = (0, _indexJsDefault.default)((0, _indexJsDefault1.default)(thisYear, 60));
    var diff = nextYear.valueOf() - thisYear.valueOf(); // Round the number of weeks to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK);
}
exports.default = getISOWeeksInYear;

},{"../startOfISOWeekYear/index.js":"d30Dg","../addWeeks/index.js":"gPOA0","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHyw5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getMilliseconds(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var milliseconds = date.getMilliseconds();
    return milliseconds;
}
exports.default = getMilliseconds;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kIX6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getMinutes(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var minutes = date.getMinutes();
    return minutes;
}
exports.default = getMinutes;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3U40":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getMonth(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var month = date.getMonth();
    return month;
}
exports.default = getMonth;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17c0H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var MILLISECONDS_IN_DAY = 86400000;
function getOverlappingDaysInIntervals(dirtyIntervalLeft, dirtyIntervalRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var intervalLeft = dirtyIntervalLeft || {};
    var intervalRight = dirtyIntervalRight || {};
    var leftStartTime = (0, _indexJsDefault.default)(intervalLeft.start).getTime();
    var leftEndTime = (0, _indexJsDefault.default)(intervalLeft.end).getTime();
    var rightStartTime = (0, _indexJsDefault.default)(intervalRight.start).getTime();
    var rightEndTime = (0, _indexJsDefault.default)(intervalRight.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) throw new RangeError("Invalid interval");
    var isOverlapping = leftStartTime < rightEndTime && rightStartTime < leftEndTime;
    if (!isOverlapping) return 0;
    var overlapStartDate = rightStartTime < leftStartTime ? leftStartTime : rightStartTime;
    var overlapEndDate = rightEndTime > leftEndTime ? leftEndTime : rightEndTime;
    var differenceInMs = overlapEndDate - overlapStartDate;
    return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY);
}
exports.default = getOverlappingDaysInIntervals;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cZ7mt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getSeconds(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var seconds = date.getSeconds();
    return seconds;
}
exports.default = getSeconds;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1UhOp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getTime(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var timestamp = date.getTime();
    return timestamp;
}
exports.default = getTime;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9kv80":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getTime/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getUnixTime(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return Math.floor((0, _indexJsDefault.default)(dirtyDate) / 1000);
}
exports.default = getUnixTime;

},{"../getTime/index.js":"1UhOp","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8sqtB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfWeekYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000;
function getWeek(dirtyDate, options) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault2.default)(dirtyDate);
    var diff = (0, _indexJsDefault.default)(date, options).getTime() - (0, _indexJsDefault1.default)(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getWeek;

},{"../startOfWeek/index.js":"fD46d","../startOfWeekYear/index.js":"6b4m8","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6b4m8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/defaultOptions/index.js");
function startOfWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault3.default)(1, arguments);
    var defaultOptions = (0, _indexJs4.getDefaultOptions)();
    var firstWeekContainsDate = (0, _indexJsDefault2.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = (0, _indexJsDefault.default)(dirtyDate, options);
    var firstWeek = new Date(0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    var date = (0, _indexJsDefault1.default)(firstWeek, options);
    return date;
}
exports.default = startOfWeekYear;

},{"../getWeekYear/index.js":"aNYMo","../startOfWeek/index.js":"fD46d","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aNYMo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/defaultOptions/index.js");
function getWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var year = date.getFullYear();
    var defaultOptions = (0, _indexJs4.getDefaultOptions)();
    var firstWeekContainsDate = (0, _indexJsDefault2.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = (0, _indexJsDefault.default)(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = (0, _indexJsDefault.default)(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getWeekYear;

},{"../startOfWeek/index.js":"fD46d","../toDate/index.js":"fsust","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ib5n1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/defaultOptions/index.js");
var _indexJs1 = require("../getDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../getDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../startOfMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/toInteger/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs5);
function getWeekOfMonth(date, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault3.default)(1, arguments);
    var defaultOptions = (0, _indexJs.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault4.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var currentDayOfMonth = (0, _indexJsDefault.default)(date);
    if (isNaN(currentDayOfMonth)) return NaN;
    var startWeekDay = (0, _indexJsDefault1.default)((0, _indexJsDefault2.default)(date));
    var lastDayOfFirstWeek = weekStartsOn - startWeekDay;
    if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7;
    var remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
    return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1;
}
exports.default = getWeekOfMonth;

},{"../_lib/defaultOptions/index.js":"dWs8l","../getDate/index.js":"754fh","../getDay/index.js":"jNMnL","../startOfMonth/index.js":"6xvSk","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jaE4J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInCalendarWeeks/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../lastDayOfMonth/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function getWeeksInMonth(date, options) {
    (0, _indexJsDefault3.default)(1, arguments);
    return (0, _indexJsDefault.default)((0, _indexJsDefault1.default)(date), (0, _indexJsDefault2.default)(date), options) + 1;
}
exports.default = getWeeksInMonth;

},{"../differenceInCalendarWeeks/index.js":"7Le9T","../lastDayOfMonth/index.js":"6a7AM","../startOfMonth/index.js":"6xvSk","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6a7AM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function lastDayOfMonth(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = lastDayOfMonth;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"U2SFP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate).getFullYear();
}
exports.default = getYear;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsXWh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function hoursToMilliseconds(hours) {
    (0, _indexJsDefault.default)(1, arguments);
    return Math.floor(hours * (0, _indexJs1.millisecondsInHour));
}
exports.default = hoursToMilliseconds;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iKCoT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function hoursToMinutes(hours) {
    (0, _indexJsDefault.default)(1, arguments);
    return Math.floor(hours * (0, _indexJs1.minutesInHour));
}
exports.default = hoursToMinutes;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bwPIg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function hoursToSeconds(hours) {
    (0, _indexJsDefault.default)(1, arguments);
    return Math.floor(hours * (0, _indexJs1.secondsInHour));
}
exports.default = hoursToSeconds;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5hNtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../compareAsc/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../add/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../differenceInDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../differenceInHours/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../differenceInMinutes/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../differenceInMonths/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../differenceInSeconds/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../differenceInYears/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("../toDate/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
function intervalToDuration(interval) {
    (0, _indexJsDefault9.default)(1, arguments);
    var start = (0, _indexJsDefault8.default)(interval.start);
    var end = (0, _indexJsDefault8.default)(interval.end);
    if (isNaN(start.getTime())) throw new RangeError("Start Date is invalid");
    if (isNaN(end.getTime())) throw new RangeError("End Date is invalid");
    var duration = {};
    duration.years = Math.abs((0, _indexJsDefault7.default)(end, start));
    var sign = (0, _indexJsDefault.default)(end, start);
    var remainingMonths = (0, _indexJsDefault1.default)(start, {
        years: sign * duration.years
    });
    duration.months = Math.abs((0, _indexJsDefault5.default)(end, remainingMonths));
    var remainingDays = (0, _indexJsDefault1.default)(remainingMonths, {
        months: sign * duration.months
    });
    duration.days = Math.abs((0, _indexJsDefault2.default)(end, remainingDays));
    var remainingHours = (0, _indexJsDefault1.default)(remainingDays, {
        days: sign * duration.days
    });
    duration.hours = Math.abs((0, _indexJsDefault3.default)(end, remainingHours));
    var remainingMinutes = (0, _indexJsDefault1.default)(remainingHours, {
        hours: sign * duration.hours
    });
    duration.minutes = Math.abs((0, _indexJsDefault4.default)(end, remainingMinutes));
    var remainingSeconds = (0, _indexJsDefault1.default)(remainingMinutes, {
        minutes: sign * duration.minutes
    });
    duration.seconds = Math.abs((0, _indexJsDefault6.default)(end, remainingSeconds));
    return duration;
}
exports.default = intervalToDuration;

},{"../compareAsc/index.js":"h01l4","../add/index.js":"h7zb2","../differenceInDays/index.js":"1mpAo","../differenceInHours/index.js":"9Vac7","../differenceInMinutes/index.js":"4Qv17","../differenceInMonths/index.js":"8lj6Z","../differenceInSeconds/index.js":"5uZgU","../differenceInYears/index.js":"2tncr","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jNm6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function intlFormat(date, formatOrLocale, localeOptions) {
    var _localeOptions;
    (0, _indexJsDefault.default)(1, arguments);
    var formatOptions;
    if (isFormatOptions(formatOrLocale)) formatOptions = formatOrLocale;
    else localeOptions = formatOrLocale;
    return new Intl.DateTimeFormat((_localeOptions = localeOptions) === null || _localeOptions === void 0 ? void 0 : _localeOptions.locale, formatOptions).format(date);
}
exports.default = intlFormat;
function isFormatOptions(opts) {
    return opts !== undefined && !("locale" in opts);
}

},{"../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKVnj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../constants/index.js");
var _indexJs1 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../differenceInCalendarMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../differenceInCalendarQuarters/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../differenceInCalendarWeeks/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../differenceInCalendarYears/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../differenceInHours/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../differenceInMinutes/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("../differenceInSeconds/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../toDate/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs10);
function intlFormatDistance(date, baseDate, options) {
    (0, _indexJsDefault9.default)(2, arguments);
    var value = 0;
    var unit;
    var dateLeft = (0, _indexJsDefault8.default)(date);
    var dateRight = (0, _indexJsDefault8.default)(baseDate);
    if (!(options !== null && options !== void 0 && options.unit)) {
        // Get the unit based on diffInSeconds calculations if no unit is specified
        var diffInSeconds = (0, _indexJsDefault7.default)(dateLeft, dateRight); // The smallest unit
        if (Math.abs(diffInSeconds) < (0, _indexJs.secondsInMinute)) {
            value = (0, _indexJsDefault7.default)(dateLeft, dateRight);
            unit = "second";
        } else if (Math.abs(diffInSeconds) < (0, _indexJs.secondsInHour)) {
            value = (0, _indexJsDefault6.default)(dateLeft, dateRight);
            unit = "minute";
        } else if (Math.abs(diffInSeconds) < (0, _indexJs.secondsInDay) && Math.abs((0, _indexJsDefault.default)(dateLeft, dateRight)) < 1) {
            value = (0, _indexJsDefault5.default)(dateLeft, dateRight);
            unit = "hour";
        } else if (Math.abs(diffInSeconds) < (0, _indexJs.secondsInWeek) && (value = (0, _indexJsDefault.default)(dateLeft, dateRight)) && Math.abs(value) < 7) unit = "day";
        else if (Math.abs(diffInSeconds) < (0, _indexJs.secondsInMonth)) {
            value = (0, _indexJsDefault3.default)(dateLeft, dateRight);
            unit = "week";
        } else if (Math.abs(diffInSeconds) < (0, _indexJs.secondsInQuarter)) {
            value = (0, _indexJsDefault1.default)(dateLeft, dateRight);
            unit = "month";
        } else if (Math.abs(diffInSeconds) < (0, _indexJs.secondsInYear)) {
            if ((0, _indexJsDefault2.default)(dateLeft, dateRight) < 4) {
                // To filter out cases that are less than a year but match 4 quarters
                value = (0, _indexJsDefault2.default)(dateLeft, dateRight);
                unit = "quarter";
            } else {
                value = (0, _indexJsDefault4.default)(dateLeft, dateRight);
                unit = "year";
            }
        } else {
            value = (0, _indexJsDefault4.default)(dateLeft, dateRight);
            unit = "year";
        }
    } else {
        // Get the value if unit is specified
        unit = options === null || options === void 0 ? void 0 : options.unit;
        if (unit === "second") value = (0, _indexJsDefault7.default)(dateLeft, dateRight);
        else if (unit === "minute") value = (0, _indexJsDefault6.default)(dateLeft, dateRight);
        else if (unit === "hour") value = (0, _indexJsDefault5.default)(dateLeft, dateRight);
        else if (unit === "day") value = (0, _indexJsDefault.default)(dateLeft, dateRight);
        else if (unit === "week") value = (0, _indexJsDefault3.default)(dateLeft, dateRight);
        else if (unit === "month") value = (0, _indexJsDefault1.default)(dateLeft, dateRight);
        else if (unit === "quarter") value = (0, _indexJsDefault2.default)(dateLeft, dateRight);
        else if (unit === "year") value = (0, _indexJsDefault4.default)(dateLeft, dateRight);
    }
    var rtf = new Intl.RelativeTimeFormat(options === null || options === void 0 ? void 0 : options.locale, {
        localeMatcher: options === null || options === void 0 ? void 0 : options.localeMatcher,
        numeric: (options === null || options === void 0 ? void 0 : options.numeric) || "auto",
        style: options === null || options === void 0 ? void 0 : options.style
    });
    return rtf.format(value, unit);
}
exports.default = intlFormatDistance;

},{"../constants/index.js":"iOhcx","../differenceInCalendarDays/index.js":"adZXy","../differenceInCalendarMonths/index.js":"8oypH","../differenceInCalendarQuarters/index.js":"bgfRW","../differenceInCalendarWeeks/index.js":"7Le9T","../differenceInCalendarYears/index.js":"f4WIY","../differenceInHours/index.js":"9Vac7","../differenceInMinutes/index.js":"4Qv17","../differenceInSeconds/index.js":"5uZgU","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4VQv8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isAfter(dirtyDate, dirtyDateToCompare) {
    (0, _indexJsDefault1.default)(2, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var dateToCompare = (0, _indexJsDefault.default)(dirtyDateToCompare);
    return date.getTime() > dateToCompare.getTime();
}
exports.default = isAfter;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"CNBdH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isBefore(dirtyDate, dirtyDateToCompare) {
    (0, _indexJsDefault1.default)(2, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var dateToCompare = (0, _indexJsDefault.default)(dirtyDateToCompare);
    return date.getTime() < dateToCompare.getTime();
}
exports.default = isBefore;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8JhlH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isEqual(dirtyLeftDate, dirtyRightDate) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyLeftDate);
    var dateRight = (0, _indexJsDefault.default)(dirtyRightDate);
    return dateLeft.getTime() === dateRight.getTime();
}
exports.default = isEqual;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvlDW":[function(require,module,exports) {
/**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param {Number} year of the date to check
 * @param {Number} month of the date to check
 * @param {Number} day of the date to check
 * @returns {Boolean} the date exists
 * @throws {TypeError} 3 arguments required
 *
 * @example
 * // For the valid date:
 * const result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isExists(2018, 1, 31)
 * //=> false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isExists(year, month, day) {
    if (arguments.length < 3) throw new TypeError("3 argument required, but only " + arguments.length + " present");
    var date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}
exports.default = isExists;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOq2g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isFirstDayOfMonth(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate).getDate() === 1;
}
exports.default = isFirstDayOfMonth;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Ebbi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isFriday(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate).getDay() === 5;
}
exports.default = isFriday;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpCF8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isFuture(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate).getTime() > Date.now();
}
exports.default = isFuture;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbqMp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../parse/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isValid/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isMatch(dateString, formatString, options) {
    (0, _indexJsDefault2.default)(2, arguments);
    return (0, _indexJsDefault1.default)((0, _indexJsDefault.default)(dateString, formatString, new Date(), options));
}
exports.default = isMatch;

},{"../parse/index.js":"kVw8O","../isValid/index.js":"eXoMl","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVw8O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/defaultLocale/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../subMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/assign/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/format/longFormatters/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/protectedTokens/index.js");
var _indexJs7 = require("../_lib/toInteger/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
var _setterJs = require("./_lib/Setter.js");
var _indexJs9 = require("./_lib/parsers/index.js");
var _indexJs10 = require("../_lib/defaultOptions/index.js"); // This RegExp consists of three parts separated by `|`:
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    (0, _indexJsDefault7.default)(3, arguments);
    var dateString = String(dirtyDateString);
    var formatString = String(dirtyFormatString);
    var defaultOptions = (0, _indexJs10.getDefaultOptions)();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : (0, _indexJsDefault.default);
    if (!locale.match) throw new RangeError("locale must contain match property");
    var firstWeekContainsDate = (0, _indexJsDefault6.default)((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var weekStartsOn = (0, _indexJsDefault6.default)((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (formatString === "") {
        if (dateString === "") return (0, _indexJsDefault2.default)(dirtyReferenceDate);
        else return new Date(NaN);
    }
    var subFnOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale
    }; // If timezone isn't specified, it will be set to the system timezone
    var setters = [
        new (0, _setterJs.DateToSystemTimezoneSetter)()
    ];
    var tokens = formatString.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter in (0, _indexJsDefault4.default)) {
            var longFormatter = (0, _indexJsDefault4.default)[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp);
    var usedTokens = [];
    var _iterator = _createForOfIteratorHelper(tokens), _step;
    try {
        var _loop = function _loop() {
            var token = _step.value;
            if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0, _indexJs6.isProtectedWeekYearToken)(token)) (0, _indexJs6.throwProtectedError)(token, formatString, dirtyDateString);
            if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0, _indexJs6.isProtectedDayOfYearToken)(token)) (0, _indexJs6.throwProtectedError)(token, formatString, dirtyDateString);
            var firstCharacter = token[0];
            var parser = (0, _indexJs9.parsers)[firstCharacter];
            if (parser) {
                var incompatibleTokens = parser.incompatibleTokens;
                if (Array.isArray(incompatibleTokens)) {
                    var incompatibleToken = usedTokens.find(function(usedToken) {
                        return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
                    });
                    if (incompatibleToken) throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
                } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
                usedTokens.push({
                    token: firstCharacter,
                    fullToken: token
                });
                var parseResult = parser.run(dateString, token, locale.match, subFnOptions);
                if (!parseResult) return {
                    v: new Date(NaN)
                };
                setters.push(parseResult.setter);
                dateString = parseResult.rest;
            } else {
                if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
                 // Replace two single quote characters with one single quote character
                if (token === "''") token = "'";
                else if (firstCharacter === "'") token = cleanEscapedString(token);
                 // Cut token from string, or, if string doesn't match the token, return Invalid Date
                if (dateString.indexOf(token) === 0) dateString = dateString.slice(token.length);
                else return {
                    v: new Date(NaN)
                };
            }
        };
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var _ret = _loop();
            if (_typeof(_ret) === "object") return _ret.v;
        } // Check if the remaining input contains something other than whitespace
    } catch (err) {
        _iterator.e(err);
    } finally{
        _iterator.f();
    }
    if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) return new Date(NaN);
    var uniquePrioritySetters = setters.map(function(setter) {
        return setter.priority;
    }).sort(function(a, b) {
        return b - a;
    }).filter(function(priority, index, array) {
        return array.indexOf(priority) === index;
    }).map(function(priority) {
        return setters.filter(function(setter) {
            return setter.priority === priority;
        }).sort(function(a, b) {
            return b.subPriority - a.subPriority;
        });
    }).map(function(setterArray) {
        return setterArray[0];
    });
    var date = (0, _indexJsDefault2.default)(dirtyReferenceDate);
    if (isNaN(date.getTime())) return new Date(NaN);
     // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    var utcDate = (0, _indexJsDefault1.default)(date, (0, _indexJsDefault5.default)(date));
    var flags = {};
    var _iterator2 = _createForOfIteratorHelper(uniquePrioritySetters), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var setter = _step2.value;
            if (!setter.validate(utcDate, subFnOptions)) return new Date(NaN);
            var result = setter.set(utcDate, flags, subFnOptions); // Result is tuple (date, flags)
            if (Array.isArray(result)) {
                utcDate = result[0];
                (0, _indexJsDefault3.default)(flags, result[1]); // Result is date
            } else utcDate = result;
        }
    } catch (err1) {
        _iterator2.e(err1);
    } finally{
        _iterator2.f();
    }
    return utcDate;
}
exports.default = parse;
function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

},{"../_lib/defaultLocale/index.js":"1rVeP","../subMilliseconds/index.js":"lL2M9","../toDate/index.js":"fsust","../_lib/assign/index.js":"hBuJM","../_lib/format/longFormatters/index.js":"1ztit","../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../_lib/protectedTokens/index.js":"4R0Xq","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","./_lib/Setter.js":"iIumE","./_lib/parsers/index.js":"k4V8j","../_lib/defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iIumE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Setter", ()=>Setter);
parcelHelpers.export(exports, "ValueSetter", ()=>ValueSetter);
parcelHelpers.export(exports, "DateToSystemTimezoneSetter", ()=>DateToSystemTimezoneSetter);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = /*#__PURE__*/ function() {
    function Setter() {
        _classCallCheck(this, Setter);
        _defineProperty(this, "subPriority", 0);
    }
    _createClass(Setter, [
        {
            key: "validate",
            value: function validate(_utcDate, _options) {
                return true;
            }
        }
    ]);
    return Setter;
}();
var ValueSetter = /*#__PURE__*/ function(_Setter) {
    _inherits(ValueSetter, _Setter);
    var _super = _createSuper(ValueSetter);
    function ValueSetter(value, validateValue, setValue, priority, subPriority) {
        var _this;
        _classCallCheck(this, ValueSetter);
        _this = _super.call(this);
        _this.value = value;
        _this.validateValue = validateValue;
        _this.setValue = setValue;
        _this.priority = priority;
        if (subPriority) _this.subPriority = subPriority;
        return _this;
    }
    _createClass(ValueSetter, [
        {
            key: "validate",
            value: function validate(utcDate, options) {
                return this.validateValue(utcDate, this.value, options);
            }
        },
        {
            key: "set",
            value: function set(utcDate, flags, options) {
                return this.setValue(utcDate, flags, this.value, options);
            }
        }
    ]);
    return ValueSetter;
}(Setter);
var DateToSystemTimezoneSetter = /*#__PURE__*/ function(_Setter2) {
    _inherits(DateToSystemTimezoneSetter, _Setter2);
    var _super2 = _createSuper(DateToSystemTimezoneSetter);
    function DateToSystemTimezoneSetter() {
        var _this2;
        _classCallCheck(this, DateToSystemTimezoneSetter);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this2 = _super2.call.apply(_super2, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
        _defineProperty(_assertThisInitialized(_this2), "subPriority", -1);
        return _this2;
    }
    _createClass(DateToSystemTimezoneSetter, [
        {
            key: "set",
            value: function set(date, flags) {
                if (flags.timestampIsSet) return date;
                var convertedDate = new Date(0);
                convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
                return convertedDate;
            }
        }
    ]);
    return DateToSystemTimezoneSetter;
}(Setter);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k4V8j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parsers", ()=>parsers);
var _eraParserJs = require("./EraParser.js");
var _yearParserJs = require("./YearParser.js");
var _localWeekYearParserJs = require("./LocalWeekYearParser.js");
var _isoweekYearParserJs = require("./ISOWeekYearParser.js");
var _extendedYearParserJs = require("./ExtendedYearParser.js");
var _quarterParserJs = require("./QuarterParser.js");
var _standAloneQuarterParserJs = require("./StandAloneQuarterParser.js");
var _monthParserJs = require("./MonthParser.js");
var _standAloneMonthParserJs = require("./StandAloneMonthParser.js");
var _localWeekParserJs = require("./LocalWeekParser.js");
var _isoweekParserJs = require("./ISOWeekParser.js");
var _dateParserJs = require("./DateParser.js");
var _dayOfYearParserJs = require("./DayOfYearParser.js");
var _dayParserJs = require("./DayParser.js");
var _localDayParserJs = require("./LocalDayParser.js");
var _standAloneLocalDayParserJs = require("./StandAloneLocalDayParser.js");
var _isodayParserJs = require("./ISODayParser.js");
var _ampmparserJs = require("./AMPMParser.js");
var _ampmmidnightParserJs = require("./AMPMMidnightParser.js");
var _dayPeriodParserJs = require("./DayPeriodParser.js");
var _hour1To12ParserJs = require("./Hour1to12Parser.js");
var _hour0To23ParserJs = require("./Hour0to23Parser.js");
var _hour0To11ParserJs = require("./Hour0To11Parser.js");
var _hour1To24ParserJs = require("./Hour1To24Parser.js");
var _minuteParserJs = require("./MinuteParser.js");
var _secondParserJs = require("./SecondParser.js");
var _fractionOfSecondParserJs = require("./FractionOfSecondParser.js");
var _isotimezoneWithZParserJs = require("./ISOTimezoneWithZParser.js");
var _isotimezoneParserJs = require("./ISOTimezoneParser.js");
var _timestampSecondsParserJs = require("./TimestampSecondsParser.js");
var _timestampMillisecondsParserJs = require("./TimestampMillisecondsParser.js");
var parsers = {
    G: new (0, _eraParserJs.EraParser)(),
    y: new (0, _yearParserJs.YearParser)(),
    Y: new (0, _localWeekYearParserJs.LocalWeekYearParser)(),
    R: new (0, _isoweekYearParserJs.ISOWeekYearParser)(),
    u: new (0, _extendedYearParserJs.ExtendedYearParser)(),
    Q: new (0, _quarterParserJs.QuarterParser)(),
    q: new (0, _standAloneQuarterParserJs.StandAloneQuarterParser)(),
    M: new (0, _monthParserJs.MonthParser)(),
    L: new (0, _standAloneMonthParserJs.StandAloneMonthParser)(),
    w: new (0, _localWeekParserJs.LocalWeekParser)(),
    I: new (0, _isoweekParserJs.ISOWeekParser)(),
    d: new (0, _dateParserJs.DateParser)(),
    D: new (0, _dayOfYearParserJs.DayOfYearParser)(),
    E: new (0, _dayParserJs.DayParser)(),
    e: new (0, _localDayParserJs.LocalDayParser)(),
    c: new (0, _standAloneLocalDayParserJs.StandAloneLocalDayParser)(),
    i: new (0, _isodayParserJs.ISODayParser)(),
    a: new (0, _ampmparserJs.AMPMParser)(),
    b: new (0, _ampmmidnightParserJs.AMPMMidnightParser)(),
    B: new (0, _dayPeriodParserJs.DayPeriodParser)(),
    h: new (0, _hour1To12ParserJs.Hour1to12Parser)(),
    H: new (0, _hour0To23ParserJs.Hour0to23Parser)(),
    K: new (0, _hour0To11ParserJs.Hour0To11Parser)(),
    k: new (0, _hour1To24ParserJs.Hour1To24Parser)(),
    m: new (0, _minuteParserJs.MinuteParser)(),
    s: new (0, _secondParserJs.SecondParser)(),
    S: new (0, _fractionOfSecondParserJs.FractionOfSecondParser)(),
    X: new (0, _isotimezoneWithZParserJs.ISOTimezoneWithZParser)(),
    x: new (0, _isotimezoneParserJs.ISOTimezoneParser)(),
    t: new (0, _timestampSecondsParserJs.TimestampSecondsParser)(),
    T: new (0, _timestampMillisecondsParserJs.TimestampMillisecondsParser)()
};

},{"./EraParser.js":"aXnT0","./YearParser.js":"ahFj6","./LocalWeekYearParser.js":"65m4R","./ISOWeekYearParser.js":"6p6Sa","./ExtendedYearParser.js":"4rJp8","./QuarterParser.js":"lkQmG","./StandAloneQuarterParser.js":"9zxhy","./MonthParser.js":"7gzbd","./StandAloneMonthParser.js":"itoh7","./LocalWeekParser.js":"dcoE4","./ISOWeekParser.js":"fppkm","./DateParser.js":"lnbjC","./DayOfYearParser.js":"al32L","./DayParser.js":"aov76","./LocalDayParser.js":"hc8LA","./StandAloneLocalDayParser.js":"6igat","./ISODayParser.js":"2kwtL","./AMPMParser.js":"2zbXB","./AMPMMidnightParser.js":"jb5BD","./DayPeriodParser.js":"9kE14","./Hour1to12Parser.js":"gzNEC","./Hour0to23Parser.js":"j3kuC","./Hour0To11Parser.js":"73sgE","./Hour1To24Parser.js":"3WDRF","./MinuteParser.js":"eALta","./SecondParser.js":"1nVjx","./FractionOfSecondParser.js":"46M6Z","./ISOTimezoneWithZParser.js":"b1yp4","./ISOTimezoneParser.js":"bDXkg","./TimestampSecondsParser.js":"kPdA3","./TimestampMillisecondsParser.js":"gy8e8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXnT0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EraParser", ()=>EraParser);
var _parserJs = require("../Parser.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var EraParser = /*#__PURE__*/ function(_Parser) {
    _inherits(EraParser, _Parser);
    var _super = _createSuper(EraParser);
    function EraParser() {
        var _this;
        _classCallCheck(this, EraParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 140);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "R",
            "u",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(EraParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    // AD, BC
                    case "G":
                    case "GG":
                    case "GGG":
                        return match.era(dateString, {
                            width: "abbreviated"
                        }) || match.era(dateString, {
                            width: "narrow"
                        });
                    // A, B
                    case "GGGGG":
                        return match.era(dateString, {
                            width: "narrow"
                        });
                    // Anno Domini, Before Christ
                    case "GGGG":
                    default:
                        return match.era(dateString, {
                            width: "wide"
                        }) || match.era(dateString, {
                            width: "abbreviated"
                        }) || match.era(dateString, {
                            width: "narrow"
                        });
                }
            }
        },
        {
            key: "set",
            value: function set(date, flags, value) {
                flags.era = value;
                date.setUTCFullYear(value, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return EraParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eoGZr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Parser", ()=>Parser);
var _setterJs = require("./Setter.js");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Parser = /*#__PURE__*/ function() {
    function Parser() {
        _classCallCheck(this, Parser);
    }
    _createClass(Parser, [
        {
            key: "run",
            value: function run(dateString, token, match, options) {
                var result = this.parse(dateString, token, match, options);
                if (!result) return null;
                return {
                    setter: new (0, _setterJs.ValueSetter)(result.value, this.validate, this.set, this.priority, this.subPriority),
                    rest: result.rest
                };
            }
        },
        {
            key: "validate",
            value: function validate(_utcDate, _value, _options) {
                return true;
            }
        }
    ]);
    return Parser;
}();

},{"./Setter.js":"iIumE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ahFj6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "YearParser", ()=>YearParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var YearParser = /*#__PURE__*/ function(_Parser) {
    _inherits(YearParser, _Parser);
    var _super = _createSuper(YearParser);
    function YearParser() {
        var _this;
        _classCallCheck(this, YearParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 130);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "Y",
            "R",
            "u",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(YearParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(year) {
                    return {
                        year: year,
                        isTwoDigitYear: token === "yy"
                    };
                };
                switch(token){
                    case "y":
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(4, dateString), valueCallback);
                    case "yo":
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: "year"
                        }), valueCallback);
                    default:
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value.isTwoDigitYear || value.year > 0;
            }
        },
        {
            key: "set",
            value: function set(date, flags, value) {
                var currentYear = date.getUTCFullYear();
                if (value.isTwoDigitYear) {
                    var normalizedTwoDigitYear = (0, _utilsJs.normalizeTwoDigitYear)(value.year, currentYear);
                    date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
                    date.setUTCHours(0, 0, 0, 0);
                    return date;
                }
                var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
                date.setUTCFullYear(year, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return YearParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5y8M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapValue", ()=>mapValue);
parcelHelpers.export(exports, "parseNumericPattern", ()=>parseNumericPattern);
parcelHelpers.export(exports, "parseTimezonePattern", ()=>parseTimezonePattern);
parcelHelpers.export(exports, "parseAnyDigitsSigned", ()=>parseAnyDigitsSigned);
parcelHelpers.export(exports, "parseNDigits", ()=>parseNDigits);
parcelHelpers.export(exports, "parseNDigitsSigned", ()=>parseNDigitsSigned);
parcelHelpers.export(exports, "dayPeriodEnumToHours", ()=>dayPeriodEnumToHours);
parcelHelpers.export(exports, "normalizeTwoDigitYear", ()=>normalizeTwoDigitYear);
parcelHelpers.export(exports, "isLeapYearIndex", ()=>isLeapYearIndex);
var _indexJs = require("../../constants/index.js");
var _constantsJs = require("./constants.js");
function mapValue(parseFnResult, mapFn) {
    if (!parseFnResult) return parseFnResult;
    return {
        value: mapFn(parseFnResult.value),
        rest: parseFnResult.rest
    };
}
function parseNumericPattern(pattern, dateString) {
    var matchResult = dateString.match(pattern);
    if (!matchResult) return null;
    return {
        value: parseInt(matchResult[0], 10),
        rest: dateString.slice(matchResult[0].length)
    };
}
function parseTimezonePattern(pattern, dateString) {
    var matchResult = dateString.match(pattern);
    if (!matchResult) return null;
     // Input is 'Z'
    if (matchResult[0] === "Z") return {
        value: 0,
        rest: dateString.slice(1)
    };
    var sign = matchResult[1] === "+" ? 1 : -1;
    var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
    var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
    var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
    return {
        value: sign * (hours * (0, _indexJs.millisecondsInHour) + minutes * (0, _indexJs.millisecondsInMinute) + seconds * (0, _indexJs.millisecondsInSecond)),
        rest: dateString.slice(matchResult[0].length)
    };
}
function parseAnyDigitsSigned(dateString) {
    return parseNumericPattern((0, _constantsJs.numericPatterns).anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
    switch(n){
        case 1:
            return parseNumericPattern((0, _constantsJs.numericPatterns).singleDigit, dateString);
        case 2:
            return parseNumericPattern((0, _constantsJs.numericPatterns).twoDigits, dateString);
        case 3:
            return parseNumericPattern((0, _constantsJs.numericPatterns).threeDigits, dateString);
        case 4:
            return parseNumericPattern((0, _constantsJs.numericPatterns).fourDigits, dateString);
        default:
            return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
    }
}
function parseNDigitsSigned(n, dateString) {
    switch(n){
        case 1:
            return parseNumericPattern((0, _constantsJs.numericPatterns).singleDigitSigned, dateString);
        case 2:
            return parseNumericPattern((0, _constantsJs.numericPatterns).twoDigitsSigned, dateString);
        case 3:
            return parseNumericPattern((0, _constantsJs.numericPatterns).threeDigitsSigned, dateString);
        case 4:
            return parseNumericPattern((0, _constantsJs.numericPatterns).fourDigitsSigned, dateString);
        default:
            return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
    }
}
function dayPeriodEnumToHours(dayPeriod) {
    switch(dayPeriod){
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0;
    }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
    var isCommonEra = currentYear > 0; // Absolute number of the current year:
    // 1 -> 1 AC
    // 0 -> 1 BC
    // -1 -> 2 BC
    var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
    var result;
    if (absCurrentYear <= 50) result = twoDigitYear || 100;
    else {
        var rangeEnd = absCurrentYear + 50;
        var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
        var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
        result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
    }
    return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

},{"../../constants/index.js":"iOhcx","./constants.js":"dtRjG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dtRjG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numericPatterns", ()=>numericPatterns);
parcelHelpers.export(exports, "timezonePatterns", ()=>timezonePatterns);
var numericPatterns = {
    month: /^(1[0-2]|0?\d)/,
    // 0 to 12
    date: /^(3[0-1]|[0-2]?\d)/,
    // 0 to 31
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    // 0 to 366
    week: /^(5[0-3]|[0-4]?\d)/,
    // 0 to 53
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    // 0 to 23
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    // 0 to 24
    hour11h: /^(1[0-1]|0?\d)/,
    // 0 to 11
    hour12h: /^(1[0-2]|0?\d)/,
    // 0 to 12
    minute: /^[0-5]?\d/,
    // 0 to 59
    second: /^[0-5]?\d/,
    // 0 to 59
    singleDigit: /^\d/,
    // 0 to 9
    twoDigits: /^\d{1,2}/,
    // 0 to 99
    threeDigits: /^\d{1,3}/,
    // 0 to 999
    fourDigits: /^\d{1,4}/,
    // 0 to 9999
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    // 0 to 9, -0 to -9
    twoDigitsSigned: /^-?\d{1,2}/,
    // 0 to 99, -0 to -99
    threeDigitsSigned: /^-?\d{1,3}/,
    // 0 to 999, -0 to -999
    fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65m4R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalWeekYearParser", ()=>LocalWeekYearParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/getUTCWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/startOfUTCWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var LocalWeekYearParser = /*#__PURE__*/ function(_Parser) {
    _inherits(LocalWeekYearParser, _Parser);
    var _super = _createSuper(LocalWeekYearParser);
    function LocalWeekYearParser() {
        var _this;
        _classCallCheck(this, LocalWeekYearParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 130);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(LocalWeekYearParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(year) {
                    return {
                        year: year,
                        isTwoDigitYear: token === "YY"
                    };
                };
                switch(token){
                    case "Y":
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(4, dateString), valueCallback);
                    case "Yo":
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: "year"
                        }), valueCallback);
                    default:
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value.isTwoDigitYear || value.year > 0;
            }
        },
        {
            key: "set",
            value: function set(date, flags, value, options) {
                var currentYear = (0, _indexJsDefault.default)(date, options);
                if (value.isTwoDigitYear) {
                    var normalizedTwoDigitYear = (0, _utilsJs.normalizeTwoDigitYear)(value.year, currentYear);
                    date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
                    date.setUTCHours(0, 0, 0, 0);
                    return (0, _indexJsDefault1.default)(date, options);
                }
                var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
                date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
                date.setUTCHours(0, 0, 0, 0);
                return (0, _indexJsDefault1.default)(date, options);
            }
        }
    ]);
    return LocalWeekYearParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","../../../_lib/getUTCWeekYear/index.js":"8i6st","../../../_lib/startOfUTCWeek/index.js":"dDZbE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6p6Sa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ISOWeekYearParser", ()=>ISOWeekYearParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/startOfUTCISOWeek/index.js"); // ISO week-numbering year
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var ISOWeekYearParser = /*#__PURE__*/ function(_Parser) {
    _inherits(ISOWeekYearParser, _Parser);
    var _super = _createSuper(ISOWeekYearParser);
    function ISOWeekYearParser() {
        var _this;
        _classCallCheck(this, ISOWeekYearParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 130);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "G",
            "y",
            "Y",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(ISOWeekYearParser, [
        {
            key: "parse",
            value: function parse(dateString, token) {
                if (token === "R") return (0, _utilsJs.parseNDigitsSigned)(4, dateString);
                return (0, _utilsJs.parseNDigitsSigned)(token.length, dateString);
            }
        },
        {
            key: "set",
            value: function set(_date, _flags, value) {
                var firstWeekOfYear = new Date(0);
                firstWeekOfYear.setUTCFullYear(value, 0, 4);
                firstWeekOfYear.setUTCHours(0, 0, 0, 0);
                return (0, _indexJsDefault.default)(firstWeekOfYear);
            }
        }
    ]);
    return ISOWeekYearParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","../../../_lib/startOfUTCISOWeek/index.js":"3ta4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rJp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExtendedYearParser", ()=>ExtendedYearParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var ExtendedYearParser = /*#__PURE__*/ function(_Parser) {
    _inherits(ExtendedYearParser, _Parser);
    var _super = _createSuper(ExtendedYearParser);
    function ExtendedYearParser() {
        var _this;
        _classCallCheck(this, ExtendedYearParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 130);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "G",
            "y",
            "Y",
            "R",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(ExtendedYearParser, [
        {
            key: "parse",
            value: function parse(dateString, token) {
                if (token === "u") return (0, _utilsJs.parseNDigitsSigned)(4, dateString);
                return (0, _utilsJs.parseNDigitsSigned)(token.length, dateString);
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCFullYear(value, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return ExtendedYearParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lkQmG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuarterParser", ()=>QuarterParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var QuarterParser = /*#__PURE__*/ function(_Parser) {
    _inherits(QuarterParser, _Parser);
    var _super = _createSuper(QuarterParser);
    function QuarterParser() {
        var _this;
        _classCallCheck(this, QuarterParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 120);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(QuarterParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    // 1, 2, 3, 4
                    case "Q":
                    case "QQ":
                        // 01, 02, 03, 04
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                    // 1st, 2nd, 3rd, 4th
                    case "Qo":
                        return match.ordinalNumber(dateString, {
                            unit: "quarter"
                        });
                    // Q1, Q2, Q3, Q4
                    case "QQQ":
                        return match.quarter(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.quarter(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                    case "QQQQQ":
                        return match.quarter(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // 1st quarter, 2nd quarter, ...
                    case "QQQQ":
                    default:
                        return match.quarter(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.quarter(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.quarter(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 4;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth((value - 1) * 3, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return QuarterParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9zxhy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StandAloneQuarterParser", ()=>StandAloneQuarterParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var StandAloneQuarterParser = /*#__PURE__*/ function(_Parser) {
    _inherits(StandAloneQuarterParser, _Parser);
    var _super = _createSuper(StandAloneQuarterParser);
    function StandAloneQuarterParser() {
        var _this;
        _classCallCheck(this, StandAloneQuarterParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 120);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "Y",
            "R",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(StandAloneQuarterParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    // 1, 2, 3, 4
                    case "q":
                    case "qq":
                        // 01, 02, 03, 04
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                    // 1st, 2nd, 3rd, 4th
                    case "qo":
                        return match.ordinalNumber(dateString, {
                            unit: "quarter"
                        });
                    // Q1, Q2, Q3, Q4
                    case "qqq":
                        return match.quarter(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.quarter(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                    case "qqqqq":
                        return match.quarter(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // 1st quarter, 2nd quarter, ...
                    case "qqqq":
                    default:
                        return match.quarter(dateString, {
                            width: "wide",
                            context: "standalone"
                        }) || match.quarter(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.quarter(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 4;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth((value - 1) * 3, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return StandAloneQuarterParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7gzbd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MonthParser", ()=>MonthParser);
var _utilsJs = require("../utils.js");
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var MonthParser = /*#__PURE__*/ function(_Parser) {
    _inherits(MonthParser, _Parser);
    var _super = _createSuper(MonthParser);
    function MonthParser() {
        var _this;
        _classCallCheck(this, MonthParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "L",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]);
        _defineProperty(_assertThisInitialized(_this), "priority", 110);
        return _this;
    }
    _createClass(MonthParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(value) {
                    return value - 1;
                };
                switch(token){
                    // 1, 2, ..., 12
                    case "M":
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).month, dateString), valueCallback);
                    // 01, 02, ..., 12
                    case "MM":
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(2, dateString), valueCallback);
                    // 1st, 2nd, ..., 12th
                    case "Mo":
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: "month"
                        }), valueCallback);
                    // Jan, Feb, ..., Dec
                    case "MMM":
                        return match.month(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.month(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // J, F, ..., D
                    case "MMMMM":
                        return match.month(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // January, February, ..., December
                    case "MMMM":
                    default:
                        return match.month(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.month(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.month(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 11;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth(value, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return MonthParser;
}((0, _parserJs.Parser));

},{"../utils.js":"d5y8M","../Parser.js":"eoGZr","../constants.js":"dtRjG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"itoh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StandAloneMonthParser", ()=>StandAloneMonthParser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var StandAloneMonthParser = /*#__PURE__*/ function(_Parser) {
    _inherits(StandAloneMonthParser, _Parser);
    var _super = _createSuper(StandAloneMonthParser);
    function StandAloneMonthParser() {
        var _this;
        _classCallCheck(this, StandAloneMonthParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 110);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(StandAloneMonthParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(value) {
                    return value - 1;
                };
                switch(token){
                    // 1, 2, ..., 12
                    case "L":
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).month, dateString), valueCallback);
                    // 01, 02, ..., 12
                    case "LL":
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(2, dateString), valueCallback);
                    // 1st, 2nd, ..., 12th
                    case "Lo":
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: "month"
                        }), valueCallback);
                    // Jan, Feb, ..., Dec
                    case "LLL":
                        return match.month(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.month(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // J, F, ..., D
                    case "LLLLL":
                        return match.month(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // January, February, ..., December
                    case "LLLL":
                    default:
                        return match.month(dateString, {
                            width: "wide",
                            context: "standalone"
                        }) || match.month(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.month(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 11;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth(value, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return StandAloneMonthParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcoE4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalWeekParser", ()=>LocalWeekParser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/setUTCWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/startOfUTCWeek/index.js"); // Local week of year
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var LocalWeekParser = /*#__PURE__*/ function(_Parser) {
    _inherits(LocalWeekParser, _Parser);
    var _super = _createSuper(LocalWeekParser);
    function LocalWeekParser() {
        var _this;
        _classCallCheck(this, LocalWeekParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 100);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(LocalWeekParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "w":
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).week, dateString);
                    case "wo":
                        return match.ordinalNumber(dateString, {
                            unit: "week"
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 53;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value, options) {
                return (0, _indexJsDefault1.default)((0, _indexJsDefault.default)(date, value, options), options);
            }
        }
    ]);
    return LocalWeekParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","../../../_lib/setUTCWeek/index.js":"knxjU","../../../_lib/startOfUTCWeek/index.js":"dDZbE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knxjU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../getUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setUTCWeek(dirtyDate, dirtyWeek, options) {
    (0, _indexJsDefault3.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var week = (0, _indexJsDefault.default)(dirtyWeek);
    var diff = (0, _indexJsDefault2.default)(date, options) - week;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}
exports.default = setUTCWeek;

},{"../toInteger/index.js":"f7kKX","../../toDate/index.js":"fsust","../getUTCWeek/index.js":"b7GgV","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fppkm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ISOWeekParser", ()=>ISOWeekParser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/setUTCISOWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/startOfUTCISOWeek/index.js"); // ISO week of year
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var ISOWeekParser = /*#__PURE__*/ function(_Parser) {
    _inherits(ISOWeekParser, _Parser);
    var _super = _createSuper(ISOWeekParser);
    function ISOWeekParser() {
        var _this;
        _classCallCheck(this, ISOWeekParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 100);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(ISOWeekParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "I":
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).week, dateString);
                    case "Io":
                        return match.ordinalNumber(dateString, {
                            unit: "week"
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 53;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                return (0, _indexJsDefault1.default)((0, _indexJsDefault.default)(date, value));
            }
        }
    ]);
    return ISOWeekParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","../../../_lib/setUTCISOWeek/index.js":"7CSIN","../../../_lib/startOfUTCISOWeek/index.js":"3ta4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CSIN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../getUTCISOWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
    (0, _indexJsDefault3.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var isoWeek = (0, _indexJsDefault.default)(dirtyISOWeek);
    var diff = (0, _indexJsDefault2.default)(date) - isoWeek;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}
exports.default = setUTCISOWeek;

},{"../toInteger/index.js":"f7kKX","../../toDate/index.js":"fsust","../getUTCISOWeek/index.js":"4nEkI","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnbjC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DateParser", ()=>DateParser);
var _utilsJs = require("../utils.js");
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var DAYS_IN_MONTH = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
var DAYS_IN_MONTH_LEAP_YEAR = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
]; // Day of the month
var DateParser = /*#__PURE__*/ function(_Parser) {
    _inherits(DateParser, _Parser);
    var _super = _createSuper(DateParser);
    function DateParser() {
        var _this;
        _classCallCheck(this, DateParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "subPriority", 1);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(DateParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "d":
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).date, dateString);
                    case "do":
                        return match.ordinalNumber(dateString, {
                            unit: "date"
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(date, value) {
                var year = date.getUTCFullYear();
                var isLeapYear = (0, _utilsJs.isLeapYearIndex)(year);
                var month = date.getUTCMonth();
                if (isLeapYear) return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
                else return value >= 1 && value <= DAYS_IN_MONTH[month];
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCDate(value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return DateParser;
}((0, _parserJs.Parser));

},{"../utils.js":"d5y8M","../Parser.js":"eoGZr","../constants.js":"dtRjG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"al32L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DayOfYearParser", ()=>DayOfYearParser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var DayOfYearParser = /*#__PURE__*/ function(_Parser) {
    _inherits(DayOfYearParser, _Parser);
    var _super = _createSuper(DayOfYearParser);
    function DayOfYearParser() {
        var _this;
        _classCallCheck(this, DayOfYearParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "subpriority", 1);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "E",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(DayOfYearParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "D":
                    case "DD":
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).dayOfYear, dateString);
                    case "Do":
                        return match.ordinalNumber(dateString, {
                            unit: "date"
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(date, value) {
                var year = date.getUTCFullYear();
                var isLeapYear = (0, _utilsJs.isLeapYearIndex)(year);
                if (isLeapYear) return value >= 1 && value <= 366;
                else return value >= 1 && value <= 365;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMonth(0, value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return DayOfYearParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aov76":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DayParser", ()=>DayParser);
var _parserJs = require("../Parser.js");
var _indexJs = require("../../../_lib/setUTCDay/index.js"); // Day of week
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var DayParser = /*#__PURE__*/ function(_Parser) {
    _inherits(DayParser, _Parser);
    var _super = _createSuper(DayParser);
    function DayParser() {
        var _this;
        _classCallCheck(this, DayParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(DayParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    // Tue
                    case "E":
                    case "EE":
                    case "EEE":
                        return match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // T
                    case "EEEEE":
                        return match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // Tu
                    case "EEEEEE":
                        return match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // Tuesday
                    case "EEEE":
                    default:
                        return match.day(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 6;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value, options) {
                date = (0, _indexJsDefault.default)(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return DayParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../../../_lib/setUTCDay/index.js":"gbld5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gbld5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../defaultOptions/index.js");
function setUTCDay(dirtyDate, dirtyDay, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault1.default)(2, arguments);
    var defaultOptions = (0, _indexJs3.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault2.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = (0, _indexJsDefault2.default)(dirtyDay);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
exports.default = setUTCDay;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../toInteger/index.js":"f7kKX","../defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hc8LA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalDayParser", ()=>LocalDayParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/setUTCDay/index.js"); // Local day of week
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var LocalDayParser = /*#__PURE__*/ function(_Parser) {
    _inherits(LocalDayParser, _Parser);
    var _super = _createSuper(LocalDayParser);
    function LocalDayParser() {
        var _this;
        _classCallCheck(this, LocalDayParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(LocalDayParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match, options) {
                var valueCallback = function valueCallback(value) {
                    var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                    return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
                };
                switch(token){
                    // 3
                    case "e":
                    case "ee":
                        // 03
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
                    // 3rd
                    case "eo":
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: "day"
                        }), valueCallback);
                    // Tue
                    case "eee":
                        return match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // T
                    case "eeeee":
                        return match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // Tu
                    case "eeeeee":
                        return match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    // Tuesday
                    case "eeee":
                    default:
                        return match.day(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 6;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value, options) {
                date = (0, _indexJsDefault.default)(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return LocalDayParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","../../../_lib/setUTCDay/index.js":"gbld5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6igat":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StandAloneLocalDayParser", ()=>StandAloneLocalDayParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/setUTCDay/index.js"); // Stand-alone local day of week
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var StandAloneLocalDayParser = /*#__PURE__*/ function(_Parser) {
    _inherits(StandAloneLocalDayParser, _Parser);
    var _super = _createSuper(StandAloneLocalDayParser);
    function StandAloneLocalDayParser() {
        var _this;
        _classCallCheck(this, StandAloneLocalDayParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "e",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(StandAloneLocalDayParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match, options) {
                var valueCallback = function valueCallback(value) {
                    var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                    return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
                };
                switch(token){
                    // 3
                    case "c":
                    case "cc":
                        // 03
                        return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
                    // 3rd
                    case "co":
                        return (0, _utilsJs.mapValue)(match.ordinalNumber(dateString, {
                            unit: "day"
                        }), valueCallback);
                    // Tue
                    case "ccc":
                        return match.day(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // T
                    case "ccccc":
                        return match.day(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // Tu
                    case "cccccc":
                        return match.day(dateString, {
                            width: "short",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                    // Tuesday
                    case "cccc":
                    default:
                        return match.day(dateString, {
                            width: "wide",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "standalone"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "standalone"
                        });
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 6;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value, options) {
                date = (0, _indexJsDefault.default)(date, value, options);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return StandAloneLocalDayParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","../../../_lib/setUTCDay/index.js":"gbld5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kwtL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ISODayParser", ()=>ISODayParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
var _indexJs = require("../../../_lib/setUTCISODay/index.js"); // ISO day of week
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var ISODayParser = /*#__PURE__*/ function(_Parser) {
    _inherits(ISODayParser, _Parser);
    var _super = _createSuper(ISODayParser);
    function ISODayParser() {
        var _this;
        _classCallCheck(this, ISODayParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 90);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "E",
            "e",
            "c",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(ISODayParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                var valueCallback = function valueCallback(value) {
                    if (value === 0) return 7;
                    return value;
                };
                switch(token){
                    // 2
                    case "i":
                    case "ii":
                        // 02
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                    // 2nd
                    case "io":
                        return match.ordinalNumber(dateString, {
                            unit: "day"
                        });
                    // Tue
                    case "iii":
                        return (0, _utilsJs.mapValue)(match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        }), valueCallback);
                    // T
                    case "iiiii":
                        return (0, _utilsJs.mapValue)(match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        }), valueCallback);
                    // Tu
                    case "iiiiii":
                        return (0, _utilsJs.mapValue)(match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        }), valueCallback);
                    // Tuesday
                    case "iiii":
                    default:
                        return (0, _utilsJs.mapValue)(match.day(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "short",
                            context: "formatting"
                        }) || match.day(dateString, {
                            width: "narrow",
                            context: "formatting"
                        }), valueCallback);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 7;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date = (0, _indexJsDefault.default)(date, value);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
        }
    ]);
    return ISODayParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","../../../_lib/setUTCISODay/index.js":"c12Xt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c12Xt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setUTCISODay(dirtyDate, dirtyDay) {
    (0, _indexJsDefault1.default)(2, arguments);
    var day = (0, _indexJsDefault2.default)(dirtyDay);
    if (day % 7 === 0) day = day - 7;
    var weekStartsOn = 1;
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
exports.default = setUTCISODay;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zbXB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AMPMParser", ()=>AMPMParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var AMPMParser = /*#__PURE__*/ function(_Parser) {
    _inherits(AMPMParser, _Parser);
    var _super = _createSuper(AMPMParser);
    function AMPMParser() {
        var _this;
        _classCallCheck(this, AMPMParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 80);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "b",
            "B",
            "H",
            "k",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(AMPMParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "a":
                    case "aa":
                    case "aaa":
                        return match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaaa":
                        return match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaa":
                    default:
                        return match.dayPeriod(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours((0, _utilsJs.dayPeriodEnumToHours)(value), 0, 0, 0);
                return date;
            }
        }
    ]);
    return AMPMParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jb5BD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AMPMMidnightParser", ()=>AMPMMidnightParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var AMPMMidnightParser = /*#__PURE__*/ function(_Parser) {
    _inherits(AMPMMidnightParser, _Parser);
    var _super = _createSuper(AMPMMidnightParser);
    function AMPMMidnightParser() {
        var _this;
        _classCallCheck(this, AMPMMidnightParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 80);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "a",
            "B",
            "H",
            "k",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(AMPMMidnightParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "b":
                    case "bb":
                    case "bbb":
                        return match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbbb":
                        return match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbb":
                    default:
                        return match.dayPeriod(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours((0, _utilsJs.dayPeriodEnumToHours)(value), 0, 0, 0);
                return date;
            }
        }
    ]);
    return AMPMMidnightParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9kE14":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DayPeriodParser", ()=>DayPeriodParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js"); // in the morning, in the afternoon, in the evening, at night
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var DayPeriodParser = /*#__PURE__*/ function(_Parser) {
    _inherits(DayPeriodParser, _Parser);
    var _super = _createSuper(DayPeriodParser);
    function DayPeriodParser() {
        var _this;
        _classCallCheck(this, DayPeriodParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 80);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "a",
            "b",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(DayPeriodParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "B":
                    case "BB":
                    case "BBB":
                        return match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBBB":
                        return match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBB":
                    default:
                        return match.dayPeriod(dateString, {
                            width: "wide",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || match.dayPeriod(dateString, {
                            width: "narrow",
                            context: "formatting"
                        });
                }
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours((0, _utilsJs.dayPeriodEnumToHours)(value), 0, 0, 0);
                return date;
            }
        }
    ]);
    return DayPeriodParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzNEC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour1to12Parser", ()=>Hour1to12Parser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var Hour1to12Parser = /*#__PURE__*/ function(_Parser) {
    _inherits(Hour1to12Parser, _Parser);
    var _super = _createSuper(Hour1to12Parser);
    function Hour1to12Parser() {
        var _this;
        _classCallCheck(this, Hour1to12Parser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 70);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "H",
            "K",
            "k",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(Hour1to12Parser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "h":
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour12h, dateString);
                    case "ho":
                        return match.ordinalNumber(dateString, {
                            unit: "hour"
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 12;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                var isPM = date.getUTCHours() >= 12;
                if (isPM && value < 12) date.setUTCHours(value + 12, 0, 0, 0);
                else if (!isPM && value === 12) date.setUTCHours(0, 0, 0, 0);
                else date.setUTCHours(value, 0, 0, 0);
                return date;
            }
        }
    ]);
    return Hour1to12Parser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3kuC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour0to23Parser", ()=>Hour0to23Parser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var Hour0to23Parser = /*#__PURE__*/ function(_Parser) {
    _inherits(Hour0to23Parser, _Parser);
    var _super = _createSuper(Hour0to23Parser);
    function Hour0to23Parser() {
        var _this;
        _classCallCheck(this, Hour0to23Parser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 70);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "a",
            "b",
            "h",
            "K",
            "k",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(Hour0to23Parser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "H":
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour23h, dateString);
                    case "Ho":
                        return match.ordinalNumber(dateString, {
                            unit: "hour"
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 23;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCHours(value, 0, 0, 0);
                return date;
            }
        }
    ]);
    return Hour0to23Parser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73sgE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour0To11Parser", ()=>Hour0To11Parser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var Hour0To11Parser = /*#__PURE__*/ function(_Parser) {
    _inherits(Hour0To11Parser, _Parser);
    var _super = _createSuper(Hour0To11Parser);
    function Hour0To11Parser() {
        var _this;
        _classCallCheck(this, Hour0To11Parser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 70);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "h",
            "H",
            "k",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(Hour0To11Parser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "K":
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour11h, dateString);
                    case "Ko":
                        return match.ordinalNumber(dateString, {
                            unit: "hour"
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 11;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                var isPM = date.getUTCHours() >= 12;
                if (isPM && value < 12) date.setUTCHours(value + 12, 0, 0, 0);
                else date.setUTCHours(value, 0, 0, 0);
                return date;
            }
        }
    ]);
    return Hour0To11Parser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3WDRF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hour1To24Parser", ()=>Hour1To24Parser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var Hour1To24Parser = /*#__PURE__*/ function(_Parser) {
    _inherits(Hour1To24Parser, _Parser);
    var _super = _createSuper(Hour1To24Parser);
    function Hour1To24Parser() {
        var _this;
        _classCallCheck(this, Hour1To24Parser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 70);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "a",
            "b",
            "h",
            "H",
            "K",
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(Hour1To24Parser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "k":
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).hour24h, dateString);
                    case "ko":
                        return match.ordinalNumber(dateString, {
                            unit: "hour"
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 1 && value <= 24;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                var hours = value <= 24 ? value % 24 : value;
                date.setUTCHours(hours, 0, 0, 0);
                return date;
            }
        }
    ]);
    return Hour1To24Parser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eALta":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MinuteParser", ()=>MinuteParser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var MinuteParser = /*#__PURE__*/ function(_Parser) {
    _inherits(MinuteParser, _Parser);
    var _super = _createSuper(MinuteParser);
    function MinuteParser() {
        var _this;
        _classCallCheck(this, MinuteParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 60);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(MinuteParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "m":
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).minute, dateString);
                    case "mo":
                        return match.ordinalNumber(dateString, {
                            unit: "minute"
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 59;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMinutes(value, 0, 0);
                return date;
            }
        }
    ]);
    return MinuteParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1nVjx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SecondParser", ()=>SecondParser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var SecondParser = /*#__PURE__*/ function(_Parser) {
    _inherits(SecondParser, _Parser);
    var _super = _createSuper(SecondParser);
    function SecondParser() {
        var _this;
        _classCallCheck(this, SecondParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 50);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(SecondParser, [
        {
            key: "parse",
            value: function parse(dateString, token, match) {
                switch(token){
                    case "s":
                        return (0, _utilsJs.parseNumericPattern)((0, _constantsJs.numericPatterns).second, dateString);
                    case "so":
                        return match.ordinalNumber(dateString, {
                            unit: "second"
                        });
                    default:
                        return (0, _utilsJs.parseNDigits)(token.length, dateString);
                }
            }
        },
        {
            key: "validate",
            value: function validate(_date, value) {
                return value >= 0 && value <= 59;
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCSeconds(value, 0);
                return date;
            }
        }
    ]);
    return SecondParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46M6Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FractionOfSecondParser", ()=>FractionOfSecondParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var FractionOfSecondParser = /*#__PURE__*/ function(_Parser) {
    _inherits(FractionOfSecondParser, _Parser);
    var _super = _createSuper(FractionOfSecondParser);
    function FractionOfSecondParser() {
        var _this;
        _classCallCheck(this, FractionOfSecondParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 30);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "t",
            "T"
        ]);
        return _this;
    }
    _createClass(FractionOfSecondParser, [
        {
            key: "parse",
            value: function parse(dateString, token) {
                var valueCallback = function valueCallback(value) {
                    return Math.floor(value * Math.pow(10, -token.length + 3));
                };
                return (0, _utilsJs.mapValue)((0, _utilsJs.parseNDigits)(token.length, dateString), valueCallback);
            }
        },
        {
            key: "set",
            value: function set(date, _flags, value) {
                date.setUTCMilliseconds(value);
                return date;
            }
        }
    ]);
    return FractionOfSecondParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b1yp4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ISOTimezoneWithZParser", ()=>ISOTimezoneWithZParser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js"); // Timezone (ISO-8601. +00:00 is `'Z'`)
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var ISOTimezoneWithZParser = /*#__PURE__*/ function(_Parser) {
    _inherits(ISOTimezoneWithZParser, _Parser);
    var _super = _createSuper(ISOTimezoneWithZParser);
    function ISOTimezoneWithZParser() {
        var _this;
        _classCallCheck(this, ISOTimezoneWithZParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 10);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "t",
            "T",
            "x"
        ]);
        return _this;
    }
    _createClass(ISOTimezoneWithZParser, [
        {
            key: "parse",
            value: function parse(dateString, token) {
                switch(token){
                    case "X":
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalMinutes, dateString);
                    case "XX":
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basic, dateString);
                    case "XXXX":
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalSeconds, dateString);
                    case "XXXXX":
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extendedOptionalSeconds, dateString);
                    case "XXX":
                    default:
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extended, dateString);
                }
            }
        },
        {
            key: "set",
            value: function set(date, flags, value) {
                if (flags.timestampIsSet) return date;
                return new Date(date.getTime() - value);
            }
        }
    ]);
    return ISOTimezoneWithZParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bDXkg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ISOTimezoneParser", ()=>ISOTimezoneParser);
var _parserJs = require("../Parser.js");
var _constantsJs = require("../constants.js");
var _utilsJs = require("../utils.js"); // Timezone (ISO-8601)
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var ISOTimezoneParser = /*#__PURE__*/ function(_Parser) {
    _inherits(ISOTimezoneParser, _Parser);
    var _super = _createSuper(ISOTimezoneParser);
    function ISOTimezoneParser() {
        var _this;
        _classCallCheck(this, ISOTimezoneParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 10);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", [
            "t",
            "T",
            "X"
        ]);
        return _this;
    }
    _createClass(ISOTimezoneParser, [
        {
            key: "parse",
            value: function parse(dateString, token) {
                switch(token){
                    case "x":
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalMinutes, dateString);
                    case "xx":
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basic, dateString);
                    case "xxxx":
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).basicOptionalSeconds, dateString);
                    case "xxxxx":
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extendedOptionalSeconds, dateString);
                    case "xxx":
                    default:
                        return (0, _utilsJs.parseTimezonePattern)((0, _constantsJs.timezonePatterns).extended, dateString);
                }
            }
        },
        {
            key: "set",
            value: function set(date, flags, value) {
                if (flags.timestampIsSet) return date;
                return new Date(date.getTime() - value);
            }
        }
    ]);
    return ISOTimezoneParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../constants.js":"dtRjG","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPdA3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimestampSecondsParser", ()=>TimestampSecondsParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var TimestampSecondsParser = /*#__PURE__*/ function(_Parser) {
    _inherits(TimestampSecondsParser, _Parser);
    var _super = _createSuper(TimestampSecondsParser);
    function TimestampSecondsParser() {
        var _this;
        _classCallCheck(this, TimestampSecondsParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 40);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
        return _this;
    }
    _createClass(TimestampSecondsParser, [
        {
            key: "parse",
            value: function parse(dateString) {
                return (0, _utilsJs.parseAnyDigitsSigned)(dateString);
            }
        },
        {
            key: "set",
            value: function set(_date, _flags, value) {
                return [
                    new Date(value * 1000),
                    {
                        timestampIsSet: true
                    }
                ];
            }
        }
    ]);
    return TimestampSecondsParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gy8e8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimestampMillisecondsParser", ()=>TimestampMillisecondsParser);
var _parserJs = require("../Parser.js");
var _utilsJs = require("../utils.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var TimestampMillisecondsParser = /*#__PURE__*/ function(_Parser) {
    _inherits(TimestampMillisecondsParser, _Parser);
    var _super = _createSuper(TimestampMillisecondsParser);
    function TimestampMillisecondsParser() {
        var _this;
        _classCallCheck(this, TimestampMillisecondsParser);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "priority", 20);
        _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
        return _this;
    }
    _createClass(TimestampMillisecondsParser, [
        {
            key: "parse",
            value: function parse(dateString) {
                return (0, _utilsJs.parseAnyDigitsSigned)(dateString);
            }
        },
        {
            key: "set",
            value: function set(_date, _flags, value) {
                return [
                    new Date(value),
                    {
                        timestampIsSet: true
                    }
                ];
            }
        }
    ]);
    return TimestampMillisecondsParser;
}((0, _parserJs.Parser));

},{"../Parser.js":"eoGZr","../utils.js":"d5y8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d0i8V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isMonday(date) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(date).getDay() === 1;
}
exports.default = isMonday;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SVMT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isPast(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate).getTime() < Date.now();
}
exports.default = isPast;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"742NB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfHour/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameHour(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeftStartOfHour = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRightStartOfHour = (0, _indexJsDefault.default)(dirtyDateRight);
    return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime();
}
exports.default = isSameHour;

},{"../startOfHour/index.js":"gnPY3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnPY3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfHour(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setMinutes(0, 0, 0);
    return date;
}
exports.default = startOfHour;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3dXq3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    return (0, _indexJsDefault.default)(dirtyDateLeft, dirtyDateRight, {
        weekStartsOn: 1
    });
}
exports.default = isSameISOWeek;

},{"../isSameWeek/index.js":"dIVlT","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dIVlT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeftStartOfWeek = (0, _indexJsDefault.default)(dirtyDateLeft, options);
    var dateRightStartOfWeek = (0, _indexJsDefault.default)(dirtyDateRight, options);
    return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}
exports.default = isSameWeek;

},{"../startOfWeek/index.js":"fD46d","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBy4o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameISOWeekYear(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeftStartOfYear = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRightStartOfYear = (0, _indexJsDefault.default)(dirtyDateRight);
    return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime();
}
exports.default = isSameISOWeekYear;

},{"../startOfISOWeekYear/index.js":"d30Dg","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"egnlO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfMinute/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameMinute(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeftStartOfMinute = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRightStartOfMinute = (0, _indexJsDefault.default)(dirtyDateRight);
    return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
}
exports.default = isSameMinute;

},{"../startOfMinute/index.js":"ScWrF","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"43kxe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameMonth(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}
exports.default = isSameMonth;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f2sKq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfQuarter/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeftStartOfQuarter = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRightStartOfQuarter = (0, _indexJsDefault.default)(dirtyDateRight);
    return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}
exports.default = isSameQuarter;

},{"../startOfQuarter/index.js":"3J36e","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3IE8J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfSecond/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameSecond(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeftStartOfSecond = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRightStartOfSecond = (0, _indexJsDefault.default)(dirtyDateRight);
    return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
}
exports.default = isSameSecond;

},{"../startOfSecond/index.js":"9ePjK","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ePjK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfSecond(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    date.setMilliseconds(0);
    return date;
}
exports.default = startOfSecond;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iSGWj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameYear(dirtyDateLeft, dirtyDateRight) {
    (0, _indexJsDefault1.default)(2, arguments);
    var dateLeft = (0, _indexJsDefault.default)(dirtyDateLeft);
    var dateRight = (0, _indexJsDefault.default)(dirtyDateRight);
    return dateLeft.getFullYear() === dateRight.getFullYear();
}
exports.default = isSameYear;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4VqIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameHour/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisHour(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(Date.now(), dirtyDate);
}
exports.default = isThisHour;

},{"../isSameHour/index.js":"742NB","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cYJzm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameISOWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisISOWeek(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate, Date.now());
}
exports.default = isThisISOWeek;

},{"../isSameISOWeek/index.js":"3dXq3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g51WS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameMinute/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisMinute(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(Date.now(), dirtyDate);
}
exports.default = isThisMinute;

},{"../isSameMinute/index.js":"egnlO","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72clh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameMonth/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisMonth(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(Date.now(), dirtyDate);
}
exports.default = isThisMonth;

},{"../isSameMonth/index.js":"43kxe","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"zWFQi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameQuarter/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisQuarter(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(Date.now(), dirtyDate);
}
exports.default = isThisQuarter;

},{"../isSameQuarter/index.js":"f2sKq","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Uqbu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameSecond/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisSecond(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(Date.now(), dirtyDate);
}
exports.default = isThisSecond;

},{"../isSameSecond/index.js":"3IE8J","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"clTOk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisWeek(dirtyDate, options) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate, Date.now(), options);
}
exports.default = isThisWeek;

},{"../isSameWeek/index.js":"dIVlT","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fJM8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate, Date.now());
}
exports.default = isThisYear;

},{"../isSameYear/index.js":"iSGWj","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"XTAVB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThursday(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate).getDay() === 4;
}
exports.default = isThursday;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7yvKb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isToday(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate, Date.now());
}
exports.default = isToday;

},{"../isSameDay/index.js":"jEo6n","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mbGz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isSameDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isTomorrow(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    return (0, _indexJsDefault1.default)(dirtyDate, (0, _indexJsDefault.default)(Date.now(), 1));
}
exports.default = isTomorrow;

},{"../addDays/index.js":"g6fAH","../isSameDay/index.js":"jEo6n","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"drchl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isTuesday(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate).getDay() === 2;
}
exports.default = isTuesday;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"76j3z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isWednesday(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate).getDay() === 3;
}
exports.default = isWednesday;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ilmRT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isWithinInterval(dirtyDate, interval) {
    (0, _indexJsDefault1.default)(2, arguments);
    var time = (0, _indexJsDefault.default)(dirtyDate).getTime();
    var startTime = (0, _indexJsDefault.default)(interval.start).getTime();
    var endTime = (0, _indexJsDefault.default)(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startTime <= endTime)) throw new RangeError("Invalid interval");
    return time >= startTime && time <= endTime;
}
exports.default = isWithinInterval;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"boQVU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../subDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isYesterday(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate, (0, _indexJsDefault1.default)(Date.now(), 1));
}
exports.default = isYesterday;

},{"../isSameDay/index.js":"jEo6n","../subDays/index.js":"8gyqn","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8gyqn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subDays(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault1.default)(2, arguments);
    var amount = (0, _indexJsDefault2.default)(dirtyAmount);
    return (0, _indexJsDefault.default)(dirtyDate, -amount);
}
exports.default = subDays;

},{"../addDays/index.js":"g6fAH","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwRxL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function lastDayOfDecade(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getFullYear();
    var decade = 9 + Math.floor(year / 10) * 10;
    date.setFullYear(decade + 1, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = lastDayOfDecade;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iLDh9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../lastDayOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function lastDayOfISOWeek(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(dirtyDate, {
        weekStartsOn: 1
    });
}
exports.default = lastDayOfISOWeek;

},{"../lastDayOfWeek/index.js":"hHR4c","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hHR4c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/defaultOptions/index.js");
function lastDayOfWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault2.default)(1, arguments);
    var defaultOptions = (0, _indexJs3.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault1.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6");
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + diff);
    return date;
}
exports.default = lastDayOfWeek;

},{"../toDate/index.js":"fsust","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2Ysi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function lastDayOfISOWeekYear(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    var year = (0, _indexJsDefault.default)(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setFullYear(year + 1, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    var date = (0, _indexJsDefault1.default)(fourthOfJanuary);
    date.setDate(date.getDate() - 1);
    return date;
}
exports.default = lastDayOfISOWeekYear;

},{"../getISOWeekYear/index.js":"bI5NI","../startOfISOWeek/index.js":"eEFWQ","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1sQGK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function lastDayOfQuarter(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var currentMonth = date.getMonth();
    var month = currentMonth - currentMonth % 3 + 3;
    date.setMonth(month, 0);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = lastDayOfQuarter;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"epPul":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function lastDayOfYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getFullYear();
    date.setFullYear(year + 1, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = lastDayOfYear;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31chA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/format/lightFormatters/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../isValid/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../subMilliseconds/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/requiredArgs/index.js"); // This RegExp consists of three parts separated by `|`:
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function lightFormat(dirtyDate, formatStr) {
    (0, _indexJsDefault5.default)(2, arguments);
    var originalDate = (0, _indexJsDefault.default)(dirtyDate);
    if (!(0, _indexJsDefault3.default)(originalDate)) throw new RangeError("Invalid time value");
     // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = (0, _indexJsDefault2.default)(originalDate);
    var utcDate = (0, _indexJsDefault4.default)(originalDate, timezoneOffset);
    var tokens = formatStr.match(formattingTokensRegExp); // The only case when formattingTokensRegExp doesn't match the string is when it's empty
    if (!tokens) return "";
    var result = tokens.map(function(substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") return "'";
        var firstCharacter = substring[0];
        if (firstCharacter === "'") return cleanEscapedString(substring);
        var formatter = (0, _indexJsDefault1.default)[firstCharacter];
        if (formatter) return formatter(utcDate, substring);
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        return substring;
    }).join("");
    return result;
}
exports.default = lightFormat;
function cleanEscapedString(input) {
    var matches = input.match(escapedStringRegExp);
    if (!matches) return input;
    return matches[1].replace(doubleQuoteRegExp, "'");
}

},{"../toDate/index.js":"fsust","../_lib/format/lightFormatters/index.js":"9oZiA","../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../isValid/index.js":"eXoMl","../subMilliseconds/index.js":"lL2M9","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aphl3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
// Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
// 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
var daysInYear = 365.2425;
function milliseconds(_ref) {
    var years = _ref.years, months = _ref.months, weeks = _ref.weeks, days = _ref.days, hours = _ref.hours, minutes = _ref.minutes, seconds = _ref.seconds;
    (0, _indexJsDefault.default)(1, arguments);
    var totalDays = 0;
    if (years) totalDays += years * daysInYear;
    if (months) totalDays += months * (daysInYear / 12);
    if (weeks) totalDays += weeks * 7;
    if (days) totalDays += days;
    var totalSeconds = totalDays * 86400;
    if (hours) totalSeconds += hours * 3600;
    if (minutes) totalSeconds += minutes * 60;
    if (seconds) totalSeconds += seconds;
    return Math.round(totalSeconds * 1000);
}
exports.default = milliseconds;

},{"../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2GgQk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function millisecondsToHours(milliseconds) {
    (0, _indexJsDefault.default)(1, arguments);
    var hours = milliseconds / (0, _indexJs1.millisecondsInHour);
    return Math.floor(hours);
}
exports.default = millisecondsToHours;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lhxbc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function millisecondsToMinutes(milliseconds) {
    (0, _indexJsDefault.default)(1, arguments);
    var minutes = milliseconds / (0, _indexJs1.millisecondsInMinute);
    return Math.floor(minutes);
}
exports.default = millisecondsToMinutes;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bOMgx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function millisecondsToSeconds(milliseconds) {
    (0, _indexJsDefault.default)(1, arguments);
    var seconds = milliseconds / (0, _indexJs1.millisecondsInSecond);
    return Math.floor(seconds);
}
exports.default = millisecondsToSeconds;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQa6v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function minutesToHours(minutes) {
    (0, _indexJsDefault.default)(1, arguments);
    var hours = minutes / (0, _indexJs1.minutesInHour);
    return Math.floor(hours);
}
exports.default = minutesToHours;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvRd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function minutesToMilliseconds(minutes) {
    (0, _indexJsDefault.default)(1, arguments);
    return Math.floor(minutes * (0, _indexJs1.millisecondsInMinute));
}
exports.default = minutesToMilliseconds;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hU2Jm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function minutesToSeconds(minutes) {
    (0, _indexJsDefault.default)(1, arguments);
    return Math.floor(minutes * (0, _indexJs1.secondsInMinute));
}
exports.default = minutesToSeconds;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5YZwR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function monthsToQuarters(months) {
    (0, _indexJsDefault.default)(1, arguments);
    var quarters = months / (0, _indexJs1.monthsInQuarter);
    return Math.floor(quarters);
}
exports.default = monthsToQuarters;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"19Bf0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function monthsToYears(months) {
    (0, _indexJsDefault.default)(1, arguments);
    var years = months / (0, _indexJs1.monthsInYear);
    return Math.floor(years);
}
exports.default = monthsToYears;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8L4S3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../getDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function nextDay(date, day) {
    (0, _indexJsDefault2.default)(2, arguments);
    var delta = day - (0, _indexJsDefault1.default)(date);
    if (delta <= 0) delta += 7;
    return (0, _indexJsDefault.default)(date, delta);
}
exports.default = nextDay;

},{"../addDays/index.js":"g6fAH","../getDay/index.js":"jNMnL","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCUkL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextFriday(date) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(date, 5);
}
exports.default = nextFriday;

},{"../nextDay/index.js":"8L4S3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1niG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextMonday(date) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(date, 1);
}
exports.default = nextMonday;

},{"../nextDay/index.js":"8L4S3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bMXsa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextSaturday(date) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(date, 6);
}
exports.default = nextSaturday;

},{"../nextDay/index.js":"8L4S3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXVF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextSunday(date) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(date, 0);
}
exports.default = nextSunday;

},{"../nextDay/index.js":"8L4S3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2W2QK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextThursday(date) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(date, 4);
}
exports.default = nextThursday;

},{"../nextDay/index.js":"8L4S3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8H5Tm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextTuesday(date) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(date, 2);
}
exports.default = nextTuesday;

},{"../nextDay/index.js":"8L4S3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2U2tm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextWednesday(date) {
    (0, _indexJsDefault1.default)(1, arguments);
    return (0, _indexJsDefault.default)(date, 3);
}
exports.default = nextWednesday;

},{"../nextDay/index.js":"8L4S3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3UpeK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../constants/index.js");
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
function parseISO(argument, options) {
    var _options$additionalDi;
    (0, _indexJsDefault.default)(1, arguments);
    var additionalDigits = (0, _indexJsDefault1.default)((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
    if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) return new Date(NaN);
    var dateStrings = splitDateString(argument);
    var date;
    if (dateStrings.date) {
        var parseYearResult = parseYear(dateStrings.date, additionalDigits);
        date = parseDate(parseYearResult.restDateString, parseYearResult.year);
    }
    if (!date || isNaN(date.getTime())) return new Date(NaN);
    var timestamp = date.getTime();
    var time = 0;
    var offset;
    if (dateStrings.time) {
        time = parseTime(dateStrings.time);
        if (isNaN(time)) return new Date(NaN);
    }
    if (dateStrings.timezone) {
        offset = parseTimezone(dateStrings.timezone);
        if (isNaN(offset)) return new Date(NaN);
    } else {
        var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
        // but we need it to be parsed in our timezone
        // so we use utc values to build date in our timezone.
        // Year values from 0 to 99 map to the years 1900 to 1999
        // so set year explicitly with setFullYear.
        var result = new Date(0);
        result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
        result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
        return result;
    }
    return new Date(timestamp + time + offset);
}
exports.default = parseISO;
var patterns = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
    var dateStrings = {};
    var array = dateString.split(patterns.dateTimeDelimiter);
    var timeString; // The regex match should only return at maximum two array elements.
    // [date], [time], or [date, time].
    if (array.length > 2) return dateStrings;
    if (/:/.test(array[0])) timeString = array[0];
    else {
        dateStrings.date = array[0];
        timeString = array[1];
        if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
            dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
            timeString = dateString.substr(dateStrings.date.length, dateString.length);
        }
    }
    if (timeString) {
        var token = patterns.timezone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], "");
            dateStrings.timezone = token[1];
        } else dateStrings.time = timeString;
    }
    return dateStrings;
}
function parseYear(dateString, additionalDigits) {
    var regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
    var captures = dateString.match(regex); // Invalid ISO-formatted year
    if (!captures) return {
        year: NaN,
        restDateString: ""
    };
    var year = captures[1] ? parseInt(captures[1]) : null;
    var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both
    return {
        year: century === null ? year : century * 100,
        restDateString: dateString.slice((captures[1] || captures[2]).length)
    };
}
function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) return new Date(NaN);
    var captures = dateString.match(dateRegex); // Invalid ISO-formatted string
    if (!captures) return new Date(NaN);
    var isWeekDate = !!captures[4];
    var dayOfYear = parseDateUnit(captures[1]);
    var month = parseDateUnit(captures[2]) - 1;
    var day = parseDateUnit(captures[3]);
    var week = parseDateUnit(captures[4]);
    var dayOfWeek = parseDateUnit(captures[5]) - 1;
    if (isWeekDate) {
        if (!validateWeekDate(year, week, dayOfWeek)) return new Date(NaN);
        return dayOfISOWeekYear(year, week, dayOfWeek);
    } else {
        var date = new Date(0);
        if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) return new Date(NaN);
        date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
        return date;
    }
}
function parseDateUnit(value) {
    return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
    var captures = timeString.match(timeRegex);
    if (!captures) return NaN; // Invalid ISO-formatted time
    var hours = parseTimeUnit(captures[1]);
    var minutes = parseTimeUnit(captures[2]);
    var seconds = parseTimeUnit(captures[3]);
    if (!validateTime(hours, minutes, seconds)) return NaN;
    return hours * (0, _indexJs.millisecondsInHour) + minutes * (0, _indexJs.millisecondsInMinute) + seconds * 1000;
}
function parseTimeUnit(value) {
    return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
    if (timezoneString === "Z") return 0;
    var captures = timezoneString.match(timezoneRegex);
    if (!captures) return 0;
    var sign = captures[1] === "+" ? -1 : 1;
    var hours = parseInt(captures[2]);
    var minutes = captures[3] && parseInt(captures[3]) || 0;
    if (!validateTimezone(hours, minutes)) return NaN;
    return sign * (hours * (0, _indexJs.millisecondsInHour) + minutes * (0, _indexJs.millisecondsInMinute));
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
    var date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
} // Validation functions
// February is null to handle the leap year (using ||)
var daysInMonths = [
    31,
    null,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
    return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
    return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
    return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
    if (hours === 24) return minutes === 0 && seconds === 0;
    return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
    return minutes >= 0 && minutes <= 59;
}

},{"../constants/index.js":"iOhcx","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bwkDs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function parseJSON(argument) {
    (0, _indexJsDefault1.default)(1, arguments);
    if (typeof argument === "string") {
        var parts = argument.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
        if (parts) // Group 8 matches the sign
        return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4] - (+parts[9] || 0) * (parts[8] == "-" ? -1 : 1), +parts[5] - (+parts[10] || 0) * (parts[8] == "-" ? -1 : 1), +parts[6], +((parts[7] || "0") + "00").substring(0, 3)));
        return new Date(NaN);
    }
    return (0, _indexJsDefault.default)(argument);
}
exports.default = parseJSON;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4yyOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../getDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../subDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function previousDay(date, day) {
    (0, _indexJsDefault.default)(2, arguments);
    var delta = (0, _indexJsDefault1.default)(date) - day;
    if (delta <= 0) delta += 7;
    return (0, _indexJsDefault2.default)(date, delta);
}
exports.default = previousDay;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../getDay/index.js":"jNMnL","../subDays/index.js":"8gyqn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gwW5m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousFriday(date) {
    (0, _indexJsDefault.default)(1, arguments);
    return (0, _indexJsDefault1.default)(date, 5);
}
exports.default = previousFriday;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../previousDay/index.js":"4yyOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1jXoF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousMonday(date) {
    (0, _indexJsDefault.default)(1, arguments);
    return (0, _indexJsDefault1.default)(date, 1);
}
exports.default = previousMonday;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../previousDay/index.js":"4yyOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6S7QL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousSaturday(date) {
    (0, _indexJsDefault.default)(1, arguments);
    return (0, _indexJsDefault1.default)(date, 6);
}
exports.default = previousSaturday;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../previousDay/index.js":"4yyOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bEdV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousSunday(date) {
    (0, _indexJsDefault.default)(1, arguments);
    return (0, _indexJsDefault1.default)(date, 0);
}
exports.default = previousSunday;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../previousDay/index.js":"4yyOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ceXm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousThursday(date) {
    (0, _indexJsDefault.default)(1, arguments);
    return (0, _indexJsDefault1.default)(date, 4);
}
exports.default = previousThursday;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../previousDay/index.js":"4yyOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4jl28":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousTuesday(date) {
    (0, _indexJsDefault.default)(1, arguments);
    return (0, _indexJsDefault1.default)(date, 2);
}
exports.default = previousTuesday;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../previousDay/index.js":"4yyOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkbGx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousWednesday(date) {
    (0, _indexJsDefault.default)(1, arguments);
    return (0, _indexJsDefault1.default)(date, 3);
}
exports.default = previousWednesday;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../previousDay/index.js":"4yyOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDlLj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function quartersToMonths(quarters) {
    (0, _indexJsDefault.default)(1, arguments);
    return Math.floor(quarters * (0, _indexJs1.monthsInQuarter));
}
exports.default = quartersToMonths;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gt4go":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function quartersToYears(quarters) {
    (0, _indexJsDefault.default)(1, arguments);
    var years = quarters / (0, _indexJs1.quartersInYear);
    return Math.floor(years);
}
exports.default = quartersToYears;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kc9v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/roundingMethods/index.js");
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
function roundToNearestMinutes(dirtyDate, options) {
    var _options$nearestTo;
    if (arguments.length < 1) throw new TypeError("1 argument required, but only none provided present");
    var nearestTo = (0, _indexJsDefault1.default)((_options$nearestTo = options === null || options === void 0 ? void 0 : options.nearestTo) !== null && _options$nearestTo !== void 0 ? _options$nearestTo : 1);
    if (nearestTo < 1 || nearestTo > 30) throw new RangeError("`options.nearestTo` must be between 1 and 30");
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var seconds = date.getSeconds(); // relevant if nearestTo is 1, which is the default case
    var minutes = date.getMinutes() + seconds / 60;
    var roundingMethod = (0, _indexJs1.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod);
    var roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
    var remainderMinutes = minutes % nearestTo;
    var addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), roundedMinutes + addedMinutes);
}
exports.default = roundToNearestMinutes;

},{"../toDate/index.js":"fsust","../_lib/roundingMethods/index.js":"ilPgA","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3VDkD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function secondsToHours(seconds) {
    (0, _indexJsDefault.default)(1, arguments);
    var hours = seconds / (0, _indexJs1.secondsInHour);
    return Math.floor(hours);
}
exports.default = secondsToHours;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jFr9Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function secondsToMilliseconds(seconds) {
    (0, _indexJsDefault.default)(1, arguments);
    return seconds * (0, _indexJs1.millisecondsInSecond);
}
exports.default = secondsToMilliseconds;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHUPS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function secondsToMinutes(seconds) {
    (0, _indexJsDefault.default)(1, arguments);
    var minutes = seconds / (0, _indexJs1.secondsInMinute);
    return Math.floor(minutes);
}
exports.default = secondsToMinutes;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqSMT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../setMonth/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function set(dirtyDate, values) {
    (0, _indexJsDefault3.default)(2, arguments);
    if (_typeof(values) !== "object" || values === null) throw new RangeError("values parameter must be an object");
    var date = (0, _indexJsDefault.default)(dirtyDate); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
    if (isNaN(date.getTime())) return new Date(NaN);
    if (values.year != null) date.setFullYear(values.year);
    if (values.month != null) date = (0, _indexJsDefault1.default)(date, values.month);
    if (values.date != null) date.setDate((0, _indexJsDefault2.default)(values.date));
    if (values.hours != null) date.setHours((0, _indexJsDefault2.default)(values.hours));
    if (values.minutes != null) date.setMinutes((0, _indexJsDefault2.default)(values.minutes));
    if (values.seconds != null) date.setSeconds((0, _indexJsDefault2.default)(values.seconds));
    if (values.milliseconds != null) date.setMilliseconds((0, _indexJsDefault2.default)(values.milliseconds));
    return date;
}
exports.default = set;

},{"../toDate/index.js":"fsust","../setMonth/index.js":"8IC8x","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8IC8x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../getDaysInMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setMonth(dirtyDate, dirtyMonth) {
    (0, _indexJsDefault3.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var month = (0, _indexJsDefault.default)(dirtyMonth);
    var year = date.getFullYear();
    var day = date.getDate();
    var dateWithDesiredMonth = new Date(0);
    dateWithDesiredMonth.setFullYear(year, month, 15);
    dateWithDesiredMonth.setHours(0, 0, 0, 0);
    var daysInMonth = (0, _indexJsDefault2.default)(dateWithDesiredMonth); // Set the last day of the new month
    // if the original date was the last day of the longer month
    date.setMonth(month, Math.min(day, daysInMonth));
    return date;
}
exports.default = setMonth;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../getDaysInMonth/index.js":"d31S3","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1cbV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setDate(dirtyDate, dirtyDayOfMonth) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var dayOfMonth = (0, _indexJsDefault.default)(dirtyDayOfMonth);
    date.setDate(dayOfMonth);
    return date;
}
exports.default = setDate;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"90thz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/defaultOptions/index.js");
function setDay(dirtyDate, dirtyDay, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault3.default)(2, arguments);
    var defaultOptions = (0, _indexJs4.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault2.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var day = (0, _indexJsDefault2.default)(dirtyDay);
    var currentDay = date.getDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var delta = 7 - weekStartsOn;
    var diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
    return (0, _indexJsDefault.default)(date, diff);
}
exports.default = setDay;

},{"../addDays/index.js":"g6fAH","../toDate/index.js":"fsust","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"azBxA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setDayOfYear(dirtyDate, dirtyDayOfYear) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var dayOfYear = (0, _indexJsDefault.default)(dirtyDayOfYear);
    date.setMonth(0);
    date.setDate(dayOfYear);
    return date;
}
exports.default = setDayOfYear;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnMe7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/defaultOptions/index.js");
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
function setDefaultOptions(newOptions) {
    (0, _indexJsDefault.default)(1, arguments);
    var result = {};
    var defaultOptions = (0, _indexJs.getDefaultOptions)();
    for(var property in defaultOptions)if (Object.prototype.hasOwnProperty.call(defaultOptions, property)) result[property] = defaultOptions[property];
    for(var _property in newOptions)if (Object.prototype.hasOwnProperty.call(newOptions, _property)) {
        if (newOptions[_property] === undefined) delete result[_property];
        else result[_property] = newOptions[_property];
    }
    (0, _indexJs.setDefaultOptions)(result);
}
exports.default = setDefaultOptions;

},{"../_lib/defaultOptions/index.js":"dWs8l","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEL1Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setHours(dirtyDate, dirtyHours) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var hours = (0, _indexJsDefault.default)(dirtyHours);
    date.setHours(hours);
    return date;
}
exports.default = setHours;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9widl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../addDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../getISODay/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function setISODay(dirtyDate, dirtyDay) {
    (0, _indexJsDefault4.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var day = (0, _indexJsDefault.default)(dirtyDay);
    var currentDay = (0, _indexJsDefault3.default)(date);
    var diff = day - currentDay;
    return (0, _indexJsDefault2.default)(date, diff);
}
exports.default = setISODay;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../addDays/index.js":"g6fAH","../getISODay/index.js":"51Xb0","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5Vrh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../getISOWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setISOWeek(dirtyDate, dirtyISOWeek) {
    (0, _indexJsDefault3.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var isoWeek = (0, _indexJsDefault.default)(dirtyISOWeek);
    var diff = (0, _indexJsDefault2.default)(date) - isoWeek;
    date.setDate(date.getDate() - diff * 7);
    return date;
}
exports.default = setISOWeek;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../getISOWeek/index.js":"hp1by","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cAmcB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setMilliseconds(dirtyDate, dirtyMilliseconds) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var milliseconds = (0, _indexJsDefault.default)(dirtyMilliseconds);
    date.setMilliseconds(milliseconds);
    return date;
}
exports.default = setMilliseconds;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5O4xT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setMinutes(dirtyDate, dirtyMinutes) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var minutes = (0, _indexJsDefault.default)(dirtyMinutes);
    date.setMinutes(minutes);
    return date;
}
exports.default = setMinutes;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWjdt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../setMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setQuarter(dirtyDate, dirtyQuarter) {
    (0, _indexJsDefault3.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var quarter = (0, _indexJsDefault.default)(dirtyQuarter);
    var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
    var diff = quarter - oldQuarter;
    return (0, _indexJsDefault2.default)(date, date.getMonth() + diff * 3);
}
exports.default = setQuarter;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../setMonth/index.js":"8IC8x","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCMSm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setSeconds(dirtyDate, dirtySeconds) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var seconds = (0, _indexJsDefault.default)(dirtySeconds);
    date.setSeconds(seconds);
    return date;
}
exports.default = setSeconds;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"agYKW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setWeek(dirtyDate, dirtyWeek, options) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var week = (0, _indexJsDefault3.default)(dirtyWeek);
    var diff = (0, _indexJsDefault.default)(date, options) - week;
    date.setDate(date.getDate() - diff * 7);
    return date;
}
exports.default = setWeek;

},{"../getWeek/index.js":"8sqtB","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6cNLB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInCalendarDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfWeekYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/defaultOptions/index.js");
function setWeekYear(dirtyDate, dirtyWeekYear, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault4.default)(2, arguments);
    var defaultOptions = (0, _indexJs5.getDefaultOptions)();
    var firstWeekContainsDate = (0, _indexJsDefault3.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var date = (0, _indexJsDefault2.default)(dirtyDate);
    var weekYear = (0, _indexJsDefault3.default)(dirtyWeekYear);
    var diff = (0, _indexJsDefault.default)(date, (0, _indexJsDefault1.default)(date, options));
    var firstWeek = new Date(0);
    firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    date = (0, _indexJsDefault1.default)(firstWeek, options);
    date.setDate(date.getDate() + diff);
    return date;
}
exports.default = setWeekYear;

},{"../differenceInCalendarDays/index.js":"adZXy","../startOfWeekYear/index.js":"6b4m8","../toDate/index.js":"fsust","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39i1J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setYear(dirtyDate, dirtyYear) {
    (0, _indexJsDefault2.default)(2, arguments);
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    var year = (0, _indexJsDefault.default)(dirtyYear); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
    if (isNaN(date.getTime())) return new Date(NaN);
    date.setFullYear(year);
    return date;
}
exports.default = setYear;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"22I1I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfDecade(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getFullYear();
    var decade = Math.floor(year / 10) * 10;
    date.setFullYear(decade, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfDecade;

},{"../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lNLPu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function startOfToday() {
    return (0, _indexJsDefault.default)(Date.now());
}
exports.default = startOfToday;

},{"../startOfDay/index.js":"4Tvs3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1zFa":[function(require,module,exports) {
/**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @description
 * Return the start of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * @returns {Date} the start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function startOfTomorrow() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var date = new Date(0);
    date.setFullYear(year, month, day + 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfTomorrow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"epyzi":[function(require,module,exports) {
/**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @description
 * Return the start of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function startOfYesterday() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var date = new Date(0);
    date.setFullYear(year, month, day - 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfYesterday;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lF4Wf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../subDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../subMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function sub(date, duration) {
    (0, _indexJsDefault2.default)(2, arguments);
    if (!duration || _typeof(duration) !== "object") return new Date(NaN);
    var years = duration.years ? (0, _indexJsDefault3.default)(duration.years) : 0;
    var months = duration.months ? (0, _indexJsDefault3.default)(duration.months) : 0;
    var weeks = duration.weeks ? (0, _indexJsDefault3.default)(duration.weeks) : 0;
    var days = duration.days ? (0, _indexJsDefault3.default)(duration.days) : 0;
    var hours = duration.hours ? (0, _indexJsDefault3.default)(duration.hours) : 0;
    var minutes = duration.minutes ? (0, _indexJsDefault3.default)(duration.minutes) : 0;
    var seconds = duration.seconds ? (0, _indexJsDefault3.default)(duration.seconds) : 0; // Subtract years and months
    var dateWithoutMonths = (0, _indexJsDefault1.default)(date, months + years * 12); // Subtract weeks and days
    var dateWithoutDays = (0, _indexJsDefault.default)(dateWithoutMonths, days + weeks * 7); // Subtract hours, minutes and seconds
    var minutestoSub = minutes + hours * 60;
    var secondstoSub = seconds + minutestoSub * 60;
    var mstoSub = secondstoSub * 1000;
    var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
    return finalDate;
}
exports.default = sub;

},{"../subDays/index.js":"8gyqn","../subMonths/index.js":"8bL71","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8bL71":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subMonths(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, -amount);
}
exports.default = subMonths;

},{"../_lib/toInteger/index.js":"f7kKX","../addMonths/index.js":"hES3W","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knA4J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addBusinessDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subBusinessDays(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault1.default)(2, arguments);
    var amount = (0, _indexJsDefault2.default)(dirtyAmount);
    return (0, _indexJsDefault.default)(dirtyDate, -amount);
}
exports.default = subBusinessDays;

},{"../addBusinessDays/index.js":"O4ld6","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7p7WB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addHours/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subHours(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault1.default)(2, arguments);
    var amount = (0, _indexJsDefault2.default)(dirtyAmount);
    return (0, _indexJsDefault.default)(dirtyDate, -amount);
}
exports.default = subHours;

},{"../addHours/index.js":"6s0f5","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ddvuy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addMinutes/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subMinutes(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault1.default)(2, arguments);
    var amount = (0, _indexJsDefault2.default)(dirtyAmount);
    return (0, _indexJsDefault.default)(dirtyDate, -amount);
}
exports.default = subMinutes;

},{"../addMinutes/index.js":"fZ0OC","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Vwlx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addQuarters/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subQuarters(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, -amount);
}
exports.default = subQuarters;

},{"../_lib/toInteger/index.js":"f7kKX","../addQuarters/index.js":"c1KfH","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dQGem":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addSeconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subSeconds(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, -amount);
}
exports.default = subSeconds;

},{"../_lib/toInteger/index.js":"f7kKX","../addSeconds/index.js":"foXxx","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2aYSV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addWeeks/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subWeeks(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, -amount);
}
exports.default = subWeeks;

},{"../_lib/toInteger/index.js":"f7kKX","../addWeeks/index.js":"gPOA0","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d6aiM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addYears/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subYears(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return (0, _indexJsDefault1.default)(dirtyDate, -amount);
}
exports.default = subYears;

},{"../_lib/toInteger/index.js":"f7kKX","../addYears/index.js":"g0YQq","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hccRZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function weeksToDays(weeks) {
    (0, _indexJsDefault.default)(1, arguments);
    return Math.floor(weeks * (0, _indexJs1.daysInWeek));
}
exports.default = weeksToDays;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"48b03":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function yearsToMonths(years) {
    (0, _indexJsDefault.default)(1, arguments);
    return Math.floor(years * (0, _indexJs1.monthsInYear));
}
exports.default = yearsToMonths;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKBEY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function yearsToQuarters(years) {
    (0, _indexJsDefault.default)(1, arguments);
    return Math.floor(years * (0, _indexJs1.quartersInYear));
}
exports.default = yearsToQuarters;

},{"../_lib/requiredArgs/index.js":"9wUgQ","../constants/index.js":"iOhcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gzp3I","1Z4Rq"], "1Z4Rq", "parcelRequire95a1")

//# sourceMappingURL=index.5d9dacde.js.map
