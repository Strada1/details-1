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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _elementsJs = require("./ui/elements.js");
var _getScrollPositionJs = require("./ui/getScrollPosition.js");
var _messageJs = require("./ui/message.js");
var _popupJs = require("./ui/popup.js");
var _requestsJs = require("./server/requests.js");
var _urlJs = require("./server/url.js");
var _authorizationJs = require("./authorization.js");
var _sessionStorageJs = require("../sessionStorage.js");
var _couterJs = require("./helpers/couter.js");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
const messagesHistory = (0, _sessionStorageJs.getItemFromSessionStorage)((0, _sessionStorageJs.STORAGE_KEY).MESSAGES_HISTORY);
const userInfo = (0, _sessionStorageJs.getItemFromSessionStorage)((0, _sessionStorageJs.STORAGE_KEY).USER_INFO);
async function registryHandler() {
    const emailValue = (0, _elementsJs.INPUT).EMAIL.value;
    if (!emailValue) return;
    const response = await (0, _requestsJs.registryUser)((0, _urlJs.getUrl)((0, _urlJs.URL_DIRECTORY).USER), emailValue);
    if (!response.ok) return;
    (0, _popupJs.closePopup)((0, _elementsJs.POPUPS).REGISTRATION);
    (0, _popupJs.showPopup)((0, _elementsJs.POPUPS).AUTHORIZATION);
    initWebSockets();
    (0, _elementsJs.FORM).REGISTRATION.reset();
}
function authorizationHandler() {
    const authorizationToken = (0, _elementsJs.INPUT).TOKEN.value;
    if (!authorizationToken) return;
    (0, _jsCookieDefault.default).set((0, _authorizationJs.AUTHORIZATION_COOKIE_KEY), authorizationToken);
    (0, _popupJs.closePopup)((0, _elementsJs.POPUPS).AUTHORIZATION);
    (0, _popupJs.initPopup)((0, _elementsJs.POPUPS).SETTINGS.POPUP, (0, _elementsJs.POPUPS).SETTINGS.TRIGGER, (0, _elementsJs.POPUPS).SETTINGS.CLOSE_BUTTON);
    (0, _elementsJs.FORM).AUTHORIZATION.reset();
}
async function changeNameHandler() {
    const name = (0, _elementsJs.INPUT).NAME.value;
    if (!name) return;
    const response = await (0, _requestsJs.changeUserName)((0, _urlJs.getUrl)((0, _urlJs.URL_DIRECTORY).USER), name, (0, _authorizationJs.getAuthorizationToken)((0, _authorizationJs.authorizationToken)));
    if (!response.ok) return;
    (0, _popupJs.closePopup)((0, _elementsJs.POPUPS).SETTINGS.POPUP);
    (0, _elementsJs.FORM).CHANGE_NAME.reset();
}
const increaseArrayIndex = (0, _couterJs.counter)(1);
function scrollHandler() {
    const isScrolledToTop = (0, _getScrollPositionJs.getScrollPosition)();
    if (isScrolledToTop) {
        const ALL_MESSAGES_LOADED = "Вся история загружена";
        let arrayIndex = increaseArrayIndex();
        const allMessagesLoaded = arrayIndex === messagesHistory.length;
        if (allMessagesLoaded) alert(ALL_MESSAGES_LOADED);
        (0, _messageJs.renderMessagesHistory)(messagesHistory[arrayIndex], index = 0, userInfo.email);
    }
}
function initWebSockets() {
    const CLOSE_CONNECTION_MESSAGE = "Соединение с чатом прервано";
    const socket = new WebSocket((0, _urlJs.WEBSOKETS_URL) + (0, _authorizationJs.authorizationToken));
    function sendMessageSubmitHandler() {
        const text = (0, _elementsJs.INPUT).MESSAGE.value;
        if (!text) return;
        socket.send(JSON.stringify({
            text
        }));
        (0, _elementsJs.FORM).SEND_MESSAGE.reset();
    }
    function onSocketOpen() {
        (0, _elementsJs.FORM).SEND_MESSAGE.addEventListener("submit", sendMessageSubmitHandler);
    }
    function onSocketMessage(event) {
        const { text: message , createdAt: date , user: { name , email  }  } = JSON.parse(event.data);
        (0, _messageJs.renderMessage)({
            message,
            date,
            name,
            email,
            currentUserEmail: userInfo.email
        }, true);
    }
    function onSocketClose() {
        alert(CLOSE_CONNECTION_MESSAGE);
    }
    socket.onopen = onSocketOpen;
    socket.onmessage = onSocketMessage;
    socket.onclose = onSocketClose;
    (0, _elementsJs.EXIT_BUTTON).addEventListener("click", ()=>socket.close());
}
async function startOnAuthorizationUser() {
    if (0, _authorizationJs.authorizationToken) {
        const userInfo = await (0, _requestsJs.getUserInfo)((0, _urlJs.getUrl)((0, _urlJs.URL_DIRECTORY).USER_INFO), (0, _authorizationJs.getAuthorizationToken)((0, _authorizationJs.authorizationToken)));
        const messagesHistory = await (0, _requestsJs.getMessages)((0, _urlJs.getUrl)((0, _urlJs.URL_DIRECTORY).MESSAGES), (0, _authorizationJs.getAuthorizationToken)((0, _authorizationJs.authorizationToken)), userInfo.email);
        const firstMessagesChunk = 0;
        (0, _messageJs.renderMessagesHistory)(messagesHistory[firstMessagesChunk], index = 0, userInfo.email);
        (0, _sessionStorageJs.setItemInSessionStorage)((0, _sessionStorageJs.STORAGE_KEY).MESSAGES_HISTORY, messagesHistory);
        (0, _sessionStorageJs.setItemInSessionStorage)((0, _sessionStorageJs.STORAGE_KEY).USER_INFO, userInfo);
        (0, _popupJs.initPopup)((0, _elementsJs.POPUPS).SETTINGS.POPUP, (0, _elementsJs.POPUPS).SETTINGS.TRIGGER, (0, _elementsJs.POPUPS).SETTINGS.CLOSE_BUTTON);
        initWebSockets();
    }
}
function startOnNotAuhtorizationUser() {
    if (0, _authorizationJs.authorizationToken) return;
    (0, _popupJs.showPopup)((0, _elementsJs.POPUPS).REGISTRATION);
}
function eventListeners() {
    (0, _elementsJs.FORM).ALL_FORMS.forEach((form)=>{
        form.addEventListener("submit", (event)=>{
            event.preventDefault();
        });
    });
    (0, _elementsJs.FORM).REGISTRATION.addEventListener("submit", registryHandler);
    (0, _elementsJs.FORM).AUTHORIZATION.addEventListener("submit", authorizationHandler);
    (0, _elementsJs.FORM).CHANGE_NAME.addEventListener("submit", changeNameHandler);
    (0, _elementsJs.MESSAGES_DISPLAY).addEventListener("scroll", scrollHandler);
}
async function onDomLoad() {
    eventListeners();
    startOnNotAuhtorizationUser();
    startOnAuthorizationUser();
}
document.addEventListener("DOMContentLoaded", onDomLoad);

},{"./ui/elements.js":"kdHRQ","./ui/popup.js":"eRZb9","./server/requests.js":"bn0mI","./server/url.js":"dEatQ","js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./authorization.js":"iH89i","./ui/message.js":"eNqTc","./ui/getScrollPosition.js":"iqKj9","../sessionStorage.js":"hvpwO","./helpers/couter.js":"NS6ij"}],"kdHRQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "POPUPS", ()=>POPUPS);
parcelHelpers.export(exports, "FORM", ()=>FORM);
parcelHelpers.export(exports, "INPUT", ()=>INPUT);
parcelHelpers.export(exports, "EXIT_BUTTON", ()=>EXIT_BUTTON);
parcelHelpers.export(exports, "MESSAGES_DISPLAY", ()=>MESSAGES_DISPLAY);
const POPUPS = {
    REGISTRATION: document.querySelector("#registration-popup"),
    AUTHORIZATION: document.querySelector("#authorization-popup"),
    SETTINGS: {
        POPUP: document.querySelector("#settings-popup"),
        TRIGGER: document.querySelector("#settings-button"),
        CLOSE_BUTTON: document.querySelector("#settings-popup .popup__close")
    }
};
const FORM = {
    ALL_FORMS: document.querySelectorAll("form"),
    REGISTRATION: document.querySelector("#registration-form"),
    AUTHORIZATION: document.querySelector("#autorization-form"),
    CHANGE_NAME: document.querySelector("#change-name-form"),
    SEND_MESSAGE: document.querySelector("#send-message-form")
};
const INPUT = {
    EMAIL: document.querySelector("#email-input"),
    TOKEN: document.querySelector("#token-input"),
    NAME: document.querySelector("#name-input"),
    MESSAGE: document.querySelector("#message-input")
};
const EXIT_BUTTON = document.querySelector("#exit-button");
const MESSAGES_DISPLAY = document.querySelector(".display__inner");

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

},{}],"eRZb9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPopup", ()=>initPopup);
parcelHelpers.export(exports, "showPopup", ()=>showPopup);
parcelHelpers.export(exports, "closePopup", ()=>closePopup);
const POPUP_ACTIVE_CLASS = "popup--active";
function initPopup(popup, trigger, closeButton) {
    trigger.addEventListener("click", ()=>showPopup(popup));
    closeButton.addEventListener("click", ()=>closePopup(popup));
}
function showPopup(popup) {
    popup.classList.add(POPUP_ACTIVE_CLASS);
}
function closePopup(popup) {
    popup.classList.remove(POPUP_ACTIVE_CLASS);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bn0mI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registryUser", ()=>registryUser);
parcelHelpers.export(exports, "changeUserName", ()=>changeUserName);
parcelHelpers.export(exports, "getUserInfo", ()=>getUserInfo);
parcelHelpers.export(exports, "getMessages", ()=>getMessages);
var _errorsJs = require("./errors.js");
async function registryUser(url, email) {
    const options = {
        method: "POST",
        body: JSON.stringify({
            email
        }),
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error((0, _errorsJs.ERROR_MESSAGE).REGISTRATION);
        return response;
    } catch (error) {
        alert(error.message);
    }
}
async function changeUserName(url, name, token) {
    const options = {
        method: "PATCH",
        body: JSON.stringify({
            name
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error((0, _errorsJs.ERROR_MESSAGE).NAME_CHANGE);
        return response;
    } catch (error) {
        alert(error.message);
    }
}
async function getUserInfo(url, token) {
    const options = {
        method: "GET",
        headers: {
            Authorization: token
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error((0, _errorsJs.ERROR_MESSAGE).GETTING_USER_DATA);
        return await response.json();
    } catch (error) {
        alert(error.message);
    }
}
async function getMessages(url, token, from, to) {
    const options = {
        method: "GET",
        headers: {
            Authorization: token
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error((0, _errorsJs.ERROR_MESSAGE).GETTING_MESSAGES);
        const body = await response.json();
        const chunkSize = 20;
        let chunk = [];
        const messagesHistory = body.messages.reduce((acc, item)=>{
            chunk.push(item);
            if (chunk.length === chunkSize) {
                acc.push(chunk);
                chunk = [];
            }
            return acc;
        }, []);
        return messagesHistory;
    } catch (error) {
        alert(error);
    }
}

},{"./errors.js":"kf8V6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kf8V6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ERROR_MESSAGE", ()=>ERROR_MESSAGE);
const ERROR_MESSAGE = {
    REGISTRATION: "Ошибка, email не отправлен!",
    NAME_CHANGE: "Ошибка Изменения имени",
    GETTING_USER_DATA: "Ошибка получения данных пользователя",
    GETTING_MESSAGES: "Ошибка получения истории сообщений"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dEatQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WEBSOKETS_URL", ()=>WEBSOKETS_URL);
parcelHelpers.export(exports, "URL_DIRECTORY", ()=>URL_DIRECTORY);
parcelHelpers.export(exports, "getUrl", ()=>getUrl);
const URL = "https://edu.strada.one/api/";
const WEBSOKETS_URL = `wss://edu.strada.one/websockets?`;
const URL_DIRECTORY = {
    USER: "user",
    MESSAGES: "messages",
    USER_INFO: "user/me"
};
function getUrl(directory) {
    return URL + directory;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8bBu":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    /* eslint-disable no-var */ function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)target[key] = source[key];
        }
        return target;
    }
    /* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
        read: function(value) {
            if (value[0] === '"') value = value.slice(1, -1);
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(value) {
            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
    };
    /* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter, defaultAttributes) {
        function set(key, value, attributes) {
            if (typeof document === "undefined") return;
            attributes = assign({}, defaultAttributes, attributes);
            if (typeof attributes.expires === "number") attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
            if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
            key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = "";
            for(var attributeName in attributes){
                if (!attributes[attributeName]) continue;
                stringifiedAttributes += "; " + attributeName;
                if (attributes[attributeName] === true) continue;
                // Considers RFC 6265 section 5.2:
                // ...
                // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                //     character:
                // Consume the characters of the unparsed-attributes up to,
                // not including, the first %x3B (";") character.
                // ...
                stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
            }
            return document.cookie = key + "=" + converter.write(value, key) + stringifiedAttributes;
        }
        function get(key) {
            if (typeof document === "undefined" || arguments.length && !key) return;
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split("; ") : [];
            var jar = {};
            for(var i = 0; i < cookies.length; i++){
                var parts = cookies[i].split("=");
                var value = parts.slice(1).join("=");
                try {
                    var foundKey = decodeURIComponent(parts[0]);
                    jar[foundKey] = converter.read(value, foundKey);
                    if (key === foundKey) break;
                } catch (e) {}
            }
            return key ? jar[key] : jar;
        }
        return Object.create({
            set: set,
            get: get,
            remove: function(key, attributes) {
                set(key, "", assign({}, attributes, {
                    expires: -1
                }));
            },
            withAttributes: function(attributes) {
                return init(this.converter, assign({}, this.attributes, attributes));
            },
            withConverter: function(converter) {
                return init(assign({}, this.converter, converter), this.attributes);
            }
        }, {
            attributes: {
                value: Object.freeze(defaultAttributes)
            },
            converter: {
                value: Object.freeze(converter)
            }
        });
    }
    var api = init(defaultConverter, {
        path: "/"
    });
    /* eslint-enable no-var */ return api;
});

},{}],"iH89i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AUTHORIZATION_COOKIE_KEY", ()=>AUTHORIZATION_COOKIE_KEY);
parcelHelpers.export(exports, "authorizationToken", ()=>authorizationToken);
parcelHelpers.export(exports, "getAuthorizationToken", ()=>getAuthorizationToken);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
const AUTHORIZATION_COOKIE_KEY = "auth";
const authorizationToken = (0, _jsCookieDefault.default).get(AUTHORIZATION_COOKIE_KEY);
const AUTHORIZATION_WORD = "Bearer";
function getAuthorizationToken(token) {
    return AUTHORIZATION_WORD + " " + token;
}

},{"js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eNqTc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderMessage", ()=>renderMessage);
parcelHelpers.export(exports, "renderMessagesHistory", ()=>renderMessagesHistory);
var _elementsJs = require("./elements.js");
var _dayjs = require("dayjs");
var _dayjsDefault = parcelHelpers.interopDefault(_dayjs);
const MESSAGE_TEMPLATE_ID = "#message-template";
const MESSAGE_BLOCK_CLASSES = {
    WRAPPER: ".message",
    TIME: ".message__time",
    NAME: ".message__name",
    TEXT: ".message__text"
};
const MESSAGE_INCOMIN_CLASS = "message--incoming";
function renderMessage({ message , name , date , email , currentUserEmail  }, isMessageFromUi) {
    const isUserMessage = currentUserEmail === email;
    const template = document.querySelector(MESSAGE_TEMPLATE_ID);
    const messageBlock = template.content.cloneNode(true);
    const messageWrapper = messageBlock.querySelector(MESSAGE_BLOCK_CLASSES.WRAPPER);
    const messageTime = messageBlock.querySelector(MESSAGE_BLOCK_CLASSES.TIME);
    const messageName = messageBlock.querySelector(MESSAGE_BLOCK_CLASSES.NAME);
    const messageText = messageBlock.querySelector(MESSAGE_BLOCK_CLASSES.TEXT);
    messageText.textContent = message;
    messageTime.textContent = (0, _dayjsDefault.default)(date).format("HH:MM");
    messageName.textContent = name;
    if (!isUserMessage) messageWrapper.classList.add(MESSAGE_INCOMIN_CLASS);
    if (isMessageFromUi) (0, _elementsJs.MESSAGES_DISPLAY).prepend(messageBlock);
    (0, _elementsJs.MESSAGES_DISPLAY).append(messageBlock);
}
function renderMessagesHistory(array, index = 0, currentUserEmail) {
    if (!array) return;
    if (array.length === index) return;
    const { createdAt: date , text: message , user: { name , email  }  } = array[index];
    renderMessage({
        message,
        name,
        date,
        email,
        currentUserEmail
    }, false);
    renderMessagesHistory(array, ++index, currentUserEmail);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./elements.js":"kdHRQ","dayjs":"NJZFB"}],"NJZFB":[function(require,module,exports) {
!function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t) {
            var e = [
                "th",
                "st",
                "nd",
                "rd"
            ], n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
    }, m = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, v = {
        s: m,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, f), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), f);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: f,
                y: c,
                w: o,
                d: a,
                D: d,
                h: u,
                m: s,
                s: i,
                ms: r,
                Q: h
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, g = "en", D = {};
    D[g] = M;
    var p = function(t) {
        return t instanceof _;
    }, S = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D[s] && (i = s), n && (D[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
    }, w = function(t, e) {
        if (p(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new _(n);
    }, O = v;
    O.l = S, O.i = p, O.w = function(t, e) {
        return w(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var _ = function() {
        function M(t) {
            this.$L = S(t.locale, null, !0), this.parse(t);
        }
        var m = M.prototype;
        return m.parse = function(t) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (O.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t), this.$x = t.x || {}, this.init();
        }, m.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function() {
            return O;
        }, m.isValid = function() {
            return !(this.$d.toString() === l);
        }, m.isSame = function(t, e) {
            var n = w(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function(t, e) {
            return w(t) < this.startOf(e);
        }, m.isBefore = function(t, e) {
            return this.endOf(e) < w(t);
        }, m.$g = function(t, e, n) {
            return O.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function() {
            return this.$d.getTime();
        }, m.startOf = function(t, e) {
            var n = this, r = !!O.u(e) || e, h = O.p(t), l = function(t, e) {
                var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a);
            }, $ = function(t, e) {
                return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
            switch(h){
                case c:
                    return r ? l(1, 0) : l(31, 11);
                case f:
                    return r ? l(1, M) : l(0, M + 1);
                case o:
                    var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                case a:
                case d:
                    return $(v + "Hours", 0);
                case u:
                    return $(v + "Minutes", 1);
                case s:
                    return $(v + "Seconds", 2);
                case i:
                    return $(v + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m.endOf = function(t) {
            return this.startOf(t, !1);
        }, m.$set = function(t, e) {
            var n, o = O.p(t), h = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
            if (o === f || o === c) {
                var y = this.clone().set(d, 1);
                y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
            } else l && this.$d[l]($);
            return this.init(), this;
        }, m.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m.get = function(t) {
            return this[O.p(t)]();
        }, m.add = function(r, h) {
            var d, l = this;
            r = Number(r);
            var $ = O.p(h), y = function(t) {
                var e = w(l);
                return O.w(e.date(e.date() + Math.round(t * r)), l);
            };
            if ($ === f) return this.set(f, this.$M + r);
            if ($ === c) return this.set(c, this.$y + r);
            if ($ === a) return y(1);
            if ($ === o) return y(7);
            var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
            return O.w(m, this);
        }, m.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m.format = function(t) {
            var e = this, n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = O.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, f = n.months, h = function(t, n, i, s) {
                return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            }, c = function(t) {
                return O.s(s % 12 || 12, t, "0");
            }, d = n.meridiem || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            }, $ = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: a + 1,
                MM: O.s(a + 1, 2, "0"),
                MMM: h(n.monthsShort, a, f, 3),
                MMMM: h(f, a),
                D: this.$D,
                DD: O.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: h(n.weekdaysMin, this.$W, o, 2),
                ddd: h(n.weekdaysShort, this.$W, o, 3),
                dddd: o[this.$W],
                H: String(s),
                HH: O.s(s, 2, "0"),
                h: c(1),
                hh: c(2),
                a: d(s, u, !0),
                A: d(s, u, !1),
                m: String(u),
                mm: O.s(u, 2, "0"),
                s: String(this.$s),
                ss: O.s(this.$s, 2, "0"),
                SSS: O.s(this.$ms, 3, "0"),
                Z: i
            };
            return r.replace(y, function(t, e) {
                return e || $[t] || i.replace(":", "");
            });
        }, m.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function(r, d, l) {
            var $, y = O.p(d), M = w(r), m = (M.utcOffset() - this.utcOffset()) * e, v = this - M, g = O.m(this, M);
            return g = ($ = {}, $[c] = g / 12, $[f] = g, $[h] = g / 3, $[o] = (v - m) / 6048e5, $[a] = (v - m) / 864e5, $[u] = v / n, $[s] = v / e, $[i] = v / t, $)[y] || v, l ? g : O.a(g);
        }, m.daysInMonth = function() {
            return this.endOf(f).$D;
        }, m.$locale = function() {
            return D[this.$L];
        }, m.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = S(t, e, !0);
            return r && (n.$L = r), n;
        }, m.clone = function() {
            return O.w(this.$d, this);
        }, m.toDate = function() {
            return new Date(this.valueOf());
        }, m.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function() {
            return this.$d.toISOString();
        }, m.toString = function() {
            return this.$d.toUTCString();
        }, M;
    }(), T = _.prototype;
    return w.prototype = T, [
        [
            "$ms",
            r
        ],
        [
            "$s",
            i
        ],
        [
            "$m",
            s
        ],
        [
            "$H",
            u
        ],
        [
            "$W",
            a
        ],
        [
            "$M",
            f
        ],
        [
            "$y",
            c
        ],
        [
            "$D",
            d
        ]
    ].forEach(function(t) {
        T[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), w.extend = function(t, e) {
        return t.$i || (t(e, _, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t) {
        return w(1e3 * t);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
});

},{}],"iqKj9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getScrollPosition", ()=>getScrollPosition);
var _elementsJs = require("./elements.js");
function getScrollPosition() {
    const scrollTopValue = -(0, _elementsJs.MESSAGES_DISPLAY).scrollTop;
    const displayHeight = (0, _elementsJs.MESSAGES_DISPLAY).clientHeight;
    const displayScrollHeight = (0, _elementsJs.MESSAGES_DISPLAY).scrollHeight;
    const isScrolledToTop = scrollTopValue + displayHeight === displayScrollHeight;
    return isScrolledToTop;
}

},{"./elements.js":"kdHRQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvpwO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STORAGE_KEY", ()=>STORAGE_KEY);
parcelHelpers.export(exports, "setItemInSessionStorage", ()=>setItemInSessionStorage);
parcelHelpers.export(exports, "getItemFromSessionStorage", ()=>getItemFromSessionStorage);
const STORAGE_KEY = {
    MESSAGES_HISTORY: "messagesHistory",
    USER_INFO: "userINFO"
};
function setItemInSessionStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}
function getItemFromSessionStorage(key) {
    return JSON.parse(sessionStorage.getItem(key));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"NS6ij":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "counter", ()=>counter);
function counter(startNumber) {
    let number = startNumber;
    return ()=>{
        return number++;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gzp3I","1Z4Rq"], "1Z4Rq", "parcelRequire938d")

//# sourceMappingURL=index.5d9dacde.js.map
