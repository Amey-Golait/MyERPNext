frappe.dom.set_style("/* sfc-style:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/ProgressRing.vue?type=style&index=0 */\ncircle[data-v-e4881e80] {\n  transition: stroke-dashoffset 0.35s;\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n}\n\n/* sfc-style:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/FilePreview.vue?type=style&index=0 */\n.file-preview[data-v-d6847533] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem;\n  border: 1px solid transparent;\n}\n.file-preview + .file-preview[data-v-d6847533] {\n  border-top-color: var(--border-color);\n}\n.file-preview[data-v-d6847533]:hover {\n  background-color: var(--bg-color);\n  border-color: var(--dark-border-color);\n  border-radius: var(--border-radius);\n}\n.file-preview:hover + .file-preview[data-v-d6847533] {\n  border-top-color: transparent;\n}\n.file-icon[data-v-d6847533] {\n  border-radius: var(--border-radius);\n  width: 2.625rem;\n  height: 2.625rem;\n  overflow: hidden;\n  margin-right: var(--margin-md);\n  flex-shrink: 0;\n}\n.file-icon img[data-v-d6847533] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.file-icon .fallback[data-v-d6847533] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius);\n}\n.file-name[data-v-d6847533] {\n  font-size: var(--text-base);\n  font-weight: var(--text-bold);\n  color: var(--text-color);\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.file-size[data-v-d6847533] {\n  font-size: var(--text-sm);\n  color: var(--text-light);\n}\n.file-actions[data-v-d6847533] {\n  width: 3rem;\n  flex-shrink: 0;\n  margin-left: auto;\n  text-align: center;\n}\n.file-actions .btn[data-v-d6847533] {\n  padding: var(--padding-xs);\n  box-shadow: none;\n}\n.file-action-buttons[data-v-d6847533] {\n  display: flex;\n  justify-content: flex-end;\n}\n.muted[data-v-d6847533] {\n  opacity: 0.5;\n  transition: 0.3s;\n}\n.muted[data-v-d6847533]:hover {\n  opacity: 1;\n}\n.frappe-checkbox[data-v-d6847533] {\n  font-size: var(--text-sm);\n  color: var(--text-light);\n  display: flex;\n  align-items: center;\n  padding-top: 0.25rem;\n}\n.config-area[data-v-d6847533] {\n  gap: 0.5rem;\n}\n.file-error[data-v-d6847533] {\n  font-size: var(--text-sm);\n  font-weight: var(--text-bold);\n}\n\n/* sfc-style:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/TreeNode.vue?type=style&index=0 */\n.btn-load-more[data-v-877e6dee] {\n  margin-left: 1.6rem;\n  margin-top: 0.5rem;\n}\n.popover[data-v-877e6dee] {\n  padding: 10px;\n}\n\n/* sfc-style:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/FileBrowser.vue?type=style&index=0 */\n.file-browser-list[data-v-1d966cc2] {\n  height: 300px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n.file-filter[data-v-1d966cc2] {\n  padding: 3px;\n}\n.tree[data-v-1d966cc2] {\n  overflow: auto;\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 4rem;\n}\n\n/* sfc-style:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/WebLink.vue?type=style&index=0 */\n.file-web-link .input-group[data-v-55466dd8] {\n  margin-top: 10px;\n}\n\n/* node_modules/cropperjs/dist/cropper.min.css */\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.cropper-container img {\n  backface-visibility: hidden;\n  display: block;\n  height: 100%;\n  image-orientation: 0deg;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  width: 100%;\n}\n.cropper-canvas,\n.cropper-crop-box,\n.cropper-drag-box,\n.cropper-modal,\n.cropper-wrap-box {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.cropper-canvas,\n.cropper-wrap-box {\n  overflow: hidden;\n}\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n.cropper-modal {\n  background-color: #000;\n  opacity: .5;\n}\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, .75);\n  overflow: hidden;\n  width: 100%;\n}\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: .5;\n  position: absolute;\n}\n.cropper-dashed.dashed-h {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: 33.33333%;\n  left: 0;\n  top: 33.33333%;\n  width: 100%;\n}\n.cropper-dashed.dashed-v {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: 33.33333%;\n  top: 0;\n  width: 33.33333%;\n}\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: .75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n.cropper-center:after,\n.cropper-center:before {\n  background-color: #eee;\n  content: \" \";\n  display: block;\n  position: absolute;\n}\n.cropper-center:before {\n  height: 1px;\n  left: -3px;\n  top: 0;\n  width: 7px;\n}\n.cropper-center:after {\n  height: 7px;\n  left: 0;\n  top: -3px;\n  width: 1px;\n}\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: .1;\n  position: absolute;\n  width: 100%;\n}\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n.cropper-line {\n  background-color: #39f;\n}\n.cropper-line.line-e {\n  cursor: ew-resize;\n  right: -3px;\n  top: 0;\n  width: 5px;\n}\n.cropper-line.line-n {\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n  top: -3px;\n}\n.cropper-line.line-w {\n  cursor: ew-resize;\n  left: -3px;\n  top: 0;\n  width: 5px;\n}\n.cropper-line.line-s {\n  bottom: -3px;\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n}\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: .75;\n  width: 5px;\n}\n.cropper-point.point-e {\n  cursor: ew-resize;\n  margin-top: -3px;\n  right: -3px;\n  top: 50%;\n}\n.cropper-point.point-n {\n  cursor: ns-resize;\n  left: 50%;\n  margin-left: -3px;\n  top: -3px;\n}\n.cropper-point.point-w {\n  cursor: ew-resize;\n  left: -3px;\n  margin-top: -3px;\n  top: 50%;\n}\n.cropper-point.point-s {\n  bottom: -3px;\n  cursor: s-resize;\n  left: 50%;\n  margin-left: -3px;\n}\n.cropper-point.point-ne {\n  cursor: nesw-resize;\n  right: -3px;\n  top: -3px;\n}\n.cropper-point.point-nw {\n  cursor: nwse-resize;\n  left: -3px;\n  top: -3px;\n}\n.cropper-point.point-sw {\n  bottom: -3px;\n  cursor: nesw-resize;\n  left: -3px;\n}\n.cropper-point.point-se {\n  bottom: -3px;\n  cursor: nwse-resize;\n  height: 20px;\n  opacity: 1;\n  right: -3px;\n  width: 20px;\n}\n@media (min-width:768px) {\n  .cropper-point.point-se {\n    height: 15px;\n    width: 15px;\n  }\n}\n@media (min-width:992px) {\n  .cropper-point.point-se {\n    height: 10px;\n    width: 10px;\n  }\n}\n@media (min-width:1200px) {\n  .cropper-point.point-se {\n    height: 5px;\n    opacity: .75;\n    width: 5px;\n  }\n}\n.cropper-point.point-se:before {\n  background-color: #39f;\n  bottom: -50%;\n  content: \" \";\n  display: block;\n  height: 200%;\n  opacity: 0;\n  position: absolute;\n  right: -50%;\n  width: 200%;\n}\n.cropper-invisible {\n  opacity: 0;\n}\n.cropper-bg {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC);\n}\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n.cropper-hidden {\n  display: none !important;\n}\n.cropper-move {\n  cursor: move;\n}\n.cropper-crop {\n  cursor: crosshair;\n}\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n\n/* sfc-style:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/ImageCropper.vue?type=style&index=0 */\nimg[data-v-21184c3b] {\n  display: block;\n  max-width: 100%;\n  max-height: 600px;\n}\n.image-cropper-actions[data-v-21184c3b] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: var(--margin-md);\n}\n\n/* sfc-style:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/FileUploader.vue?type=style&index=0 */\n.file-upload-area[data-v-8673c2f5] {\n  min-height: 16rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px dashed var(--dark-border-color);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  background-color: var(--bg-color);\n}\n.btn-file-upload[data-v-8673c2f5] {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n  font-size: var(--text-xs);\n}\n/*!\n * Cropper.js v1.6.1\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2023-09-17T03:44:17.565Z\n */\n/*# sourceMappingURL=file_uploader.bundle.VR3BD6JS.css.map */\n");
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@vue/shared/dist/shared.cjs.js
  var require_shared_cjs = __commonJS({
    "node_modules/@vue/shared/dist/shared.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function makeMap(str, expectsLowerCase) {
        const map = /* @__PURE__ */ Object.create(null);
        const list = str.split(",");
        for (let i = 0; i < list.length; i++) {
          map[list[i]] = true;
        }
        return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
      }
      var EMPTY_OBJ = Object.freeze({});
      var EMPTY_ARR = Object.freeze([]);
      var NOOP = () => {
      };
      var NO = () => false;
      var onRE = /^on[^a-z]/;
      var isOn = (key) => onRE.test(key);
      var isModelListener = (key) => key.startsWith("onUpdate:");
      var extend = Object.assign;
      var remove = (arr, el) => {
        const i = arr.indexOf(el);
        if (i > -1) {
          arr.splice(i, 1);
        }
      };
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var hasOwn = (val, key) => hasOwnProperty.call(val, key);
      var isArray = Array.isArray;
      var isMap = (val) => toTypeString(val) === "[object Map]";
      var isSet = (val) => toTypeString(val) === "[object Set]";
      var isDate = (val) => toTypeString(val) === "[object Date]";
      var isRegExp = (val) => toTypeString(val) === "[object RegExp]";
      var isFunction = (val) => typeof val === "function";
      var isString = (val) => typeof val === "string";
      var isSymbol = (val) => typeof val === "symbol";
      var isObject = (val) => val !== null && typeof val === "object";
      var isPromise = (val) => {
        return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
      };
      var objectToString = Object.prototype.toString;
      var toTypeString = (value) => objectToString.call(value);
      var toRawType = (value) => {
        return toTypeString(value).slice(8, -1);
      };
      var isPlainObject = (val) => toTypeString(val) === "[object Object]";
      var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
      var isReservedProp = /* @__PURE__ */ makeMap(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
      );
      var isBuiltInDirective = /* @__PURE__ */ makeMap(
        "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
      );
      var cacheStringFunction = (fn2) => {
        const cache = /* @__PURE__ */ Object.create(null);
        return (str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn2(str));
        };
      };
      var camelizeRE = /-(\w)/g;
      var camelize = cacheStringFunction((str) => {
        return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
      });
      var hyphenateRE = /\B([A-Z])/g;
      var hyphenate = cacheStringFunction(
        (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
      );
      var capitalize = cacheStringFunction((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      });
      var toHandlerKey = cacheStringFunction((str) => {
        const s = str ? `on${capitalize(str)}` : ``;
        return s;
      });
      var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
      var invokeArrayFns = (fns, arg) => {
        for (let i = 0; i < fns.length; i++) {
          fns[i](arg);
        }
      };
      var def = (obj, key, value) => {
        Object.defineProperty(obj, key, {
          configurable: true,
          enumerable: false,
          value
        });
      };
      var looseToNumber = (val) => {
        const n = parseFloat(val);
        return isNaN(n) ? val : n;
      };
      var toNumber = (val) => {
        const n = isString(val) ? Number(val) : NaN;
        return isNaN(n) ? val : n;
      };
      var _globalThis;
      var getGlobalThis = () => {
        return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      };
      var identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
      function genPropsAccessExp(name) {
        return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
      }
      var PatchFlagNames = {
        [1]: `TEXT`,
        [2]: `CLASS`,
        [4]: `STYLE`,
        [8]: `PROPS`,
        [16]: `FULL_PROPS`,
        [32]: `NEED_HYDRATION`,
        [64]: `STABLE_FRAGMENT`,
        [128]: `KEYED_FRAGMENT`,
        [256]: `UNKEYED_FRAGMENT`,
        [512]: `NEED_PATCH`,
        [1024]: `DYNAMIC_SLOTS`,
        [2048]: `DEV_ROOT_FRAGMENT`,
        [-1]: `HOISTED`,
        [-2]: `BAIL`
      };
      var slotFlagsText = {
        [1]: "STABLE",
        [2]: "DYNAMIC",
        [3]: "FORWARDED"
      };
      var GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console";
      var isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
      var isGloballyWhitelisted = isGloballyAllowed;
      var range = 2;
      function generateCodeFrame(source, start2 = 0, end2 = source.length) {
        let lines = source.split(/(\r?\n)/);
        const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
        lines = lines.filter((_, idx) => idx % 2 === 0);
        let count = 0;
        const res = [];
        for (let i = 0; i < lines.length; i++) {
          count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
          if (count >= start2) {
            for (let j = i - range; j <= i + range || end2 > count; j++) {
              if (j < 0 || j >= lines.length)
                continue;
              const line = j + 1;
              res.push(
                `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`
              );
              const lineLength = lines[j].length;
              const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
              if (j === i) {
                const pad = start2 - (count - (lineLength + newLineSeqLength));
                const length = Math.max(
                  1,
                  end2 > count ? lineLength - pad : end2 - start2
                );
                res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
              } else if (j > i) {
                if (end2 > count) {
                  const length = Math.max(Math.min(end2 - count, lineLength), 1);
                  res.push(`   |  ` + "^".repeat(length));
                }
                count += lineLength + newLineSeqLength;
              }
            }
            break;
          }
        }
        return res.join("\n");
      }
      function normalizeStyle(value) {
        if (isArray(value)) {
          const res = {};
          for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) {
              for (const key in normalized) {
                res[key] = normalized[key];
              }
            }
          }
          return res;
        } else if (isString(value) || isObject(value)) {
          return value;
        }
      }
      var listDelimiterRE = /;(?![^(]*\))/g;
      var propertyDelimiterRE = /:([^]+)/;
      var styleCommentRE = /\/\*[^]*?\*\//g;
      function parseStringStyle(cssText) {
        const ret = {};
        cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
          if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
          }
        });
        return ret;
      }
      function stringifyStyle(styles) {
        let ret = "";
        if (!styles || isString(styles)) {
          return ret;
        }
        for (const key in styles) {
          const value = styles[key];
          const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
          if (isString(value) || typeof value === "number") {
            ret += `${normalizedKey}:${value};`;
          }
        }
        return ret;
      }
      function normalizeClass(value) {
        let res = "";
        if (isString(value)) {
          res = value;
        } else if (isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
              res += normalized + " ";
            }
          }
        } else if (isObject(value)) {
          for (const name in value) {
            if (value[name]) {
              res += name + " ";
            }
          }
        }
        return res.trim();
      }
      function normalizeProps(props) {
        if (!props)
          return null;
        let { class: klass, style } = props;
        if (klass && !isString(klass)) {
          props.class = normalizeClass(klass);
        }
        if (style) {
          props.style = normalizeStyle(style);
        }
        return props;
      }
      var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
      var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
      var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
      var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
      var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
      var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
      var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
      var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
      var isBooleanAttr = /* @__PURE__ */ makeMap(
        specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
      );
      function includeBooleanAttr(value) {
        return !!value || value === "";
      }
      var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
      var attrValidationCache = {};
      function isSSRSafeAttrName(name) {
        if (attrValidationCache.hasOwnProperty(name)) {
          return attrValidationCache[name];
        }
        const isUnsafe = unsafeAttrCharRE.test(name);
        if (isUnsafe) {
          console.error(`unsafe attribute name: ${name}`);
        }
        return attrValidationCache[name] = !isUnsafe;
      }
      var propsToAttrMap = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv"
      };
      var isKnownHtmlAttr = /* @__PURE__ */ makeMap(
        `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
      );
      var isKnownSvgAttr = /* @__PURE__ */ makeMap(
        `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
      );
      var escapeRE = /["'&<>]/;
      function escapeHtml(string) {
        const str = "" + string;
        const match = escapeRE.exec(str);
        if (!match) {
          return str;
        }
        let html = "";
        let escaped;
        let index;
        let lastIndex = 0;
        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              escaped = "&quot;";
              break;
            case 38:
              escaped = "&amp;";
              break;
            case 39:
              escaped = "&#39;";
              break;
            case 60:
              escaped = "&lt;";
              break;
            case 62:
              escaped = "&gt;";
              break;
            default:
              continue;
          }
          if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
          }
          lastIndex = index + 1;
          html += escaped;
        }
        return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
      }
      var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
      function escapeHtmlComment(src) {
        return src.replace(commentStripRE, "");
      }
      function looseCompareArrays(a, b) {
        if (a.length !== b.length)
          return false;
        let equal = true;
        for (let i = 0; equal && i < a.length; i++) {
          equal = looseEqual(a[i], b[i]);
        }
        return equal;
      }
      function looseEqual(a, b) {
        if (a === b)
          return true;
        let aValidType = isDate(a);
        let bValidType = isDate(b);
        if (aValidType || bValidType) {
          return aValidType && bValidType ? a.getTime() === b.getTime() : false;
        }
        aValidType = isSymbol(a);
        bValidType = isSymbol(b);
        if (aValidType || bValidType) {
          return a === b;
        }
        aValidType = isArray(a);
        bValidType = isArray(b);
        if (aValidType || bValidType) {
          return aValidType && bValidType ? looseCompareArrays(a, b) : false;
        }
        aValidType = isObject(a);
        bValidType = isObject(b);
        if (aValidType || bValidType) {
          if (!aValidType || !bValidType) {
            return false;
          }
          const aKeysCount = Object.keys(a).length;
          const bKeysCount = Object.keys(b).length;
          if (aKeysCount !== bKeysCount) {
            return false;
          }
          for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
              return false;
            }
          }
        }
        return String(a) === String(b);
      }
      function looseIndexOf(arr, val) {
        return arr.findIndex((item) => looseEqual(item, val));
      }
      var toDisplayString = (val) => {
        return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
      };
      var replacer = (_key, val) => {
        if (val && val.__v_isRef) {
          return replacer(_key, val.value);
        } else if (isMap(val)) {
          return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
              entries[`${key} =>`] = val2;
              return entries;
            }, {})
          };
        } else if (isSet(val)) {
          return {
            [`Set(${val.size})`]: [...val.values()]
          };
        } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
          return String(val);
        }
        return val;
      };
      exports.EMPTY_ARR = EMPTY_ARR;
      exports.EMPTY_OBJ = EMPTY_OBJ;
      exports.NO = NO;
      exports.NOOP = NOOP;
      exports.PatchFlagNames = PatchFlagNames;
      exports.camelize = camelize;
      exports.capitalize = capitalize;
      exports.def = def;
      exports.escapeHtml = escapeHtml;
      exports.escapeHtmlComment = escapeHtmlComment;
      exports.extend = extend;
      exports.genPropsAccessExp = genPropsAccessExp;
      exports.generateCodeFrame = generateCodeFrame;
      exports.getGlobalThis = getGlobalThis;
      exports.hasChanged = hasChanged;
      exports.hasOwn = hasOwn;
      exports.hyphenate = hyphenate;
      exports.includeBooleanAttr = includeBooleanAttr;
      exports.invokeArrayFns = invokeArrayFns;
      exports.isArray = isArray;
      exports.isBooleanAttr = isBooleanAttr;
      exports.isBuiltInDirective = isBuiltInDirective;
      exports.isDate = isDate;
      exports.isFunction = isFunction;
      exports.isGloballyAllowed = isGloballyAllowed;
      exports.isGloballyWhitelisted = isGloballyWhitelisted;
      exports.isHTMLTag = isHTMLTag;
      exports.isIntegerKey = isIntegerKey;
      exports.isKnownHtmlAttr = isKnownHtmlAttr;
      exports.isKnownSvgAttr = isKnownSvgAttr;
      exports.isMap = isMap;
      exports.isModelListener = isModelListener;
      exports.isObject = isObject;
      exports.isOn = isOn;
      exports.isPlainObject = isPlainObject;
      exports.isPromise = isPromise;
      exports.isRegExp = isRegExp;
      exports.isReservedProp = isReservedProp;
      exports.isSSRSafeAttrName = isSSRSafeAttrName;
      exports.isSVGTag = isSVGTag;
      exports.isSet = isSet;
      exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
      exports.isString = isString;
      exports.isSymbol = isSymbol;
      exports.isVoidTag = isVoidTag;
      exports.looseEqual = looseEqual;
      exports.looseIndexOf = looseIndexOf;
      exports.looseToNumber = looseToNumber;
      exports.makeMap = makeMap;
      exports.normalizeClass = normalizeClass;
      exports.normalizeProps = normalizeProps;
      exports.normalizeStyle = normalizeStyle;
      exports.objectToString = objectToString;
      exports.parseStringStyle = parseStringStyle;
      exports.propsToAttrMap = propsToAttrMap;
      exports.remove = remove;
      exports.slotFlagsText = slotFlagsText;
      exports.stringifyStyle = stringifyStyle;
      exports.toDisplayString = toDisplayString;
      exports.toHandlerKey = toHandlerKey;
      exports.toNumber = toNumber;
      exports.toRawType = toRawType;
      exports.toTypeString = toTypeString;
    }
  });

  // node_modules/@vue/shared/index.js
  var require_shared = __commonJS({
    "node_modules/@vue/shared/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_shared_cjs();
      }
    }
  });

  // node_modules/@vue/reactivity/dist/reactivity.cjs.js
  var require_reactivity_cjs = __commonJS({
    "node_modules/@vue/reactivity/dist/reactivity.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var shared = require_shared();
      function warn2(msg, ...args) {
        console.warn(`[Vue warn] ${msg}`, ...args);
      }
      var activeEffectScope;
      var EffectScope = class {
        constructor(detached = false) {
          this.detached = detached;
          this._active = true;
          this.effects = [];
          this.cleanups = [];
          this.parent = activeEffectScope;
          if (!detached && activeEffectScope) {
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
              this
            ) - 1;
          }
        }
        get active() {
          return this._active;
        }
        run(fn2) {
          if (this._active) {
            const currentEffectScope = activeEffectScope;
            try {
              activeEffectScope = this;
              return fn2();
            } finally {
              activeEffectScope = currentEffectScope;
            }
          } else {
            warn2(`cannot run an inactive effect scope.`);
          }
        }
        on() {
          activeEffectScope = this;
        }
        off() {
          activeEffectScope = this.parent;
        }
        stop(fromParent) {
          if (this._active) {
            let i, l;
            for (i = 0, l = this.effects.length; i < l; i++) {
              this.effects[i].stop();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
              this.cleanups[i]();
            }
            if (this.scopes) {
              for (i = 0, l = this.scopes.length; i < l; i++) {
                this.scopes[i].stop(true);
              }
            }
            if (!this.detached && this.parent && !fromParent) {
              const last = this.parent.scopes.pop();
              if (last && last !== this) {
                this.parent.scopes[this.index] = last;
                last.index = this.index;
              }
            }
            this.parent = void 0;
            this._active = false;
          }
        }
      };
      function effectScope(detached) {
        return new EffectScope(detached);
      }
      function recordEffectScope(effect5, scope = activeEffectScope) {
        if (scope && scope.active) {
          scope.effects.push(effect5);
        }
      }
      function getCurrentScope() {
        return activeEffectScope;
      }
      function onScopeDispose(fn2) {
        if (activeEffectScope) {
          activeEffectScope.cleanups.push(fn2);
        } else {
          warn2(
            `onScopeDispose() is called when there is no active effect scope to be associated with.`
          );
        }
      }
      var createDep = (effects) => {
        const dep = new Set(effects);
        dep.w = 0;
        dep.n = 0;
        return dep;
      };
      var wasTracked = (dep) => (dep.w & trackOpBit) > 0;
      var newTracked = (dep) => (dep.n & trackOpBit) > 0;
      var initDepMarkers = ({ deps }) => {
        if (deps.length) {
          for (let i = 0; i < deps.length; i++) {
            deps[i].w |= trackOpBit;
          }
        }
      };
      var finalizeDepMarkers = (effect5) => {
        const { deps } = effect5;
        if (deps.length) {
          let ptr = 0;
          for (let i = 0; i < deps.length; i++) {
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) {
              dep.delete(effect5);
            } else {
              deps[ptr++] = dep;
            }
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
          }
          deps.length = ptr;
        }
      };
      var targetMap = /* @__PURE__ */ new WeakMap();
      var effectTrackDepth = 0;
      var trackOpBit = 1;
      var maxMarkerBits = 30;
      var activeEffect;
      var ITERATE_KEY = Symbol("iterate");
      var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
      var ReactiveEffect = class {
        constructor(fn2, scheduler2 = null, scope) {
          this.fn = fn2;
          this.scheduler = scheduler2;
          this.active = true;
          this.deps = [];
          this.parent = void 0;
          recordEffectScope(this, scope);
        }
        run() {
          if (!this.active) {
            return this.fn();
          }
          let parent = activeEffect;
          let lastShouldTrack = shouldTrack;
          while (parent) {
            if (parent === this) {
              return;
            }
            parent = parent.parent;
          }
          try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) {
              initDepMarkers(this);
            } else {
              cleanupEffect(this);
            }
            return this.fn();
          } finally {
            if (effectTrackDepth <= maxMarkerBits) {
              finalizeDepMarkers(this);
            }
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = void 0;
            if (this.deferStop) {
              this.stop();
            }
          }
        }
        stop() {
          if (activeEffect === this) {
            this.deferStop = true;
          } else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) {
              this.onStop();
            }
            this.active = false;
          }
        }
      };
      function cleanupEffect(effect22) {
        const { deps } = effect22;
        if (deps.length) {
          for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect22);
          }
          deps.length = 0;
        }
      }
      function effect4(fn2, options) {
        if (fn2.effect instanceof ReactiveEffect) {
          fn2 = fn2.effect.fn;
        }
        const _effect = new ReactiveEffect(fn2);
        if (options) {
          shared.extend(_effect, options);
          if (options.scope)
            recordEffectScope(_effect, options.scope);
        }
        if (!options || !options.lazy) {
          _effect.run();
        }
        const runner = _effect.run.bind(_effect);
        runner.effect = _effect;
        return runner;
      }
      function stop(runner) {
        runner.effect.stop();
      }
      var shouldTrack = true;
      var trackStack = [];
      function pauseTracking() {
        trackStack.push(shouldTrack);
        shouldTrack = false;
      }
      function enableTracking() {
        trackStack.push(shouldTrack);
        shouldTrack = true;
      }
      function resetTracking() {
        const last = trackStack.pop();
        shouldTrack = last === void 0 ? true : last;
      }
      function track(target, type, key) {
        if (shouldTrack && activeEffect) {
          let depsMap = targetMap.get(target);
          if (!depsMap) {
            targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
          }
          let dep = depsMap.get(key);
          if (!dep) {
            depsMap.set(key, dep = createDep());
          }
          const eventInfo = { effect: activeEffect, target, type, key };
          trackEffects(dep, eventInfo);
        }
      }
      function trackEffects(dep, debuggerEventExtraInfo) {
        let shouldTrack2 = false;
        if (effectTrackDepth <= maxMarkerBits) {
          if (!newTracked(dep)) {
            dep.n |= trackOpBit;
            shouldTrack2 = !wasTracked(dep);
          }
        } else {
          shouldTrack2 = !dep.has(activeEffect);
        }
        if (shouldTrack2) {
          dep.add(activeEffect);
          activeEffect.deps.push(dep);
          if (activeEffect.onTrack) {
            activeEffect.onTrack(
              shared.extend(
                {
                  effect: activeEffect
                },
                debuggerEventExtraInfo
              )
            );
          }
        }
      }
      function trigger(target, type, key, newValue, oldValue, oldTarget) {
        const depsMap = targetMap.get(target);
        if (!depsMap) {
          return;
        }
        let deps = [];
        if (type === "clear") {
          deps = [...depsMap.values()];
        } else if (key === "length" && shared.isArray(target)) {
          const newLength = Number(newValue);
          depsMap.forEach((dep, key2) => {
            if (key2 === "length" || !shared.isSymbol(key2) && key2 >= newLength) {
              deps.push(dep);
            }
          });
        } else {
          if (key !== void 0) {
            deps.push(depsMap.get(key));
          }
          switch (type) {
            case "add":
              if (!shared.isArray(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              } else if (shared.isIntegerKey(key)) {
                deps.push(depsMap.get("length"));
              }
              break;
            case "delete":
              if (!shared.isArray(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              }
              break;
            case "set":
              if (shared.isMap(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
              }
              break;
          }
        }
        const eventInfo = { target, type, key, newValue, oldValue, oldTarget };
        if (deps.length === 1) {
          if (deps[0]) {
            {
              triggerEffects(deps[0], eventInfo);
            }
          }
        } else {
          const effects = [];
          for (const dep of deps) {
            if (dep) {
              effects.push(...dep);
            }
          }
          {
            triggerEffects(createDep(effects), eventInfo);
          }
        }
      }
      function triggerEffects(dep, debuggerEventExtraInfo) {
        const effects = shared.isArray(dep) ? dep : [...dep];
        for (const effect22 of effects) {
          if (effect22.computed) {
            triggerEffect(effect22, debuggerEventExtraInfo);
          }
        }
        for (const effect22 of effects) {
          if (!effect22.computed) {
            triggerEffect(effect22, debuggerEventExtraInfo);
          }
        }
      }
      function triggerEffect(effect22, debuggerEventExtraInfo) {
        if (effect22 !== activeEffect || effect22.allowRecurse) {
          if (effect22.onTrigger) {
            effect22.onTrigger(shared.extend({ effect: effect22 }, debuggerEventExtraInfo));
          }
          if (effect22.scheduler) {
            effect22.scheduler();
          } else {
            effect22.run();
          }
        }
      }
      function getDepFromReactive(object, key) {
        var _a;
        return (_a = targetMap.get(object)) == null ? void 0 : _a.get(key);
      }
      var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
      var builtInSymbols = new Set(
        /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(shared.isSymbol)
      );
      var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
      function createArrayInstrumentations() {
        const instrumentations = {};
        ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
          instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for (let i = 0, l = this.length; i < l; i++) {
              track(arr, "get", i + "");
            }
            const res = arr[key](...args);
            if (res === -1 || res === false) {
              return arr[key](...args.map(toRaw));
            } else {
              return res;
            }
          };
        });
        ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
          instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
          };
        });
        return instrumentations;
      }
      function hasOwnProperty(key) {
        const obj = toRaw(this);
        track(obj, "has", key);
        return obj.hasOwnProperty(key);
      }
      var BaseReactiveHandler = class {
        constructor(_isReadonly = false, _shallow = false) {
          this._isReadonly = _isReadonly;
          this._shallow = _shallow;
        }
        get(target, key, receiver) {
          const isReadonly2 = this._isReadonly, shallow = this._shallow;
          if (key === "__v_isReactive") {
            return !isReadonly2;
          } else if (key === "__v_isReadonly") {
            return isReadonly2;
          } else if (key === "__v_isShallow") {
            return shallow;
          } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
            return target;
          }
          const targetIsArray = shared.isArray(target);
          if (!isReadonly2) {
            if (targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
              return Reflect.get(arrayInstrumentations, key, receiver);
            }
            if (key === "hasOwnProperty") {
              return hasOwnProperty;
            }
          }
          const res = Reflect.get(target, key, receiver);
          if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
          }
          if (!isReadonly2) {
            track(target, "get", key);
          }
          if (shallow) {
            return res;
          }
          if (isRef(res)) {
            return targetIsArray && shared.isIntegerKey(key) ? res : res.value;
          }
          if (shared.isObject(res)) {
            return isReadonly2 ? readonly(res) : reactive(res);
          }
          return res;
        }
      };
      var MutableReactiveHandler = class extends BaseReactiveHandler {
        constructor(shallow = false) {
          super(false, shallow);
        }
        set(target, key, value, receiver) {
          let oldValue = target[key];
          if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
            return false;
          }
          if (!this._shallow) {
            if (!isShallow(value) && !isReadonly(value)) {
              oldValue = toRaw(oldValue);
              value = toRaw(value);
            }
            if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
              oldValue.value = value;
              return true;
            }
          }
          const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
          const result = Reflect.set(target, key, value, receiver);
          if (target === toRaw(receiver)) {
            if (!hadKey) {
              trigger(target, "add", key, value);
            } else if (shared.hasChanged(value, oldValue)) {
              trigger(target, "set", key, value, oldValue);
            }
          }
          return result;
        }
        deleteProperty(target, key) {
          const hadKey = shared.hasOwn(target, key);
          const oldValue = target[key];
          const result = Reflect.deleteProperty(target, key);
          if (result && hadKey) {
            trigger(target, "delete", key, void 0, oldValue);
          }
          return result;
        }
        has(target, key) {
          const result = Reflect.has(target, key);
          if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
            track(target, "has", key);
          }
          return result;
        }
        ownKeys(target) {
          track(
            target,
            "iterate",
            shared.isArray(target) ? "length" : ITERATE_KEY
          );
          return Reflect.ownKeys(target);
        }
      };
      var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
        constructor(shallow = false) {
          super(true, shallow);
        }
        set(target, key) {
          {
            warn2(
              `Set operation on key "${String(key)}" failed: target is readonly.`,
              target
            );
          }
          return true;
        }
        deleteProperty(target, key) {
          {
            warn2(
              `Delete operation on key "${String(key)}" failed: target is readonly.`,
              target
            );
          }
          return true;
        }
      };
      var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
      var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
      var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(
        true
      );
      var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
      var toShallow = (value) => value;
      var getProto = (v) => Reflect.getPrototypeOf(v);
      function get(target, key, isReadonly2 = false, isShallow2 = false) {
        target = target["__v_raw"];
        const rawTarget = toRaw(target);
        const rawKey = toRaw(key);
        if (!isReadonly2) {
          if (shared.hasChanged(key, rawKey)) {
            track(rawTarget, "get", key);
          }
          track(rawTarget, "get", rawKey);
        }
        const { has: has2 } = getProto(rawTarget);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        if (has2.call(rawTarget, key)) {
          return wrap(target.get(key));
        } else if (has2.call(rawTarget, rawKey)) {
          return wrap(target.get(rawKey));
        } else if (target !== rawTarget) {
          target.get(key);
        }
      }
      function has(key, isReadonly2 = false) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const rawKey = toRaw(key);
        if (!isReadonly2) {
          if (shared.hasChanged(key, rawKey)) {
            track(rawTarget, "has", key);
          }
          track(rawTarget, "has", rawKey);
        }
        return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
      }
      function size(target, isReadonly2 = false) {
        target = target["__v_raw"];
        !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
        return Reflect.get(target, "size", target);
      }
      function add(value) {
        value = toRaw(value);
        const target = toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      }
      function set(key, value) {
        value = toRaw(value);
        const target = toRaw(this);
        const { has: has2, get: get2 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has2.call(target, key);
        } else {
          checkIdentityKeys(target, has2, key);
        }
        const oldValue = get2.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (shared.hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
        return this;
      }
      function deleteEntry(key) {
        const target = toRaw(this);
        const { has: has2, get: get2 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has2.call(target, key);
        } else {
          checkIdentityKeys(target, has2, key);
        }
        const oldValue = get2 ? get2.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
      }
      function clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
        const result = target.clear();
        if (hadItems) {
          trigger(target, "clear", void 0, void 0, oldTarget);
        }
        return result;
      }
      function createForEach(isReadonly2, isShallow2) {
        return function forEach(callback, thisArg) {
          const observed = this;
          const target = observed["__v_raw"];
          const rawTarget = toRaw(target);
          const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
          !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
          return target.forEach((value, key) => {
            return callback.call(thisArg, wrap(value), wrap(key), observed);
          });
        };
      }
      function createIterableMethod(method, isReadonly2, isShallow2) {
        return function(...args) {
          const target = this["__v_raw"];
          const rawTarget = toRaw(target);
          const targetIsMap = shared.isMap(rawTarget);
          const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
          const isKeyOnly = method === "keys" && targetIsMap;
          const innerIterator = target[method](...args);
          const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
          !isReadonly2 && track(
            rawTarget,
            "iterate",
            isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
          );
          return {
            next() {
              const { value, done } = innerIterator.next();
              return done ? { value, done } : {
                value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                done
              };
            },
            [Symbol.iterator]() {
              return this;
            }
          };
        };
      }
      function createReadonlyMethod(type) {
        return function(...args) {
          {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(
              `${shared.capitalize(type)} operation ${key}failed: target is readonly.`,
              toRaw(this)
            );
          }
          return type === "delete" ? false : type === "clear" ? void 0 : this;
        };
      }
      function createInstrumentations() {
        const mutableInstrumentations2 = {
          get(key) {
            return get(this, key);
          },
          get size() {
            return size(this);
          },
          has,
          add,
          set,
          delete: deleteEntry,
          clear,
          forEach: createForEach(false, false)
        };
        const shallowInstrumentations2 = {
          get(key) {
            return get(this, key, false, true);
          },
          get size() {
            return size(this);
          },
          has,
          add,
          set,
          delete: deleteEntry,
          clear,
          forEach: createForEach(false, true)
        };
        const readonlyInstrumentations2 = {
          get(key) {
            return get(this, key, true);
          },
          get size() {
            return size(this, true);
          },
          has(key) {
            return has.call(this, key, true);
          },
          add: createReadonlyMethod("add"),
          set: createReadonlyMethod("set"),
          delete: createReadonlyMethod("delete"),
          clear: createReadonlyMethod("clear"),
          forEach: createForEach(true, false)
        };
        const shallowReadonlyInstrumentations2 = {
          get(key) {
            return get(this, key, true, true);
          },
          get size() {
            return size(this, true);
          },
          has(key) {
            return has.call(this, key, true);
          },
          add: createReadonlyMethod("add"),
          set: createReadonlyMethod("set"),
          delete: createReadonlyMethod("delete"),
          clear: createReadonlyMethod("clear"),
          forEach: createForEach(true, true)
        };
        const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
        iteratorMethods.forEach((method) => {
          mutableInstrumentations2[method] = createIterableMethod(
            method,
            false,
            false
          );
          readonlyInstrumentations2[method] = createIterableMethod(
            method,
            true,
            false
          );
          shallowInstrumentations2[method] = createIterableMethod(
            method,
            false,
            true
          );
          shallowReadonlyInstrumentations2[method] = createIterableMethod(
            method,
            true,
            true
          );
        });
        return [
          mutableInstrumentations2,
          readonlyInstrumentations2,
          shallowInstrumentations2,
          shallowReadonlyInstrumentations2
        ];
      }
      var [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
      ] = /* @__PURE__ */ createInstrumentations();
      function createInstrumentationGetter(isReadonly2, shallow) {
        const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
        return (target, key, receiver) => {
          if (key === "__v_isReactive") {
            return !isReadonly2;
          } else if (key === "__v_isReadonly") {
            return isReadonly2;
          } else if (key === "__v_raw") {
            return target;
          }
          return Reflect.get(
            shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target,
            key,
            receiver
          );
        };
      }
      var mutableCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, false)
      };
      var shallowCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, true)
      };
      var readonlyCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(true, false)
      };
      var shallowReadonlyCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(true, true)
      };
      function checkIdentityKeys(target, has2, key) {
        const rawKey = toRaw(key);
        if (rawKey !== key && has2.call(target, rawKey)) {
          const type = shared.toRawType(target);
          console.warn(
            `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
          );
        }
      }
      var reactiveMap = /* @__PURE__ */ new WeakMap();
      var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
      var readonlyMap = /* @__PURE__ */ new WeakMap();
      var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
      function targetTypeMap(rawType) {
        switch (rawType) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      }
      function getTargetType(value) {
        return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
      }
      function reactive(target) {
        if (isReadonly(target)) {
          return target;
        }
        return createReactiveObject(
          target,
          false,
          mutableHandlers,
          mutableCollectionHandlers,
          reactiveMap
        );
      }
      function shallowReactive(target) {
        return createReactiveObject(
          target,
          false,
          shallowReactiveHandlers,
          shallowCollectionHandlers,
          shallowReactiveMap
        );
      }
      function readonly(target) {
        return createReactiveObject(
          target,
          true,
          readonlyHandlers,
          readonlyCollectionHandlers,
          readonlyMap
        );
      }
      function shallowReadonly(target) {
        return createReactiveObject(
          target,
          true,
          shallowReadonlyHandlers,
          shallowReadonlyCollectionHandlers,
          shallowReadonlyMap
        );
      }
      function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
        if (!shared.isObject(target)) {
          {
            console.warn(`value cannot be made reactive: ${String(target)}`);
          }
          return target;
        }
        if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
          return target;
        }
        const existingProxy = proxyMap.get(target);
        if (existingProxy) {
          return existingProxy;
        }
        const targetType = getTargetType(target);
        if (targetType === 0) {
          return target;
        }
        const proxy = new Proxy(
          target,
          targetType === 2 ? collectionHandlers : baseHandlers
        );
        proxyMap.set(target, proxy);
        return proxy;
      }
      function isReactive(value) {
        if (isReadonly(value)) {
          return isReactive(value["__v_raw"]);
        }
        return !!(value && value["__v_isReactive"]);
      }
      function isReadonly(value) {
        return !!(value && value["__v_isReadonly"]);
      }
      function isShallow(value) {
        return !!(value && value["__v_isShallow"]);
      }
      function isProxy(value) {
        return isReactive(value) || isReadonly(value);
      }
      function toRaw(observed) {
        const raw = observed && observed["__v_raw"];
        return raw ? toRaw(raw) : observed;
      }
      function markRaw(value) {
        shared.def(value, "__v_skip", true);
        return value;
      }
      var toReactive = (value) => shared.isObject(value) ? reactive(value) : value;
      var toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
      function trackRefValue(ref22) {
        if (shouldTrack && activeEffect) {
          ref22 = toRaw(ref22);
          {
            trackEffects(ref22.dep || (ref22.dep = createDep()), {
              target: ref22,
              type: "get",
              key: "value"
            });
          }
        }
      }
      function triggerRefValue(ref22, newVal) {
        ref22 = toRaw(ref22);
        const dep = ref22.dep;
        if (dep) {
          {
            triggerEffects(dep, {
              target: ref22,
              type: "set",
              key: "value",
              newValue: newVal
            });
          }
        }
      }
      function isRef(r) {
        return !!(r && r.__v_isRef === true);
      }
      function ref8(value) {
        return createRef(value, false);
      }
      function shallowRef(value) {
        return createRef(value, true);
      }
      function createRef(rawValue, shallow) {
        if (isRef(rawValue)) {
          return rawValue;
        }
        return new RefImpl(rawValue, shallow);
      }
      var RefImpl = class {
        constructor(value, __v_isShallow) {
          this.__v_isShallow = __v_isShallow;
          this.dep = void 0;
          this.__v_isRef = true;
          this._rawValue = __v_isShallow ? value : toRaw(value);
          this._value = __v_isShallow ? value : toReactive(value);
        }
        get value() {
          trackRefValue(this);
          return this._value;
        }
        set value(newVal) {
          const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
          newVal = useDirectValue ? newVal : toRaw(newVal);
          if (shared.hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
          }
        }
      };
      function triggerRef(ref22) {
        triggerRefValue(ref22, ref22.value);
      }
      function unref(ref22) {
        return isRef(ref22) ? ref22.value : ref22;
      }
      function toValue(source) {
        return shared.isFunction(source) ? source() : unref(source);
      }
      var shallowUnwrapHandlers = {
        get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
        set: (target, key, value, receiver) => {
          const oldValue = target[key];
          if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
          } else {
            return Reflect.set(target, key, value, receiver);
          }
        }
      };
      function proxyRefs(objectWithRefs) {
        return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
      }
      var CustomRefImpl = class {
        constructor(factory) {
          this.dep = void 0;
          this.__v_isRef = true;
          const { get: get2, set: set2 } = factory(
            () => trackRefValue(this),
            () => triggerRefValue(this)
          );
          this._get = get2;
          this._set = set2;
        }
        get value() {
          return this._get();
        }
        set value(newVal) {
          this._set(newVal);
        }
      };
      function customRef(factory) {
        return new CustomRefImpl(factory);
      }
      function toRefs(object) {
        if (!isProxy(object)) {
          console.warn(`toRefs() expects a reactive object but received a plain one.`);
        }
        const ret = shared.isArray(object) ? new Array(object.length) : {};
        for (const key in object) {
          ret[key] = propertyToRef(object, key);
        }
        return ret;
      }
      var ObjectRefImpl = class {
        constructor(_object, _key, _defaultValue) {
          this._object = _object;
          this._key = _key;
          this._defaultValue = _defaultValue;
          this.__v_isRef = true;
        }
        get value() {
          const val = this._object[this._key];
          return val === void 0 ? this._defaultValue : val;
        }
        set value(newVal) {
          this._object[this._key] = newVal;
        }
        get dep() {
          return getDepFromReactive(toRaw(this._object), this._key);
        }
      };
      var GetterRefImpl = class {
        constructor(_getter) {
          this._getter = _getter;
          this.__v_isRef = true;
          this.__v_isReadonly = true;
        }
        get value() {
          return this._getter();
        }
      };
      function toRef(source, key, defaultValue) {
        if (isRef(source)) {
          return source;
        } else if (shared.isFunction(source)) {
          return new GetterRefImpl(source);
        } else if (shared.isObject(source) && arguments.length > 1) {
          return propertyToRef(source, key, defaultValue);
        } else {
          return ref8(source);
        }
      }
      function propertyToRef(source, key, defaultValue) {
        const val = source[key];
        return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
      }
      var ComputedRefImpl = class {
        constructor(getter, _setter, isReadonly2, isSSR) {
          this._setter = _setter;
          this.dep = void 0;
          this.__v_isRef = true;
          this["__v_isReadonly"] = false;
          this._dirty = true;
          this.effect = new ReactiveEffect(getter, () => {
            if (!this._dirty) {
              this._dirty = true;
              triggerRefValue(this);
            }
          });
          this.effect.computed = this;
          this.effect.active = this._cacheable = !isSSR;
          this["__v_isReadonly"] = isReadonly2;
        }
        get value() {
          const self2 = toRaw(this);
          trackRefValue(self2);
          if (self2._dirty || !self2._cacheable) {
            self2._dirty = false;
            self2._value = self2.effect.run();
          }
          return self2._value;
        }
        set value(newValue) {
          this._setter(newValue);
        }
      };
      function computed6(getterOrOptions, debugOptions, isSSR = false) {
        let getter;
        let setter;
        const onlyGetter = shared.isFunction(getterOrOptions);
        if (onlyGetter) {
          getter = getterOrOptions;
          setter = () => {
            console.warn("Write operation failed: computed value is readonly");
          };
        } else {
          getter = getterOrOptions.get;
          setter = getterOrOptions.set;
        }
        const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
        if (debugOptions && !isSSR) {
          cRef.effect.onTrack = debugOptions.onTrack;
          cRef.effect.onTrigger = debugOptions.onTrigger;
        }
        return cRef;
      }
      var tick = /* @__PURE__ */ Promise.resolve();
      var queue = [];
      var queued = false;
      var scheduler = (fn2) => {
        queue.push(fn2);
        if (!queued) {
          queued = true;
          tick.then(flush);
        }
      };
      var flush = () => {
        for (let i = 0; i < queue.length; i++) {
          queue[i]();
        }
        queue.length = 0;
        queued = false;
      };
      var DeferredComputedRefImpl = class {
        constructor(getter) {
          this.dep = void 0;
          this._dirty = true;
          this.__v_isRef = true;
          this["__v_isReadonly"] = true;
          let compareTarget;
          let hasCompareTarget = false;
          let scheduled = false;
          this.effect = new ReactiveEffect(getter, (computedTrigger) => {
            if (this.dep) {
              if (computedTrigger) {
                compareTarget = this._value;
                hasCompareTarget = true;
              } else if (!scheduled) {
                const valueToCompare = hasCompareTarget ? compareTarget : this._value;
                scheduled = true;
                hasCompareTarget = false;
                scheduler(() => {
                  if (this.effect.active && this._get() !== valueToCompare) {
                    triggerRefValue(this);
                  }
                  scheduled = false;
                });
              }
              for (const e of this.dep) {
                if (e.computed instanceof DeferredComputedRefImpl) {
                  e.scheduler(
                    true
                  );
                }
              }
            }
            this._dirty = true;
          });
          this.effect.computed = this;
        }
        _get() {
          if (this._dirty) {
            this._dirty = false;
            return this._value = this.effect.run();
          }
          return this._value;
        }
        get value() {
          trackRefValue(this);
          return toRaw(this)._get();
        }
      };
      function deferredComputed(getter) {
        return new DeferredComputedRefImpl(getter);
      }
      exports.EffectScope = EffectScope;
      exports.ITERATE_KEY = ITERATE_KEY;
      exports.ReactiveEffect = ReactiveEffect;
      exports.computed = computed6;
      exports.customRef = customRef;
      exports.deferredComputed = deferredComputed;
      exports.effect = effect4;
      exports.effectScope = effectScope;
      exports.enableTracking = enableTracking;
      exports.getCurrentScope = getCurrentScope;
      exports.isProxy = isProxy;
      exports.isReactive = isReactive;
      exports.isReadonly = isReadonly;
      exports.isRef = isRef;
      exports.isShallow = isShallow;
      exports.markRaw = markRaw;
      exports.onScopeDispose = onScopeDispose;
      exports.pauseTracking = pauseTracking;
      exports.proxyRefs = proxyRefs;
      exports.reactive = reactive;
      exports.readonly = readonly;
      exports.ref = ref8;
      exports.resetTracking = resetTracking;
      exports.shallowReactive = shallowReactive;
      exports.shallowReadonly = shallowReadonly;
      exports.shallowRef = shallowRef;
      exports.stop = stop;
      exports.toRaw = toRaw;
      exports.toRef = toRef;
      exports.toRefs = toRefs;
      exports.toValue = toValue;
      exports.track = track;
      exports.trigger = trigger;
      exports.triggerRef = triggerRef;
      exports.unref = unref;
    }
  });

  // node_modules/@vue/reactivity/index.js
  var require_reactivity = __commonJS({
    "node_modules/@vue/reactivity/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_reactivity_cjs();
      }
    }
  });

  // node_modules/@vue/runtime-core/dist/runtime-core.cjs.js
  var require_runtime_core_cjs = __commonJS({
    "node_modules/@vue/runtime-core/dist/runtime-core.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var reactivity = require_reactivity();
      var shared = require_shared();
      var stack = [];
      function pushWarningContext(vnode) {
        stack.push(vnode);
      }
      function popWarningContext() {
        stack.pop();
      }
      function warn2(msg, ...args) {
        reactivity.pauseTracking();
        const instance = stack.length ? stack[stack.length - 1].component : null;
        const appWarnHandler = instance && instance.appContext.config.warnHandler;
        const trace = getComponentTrace();
        if (appWarnHandler) {
          callWithErrorHandling(
            appWarnHandler,
            instance,
            11,
            [
              msg + args.join(""),
              instance && instance.proxy,
              trace.map(
                ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
              ).join("\n"),
              trace
            ]
          );
        } else {
          const warnArgs = [`[Vue warn]: ${msg}`, ...args];
          if (trace.length && true) {
            warnArgs.push(`
`, ...formatTrace(trace));
          }
          console.warn(...warnArgs);
        }
        reactivity.resetTracking();
      }
      function getComponentTrace() {
        let currentVNode = stack[stack.length - 1];
        if (!currentVNode) {
          return [];
        }
        const normalizedStack = [];
        while (currentVNode) {
          const last = normalizedStack[0];
          if (last && last.vnode === currentVNode) {
            last.recurseCount++;
          } else {
            normalizedStack.push({
              vnode: currentVNode,
              recurseCount: 0
            });
          }
          const parentInstance = currentVNode.component && currentVNode.component.parent;
          currentVNode = parentInstance && parentInstance.vnode;
        }
        return normalizedStack;
      }
      function formatTrace(trace) {
        const logs = [];
        trace.forEach((entry, i) => {
          logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
        });
        return logs;
      }
      function formatTraceEntry({ vnode, recurseCount }) {
        const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
        const isRoot = vnode.component ? vnode.component.parent == null : false;
        const open = ` at <${formatComponentName(
          vnode.component,
          vnode.type,
          isRoot
        )}`;
        const close = `>` + postfix;
        return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
      }
      function formatProps(props) {
        const res = [];
        const keys = Object.keys(props);
        keys.slice(0, 3).forEach((key) => {
          res.push(...formatProp(key, props[key]));
        });
        if (keys.length > 3) {
          res.push(` ...`);
        }
        return res;
      }
      function formatProp(key, value, raw) {
        if (shared.isString(value)) {
          value = JSON.stringify(value);
          return raw ? value : [`${key}=${value}`];
        } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
          return raw ? value : [`${key}=${value}`];
        } else if (reactivity.isRef(value)) {
          value = formatProp(key, reactivity.toRaw(value.value), true);
          return raw ? value : [`${key}=Ref<`, value, `>`];
        } else if (shared.isFunction(value)) {
          return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
        } else {
          value = reactivity.toRaw(value);
          return raw ? value : [`${key}=`, value];
        }
      }
      function assertNumber(val, type) {
        if (val === void 0) {
          return;
        } else if (typeof val !== "number") {
          warn2(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
        } else if (isNaN(val)) {
          warn2(`${type} is NaN - the duration expression might be incorrect.`);
        }
      }
      var ErrorTypeStrings = {
        ["sp"]: "serverPrefetch hook",
        ["bc"]: "beforeCreate hook",
        ["c"]: "created hook",
        ["bm"]: "beforeMount hook",
        ["m"]: "mounted hook",
        ["bu"]: "beforeUpdate hook",
        ["u"]: "updated",
        ["bum"]: "beforeUnmount hook",
        ["um"]: "unmounted hook",
        ["a"]: "activated hook",
        ["da"]: "deactivated hook",
        ["ec"]: "errorCaptured hook",
        ["rtc"]: "renderTracked hook",
        ["rtg"]: "renderTriggered hook",
        [0]: "setup function",
        [1]: "render function",
        [2]: "watcher getter",
        [3]: "watcher callback",
        [4]: "watcher cleanup function",
        [5]: "native event handler",
        [6]: "component event handler",
        [7]: "vnode hook",
        [8]: "directive hook",
        [9]: "transition hook",
        [10]: "app errorHandler",
        [11]: "app warnHandler",
        [12]: "ref function",
        [13]: "async component loader",
        [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
      };
      function callWithErrorHandling(fn2, instance, type, args) {
        let res;
        try {
          res = args ? fn2(...args) : fn2();
        } catch (err) {
          handleError(err, instance, type);
        }
        return res;
      }
      function callWithAsyncErrorHandling(fn2, instance, type, args) {
        if (shared.isFunction(fn2)) {
          const res = callWithErrorHandling(fn2, instance, type, args);
          if (res && shared.isPromise(res)) {
            res.catch((err) => {
              handleError(err, instance, type);
            });
          }
          return res;
        }
        const values = [];
        for (let i = 0; i < fn2.length; i++) {
          values.push(callWithAsyncErrorHandling(fn2[i], instance, type, args));
        }
        return values;
      }
      function handleError(err, instance, type, throwInDev = true) {
        const contextVNode = instance ? instance.vnode : null;
        if (instance) {
          let cur = instance.parent;
          const exposedInstance = instance.proxy;
          const errorInfo = ErrorTypeStrings[type];
          while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
              for (let i = 0; i < errorCapturedHooks.length; i++) {
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                  return;
                }
              }
            }
            cur = cur.parent;
          }
          const appErrorHandler = instance.appContext.config.errorHandler;
          if (appErrorHandler) {
            callWithErrorHandling(
              appErrorHandler,
              null,
              10,
              [err, exposedInstance, errorInfo]
            );
            return;
          }
        }
        logError(err, type, contextVNode, throwInDev);
      }
      function logError(err, type, contextVNode, throwInDev = true) {
        {
          const info = ErrorTypeStrings[type];
          if (contextVNode) {
            pushWarningContext(contextVNode);
          }
          warn2(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
          if (contextVNode) {
            popWarningContext();
          }
          if (throwInDev) {
            throw err;
          } else {
            console.error(err);
          }
        }
      }
      var isFlushing = false;
      var isFlushPending = false;
      var queue = [];
      var flushIndex = 0;
      var pendingPostFlushCbs = [];
      var activePostFlushCbs = null;
      var postFlushIndex = 0;
      var resolvedPromise = /* @__PURE__ */ Promise.resolve();
      var currentFlushPromise = null;
      var RECURSION_LIMIT = 100;
      function nextTick(fn2) {
        const p = currentFlushPromise || resolvedPromise;
        return fn2 ? p.then(this ? fn2.bind(this) : fn2) : p;
      }
      function findInsertionIndex(id) {
        let start2 = flushIndex + 1;
        let end2 = queue.length;
        while (start2 < end2) {
          const middle = start2 + end2 >>> 1;
          const middleJob = queue[middle];
          const middleJobId = getId(middleJob);
          if (middleJobId < id || middleJobId === id && middleJob.pre) {
            start2 = middle + 1;
          } else {
            end2 = middle;
          }
        }
        return start2;
      }
      function queueJob(job) {
        if (!queue.length || !queue.includes(
          job,
          isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
        )) {
          if (job.id == null) {
            queue.push(job);
          } else {
            queue.splice(findInsertionIndex(job.id), 0, job);
          }
          queueFlush();
        }
      }
      function queueFlush() {
        if (!isFlushing && !isFlushPending) {
          isFlushPending = true;
          currentFlushPromise = resolvedPromise.then(flushJobs);
        }
      }
      function invalidateJob(job) {
        const i = queue.indexOf(job);
        if (i > flushIndex) {
          queue.splice(i, 1);
        }
      }
      function queuePostFlushCb(cb) {
        if (!shared.isArray(cb)) {
          if (!activePostFlushCbs || !activePostFlushCbs.includes(
            cb,
            cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
          )) {
            pendingPostFlushCbs.push(cb);
          }
        } else {
          pendingPostFlushCbs.push(...cb);
        }
        queueFlush();
      }
      function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
        {
          seen = seen || /* @__PURE__ */ new Map();
        }
        for (; i < queue.length; i++) {
          const cb = queue[i];
          if (cb && cb.pre) {
            if (checkRecursiveUpdates(seen, cb)) {
              continue;
            }
            queue.splice(i, 1);
            i--;
            cb();
          }
        }
      }
      function flushPostFlushCbs(seen) {
        if (pendingPostFlushCbs.length) {
          const deduped = [...new Set(pendingPostFlushCbs)];
          pendingPostFlushCbs.length = 0;
          if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
          }
          activePostFlushCbs = deduped;
          {
            seen = seen || /* @__PURE__ */ new Map();
          }
          activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
          for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
              continue;
            }
            activePostFlushCbs[postFlushIndex]();
          }
          activePostFlushCbs = null;
          postFlushIndex = 0;
        }
      }
      var getId = (job) => job.id == null ? Infinity : job.id;
      var comparator = (a, b) => {
        const diff = getId(a) - getId(b);
        if (diff === 0) {
          if (a.pre && !b.pre)
            return -1;
          if (b.pre && !a.pre)
            return 1;
        }
        return diff;
      };
      function flushJobs(seen) {
        isFlushPending = false;
        isFlushing = true;
        {
          seen = seen || /* @__PURE__ */ new Map();
        }
        queue.sort(comparator);
        const check = (job) => checkRecursiveUpdates(seen, job);
        try {
          for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            const job = queue[flushIndex];
            if (job && job.active !== false) {
              if (check(job)) {
                continue;
              }
              callWithErrorHandling(job, null, 14);
            }
          }
        } finally {
          flushIndex = 0;
          queue.length = 0;
          flushPostFlushCbs(seen);
          isFlushing = false;
          currentFlushPromise = null;
          if (queue.length || pendingPostFlushCbs.length) {
            flushJobs(seen);
          }
        }
      }
      function checkRecursiveUpdates(seen, fn2) {
        if (!seen.has(fn2)) {
          seen.set(fn2, 1);
        } else {
          const count = seen.get(fn2);
          if (count > RECURSION_LIMIT) {
            const instance = fn2.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            warn2(
              `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
            );
            return true;
          } else {
            seen.set(fn2, count + 1);
          }
        }
      }
      var isHmrUpdating = false;
      var hmrDirtyComponents = /* @__PURE__ */ new Set();
      {
        shared.getGlobalThis().__VUE_HMR_RUNTIME__ = {
          createRecord: tryWrap(createRecord),
          rerender: tryWrap(rerender),
          reload: tryWrap(reload)
        };
      }
      var map = /* @__PURE__ */ new Map();
      function registerHMR(instance) {
        const id = instance.type.__hmrId;
        let record = map.get(id);
        if (!record) {
          createRecord(id, instance.type);
          record = map.get(id);
        }
        record.instances.add(instance);
      }
      function unregisterHMR(instance) {
        map.get(instance.type.__hmrId).instances.delete(instance);
      }
      function createRecord(id, initialDef) {
        if (map.has(id)) {
          return false;
        }
        map.set(id, {
          initialDef: normalizeClassComponent(initialDef),
          instances: /* @__PURE__ */ new Set()
        });
        return true;
      }
      function normalizeClassComponent(component) {
        return isClassComponent(component) ? component.__vccOpts : component;
      }
      function rerender(id, newRender) {
        const record = map.get(id);
        if (!record) {
          return;
        }
        record.initialDef.render = newRender;
        [...record.instances].forEach((instance) => {
          if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
          }
          instance.renderCache = [];
          isHmrUpdating = true;
          instance.update();
          isHmrUpdating = false;
        });
      }
      function reload(id, newComp) {
        const record = map.get(id);
        if (!record)
          return;
        newComp = normalizeClassComponent(newComp);
        updateComponentDef(record.initialDef, newComp);
        const instances = [...record.instances];
        for (const instance of instances) {
          const oldComp = normalizeClassComponent(instance.type);
          if (!hmrDirtyComponents.has(oldComp)) {
            if (oldComp !== record.initialDef) {
              updateComponentDef(oldComp, newComp);
            }
            hmrDirtyComponents.add(oldComp);
          }
          instance.appContext.propsCache.delete(instance.type);
          instance.appContext.emitsCache.delete(instance.type);
          instance.appContext.optionsCache.delete(instance.type);
          if (instance.ceReload) {
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
          } else if (instance.parent) {
            queueJob(instance.parent.update);
          } else if (instance.appContext.reload) {
            instance.appContext.reload();
          } else if (typeof window !== "undefined") {
            window.location.reload();
          } else {
            console.warn(
              "[HMR] Root or manually mounted instance modified. Full reload required."
            );
          }
        }
        queuePostFlushCb(() => {
          for (const instance of instances) {
            hmrDirtyComponents.delete(
              normalizeClassComponent(instance.type)
            );
          }
        });
      }
      function updateComponentDef(oldComp, newComp) {
        shared.extend(oldComp, newComp);
        for (const key in oldComp) {
          if (key !== "__file" && !(key in newComp)) {
            delete oldComp[key];
          }
        }
      }
      function tryWrap(fn2) {
        return (id, arg) => {
          try {
            return fn2(id, arg);
          } catch (e) {
            console.error(e);
            console.warn(
              `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
            );
          }
        };
      }
      exports.devtools = void 0;
      var buffer = [];
      var devtoolsNotInstalled = false;
      function emit$1(event, ...args) {
        if (exports.devtools) {
          exports.devtools.emit(event, ...args);
        } else if (!devtoolsNotInstalled) {
          buffer.push({ event, args });
        }
      }
      function setDevtoolsHook(hook, target) {
        var _a, _b;
        exports.devtools = hook;
        if (exports.devtools) {
          exports.devtools.enabled = true;
          buffer.forEach(({ event, args }) => exports.devtools.emit(event, ...args));
          buffer = [];
        } else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
          const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
          replay.push((newHook) => {
            setDevtoolsHook(newHook, target);
          });
          setTimeout(() => {
            if (!exports.devtools) {
              target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
              devtoolsNotInstalled = true;
              buffer = [];
            }
          }, 3e3);
        } else {
          devtoolsNotInstalled = true;
          buffer = [];
        }
      }
      function devtoolsInitApp(app, version2) {
        emit$1("app:init", app, version2, {
          Fragment,
          Text,
          Comment,
          Static
        });
      }
      function devtoolsUnmountApp(app) {
        emit$1("app:unmount", app);
      }
      var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
        "component:added"
      );
      var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated");
      var _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
        "component:removed"
      );
      var devtoolsComponentRemoved = (component) => {
        if (exports.devtools && typeof exports.devtools.cleanupBuffer === "function" && !exports.devtools.cleanupBuffer(component)) {
          _devtoolsComponentRemoved(component);
        }
      };
      function createDevtoolsComponentHook(hook) {
        return (component) => {
          emit$1(
            hook,
            component.appContext.app,
            component.uid,
            component.parent ? component.parent.uid : void 0,
            component
          );
        };
      }
      var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
        "perf:start"
      );
      var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
        "perf:end"
      );
      function createDevtoolsPerformanceHook(hook) {
        return (component, type, time) => {
          emit$1(hook, component.appContext.app, component.uid, component, type, time);
        };
      }
      function devtoolsComponentEmit(component, event, params) {
        emit$1(
          "component:emit",
          component.appContext.app,
          component,
          event,
          params
        );
      }
      function emit(instance, event, ...rawArgs) {
        if (instance.isUnmounted)
          return;
        const props = instance.vnode.props || shared.EMPTY_OBJ;
        {
          const {
            emitsOptions,
            propsOptions: [propsOptions]
          } = instance;
          if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
              if (!propsOptions || !(shared.toHandlerKey(event) in propsOptions)) {
                warn2(
                  `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${shared.toHandlerKey(event)}" prop.`
                );
              }
            } else {
              const validator = emitsOptions[event];
              if (shared.isFunction(validator)) {
                const isValid = validator(...rawArgs);
                if (!isValid) {
                  warn2(
                    `Invalid event arguments: event validation failed for event "${event}".`
                  );
                }
              }
            }
          }
        }
        let args = rawArgs;
        const isModelListener = event.startsWith("update:");
        const modelArg = isModelListener && event.slice(7);
        if (modelArg && modelArg in props) {
          const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
          const { number, trim } = props[modifiersKey] || shared.EMPTY_OBJ;
          if (trim) {
            args = rawArgs.map((a) => shared.isString(a) ? a.trim() : a);
          }
          if (number) {
            args = rawArgs.map(shared.looseToNumber);
          }
        }
        {
          devtoolsComponentEmit(instance, event, args);
        }
        {
          const lowerCaseEvent = event.toLowerCase();
          if (lowerCaseEvent !== event && props[shared.toHandlerKey(lowerCaseEvent)]) {
            warn2(
              `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
                instance,
                instance.type
              )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${shared.hyphenate(event)}" instead of "${event}".`
            );
          }
        }
        let handlerName;
        let handler = props[handlerName = shared.toHandlerKey(event)] || props[handlerName = shared.toHandlerKey(shared.camelize(event))];
        if (!handler && isModelListener) {
          handler = props[handlerName = shared.toHandlerKey(shared.hyphenate(event))];
        }
        if (handler) {
          callWithAsyncErrorHandling(
            handler,
            instance,
            6,
            args
          );
        }
        const onceHandler = props[handlerName + `Once`];
        if (onceHandler) {
          if (!instance.emitted) {
            instance.emitted = {};
          } else if (instance.emitted[handlerName]) {
            return;
          }
          instance.emitted[handlerName] = true;
          callWithAsyncErrorHandling(
            onceHandler,
            instance,
            6,
            args
          );
        }
      }
      function normalizeEmitsOptions(comp, appContext, asMixin = false) {
        const cache = appContext.emitsCache;
        const cached = cache.get(comp);
        if (cached !== void 0) {
          return cached;
        }
        const raw = comp.emits;
        let normalized = {};
        let hasExtends = false;
        if (!shared.isFunction(comp)) {
          const extendEmits = (raw2) => {
            const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
            if (normalizedFromExtend) {
              hasExtends = true;
              shared.extend(normalized, normalizedFromExtend);
            }
          };
          if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
          }
          if (comp.extends) {
            extendEmits(comp.extends);
          }
          if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
          }
        }
        if (!raw && !hasExtends) {
          if (shared.isObject(comp)) {
            cache.set(comp, null);
          }
          return null;
        }
        if (shared.isArray(raw)) {
          raw.forEach((key) => normalized[key] = null);
        } else {
          shared.extend(normalized, raw);
        }
        if (shared.isObject(comp)) {
          cache.set(comp, normalized);
        }
        return normalized;
      }
      function isEmitListener(options, key) {
        if (!options || !shared.isOn(key)) {
          return false;
        }
        key = key.slice(2).replace(/Once$/, "");
        return shared.hasOwn(options, key[0].toLowerCase() + key.slice(1)) || shared.hasOwn(options, shared.hyphenate(key)) || shared.hasOwn(options, key);
      }
      var currentRenderingInstance = null;
      var currentScopeId = null;
      function setCurrentRenderingInstance(instance) {
        const prev = currentRenderingInstance;
        currentRenderingInstance = instance;
        currentScopeId = instance && instance.type.__scopeId || null;
        return prev;
      }
      function pushScopeId(id) {
        currentScopeId = id;
      }
      function popScopeId() {
        currentScopeId = null;
      }
      var withScopeId = (_id) => withCtx;
      function withCtx(fn2, ctx = currentRenderingInstance, isNonScopedSlot) {
        if (!ctx)
          return fn2;
        if (fn2._n) {
          return fn2;
        }
        const renderFnWithContext = (...args) => {
          if (renderFnWithContext._d) {
            setBlockTracking(-1);
          }
          const prevInstance = setCurrentRenderingInstance(ctx);
          let res;
          try {
            res = fn2(...args);
          } finally {
            setCurrentRenderingInstance(prevInstance);
            if (renderFnWithContext._d) {
              setBlockTracking(1);
            }
          }
          {
            devtoolsComponentUpdated(ctx);
          }
          return res;
        };
        renderFnWithContext._n = true;
        renderFnWithContext._c = true;
        renderFnWithContext._d = true;
        return renderFnWithContext;
      }
      var accessedAttrs = false;
      function markAttrsAccessed() {
        accessedAttrs = true;
      }
      function renderComponentRoot(instance) {
        const {
          type: Component,
          vnode,
          proxy,
          withProxy,
          props,
          propsOptions: [propsOptions],
          slots,
          attrs,
          emit: emit2,
          render: render8,
          renderCache,
          data,
          setupState,
          ctx,
          inheritAttrs
        } = instance;
        let result;
        let fallthroughAttrs;
        const prev = setCurrentRenderingInstance(instance);
        {
          accessedAttrs = false;
        }
        try {
          if (vnode.shapeFlag & 4) {
            const proxyToUse = withProxy || proxy;
            const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
              get(target, key, receiver) {
                warn2(
                  `Property '${String(
                    key
                  )}' was accessed via 'this'. Avoid using 'this' in templates.`
                );
                return Reflect.get(target, key, receiver);
              }
            }) : proxyToUse;
            result = normalizeVNode(
              render8.call(
                thisProxy,
                proxyToUse,
                renderCache,
                props,
                setupState,
                data,
                ctx
              )
            );
            fallthroughAttrs = attrs;
          } else {
            const render22 = Component;
            if (attrs === props) {
              markAttrsAccessed();
            }
            result = normalizeVNode(
              render22.length > 1 ? render22(
                props,
                true ? {
                  get attrs() {
                    markAttrsAccessed();
                    return attrs;
                  },
                  slots,
                  emit: emit2
                } : { attrs, slots, emit: emit2 }
              ) : render22(
                props,
                null
              )
            );
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
          }
        } catch (err) {
          blockStack.length = 0;
          handleError(err, instance, 1);
          result = createVNode(Comment);
        }
        let root = result;
        let setRoot = void 0;
        if (result.patchFlag > 0 && result.patchFlag & 2048) {
          [root, setRoot] = getChildRoot(result);
        }
        if (fallthroughAttrs && inheritAttrs !== false) {
          const keys = Object.keys(fallthroughAttrs);
          const { shapeFlag } = root;
          if (keys.length) {
            if (shapeFlag & (1 | 6)) {
              if (propsOptions && keys.some(shared.isModelListener)) {
                fallthroughAttrs = filterModelListeners(
                  fallthroughAttrs,
                  propsOptions
                );
              }
              root = cloneVNode(root, fallthroughAttrs);
            } else if (!accessedAttrs && root.type !== Comment) {
              const allAttrs = Object.keys(attrs);
              const eventAttrs = [];
              const extraAttrs = [];
              for (let i = 0, l = allAttrs.length; i < l; i++) {
                const key = allAttrs[i];
                if (shared.isOn(key)) {
                  if (!shared.isModelListener(key)) {
                    eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                  }
                } else {
                  extraAttrs.push(key);
                }
              }
              if (extraAttrs.length) {
                warn2(
                  `Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
                );
              }
              if (eventAttrs.length) {
                warn2(
                  `Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
                );
              }
            }
          }
        }
        if (vnode.dirs) {
          if (!isElementRoot(root)) {
            warn2(
              `Runtime directive used on component with non-element root node. The directives will not function as intended.`
            );
          }
          root = cloneVNode(root);
          root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
        }
        if (vnode.transition) {
          if (!isElementRoot(root)) {
            warn2(
              `Component inside <Transition> renders non-element root node that cannot be animated.`
            );
          }
          root.transition = vnode.transition;
        }
        if (setRoot) {
          setRoot(root);
        } else {
          result = root;
        }
        setCurrentRenderingInstance(prev);
        return result;
      }
      var getChildRoot = (vnode) => {
        const rawChildren = vnode.children;
        const dynamicChildren = vnode.dynamicChildren;
        const childRoot = filterSingleRoot(rawChildren);
        if (!childRoot) {
          return [vnode, void 0];
        }
        const index = rawChildren.indexOf(childRoot);
        const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
        const setRoot = (updatedRoot) => {
          rawChildren[index] = updatedRoot;
          if (dynamicChildren) {
            if (dynamicIndex > -1) {
              dynamicChildren[dynamicIndex] = updatedRoot;
            } else if (updatedRoot.patchFlag > 0) {
              vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
          }
        };
        return [normalizeVNode(childRoot), setRoot];
      };
      function filterSingleRoot(children) {
        let singleRoot;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (isVNode(child)) {
            if (child.type !== Comment || child.children === "v-if") {
              if (singleRoot) {
                return;
              } else {
                singleRoot = child;
              }
            }
          } else {
            return;
          }
        }
        return singleRoot;
      }
      var getFunctionalFallthrough = (attrs) => {
        let res;
        for (const key in attrs) {
          if (key === "class" || key === "style" || shared.isOn(key)) {
            (res || (res = {}))[key] = attrs[key];
          }
        }
        return res;
      };
      var filterModelListeners = (attrs, props) => {
        const res = {};
        for (const key in attrs) {
          if (!shared.isModelListener(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
          }
        }
        return res;
      };
      var isElementRoot = (vnode) => {
        return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
      };
      function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
        const { props: prevProps, children: prevChildren, component } = prevVNode;
        const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
        const emits = component.emitsOptions;
        if ((prevChildren || nextChildren) && isHmrUpdating) {
          return true;
        }
        if (nextVNode.dirs || nextVNode.transition) {
          return true;
        }
        if (optimized && patchFlag >= 0) {
          if (patchFlag & 1024) {
            return true;
          }
          if (patchFlag & 16) {
            if (!prevProps) {
              return !!nextProps;
            }
            return hasPropsChanged(prevProps, nextProps, emits);
          } else if (patchFlag & 8) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
              const key = dynamicProps[i];
              if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
                return true;
              }
            }
          }
        } else {
          if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
              return true;
            }
          }
          if (prevProps === nextProps) {
            return false;
          }
          if (!prevProps) {
            return !!nextProps;
          }
          if (!nextProps) {
            return true;
          }
          return hasPropsChanged(prevProps, nextProps, emits);
        }
        return false;
      }
      function hasPropsChanged(prevProps, nextProps, emitsOptions) {
        const nextKeys = Object.keys(nextProps);
        if (nextKeys.length !== Object.keys(prevProps).length) {
          return true;
        }
        for (let i = 0; i < nextKeys.length; i++) {
          const key = nextKeys[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
            return true;
          }
        }
        return false;
      }
      function updateHOCHostEl({ vnode, parent }, el) {
        while (parent && parent.subTree === vnode) {
          (vnode = parent.vnode).el = el;
          parent = parent.parent;
        }
      }
      var COMPONENTS = "components";
      var DIRECTIVES = "directives";
      function resolveComponent(name, maybeSelfReference) {
        return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
      }
      var NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
      function resolveDynamicComponent(component) {
        if (shared.isString(component)) {
          return resolveAsset(COMPONENTS, component, false) || component;
        } else {
          return component || NULL_DYNAMIC_COMPONENT;
        }
      }
      function resolveDirective(name) {
        return resolveAsset(DIRECTIVES, name);
      }
      function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
        const instance = currentRenderingInstance || currentInstance;
        if (instance) {
          const Component = instance.type;
          if (type === COMPONENTS) {
            const selfName = getComponentName(
              Component,
              false
            );
            if (selfName && (selfName === name || selfName === shared.camelize(name) || selfName === shared.capitalize(shared.camelize(name)))) {
              return Component;
            }
          }
          const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
          if (!res && maybeSelfReference) {
            return Component;
          }
          if (warnMissing && !res) {
            const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
            warn2(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
          }
          return res;
        } else {
          warn2(
            `resolve${shared.capitalize(type.slice(0, -1))} can only be used in render() or setup().`
          );
        }
      }
      function resolve(registry, name) {
        return registry && (registry[name] || registry[shared.camelize(name)] || registry[shared.capitalize(shared.camelize(name))]);
      }
      var isSuspense = (type) => type.__isSuspense;
      var SuspenseImpl = {
        name: "Suspense",
        __isSuspense: true,
        process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
          if (n1 == null) {
            mountSuspense(
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized,
              rendererInternals
            );
          } else {
            patchSuspense(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              isSVG,
              slotScopeIds,
              optimized,
              rendererInternals
            );
          }
        },
        hydrate: hydrateSuspense,
        create: createSuspenseBoundary,
        normalize: normalizeSuspenseChildren
      };
      var Suspense = SuspenseImpl;
      function triggerEvent(vnode, name) {
        const eventListener = vnode.props && vnode.props[name];
        if (shared.isFunction(eventListener)) {
          eventListener();
        }
      }
      function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
        const {
          p: patch,
          o: { createElement }
        } = rendererInternals;
        const hiddenContainer = createElement("div");
        const suspense = vnode.suspense = createSuspenseBoundary(
          vnode,
          parentSuspense,
          parentComponent,
          container,
          hiddenContainer,
          anchor,
          isSVG,
          slotScopeIds,
          optimized,
          rendererInternals
        );
        patch(
          null,
          suspense.pendingBranch = vnode.ssContent,
          hiddenContainer,
          null,
          parentComponent,
          suspense,
          isSVG,
          slotScopeIds
        );
        if (suspense.deps > 0) {
          triggerEvent(vnode, "onPending");
          triggerEvent(vnode, "onFallback");
          patch(
            null,
            vnode.ssFallback,
            container,
            anchor,
            parentComponent,
            null,
            isSVG,
            slotScopeIds
          );
          setActiveBranch(suspense, vnode.ssFallback);
        } else {
          suspense.resolve(false, true);
        }
      }
      function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
        const suspense = n2.suspense = n1.suspense;
        suspense.vnode = n2;
        n2.el = n1.el;
        const newBranch = n2.ssContent;
        const newFallback = n2.ssFallback;
        const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
        if (pendingBranch) {
          suspense.pendingBranch = newBranch;
          if (isSameVNodeType(newBranch, pendingBranch)) {
            patch(
              pendingBranch,
              newBranch,
              suspense.hiddenContainer,
              null,
              parentComponent,
              suspense,
              isSVG,
              slotScopeIds,
              optimized
            );
            if (suspense.deps <= 0) {
              suspense.resolve();
            } else if (isInFallback) {
              patch(
                activeBranch,
                newFallback,
                container,
                anchor,
                parentComponent,
                null,
                isSVG,
                slotScopeIds,
                optimized
              );
              setActiveBranch(suspense, newFallback);
            }
          } else {
            suspense.pendingId++;
            if (isHydrating) {
              suspense.isHydrating = false;
              suspense.activeBranch = pendingBranch;
            } else {
              unmount(pendingBranch, parentComponent, suspense);
            }
            suspense.deps = 0;
            suspense.effects.length = 0;
            suspense.hiddenContainer = createElement("div");
            if (isInFallback) {
              patch(
                null,
                newBranch,
                suspense.hiddenContainer,
                null,
                parentComponent,
                suspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              if (suspense.deps <= 0) {
                suspense.resolve();
              } else {
                patch(
                  activeBranch,
                  newFallback,
                  container,
                  anchor,
                  parentComponent,
                  null,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
                setActiveBranch(suspense, newFallback);
              }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
              patch(
                activeBranch,
                newBranch,
                container,
                anchor,
                parentComponent,
                suspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              suspense.resolve(true);
            } else {
              patch(
                null,
                newBranch,
                suspense.hiddenContainer,
                null,
                parentComponent,
                suspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              if (suspense.deps <= 0) {
                suspense.resolve();
              }
            }
          }
        } else {
          if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            patch(
              activeBranch,
              newBranch,
              container,
              anchor,
              parentComponent,
              suspense,
              isSVG,
              slotScopeIds,
              optimized
            );
            setActiveBranch(suspense, newBranch);
          } else {
            triggerEvent(n2, "onPending");
            suspense.pendingBranch = newBranch;
            suspense.pendingId++;
            patch(
              null,
              newBranch,
              suspense.hiddenContainer,
              null,
              parentComponent,
              suspense,
              isSVG,
              slotScopeIds,
              optimized
            );
            if (suspense.deps <= 0) {
              suspense.resolve();
            } else {
              const { timeout, pendingId } = suspense;
              if (timeout > 0) {
                setTimeout(() => {
                  if (suspense.pendingId === pendingId) {
                    suspense.fallback(newFallback);
                  }
                }, timeout);
              } else if (timeout === 0) {
                suspense.fallback(newFallback);
              }
            }
          }
        }
      }
      var hasWarned = false;
      function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
        if (!hasWarned) {
          hasWarned = true;
          console[console.info ? "info" : "log"](
            `<Suspense> is an experimental feature and its API will likely change.`
          );
        }
        const {
          p: patch,
          m: move,
          um: unmount,
          n: next,
          o: { parentNode, remove }
        } = rendererInternals;
        let parentSuspenseId;
        const isSuspensible = isVNodeSuspensible(vnode);
        if (isSuspensible) {
          if (parentSuspense == null ? void 0 : parentSuspense.pendingBranch) {
            parentSuspenseId = parentSuspense.pendingId;
            parentSuspense.deps++;
          }
        }
        const timeout = vnode.props ? shared.toNumber(vnode.props.timeout) : void 0;
        {
          assertNumber(timeout, `Suspense timeout`);
        }
        const suspense = {
          vnode,
          parent: parentSuspense,
          parentComponent,
          isSVG,
          container,
          hiddenContainer,
          anchor,
          deps: 0,
          pendingId: 0,
          timeout: typeof timeout === "number" ? timeout : -1,
          activeBranch: null,
          pendingBranch: null,
          isInFallback: true,
          isHydrating,
          isUnmounted: false,
          effects: [],
          resolve(resume = false, sync = false) {
            {
              if (!resume && !suspense.pendingBranch) {
                throw new Error(
                  `suspense.resolve() is called without a pending branch.`
                );
              }
              if (suspense.isUnmounted) {
                throw new Error(
                  `suspense.resolve() is called on an already unmounted suspense boundary.`
                );
              }
            }
            const {
              vnode: vnode2,
              activeBranch,
              pendingBranch,
              pendingId,
              effects,
              parentComponent: parentComponent2,
              container: container2
            } = suspense;
            let delayEnter = false;
            if (suspense.isHydrating) {
              suspense.isHydrating = false;
            } else if (!resume) {
              delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
              if (delayEnter) {
                activeBranch.transition.afterLeave = () => {
                  if (pendingId === suspense.pendingId) {
                    move(pendingBranch, container2, anchor2, 0);
                    queuePostFlushCb(effects);
                  }
                };
              }
              let { anchor: anchor2 } = suspense;
              if (activeBranch) {
                anchor2 = next(activeBranch);
                unmount(activeBranch, parentComponent2, suspense, true);
              }
              if (!delayEnter) {
                move(pendingBranch, container2, anchor2, 0);
              }
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while (parent) {
              if (parent.pendingBranch) {
                parent.effects.push(...effects);
                hasUnresolvedAncestor = true;
                break;
              }
              parent = parent.parent;
            }
            if (!hasUnresolvedAncestor && !delayEnter) {
              queuePostFlushCb(effects);
            }
            suspense.effects = [];
            if (isSuspensible) {
              if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
                parentSuspense.deps--;
                if (parentSuspense.deps === 0 && !sync) {
                  parentSuspense.resolve();
                }
              }
            }
            triggerEvent(vnode2, "onResolve");
          },
          fallback(fallbackVNode) {
            if (!suspense.pendingBranch) {
              return;
            }
            const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, isSVG: isSVG2 } = suspense;
            triggerEvent(vnode2, "onFallback");
            const anchor2 = next(activeBranch);
            const mountFallback = () => {
              if (!suspense.isInFallback) {
                return;
              }
              patch(
                null,
                fallbackVNode,
                container2,
                anchor2,
                parentComponent2,
                null,
                isSVG2,
                slotScopeIds,
                optimized
              );
              setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
            if (delayEnter) {
              activeBranch.transition.afterLeave = mountFallback;
            }
            suspense.isInFallback = true;
            unmount(
              activeBranch,
              parentComponent2,
              null,
              true
            );
            if (!delayEnter) {
              mountFallback();
            }
          },
          move(container2, anchor2, type) {
            suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
            suspense.container = container2;
          },
          next() {
            return suspense.activeBranch && next(suspense.activeBranch);
          },
          registerDep(instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) {
              suspense.deps++;
            }
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err) => {
              handleError(err, instance, 0);
            }).then((asyncSetupResult) => {
              if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
                return;
              }
              instance.asyncResolved = true;
              const { vnode: vnode2 } = instance;
              {
                pushWarningContext(vnode2);
              }
              handleSetupResult(instance, asyncSetupResult, false);
              if (hydratedEl) {
                vnode2.el = hydratedEl;
              }
              const placeholder = !hydratedEl && instance.subTree.el;
              setupRenderEffect(
                instance,
                vnode2,
                parentNode(hydratedEl || instance.subTree.el),
                hydratedEl ? null : next(instance.subTree),
                suspense,
                isSVG,
                optimized
              );
              if (placeholder) {
                remove(placeholder);
              }
              updateHOCHostEl(instance, vnode2.el);
              {
                popWarningContext();
              }
              if (isInPendingSuspense && --suspense.deps === 0) {
                suspense.resolve();
              }
            });
          },
          unmount(parentSuspense2, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) {
              unmount(
                suspense.activeBranch,
                parentComponent,
                parentSuspense2,
                doRemove
              );
            }
            if (suspense.pendingBranch) {
              unmount(
                suspense.pendingBranch,
                parentComponent,
                parentSuspense2,
                doRemove
              );
            }
          }
        };
        return suspense;
      }
      function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
        const suspense = vnode.suspense = createSuspenseBoundary(
          vnode,
          parentSuspense,
          parentComponent,
          node.parentNode,
          document.createElement("div"),
          null,
          isSVG,
          slotScopeIds,
          optimized,
          rendererInternals,
          true
        );
        const result = hydrateNode(
          node,
          suspense.pendingBranch = vnode.ssContent,
          parentComponent,
          suspense,
          slotScopeIds,
          optimized
        );
        if (suspense.deps === 0) {
          suspense.resolve(false, true);
        }
        return result;
      }
      function normalizeSuspenseChildren(vnode) {
        const { shapeFlag, children } = vnode;
        const isSlotChildren = shapeFlag & 32;
        vnode.ssContent = normalizeSuspenseSlot(
          isSlotChildren ? children.default : children
        );
        vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
      }
      function normalizeSuspenseSlot(s) {
        let block;
        if (shared.isFunction(s)) {
          const trackBlock = isBlockTreeEnabled && s._c;
          if (trackBlock) {
            s._d = false;
            openBlock();
          }
          s = s();
          if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
          }
        }
        if (shared.isArray(s)) {
          const singleChild = filterSingleRoot(s);
          if (!singleChild && s.filter((child) => child !== NULL_DYNAMIC_COMPONENT).length > 0) {
            warn2(`<Suspense> slots expect a single root node.`);
          }
          s = singleChild;
        }
        s = normalizeVNode(s);
        if (block && !s.dynamicChildren) {
          s.dynamicChildren = block.filter((c) => c !== s);
        }
        return s;
      }
      function queueEffectWithSuspense(fn2, suspense) {
        if (suspense && suspense.pendingBranch) {
          if (shared.isArray(fn2)) {
            suspense.effects.push(...fn2);
          } else {
            suspense.effects.push(fn2);
          }
        } else {
          queuePostFlushCb(fn2);
        }
      }
      function setActiveBranch(suspense, branch) {
        suspense.activeBranch = branch;
        const { vnode, parentComponent } = suspense;
        const el = vnode.el = branch.el;
        if (parentComponent && parentComponent.subTree === vnode) {
          parentComponent.vnode.el = el;
          updateHOCHostEl(parentComponent, el);
        }
      }
      function isVNodeSuspensible(vnode) {
        var _a;
        return ((_a = vnode.props) == null ? void 0 : _a.suspensible) != null && vnode.props.suspensible !== false;
      }
      function watchEffect(effect4, options) {
        return doWatch(effect4, null, options);
      }
      function watchPostEffect(effect4, options) {
        return doWatch(
          effect4,
          null,
          shared.extend({}, options, { flush: "post" })
        );
      }
      function watchSyncEffect(effect4, options) {
        return doWatch(
          effect4,
          null,
          shared.extend({}, options, { flush: "sync" })
        );
      }
      var INITIAL_WATCHER_VALUE = {};
      function watch4(source, cb, options) {
        if (!shared.isFunction(cb)) {
          warn2(
            `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
          );
        }
        return doWatch(source, cb, options);
      }
      function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = shared.EMPTY_OBJ) {
        var _a;
        if (!cb) {
          if (immediate !== void 0) {
            warn2(
              `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
            );
          }
          if (deep !== void 0) {
            warn2(
              `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
            );
          }
        }
        const warnInvalidSource = (s) => {
          warn2(
            `Invalid watch source: `,
            s,
            `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
          );
        };
        const instance = reactivity.getCurrentScope() === ((_a = currentInstance) == null ? void 0 : _a.scope) ? currentInstance : null;
        let getter;
        let forceTrigger = false;
        let isMultiSource = false;
        if (reactivity.isRef(source)) {
          getter = () => source.value;
          forceTrigger = reactivity.isShallow(source);
        } else if (reactivity.isReactive(source)) {
          getter = () => source;
          deep = true;
        } else if (shared.isArray(source)) {
          isMultiSource = true;
          forceTrigger = source.some((s) => reactivity.isReactive(s) || reactivity.isShallow(s));
          getter = () => source.map((s) => {
            if (reactivity.isRef(s)) {
              return s.value;
            } else if (reactivity.isReactive(s)) {
              return traverse(s);
            } else if (shared.isFunction(s)) {
              return callWithErrorHandling(s, instance, 2);
            } else {
              warnInvalidSource(s);
            }
          });
        } else if (shared.isFunction(source)) {
          if (cb) {
            getter = () => callWithErrorHandling(source, instance, 2);
          } else {
            getter = () => {
              if (instance && instance.isUnmounted) {
                return;
              }
              if (cleanup) {
                cleanup();
              }
              return callWithAsyncErrorHandling(
                source,
                instance,
                3,
                [onCleanup]
              );
            };
          }
        } else {
          getter = shared.NOOP;
          warnInvalidSource(source);
        }
        if (cb && deep) {
          const baseGetter = getter;
          getter = () => traverse(baseGetter());
        }
        let cleanup;
        let onCleanup = (fn2) => {
          cleanup = effect4.onStop = () => {
            callWithErrorHandling(fn2, instance, 4);
            cleanup = effect4.onStop = void 0;
          };
        };
        let ssrCleanup;
        if (isInSSRComponentSetup) {
          onCleanup = shared.NOOP;
          if (!cb) {
            getter();
          } else if (immediate) {
            callWithAsyncErrorHandling(cb, instance, 3, [
              getter(),
              isMultiSource ? [] : void 0,
              onCleanup
            ]);
          }
          if (flush === "sync") {
            const ctx = useSSRContext();
            ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
          } else {
            return shared.NOOP;
          }
        }
        let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
        const job = () => {
          if (!effect4.active) {
            return;
          }
          if (cb) {
            const newValue = effect4.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => shared.hasChanged(v, oldValue[i])) : shared.hasChanged(newValue, oldValue)) || false) {
              if (cleanup) {
                cleanup();
              }
              callWithAsyncErrorHandling(cb, instance, 3, [
                newValue,
                oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                onCleanup
              ]);
              oldValue = newValue;
            }
          } else {
            effect4.run();
          }
        };
        job.allowRecurse = !!cb;
        let scheduler;
        if (flush === "sync") {
          scheduler = job;
        } else if (flush === "post") {
          scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
        } else {
          job.pre = true;
          if (instance)
            job.id = instance.uid;
          scheduler = () => queueJob(job);
        }
        const effect4 = new reactivity.ReactiveEffect(getter, scheduler);
        {
          effect4.onTrack = onTrack;
          effect4.onTrigger = onTrigger;
        }
        if (cb) {
          if (immediate) {
            job();
          } else {
            oldValue = effect4.run();
          }
        } else if (flush === "post") {
          queuePostRenderEffect(
            effect4.run.bind(effect4),
            instance && instance.suspense
          );
        } else {
          effect4.run();
        }
        const unwatch = () => {
          effect4.stop();
          if (instance && instance.scope) {
            shared.remove(instance.scope.effects, effect4);
          }
        };
        if (ssrCleanup)
          ssrCleanup.push(unwatch);
        return unwatch;
      }
      function instanceWatch(source, value, options) {
        const publicThis = this.proxy;
        const getter = shared.isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
        let cb;
        if (shared.isFunction(value)) {
          cb = value;
        } else {
          cb = value.handler;
          options = value;
        }
        const cur = currentInstance;
        setCurrentInstance(this);
        const res = doWatch(getter, cb.bind(publicThis), options);
        if (cur) {
          setCurrentInstance(cur);
        } else {
          unsetCurrentInstance();
        }
        return res;
      }
      function createPathGetter(ctx, path) {
        const segments = path.split(".");
        return () => {
          let cur = ctx;
          for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
          }
          return cur;
        };
      }
      function traverse(value, seen) {
        if (!shared.isObject(value) || value["__v_skip"]) {
          return value;
        }
        seen = seen || /* @__PURE__ */ new Set();
        if (seen.has(value)) {
          return value;
        }
        seen.add(value);
        if (reactivity.isRef(value)) {
          traverse(value.value, seen);
        } else if (shared.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
          }
        } else if (shared.isSet(value) || shared.isMap(value)) {
          value.forEach((v) => {
            traverse(v, seen);
          });
        } else if (shared.isPlainObject(value)) {
          for (const key in value) {
            traverse(value[key], seen);
          }
        }
        return value;
      }
      function validateDirectiveName(name) {
        if (shared.isBuiltInDirective(name)) {
          warn2("Do not use built-in directive ids as custom directive id: " + name);
        }
      }
      function withDirectives(vnode, directives) {
        const internalInstance = currentRenderingInstance;
        if (internalInstance === null) {
          warn2(`withDirectives can only be used inside render functions.`);
          return vnode;
        }
        const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
        const bindings = vnode.dirs || (vnode.dirs = []);
        for (let i = 0; i < directives.length; i++) {
          let [dir, value, arg, modifiers = shared.EMPTY_OBJ] = directives[i];
          if (dir) {
            if (shared.isFunction(dir)) {
              dir = {
                mounted: dir,
                updated: dir
              };
            }
            if (dir.deep) {
              traverse(value);
            }
            bindings.push({
              dir,
              instance,
              value,
              oldValue: void 0,
              arg,
              modifiers
            });
          }
        }
        return vnode;
      }
      function invokeDirectiveHook(vnode, prevVNode, instance, name) {
        const bindings = vnode.dirs;
        const oldBindings = prevVNode && prevVNode.dirs;
        for (let i = 0; i < bindings.length; i++) {
          const binding = bindings[i];
          if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
          }
          let hook = binding.dir[name];
          if (hook) {
            reactivity.pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8, [
              vnode.el,
              binding,
              vnode,
              prevVNode
            ]);
            reactivity.resetTracking();
          }
        }
      }
      var leaveCbKey = Symbol("_leaveCb");
      var enterCbKey = Symbol("_enterCb");
      function useTransitionState() {
        const state = {
          isMounted: false,
          isLeaving: false,
          isUnmounting: false,
          leavingVNodes: /* @__PURE__ */ new Map()
        };
        onMounted4(() => {
          state.isMounted = true;
        });
        onBeforeUnmount(() => {
          state.isUnmounting = true;
        });
        return state;
      }
      var TransitionHookValidator = [Function, Array];
      var BaseTransitionPropsValidators = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
      };
      var BaseTransitionImpl = {
        name: `BaseTransition`,
        props: BaseTransitionPropsValidators,
        setup(props, { slots }) {
          const instance = getCurrentInstance();
          const state = useTransitionState();
          let prevTransitionKey;
          return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
              return;
            }
            let child = children[0];
            if (children.length > 1) {
              let hasFound = false;
              for (const c of children) {
                if (c.type !== Comment) {
                  if (hasFound) {
                    warn2(
                      "<transition> can only be used on a single element or component. Use <transition-group> for lists."
                    );
                    break;
                  }
                  child = c;
                  hasFound = true;
                }
              }
            }
            const rawProps = reactivity.toRaw(props);
            const { mode } = rawProps;
            if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
              warn2(`invalid <transition> mode: ${mode}`);
            }
            if (state.isLeaving) {
              return emptyPlaceholder(child);
            }
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
              return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(
              innerChild,
              rawProps,
              state,
              instance
            );
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
              const key = getTransitionKey();
              if (prevTransitionKey === void 0) {
                prevTransitionKey = key;
              } else if (key !== prevTransitionKey) {
                prevTransitionKey = key;
                transitionKeyChanged = true;
              }
            }
            if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
              const leavingHooks = resolveTransitionHooks(
                oldInnerChild,
                rawProps,
                state,
                instance
              );
              setTransitionHooks(oldInnerChild, leavingHooks);
              if (mode === "out-in") {
                state.isLeaving = true;
                leavingHooks.afterLeave = () => {
                  state.isLeaving = false;
                  if (instance.update.active !== false) {
                    instance.update();
                  }
                };
                return emptyPlaceholder(child);
              } else if (mode === "in-out" && innerChild.type !== Comment) {
                leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                  const leavingVNodesCache = getLeavingNodesForType(
                    state,
                    oldInnerChild
                  );
                  leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                  el[leaveCbKey] = () => {
                    earlyRemove();
                    el[leaveCbKey] = void 0;
                    delete enterHooks.delayedLeave;
                  };
                  enterHooks.delayedLeave = delayedLeave;
                };
              }
            }
            return child;
          };
        }
      };
      var BaseTransition = BaseTransitionImpl;
      function getLeavingNodesForType(state, vnode) {
        const { leavingVNodes } = state;
        let leavingVNodesCache = leavingVNodes.get(vnode.type);
        if (!leavingVNodesCache) {
          leavingVNodesCache = /* @__PURE__ */ Object.create(null);
          leavingVNodes.set(vnode.type, leavingVNodesCache);
        }
        return leavingVNodesCache;
      }
      function resolveTransitionHooks(vnode, props, state, instance) {
        const {
          appear,
          mode,
          persisted = false,
          onBeforeEnter,
          onEnter,
          onAfterEnter,
          onEnterCancelled,
          onBeforeLeave,
          onLeave,
          onAfterLeave,
          onLeaveCancelled,
          onBeforeAppear,
          onAppear,
          onAfterAppear,
          onAppearCancelled
        } = props;
        const key = String(vnode.key);
        const leavingVNodesCache = getLeavingNodesForType(state, vnode);
        const callHook2 = (hook, args) => {
          hook && callWithAsyncErrorHandling(
            hook,
            instance,
            9,
            args
          );
        };
        const callAsyncHook = (hook, args) => {
          const done = args[1];
          callHook2(hook, args);
          if (shared.isArray(hook)) {
            if (hook.every((hook2) => hook2.length <= 1))
              done();
          } else if (hook.length <= 1) {
            done();
          }
        };
        const hooks = {
          mode,
          persisted,
          beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
              if (appear) {
                hook = onBeforeAppear || onBeforeEnter;
              } else {
                return;
              }
            }
            if (el[leaveCbKey]) {
              el[leaveCbKey](
                true
              );
            }
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
              leavingVNode.el[leaveCbKey]();
            }
            callHook2(hook, [el]);
          },
          enter(el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
              if (appear) {
                hook = onAppear || onEnter;
                afterHook = onAfterAppear || onAfterEnter;
                cancelHook = onAppearCancelled || onEnterCancelled;
              } else {
                return;
              }
            }
            let called = false;
            const done = el[enterCbKey] = (cancelled) => {
              if (called)
                return;
              called = true;
              if (cancelled) {
                callHook2(cancelHook, [el]);
              } else {
                callHook2(afterHook, [el]);
              }
              if (hooks.delayedLeave) {
                hooks.delayedLeave();
              }
              el[enterCbKey] = void 0;
            };
            if (hook) {
              callAsyncHook(hook, [el, done]);
            } else {
              done();
            }
          },
          leave(el, remove) {
            const key2 = String(vnode.key);
            if (el[enterCbKey]) {
              el[enterCbKey](
                true
              );
            }
            if (state.isUnmounting) {
              return remove();
            }
            callHook2(onBeforeLeave, [el]);
            let called = false;
            const done = el[leaveCbKey] = (cancelled) => {
              if (called)
                return;
              called = true;
              remove();
              if (cancelled) {
                callHook2(onLeaveCancelled, [el]);
              } else {
                callHook2(onAfterLeave, [el]);
              }
              el[leaveCbKey] = void 0;
              if (leavingVNodesCache[key2] === vnode) {
                delete leavingVNodesCache[key2];
              }
            };
            leavingVNodesCache[key2] = vnode;
            if (onLeave) {
              callAsyncHook(onLeave, [el, done]);
            } else {
              done();
            }
          },
          clone(vnode2) {
            return resolveTransitionHooks(vnode2, props, state, instance);
          }
        };
        return hooks;
      }
      function emptyPlaceholder(vnode) {
        if (isKeepAlive(vnode)) {
          vnode = cloneVNode(vnode);
          vnode.children = null;
          return vnode;
        }
      }
      function getKeepAliveChild(vnode) {
        return isKeepAlive(vnode) ? vnode.component ? vnode.component.subTree : vnode.children ? vnode.children[0] : void 0 : vnode;
      }
      function setTransitionHooks(vnode, hooks) {
        if (vnode.shapeFlag & 6 && vnode.component) {
          setTransitionHooks(vnode.component.subTree, hooks);
        } else if (vnode.shapeFlag & 128) {
          vnode.ssContent.transition = hooks.clone(vnode.ssContent);
          vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
        } else {
          vnode.transition = hooks;
        }
      }
      function getTransitionRawChildren(children, keepComment = false, parentKey) {
        let ret = [];
        let keyedFragmentCount = 0;
        for (let i = 0; i < children.length; i++) {
          let child = children[i];
          const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
          if (child.type === Fragment) {
            if (child.patchFlag & 128)
              keyedFragmentCount++;
            ret = ret.concat(
              getTransitionRawChildren(child.children, keepComment, key)
            );
          } else if (keepComment || child.type !== Comment) {
            ret.push(key != null ? cloneVNode(child, { key }) : child);
          }
        }
        if (keyedFragmentCount > 1) {
          for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2;
          }
        }
        return ret;
      }
      function defineComponent(options, extraOptions) {
        return shared.isFunction(options) ? /* @__PURE__ */ (() => shared.extend({ name: options.name }, extraOptions, { setup: options }))() : options;
      }
      var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
      function defineAsyncComponent(source) {
        if (shared.isFunction(source)) {
          source = { loader: source };
        }
        const {
          loader,
          loadingComponent,
          errorComponent,
          delay = 200,
          timeout,
          suspensible = true,
          onError: userOnError
        } = source;
        let pendingRequest = null;
        let resolvedComp;
        let retries = 0;
        const retry = () => {
          retries++;
          pendingRequest = null;
          return load();
        };
        const load = () => {
          let thisRequest;
          return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) {
              return new Promise((resolve2, reject) => {
                const userRetry = () => resolve2(retry());
                const userFail = () => reject(err);
                userOnError(err, userRetry, userFail, retries + 1);
              });
            } else {
              throw err;
            }
          }).then((comp) => {
            if (thisRequest !== pendingRequest && pendingRequest) {
              return pendingRequest;
            }
            if (!comp) {
              warn2(
                `Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`
              );
            }
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
              comp = comp.default;
            }
            if (comp && !shared.isObject(comp) && !shared.isFunction(comp)) {
              throw new Error(`Invalid async component load result: ${comp}`);
            }
            resolvedComp = comp;
            return comp;
          }));
        };
        return defineComponent({
          name: "AsyncComponentWrapper",
          __asyncLoader: load,
          get __asyncResolved() {
            return resolvedComp;
          },
          setup() {
            const instance = currentInstance;
            if (resolvedComp) {
              return () => createInnerComp(resolvedComp, instance);
            }
            const onError = (err) => {
              pendingRequest = null;
              handleError(
                err,
                instance,
                13,
                !errorComponent
              );
            };
            if (suspensible && instance.suspense || isInSSRComponentSetup) {
              return load().then((comp) => {
                return () => createInnerComp(comp, instance);
              }).catch((err) => {
                onError(err);
                return () => errorComponent ? createVNode(errorComponent, {
                  error: err
                }) : null;
              });
            }
            const loaded = reactivity.ref(false);
            const error = reactivity.ref();
            const delayed = reactivity.ref(!!delay);
            if (delay) {
              setTimeout(() => {
                delayed.value = false;
              }, delay);
            }
            if (timeout != null) {
              setTimeout(() => {
                if (!loaded.value && !error.value) {
                  const err = new Error(
                    `Async component timed out after ${timeout}ms.`
                  );
                  onError(err);
                  error.value = err;
                }
              }, timeout);
            }
            load().then(() => {
              loaded.value = true;
              if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                queueJob(instance.parent.update);
              }
            }).catch((err) => {
              onError(err);
              error.value = err;
            });
            return () => {
              if (loaded.value && resolvedComp) {
                return createInnerComp(resolvedComp, instance);
              } else if (error.value && errorComponent) {
                return createVNode(errorComponent, {
                  error: error.value
                });
              } else if (loadingComponent && !delayed.value) {
                return createVNode(loadingComponent);
              }
            };
          }
        });
      }
      function createInnerComp(comp, parent) {
        const { ref: ref22, props, children, ce } = parent.vnode;
        const vnode = createVNode(comp, props, children);
        vnode.ref = ref22;
        vnode.ce = ce;
        delete parent.vnode.ce;
        return vnode;
      }
      var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
      var KeepAliveImpl = {
        name: `KeepAlive`,
        __isKeepAlive: true,
        props: {
          include: [String, RegExp, Array],
          exclude: [String, RegExp, Array],
          max: [String, Number]
        },
        setup(props, { slots }) {
          const instance = getCurrentInstance();
          const sharedContext = instance.ctx;
          if (!sharedContext.renderer) {
            return () => {
              const children = slots.default && slots.default();
              return children && children.length === 1 ? children[0] : children;
            };
          }
          const cache = /* @__PURE__ */ new Map();
          const keys = /* @__PURE__ */ new Set();
          let current = null;
          {
            instance.__v_cache = cache;
          }
          const parentSuspense = instance.suspense;
          const {
            renderer: {
              p: patch,
              m: move,
              um: _unmount,
              o: { createElement }
            }
          } = sharedContext;
          const storageContainer = createElement("div");
          sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance2 = vnode.component;
            move(vnode, container, anchor, 0, parentSuspense);
            patch(
              instance2.vnode,
              vnode,
              container,
              anchor,
              instance2,
              parentSuspense,
              isSVG,
              vnode.slotScopeIds,
              optimized
            );
            queuePostRenderEffect(() => {
              instance2.isDeactivated = false;
              if (instance2.a) {
                shared.invokeArrayFns(instance2.a);
              }
              const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
              if (vnodeHook) {
                invokeVNodeHook(vnodeHook, instance2.parent, vnode);
              }
            }, parentSuspense);
            {
              devtoolsComponentAdded(instance2);
            }
          };
          sharedContext.deactivate = (vnode) => {
            const instance2 = vnode.component;
            move(vnode, storageContainer, null, 1, parentSuspense);
            queuePostRenderEffect(() => {
              if (instance2.da) {
                shared.invokeArrayFns(instance2.da);
              }
              const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
              if (vnodeHook) {
                invokeVNodeHook(vnodeHook, instance2.parent, vnode);
              }
              instance2.isDeactivated = true;
            }, parentSuspense);
            {
              devtoolsComponentAdded(instance2);
            }
          };
          function unmount(vnode) {
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
          }
          function pruneCache(filter) {
            cache.forEach((vnode, key) => {
              const name = getComponentName(vnode.type);
              if (name && (!filter || !filter(name))) {
                pruneCacheEntry(key);
              }
            });
          }
          function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || !isSameVNodeType(cached, current)) {
              unmount(cached);
            } else if (current) {
              resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
          }
          watch4(
            () => [props.include, props.exclude],
            ([include, exclude]) => {
              include && pruneCache((name) => matches(include, name));
              exclude && pruneCache((name) => !matches(exclude, name));
            },
            { flush: "post", deep: true }
          );
          let pendingCacheKey = null;
          const cacheSubtree = () => {
            if (pendingCacheKey != null) {
              cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
          };
          onMounted4(cacheSubtree);
          onUpdated(cacheSubtree);
          onBeforeUnmount(() => {
            cache.forEach((cached) => {
              const { subTree, suspense } = instance;
              const vnode = getInnerChild(subTree);
              if (cached.type === vnode.type && cached.key === vnode.key) {
                resetShapeFlag(vnode);
                const da = vnode.component.da;
                da && queuePostRenderEffect(da, suspense);
                return;
              }
              unmount(cached);
            });
          });
          return () => {
            pendingCacheKey = null;
            if (!slots.default) {
              return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
              {
                warn2(`KeepAlive should contain exactly one component child.`);
              }
              current = null;
              return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
              current = null;
              return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getComponentName(
              isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
            );
            const { include, exclude, max: max2 } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
              current = vnode;
              return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            if (vnode.el) {
              vnode = cloneVNode(vnode);
              if (rawVNode.shapeFlag & 128) {
                rawVNode.ssContent = vnode;
              }
            }
            pendingCacheKey = key;
            if (cachedVNode) {
              vnode.el = cachedVNode.el;
              vnode.component = cachedVNode.component;
              if (vnode.transition) {
                setTransitionHooks(vnode, vnode.transition);
              }
              vnode.shapeFlag |= 512;
              keys.delete(key);
              keys.add(key);
            } else {
              keys.add(key);
              if (max2 && keys.size > parseInt(max2, 10)) {
                pruneCacheEntry(keys.values().next().value);
              }
            }
            vnode.shapeFlag |= 256;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
          };
        }
      };
      var KeepAlive = KeepAliveImpl;
      function matches(pattern, name) {
        if (shared.isArray(pattern)) {
          return pattern.some((p) => matches(p, name));
        } else if (shared.isString(pattern)) {
          return pattern.split(",").includes(name);
        } else if (shared.isRegExp(pattern)) {
          return pattern.test(name);
        }
        return false;
      }
      function onActivated(hook, target) {
        registerKeepAliveHook(hook, "a", target);
      }
      function onDeactivated(hook, target) {
        registerKeepAliveHook(hook, "da", target);
      }
      function registerKeepAliveHook(hook, type, target = currentInstance) {
        const wrappedHook = hook.__wdc || (hook.__wdc = () => {
          let current = target;
          while (current) {
            if (current.isDeactivated) {
              return;
            }
            current = current.parent;
          }
          return hook();
        });
        injectHook(type, wrappedHook, target);
        if (target) {
          let current = target.parent;
          while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
              injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
          }
        }
      }
      function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
        const injected = injectHook(
          type,
          hook,
          keepAliveRoot,
          true
        );
        onUnmounted(() => {
          shared.remove(keepAliveRoot[type], injected);
        }, target);
      }
      function resetShapeFlag(vnode) {
        vnode.shapeFlag &= ~256;
        vnode.shapeFlag &= ~512;
      }
      function getInnerChild(vnode) {
        return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
      }
      function injectHook(type, hook, target = currentInstance, prepend = false) {
        if (target) {
          const hooks = target[type] || (target[type] = []);
          const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
            if (target.isUnmounted) {
              return;
            }
            reactivity.pauseTracking();
            setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            unsetCurrentInstance();
            reactivity.resetTracking();
            return res;
          });
          if (prepend) {
            hooks.unshift(wrappedHook);
          } else {
            hooks.push(wrappedHook);
          }
          return wrappedHook;
        } else {
          const apiName = shared.toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
          warn2(
            `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
          );
        }
      }
      var createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target);
      var onBeforeMount = createHook("bm");
      var onMounted4 = createHook("m");
      var onBeforeUpdate = createHook("bu");
      var onUpdated = createHook("u");
      var onBeforeUnmount = createHook("bum");
      var onUnmounted = createHook("um");
      var onServerPrefetch = createHook("sp");
      var onRenderTriggered = createHook(
        "rtg"
      );
      var onRenderTracked = createHook(
        "rtc"
      );
      function onErrorCaptured(hook, target = currentInstance) {
        injectHook("ec", hook, target);
      }
      function renderList(source, renderItem, cache, index) {
        let ret;
        const cached = cache && cache[index];
        if (shared.isArray(source) || shared.isString(source)) {
          ret = new Array(source.length);
          for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
          }
        } else if (typeof source === "number") {
          if (!Number.isInteger(source)) {
            warn2(`The v-for range expect an integer value but got ${source}.`);
          }
          ret = new Array(source);
          for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
          }
        } else if (shared.isObject(source)) {
          if (source[Symbol.iterator]) {
            ret = Array.from(
              source,
              (item, i) => renderItem(item, i, void 0, cached && cached[i])
            );
          } else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
              const key = keys[i];
              ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
          }
        } else {
          ret = [];
        }
        if (cache) {
          cache[index] = ret;
        }
        return ret;
      }
      function createSlots(slots, dynamicSlots) {
        for (let i = 0; i < dynamicSlots.length; i++) {
          const slot = dynamicSlots[i];
          if (shared.isArray(slot)) {
            for (let j = 0; j < slot.length; j++) {
              slots[slot[j].name] = slot[j].fn;
            }
          } else if (slot) {
            slots[slot.name] = slot.key ? (...args) => {
              const res = slot.fn(...args);
              if (res)
                res.key = slot.key;
              return res;
            } : slot.fn;
          }
        }
        return slots;
      }
      function renderSlot(slots, name, props = {}, fallback, noSlotted) {
        if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
          if (name !== "default")
            props.name = name;
          return createVNode("slot", props, fallback && fallback());
        }
        let slot = slots[name];
        if (slot && slot.length > 1) {
          warn2(
            `SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`
          );
          slot = () => [];
        }
        if (slot && slot._c) {
          slot._d = false;
        }
        openBlock();
        const validSlotContent = slot && ensureValidVNode(slot(props));
        const rendered = createBlock(
          Fragment,
          {
            key: props.key || validSlotContent && validSlotContent.key || `_${name}`
          },
          validSlotContent || (fallback ? fallback() : []),
          validSlotContent && slots._ === 1 ? 64 : -2
        );
        if (!noSlotted && rendered.scopeId) {
          rendered.slotScopeIds = [rendered.scopeId + "-s"];
        }
        if (slot && slot._c) {
          slot._d = true;
        }
        return rendered;
      }
      function ensureValidVNode(vnodes) {
        return vnodes.some((child) => {
          if (!isVNode(child))
            return true;
          if (child.type === Comment)
            return false;
          if (child.type === Fragment && !ensureValidVNode(child.children))
            return false;
          return true;
        }) ? vnodes : null;
      }
      function toHandlers(obj, preserveCaseIfNecessary) {
        const ret = {};
        if (!shared.isObject(obj)) {
          warn2(`v-on with no argument expects an object value.`);
          return ret;
        }
        for (const key in obj) {
          ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : shared.toHandlerKey(key)] = obj[key];
        }
        return ret;
      }
      var getPublicInstance = (i) => {
        if (!i)
          return null;
        if (isStatefulComponent(i))
          return getExposeProxy(i) || i.proxy;
        return getPublicInstance(i.parent);
      };
      var publicPropertiesMap = /* @__PURE__ */ shared.extend(/* @__PURE__ */ Object.create(null), {
        $: (i) => i,
        $el: (i) => i.vnode.el,
        $data: (i) => i.data,
        $props: (i) => reactivity.shallowReadonly(i.props),
        $attrs: (i) => reactivity.shallowReadonly(i.attrs),
        $slots: (i) => reactivity.shallowReadonly(i.slots),
        $refs: (i) => reactivity.shallowReadonly(i.refs),
        $parent: (i) => getPublicInstance(i.parent),
        $root: (i) => getPublicInstance(i.root),
        $emit: (i) => i.emit,
        $options: (i) => resolveMergedOptions(i),
        $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
        $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
        $watch: (i) => instanceWatch.bind(i)
      });
      var isReservedPrefix = (key) => key === "_" || key === "$";
      var hasSetupBinding = (state, key) => state !== shared.EMPTY_OBJ && !state.__isScriptSetup && shared.hasOwn(state, key);
      var PublicInstanceProxyHandlers = {
        get({ _: instance }, key) {
          const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
          if (key === "__isVue") {
            return true;
          }
          let normalizedProps;
          if (key[0] !== "$") {
            const n = accessCache[key];
            if (n !== void 0) {
              switch (n) {
                case 1:
                  return setupState[key];
                case 2:
                  return data[key];
                case 4:
                  return ctx[key];
                case 3:
                  return props[key];
              }
            } else if (hasSetupBinding(setupState, key)) {
              accessCache[key] = 1;
              return setupState[key];
            } else if (data !== shared.EMPTY_OBJ && shared.hasOwn(data, key)) {
              accessCache[key] = 2;
              return data[key];
            } else if ((normalizedProps = instance.propsOptions[0]) && shared.hasOwn(normalizedProps, key)) {
              accessCache[key] = 3;
              return props[key];
            } else if (ctx !== shared.EMPTY_OBJ && shared.hasOwn(ctx, key)) {
              accessCache[key] = 4;
              return ctx[key];
            } else if (shouldCacheAccess) {
              accessCache[key] = 0;
            }
          }
          const publicGetter = publicPropertiesMap[key];
          let cssModule, globalProperties;
          if (publicGetter) {
            if (key === "$attrs") {
              reactivity.track(instance, "get", key);
              markAttrsAccessed();
            } else if (key === "$slots") {
              reactivity.track(instance, "get", key);
            }
            return publicGetter(instance);
          } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
            return cssModule;
          } else if (ctx !== shared.EMPTY_OBJ && shared.hasOwn(ctx, key)) {
            accessCache[key] = 4;
            return ctx[key];
          } else if (globalProperties = appContext.config.globalProperties, shared.hasOwn(globalProperties, key)) {
            {
              return globalProperties[key];
            }
          } else if (currentRenderingInstance && (!shared.isString(key) || key.indexOf("__v") !== 0)) {
            if (data !== shared.EMPTY_OBJ && isReservedPrefix(key[0]) && shared.hasOwn(data, key)) {
              warn2(
                `Property ${JSON.stringify(
                  key
                )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
              );
            } else if (instance === currentRenderingInstance) {
              warn2(
                `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
              );
            }
          }
        },
        set({ _: instance }, key, value) {
          const { data, setupState, ctx } = instance;
          if (hasSetupBinding(setupState, key)) {
            setupState[key] = value;
            return true;
          } else if (setupState.__isScriptSetup && shared.hasOwn(setupState, key)) {
            warn2(`Cannot mutate <script setup> binding "${key}" from Options API.`);
            return false;
          } else if (data !== shared.EMPTY_OBJ && shared.hasOwn(data, key)) {
            data[key] = value;
            return true;
          } else if (shared.hasOwn(instance.props, key)) {
            warn2(`Attempting to mutate prop "${key}". Props are readonly.`);
            return false;
          }
          if (key[0] === "$" && key.slice(1) in instance) {
            warn2(
              `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
            );
            return false;
          } else {
            if (key in instance.appContext.config.globalProperties) {
              Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                value
              });
            } else {
              ctx[key] = value;
            }
          }
          return true;
        },
        has({
          _: { data, setupState, accessCache, ctx, appContext, propsOptions }
        }, key) {
          let normalizedProps;
          return !!accessCache[key] || data !== shared.EMPTY_OBJ && shared.hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && shared.hasOwn(normalizedProps, key) || shared.hasOwn(ctx, key) || shared.hasOwn(publicPropertiesMap, key) || shared.hasOwn(appContext.config.globalProperties, key);
        },
        defineProperty(target, key, descriptor) {
          if (descriptor.get != null) {
            target._.accessCache[key] = 0;
          } else if (shared.hasOwn(descriptor, "value")) {
            this.set(target, key, descriptor.value, null);
          }
          return Reflect.defineProperty(target, key, descriptor);
        }
      };
      {
        PublicInstanceProxyHandlers.ownKeys = (target) => {
          warn2(
            `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
          );
          return Reflect.ownKeys(target);
        };
      }
      var RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ shared.extend(
        {},
        PublicInstanceProxyHandlers,
        {
          get(target, key) {
            if (key === Symbol.unscopables) {
              return;
            }
            return PublicInstanceProxyHandlers.get(target, key, target);
          },
          has(_, key) {
            const has = key[0] !== "_" && !shared.isGloballyAllowed(key);
            if (!has && PublicInstanceProxyHandlers.has(_, key)) {
              warn2(
                `Property ${JSON.stringify(
                  key
                )} should not start with _ which is a reserved prefix for Vue internals.`
              );
            }
            return has;
          }
        }
      );
      function createDevRenderContext(instance) {
        const target = {};
        Object.defineProperty(target, `_`, {
          configurable: true,
          enumerable: false,
          get: () => instance
        });
        Object.keys(publicPropertiesMap).forEach((key) => {
          Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => publicPropertiesMap[key](instance),
            set: shared.NOOP
          });
        });
        return target;
      }
      function exposePropsOnRenderContext(instance) {
        const {
          ctx,
          propsOptions: [propsOptions]
        } = instance;
        if (propsOptions) {
          Object.keys(propsOptions).forEach((key) => {
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => instance.props[key],
              set: shared.NOOP
            });
          });
        }
      }
      function exposeSetupStateOnRenderContext(instance) {
        const { ctx, setupState } = instance;
        Object.keys(reactivity.toRaw(setupState)).forEach((key) => {
          if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
              warn2(
                `setup() return property ${JSON.stringify(
                  key
                )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
              );
              return;
            }
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => setupState[key],
              set: shared.NOOP
            });
          }
        });
      }
      var warnRuntimeUsage = (method) => warn2(
        `${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
      );
      function defineProps() {
        {
          warnRuntimeUsage(`defineProps`);
        }
        return null;
      }
      function defineEmits() {
        {
          warnRuntimeUsage(`defineEmits`);
        }
        return null;
      }
      function defineExpose(exposed) {
        {
          warnRuntimeUsage(`defineExpose`);
        }
      }
      function defineOptions(options) {
        {
          warnRuntimeUsage(`defineOptions`);
        }
      }
      function defineSlots() {
        {
          warnRuntimeUsage(`defineSlots`);
        }
        return null;
      }
      function defineModel() {
        {
          warnRuntimeUsage("defineModel");
        }
      }
      function withDefaults(props, defaults) {
        {
          warnRuntimeUsage(`withDefaults`);
        }
        return null;
      }
      function useSlots() {
        return getContext().slots;
      }
      function useAttrs() {
        return getContext().attrs;
      }
      function useModel(props, name, options) {
        const i = getCurrentInstance();
        if (!i) {
          warn2(`useModel() called without active instance.`);
          return reactivity.ref();
        }
        if (!i.propsOptions[0][name]) {
          warn2(`useModel() called with prop "${name}" which is not declared.`);
          return reactivity.ref();
        }
        if (options && options.local) {
          const proxy = reactivity.ref(props[name]);
          watch4(
            () => props[name],
            (v) => proxy.value = v
          );
          watch4(proxy, (value) => {
            if (value !== props[name]) {
              i.emit(`update:${name}`, value);
            }
          });
          return proxy;
        } else {
          return {
            __v_isRef: true,
            get value() {
              return props[name];
            },
            set value(value) {
              i.emit(`update:${name}`, value);
            }
          };
        }
      }
      function getContext() {
        const i = getCurrentInstance();
        if (!i) {
          warn2(`useContext() called without active instance.`);
        }
        return i.setupContext || (i.setupContext = createSetupContext(i));
      }
      function normalizePropsOrEmits(props) {
        return shared.isArray(props) ? props.reduce(
          (normalized, p) => (normalized[p] = null, normalized),
          {}
        ) : props;
      }
      function mergeDefaults(raw, defaults) {
        const props = normalizePropsOrEmits(raw);
        for (const key in defaults) {
          if (key.startsWith("__skip"))
            continue;
          let opt = props[key];
          if (opt) {
            if (shared.isArray(opt) || shared.isFunction(opt)) {
              opt = props[key] = { type: opt, default: defaults[key] };
            } else {
              opt.default = defaults[key];
            }
          } else if (opt === null) {
            opt = props[key] = { default: defaults[key] };
          } else {
            warn2(`props default key "${key}" has no corresponding declaration.`);
          }
          if (opt && defaults[`__skip_${key}`]) {
            opt.skipFactory = true;
          }
        }
        return props;
      }
      function mergeModels(a, b) {
        if (!a || !b)
          return a || b;
        if (shared.isArray(a) && shared.isArray(b))
          return a.concat(b);
        return shared.extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
      }
      function createPropsRestProxy(props, excludedKeys) {
        const ret = {};
        for (const key in props) {
          if (!excludedKeys.includes(key)) {
            Object.defineProperty(ret, key, {
              enumerable: true,
              get: () => props[key]
            });
          }
        }
        return ret;
      }
      function withAsyncContext(getAwaitable) {
        const ctx = getCurrentInstance();
        if (!ctx) {
          warn2(
            `withAsyncContext called without active current instance. This is likely a bug.`
          );
        }
        let awaitable = getAwaitable();
        unsetCurrentInstance();
        if (shared.isPromise(awaitable)) {
          awaitable = awaitable.catch((e) => {
            setCurrentInstance(ctx);
            throw e;
          });
        }
        return [awaitable, () => setCurrentInstance(ctx)];
      }
      function createDuplicateChecker() {
        const cache = /* @__PURE__ */ Object.create(null);
        return (type, key) => {
          if (cache[key]) {
            warn2(`${type} property "${key}" is already defined in ${cache[key]}.`);
          } else {
            cache[key] = type;
          }
        };
      }
      var shouldCacheAccess = true;
      function applyOptions(instance) {
        const options = resolveMergedOptions(instance);
        const publicThis = instance.proxy;
        const ctx = instance.ctx;
        shouldCacheAccess = false;
        if (options.beforeCreate) {
          callHook(options.beforeCreate, instance, "bc");
        }
        const {
          data: dataOptions,
          computed: computedOptions,
          methods,
          watch: watchOptions,
          provide: provideOptions,
          inject: injectOptions,
          created,
          beforeMount,
          mounted,
          beforeUpdate,
          updated,
          activated,
          deactivated,
          beforeDestroy,
          beforeUnmount,
          destroyed,
          unmounted,
          render: render8,
          renderTracked,
          renderTriggered,
          errorCaptured,
          serverPrefetch,
          expose,
          inheritAttrs,
          components,
          directives,
          filters
        } = options;
        const checkDuplicateProperties = createDuplicateChecker();
        {
          const [propsOptions] = instance.propsOptions;
          if (propsOptions) {
            for (const key in propsOptions) {
              checkDuplicateProperties("Props", key);
            }
          }
        }
        if (injectOptions) {
          resolveInjections(injectOptions, ctx, checkDuplicateProperties);
        }
        if (methods) {
          for (const key in methods) {
            const methodHandler = methods[key];
            if (shared.isFunction(methodHandler)) {
              {
                Object.defineProperty(ctx, key, {
                  value: methodHandler.bind(publicThis),
                  configurable: true,
                  enumerable: true,
                  writable: true
                });
              }
              {
                checkDuplicateProperties("Methods", key);
              }
            } else {
              warn2(
                `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
              );
            }
          }
        }
        if (dataOptions) {
          if (!shared.isFunction(dataOptions)) {
            warn2(
              `The data option must be a function. Plain object usage is no longer supported.`
            );
          }
          const data = dataOptions.call(publicThis, publicThis);
          if (shared.isPromise(data)) {
            warn2(
              `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
            );
          }
          if (!shared.isObject(data)) {
            warn2(`data() should return an object.`);
          } else {
            instance.data = reactivity.reactive(data);
            {
              for (const key in data) {
                checkDuplicateProperties("Data", key);
                if (!isReservedPrefix(key[0])) {
                  Object.defineProperty(ctx, key, {
                    configurable: true,
                    enumerable: true,
                    get: () => data[key],
                    set: shared.NOOP
                  });
                }
              }
            }
          }
        }
        shouldCacheAccess = true;
        if (computedOptions) {
          for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = shared.isFunction(opt) ? opt.bind(publicThis, publicThis) : shared.isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : shared.NOOP;
            if (get === shared.NOOP) {
              warn2(`Computed property "${key}" has no getter.`);
            }
            const set = !shared.isFunction(opt) && shared.isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
              warn2(
                `Write operation failed: computed property "${key}" is readonly.`
              );
            };
            const c = computed6({
              get,
              set
            });
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => c.value,
              set: (v) => c.value = v
            });
            {
              checkDuplicateProperties("Computed", key);
            }
          }
        }
        if (watchOptions) {
          for (const key in watchOptions) {
            createWatcher(watchOptions[key], ctx, publicThis, key);
          }
        }
        if (provideOptions) {
          const provides = shared.isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
          Reflect.ownKeys(provides).forEach((key) => {
            provide(key, provides[key]);
          });
        }
        if (created) {
          callHook(created, instance, "c");
        }
        function registerLifecycleHook(register, hook) {
          if (shared.isArray(hook)) {
            hook.forEach((_hook) => register(_hook.bind(publicThis)));
          } else if (hook) {
            register(hook.bind(publicThis));
          }
        }
        registerLifecycleHook(onBeforeMount, beforeMount);
        registerLifecycleHook(onMounted4, mounted);
        registerLifecycleHook(onBeforeUpdate, beforeUpdate);
        registerLifecycleHook(onUpdated, updated);
        registerLifecycleHook(onActivated, activated);
        registerLifecycleHook(onDeactivated, deactivated);
        registerLifecycleHook(onErrorCaptured, errorCaptured);
        registerLifecycleHook(onRenderTracked, renderTracked);
        registerLifecycleHook(onRenderTriggered, renderTriggered);
        registerLifecycleHook(onBeforeUnmount, beforeUnmount);
        registerLifecycleHook(onUnmounted, unmounted);
        registerLifecycleHook(onServerPrefetch, serverPrefetch);
        if (shared.isArray(expose)) {
          if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key) => {
              Object.defineProperty(exposed, key, {
                get: () => publicThis[key],
                set: (val) => publicThis[key] = val
              });
            });
          } else if (!instance.exposed) {
            instance.exposed = {};
          }
        }
        if (render8 && instance.render === shared.NOOP) {
          instance.render = render8;
        }
        if (inheritAttrs != null) {
          instance.inheritAttrs = inheritAttrs;
        }
        if (components)
          instance.components = components;
        if (directives)
          instance.directives = directives;
      }
      function resolveInjections(injectOptions, ctx, checkDuplicateProperties = shared.NOOP) {
        if (shared.isArray(injectOptions)) {
          injectOptions = normalizeInject(injectOptions);
        }
        for (const key in injectOptions) {
          const opt = injectOptions[key];
          let injected;
          if (shared.isObject(opt)) {
            if ("default" in opt) {
              injected = inject(
                opt.from || key,
                opt.default,
                true
              );
            } else {
              injected = inject(opt.from || key);
            }
          } else {
            injected = inject(opt);
          }
          if (reactivity.isRef(injected)) {
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => injected.value,
              set: (v) => injected.value = v
            });
          } else {
            ctx[key] = injected;
          }
          {
            checkDuplicateProperties("Inject", key);
          }
        }
      }
      function callHook(hook, instance, type) {
        callWithAsyncErrorHandling(
          shared.isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
          instance,
          type
        );
      }
      function createWatcher(raw, ctx, publicThis, key) {
        const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
        if (shared.isString(raw)) {
          const handler = ctx[raw];
          if (shared.isFunction(handler)) {
            watch4(getter, handler);
          } else {
            warn2(`Invalid watch handler specified by key "${raw}"`, handler);
          }
        } else if (shared.isFunction(raw)) {
          watch4(getter, raw.bind(publicThis));
        } else if (shared.isObject(raw)) {
          if (shared.isArray(raw)) {
            raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
          } else {
            const handler = shared.isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if (shared.isFunction(handler)) {
              watch4(getter, handler, raw);
            } else {
              warn2(`Invalid watch handler specified by key "${raw.handler}"`, handler);
            }
          }
        } else {
          warn2(`Invalid watch option: "${key}"`, raw);
        }
      }
      function resolveMergedOptions(instance) {
        const base = instance.type;
        const { mixins, extends: extendsOptions } = base;
        const {
          mixins: globalMixins,
          optionsCache: cache,
          config: { optionMergeStrategies }
        } = instance.appContext;
        const cached = cache.get(base);
        let resolved;
        if (cached) {
          resolved = cached;
        } else if (!globalMixins.length && !mixins && !extendsOptions) {
          {
            resolved = base;
          }
        } else {
          resolved = {};
          if (globalMixins.length) {
            globalMixins.forEach(
              (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
            );
          }
          mergeOptions(resolved, base, optionMergeStrategies);
        }
        if (shared.isObject(base)) {
          cache.set(base, resolved);
        }
        return resolved;
      }
      function mergeOptions(to, from, strats, asMixin = false) {
        const { mixins, extends: extendsOptions } = from;
        if (extendsOptions) {
          mergeOptions(to, extendsOptions, strats, true);
        }
        if (mixins) {
          mixins.forEach(
            (m) => mergeOptions(to, m, strats, true)
          );
        }
        for (const key in from) {
          if (asMixin && key === "expose") {
            warn2(
              `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
            );
          } else {
            const strat = internalOptionMergeStrats[key] || strats && strats[key];
            to[key] = strat ? strat(to[key], from[key]) : from[key];
          }
        }
        return to;
      }
      var internalOptionMergeStrats = {
        data: mergeDataFn,
        props: mergeEmitsOrPropsOptions,
        emits: mergeEmitsOrPropsOptions,
        methods: mergeObjectOptions,
        computed: mergeObjectOptions,
        beforeCreate: mergeAsArray,
        created: mergeAsArray,
        beforeMount: mergeAsArray,
        mounted: mergeAsArray,
        beforeUpdate: mergeAsArray,
        updated: mergeAsArray,
        beforeDestroy: mergeAsArray,
        beforeUnmount: mergeAsArray,
        destroyed: mergeAsArray,
        unmounted: mergeAsArray,
        activated: mergeAsArray,
        deactivated: mergeAsArray,
        errorCaptured: mergeAsArray,
        serverPrefetch: mergeAsArray,
        components: mergeObjectOptions,
        directives: mergeObjectOptions,
        watch: mergeWatchOptions,
        provide: mergeDataFn,
        inject: mergeInject
      };
      function mergeDataFn(to, from) {
        if (!from) {
          return to;
        }
        if (!to) {
          return from;
        }
        return function mergedDataFn() {
          return shared.extend(
            shared.isFunction(to) ? to.call(this, this) : to,
            shared.isFunction(from) ? from.call(this, this) : from
          );
        };
      }
      function mergeInject(to, from) {
        return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
      }
      function normalizeInject(raw) {
        if (shared.isArray(raw)) {
          const res = {};
          for (let i = 0; i < raw.length; i++) {
            res[raw[i]] = raw[i];
          }
          return res;
        }
        return raw;
      }
      function mergeAsArray(to, from) {
        return to ? [...new Set([].concat(to, from))] : from;
      }
      function mergeObjectOptions(to, from) {
        return to ? shared.extend(/* @__PURE__ */ Object.create(null), to, from) : from;
      }
      function mergeEmitsOrPropsOptions(to, from) {
        if (to) {
          if (shared.isArray(to) && shared.isArray(from)) {
            return [.../* @__PURE__ */ new Set([...to, ...from])];
          }
          return shared.extend(
            /* @__PURE__ */ Object.create(null),
            normalizePropsOrEmits(to),
            normalizePropsOrEmits(from != null ? from : {})
          );
        } else {
          return from;
        }
      }
      function mergeWatchOptions(to, from) {
        if (!to)
          return from;
        if (!from)
          return to;
        const merged = shared.extend(/* @__PURE__ */ Object.create(null), to);
        for (const key in from) {
          merged[key] = mergeAsArray(to[key], from[key]);
        }
        return merged;
      }
      function createAppContext() {
        return {
          app: null,
          config: {
            isNativeTag: shared.NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
          },
          mixins: [],
          components: {},
          directives: {},
          provides: /* @__PURE__ */ Object.create(null),
          optionsCache: /* @__PURE__ */ new WeakMap(),
          propsCache: /* @__PURE__ */ new WeakMap(),
          emitsCache: /* @__PURE__ */ new WeakMap()
        };
      }
      var uid$1 = 0;
      function createAppAPI(render8, hydrate) {
        return function createApp2(rootComponent, rootProps = null) {
          if (!shared.isFunction(rootComponent)) {
            rootComponent = shared.extend({}, rootComponent);
          }
          if (rootProps != null && !shared.isObject(rootProps)) {
            warn2(`root props passed to app.mount() must be an object.`);
            rootProps = null;
          }
          const context = createAppContext();
          {
            Object.defineProperty(context.config, "unwrapInjectedRef", {
              get() {
                return true;
              },
              set() {
                warn2(
                  `app.config.unwrapInjectedRef has been deprecated. 3.3 now always unwraps injected refs in Options API.`
                );
              }
            });
          }
          const installedPlugins = /* @__PURE__ */ new WeakSet();
          let isMounted = false;
          const app = context.app = {
            _uid: uid$1++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config() {
              return context.config;
            },
            set config(v) {
              {
                warn2(
                  `app.config cannot be replaced. Modify individual options instead.`
                );
              }
            },
            use(plugin, ...options) {
              if (installedPlugins.has(plugin)) {
                warn2(`Plugin has already been applied to target app.`);
              } else if (plugin && shared.isFunction(plugin.install)) {
                installedPlugins.add(plugin);
                plugin.install(app, ...options);
              } else if (shared.isFunction(plugin)) {
                installedPlugins.add(plugin);
                plugin(app, ...options);
              } else {
                warn2(
                  `A plugin must either be a function or an object with an "install" function.`
                );
              }
              return app;
            },
            mixin(mixin) {
              {
                if (!context.mixins.includes(mixin)) {
                  context.mixins.push(mixin);
                } else {
                  warn2(
                    "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
                  );
                }
              }
              return app;
            },
            component(name, component) {
              {
                validateComponentName(name, context.config);
              }
              if (!component) {
                return context.components[name];
              }
              if (context.components[name]) {
                warn2(`Component "${name}" has already been registered in target app.`);
              }
              context.components[name] = component;
              return app;
            },
            directive(name, directive) {
              {
                validateDirectiveName(name);
              }
              if (!directive) {
                return context.directives[name];
              }
              if (context.directives[name]) {
                warn2(`Directive "${name}" has already been registered in target app.`);
              }
              context.directives[name] = directive;
              return app;
            },
            mount(rootContainer, isHydrate, isSVG) {
              if (!isMounted) {
                if (rootContainer.__vue_app__) {
                  warn2(
                    `There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`
                  );
                }
                const vnode = createVNode(rootComponent, rootProps);
                vnode.appContext = context;
                {
                  context.reload = () => {
                    render8(cloneVNode(vnode), rootContainer, isSVG);
                  };
                }
                if (isHydrate && hydrate) {
                  hydrate(vnode, rootContainer);
                } else {
                  render8(vnode, rootContainer, isSVG);
                }
                isMounted = true;
                app._container = rootContainer;
                rootContainer.__vue_app__ = app;
                {
                  app._instance = vnode.component;
                  devtoolsInitApp(app, version);
                }
                return getExposeProxy(vnode.component) || vnode.component.proxy;
              } else {
                warn2(
                  `App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``
                );
              }
            },
            unmount() {
              if (isMounted) {
                render8(null, app._container);
                {
                  app._instance = null;
                  devtoolsUnmountApp(app);
                }
                delete app._container.__vue_app__;
              } else {
                warn2(`Cannot unmount an app that is not mounted.`);
              }
            },
            provide(key, value) {
              if (key in context.provides) {
                warn2(
                  `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
                );
              }
              context.provides[key] = value;
              return app;
            },
            runWithContext(fn2) {
              currentApp = app;
              try {
                return fn2();
              } finally {
                currentApp = null;
              }
            }
          };
          return app;
        };
      }
      var currentApp = null;
      function provide(key, value) {
        if (!currentInstance) {
          {
            warn2(`provide() can only be used inside setup().`);
          }
        } else {
          let provides = currentInstance.provides;
          const parentProvides = currentInstance.parent && currentInstance.parent.provides;
          if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
          }
          provides[key] = value;
        }
      }
      function inject(key, defaultValue, treatDefaultAsFactory = false) {
        const instance = currentInstance || currentRenderingInstance;
        if (instance || currentApp) {
          const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
          if (provides && key in provides) {
            return provides[key];
          } else if (arguments.length > 1) {
            return treatDefaultAsFactory && shared.isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
          } else {
            warn2(`injection "${String(key)}" not found.`);
          }
        } else {
          warn2(`inject() can only be used inside setup() or functional components.`);
        }
      }
      function hasInjectionContext() {
        return !!(currentInstance || currentRenderingInstance || currentApp);
      }
      function initProps(instance, rawProps, isStateful, isSSR = false) {
        const props = {};
        const attrs = {};
        shared.def(attrs, InternalObjectKey, 1);
        instance.propsDefaults = /* @__PURE__ */ Object.create(null);
        setFullProps(instance, rawProps, props, attrs);
        for (const key in instance.propsOptions[0]) {
          if (!(key in props)) {
            props[key] = void 0;
          }
        }
        {
          validateProps(rawProps || {}, props, instance);
        }
        if (isStateful) {
          instance.props = isSSR ? props : reactivity.shallowReactive(props);
        } else {
          if (!instance.type.props) {
            instance.props = attrs;
          } else {
            instance.props = props;
          }
        }
        instance.attrs = attrs;
      }
      function isInHmrContext(instance) {
        while (instance) {
          if (instance.type.__hmrId)
            return true;
          instance = instance.parent;
        }
      }
      function updateProps(instance, rawProps, rawPrevProps, optimized) {
        const {
          props,
          attrs,
          vnode: { patchFlag }
        } = instance;
        const rawCurrentProps = reactivity.toRaw(props);
        const [options] = instance.propsOptions;
        let hasAttrsChanged = false;
        if (!isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
          if (patchFlag & 8) {
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              let key = propsToUpdate[i];
              if (isEmitListener(instance.emitsOptions, key)) {
                continue;
              }
              const value = rawProps[key];
              if (options) {
                if (shared.hasOwn(attrs, key)) {
                  if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                  }
                } else {
                  const camelizedKey = shared.camelize(key);
                  props[camelizedKey] = resolvePropValue(
                    options,
                    rawCurrentProps,
                    camelizedKey,
                    value,
                    instance,
                    false
                  );
                }
              } else {
                if (value !== attrs[key]) {
                  attrs[key] = value;
                  hasAttrsChanged = true;
                }
              }
            }
          }
        } else {
          if (setFullProps(instance, rawProps, props, attrs)) {
            hasAttrsChanged = true;
          }
          let kebabKey;
          for (const key in rawCurrentProps) {
            if (!rawProps || !shared.hasOwn(rawProps, key) && ((kebabKey = shared.hyphenate(key)) === key || !shared.hasOwn(rawProps, kebabKey))) {
              if (options) {
                if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
                  props[key] = resolvePropValue(
                    options,
                    rawCurrentProps,
                    key,
                    void 0,
                    instance,
                    true
                  );
                }
              } else {
                delete props[key];
              }
            }
          }
          if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
              if (!rawProps || !shared.hasOwn(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
              }
            }
          }
        }
        if (hasAttrsChanged) {
          reactivity.trigger(instance, "set", "$attrs");
        }
        {
          validateProps(rawProps || {}, props, instance);
        }
      }
      function setFullProps(instance, rawProps, props, attrs) {
        const [options, needCastKeys] = instance.propsOptions;
        let hasAttrsChanged = false;
        let rawCastValues;
        if (rawProps) {
          for (let key in rawProps) {
            if (shared.isReservedProp(key)) {
              continue;
            }
            const value = rawProps[key];
            let camelKey;
            if (options && shared.hasOwn(options, camelKey = shared.camelize(key))) {
              if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                props[camelKey] = value;
              } else {
                (rawCastValues || (rawCastValues = {}))[camelKey] = value;
              }
            } else if (!isEmitListener(instance.emitsOptions, key)) {
              if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            }
          }
        }
        if (needCastKeys) {
          const rawCurrentProps = reactivity.toRaw(props);
          const castValues = rawCastValues || shared.EMPTY_OBJ;
          for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              castValues[key],
              instance,
              !shared.hasOwn(castValues, key)
            );
          }
        }
        return hasAttrsChanged;
      }
      function resolvePropValue(options, props, key, value, instance, isAbsent) {
        const opt = options[key];
        if (opt != null) {
          const hasDefault = shared.hasOwn(opt, "default");
          if (hasDefault && value === void 0) {
            const defaultValue = opt.default;
            if (opt.type !== Function && !opt.skipFactory && shared.isFunction(defaultValue)) {
              const { propsDefaults } = instance;
              if (key in propsDefaults) {
                value = propsDefaults[key];
              } else {
                setCurrentInstance(instance);
                value = propsDefaults[key] = defaultValue.call(
                  null,
                  props
                );
                unsetCurrentInstance();
              }
            } else {
              value = defaultValue;
            }
          }
          if (opt[0]) {
            if (isAbsent && !hasDefault) {
              value = false;
            } else if (opt[1] && (value === "" || value === shared.hyphenate(key))) {
              value = true;
            }
          }
        }
        return value;
      }
      function normalizePropsOptions(comp, appContext, asMixin = false) {
        const cache = appContext.propsCache;
        const cached = cache.get(comp);
        if (cached) {
          return cached;
        }
        const raw = comp.props;
        const normalized = {};
        const needCastKeys = [];
        let hasExtends = false;
        if (!shared.isFunction(comp)) {
          const extendProps = (raw2) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw2, appContext, true);
            shared.extend(normalized, props);
            if (keys)
              needCastKeys.push(...keys);
          };
          if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
          }
          if (comp.extends) {
            extendProps(comp.extends);
          }
          if (comp.mixins) {
            comp.mixins.forEach(extendProps);
          }
        }
        if (!raw && !hasExtends) {
          if (shared.isObject(comp)) {
            cache.set(comp, shared.EMPTY_ARR);
          }
          return shared.EMPTY_ARR;
        }
        if (shared.isArray(raw)) {
          for (let i = 0; i < raw.length; i++) {
            if (!shared.isString(raw[i])) {
              warn2(`props must be strings when using array syntax.`, raw[i]);
            }
            const normalizedKey = shared.camelize(raw[i]);
            if (validatePropName(normalizedKey)) {
              normalized[normalizedKey] = shared.EMPTY_OBJ;
            }
          }
        } else if (raw) {
          if (!shared.isObject(raw)) {
            warn2(`invalid props options`, raw);
          }
          for (const key in raw) {
            const normalizedKey = shared.camelize(key);
            if (validatePropName(normalizedKey)) {
              const opt = raw[key];
              const prop = normalized[normalizedKey] = shared.isArray(opt) || shared.isFunction(opt) ? { type: opt } : shared.extend({}, opt);
              if (prop) {
                const booleanIndex = getTypeIndex(Boolean, prop.type);
                const stringIndex = getTypeIndex(String, prop.type);
                prop[0] = booleanIndex > -1;
                prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
                if (booleanIndex > -1 || shared.hasOwn(prop, "default")) {
                  needCastKeys.push(normalizedKey);
                }
              }
            }
          }
        }
        const res = [normalized, needCastKeys];
        if (shared.isObject(comp)) {
          cache.set(comp, res);
        }
        return res;
      }
      function validatePropName(key) {
        if (key[0] !== "$") {
          return true;
        } else {
          warn2(`Invalid prop name: "${key}" is a reserved property.`);
        }
        return false;
      }
      function getType(ctor) {
        const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
        return match ? match[2] : ctor === null ? "null" : "";
      }
      function isSameType(a, b) {
        return getType(a) === getType(b);
      }
      function getTypeIndex(type, expectedTypes) {
        if (shared.isArray(expectedTypes)) {
          return expectedTypes.findIndex((t) => isSameType(t, type));
        } else if (shared.isFunction(expectedTypes)) {
          return isSameType(expectedTypes, type) ? 0 : -1;
        }
        return -1;
      }
      function validateProps(rawProps, props, instance) {
        const resolvedValues = reactivity.toRaw(props);
        const options = instance.propsOptions[0];
        for (const key in options) {
          let opt = options[key];
          if (opt == null)
            continue;
          validateProp(
            key,
            resolvedValues[key],
            opt,
            !shared.hasOwn(rawProps, key) && !shared.hasOwn(rawProps, shared.hyphenate(key))
          );
        }
      }
      function validateProp(name, value, prop, isAbsent) {
        const { type, required, validator, skipCheck } = prop;
        if (required && isAbsent) {
          warn2('Missing required prop: "' + name + '"');
          return;
        }
        if (value == null && !required) {
          return;
        }
        if (type != null && type !== true && !skipCheck) {
          let isValid = false;
          const types = shared.isArray(type) ? type : [type];
          const expectedTypes = [];
          for (let i = 0; i < types.length && !isValid; i++) {
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || "");
            isValid = valid;
          }
          if (!isValid) {
            warn2(getInvalidTypeMessage(name, value, expectedTypes));
            return;
          }
        }
        if (validator && !validator(value)) {
          warn2('Invalid prop: custom validator check failed for prop "' + name + '".');
        }
      }
      var isSimpleType = /* @__PURE__ */ shared.makeMap(
        "String,Number,Boolean,Function,Symbol,BigInt"
      );
      function assertType(value, type) {
        let valid;
        const expectedType = getType(type);
        if (isSimpleType(expectedType)) {
          const t = typeof value;
          valid = t === expectedType.toLowerCase();
          if (!valid && t === "object") {
            valid = value instanceof type;
          }
        } else if (expectedType === "Object") {
          valid = shared.isObject(value);
        } else if (expectedType === "Array") {
          valid = shared.isArray(value);
        } else if (expectedType === "null") {
          valid = value === null;
        } else {
          valid = value instanceof type;
        }
        return {
          valid,
          expectedType
        };
      }
      function getInvalidTypeMessage(name, value, expectedTypes) {
        if (expectedTypes.length === 0) {
          return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
        }
        let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(shared.capitalize).join(" | ")}`;
        const expectedType = expectedTypes[0];
        const receivedType = shared.toRawType(value);
        const expectedValue = styleValue(value, expectedType);
        const receivedValue = styleValue(value, receivedType);
        if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
          message += ` with value ${expectedValue}`;
        }
        message += `, got ${receivedType} `;
        if (isExplicable(receivedType)) {
          message += `with value ${receivedValue}.`;
        }
        return message;
      }
      function styleValue(value, type) {
        if (type === "String") {
          return `"${value}"`;
        } else if (type === "Number") {
          return `${Number(value)}`;
        } else {
          return `${value}`;
        }
      }
      function isExplicable(type) {
        const explicitTypes = ["string", "number", "boolean"];
        return explicitTypes.some((elem) => type.toLowerCase() === elem);
      }
      function isBoolean(...args) {
        return args.some((elem) => elem.toLowerCase() === "boolean");
      }
      var isInternalKey = (key) => key[0] === "_" || key === "$stable";
      var normalizeSlotValue = (value) => shared.isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
      var normalizeSlot = (key, rawSlot, ctx) => {
        if (rawSlot._n) {
          return rawSlot;
        }
        const normalized = withCtx((...args) => {
          if (currentInstance) {
            warn2(
              `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
            );
          }
          return normalizeSlotValue(rawSlot(...args));
        }, ctx);
        normalized._c = false;
        return normalized;
      };
      var normalizeObjectSlots = (rawSlots, slots, instance) => {
        const ctx = rawSlots._ctx;
        for (const key in rawSlots) {
          if (isInternalKey(key))
            continue;
          const value = rawSlots[key];
          if (shared.isFunction(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
          } else if (value != null) {
            {
              warn2(
                `Non-function value encountered for slot "${key}". Prefer function slots for better performance.`
              );
            }
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
          }
        }
      };
      var normalizeVNodeSlots = (instance, children) => {
        if (!isKeepAlive(instance.vnode) && true) {
          warn2(
            `Non-function value encountered for default slot. Prefer function slots for better performance.`
          );
        }
        const normalized = normalizeSlotValue(children);
        instance.slots.default = () => normalized;
      };
      var initSlots = (instance, children) => {
        if (instance.vnode.shapeFlag & 32) {
          const type = children._;
          if (type) {
            instance.slots = reactivity.toRaw(children);
            shared.def(children, "_", type);
          } else {
            normalizeObjectSlots(
              children,
              instance.slots = {}
            );
          }
        } else {
          instance.slots = {};
          if (children) {
            normalizeVNodeSlots(instance, children);
          }
        }
        shared.def(instance.slots, InternalObjectKey, 1);
      };
      var updateSlots = (instance, children, optimized) => {
        const { vnode, slots } = instance;
        let needDeletionCheck = true;
        let deletionComparisonTarget = shared.EMPTY_OBJ;
        if (vnode.shapeFlag & 32) {
          const type = children._;
          if (type) {
            if (isHmrUpdating) {
              shared.extend(slots, children);
              reactivity.trigger(instance, "set", "$slots");
            } else if (optimized && type === 1) {
              needDeletionCheck = false;
            } else {
              shared.extend(slots, children);
              if (!optimized && type === 1) {
                delete slots._;
              }
            }
          } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
          }
          deletionComparisonTarget = children;
        } else if (children) {
          normalizeVNodeSlots(instance, children);
          deletionComparisonTarget = { default: 1 };
        }
        if (needDeletionCheck) {
          for (const key in slots) {
            if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
              delete slots[key];
            }
          }
        }
      };
      function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
        if (shared.isArray(rawRef)) {
          rawRef.forEach(
            (r, i) => setRef(
              r,
              oldRawRef && (shared.isArray(oldRawRef) ? oldRawRef[i] : oldRawRef),
              parentSuspense,
              vnode,
              isUnmount
            )
          );
          return;
        }
        if (isAsyncWrapper(vnode) && !isUnmount) {
          return;
        }
        const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
        const value = isUnmount ? null : refValue;
        const { i: owner, r: ref8 } = rawRef;
        if (!owner) {
          warn2(
            `Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`
          );
          return;
        }
        const oldRef = oldRawRef && oldRawRef.r;
        const refs = owner.refs === shared.EMPTY_OBJ ? owner.refs = {} : owner.refs;
        const setupState = owner.setupState;
        if (oldRef != null && oldRef !== ref8) {
          if (shared.isString(oldRef)) {
            refs[oldRef] = null;
            if (shared.hasOwn(setupState, oldRef)) {
              setupState[oldRef] = null;
            }
          } else if (reactivity.isRef(oldRef)) {
            oldRef.value = null;
          }
        }
        if (shared.isFunction(ref8)) {
          callWithErrorHandling(ref8, owner, 12, [value, refs]);
        } else {
          const _isString = shared.isString(ref8);
          const _isRef = reactivity.isRef(ref8);
          if (_isString || _isRef) {
            const doSet = () => {
              if (rawRef.f) {
                const existing = _isString ? shared.hasOwn(setupState, ref8) ? setupState[ref8] : refs[ref8] : ref8.value;
                if (isUnmount) {
                  shared.isArray(existing) && shared.remove(existing, refValue);
                } else {
                  if (!shared.isArray(existing)) {
                    if (_isString) {
                      refs[ref8] = [refValue];
                      if (shared.hasOwn(setupState, ref8)) {
                        setupState[ref8] = refs[ref8];
                      }
                    } else {
                      ref8.value = [refValue];
                      if (rawRef.k)
                        refs[rawRef.k] = ref8.value;
                    }
                  } else if (!existing.includes(refValue)) {
                    existing.push(refValue);
                  }
                }
              } else if (_isString) {
                refs[ref8] = value;
                if (shared.hasOwn(setupState, ref8)) {
                  setupState[ref8] = value;
                }
              } else if (_isRef) {
                ref8.value = value;
                if (rawRef.k)
                  refs[rawRef.k] = value;
              } else {
                warn2("Invalid template ref type:", ref8, `(${typeof ref8})`);
              }
            };
            if (value) {
              doSet.id = -1;
              queuePostRenderEffect(doSet, parentSuspense);
            } else {
              doSet();
            }
          } else {
            warn2("Invalid template ref type:", ref8, `(${typeof ref8})`);
          }
        }
      }
      var hasMismatch = false;
      var isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
      var isComment = (node) => node.nodeType === 8;
      function createHydrationFunctions(rendererInternals) {
        const {
          mt: mountComponent,
          p: patch,
          o: {
            patchProp,
            createText,
            nextSibling,
            parentNode,
            remove,
            insert,
            createComment
          }
        } = rendererInternals;
        const hydrate = (vnode, container) => {
          if (!container.hasChildNodes()) {
            warn2(
              `Attempting to hydrate existing markup but container is empty. Performing full mount instead.`
            );
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
          }
          hasMismatch = false;
          hydrateNode(container.firstChild, vnode, null, null, null);
          flushPostFlushCbs();
          container._vnode = vnode;
          if (hasMismatch && true) {
            console.error(`Hydration completed but contains mismatches.`);
          }
        };
        const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
          const isFragmentStart = isComment(node) && node.data === "[";
          const onMismatch = () => handleMismatch(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            isFragmentStart
          );
          const { type, ref: ref8, shapeFlag, patchFlag } = vnode;
          let domType = node.nodeType;
          vnode.el = node;
          {
            if (!("__vnode" in node)) {
              Object.defineProperty(node, "__vnode", {
                value: vnode,
                enumerable: false
              });
            }
            if (!("__vueParentComponent" in node)) {
              Object.defineProperty(node, "__vueParentComponent", {
                value: parentComponent,
                enumerable: false
              });
            }
          }
          if (patchFlag === -2) {
            optimized = false;
            vnode.dynamicChildren = null;
          }
          let nextNode = null;
          switch (type) {
            case Text:
              if (domType !== 3) {
                if (vnode.children === "") {
                  insert(vnode.el = createText(""), parentNode(node), node);
                  nextNode = node;
                } else {
                  nextNode = onMismatch();
                }
              } else {
                if (node.data !== vnode.children) {
                  hasMismatch = true;
                  warn2(
                    `Hydration text mismatch:
- Server rendered: ${JSON.stringify(
                      node.data
                    )}
- Client rendered: ${JSON.stringify(vnode.children)}`
                  );
                  node.data = vnode.children;
                }
                nextNode = nextSibling(node);
              }
              break;
            case Comment:
              if (isTemplateNode(node)) {
                nextNode = nextSibling(node);
                replaceNode(
                  vnode.el = node.content.firstChild,
                  node,
                  parentComponent
                );
              } else if (domType !== 8 || isFragmentStart) {
                nextNode = onMismatch();
              } else {
                nextNode = nextSibling(node);
              }
              break;
            case Static:
              if (isFragmentStart) {
                node = nextSibling(node);
                domType = node.nodeType;
              }
              if (domType === 1 || domType === 3) {
                nextNode = node;
                const needToAdoptContent = !vnode.children.length;
                for (let i = 0; i < vnode.staticCount; i++) {
                  if (needToAdoptContent)
                    vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
                  if (i === vnode.staticCount - 1) {
                    vnode.anchor = nextNode;
                  }
                  nextNode = nextSibling(nextNode);
                }
                return isFragmentStart ? nextSibling(nextNode) : nextNode;
              } else {
                onMismatch();
              }
              break;
            case Fragment:
              if (!isFragmentStart) {
                nextNode = onMismatch();
              } else {
                nextNode = hydrateFragment(
                  node,
                  vnode,
                  parentComponent,
                  parentSuspense,
                  slotScopeIds,
                  optimized
                );
              }
              break;
            default:
              if (shapeFlag & 1) {
                if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) {
                  nextNode = onMismatch();
                } else {
                  nextNode = hydrateElement(
                    node,
                    vnode,
                    parentComponent,
                    parentSuspense,
                    slotScopeIds,
                    optimized
                  );
                }
              } else if (shapeFlag & 6) {
                vnode.slotScopeIds = slotScopeIds;
                const container = parentNode(node);
                if (isFragmentStart) {
                  nextNode = locateClosingAnchor(node);
                } else if (isComment(node) && node.data === "teleport start") {
                  nextNode = locateClosingAnchor(node, node.data, "teleport end");
                } else {
                  nextNode = nextSibling(node);
                }
                mountComponent(
                  vnode,
                  container,
                  null,
                  parentComponent,
                  parentSuspense,
                  isSVGContainer(container),
                  optimized
                );
                if (isAsyncWrapper(vnode)) {
                  let subTree;
                  if (isFragmentStart) {
                    subTree = createVNode(Fragment);
                    subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                  } else {
                    subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
                  }
                  subTree.el = node;
                  vnode.component.subTree = subTree;
                }
              } else if (shapeFlag & 64) {
                if (domType !== 8) {
                  nextNode = onMismatch();
                } else {
                  nextNode = vnode.type.hydrate(
                    node,
                    vnode,
                    parentComponent,
                    parentSuspense,
                    slotScopeIds,
                    optimized,
                    rendererInternals,
                    hydrateChildren
                  );
                }
              } else if (shapeFlag & 128) {
                nextNode = vnode.type.hydrate(
                  node,
                  vnode,
                  parentComponent,
                  parentSuspense,
                  isSVGContainer(parentNode(node)),
                  slotScopeIds,
                  optimized,
                  rendererInternals,
                  hydrateNode
                );
              } else {
                warn2("Invalid HostVNode type:", type, `(${typeof type})`);
              }
          }
          if (ref8 != null) {
            setRef(ref8, null, parentSuspense, vnode);
          }
          return nextNode;
        };
        const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          optimized = optimized || !!vnode.dynamicChildren;
          const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
          const forcePatch = type === "input" || type === "option";
          {
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "created");
            }
            if (props) {
              if (forcePatch || !optimized || patchFlag & (16 | 32)) {
                for (const key in props) {
                  if (forcePatch && (key.endsWith("value") || key === "indeterminate") || shared.isOn(key) && !shared.isReservedProp(key) || key[0] === ".") {
                    patchProp(
                      el,
                      key,
                      null,
                      props[key],
                      false,
                      void 0,
                      parentComponent
                    );
                  }
                }
              } else if (props.onClick) {
                patchProp(
                  el,
                  "onClick",
                  null,
                  props.onClick,
                  false,
                  void 0,
                  parentComponent
                );
              }
            }
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) {
              invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            }
            let needCallTransitionHooks = false;
            if (isTemplateNode(el)) {
              needCallTransitionHooks = needTransition(parentSuspense, transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
              const content = el.content.firstChild;
              if (needCallTransitionHooks) {
                transition.beforeEnter(content);
              }
              replaceNode(content, el, parentComponent);
              vnode.el = el = content;
            }
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            }
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) {
              queueEffectWithSuspense(() => {
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
              }, parentSuspense);
            }
            if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
              let next = hydrateChildren(
                el.firstChild,
                vnode,
                el,
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized
              );
              let hasWarned2 = false;
              while (next) {
                hasMismatch = true;
                if (!hasWarned2) {
                  warn2(
                    `Hydration children mismatch in <${vnode.type}>: server rendered element contains more child nodes than client vdom.`
                  );
                  hasWarned2 = true;
                }
                const cur = next;
                next = next.nextSibling;
                remove(cur);
              }
            } else if (shapeFlag & 8) {
              if (el.textContent !== vnode.children) {
                hasMismatch = true;
                warn2(
                  `Hydration text content mismatch in <${vnode.type}>:
- Server rendered: ${el.textContent}
- Client rendered: ${vnode.children}`
                );
                el.textContent = vnode.children;
              }
            }
          }
          return el.nextSibling;
        };
        const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          optimized = optimized || !!parentVNode.dynamicChildren;
          const children = parentVNode.children;
          const l = children.length;
          let hasWarned2 = false;
          for (let i = 0; i < l; i++) {
            const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
            if (node) {
              node = hydrateNode(
                node,
                vnode,
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized
              );
            } else if (vnode.type === Text && !vnode.children) {
              continue;
            } else {
              hasMismatch = true;
              if (!hasWarned2) {
                warn2(
                  `Hydration children mismatch in <${container.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`
                );
                hasWarned2 = true;
              }
              patch(
                null,
                vnode,
                container,
                null,
                parentComponent,
                parentSuspense,
                isSVGContainer(container),
                slotScopeIds
              );
            }
          }
          return node;
        };
        const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          const { slotScopeIds: fragmentSlotScopeIds } = vnode;
          if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
          }
          const container = parentNode(node);
          const next = hydrateChildren(
            nextSibling(node),
            vnode,
            container,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
          if (next && isComment(next) && next.data === "]") {
            return nextSibling(vnode.anchor = next);
          } else {
            hasMismatch = true;
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
          }
        };
        const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
          hasMismatch = true;
          warn2(
            `Hydration node mismatch:
- Client vnode:`,
            vnode.type,
            `
- Server rendered DOM:`,
            node,
            node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``
          );
          vnode.el = null;
          if (isFragment) {
            const end2 = locateClosingAnchor(node);
            while (true) {
              const next2 = nextSibling(node);
              if (next2 && next2 !== end2) {
                remove(next2);
              } else {
                break;
              }
            }
          }
          const next = nextSibling(node);
          const container = parentNode(node);
          remove(node);
          patch(
            null,
            vnode,
            container,
            next,
            parentComponent,
            parentSuspense,
            isSVGContainer(container),
            slotScopeIds
          );
          return next;
        };
        const locateClosingAnchor = (node, open = "[", close = "]") => {
          let match = 0;
          while (node) {
            node = nextSibling(node);
            if (node && isComment(node)) {
              if (node.data === open)
                match++;
              if (node.data === close) {
                if (match === 0) {
                  return nextSibling(node);
                } else {
                  match--;
                }
              }
            }
          }
          return node;
        };
        const replaceNode = (newNode, oldNode, parentComponent) => {
          const parentNode2 = oldNode.parentNode;
          if (parentNode2) {
            parentNode2.replaceChild(newNode, oldNode);
          }
          let parent = parentComponent;
          while (parent) {
            if (parent.vnode.el === oldNode) {
              parent.vnode.el = parent.subTree.el = newNode;
            }
            parent = parent.parent;
          }
        };
        const isTemplateNode = (node) => {
          return node.nodeType === 1 && node.tagName.toLowerCase() === "template";
        };
        return [hydrate, hydrateNode];
      }
      var supported;
      var perf;
      function startMeasure(instance, type) {
        if (instance.appContext.config.performance && isSupported()) {
          perf.mark(`vue-${type}-${instance.uid}`);
        }
        {
          devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
        }
      }
      function endMeasure(instance, type) {
        if (instance.appContext.config.performance && isSupported()) {
          const startTag = `vue-${type}-${instance.uid}`;
          const endTag = startTag + `:end`;
          perf.mark(endTag);
          perf.measure(
            `<${formatComponentName(instance, instance.type)}> ${type}`,
            startTag,
            endTag
          );
          perf.clearMarks(startTag);
          perf.clearMarks(endTag);
        }
        {
          devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
        }
      }
      function isSupported() {
        if (supported !== void 0) {
          return supported;
        }
        if (typeof window !== "undefined" && window.performance) {
          supported = true;
          perf = window.performance;
        } else {
          supported = false;
        }
        return supported;
      }
      var queuePostRenderEffect = queueEffectWithSuspense;
      function createRenderer(options) {
        return baseCreateRenderer(options);
      }
      function createHydrationRenderer(options) {
        return baseCreateRenderer(options, createHydrationFunctions);
      }
      function baseCreateRenderer(options, createHydrationFns) {
        const target = shared.getGlobalThis();
        target.__VUE__ = true;
        {
          setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
        }
        const {
          insert: hostInsert,
          remove: hostRemove,
          patchProp: hostPatchProp,
          createElement: hostCreateElement,
          createText: hostCreateText,
          createComment: hostCreateComment,
          setText: hostSetText,
          setElementText: hostSetElementText,
          parentNode: hostParentNode,
          nextSibling: hostNextSibling,
          setScopeId: hostSetScopeId = shared.NOOP,
          insertStaticContent: hostInsertStaticContent
        } = options;
        const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
          if (n1 === n2) {
            return;
          }
          if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
          }
          if (n2.patchFlag === -2) {
            optimized = false;
            n2.dynamicChildren = null;
          }
          const { type, ref: ref8, shapeFlag } = n2;
          switch (type) {
            case Text:
              processText(n1, n2, container, anchor);
              break;
            case Comment:
              processCommentNode(n1, n2, container, anchor);
              break;
            case Static:
              if (n1 == null) {
                mountStaticNode(n2, container, anchor, isSVG);
              } else {
                patchStaticNode(n1, n2, container, isSVG);
              }
              break;
            case Fragment:
              processFragment(
                n1,
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              break;
            default:
              if (shapeFlag & 1) {
                processElement(
                  n1,
                  n2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              } else if (shapeFlag & 6) {
                processComponent(
                  n1,
                  n2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              } else if (shapeFlag & 64) {
                type.process(
                  n1,
                  n2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized,
                  internals
                );
              } else if (shapeFlag & 128) {
                type.process(
                  n1,
                  n2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized,
                  internals
                );
              } else {
                warn2("Invalid VNode type:", type, `(${typeof type})`);
              }
          }
          if (ref8 != null && parentComponent) {
            setRef(ref8, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
          }
        };
        const processText = (n1, n2, container, anchor) => {
          if (n1 == null) {
            hostInsert(
              n2.el = hostCreateText(n2.children),
              container,
              anchor
            );
          } else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) {
              hostSetText(el, n2.children);
            }
          }
        };
        const processCommentNode = (n1, n2, container, anchor) => {
          if (n1 == null) {
            hostInsert(
              n2.el = hostCreateComment(n2.children || ""),
              container,
              anchor
            );
          } else {
            n2.el = n1.el;
          }
        };
        const mountStaticNode = (n2, container, anchor, isSVG) => {
          [n2.el, n2.anchor] = hostInsertStaticContent(
            n2.children,
            container,
            anchor,
            isSVG,
            n2.el,
            n2.anchor
          );
        };
        const patchStaticNode = (n1, n2, container, isSVG) => {
          if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(
              n2.children,
              container,
              anchor,
              isSVG
            );
          } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
          }
        };
        const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
          let next;
          while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
          }
          hostInsert(anchor, container, nextSibling);
        };
        const removeStaticNode = ({ el, anchor }) => {
          let next;
          while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
          }
          hostRemove(anchor);
        };
        const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          isSVG = isSVG || n2.type === "svg";
          if (n1 == null) {
            mountElement(
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized
            );
          } else {
            patchElement(
              n1,
              n2,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized
            );
          }
        };
        const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          let el;
          let vnodeHook;
          const { type, props, shapeFlag, transition, dirs } = vnode;
          el = vnode.el = hostCreateElement(
            vnode.type,
            isSVG,
            props && props.is,
            props
          );
          if (shapeFlag & 8) {
            hostSetElementText(el, vnode.children);
          } else if (shapeFlag & 16) {
            mountChildren(
              vnode.children,
              el,
              null,
              parentComponent,
              parentSuspense,
              isSVG && type !== "foreignObject",
              slotScopeIds,
              optimized
            );
          }
          if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, "created");
          }
          setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
          if (props) {
            for (const key in props) {
              if (key !== "value" && !shared.isReservedProp(key)) {
                hostPatchProp(
                  el,
                  key,
                  null,
                  props[key],
                  isSVG,
                  vnode.children,
                  parentComponent,
                  parentSuspense,
                  unmountChildren
                );
              }
            }
            if ("value" in props) {
              hostPatchProp(el, "value", null, props.value);
            }
            if (vnodeHook = props.onVnodeBeforeMount) {
              invokeVNodeHook(vnodeHook, parentComponent, vnode);
            }
          }
          {
            Object.defineProperty(el, "__vnode", {
              value: vnode,
              enumerable: false
            });
            Object.defineProperty(el, "__vueParentComponent", {
              value: parentComponent,
              enumerable: false
            });
          }
          if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
          }
          const needCallTransitionHooks = needTransition(parentSuspense, transition);
          if (needCallTransitionHooks) {
            transition.beforeEnter(el);
          }
          hostInsert(el, container, anchor);
          if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
              needCallTransitionHooks && transition.enter(el);
              dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
          }
        };
        const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
          if (scopeId) {
            hostSetScopeId(el, scopeId);
          }
          if (slotScopeIds) {
            for (let i = 0; i < slotScopeIds.length; i++) {
              hostSetScopeId(el, slotScopeIds[i]);
            }
          }
          if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
              subTree = filterSingleRoot(subTree.children) || subTree;
            }
            if (vnode === subTree) {
              const parentVNode = parentComponent.vnode;
              setScopeId(
                el,
                parentVNode,
                parentVNode.scopeId,
                parentVNode.slotScopeIds,
                parentComponent.parent
              );
            }
          }
        };
        const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start2 = 0) => {
          for (let i = start2; i < children.length; i++) {
            const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
            patch(
              null,
              child,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized
            );
          }
        };
        const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          const el = n2.el = n1.el;
          let { patchFlag, dynamicChildren, dirs } = n2;
          patchFlag |= n1.patchFlag & 16;
          const oldProps = n1.props || shared.EMPTY_OBJ;
          const newProps = n2.props || shared.EMPTY_OBJ;
          let vnodeHook;
          parentComponent && toggleRecurse(parentComponent, false);
          if (vnodeHook = newProps.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          }
          if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
          }
          parentComponent && toggleRecurse(parentComponent, true);
          if (isHmrUpdating) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
          }
          const areChildrenSVG = isSVG && n2.type !== "foreignObject";
          if (dynamicChildren) {
            patchBlockChildren(
              n1.dynamicChildren,
              dynamicChildren,
              el,
              parentComponent,
              parentSuspense,
              areChildrenSVG,
              slotScopeIds
            );
            {
              traverseStaticChildren(n1, n2);
            }
          } else if (!optimized) {
            patchChildren(
              n1,
              n2,
              el,
              null,
              parentComponent,
              parentSuspense,
              areChildrenSVG,
              slotScopeIds,
              false
            );
          }
          if (patchFlag > 0) {
            if (patchFlag & 16) {
              patchProps(
                el,
                n2,
                oldProps,
                newProps,
                parentComponent,
                parentSuspense,
                isSVG
              );
            } else {
              if (patchFlag & 2) {
                if (oldProps.class !== newProps.class) {
                  hostPatchProp(el, "class", null, newProps.class, isSVG);
                }
              }
              if (patchFlag & 4) {
                hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
              }
              if (patchFlag & 8) {
                const propsToUpdate = n2.dynamicProps;
                for (let i = 0; i < propsToUpdate.length; i++) {
                  const key = propsToUpdate[i];
                  const prev = oldProps[key];
                  const next = newProps[key];
                  if (next !== prev || key === "value") {
                    hostPatchProp(
                      el,
                      key,
                      prev,
                      next,
                      isSVG,
                      n1.children,
                      parentComponent,
                      parentSuspense,
                      unmountChildren
                    );
                  }
                }
              }
            }
            if (patchFlag & 1) {
              if (n1.children !== n2.children) {
                hostSetElementText(el, n2.children);
              }
            }
          } else if (!optimized && dynamicChildren == null) {
            patchProps(
              el,
              n2,
              oldProps,
              newProps,
              parentComponent,
              parentSuspense,
              isSVG
            );
          }
          if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
              dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
            }, parentSuspense);
          }
        };
        const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
          for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
            patch(
              oldVNode,
              newVNode,
              container,
              null,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              true
            );
          }
        };
        const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
          if (oldProps !== newProps) {
            if (oldProps !== shared.EMPTY_OBJ) {
              for (const key in oldProps) {
                if (!shared.isReservedProp(key) && !(key in newProps)) {
                  hostPatchProp(
                    el,
                    key,
                    oldProps[key],
                    null,
                    isSVG,
                    vnode.children,
                    parentComponent,
                    parentSuspense,
                    unmountChildren
                  );
                }
              }
            }
            for (const key in newProps) {
              if (shared.isReservedProp(key))
                continue;
              const next = newProps[key];
              const prev = oldProps[key];
              if (next !== prev && key !== "value") {
                hostPatchProp(
                  el,
                  key,
                  prev,
                  next,
                  isSVG,
                  vnode.children,
                  parentComponent,
                  parentSuspense,
                  unmountChildren
                );
              }
            }
            if ("value" in newProps) {
              hostPatchProp(el, "value", oldProps.value, newProps.value);
            }
          }
        };
        const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
          const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
          let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
          if (isHmrUpdating || patchFlag & 2048) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
          }
          if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
          }
          if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            mountChildren(
              n2.children,
              container,
              fragmentEndAnchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized
            );
          } else {
            if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
              patchBlockChildren(
                n1.dynamicChildren,
                dynamicChildren,
                container,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds
              );
              {
                traverseStaticChildren(n1, n2);
              }
            } else {
              patchChildren(
                n1,
                n2,
                container,
                fragmentEndAnchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
            }
          }
        };
        const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          n2.slotScopeIds = slotScopeIds;
          if (n1 == null) {
            if (n2.shapeFlag & 512) {
              parentComponent.ctx.activate(
                n2,
                container,
                anchor,
                isSVG,
                optimized
              );
            } else {
              mountComponent(
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                optimized
              );
            }
          } else {
            updateComponent(n1, n2, optimized);
          }
        };
        const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
          const instance = initialVNode.component = createComponentInstance(
            initialVNode,
            parentComponent,
            parentSuspense
          );
          if (instance.type.__hmrId) {
            registerHMR(instance);
          }
          {
            pushWarningContext(initialVNode);
            startMeasure(instance, `mount`);
          }
          if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
          }
          {
            {
              startMeasure(instance, `init`);
            }
            setupComponent(instance);
            {
              endMeasure(instance, `init`);
            }
          }
          if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            if (!initialVNode.el) {
              const placeholder = instance.subTree = createVNode(Comment);
              processCommentNode(null, placeholder, container, anchor);
            }
            return;
          }
          setupRenderEffect(
            instance,
            initialVNode,
            container,
            anchor,
            parentSuspense,
            isSVG,
            optimized
          );
          {
            popWarningContext();
            endMeasure(instance, `mount`);
          }
        };
        const updateComponent = (n1, n2, optimized) => {
          const instance = n2.component = n1.component;
          if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
              {
                pushWarningContext(n2);
              }
              updateComponentPreRender(instance, n2, optimized);
              {
                popWarningContext();
              }
              return;
            } else {
              instance.next = n2;
              invalidateJob(instance.update);
              instance.update();
            }
          } else {
            n2.el = n1.el;
            instance.vnode = n2;
          }
        };
        const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
          const componentUpdateFn = () => {
            if (!instance.isMounted) {
              let vnodeHook;
              const { el, props } = initialVNode;
              const { bm, m, parent } = instance;
              const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
              toggleRecurse(instance, false);
              if (bm) {
                shared.invokeArrayFns(bm);
              }
              if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHook, parent, initialVNode);
              }
              toggleRecurse(instance, true);
              if (el && hydrateNode) {
                const hydrateSubTree = () => {
                  {
                    startMeasure(instance, `render`);
                  }
                  instance.subTree = renderComponentRoot(instance);
                  {
                    endMeasure(instance, `render`);
                  }
                  {
                    startMeasure(instance, `hydrate`);
                  }
                  hydrateNode(
                    el,
                    instance.subTree,
                    instance,
                    parentSuspense,
                    null
                  );
                  {
                    endMeasure(instance, `hydrate`);
                  }
                };
                if (isAsyncWrapperVNode) {
                  initialVNode.type.__asyncLoader().then(
                    () => !instance.isUnmounted && hydrateSubTree()
                  );
                } else {
                  hydrateSubTree();
                }
              } else {
                {
                  startMeasure(instance, `render`);
                }
                const subTree = instance.subTree = renderComponentRoot(instance);
                {
                  endMeasure(instance, `render`);
                }
                {
                  startMeasure(instance, `patch`);
                }
                patch(
                  null,
                  subTree,
                  container,
                  anchor,
                  instance,
                  parentSuspense,
                  isSVG
                );
                {
                  endMeasure(instance, `patch`);
                }
                initialVNode.el = subTree.el;
              }
              if (m) {
                queuePostRenderEffect(m, parentSuspense);
              }
              if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                const scopedInitialVNode = initialVNode;
                queuePostRenderEffect(
                  () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
                  parentSuspense
                );
              }
              if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
                instance.a && queuePostRenderEffect(instance.a, parentSuspense);
              }
              instance.isMounted = true;
              {
                devtoolsComponentAdded(instance);
              }
              initialVNode = container = anchor = null;
            } else {
              let { next, bu, u, parent, vnode } = instance;
              let originNext = next;
              let vnodeHook;
              {
                pushWarningContext(next || instance.vnode);
              }
              toggleRecurse(instance, false);
              if (next) {
                next.el = vnode.el;
                updateComponentPreRender(instance, next, optimized);
              } else {
                next = vnode;
              }
              if (bu) {
                shared.invokeArrayFns(bu);
              }
              if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
                invokeVNodeHook(vnodeHook, parent, next, vnode);
              }
              toggleRecurse(instance, true);
              {
                startMeasure(instance, `render`);
              }
              const nextTree = renderComponentRoot(instance);
              {
                endMeasure(instance, `render`);
              }
              const prevTree = instance.subTree;
              instance.subTree = nextTree;
              {
                startMeasure(instance, `patch`);
              }
              patch(
                prevTree,
                nextTree,
                hostParentNode(prevTree.el),
                getNextHostNode(prevTree),
                instance,
                parentSuspense,
                isSVG
              );
              {
                endMeasure(instance, `patch`);
              }
              next.el = nextTree.el;
              if (originNext === null) {
                updateHOCHostEl(instance, nextTree.el);
              }
              if (u) {
                queuePostRenderEffect(u, parentSuspense);
              }
              if (vnodeHook = next.props && next.props.onVnodeUpdated) {
                queuePostRenderEffect(
                  () => invokeVNodeHook(vnodeHook, parent, next, vnode),
                  parentSuspense
                );
              }
              {
                devtoolsComponentUpdated(instance);
              }
              {
                popWarningContext();
              }
            }
          };
          const effect4 = instance.effect = new reactivity.ReactiveEffect(
            componentUpdateFn,
            () => queueJob(update),
            instance.scope
          );
          const update = instance.update = () => effect4.run();
          update.id = instance.uid;
          toggleRecurse(instance, true);
          {
            effect4.onTrack = instance.rtc ? (e) => shared.invokeArrayFns(instance.rtc, e) : void 0;
            effect4.onTrigger = instance.rtg ? (e) => shared.invokeArrayFns(instance.rtg, e) : void 0;
            update.ownerInstance = instance;
          }
          update();
        };
        const updateComponentPreRender = (instance, nextVNode, optimized) => {
          nextVNode.component = instance;
          const prevProps = instance.vnode.props;
          instance.vnode = nextVNode;
          instance.next = null;
          updateProps(instance, nextVNode.props, prevProps, optimized);
          updateSlots(instance, nextVNode.children, optimized);
          reactivity.pauseTracking();
          flushPreFlushCbs();
          reactivity.resetTracking();
        };
        const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
          const c1 = n1 && n1.children;
          const prevShapeFlag = n1 ? n1.shapeFlag : 0;
          const c2 = n2.children;
          const { patchFlag, shapeFlag } = n2;
          if (patchFlag > 0) {
            if (patchFlag & 128) {
              patchKeyedChildren(
                c1,
                c2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              return;
            } else if (patchFlag & 256) {
              patchUnkeyedChildren(
                c1,
                c2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              return;
            }
          }
          if (shapeFlag & 8) {
            if (prevShapeFlag & 16) {
              unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
              hostSetElementText(container, c2);
            }
          } else {
            if (prevShapeFlag & 16) {
              if (shapeFlag & 16) {
                patchKeyedChildren(
                  c1,
                  c2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              } else {
                unmountChildren(c1, parentComponent, parentSuspense, true);
              }
            } else {
              if (prevShapeFlag & 8) {
                hostSetElementText(container, "");
              }
              if (shapeFlag & 16) {
                mountChildren(
                  c2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              }
            }
          }
        };
        const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          c1 = c1 || shared.EMPTY_ARR;
          c2 = c2 || shared.EMPTY_ARR;
          const oldLength = c1.length;
          const newLength = c2.length;
          const commonLength = Math.min(oldLength, newLength);
          let i;
          for (i = 0; i < commonLength; i++) {
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(
              c1[i],
              nextChild,
              container,
              null,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized
            );
          }
          if (oldLength > newLength) {
            unmountChildren(
              c1,
              parentComponent,
              parentSuspense,
              true,
              false,
              commonLength
            );
          } else {
            mountChildren(
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized,
              commonLength
            );
          }
        };
        const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          let i = 0;
          const l2 = c2.length;
          let e1 = c1.length - 1;
          let e2 = l2 - 1;
          while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) {
              patch(
                n1,
                n2,
                container,
                null,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
            } else {
              break;
            }
            i++;
          }
          while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n1, n2)) {
              patch(
                n1,
                n2,
                container,
                null,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
            } else {
              break;
            }
            e1--;
            e2--;
          }
          if (i > e1) {
            if (i <= e2) {
              const nextPos = e2 + 1;
              const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
              while (i <= e2) {
                patch(
                  null,
                  c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
                i++;
              }
            }
          } else if (i > e2) {
            while (i <= e1) {
              unmount(c1[i], parentComponent, parentSuspense, true);
              i++;
            }
          } else {
            const s1 = i;
            const s2 = i;
            const keyToNewIndexMap = /* @__PURE__ */ new Map();
            for (i = s2; i <= e2; i++) {
              const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
              if (nextChild.key != null) {
                if (keyToNewIndexMap.has(nextChild.key)) {
                  warn2(
                    `Duplicate keys found during update:`,
                    JSON.stringify(nextChild.key),
                    `Make sure keys are unique.`
                  );
                }
                keyToNewIndexMap.set(nextChild.key, i);
              }
            }
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            let maxNewIndexSoFar = 0;
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
              newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
              const prevChild = c1[i];
              if (patched >= toBePatched) {
                unmount(prevChild, parentComponent, parentSuspense, true);
                continue;
              }
              let newIndex;
              if (prevChild.key != null) {
                newIndex = keyToNewIndexMap.get(prevChild.key);
              } else {
                for (j = s2; j <= e2; j++) {
                  if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                    newIndex = j;
                    break;
                  }
                }
              }
              if (newIndex === void 0) {
                unmount(prevChild, parentComponent, parentSuspense, true);
              } else {
                newIndexToOldIndexMap[newIndex - s2] = i + 1;
                if (newIndex >= maxNewIndexSoFar) {
                  maxNewIndexSoFar = newIndex;
                } else {
                  moved = true;
                }
                patch(
                  prevChild,
                  c2[newIndex],
                  container,
                  null,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
                patched++;
              }
            }
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : shared.EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            for (i = toBePatched - 1; i >= 0; i--) {
              const nextIndex = s2 + i;
              const nextChild = c2[nextIndex];
              const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
              if (newIndexToOldIndexMap[i] === 0) {
                patch(
                  null,
                  nextChild,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              } else if (moved) {
                if (j < 0 || i !== increasingNewIndexSequence[j]) {
                  move(nextChild, container, anchor, 2);
                } else {
                  j--;
                }
              }
            }
          }
        };
        const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
          const { el, type, transition, children, shapeFlag } = vnode;
          if (shapeFlag & 6) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
          }
          if (shapeFlag & 128) {
            vnode.suspense.move(container, anchor, moveType);
            return;
          }
          if (shapeFlag & 64) {
            type.move(vnode, container, anchor, internals);
            return;
          }
          if (type === Fragment) {
            hostInsert(el, container, anchor);
            for (let i = 0; i < children.length; i++) {
              move(children[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
          }
          if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
          }
          const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
          if (needTransition2) {
            if (moveType === 0) {
              transition.beforeEnter(el);
              hostInsert(el, container, anchor);
              queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            } else {
              const { leave, delayLeave, afterLeave } = transition;
              const remove2 = () => hostInsert(el, container, anchor);
              const performLeave = () => {
                leave(el, () => {
                  remove2();
                  afterLeave && afterLeave();
                });
              };
              if (delayLeave) {
                delayLeave(el, remove2, performLeave);
              } else {
                performLeave();
              }
            }
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
          const {
            type,
            props,
            ref: ref8,
            children,
            dynamicChildren,
            shapeFlag,
            patchFlag,
            dirs
          } = vnode;
          if (ref8 != null) {
            setRef(ref8, null, parentSuspense, vnode, true);
          }
          if (shapeFlag & 256) {
            parentComponent.ctx.deactivate(vnode);
            return;
          }
          const shouldInvokeDirs = shapeFlag & 1 && dirs;
          const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
          let vnodeHook;
          if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
          if (shapeFlag & 6) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
          } else {
            if (shapeFlag & 128) {
              vnode.suspense.unmount(parentSuspense, doRemove);
              return;
            }
            if (shouldInvokeDirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            }
            if (shapeFlag & 64) {
              vnode.type.remove(
                vnode,
                parentComponent,
                parentSuspense,
                optimized,
                internals,
                doRemove
              );
            } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
              unmountChildren(
                dynamicChildren,
                parentComponent,
                parentSuspense,
                false,
                true
              );
            } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
              unmountChildren(children, parentComponent, parentSuspense);
            }
            if (doRemove) {
              remove(vnode);
            }
          }
          if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
              shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
            }, parentSuspense);
          }
        };
        const remove = (vnode) => {
          const { type, el, anchor, transition } = vnode;
          if (type === Fragment) {
            if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
              vnode.children.forEach((child) => {
                if (child.type === Comment) {
                  hostRemove(child.el);
                } else {
                  remove(child);
                }
              });
            } else {
              removeFragment(el, anchor);
            }
            return;
          }
          if (type === Static) {
            removeStaticNode(vnode);
            return;
          }
          const performRemove = () => {
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) {
              transition.afterLeave();
            }
          };
          if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
              delayLeave(vnode.el, performRemove, performLeave);
            } else {
              performLeave();
            }
          } else {
            performRemove();
          }
        };
        const removeFragment = (cur, end2) => {
          let next;
          while (cur !== end2) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
          }
          hostRemove(end2);
        };
        const unmountComponent = (instance, parentSuspense, doRemove) => {
          if (instance.type.__hmrId) {
            unregisterHMR(instance);
          }
          const { bum, scope, update, subTree, um } = instance;
          if (bum) {
            shared.invokeArrayFns(bum);
          }
          scope.stop();
          if (update) {
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
          }
          if (um) {
            queuePostRenderEffect(um, parentSuspense);
          }
          queuePostRenderEffect(() => {
            instance.isUnmounted = true;
          }, parentSuspense);
          if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
              parentSuspense.resolve();
            }
          }
          {
            devtoolsComponentRemoved(instance);
          }
        };
        const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start2 = 0) => {
          for (let i = start2; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
          }
        };
        const getNextHostNode = (vnode) => {
          if (vnode.shapeFlag & 6) {
            return getNextHostNode(vnode.component.subTree);
          }
          if (vnode.shapeFlag & 128) {
            return vnode.suspense.next();
          }
          return hostNextSibling(vnode.anchor || vnode.el);
        };
        const render8 = (vnode, container, isSVG) => {
          if (vnode == null) {
            if (container._vnode) {
              unmount(container._vnode, null, null, true);
            }
          } else {
            patch(container._vnode || null, vnode, container, null, null, null, isSVG);
          }
          flushPreFlushCbs();
          flushPostFlushCbs();
          container._vnode = vnode;
        };
        const internals = {
          p: patch,
          um: unmount,
          m: move,
          r: remove,
          mt: mountComponent,
          mc: mountChildren,
          pc: patchChildren,
          pbc: patchBlockChildren,
          n: getNextHostNode,
          o: options
        };
        let hydrate;
        let hydrateNode;
        if (createHydrationFns) {
          [hydrate, hydrateNode] = createHydrationFns(
            internals
          );
        }
        return {
          render: render8,
          hydrate,
          createApp: createAppAPI(render8, hydrate)
        };
      }
      function toggleRecurse({ effect: effect4, update }, allowed) {
        effect4.allowRecurse = update.allowRecurse = allowed;
      }
      function needTransition(parentSuspense, transition) {
        return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
      }
      function traverseStaticChildren(n1, n2, shallow = false) {
        const ch1 = n1.children;
        const ch2 = n2.children;
        if (shared.isArray(ch1) && shared.isArray(ch2)) {
          for (let i = 0; i < ch1.length; i++) {
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
              if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
              }
              if (!shallow)
                traverseStaticChildren(c1, c2);
            }
            if (c2.type === Text) {
              c2.el = c1.el;
            }
            if (c2.type === Comment && !c2.el) {
              c2.el = c1.el;
            }
          }
        }
      }
      function getSequence(arr) {
        const p = arr.slice();
        const result = [0];
        let i, j, u, v, c;
        const len = arr.length;
        for (i = 0; i < len; i++) {
          const arrI = arr[i];
          if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
              p[i] = j;
              result.push(i);
              continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
              c = u + v >> 1;
              if (arr[result[c]] < arrI) {
                u = c + 1;
              } else {
                v = c;
              }
            }
            if (arrI < arr[result[u]]) {
              if (u > 0) {
                p[i] = result[u - 1];
              }
              result[u] = i;
            }
          }
        }
        u = result.length;
        v = result[u - 1];
        while (u-- > 0) {
          result[u] = v;
          v = p[v];
        }
        return result;
      }
      var isTeleport = (type) => type.__isTeleport;
      var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
      var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
      var resolveTarget = (props, select) => {
        const targetSelector = props && props.to;
        if (shared.isString(targetSelector)) {
          if (!select) {
            warn2(
              `Current renderer does not support string target for Teleports. (missing querySelector renderer option)`
            );
            return null;
          } else {
            const target = select(targetSelector);
            if (!target) {
              warn2(
                `Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
              );
            }
            return target;
          }
        } else {
          if (!targetSelector && !isTeleportDisabled(props)) {
            warn2(`Invalid Teleport target: ${targetSelector}`);
          }
          return targetSelector;
        }
      };
      var TeleportImpl = {
        name: "Teleport",
        __isTeleport: true,
        process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
          const {
            mc: mountChildren,
            pc: patchChildren,
            pbc: patchBlockChildren,
            o: { insert, querySelector, createText, createComment }
          } = internals;
          const disabled = isTeleportDisabled(n2.props);
          let { shapeFlag, children, dynamicChildren } = n2;
          if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
          }
          if (n1 == null) {
            const placeholder = n2.el = createComment("teleport start");
            const mainAnchor = n2.anchor = createComment("teleport end");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
              insert(targetAnchor, target);
              isSVG = isSVG || isTargetSVG(target);
            } else if (!disabled) {
              warn2("Invalid Teleport target on mount:", target, `(${typeof target})`);
            }
            const mount = (container2, anchor2) => {
              if (shapeFlag & 16) {
                mountChildren(
                  children,
                  container2,
                  anchor2,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              }
            };
            if (disabled) {
              mount(container, mainAnchor);
            } else if (target) {
              mount(target, targetAnchor);
            }
          } else {
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
              patchBlockChildren(
                n1.dynamicChildren,
                dynamicChildren,
                currentContainer,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds
              );
              traverseStaticChildren(n1, n2, true);
            } else if (!optimized) {
              patchChildren(
                n1,
                n2,
                currentContainer,
                currentAnchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                false
              );
            }
            if (disabled) {
              if (!wasDisabled) {
                moveTeleport(
                  n2,
                  container,
                  mainAnchor,
                  internals,
                  1
                );
              } else {
                if (n2.props && n1.props && n2.props.to !== n1.props.to) {
                  n2.props.to = n1.props.to;
                }
              }
            } else {
              if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                const nextTarget = n2.target = resolveTarget(
                  n2.props,
                  querySelector
                );
                if (nextTarget) {
                  moveTeleport(
                    n2,
                    nextTarget,
                    null,
                    internals,
                    0
                  );
                } else {
                  warn2(
                    "Invalid Teleport target on update:",
                    target,
                    `(${typeof target})`
                  );
                }
              } else if (wasDisabled) {
                moveTeleport(
                  n2,
                  target,
                  targetAnchor,
                  internals,
                  1
                );
              }
            }
          }
          updateCssVars(n2);
        },
        remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
          const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
          if (target) {
            hostRemove(targetAnchor);
          }
          doRemove && hostRemove(anchor);
          if (shapeFlag & 16) {
            const shouldRemove = doRemove || !isTeleportDisabled(props);
            for (let i = 0; i < children.length; i++) {
              const child = children[i];
              unmount(
                child,
                parentComponent,
                parentSuspense,
                shouldRemove,
                !!child.dynamicChildren
              );
            }
          }
        },
        move: moveTeleport,
        hydrate: hydrateTeleport
      };
      function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
        if (moveType === 0) {
          insert(vnode.targetAnchor, container, parentAnchor);
        }
        const { el, anchor, shapeFlag, children, props } = vnode;
        const isReorder = moveType === 2;
        if (isReorder) {
          insert(el, container, parentAnchor);
        }
        if (!isReorder || isTeleportDisabled(props)) {
          if (shapeFlag & 16) {
            for (let i = 0; i < children.length; i++) {
              move(
                children[i],
                container,
                parentAnchor,
                2
              );
            }
          }
        }
        if (isReorder) {
          insert(anchor, container, parentAnchor);
        }
      }
      function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
        o: { nextSibling, parentNode, querySelector }
      }, hydrateChildren) {
        const target = vnode.target = resolveTarget(
          vnode.props,
          querySelector
        );
        if (target) {
          const targetNode = target._lpa || target.firstChild;
          if (vnode.shapeFlag & 16) {
            if (isTeleportDisabled(vnode.props)) {
              vnode.anchor = hydrateChildren(
                nextSibling(node),
                vnode,
                parentNode(node),
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized
              );
              vnode.targetAnchor = targetNode;
            } else {
              vnode.anchor = nextSibling(node);
              let targetAnchor = targetNode;
              while (targetAnchor) {
                targetAnchor = nextSibling(targetAnchor);
                if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
                  vnode.targetAnchor = targetAnchor;
                  target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                  break;
                }
              }
              hydrateChildren(
                targetNode,
                vnode,
                target,
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized
              );
            }
          }
          updateCssVars(vnode);
        }
        return vnode.anchor && nextSibling(vnode.anchor);
      }
      var Teleport = TeleportImpl;
      function updateCssVars(vnode) {
        const ctx = vnode.ctx;
        if (ctx && ctx.ut) {
          let node = vnode.children[0].el;
          while (node && node !== vnode.targetAnchor) {
            if (node.nodeType === 1)
              node.setAttribute("data-v-owner", ctx.uid);
            node = node.nextSibling;
          }
          ctx.ut();
        }
      }
      var Fragment = Symbol.for("v-fgt");
      var Text = Symbol.for("v-txt");
      var Comment = Symbol.for("v-cmt");
      var Static = Symbol.for("v-stc");
      var blockStack = [];
      var currentBlock = null;
      function openBlock(disableTracking = false) {
        blockStack.push(currentBlock = disableTracking ? null : []);
      }
      function closeBlock() {
        blockStack.pop();
        currentBlock = blockStack[blockStack.length - 1] || null;
      }
      var isBlockTreeEnabled = 1;
      function setBlockTracking(value) {
        isBlockTreeEnabled += value;
      }
      function setupBlock(vnode) {
        vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || shared.EMPTY_ARR : null;
        closeBlock();
        if (isBlockTreeEnabled > 0 && currentBlock) {
          currentBlock.push(vnode);
        }
        return vnode;
      }
      function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
        return setupBlock(
          createBaseVNode(
            type,
            props,
            children,
            patchFlag,
            dynamicProps,
            shapeFlag,
            true
          )
        );
      }
      function createBlock(type, props, children, patchFlag, dynamicProps) {
        return setupBlock(
          createVNode(
            type,
            props,
            children,
            patchFlag,
            dynamicProps,
            true
          )
        );
      }
      function isVNode(value) {
        return value ? value.__v_isVNode === true : false;
      }
      function isSameVNodeType(n1, n2) {
        if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
          n1.shapeFlag &= ~256;
          n2.shapeFlag &= ~512;
          return false;
        }
        return n1.type === n2.type && n1.key === n2.key;
      }
      var vnodeArgsTransformer;
      function transformVNodeArgs(transformer) {
        vnodeArgsTransformer = transformer;
      }
      var createVNodeWithArgsTransform = (...args) => {
        return _createVNode3(
          ...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args
        );
      };
      var InternalObjectKey = `__vInternal`;
      var normalizeKey = ({ key }) => key != null ? key : null;
      var normalizeRef = ({
        ref: ref8,
        ref_key,
        ref_for
      }) => {
        if (typeof ref8 === "number") {
          ref8 = "" + ref8;
        }
        return ref8 != null ? shared.isString(ref8) || reactivity.isRef(ref8) || shared.isFunction(ref8) ? { i: currentRenderingInstance, r: ref8, k: ref_key, f: !!ref_for } : ref8 : null;
      };
      function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
        const vnode = {
          __v_isVNode: true,
          __v_skip: true,
          type,
          props,
          key: props && normalizeKey(props),
          ref: props && normalizeRef(props),
          scopeId: currentScopeId,
          slotScopeIds: null,
          children,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag,
          patchFlag,
          dynamicProps,
          dynamicChildren: null,
          appContext: null,
          ctx: currentRenderingInstance
        };
        if (needFullChildrenNormalization) {
          normalizeChildren(vnode, children);
          if (shapeFlag & 128) {
            type.normalize(vnode);
          }
        } else if (children) {
          vnode.shapeFlag |= shared.isString(children) ? 8 : 16;
        }
        if (vnode.key !== vnode.key) {
          warn2(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
        }
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
          currentBlock.push(vnode);
        }
        return vnode;
      }
      var createVNode = createVNodeWithArgsTransform;
      function _createVNode3(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
        if (!type || type === NULL_DYNAMIC_COMPONENT) {
          if (!type) {
            warn2(`Invalid vnode type when creating vnode: ${type}.`);
          }
          type = Comment;
        }
        if (isVNode(type)) {
          const cloned = cloneVNode(
            type,
            props,
            true
          );
          if (children) {
            normalizeChildren(cloned, children);
          }
          if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6) {
              currentBlock[currentBlock.indexOf(type)] = cloned;
            } else {
              currentBlock.push(cloned);
            }
          }
          cloned.patchFlag |= -2;
          return cloned;
        }
        if (isClassComponent(type)) {
          type = type.__vccOpts;
        }
        if (props) {
          props = guardReactiveProps(props);
          let { class: klass, style } = props;
          if (klass && !shared.isString(klass)) {
            props.class = shared.normalizeClass(klass);
          }
          if (shared.isObject(style)) {
            if (reactivity.isProxy(style) && !shared.isArray(style)) {
              style = shared.extend({}, style);
            }
            props.style = shared.normalizeStyle(style);
          }
        }
        const shapeFlag = shared.isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : shared.isObject(type) ? 4 : shared.isFunction(type) ? 2 : 0;
        if (shapeFlag & 4 && reactivity.isProxy(type)) {
          type = reactivity.toRaw(type);
          warn2(
            `Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
            `
Component that was made reactive: `,
            type
          );
        }
        return createBaseVNode(
          type,
          props,
          children,
          patchFlag,
          dynamicProps,
          shapeFlag,
          isBlockNode,
          true
        );
      }
      function guardReactiveProps(props) {
        if (!props)
          return null;
        return reactivity.isProxy(props) || InternalObjectKey in props ? shared.extend({}, props) : props;
      }
      function cloneVNode(vnode, extraProps, mergeRef = false) {
        const { props, ref: ref8, patchFlag, children } = vnode;
        const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
        const cloned = {
          __v_isVNode: true,
          __v_skip: true,
          type: vnode.type,
          props: mergedProps,
          key: mergedProps && normalizeKey(mergedProps),
          ref: extraProps && extraProps.ref ? mergeRef && ref8 ? shared.isArray(ref8) ? ref8.concat(normalizeRef(extraProps)) : [ref8, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref8,
          scopeId: vnode.scopeId,
          slotScopeIds: vnode.slotScopeIds,
          children: patchFlag === -1 && shared.isArray(children) ? children.map(deepCloneVNode) : children,
          target: vnode.target,
          targetAnchor: vnode.targetAnchor,
          staticCount: vnode.staticCount,
          shapeFlag: vnode.shapeFlag,
          patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
          dynamicProps: vnode.dynamicProps,
          dynamicChildren: vnode.dynamicChildren,
          appContext: vnode.appContext,
          dirs: vnode.dirs,
          transition: vnode.transition,
          component: vnode.component,
          suspense: vnode.suspense,
          ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
          ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
          el: vnode.el,
          anchor: vnode.anchor,
          ctx: vnode.ctx,
          ce: vnode.ce
        };
        return cloned;
      }
      function deepCloneVNode(vnode) {
        const cloned = cloneVNode(vnode);
        if (shared.isArray(vnode.children)) {
          cloned.children = vnode.children.map(deepCloneVNode);
        }
        return cloned;
      }
      function createTextVNode(text = " ", flag = 0) {
        return createVNode(Text, null, text, flag);
      }
      function createStaticVNode(content, numberOfNodes) {
        const vnode = createVNode(Static, null, content);
        vnode.staticCount = numberOfNodes;
        return vnode;
      }
      function createCommentVNode(text = "", asBlock = false) {
        return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
      }
      function normalizeVNode(child) {
        if (child == null || typeof child === "boolean") {
          return createVNode(Comment);
        } else if (shared.isArray(child)) {
          return createVNode(
            Fragment,
            null,
            child.slice()
          );
        } else if (typeof child === "object") {
          return cloneIfMounted(child);
        } else {
          return createVNode(Text, null, String(child));
        }
      }
      function cloneIfMounted(child) {
        return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
      }
      function normalizeChildren(vnode, children) {
        let type = 0;
        const { shapeFlag } = vnode;
        if (children == null) {
          children = null;
        } else if (shared.isArray(children)) {
          type = 16;
        } else if (typeof children === "object") {
          if (shapeFlag & (1 | 64)) {
            const slot = children.default;
            if (slot) {
              slot._c && (slot._d = false);
              normalizeChildren(vnode, slot());
              slot._c && (slot._d = true);
            }
            return;
          } else {
            type = 32;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
              children._ctx = currentRenderingInstance;
            } else if (slotFlag === 3 && currentRenderingInstance) {
              if (currentRenderingInstance.slots._ === 1) {
                children._ = 1;
              } else {
                children._ = 2;
                vnode.patchFlag |= 1024;
              }
            }
          }
        } else if (shared.isFunction(children)) {
          children = { default: children, _ctx: currentRenderingInstance };
          type = 32;
        } else {
          children = String(children);
          if (shapeFlag & 64) {
            type = 16;
            children = [createTextVNode(children)];
          } else {
            type = 8;
          }
        }
        vnode.children = children;
        vnode.shapeFlag |= type;
      }
      function mergeProps(...args) {
        const ret = {};
        for (let i = 0; i < args.length; i++) {
          const toMerge = args[i];
          for (const key in toMerge) {
            if (key === "class") {
              if (ret.class !== toMerge.class) {
                ret.class = shared.normalizeClass([ret.class, toMerge.class]);
              }
            } else if (key === "style") {
              ret.style = shared.normalizeStyle([ret.style, toMerge.style]);
            } else if (shared.isOn(key)) {
              const existing = ret[key];
              const incoming = toMerge[key];
              if (incoming && existing !== incoming && !(shared.isArray(existing) && existing.includes(incoming))) {
                ret[key] = existing ? [].concat(existing, incoming) : incoming;
              }
            } else if (key !== "") {
              ret[key] = toMerge[key];
            }
          }
        }
        return ret;
      }
      function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
        callWithAsyncErrorHandling(hook, instance, 7, [
          vnode,
          prevVNode
        ]);
      }
      var emptyAppContext = createAppContext();
      var uid = 0;
      function createComponentInstance(vnode, parent, suspense) {
        const type = vnode.type;
        const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
        const instance = {
          uid: uid++,
          vnode,
          type,
          parent,
          appContext,
          root: null,
          next: null,
          subTree: null,
          effect: null,
          update: null,
          scope: new reactivity.EffectScope(
            true
          ),
          render: null,
          proxy: null,
          exposed: null,
          exposeProxy: null,
          withProxy: null,
          provides: parent ? parent.provides : Object.create(appContext.provides),
          accessCache: null,
          renderCache: [],
          components: null,
          directives: null,
          propsOptions: normalizePropsOptions(type, appContext),
          emitsOptions: normalizeEmitsOptions(type, appContext),
          emit: null,
          emitted: null,
          propsDefaults: shared.EMPTY_OBJ,
          inheritAttrs: type.inheritAttrs,
          ctx: shared.EMPTY_OBJ,
          data: shared.EMPTY_OBJ,
          props: shared.EMPTY_OBJ,
          attrs: shared.EMPTY_OBJ,
          slots: shared.EMPTY_OBJ,
          refs: shared.EMPTY_OBJ,
          setupState: shared.EMPTY_OBJ,
          setupContext: null,
          attrsProxy: null,
          slotsProxy: null,
          suspense,
          suspenseId: suspense ? suspense.pendingId : 0,
          asyncDep: null,
          asyncResolved: false,
          isMounted: false,
          isUnmounted: false,
          isDeactivated: false,
          bc: null,
          c: null,
          bm: null,
          m: null,
          bu: null,
          u: null,
          um: null,
          bum: null,
          da: null,
          a: null,
          rtg: null,
          rtc: null,
          ec: null,
          sp: null
        };
        {
          instance.ctx = createDevRenderContext(instance);
        }
        instance.root = parent ? parent.root : instance;
        instance.emit = emit.bind(null, instance);
        if (vnode.ce) {
          vnode.ce(instance);
        }
        return instance;
      }
      var currentInstance = null;
      var getCurrentInstance = () => currentInstance || currentRenderingInstance;
      var internalSetCurrentInstance;
      var globalCurrentInstanceSetters;
      var settersKey = "__VUE_INSTANCE_SETTERS__";
      {
        if (!(globalCurrentInstanceSetters = shared.getGlobalThis()[settersKey])) {
          globalCurrentInstanceSetters = shared.getGlobalThis()[settersKey] = [];
        }
        globalCurrentInstanceSetters.push((i) => currentInstance = i);
        internalSetCurrentInstance = (instance) => {
          if (globalCurrentInstanceSetters.length > 1) {
            globalCurrentInstanceSetters.forEach((s) => s(instance));
          } else {
            globalCurrentInstanceSetters[0](instance);
          }
        };
      }
      var setCurrentInstance = (instance) => {
        internalSetCurrentInstance(instance);
        instance.scope.on();
      };
      var unsetCurrentInstance = () => {
        currentInstance && currentInstance.scope.off();
        internalSetCurrentInstance(null);
      };
      var isBuiltInTag = /* @__PURE__ */ shared.makeMap("slot,component");
      function validateComponentName(name, config) {
        const appIsNativeTag = config.isNativeTag || shared.NO;
        if (isBuiltInTag(name) || appIsNativeTag(name)) {
          warn2(
            "Do not use built-in or reserved HTML elements as component id: " + name
          );
        }
      }
      function isStatefulComponent(instance) {
        return instance.vnode.shapeFlag & 4;
      }
      var isInSSRComponentSetup = false;
      function setupComponent(instance, isSSR = false) {
        isInSSRComponentSetup = isSSR;
        const { props, children } = instance.vnode;
        const isStateful = isStatefulComponent(instance);
        initProps(instance, props, isStateful, isSSR);
        initSlots(instance, children);
        const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
        isInSSRComponentSetup = false;
        return setupResult;
      }
      function setupStatefulComponent(instance, isSSR) {
        var _a;
        const Component = instance.type;
        {
          if (Component.name) {
            validateComponentName(Component.name, instance.appContext.config);
          }
          if (Component.components) {
            const names = Object.keys(Component.components);
            for (let i = 0; i < names.length; i++) {
              validateComponentName(names[i], instance.appContext.config);
            }
          }
          if (Component.directives) {
            const names = Object.keys(Component.directives);
            for (let i = 0; i < names.length; i++) {
              validateDirectiveName(names[i]);
            }
          }
          if (Component.compilerOptions && isRuntimeOnly()) {
            warn2(
              `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
            );
          }
        }
        instance.accessCache = /* @__PURE__ */ Object.create(null);
        instance.proxy = reactivity.markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
        {
          exposePropsOnRenderContext(instance);
        }
        const { setup } = Component;
        if (setup) {
          const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
          setCurrentInstance(instance);
          reactivity.pauseTracking();
          const setupResult = callWithErrorHandling(
            setup,
            instance,
            0,
            [reactivity.shallowReadonly(instance.props), setupContext]
          );
          reactivity.resetTracking();
          unsetCurrentInstance();
          if (shared.isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) {
              return setupResult.then((resolvedResult) => {
                handleSetupResult(instance, resolvedResult, isSSR);
              }).catch((e) => {
                handleError(e, instance, 0);
              });
            } else {
              instance.asyncDep = setupResult;
              if (!instance.suspense) {
                const name = (_a = Component.name) != null ? _a : "Anonymous";
                warn2(
                  `Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
                );
              }
            }
          } else {
            handleSetupResult(instance, setupResult, isSSR);
          }
        } else {
          finishComponentSetup(instance, isSSR);
        }
      }
      function handleSetupResult(instance, setupResult, isSSR) {
        if (shared.isFunction(setupResult)) {
          if (instance.type.__ssrInlineRender) {
            instance.ssrRender = setupResult;
          } else {
            instance.render = setupResult;
          }
        } else if (shared.isObject(setupResult)) {
          if (isVNode(setupResult)) {
            warn2(
              `setup() should not return VNodes directly - return a render function instead.`
            );
          }
          {
            instance.devtoolsRawSetupState = setupResult;
          }
          instance.setupState = reactivity.proxyRefs(setupResult);
          {
            exposeSetupStateOnRenderContext(instance);
          }
        } else if (setupResult !== void 0) {
          warn2(
            `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
          );
        }
        finishComponentSetup(instance, isSSR);
      }
      var compile2;
      var installWithProxy;
      function registerRuntimeCompiler(_compile) {
        compile2 = _compile;
        installWithProxy = (i) => {
          if (i.render._rc) {
            i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
          }
        };
      }
      var isRuntimeOnly = () => !compile2;
      function finishComponentSetup(instance, isSSR, skipOptions) {
        const Component = instance.type;
        if (!instance.render) {
          if (!isSSR && compile2 && !Component.render) {
            const template = Component.template || resolveMergedOptions(instance).template;
            if (template) {
              {
                startMeasure(instance, `compile`);
              }
              const { isCustomElement, compilerOptions } = instance.appContext.config;
              const { delimiters, compilerOptions: componentCompilerOptions } = Component;
              const finalCompilerOptions = shared.extend(
                shared.extend(
                  {
                    isCustomElement,
                    delimiters
                  },
                  compilerOptions
                ),
                componentCompilerOptions
              );
              Component.render = compile2(template, finalCompilerOptions);
              {
                endMeasure(instance, `compile`);
              }
            }
          }
          instance.render = Component.render || shared.NOOP;
          if (installWithProxy) {
            installWithProxy(instance);
          }
        }
        {
          setCurrentInstance(instance);
          reactivity.pauseTracking();
          try {
            applyOptions(instance);
          } finally {
            reactivity.resetTracking();
            unsetCurrentInstance();
          }
        }
        if (!Component.render && instance.render === shared.NOOP && !isSSR) {
          if (!compile2 && Component.template) {
            warn2(
              `Component provided template option but runtime compilation is not supported in this build of Vue.`
            );
          } else {
            warn2(`Component is missing template or render function.`);
          }
        }
      }
      function getAttrsProxy(instance) {
        return instance.attrsProxy || (instance.attrsProxy = new Proxy(
          instance.attrs,
          {
            get(target, key) {
              markAttrsAccessed();
              reactivity.track(instance, "get", "$attrs");
              return target[key];
            },
            set() {
              warn2(`setupContext.attrs is readonly.`);
              return false;
            },
            deleteProperty() {
              warn2(`setupContext.attrs is readonly.`);
              return false;
            }
          }
        ));
      }
      function getSlotsProxy(instance) {
        return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
          get(target, key) {
            reactivity.track(instance, "get", "$slots");
            return target[key];
          }
        }));
      }
      function createSetupContext(instance) {
        const expose = (exposed) => {
          {
            if (instance.exposed) {
              warn2(`expose() should be called only once per setup().`);
            }
            if (exposed != null) {
              let exposedType = typeof exposed;
              if (exposedType === "object") {
                if (shared.isArray(exposed)) {
                  exposedType = "array";
                } else if (reactivity.isRef(exposed)) {
                  exposedType = "ref";
                }
              }
              if (exposedType !== "object") {
                warn2(
                  `expose() should be passed a plain object, received ${exposedType}.`
                );
              }
            }
          }
          instance.exposed = exposed || {};
        };
        {
          return Object.freeze({
            get attrs() {
              return getAttrsProxy(instance);
            },
            get slots() {
              return getSlotsProxy(instance);
            },
            get emit() {
              return (event, ...args) => instance.emit(event, ...args);
            },
            expose
          });
        }
      }
      function getExposeProxy(instance) {
        if (instance.exposed) {
          return instance.exposeProxy || (instance.exposeProxy = new Proxy(reactivity.proxyRefs(reactivity.markRaw(instance.exposed)), {
            get(target, key) {
              if (key in target) {
                return target[key];
              } else if (key in publicPropertiesMap) {
                return publicPropertiesMap[key](instance);
              }
            },
            has(target, key) {
              return key in target || key in publicPropertiesMap;
            }
          }));
        }
      }
      var classifyRE = /(?:^|[-_])(\w)/g;
      var classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
      function getComponentName(Component, includeInferred = true) {
        return shared.isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
      }
      function formatComponentName(instance, Component, isRoot = false) {
        let name = getComponentName(Component);
        if (!name && Component.__file) {
          const match = Component.__file.match(/([^/\\]+)\.\w+$/);
          if (match) {
            name = match[1];
          }
        }
        if (!name && instance && instance.parent) {
          const inferFromRegistry = (registry) => {
            for (const key in registry) {
              if (registry[key] === Component) {
                return key;
              }
            }
          };
          name = inferFromRegistry(
            instance.components || instance.parent.type.components
          ) || inferFromRegistry(instance.appContext.components);
        }
        return name ? classify(name) : isRoot ? `App` : `Anonymous`;
      }
      function isClassComponent(value) {
        return shared.isFunction(value) && "__vccOpts" in value;
      }
      var computed6 = (getterOrOptions, debugOptions) => {
        return reactivity.computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
      };
      function h(type, propsOrChildren, children) {
        const l = arguments.length;
        if (l === 2) {
          if (shared.isObject(propsOrChildren) && !shared.isArray(propsOrChildren)) {
            if (isVNode(propsOrChildren)) {
              return createVNode(type, null, [propsOrChildren]);
            }
            return createVNode(type, propsOrChildren);
          } else {
            return createVNode(type, null, propsOrChildren);
          }
        } else {
          if (l > 3) {
            children = Array.prototype.slice.call(arguments, 2);
          } else if (l === 3 && isVNode(children)) {
            children = [children];
          }
          return createVNode(type, propsOrChildren, children);
        }
      }
      var ssrContextKey = Symbol.for("v-scx");
      var useSSRContext = () => {
        {
          const ctx = inject(ssrContextKey);
          if (!ctx) {
            warn2(
              `Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`
            );
          }
          return ctx;
        }
      };
      function isShallow(value) {
        return !!(value && value["__v_isShallow"]);
      }
      function initCustomFormatter2() {
        if (typeof window === "undefined") {
          return;
        }
        const vueStyle = { style: "color:#3ba776" };
        const numberStyle = { style: "color:#0b1bc9" };
        const stringStyle = { style: "color:#b62e24" };
        const keywordStyle = { style: "color:#9d288c" };
        const formatter = {
          header(obj) {
            if (!shared.isObject(obj)) {
              return null;
            }
            if (obj.__isVue) {
              return ["div", vueStyle, `VueInstance`];
            } else if (reactivity.isRef(obj)) {
              return [
                "div",
                {},
                ["span", vueStyle, genRefFlag(obj)],
                "<",
                formatValue(obj.value),
                `>`
              ];
            } else if (reactivity.isReactive(obj)) {
              return [
                "div",
                {},
                ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
                "<",
                formatValue(obj),
                `>${reactivity.isReadonly(obj) ? ` (readonly)` : ``}`
              ];
            } else if (reactivity.isReadonly(obj)) {
              return [
                "div",
                {},
                ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
                "<",
                formatValue(obj),
                ">"
              ];
            }
            return null;
          },
          hasBody(obj) {
            return obj && obj.__isVue;
          },
          body(obj) {
            if (obj && obj.__isVue) {
              return [
                "div",
                {},
                ...formatInstance(obj.$)
              ];
            }
          }
        };
        function formatInstance(instance) {
          const blocks = [];
          if (instance.type.props && instance.props) {
            blocks.push(createInstanceBlock("props", reactivity.toRaw(instance.props)));
          }
          if (instance.setupState !== shared.EMPTY_OBJ) {
            blocks.push(createInstanceBlock("setup", instance.setupState));
          }
          if (instance.data !== shared.EMPTY_OBJ) {
            blocks.push(createInstanceBlock("data", reactivity.toRaw(instance.data)));
          }
          const computed7 = extractKeys(instance, "computed");
          if (computed7) {
            blocks.push(createInstanceBlock("computed", computed7));
          }
          const injected = extractKeys(instance, "inject");
          if (injected) {
            blocks.push(createInstanceBlock("injected", injected));
          }
          blocks.push([
            "div",
            {},
            [
              "span",
              {
                style: keywordStyle.style + ";opacity:0.66"
              },
              "$ (internal): "
            ],
            ["object", { object: instance }]
          ]);
          return blocks;
        }
        function createInstanceBlock(type, target) {
          target = shared.extend({}, target);
          if (!Object.keys(target).length) {
            return ["span", {}];
          }
          return [
            "div",
            { style: "line-height:1.25em;margin-bottom:0.6em" },
            [
              "div",
              {
                style: "color:#476582"
              },
              type
            ],
            [
              "div",
              {
                style: "padding-left:1.25em"
              },
              ...Object.keys(target).map((key) => {
                return [
                  "div",
                  {},
                  ["span", keywordStyle, key + ": "],
                  formatValue(target[key], false)
                ];
              })
            ]
          ];
        }
        function formatValue(v, asRaw = true) {
          if (typeof v === "number") {
            return ["span", numberStyle, v];
          } else if (typeof v === "string") {
            return ["span", stringStyle, JSON.stringify(v)];
          } else if (typeof v === "boolean") {
            return ["span", keywordStyle, v];
          } else if (shared.isObject(v)) {
            return ["object", { object: asRaw ? reactivity.toRaw(v) : v }];
          } else {
            return ["span", stringStyle, String(v)];
          }
        }
        function extractKeys(instance, type) {
          const Comp = instance.type;
          if (shared.isFunction(Comp)) {
            return;
          }
          const extracted = {};
          for (const key in instance.ctx) {
            if (isKeyOfType(Comp, key, type)) {
              extracted[key] = instance.ctx[key];
            }
          }
          return extracted;
        }
        function isKeyOfType(Comp, key, type) {
          const opts = Comp[type];
          if (shared.isArray(opts) && opts.includes(key) || shared.isObject(opts) && key in opts) {
            return true;
          }
          if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
            return true;
          }
          if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
            return true;
          }
        }
        function genRefFlag(v) {
          if (isShallow(v)) {
            return `ShallowRef`;
          }
          if (v.effect) {
            return `ComputedRef`;
          }
          return `Ref`;
        }
        if (window.devtoolsFormatters) {
          window.devtoolsFormatters.push(formatter);
        } else {
          window.devtoolsFormatters = [formatter];
        }
      }
      function withMemo(memo, render8, cache, index) {
        const cached = cache[index];
        if (cached && isMemoSame(cached, memo)) {
          return cached;
        }
        const ret = render8();
        ret.memo = memo.slice();
        return cache[index] = ret;
      }
      function isMemoSame(cached, memo) {
        const prev = cached.memo;
        if (prev.length != memo.length) {
          return false;
        }
        for (let i = 0; i < prev.length; i++) {
          if (shared.hasChanged(prev[i], memo[i])) {
            return false;
          }
        }
        if (isBlockTreeEnabled > 0 && currentBlock) {
          currentBlock.push(cached);
        }
        return true;
      }
      var version = "3.3.9";
      var _ssrUtils = {
        createComponentInstance,
        setupComponent,
        renderComponentRoot,
        setCurrentRenderingInstance,
        isVNode,
        normalizeVNode
      };
      var ssrUtils = _ssrUtils;
      var resolveFilter = null;
      var compatUtils = null;
      exports.EffectScope = reactivity.EffectScope;
      exports.ReactiveEffect = reactivity.ReactiveEffect;
      exports.customRef = reactivity.customRef;
      exports.effect = reactivity.effect;
      exports.effectScope = reactivity.effectScope;
      exports.getCurrentScope = reactivity.getCurrentScope;
      exports.isProxy = reactivity.isProxy;
      exports.isReactive = reactivity.isReactive;
      exports.isReadonly = reactivity.isReadonly;
      exports.isRef = reactivity.isRef;
      exports.isShallow = reactivity.isShallow;
      exports.markRaw = reactivity.markRaw;
      exports.onScopeDispose = reactivity.onScopeDispose;
      exports.proxyRefs = reactivity.proxyRefs;
      exports.reactive = reactivity.reactive;
      exports.readonly = reactivity.readonly;
      exports.ref = reactivity.ref;
      exports.shallowReactive = reactivity.shallowReactive;
      exports.shallowReadonly = reactivity.shallowReadonly;
      exports.shallowRef = reactivity.shallowRef;
      exports.stop = reactivity.stop;
      exports.toRaw = reactivity.toRaw;
      exports.toRef = reactivity.toRef;
      exports.toRefs = reactivity.toRefs;
      exports.toValue = reactivity.toValue;
      exports.triggerRef = reactivity.triggerRef;
      exports.unref = reactivity.unref;
      exports.camelize = shared.camelize;
      exports.capitalize = shared.capitalize;
      exports.normalizeClass = shared.normalizeClass;
      exports.normalizeProps = shared.normalizeProps;
      exports.normalizeStyle = shared.normalizeStyle;
      exports.toDisplayString = shared.toDisplayString;
      exports.toHandlerKey = shared.toHandlerKey;
      exports.BaseTransition = BaseTransition;
      exports.BaseTransitionPropsValidators = BaseTransitionPropsValidators;
      exports.Comment = Comment;
      exports.Fragment = Fragment;
      exports.KeepAlive = KeepAlive;
      exports.Static = Static;
      exports.Suspense = Suspense;
      exports.Teleport = Teleport;
      exports.Text = Text;
      exports.assertNumber = assertNumber;
      exports.callWithAsyncErrorHandling = callWithAsyncErrorHandling;
      exports.callWithErrorHandling = callWithErrorHandling;
      exports.cloneVNode = cloneVNode;
      exports.compatUtils = compatUtils;
      exports.computed = computed6;
      exports.createBlock = createBlock;
      exports.createCommentVNode = createCommentVNode;
      exports.createElementBlock = createElementBlock;
      exports.createElementVNode = createBaseVNode;
      exports.createHydrationRenderer = createHydrationRenderer;
      exports.createPropsRestProxy = createPropsRestProxy;
      exports.createRenderer = createRenderer;
      exports.createSlots = createSlots;
      exports.createStaticVNode = createStaticVNode;
      exports.createTextVNode = createTextVNode;
      exports.createVNode = createVNode;
      exports.defineAsyncComponent = defineAsyncComponent;
      exports.defineComponent = defineComponent;
      exports.defineEmits = defineEmits;
      exports.defineExpose = defineExpose;
      exports.defineModel = defineModel;
      exports.defineOptions = defineOptions;
      exports.defineProps = defineProps;
      exports.defineSlots = defineSlots;
      exports.getCurrentInstance = getCurrentInstance;
      exports.getTransitionRawChildren = getTransitionRawChildren;
      exports.guardReactiveProps = guardReactiveProps;
      exports.h = h;
      exports.handleError = handleError;
      exports.hasInjectionContext = hasInjectionContext;
      exports.initCustomFormatter = initCustomFormatter2;
      exports.inject = inject;
      exports.isMemoSame = isMemoSame;
      exports.isRuntimeOnly = isRuntimeOnly;
      exports.isVNode = isVNode;
      exports.mergeDefaults = mergeDefaults;
      exports.mergeModels = mergeModels;
      exports.mergeProps = mergeProps;
      exports.nextTick = nextTick;
      exports.onActivated = onActivated;
      exports.onBeforeMount = onBeforeMount;
      exports.onBeforeUnmount = onBeforeUnmount;
      exports.onBeforeUpdate = onBeforeUpdate;
      exports.onDeactivated = onDeactivated;
      exports.onErrorCaptured = onErrorCaptured;
      exports.onMounted = onMounted4;
      exports.onRenderTracked = onRenderTracked;
      exports.onRenderTriggered = onRenderTriggered;
      exports.onServerPrefetch = onServerPrefetch;
      exports.onUnmounted = onUnmounted;
      exports.onUpdated = onUpdated;
      exports.openBlock = openBlock;
      exports.popScopeId = popScopeId;
      exports.provide = provide;
      exports.pushScopeId = pushScopeId;
      exports.queuePostFlushCb = queuePostFlushCb;
      exports.registerRuntimeCompiler = registerRuntimeCompiler;
      exports.renderList = renderList;
      exports.renderSlot = renderSlot;
      exports.resolveComponent = resolveComponent;
      exports.resolveDirective = resolveDirective;
      exports.resolveDynamicComponent = resolveDynamicComponent;
      exports.resolveFilter = resolveFilter;
      exports.resolveTransitionHooks = resolveTransitionHooks;
      exports.setBlockTracking = setBlockTracking;
      exports.setDevtoolsHook = setDevtoolsHook;
      exports.setTransitionHooks = setTransitionHooks;
      exports.ssrContextKey = ssrContextKey;
      exports.ssrUtils = ssrUtils;
      exports.toHandlers = toHandlers;
      exports.transformVNodeArgs = transformVNodeArgs;
      exports.useAttrs = useAttrs;
      exports.useModel = useModel;
      exports.useSSRContext = useSSRContext;
      exports.useSlots = useSlots;
      exports.useTransitionState = useTransitionState;
      exports.version = version;
      exports.warn = warn2;
      exports.watch = watch4;
      exports.watchEffect = watchEffect;
      exports.watchPostEffect = watchPostEffect;
      exports.watchSyncEffect = watchSyncEffect;
      exports.withAsyncContext = withAsyncContext;
      exports.withCtx = withCtx;
      exports.withDefaults = withDefaults;
      exports.withDirectives = withDirectives;
      exports.withMemo = withMemo;
      exports.withScopeId = withScopeId;
    }
  });

  // node_modules/@vue/runtime-core/index.js
  var require_runtime_core = __commonJS({
    "node_modules/@vue/runtime-core/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_runtime_core_cjs();
      }
    }
  });

  // node_modules/@vue/runtime-dom/dist/runtime-dom.cjs.js
  var require_runtime_dom_cjs = __commonJS({
    "node_modules/@vue/runtime-dom/dist/runtime-dom.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var runtimeCore = require_runtime_core();
      var shared = require_shared();
      var svgNS = "http://www.w3.org/2000/svg";
      var doc = typeof document !== "undefined" ? document : null;
      var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
      var nodeOps = {
        insert: (child, parent, anchor) => {
          parent.insertBefore(child, anchor || null);
        },
        remove: (child) => {
          const parent = child.parentNode;
          if (parent) {
            parent.removeChild(child);
          }
        },
        createElement: (tag, isSVG, is, props) => {
          const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
          if (tag === "select" && props && props.multiple != null) {
            el.setAttribute("multiple", props.multiple);
          }
          return el;
        },
        createText: (text) => doc.createTextNode(text),
        createComment: (text) => doc.createComment(text),
        setText: (node, text) => {
          node.nodeValue = text;
        },
        setElementText: (el, text) => {
          el.textContent = text;
        },
        parentNode: (node) => node.parentNode,
        nextSibling: (node) => node.nextSibling,
        querySelector: (selector) => doc.querySelector(selector),
        setScopeId(el, id) {
          el.setAttribute(id, "");
        },
        insertStaticContent(content, parent, anchor, isSVG, start2, end2) {
          const before = anchor ? anchor.previousSibling : parent.lastChild;
          if (start2 && (start2 === end2 || start2.nextSibling)) {
            while (true) {
              parent.insertBefore(start2.cloneNode(true), anchor);
              if (start2 === end2 || !(start2 = start2.nextSibling))
                break;
            }
          } else {
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
              const wrapper = template.firstChild;
              while (wrapper.firstChild) {
                template.appendChild(wrapper.firstChild);
              }
              template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
          }
          return [
            before ? before.nextSibling : parent.firstChild,
            anchor ? anchor.previousSibling : parent.lastChild
          ];
        }
      };
      var TRANSITION = "transition";
      var ANIMATION = "animation";
      var vtcKey = Symbol("_vtc");
      var Transition = (props, { slots }) => runtimeCore.h(runtimeCore.BaseTransition, resolveTransitionProps(props), slots);
      Transition.displayName = "Transition";
      var DOMTransitionPropsValidators = {
        name: String,
        type: String,
        css: {
          type: Boolean,
          default: true
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
      };
      var TransitionPropsValidators = Transition.props = /* @__PURE__ */ shared.extend(
        {},
        runtimeCore.BaseTransitionPropsValidators,
        DOMTransitionPropsValidators
      );
      var callHook = (hook, args = []) => {
        if (shared.isArray(hook)) {
          hook.forEach((h2) => h2(...args));
        } else if (hook) {
          hook(...args);
        }
      };
      var hasExplicitCallback = (hook) => {
        return hook ? shared.isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
      };
      function resolveTransitionProps(rawProps) {
        const baseProps = {};
        for (const key in rawProps) {
          if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
          }
        }
        if (rawProps.css === false) {
          return baseProps;
        }
        const {
          name = "v",
          type,
          duration,
          enterFromClass = `${name}-enter-from`,
          enterActiveClass = `${name}-enter-active`,
          enterToClass = `${name}-enter-to`,
          appearFromClass = enterFromClass,
          appearActiveClass = enterActiveClass,
          appearToClass = enterToClass,
          leaveFromClass = `${name}-leave-from`,
          leaveActiveClass = `${name}-leave-active`,
          leaveToClass = `${name}-leave-to`
        } = rawProps;
        const durations = normalizeDuration(duration);
        const enterDuration = durations && durations[0];
        const leaveDuration = durations && durations[1];
        const {
          onBeforeEnter,
          onEnter,
          onEnterCancelled,
          onLeave,
          onLeaveCancelled,
          onBeforeAppear = onBeforeEnter,
          onAppear = onEnter,
          onAppearCancelled = onEnterCancelled
        } = baseProps;
        const finishEnter = (el, isAppear, done) => {
          removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
          removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
          done && done();
        };
        const finishLeave = (el, done) => {
          el._isLeaving = false;
          removeTransitionClass(el, leaveFromClass);
          removeTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveActiveClass);
          done && done();
        };
        const makeEnterHook = (isAppear) => {
          return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            callHook(hook, [el, resolve]);
            nextFrame(() => {
              removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
              addTransitionClass(el, isAppear ? appearToClass : enterToClass);
              if (!hasExplicitCallback(hook)) {
                whenTransitionEnds(el, type, enterDuration, resolve);
              }
            });
          };
        };
        return shared.extend(baseProps, {
          onBeforeEnter(el) {
            callHook(onBeforeEnter, [el]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
          },
          onBeforeAppear(el) {
            callHook(onBeforeAppear, [el]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
          },
          onEnter: makeEnterHook(false),
          onAppear: makeEnterHook(true),
          onLeave(el, done) {
            el._isLeaving = true;
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(() => {
              if (!el._isLeaving) {
                return;
              }
              removeTransitionClass(el, leaveFromClass);
              addTransitionClass(el, leaveToClass);
              if (!hasExplicitCallback(onLeave)) {
                whenTransitionEnds(el, type, leaveDuration, resolve);
              }
            });
            callHook(onLeave, [el, resolve]);
          },
          onEnterCancelled(el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [el]);
          },
          onAppearCancelled(el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [el]);
          },
          onLeaveCancelled(el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [el]);
          }
        });
      }
      function normalizeDuration(duration) {
        if (duration == null) {
          return null;
        } else if (shared.isObject(duration)) {
          return [NumberOf(duration.enter), NumberOf(duration.leave)];
        } else {
          const n = NumberOf(duration);
          return [n, n];
        }
      }
      function NumberOf(val) {
        const res = shared.toNumber(val);
        {
          runtimeCore.assertNumber(res, "<transition> explicit duration");
        }
        return res;
      }
      function addTransitionClass(el, cls) {
        cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
        (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
      }
      function removeTransitionClass(el, cls) {
        cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
        const _vtc = el[vtcKey];
        if (_vtc) {
          _vtc.delete(cls);
          if (!_vtc.size) {
            el[vtcKey] = void 0;
          }
        }
      }
      function nextFrame(cb) {
        requestAnimationFrame(() => {
          requestAnimationFrame(cb);
        });
      }
      var endId = 0;
      function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
        const id = el._endId = ++endId;
        const resolveIfNotStale = () => {
          if (id === el._endId) {
            resolve();
          }
        };
        if (explicitTimeout) {
          return setTimeout(resolveIfNotStale, explicitTimeout);
        }
        const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
        if (!type) {
          return resolve();
        }
        const endEvent = type + "end";
        let ended = 0;
        const end2 = () => {
          el.removeEventListener(endEvent, onEnd);
          resolveIfNotStale();
        };
        const onEnd = (e) => {
          if (e.target === el && ++ended >= propCount) {
            end2();
          }
        };
        setTimeout(() => {
          if (ended < propCount) {
            end2();
          }
        }, timeout + 1);
        el.addEventListener(endEvent, onEnd);
      }
      function getTransitionInfo(el, expectedType) {
        const styles = window.getComputedStyle(el);
        const getStyleProperties = (key) => (styles[key] || "").split(", ");
        const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
        const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
        const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
        const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
        const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
        const animationTimeout = getTimeout(animationDelays, animationDurations);
        let type = null;
        let timeout = 0;
        let propCount = 0;
        if (expectedType === TRANSITION) {
          if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
          }
        } else if (expectedType === ANIMATION) {
          if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
          }
        } else {
          timeout = Math.max(transitionTimeout, animationTimeout);
          type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
          propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
        }
        const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
          getStyleProperties(`${TRANSITION}Property`).toString()
        );
        return {
          type,
          timeout,
          propCount,
          hasTransform
        };
      }
      function getTimeout(delays, durations) {
        while (delays.length < durations.length) {
          delays = delays.concat(delays);
        }
        return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
      }
      function toMs(s) {
        if (s === "auto")
          return 0;
        return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
      }
      function forceReflow() {
        return document.body.offsetHeight;
      }
      function patchClass(el, value, isSVG) {
        const transitionClasses = el[vtcKey];
        if (transitionClasses) {
          value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
        }
        if (value == null) {
          el.removeAttribute("class");
        } else if (isSVG) {
          el.setAttribute("class", value);
        } else {
          el.className = value;
        }
      }
      var vShowOldKey = Symbol("_vod");
      var vShow = {
        beforeMount(el, { value }, { transition }) {
          el[vShowOldKey] = el.style.display === "none" ? "" : el.style.display;
          if (transition && value) {
            transition.beforeEnter(el);
          } else {
            setDisplay(el, value);
          }
        },
        mounted(el, { value }, { transition }) {
          if (transition && value) {
            transition.enter(el);
          }
        },
        updated(el, { value, oldValue }, { transition }) {
          if (!value === !oldValue)
            return;
          if (transition) {
            if (value) {
              transition.beforeEnter(el);
              setDisplay(el, true);
              transition.enter(el);
            } else {
              transition.leave(el, () => {
                setDisplay(el, false);
              });
            }
          } else {
            setDisplay(el, value);
          }
        },
        beforeUnmount(el, { value }) {
          setDisplay(el, value);
        }
      };
      function setDisplay(el, value) {
        el.style.display = value ? el[vShowOldKey] : "none";
      }
      function initVShowForSSR() {
        vShow.getSSRProps = ({ value }) => {
          if (!value) {
            return { style: { display: "none" } };
          }
        };
      }
      function patchStyle(el, prev, next) {
        const style = el.style;
        const isCssString = shared.isString(next);
        if (next && !isCssString) {
          if (prev && !shared.isString(prev)) {
            for (const key in prev) {
              if (next[key] == null) {
                setStyle(style, key, "");
              }
            }
          }
          for (const key in next) {
            setStyle(style, key, next[key]);
          }
        } else {
          const currentDisplay = style.display;
          if (isCssString) {
            if (prev !== next) {
              style.cssText = next;
            }
          } else if (prev) {
            el.removeAttribute("style");
          }
          if (vShowOldKey in el) {
            style.display = currentDisplay;
          }
        }
      }
      var semicolonRE = /[^\\];\s*$/;
      var importantRE = /\s*!important$/;
      function setStyle(style, name, val) {
        if (shared.isArray(val)) {
          val.forEach((v) => setStyle(style, name, v));
        } else {
          if (val == null)
            val = "";
          {
            if (semicolonRE.test(val)) {
              runtimeCore.warn(
                `Unexpected semicolon at the end of '${name}' style value: '${val}'`
              );
            }
          }
          if (name.startsWith("--")) {
            style.setProperty(name, val);
          } else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
              style.setProperty(
                shared.hyphenate(prefixed),
                val.replace(importantRE, ""),
                "important"
              );
            } else {
              style[prefixed] = val;
            }
          }
        }
      }
      var prefixes = ["Webkit", "Moz", "ms"];
      var prefixCache = {};
      function autoPrefix(style, rawName) {
        const cached = prefixCache[rawName];
        if (cached) {
          return cached;
        }
        let name = runtimeCore.camelize(rawName);
        if (name !== "filter" && name in style) {
          return prefixCache[rawName] = name;
        }
        name = shared.capitalize(name);
        for (let i = 0; i < prefixes.length; i++) {
          const prefixed = prefixes[i] + name;
          if (prefixed in style) {
            return prefixCache[rawName] = prefixed;
          }
        }
        return rawName;
      }
      var xlinkNS = "http://www.w3.org/1999/xlink";
      function patchAttr(el, key, value, isSVG, instance) {
        if (isSVG && key.startsWith("xlink:")) {
          if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
          } else {
            el.setAttributeNS(xlinkNS, key, value);
          }
        } else {
          const isBoolean = shared.isSpecialBooleanAttr(key);
          if (value == null || isBoolean && !shared.includeBooleanAttr(value)) {
            el.removeAttribute(key);
          } else {
            el.setAttribute(key, isBoolean ? "" : value);
          }
        }
      }
      function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
        if (key === "innerHTML" || key === "textContent") {
          if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
          }
          el[key] = value == null ? "" : value;
          return;
        }
        const tag = el.tagName;
        if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
          el._value = value;
          const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
          const newValue = value == null ? "" : value;
          if (oldValue !== newValue) {
            el.value = newValue;
          }
          if (value == null) {
            el.removeAttribute(key);
          }
          return;
        }
        let needRemove = false;
        if (value === "" || value == null) {
          const type = typeof el[key];
          if (type === "boolean") {
            value = shared.includeBooleanAttr(value);
          } else if (value == null && type === "string") {
            value = "";
            needRemove = true;
          } else if (type === "number") {
            value = 0;
            needRemove = true;
          }
        }
        try {
          el[key] = value;
        } catch (e) {
          if (!needRemove) {
            runtimeCore.warn(
              `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
              e
            );
          }
        }
        needRemove && el.removeAttribute(key);
      }
      function addEventListener(el, event, handler, options) {
        el.addEventListener(event, handler, options);
      }
      function removeEventListener(el, event, handler, options) {
        el.removeEventListener(event, handler, options);
      }
      var veiKey = Symbol("_vei");
      function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
        const invokers = el[veiKey] || (el[veiKey] = {});
        const existingInvoker = invokers[rawName];
        if (nextValue && existingInvoker) {
          existingInvoker.value = nextValue;
        } else {
          const [name, options] = parseName(rawName);
          if (nextValue) {
            const invoker = invokers[rawName] = createInvoker(nextValue, instance);
            addEventListener(el, name, invoker, options);
          } else if (existingInvoker) {
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = void 0;
          }
        }
      }
      var optionsModifierRE = /(?:Once|Passive|Capture)$/;
      function parseName(name) {
        let options;
        if (optionsModifierRE.test(name)) {
          options = {};
          let m;
          while (m = name.match(optionsModifierRE)) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
          }
        }
        const event = name[2] === ":" ? name.slice(3) : shared.hyphenate(name.slice(2));
        return [event, options];
      }
      var cachedNow = 0;
      var p = /* @__PURE__ */ Promise.resolve();
      var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
      function createInvoker(initialValue, instance) {
        const invoker = (e) => {
          if (!e._vts) {
            e._vts = Date.now();
          } else if (e._vts <= invoker.attached) {
            return;
          }
          runtimeCore.callWithAsyncErrorHandling(
            patchStopImmediatePropagation(e, invoker.value),
            instance,
            5,
            [e]
          );
        };
        invoker.value = initialValue;
        invoker.attached = getNow();
        return invoker;
      }
      function patchStopImmediatePropagation(e, value) {
        if (shared.isArray(value)) {
          const originalStop = e.stopImmediatePropagation;
          e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
          };
          return value.map((fn2) => (e2) => !e2._stopped && fn2 && fn2(e2));
        } else {
          return value;
        }
      }
      var nativeOnRE = /^on[a-z]/;
      var patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
        if (key === "class") {
          patchClass(el, nextValue, isSVG);
        } else if (key === "style") {
          patchStyle(el, prevValue, nextValue);
        } else if (shared.isOn(key)) {
          if (!shared.isModelListener(key)) {
            patchEvent(el, key, prevValue, nextValue, parentComponent);
          }
        } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
          patchDOMProp(
            el,
            key,
            nextValue,
            prevChildren,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        } else {
          if (key === "true-value") {
            el._trueValue = nextValue;
          } else if (key === "false-value") {
            el._falseValue = nextValue;
          }
          patchAttr(el, key, nextValue, isSVG);
        }
      };
      function shouldSetAsProp(el, key, value, isSVG) {
        if (isSVG) {
          if (key === "innerHTML" || key === "textContent") {
            return true;
          }
          if (key in el && nativeOnRE.test(key) && shared.isFunction(value)) {
            return true;
          }
          return false;
        }
        if (key === "spellcheck" || key === "draggable" || key === "translate") {
          return false;
        }
        if (key === "form") {
          return false;
        }
        if (key === "list" && el.tagName === "INPUT") {
          return false;
        }
        if (key === "type" && el.tagName === "TEXTAREA") {
          return false;
        }
        if (nativeOnRE.test(key) && shared.isString(value)) {
          return false;
        }
        return key in el;
      }
      function defineCustomElement(options, hydrate2) {
        const Comp = runtimeCore.defineComponent(options);
        class VueCustomElement extends VueElement {
          constructor(initialProps) {
            super(Comp, initialProps, hydrate2);
          }
        }
        VueCustomElement.def = Comp;
        return VueCustomElement;
      }
      var defineSSRCustomElement = (options) => {
        return /* @__PURE__ */ defineCustomElement(options, hydrate);
      };
      var BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
      };
      var VueElement = class extends BaseClass {
        constructor(_def, _props = {}, hydrate2) {
          super();
          this._def = _def;
          this._props = _props;
          this._instance = null;
          this._connected = false;
          this._resolved = false;
          this._numberProps = null;
          this._ob = null;
          if (this.shadowRoot && hydrate2) {
            hydrate2(this._createVNode(), this.shadowRoot);
          } else {
            if (this.shadowRoot) {
              runtimeCore.warn(
                `Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`
              );
            }
            this.attachShadow({ mode: "open" });
            if (!this._def.__asyncLoader) {
              this._resolveProps(this._def);
            }
          }
        }
        connectedCallback() {
          this._connected = true;
          if (!this._instance) {
            if (this._resolved) {
              this._update();
            } else {
              this._resolveDef();
            }
          }
        }
        disconnectedCallback() {
          this._connected = false;
          if (this._ob) {
            this._ob.disconnect();
            this._ob = null;
          }
          runtimeCore.nextTick(() => {
            if (!this._connected) {
              render8(null, this.shadowRoot);
              this._instance = null;
            }
          });
        }
        _resolveDef() {
          this._resolved = true;
          for (let i = 0; i < this.attributes.length; i++) {
            this._setAttr(this.attributes[i].name);
          }
          this._ob = new MutationObserver((mutations) => {
            for (const m of mutations) {
              this._setAttr(m.attributeName);
            }
          });
          this._ob.observe(this, { attributes: true });
          const resolve = (def, isAsync = false) => {
            const { props, styles } = def;
            let numberProps;
            if (props && !shared.isArray(props)) {
              for (const key in props) {
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                  if (key in this._props) {
                    this._props[key] = shared.toNumber(this._props[key]);
                  }
                  (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[shared.camelize(key)] = true;
                }
              }
            }
            this._numberProps = numberProps;
            if (isAsync) {
              this._resolveProps(def);
            }
            this._applyStyles(styles);
            this._update();
          };
          const asyncDef = this._def.__asyncLoader;
          if (asyncDef) {
            asyncDef().then((def) => resolve(def, true));
          } else {
            resolve(this._def);
          }
        }
        _resolveProps(def) {
          const { props } = def;
          const declaredPropKeys = shared.isArray(props) ? props : Object.keys(props || {});
          for (const key of Object.keys(this)) {
            if (key[0] !== "_" && declaredPropKeys.includes(key)) {
              this._setProp(key, this[key], true, false);
            }
          }
          for (const key of declaredPropKeys.map(shared.camelize)) {
            Object.defineProperty(this, key, {
              get() {
                return this._getProp(key);
              },
              set(val) {
                this._setProp(key, val);
              }
            });
          }
        }
        _setAttr(key) {
          let value = this.getAttribute(key);
          const camelKey = shared.camelize(key);
          if (this._numberProps && this._numberProps[camelKey]) {
            value = shared.toNumber(value);
          }
          this._setProp(camelKey, value, false);
        }
        _getProp(key) {
          return this._props[key];
        }
        _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
          if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) {
              this._update();
            }
            if (shouldReflect) {
              if (val === true) {
                this.setAttribute(shared.hyphenate(key), "");
              } else if (typeof val === "string" || typeof val === "number") {
                this.setAttribute(shared.hyphenate(key), val + "");
              } else if (!val) {
                this.removeAttribute(shared.hyphenate(key));
              }
            }
          }
        }
        _update() {
          render8(this._createVNode(), this.shadowRoot);
        }
        _createVNode() {
          const vnode = runtimeCore.createVNode(this._def, shared.extend({}, this._props));
          if (!this._instance) {
            vnode.ce = (instance) => {
              this._instance = instance;
              instance.isCE = true;
              {
                instance.ceReload = (newStyles) => {
                  if (this._styles) {
                    this._styles.forEach((s) => this.shadowRoot.removeChild(s));
                    this._styles.length = 0;
                  }
                  this._applyStyles(newStyles);
                  this._instance = null;
                  this._update();
                };
              }
              const dispatch = (event, args) => {
                this.dispatchEvent(
                  new CustomEvent(event, {
                    detail: args
                  })
                );
              };
              instance.emit = (event, ...args) => {
                dispatch(event, args);
                if (shared.hyphenate(event) !== event) {
                  dispatch(shared.hyphenate(event), args);
                }
              };
              let parent = this;
              while (parent = parent && (parent.parentNode || parent.host)) {
                if (parent instanceof VueElement) {
                  instance.parent = parent._instance;
                  instance.provides = parent._instance.provides;
                  break;
                }
              }
            };
          }
          return vnode;
        }
        _applyStyles(styles) {
          if (styles) {
            styles.forEach((css) => {
              const s = document.createElement("style");
              s.textContent = css;
              this.shadowRoot.appendChild(s);
              {
                (this._styles || (this._styles = [])).push(s);
              }
            });
          }
        }
      };
      function useCssModule(name = "$style") {
        {
          const instance = runtimeCore.getCurrentInstance();
          if (!instance) {
            runtimeCore.warn(`useCssModule must be called inside setup()`);
            return shared.EMPTY_OBJ;
          }
          const modules = instance.type.__cssModules;
          if (!modules) {
            runtimeCore.warn(`Current instance does not have CSS modules injected.`);
            return shared.EMPTY_OBJ;
          }
          const mod = modules[name];
          if (!mod) {
            runtimeCore.warn(`Current instance does not have CSS module named "${name}".`);
            return shared.EMPTY_OBJ;
          }
          return mod;
        }
      }
      function useCssVars(getter) {
        return;
      }
      var positionMap = /* @__PURE__ */ new WeakMap();
      var newPositionMap = /* @__PURE__ */ new WeakMap();
      var moveCbKey = Symbol("_moveCb");
      var enterCbKey = Symbol("_enterCb");
      var TransitionGroupImpl = {
        name: "TransitionGroup",
        props: /* @__PURE__ */ shared.extend({}, TransitionPropsValidators, {
          tag: String,
          moveClass: String
        }),
        setup(props, { slots }) {
          const instance = runtimeCore.getCurrentInstance();
          const state = runtimeCore.useTransitionState();
          let prevChildren;
          let children;
          runtimeCore.onUpdated(() => {
            if (!prevChildren.length) {
              return;
            }
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(
              prevChildren[0].el,
              instance.vnode.el,
              moveClass
            )) {
              return;
            }
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            forceReflow();
            movedChildren.forEach((c) => {
              const el = c.el;
              const style = el.style;
              addTransitionClass(el, moveClass);
              style.transform = style.webkitTransform = style.transitionDuration = "";
              const cb = el[moveCbKey] = (e) => {
                if (e && e.target !== el) {
                  return;
                }
                if (!e || /transform$/.test(e.propertyName)) {
                  el.removeEventListener("transitionend", cb);
                  el[moveCbKey] = null;
                  removeTransitionClass(el, moveClass);
                }
              };
              el.addEventListener("transitionend", cb);
            });
          });
          return () => {
            const rawProps = runtimeCore.toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || runtimeCore.Fragment;
            prevChildren = children;
            children = slots.default ? runtimeCore.getTransitionRawChildren(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
              const child = children[i];
              if (child.key != null) {
                runtimeCore.setTransitionHooks(
                  child,
                  runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance)
                );
              } else {
                runtimeCore.warn(`<TransitionGroup> children must be keyed.`);
              }
            }
            if (prevChildren) {
              for (let i = 0; i < prevChildren.length; i++) {
                const child = prevChildren[i];
                runtimeCore.setTransitionHooks(
                  child,
                  runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance)
                );
                positionMap.set(child, child.el.getBoundingClientRect());
              }
            }
            return runtimeCore.createVNode(tag, null, children);
          };
        }
      };
      var removeMode = (props) => delete props.mode;
      /* @__PURE__ */ removeMode(TransitionGroupImpl.props);
      var TransitionGroup = TransitionGroupImpl;
      function callPendingCbs(c) {
        const el = c.el;
        if (el[moveCbKey]) {
          el[moveCbKey]();
        }
        if (el[enterCbKey]) {
          el[enterCbKey]();
        }
      }
      function recordPosition(c) {
        newPositionMap.set(c, c.el.getBoundingClientRect());
      }
      function applyTranslation(c) {
        const oldPos = positionMap.get(c);
        const newPos = newPositionMap.get(c);
        const dx = oldPos.left - newPos.left;
        const dy = oldPos.top - newPos.top;
        if (dx || dy) {
          const s = c.el.style;
          s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
          s.transitionDuration = "0s";
          return c;
        }
      }
      function hasCSSTransform(el, root, moveClass) {
        const clone = el.cloneNode();
        const _vtc = el[vtcKey];
        if (_vtc) {
          _vtc.forEach((cls) => {
            cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
          });
        }
        moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
        clone.style.display = "none";
        const container = root.nodeType === 1 ? root : root.parentNode;
        container.appendChild(clone);
        const { hasTransform } = getTransitionInfo(clone);
        container.removeChild(clone);
        return hasTransform;
      }
      var getModelAssigner = (vnode) => {
        const fn2 = vnode.props["onUpdate:modelValue"] || false;
        return shared.isArray(fn2) ? (value) => shared.invokeArrayFns(fn2, value) : fn2;
      };
      function onCompositionStart(e) {
        e.target.composing = true;
      }
      function onCompositionEnd(e) {
        const target = e.target;
        if (target.composing) {
          target.composing = false;
          target.dispatchEvent(new Event("input"));
        }
      }
      var assignKey = Symbol("_assign");
      var vModelText = {
        created(el, { modifiers: { lazy, trim, number } }, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          const castToNumber = number || vnode.props && vnode.props.type === "number";
          addEventListener(el, lazy ? "change" : "input", (e) => {
            if (e.target.composing)
              return;
            let domValue = el.value;
            if (trim) {
              domValue = domValue.trim();
            }
            if (castToNumber) {
              domValue = shared.looseToNumber(domValue);
            }
            el[assignKey](domValue);
          });
          if (trim) {
            addEventListener(el, "change", () => {
              el.value = el.value.trim();
            });
          }
          if (!lazy) {
            addEventListener(el, "compositionstart", onCompositionStart);
            addEventListener(el, "compositionend", onCompositionEnd);
            addEventListener(el, "change", onCompositionEnd);
          }
        },
        mounted(el, { value }) {
          el.value = value == null ? "" : value;
        },
        beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          if (el.composing)
            return;
          const elValue = number || el.type === "number" ? shared.looseToNumber(el.value) : el.value;
          const newValue = value == null ? "" : value;
          if (elValue === newValue) {
            return;
          }
          if (document.activeElement === el && el.type !== "range") {
            if (lazy) {
              return;
            }
            if (trim && el.value.trim() === newValue) {
              return;
            }
          }
          el.value = newValue;
        }
      };
      var vModelCheckbox = {
        deep: true,
        created(el, _, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          addEventListener(el, "change", () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el[assignKey];
            if (shared.isArray(modelValue)) {
              const index = shared.looseIndexOf(modelValue, elementValue);
              const found = index !== -1;
              if (checked && !found) {
                assign(modelValue.concat(elementValue));
              } else if (!checked && found) {
                const filtered = [...modelValue];
                filtered.splice(index, 1);
                assign(filtered);
              }
            } else if (shared.isSet(modelValue)) {
              const cloned = new Set(modelValue);
              if (checked) {
                cloned.add(elementValue);
              } else {
                cloned.delete(elementValue);
              }
              assign(cloned);
            } else {
              assign(getCheckboxValue(el, checked));
            }
          });
        },
        mounted: setChecked,
        beforeUpdate(el, binding, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          setChecked(el, binding, vnode);
        }
      };
      function setChecked(el, { value, oldValue }, vnode) {
        el._modelValue = value;
        if (shared.isArray(value)) {
          el.checked = shared.looseIndexOf(value, vnode.props.value) > -1;
        } else if (shared.isSet(value)) {
          el.checked = value.has(vnode.props.value);
        } else if (value !== oldValue) {
          el.checked = shared.looseEqual(value, getCheckboxValue(el, true));
        }
      }
      var vModelRadio = {
        created(el, { value }, vnode) {
          el.checked = shared.looseEqual(value, vnode.props.value);
          el[assignKey] = getModelAssigner(vnode);
          addEventListener(el, "change", () => {
            el[assignKey](getValue(el));
          });
        },
        beforeUpdate(el, { value, oldValue }, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          if (value !== oldValue) {
            el.checked = shared.looseEqual(value, vnode.props.value);
          }
        }
      };
      var vModelSelect = {
        deep: true,
        created(el, { value, modifiers: { number } }, vnode) {
          const isSetModel = shared.isSet(value);
          addEventListener(el, "change", () => {
            const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
              (o) => number ? shared.looseToNumber(getValue(o)) : getValue(o)
            );
            el[assignKey](
              el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
            );
          });
          el[assignKey] = getModelAssigner(vnode);
        },
        mounted(el, { value }) {
          setSelected(el, value);
        },
        beforeUpdate(el, _binding, vnode) {
          el[assignKey] = getModelAssigner(vnode);
        },
        updated(el, { value }) {
          setSelected(el, value);
        }
      };
      function setSelected(el, value) {
        const isMultiple = el.multiple;
        if (isMultiple && !shared.isArray(value) && !shared.isSet(value)) {
          runtimeCore.warn(
            `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`
          );
          return;
        }
        for (let i = 0, l = el.options.length; i < l; i++) {
          const option = el.options[i];
          const optionValue = getValue(option);
          if (isMultiple) {
            if (shared.isArray(value)) {
              option.selected = shared.looseIndexOf(value, optionValue) > -1;
            } else {
              option.selected = value.has(optionValue);
            }
          } else {
            if (shared.looseEqual(getValue(option), value)) {
              if (el.selectedIndex !== i)
                el.selectedIndex = i;
              return;
            }
          }
        }
        if (!isMultiple && el.selectedIndex !== -1) {
          el.selectedIndex = -1;
        }
      }
      function getValue(el) {
        return "_value" in el ? el._value : el.value;
      }
      function getCheckboxValue(el, checked) {
        const key = checked ? "_trueValue" : "_falseValue";
        return key in el ? el[key] : checked;
      }
      var vModelDynamic = {
        created(el, binding, vnode) {
          callModelHook(el, binding, vnode, null, "created");
        },
        mounted(el, binding, vnode) {
          callModelHook(el, binding, vnode, null, "mounted");
        },
        beforeUpdate(el, binding, vnode, prevVNode) {
          callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
        },
        updated(el, binding, vnode, prevVNode) {
          callModelHook(el, binding, vnode, prevVNode, "updated");
        }
      };
      function resolveDynamicModel(tagName, type) {
        switch (tagName) {
          case "SELECT":
            return vModelSelect;
          case "TEXTAREA":
            return vModelText;
          default:
            switch (type) {
              case "checkbox":
                return vModelCheckbox;
              case "radio":
                return vModelRadio;
              default:
                return vModelText;
            }
        }
      }
      function callModelHook(el, binding, vnode, prevVNode, hook) {
        const modelToUse = resolveDynamicModel(
          el.tagName,
          vnode.props && vnode.props.type
        );
        const fn2 = modelToUse[hook];
        fn2 && fn2(el, binding, vnode, prevVNode);
      }
      function initVModelForSSR() {
        vModelText.getSSRProps = ({ value }) => ({ value });
        vModelRadio.getSSRProps = ({ value }, vnode) => {
          if (vnode.props && shared.looseEqual(vnode.props.value, value)) {
            return { checked: true };
          }
        };
        vModelCheckbox.getSSRProps = ({ value }, vnode) => {
          if (shared.isArray(value)) {
            if (vnode.props && shared.looseIndexOf(value, vnode.props.value) > -1) {
              return { checked: true };
            }
          } else if (shared.isSet(value)) {
            if (vnode.props && value.has(vnode.props.value)) {
              return { checked: true };
            }
          } else if (value) {
            return { checked: true };
          }
        };
        vModelDynamic.getSSRProps = (binding, vnode) => {
          if (typeof vnode.type !== "string") {
            return;
          }
          const modelToUse = resolveDynamicModel(
            vnode.type.toUpperCase(),
            vnode.props && vnode.props.type
          );
          if (modelToUse.getSSRProps) {
            return modelToUse.getSSRProps(binding, vnode);
          }
        };
      }
      var systemModifiers = ["ctrl", "shift", "alt", "meta"];
      var modifierGuards = {
        stop: (e) => e.stopPropagation(),
        prevent: (e) => e.preventDefault(),
        self: (e) => e.target !== e.currentTarget,
        ctrl: (e) => !e.ctrlKey,
        shift: (e) => !e.shiftKey,
        alt: (e) => !e.altKey,
        meta: (e) => !e.metaKey,
        left: (e) => "button" in e && e.button !== 0,
        middle: (e) => "button" in e && e.button !== 1,
        right: (e) => "button" in e && e.button !== 2,
        exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
      };
      var withModifiers = (fn2, modifiers) => {
        return (event, ...args) => {
          for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
              return;
          }
          return fn2(event, ...args);
        };
      };
      var keyNames = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
      };
      var withKeys = (fn2, modifiers) => {
        return (event) => {
          if (!("key" in event)) {
            return;
          }
          const eventKey = shared.hyphenate(event.key);
          if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
            return fn2(event);
          }
        };
      };
      var rendererOptions = /* @__PURE__ */ shared.extend({ patchProp }, nodeOps);
      var renderer;
      var enabledHydration = false;
      function ensureRenderer() {
        return renderer || (renderer = runtimeCore.createRenderer(rendererOptions));
      }
      function ensureHydrationRenderer() {
        renderer = enabledHydration ? renderer : runtimeCore.createHydrationRenderer(rendererOptions);
        enabledHydration = true;
        return renderer;
      }
      var render8 = (...args) => {
        ensureRenderer().render(...args);
      };
      var hydrate = (...args) => {
        ensureHydrationRenderer().hydrate(...args);
      };
      var createApp2 = (...args) => {
        const app = ensureRenderer().createApp(...args);
        {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
        }
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (!container)
            return;
          const component = app._component;
          if (!shared.isFunction(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
          }
          container.innerHTML = "";
          const proxy = mount(container, false, container instanceof SVGElement);
          if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
          }
          return proxy;
        };
        return app;
      };
      var createSSRApp = (...args) => {
        const app = ensureHydrationRenderer().createApp(...args);
        {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
        }
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (container) {
            return mount(container, true, container instanceof SVGElement);
          }
        };
        return app;
      };
      function injectNativeTagCheck(app) {
        Object.defineProperty(app.config, "isNativeTag", {
          value: (tag) => shared.isHTMLTag(tag) || shared.isSVGTag(tag),
          writable: false
        });
      }
      function injectCompilerOptionsCheck(app) {
        if (runtimeCore.isRuntimeOnly()) {
          const isCustomElement = app.config.isCustomElement;
          Object.defineProperty(app.config, "isCustomElement", {
            get() {
              return isCustomElement;
            },
            set() {
              runtimeCore.warn(
                `The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`
              );
            }
          });
          const compilerOptions = app.config.compilerOptions;
          const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
          Object.defineProperty(app.config, "compilerOptions", {
            get() {
              runtimeCore.warn(msg);
              return compilerOptions;
            },
            set() {
              runtimeCore.warn(msg);
            }
          });
        }
      }
      function normalizeContainer(container) {
        if (shared.isString(container)) {
          const res = document.querySelector(container);
          if (!res) {
            runtimeCore.warn(
              `Failed to mount app: mount target selector "${container}" returned null.`
            );
          }
          return res;
        }
        if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
          runtimeCore.warn(
            `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`
          );
        }
        return container;
      }
      var ssrDirectiveInitialized = false;
      var initDirectivesForSSR = () => {
        if (!ssrDirectiveInitialized) {
          ssrDirectiveInitialized = true;
          initVModelForSSR();
          initVShowForSSR();
        }
      };
      exports.Transition = Transition;
      exports.TransitionGroup = TransitionGroup;
      exports.VueElement = VueElement;
      exports.createApp = createApp2;
      exports.createSSRApp = createSSRApp;
      exports.defineCustomElement = defineCustomElement;
      exports.defineSSRCustomElement = defineSSRCustomElement;
      exports.hydrate = hydrate;
      exports.initDirectivesForSSR = initDirectivesForSSR;
      exports.render = render8;
      exports.useCssModule = useCssModule;
      exports.useCssVars = useCssVars;
      exports.vModelCheckbox = vModelCheckbox;
      exports.vModelDynamic = vModelDynamic;
      exports.vModelRadio = vModelRadio;
      exports.vModelSelect = vModelSelect;
      exports.vModelText = vModelText;
      exports.vShow = vShow;
      exports.withKeys = withKeys;
      exports.withModifiers = withModifiers;
      Object.keys(runtimeCore).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
          exports[k] = runtimeCore[k];
      });
    }
  });

  // node_modules/@vue/runtime-dom/index.js
  var require_runtime_dom = __commonJS({
    "node_modules/@vue/runtime-dom/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_runtime_dom_cjs();
      }
    }
  });

  // node_modules/cropperjs/dist/cropper.js
  var require_cropper = __commonJS({
    "node_modules/cropperjs/dist/cropper.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.Cropper = factory());
      })(exports, function() {
        "use strict";
        function ownKeys(e, r) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function(r2) {
              return Object.getOwnPropertyDescriptor(e, r2).enumerable;
            })), t.push.apply(t, o);
          }
          return t;
        }
        function _objectSpread2(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
              _defineProperty(e, r2, t[r2]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
              Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
            });
          }
          return e;
        }
        function _typeof(o) {
          "@babel/helpers - typeof";
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
            return typeof o2;
          } : function(o2) {
            return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
          }, _typeof(o);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", {
            writable: false
          });
          return Constructor;
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return _arrayLikeToArray(arr);
        }
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++)
            arr2[i] = arr[i];
          return arr2;
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _toPrimitive(input, hint) {
          if (typeof input !== "object" || input === null)
            return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== void 0) {
            var res = prim.call(input, hint || "default");
            if (typeof res !== "object")
              return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return typeof key === "symbol" ? key : String(key);
        }
        var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
        var WINDOW = IS_BROWSER ? window : {};
        var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
        var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
        var NAMESPACE = "cropper";
        var ACTION_ALL = "all";
        var ACTION_CROP = "crop";
        var ACTION_MOVE = "move";
        var ACTION_ZOOM = "zoom";
        var ACTION_EAST = "e";
        var ACTION_WEST = "w";
        var ACTION_SOUTH = "s";
        var ACTION_NORTH = "n";
        var ACTION_NORTH_EAST = "ne";
        var ACTION_NORTH_WEST = "nw";
        var ACTION_SOUTH_EAST = "se";
        var ACTION_SOUTH_WEST = "sw";
        var CLASS_CROP = "".concat(NAMESPACE, "-crop");
        var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
        var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
        var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
        var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
        var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
        var CLASS_MOVE = "".concat(NAMESPACE, "-move");
        var DATA_ACTION = "".concat(NAMESPACE, "Action");
        var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");
        var DRAG_MODE_CROP = "crop";
        var DRAG_MODE_MOVE = "move";
        var DRAG_MODE_NONE = "none";
        var EVENT_CROP = "crop";
        var EVENT_CROP_END = "cropend";
        var EVENT_CROP_MOVE = "cropmove";
        var EVENT_CROP_START = "cropstart";
        var EVENT_DBLCLICK = "dblclick";
        var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
        var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
        var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
        var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
        var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
        var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
        var EVENT_READY = "ready";
        var EVENT_RESIZE = "resize";
        var EVENT_WHEEL = "wheel";
        var EVENT_ZOOM = "zoom";
        var MIME_TYPE_JPEG = "image/jpeg";
        var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
        var REGEXP_DATA_URL = /^data:/;
        var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
        var REGEXP_TAG_NAME = /^img|canvas$/i;
        var MIN_CONTAINER_WIDTH = 200;
        var MIN_CONTAINER_HEIGHT = 100;
        var DEFAULTS = {
          viewMode: 0,
          dragMode: DRAG_MODE_CROP,
          initialAspectRatio: NaN,
          aspectRatio: NaN,
          data: null,
          preview: "",
          responsive: true,
          restore: true,
          checkCrossOrigin: true,
          checkOrientation: true,
          modal: true,
          guides: true,
          center: true,
          highlight: true,
          background: true,
          autoCrop: true,
          autoCropArea: 0.8,
          movable: true,
          rotatable: true,
          scalable: true,
          zoomable: true,
          zoomOnTouch: true,
          zoomOnWheel: true,
          wheelZoomRatio: 0.1,
          cropBoxMovable: true,
          cropBoxResizable: true,
          toggleDragModeOnDblclick: true,
          minCanvasWidth: 0,
          minCanvasHeight: 0,
          minCropBoxWidth: 0,
          minCropBoxHeight: 0,
          minContainerWidth: MIN_CONTAINER_WIDTH,
          minContainerHeight: MIN_CONTAINER_HEIGHT,
          ready: null,
          cropstart: null,
          cropmove: null,
          cropend: null,
          crop: null,
          zoom: null
        };
        var TEMPLATE = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
        var isNaN2 = Number.isNaN || WINDOW.isNaN;
        function isNumber(value) {
          return typeof value === "number" && !isNaN2(value);
        }
        var isPositiveNumber = function isPositiveNumber2(value) {
          return value > 0 && value < Infinity;
        };
        function isUndefined(value) {
          return typeof value === "undefined";
        }
        function isObject(value) {
          return _typeof(value) === "object" && value !== null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function isPlainObject(value) {
          if (!isObject(value)) {
            return false;
          }
          try {
            var _constructor = value.constructor;
            var prototype = _constructor.prototype;
            return _constructor && prototype && hasOwnProperty.call(prototype, "isPrototypeOf");
          } catch (error) {
            return false;
          }
        }
        function isFunction(value) {
          return typeof value === "function";
        }
        var slice = Array.prototype.slice;
        function toArray(value) {
          return Array.from ? Array.from(value) : slice.call(value);
        }
        function forEach(data, callback) {
          if (data && isFunction(callback)) {
            if (Array.isArray(data) || isNumber(data.length)) {
              toArray(data).forEach(function(value, key) {
                callback.call(data, value, key, data);
              });
            } else if (isObject(data)) {
              Object.keys(data).forEach(function(key) {
                callback.call(data, data[key], key, data);
              });
            }
          }
          return data;
        }
        var assign = Object.assign || function assign2(target) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (isObject(target) && args.length > 0) {
            args.forEach(function(arg) {
              if (isObject(arg)) {
                Object.keys(arg).forEach(function(key) {
                  target[key] = arg[key];
                });
              }
            });
          }
          return target;
        };
        var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
        function normalizeDecimalNumber(value) {
          var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
          return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
        }
        var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
        function setStyle(element, styles) {
          var style = element.style;
          forEach(styles, function(value, property) {
            if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
              value = "".concat(value, "px");
            }
            style[property] = value;
          });
        }
        function hasClass(element, value) {
          return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
        }
        function addClass(element, value) {
          if (!value) {
            return;
          }
          if (isNumber(element.length)) {
            forEach(element, function(elem) {
              addClass(elem, value);
            });
            return;
          }
          if (element.classList) {
            element.classList.add(value);
            return;
          }
          var className = element.className.trim();
          if (!className) {
            element.className = value;
          } else if (className.indexOf(value) < 0) {
            element.className = "".concat(className, " ").concat(value);
          }
        }
        function removeClass(element, value) {
          if (!value) {
            return;
          }
          if (isNumber(element.length)) {
            forEach(element, function(elem) {
              removeClass(elem, value);
            });
            return;
          }
          if (element.classList) {
            element.classList.remove(value);
            return;
          }
          if (element.className.indexOf(value) >= 0) {
            element.className = element.className.replace(value, "");
          }
        }
        function toggleClass(element, value, added) {
          if (!value) {
            return;
          }
          if (isNumber(element.length)) {
            forEach(element, function(elem) {
              toggleClass(elem, value, added);
            });
            return;
          }
          if (added) {
            addClass(element, value);
          } else {
            removeClass(element, value);
          }
        }
        var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
        function toParamCase(value) {
          return value.replace(REGEXP_CAMEL_CASE, "$1-$2").toLowerCase();
        }
        function getData(element, name) {
          if (isObject(element[name])) {
            return element[name];
          }
          if (element.dataset) {
            return element.dataset[name];
          }
          return element.getAttribute("data-".concat(toParamCase(name)));
        }
        function setData(element, name, data) {
          if (isObject(data)) {
            element[name] = data;
          } else if (element.dataset) {
            element.dataset[name] = data;
          } else {
            element.setAttribute("data-".concat(toParamCase(name)), data);
          }
        }
        function removeData(element, name) {
          if (isObject(element[name])) {
            try {
              delete element[name];
            } catch (error) {
              element[name] = void 0;
            }
          } else if (element.dataset) {
            try {
              delete element.dataset[name];
            } catch (error) {
              element.dataset[name] = void 0;
            }
          } else {
            element.removeAttribute("data-".concat(toParamCase(name)));
          }
        }
        var REGEXP_SPACES = /\s\s*/;
        var onceSupported = function() {
          var supported = false;
          if (IS_BROWSER) {
            var once = false;
            var listener = function listener2() {
            };
            var options = Object.defineProperty({}, "once", {
              get: function get() {
                supported = true;
                return once;
              },
              set: function set(value) {
                once = value;
              }
            });
            WINDOW.addEventListener("test", listener, options);
            WINDOW.removeEventListener("test", listener, options);
          }
          return supported;
        }();
        function removeListener(element, type, listener) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var handler = listener;
          type.trim().split(REGEXP_SPACES).forEach(function(event) {
            if (!onceSupported) {
              var listeners = element.listeners;
              if (listeners && listeners[event] && listeners[event][listener]) {
                handler = listeners[event][listener];
                delete listeners[event][listener];
                if (Object.keys(listeners[event]).length === 0) {
                  delete listeners[event];
                }
                if (Object.keys(listeners).length === 0) {
                  delete element.listeners;
                }
              }
            }
            element.removeEventListener(event, handler, options);
          });
        }
        function addListener(element, type, listener) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var _handler = listener;
          type.trim().split(REGEXP_SPACES).forEach(function(event) {
            if (options.once && !onceSupported) {
              var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
              _handler = function handler() {
                delete listeners[event][listener];
                element.removeEventListener(event, _handler, options);
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }
                listener.apply(element, args);
              };
              if (!listeners[event]) {
                listeners[event] = {};
              }
              if (listeners[event][listener]) {
                element.removeEventListener(event, listeners[event][listener], options);
              }
              listeners[event][listener] = _handler;
              element.listeners = listeners;
            }
            element.addEventListener(event, _handler, options);
          });
        }
        function dispatchEvent(element, type, data) {
          var event;
          if (isFunction(Event) && isFunction(CustomEvent)) {
            event = new CustomEvent(type, {
              detail: data,
              bubbles: true,
              cancelable: true
            });
          } else {
            event = document.createEvent("CustomEvent");
            event.initCustomEvent(type, true, true, data);
          }
          return element.dispatchEvent(event);
        }
        function getOffset(element) {
          var box = element.getBoundingClientRect();
          return {
            left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
            top: box.top + (window.pageYOffset - document.documentElement.clientTop)
          };
        }
        var location = WINDOW.location;
        var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
        function isCrossOriginURL(url) {
          var parts = url.match(REGEXP_ORIGINS);
          return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
        }
        function addTimestamp(url) {
          var timestamp = "timestamp=".concat(new Date().getTime());
          return url + (url.indexOf("?") === -1 ? "?" : "&") + timestamp;
        }
        function getTransforms(_ref) {
          var rotate = _ref.rotate, scaleX = _ref.scaleX, scaleY = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
          var values = [];
          if (isNumber(translateX) && translateX !== 0) {
            values.push("translateX(".concat(translateX, "px)"));
          }
          if (isNumber(translateY) && translateY !== 0) {
            values.push("translateY(".concat(translateY, "px)"));
          }
          if (isNumber(rotate) && rotate !== 0) {
            values.push("rotate(".concat(rotate, "deg)"));
          }
          if (isNumber(scaleX) && scaleX !== 1) {
            values.push("scaleX(".concat(scaleX, ")"));
          }
          if (isNumber(scaleY) && scaleY !== 1) {
            values.push("scaleY(".concat(scaleY, ")"));
          }
          var transform = values.length ? values.join(" ") : "none";
          return {
            WebkitTransform: transform,
            msTransform: transform,
            transform
          };
        }
        function getMaxZoomRatio(pointers) {
          var pointers2 = _objectSpread2({}, pointers);
          var maxRatio = 0;
          forEach(pointers, function(pointer, pointerId) {
            delete pointers2[pointerId];
            forEach(pointers2, function(pointer2) {
              var x1 = Math.abs(pointer.startX - pointer2.startX);
              var y1 = Math.abs(pointer.startY - pointer2.startY);
              var x2 = Math.abs(pointer.endX - pointer2.endX);
              var y2 = Math.abs(pointer.endY - pointer2.endY);
              var z1 = Math.sqrt(x1 * x1 + y1 * y1);
              var z2 = Math.sqrt(x2 * x2 + y2 * y2);
              var ratio = (z2 - z1) / z1;
              if (Math.abs(ratio) > Math.abs(maxRatio)) {
                maxRatio = ratio;
              }
            });
          });
          return maxRatio;
        }
        function getPointer(_ref2, endOnly) {
          var pageX = _ref2.pageX, pageY = _ref2.pageY;
          var end2 = {
            endX: pageX,
            endY: pageY
          };
          return endOnly ? end2 : _objectSpread2({
            startX: pageX,
            startY: pageY
          }, end2);
        }
        function getPointersCenter(pointers) {
          var pageX = 0;
          var pageY = 0;
          var count = 0;
          forEach(pointers, function(_ref3) {
            var startX = _ref3.startX, startY = _ref3.startY;
            pageX += startX;
            pageY += startY;
            count += 1;
          });
          pageX /= count;
          pageY /= count;
          return {
            pageX,
            pageY
          };
        }
        function getAdjustedSizes(_ref4) {
          var aspectRatio = _ref4.aspectRatio, height = _ref4.height, width = _ref4.width;
          var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain";
          var isValidWidth = isPositiveNumber(width);
          var isValidHeight = isPositiveNumber(height);
          if (isValidWidth && isValidHeight) {
            var adjustedWidth = height * aspectRatio;
            if (type === "contain" && adjustedWidth > width || type === "cover" && adjustedWidth < width) {
              height = width / aspectRatio;
            } else {
              width = height * aspectRatio;
            }
          } else if (isValidWidth) {
            height = width / aspectRatio;
          } else if (isValidHeight) {
            width = height * aspectRatio;
          }
          return {
            width,
            height
          };
        }
        function getRotatedSizes(_ref5) {
          var width = _ref5.width, height = _ref5.height, degree = _ref5.degree;
          degree = Math.abs(degree) % 180;
          if (degree === 90) {
            return {
              width: height,
              height: width
            };
          }
          var arc = degree % 90 * Math.PI / 180;
          var sinArc = Math.sin(arc);
          var cosArc = Math.cos(arc);
          var newWidth = width * cosArc + height * sinArc;
          var newHeight = width * sinArc + height * cosArc;
          return degree > 90 ? {
            width: newHeight,
            height: newWidth
          } : {
            width: newWidth,
            height: newHeight
          };
        }
        function getSourceCanvas(image, _ref6, _ref7, _ref8) {
          var imageAspectRatio = _ref6.aspectRatio, imageNaturalWidth = _ref6.naturalWidth, imageNaturalHeight = _ref6.naturalHeight, _ref6$rotate = _ref6.rotate, rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate, _ref6$scaleX = _ref6.scaleX, scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX, _ref6$scaleY = _ref6.scaleY, scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
          var aspectRatio = _ref7.aspectRatio, naturalWidth = _ref7.naturalWidth, naturalHeight = _ref7.naturalHeight;
          var _ref8$fillColor = _ref8.fillColor, fillColor = _ref8$fillColor === void 0 ? "transparent" : _ref8$fillColor, _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled, imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE, _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality, imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? "low" : _ref8$imageSmoothingQ, _ref8$maxWidth = _ref8.maxWidth, maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth, _ref8$maxHeight = _ref8.maxHeight, maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight, _ref8$minWidth = _ref8.minWidth, minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth, _ref8$minHeight = _ref8.minHeight, minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");
          var maxSizes = getAdjustedSizes({
            aspectRatio,
            width: maxWidth,
            height: maxHeight
          });
          var minSizes = getAdjustedSizes({
            aspectRatio,
            width: minWidth,
            height: minHeight
          }, "cover");
          var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
          var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));
          var destMaxSizes = getAdjustedSizes({
            aspectRatio: imageAspectRatio,
            width: maxWidth,
            height: maxHeight
          });
          var destMinSizes = getAdjustedSizes({
            aspectRatio: imageAspectRatio,
            width: minWidth,
            height: minHeight
          }, "cover");
          var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
          var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
          var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
          canvas.width = normalizeDecimalNumber(width);
          canvas.height = normalizeDecimalNumber(height);
          context.fillStyle = fillColor;
          context.fillRect(0, 0, width, height);
          context.save();
          context.translate(width / 2, height / 2);
          context.rotate(rotate * Math.PI / 180);
          context.scale(scaleX, scaleY);
          context.imageSmoothingEnabled = imageSmoothingEnabled;
          context.imageSmoothingQuality = imageSmoothingQuality;
          context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function(param) {
            return Math.floor(normalizeDecimalNumber(param));
          }))));
          context.restore();
          return canvas;
        }
        var fromCharCode = String.fromCharCode;
        function getStringFromCharCode(dataView, start2, length) {
          var str = "";
          length += start2;
          for (var i = start2; i < length; i += 1) {
            str += fromCharCode(dataView.getUint8(i));
          }
          return str;
        }
        var REGEXP_DATA_URL_HEAD = /^data:.*,/;
        function dataURLToArrayBuffer(dataURL) {
          var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, "");
          var binary = atob(base64);
          var arrayBuffer = new ArrayBuffer(binary.length);
          var uint8 = new Uint8Array(arrayBuffer);
          forEach(uint8, function(value, i) {
            uint8[i] = binary.charCodeAt(i);
          });
          return arrayBuffer;
        }
        function arrayBufferToDataURL(arrayBuffer, mimeType) {
          var chunks = [];
          var chunkSize = 8192;
          var uint8 = new Uint8Array(arrayBuffer);
          while (uint8.length > 0) {
            chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
            uint8 = uint8.subarray(chunkSize);
          }
          return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join("")));
        }
        function resetAndGetOrientation(arrayBuffer) {
          var dataView = new DataView(arrayBuffer);
          var orientation;
          try {
            var littleEndian;
            var app1Start;
            var ifdStart;
            if (dataView.getUint8(0) === 255 && dataView.getUint8(1) === 216) {
              var length = dataView.byteLength;
              var offset2 = 2;
              while (offset2 + 1 < length) {
                if (dataView.getUint8(offset2) === 255 && dataView.getUint8(offset2 + 1) === 225) {
                  app1Start = offset2;
                  break;
                }
                offset2 += 1;
              }
            }
            if (app1Start) {
              var exifIDCode = app1Start + 4;
              var tiffOffset = app1Start + 10;
              if (getStringFromCharCode(dataView, exifIDCode, 4) === "Exif") {
                var endianness = dataView.getUint16(tiffOffset);
                littleEndian = endianness === 18761;
                if (littleEndian || endianness === 19789) {
                  if (dataView.getUint16(tiffOffset + 2, littleEndian) === 42) {
                    var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                    if (firstIFDOffset >= 8) {
                      ifdStart = tiffOffset + firstIFDOffset;
                    }
                  }
                }
              }
            }
            if (ifdStart) {
              var _length = dataView.getUint16(ifdStart, littleEndian);
              var _offset;
              var i;
              for (i = 0; i < _length; i += 1) {
                _offset = ifdStart + i * 12 + 2;
                if (dataView.getUint16(_offset, littleEndian) === 274) {
                  _offset += 8;
                  orientation = dataView.getUint16(_offset, littleEndian);
                  dataView.setUint16(_offset, 1, littleEndian);
                  break;
                }
              }
            }
          } catch (error) {
            orientation = 1;
          }
          return orientation;
        }
        function parseOrientation(orientation) {
          var rotate = 0;
          var scaleX = 1;
          var scaleY = 1;
          switch (orientation) {
            case 2:
              scaleX = -1;
              break;
            case 3:
              rotate = -180;
              break;
            case 4:
              scaleY = -1;
              break;
            case 5:
              rotate = 90;
              scaleY = -1;
              break;
            case 6:
              rotate = 90;
              break;
            case 7:
              rotate = 90;
              scaleX = -1;
              break;
            case 8:
              rotate = -90;
              break;
          }
          return {
            rotate,
            scaleX,
            scaleY
          };
        }
        var render8 = {
          render: function render9() {
            this.initContainer();
            this.initCanvas();
            this.initCropBox();
            this.renderCanvas();
            if (this.cropped) {
              this.renderCropBox();
            }
          },
          initContainer: function initContainer() {
            var element = this.element, options = this.options, container = this.container, cropper = this.cropper;
            var minWidth = Number(options.minContainerWidth);
            var minHeight = Number(options.minContainerHeight);
            addClass(cropper, CLASS_HIDDEN);
            removeClass(element, CLASS_HIDDEN);
            var containerData = {
              width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
              height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
            };
            this.containerData = containerData;
            setStyle(cropper, {
              width: containerData.width,
              height: containerData.height
            });
            addClass(element, CLASS_HIDDEN);
            removeClass(cropper, CLASS_HIDDEN);
          },
          initCanvas: function initCanvas() {
            var containerData = this.containerData, imageData = this.imageData;
            var viewMode = this.options.viewMode;
            var rotated = Math.abs(imageData.rotate) % 180 === 90;
            var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
            var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
            var aspectRatio = naturalWidth / naturalHeight;
            var canvasWidth = containerData.width;
            var canvasHeight = containerData.height;
            if (containerData.height * aspectRatio > containerData.width) {
              if (viewMode === 3) {
                canvasWidth = containerData.height * aspectRatio;
              } else {
                canvasHeight = containerData.width / aspectRatio;
              }
            } else if (viewMode === 3) {
              canvasHeight = containerData.width / aspectRatio;
            } else {
              canvasWidth = containerData.height * aspectRatio;
            }
            var canvasData = {
              aspectRatio,
              naturalWidth,
              naturalHeight,
              width: canvasWidth,
              height: canvasHeight
            };
            this.canvasData = canvasData;
            this.limited = viewMode === 1 || viewMode === 2;
            this.limitCanvas(true, true);
            canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
            canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
            canvasData.left = (containerData.width - canvasData.width) / 2;
            canvasData.top = (containerData.height - canvasData.height) / 2;
            canvasData.oldLeft = canvasData.left;
            canvasData.oldTop = canvasData.top;
            this.initialCanvasData = assign({}, canvasData);
          },
          limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
            var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var viewMode = options.viewMode;
            var aspectRatio = canvasData.aspectRatio;
            var cropped = this.cropped && cropBoxData;
            if (sizeLimited) {
              var minCanvasWidth = Number(options.minCanvasWidth) || 0;
              var minCanvasHeight = Number(options.minCanvasHeight) || 0;
              if (viewMode > 1) {
                minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
                minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
                if (viewMode === 3) {
                  if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                    minCanvasWidth = minCanvasHeight * aspectRatio;
                  } else {
                    minCanvasHeight = minCanvasWidth / aspectRatio;
                  }
                }
              } else if (viewMode > 0) {
                if (minCanvasWidth) {
                  minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
                } else if (minCanvasHeight) {
                  minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
                } else if (cropped) {
                  minCanvasWidth = cropBoxData.width;
                  minCanvasHeight = cropBoxData.height;
                  if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                    minCanvasWidth = minCanvasHeight * aspectRatio;
                  } else {
                    minCanvasHeight = minCanvasWidth / aspectRatio;
                  }
                }
              }
              var _getAdjustedSizes = getAdjustedSizes({
                aspectRatio,
                width: minCanvasWidth,
                height: minCanvasHeight
              });
              minCanvasWidth = _getAdjustedSizes.width;
              minCanvasHeight = _getAdjustedSizes.height;
              canvasData.minWidth = minCanvasWidth;
              canvasData.minHeight = minCanvasHeight;
              canvasData.maxWidth = Infinity;
              canvasData.maxHeight = Infinity;
            }
            if (positionLimited) {
              if (viewMode > (cropped ? 0 : 1)) {
                var newCanvasLeft = containerData.width - canvasData.width;
                var newCanvasTop = containerData.height - canvasData.height;
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
                canvasData.maxTop = Math.max(0, newCanvasTop);
                if (cropped && this.limited) {
                  canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
                  canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
                  canvasData.maxLeft = cropBoxData.left;
                  canvasData.maxTop = cropBoxData.top;
                  if (viewMode === 2) {
                    if (canvasData.width >= containerData.width) {
                      canvasData.minLeft = Math.min(0, newCanvasLeft);
                      canvasData.maxLeft = Math.max(0, newCanvasLeft);
                    }
                    if (canvasData.height >= containerData.height) {
                      canvasData.minTop = Math.min(0, newCanvasTop);
                      canvasData.maxTop = Math.max(0, newCanvasTop);
                    }
                  }
                }
              } else {
                canvasData.minLeft = -canvasData.width;
                canvasData.minTop = -canvasData.height;
                canvasData.maxLeft = containerData.width;
                canvasData.maxTop = containerData.height;
              }
            }
          },
          renderCanvas: function renderCanvas(changed, transformed) {
            var canvasData = this.canvasData, imageData = this.imageData;
            if (transformed) {
              var _getRotatedSizes = getRotatedSizes({
                width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
                height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
                degree: imageData.rotate || 0
              }), naturalWidth = _getRotatedSizes.width, naturalHeight = _getRotatedSizes.height;
              var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
              var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
              canvasData.left -= (width - canvasData.width) / 2;
              canvasData.top -= (height - canvasData.height) / 2;
              canvasData.width = width;
              canvasData.height = height;
              canvasData.aspectRatio = naturalWidth / naturalHeight;
              canvasData.naturalWidth = naturalWidth;
              canvasData.naturalHeight = naturalHeight;
              this.limitCanvas(true, false);
            }
            if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
              canvasData.left = canvasData.oldLeft;
            }
            if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
              canvasData.top = canvasData.oldTop;
            }
            canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
            canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
            this.limitCanvas(false, true);
            canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
            canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
            canvasData.oldLeft = canvasData.left;
            canvasData.oldTop = canvasData.top;
            setStyle(this.canvas, assign({
              width: canvasData.width,
              height: canvasData.height
            }, getTransforms({
              translateX: canvasData.left,
              translateY: canvasData.top
            })));
            this.renderImage(changed);
            if (this.cropped && this.limited) {
              this.limitCropBox(true, true);
            }
          },
          renderImage: function renderImage(changed) {
            var canvasData = this.canvasData, imageData = this.imageData;
            var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
            var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
            assign(imageData, {
              width,
              height,
              left: (canvasData.width - width) / 2,
              top: (canvasData.height - height) / 2
            });
            setStyle(this.image, assign({
              width: imageData.width,
              height: imageData.height
            }, getTransforms(assign({
              translateX: imageData.left,
              translateY: imageData.top
            }, imageData))));
            if (changed) {
              this.output();
            }
          },
          initCropBox: function initCropBox() {
            var options = this.options, canvasData = this.canvasData;
            var aspectRatio = options.aspectRatio || options.initialAspectRatio;
            var autoCropArea = Number(options.autoCropArea) || 0.8;
            var cropBoxData = {
              width: canvasData.width,
              height: canvasData.height
            };
            if (aspectRatio) {
              if (canvasData.height * aspectRatio > canvasData.width) {
                cropBoxData.height = cropBoxData.width / aspectRatio;
              } else {
                cropBoxData.width = cropBoxData.height * aspectRatio;
              }
            }
            this.cropBoxData = cropBoxData;
            this.limitCropBox(true, true);
            cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
            cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
            cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
            cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
            cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
            cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
            cropBoxData.oldLeft = cropBoxData.left;
            cropBoxData.oldTop = cropBoxData.top;
            this.initialCropBoxData = assign({}, cropBoxData);
          },
          limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
            var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData, limited = this.limited;
            var aspectRatio = options.aspectRatio;
            if (sizeLimited) {
              var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
              var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
              var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
              var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;
              minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
              minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
              if (aspectRatio) {
                if (minCropBoxWidth && minCropBoxHeight) {
                  if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
                    minCropBoxHeight = minCropBoxWidth / aspectRatio;
                  } else {
                    minCropBoxWidth = minCropBoxHeight * aspectRatio;
                  }
                } else if (minCropBoxWidth) {
                  minCropBoxHeight = minCropBoxWidth / aspectRatio;
                } else if (minCropBoxHeight) {
                  minCropBoxWidth = minCropBoxHeight * aspectRatio;
                }
                if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
                  maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
                } else {
                  maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
                }
              }
              cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
              cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
              cropBoxData.maxWidth = maxCropBoxWidth;
              cropBoxData.maxHeight = maxCropBoxHeight;
            }
            if (positionLimited) {
              if (limited) {
                cropBoxData.minLeft = Math.max(0, canvasData.left);
                cropBoxData.minTop = Math.max(0, canvasData.top);
                cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
                cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
              } else {
                cropBoxData.minLeft = 0;
                cropBoxData.minTop = 0;
                cropBoxData.maxLeft = containerData.width - cropBoxData.width;
                cropBoxData.maxTop = containerData.height - cropBoxData.height;
              }
            }
          },
          renderCropBox: function renderCropBox() {
            var options = this.options, containerData = this.containerData, cropBoxData = this.cropBoxData;
            if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
              cropBoxData.left = cropBoxData.oldLeft;
            }
            if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
              cropBoxData.top = cropBoxData.oldTop;
            }
            cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
            cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
            this.limitCropBox(false, true);
            cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
            cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
            cropBoxData.oldLeft = cropBoxData.left;
            cropBoxData.oldTop = cropBoxData.top;
            if (options.movable && options.cropBoxMovable) {
              setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
            }
            setStyle(this.cropBox, assign({
              width: cropBoxData.width,
              height: cropBoxData.height
            }, getTransforms({
              translateX: cropBoxData.left,
              translateY: cropBoxData.top
            })));
            if (this.cropped && this.limited) {
              this.limitCanvas(true, true);
            }
            if (!this.disabled) {
              this.output();
            }
          },
          output: function output() {
            this.preview();
            dispatchEvent(this.element, EVENT_CROP, this.getData());
          }
        };
        var preview = {
          initPreview: function initPreview() {
            var element = this.element, crossOrigin = this.crossOrigin;
            var preview2 = this.options.preview;
            var url = crossOrigin ? this.crossOriginUrl : this.url;
            var alt = element.alt || "The image to preview";
            var image = document.createElement("img");
            if (crossOrigin) {
              image.crossOrigin = crossOrigin;
            }
            image.src = url;
            image.alt = alt;
            this.viewBox.appendChild(image);
            this.viewBoxImage = image;
            if (!preview2) {
              return;
            }
            var previews = preview2;
            if (typeof preview2 === "string") {
              previews = element.ownerDocument.querySelectorAll(preview2);
            } else if (preview2.querySelector) {
              previews = [preview2];
            }
            this.previews = previews;
            forEach(previews, function(el) {
              var img = document.createElement("img");
              setData(el, DATA_PREVIEW, {
                width: el.offsetWidth,
                height: el.offsetHeight,
                html: el.innerHTML
              });
              if (crossOrigin) {
                img.crossOrigin = crossOrigin;
              }
              img.src = url;
              img.alt = alt;
              img.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"';
              el.innerHTML = "";
              el.appendChild(img);
            });
          },
          resetPreview: function resetPreview() {
            forEach(this.previews, function(element) {
              var data = getData(element, DATA_PREVIEW);
              setStyle(element, {
                width: data.width,
                height: data.height
              });
              element.innerHTML = data.html;
              removeData(element, DATA_PREVIEW);
            });
          },
          preview: function preview2() {
            var imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var cropBoxWidth = cropBoxData.width, cropBoxHeight = cropBoxData.height;
            var width = imageData.width, height = imageData.height;
            var left2 = cropBoxData.left - canvasData.left - imageData.left;
            var top2 = cropBoxData.top - canvasData.top - imageData.top;
            if (!this.cropped || this.disabled) {
              return;
            }
            setStyle(this.viewBoxImage, assign({
              width,
              height
            }, getTransforms(assign({
              translateX: -left2,
              translateY: -top2
            }, imageData))));
            forEach(this.previews, function(element) {
              var data = getData(element, DATA_PREVIEW);
              var originalWidth = data.width;
              var originalHeight = data.height;
              var newWidth = originalWidth;
              var newHeight = originalHeight;
              var ratio = 1;
              if (cropBoxWidth) {
                ratio = originalWidth / cropBoxWidth;
                newHeight = cropBoxHeight * ratio;
              }
              if (cropBoxHeight && newHeight > originalHeight) {
                ratio = originalHeight / cropBoxHeight;
                newWidth = cropBoxWidth * ratio;
                newHeight = originalHeight;
              }
              setStyle(element, {
                width: newWidth,
                height: newHeight
              });
              setStyle(element.getElementsByTagName("img")[0], assign({
                width: width * ratio,
                height: height * ratio
              }, getTransforms(assign({
                translateX: -left2 * ratio,
                translateY: -top2 * ratio
              }, imageData))));
            });
          }
        };
        var events = {
          bind: function bind() {
            var element = this.element, options = this.options, cropper = this.cropper;
            if (isFunction(options.cropstart)) {
              addListener(element, EVENT_CROP_START, options.cropstart);
            }
            if (isFunction(options.cropmove)) {
              addListener(element, EVENT_CROP_MOVE, options.cropmove);
            }
            if (isFunction(options.cropend)) {
              addListener(element, EVENT_CROP_END, options.cropend);
            }
            if (isFunction(options.crop)) {
              addListener(element, EVENT_CROP, options.crop);
            }
            if (isFunction(options.zoom)) {
              addListener(element, EVENT_ZOOM, options.zoom);
            }
            addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
            if (options.zoomable && options.zoomOnWheel) {
              addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
                passive: false,
                capture: true
              });
            }
            if (options.toggleDragModeOnDblclick) {
              addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
            }
            addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
            addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
            if (options.responsive) {
              addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
            }
          },
          unbind: function unbind() {
            var element = this.element, options = this.options, cropper = this.cropper;
            if (isFunction(options.cropstart)) {
              removeListener(element, EVENT_CROP_START, options.cropstart);
            }
            if (isFunction(options.cropmove)) {
              removeListener(element, EVENT_CROP_MOVE, options.cropmove);
            }
            if (isFunction(options.cropend)) {
              removeListener(element, EVENT_CROP_END, options.cropend);
            }
            if (isFunction(options.crop)) {
              removeListener(element, EVENT_CROP, options.crop);
            }
            if (isFunction(options.zoom)) {
              removeListener(element, EVENT_ZOOM, options.zoom);
            }
            removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
            if (options.zoomable && options.zoomOnWheel) {
              removeListener(cropper, EVENT_WHEEL, this.onWheel, {
                passive: false,
                capture: true
              });
            }
            if (options.toggleDragModeOnDblclick) {
              removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
            }
            removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
            removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
            if (options.responsive) {
              removeListener(window, EVENT_RESIZE, this.onResize);
            }
          }
        };
        var handlers = {
          resize: function resize() {
            if (this.disabled) {
              return;
            }
            var options = this.options, container = this.container, containerData = this.containerData;
            var ratioX = container.offsetWidth / containerData.width;
            var ratioY = container.offsetHeight / containerData.height;
            var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;
            if (ratio !== 1) {
              var canvasData;
              var cropBoxData;
              if (options.restore) {
                canvasData = this.getCanvasData();
                cropBoxData = this.getCropBoxData();
              }
              this.render();
              if (options.restore) {
                this.setCanvasData(forEach(canvasData, function(n, i) {
                  canvasData[i] = n * ratio;
                }));
                this.setCropBoxData(forEach(cropBoxData, function(n, i) {
                  cropBoxData[i] = n * ratio;
                }));
              }
            }
          },
          dblclick: function dblclick() {
            if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
              return;
            }
            this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
          },
          wheel: function wheel(event) {
            var _this = this;
            var ratio = Number(this.options.wheelZoomRatio) || 0.1;
            var delta = 1;
            if (this.disabled) {
              return;
            }
            event.preventDefault();
            if (this.wheeling) {
              return;
            }
            this.wheeling = true;
            setTimeout(function() {
              _this.wheeling = false;
            }, 50);
            if (event.deltaY) {
              delta = event.deltaY > 0 ? 1 : -1;
            } else if (event.wheelDelta) {
              delta = -event.wheelDelta / 120;
            } else if (event.detail) {
              delta = event.detail > 0 ? 1 : -1;
            }
            this.zoom(-delta * ratio, event);
          },
          cropStart: function cropStart(event) {
            var buttons = event.buttons, button = event.button;
            if (this.disabled || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
              return;
            }
            var options = this.options, pointers = this.pointers;
            var action;
            if (event.changedTouches) {
              forEach(event.changedTouches, function(touch) {
                pointers[touch.identifier] = getPointer(touch);
              });
            } else {
              pointers[event.pointerId || 0] = getPointer(event);
            }
            if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
              action = ACTION_ZOOM;
            } else {
              action = getData(event.target, DATA_ACTION);
            }
            if (!REGEXP_ACTIONS.test(action)) {
              return;
            }
            if (dispatchEvent(this.element, EVENT_CROP_START, {
              originalEvent: event,
              action
            }) === false) {
              return;
            }
            event.preventDefault();
            this.action = action;
            this.cropping = false;
            if (action === ACTION_CROP) {
              this.cropping = true;
              addClass(this.dragBox, CLASS_MODAL);
            }
          },
          cropMove: function cropMove(event) {
            var action = this.action;
            if (this.disabled || !action) {
              return;
            }
            var pointers = this.pointers;
            event.preventDefault();
            if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
              originalEvent: event,
              action
            }) === false) {
              return;
            }
            if (event.changedTouches) {
              forEach(event.changedTouches, function(touch) {
                assign(pointers[touch.identifier] || {}, getPointer(touch, true));
              });
            } else {
              assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
            }
            this.change(event);
          },
          cropEnd: function cropEnd(event) {
            if (this.disabled) {
              return;
            }
            var action = this.action, pointers = this.pointers;
            if (event.changedTouches) {
              forEach(event.changedTouches, function(touch) {
                delete pointers[touch.identifier];
              });
            } else {
              delete pointers[event.pointerId || 0];
            }
            if (!action) {
              return;
            }
            event.preventDefault();
            if (!Object.keys(pointers).length) {
              this.action = "";
            }
            if (this.cropping) {
              this.cropping = false;
              toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
            }
            dispatchEvent(this.element, EVENT_CROP_END, {
              originalEvent: event,
              action
            });
          }
        };
        var change = {
          change: function change2(event) {
            var options = this.options, canvasData = this.canvasData, containerData = this.containerData, cropBoxData = this.cropBoxData, pointers = this.pointers;
            var action = this.action;
            var aspectRatio = options.aspectRatio;
            var left2 = cropBoxData.left, top2 = cropBoxData.top, width = cropBoxData.width, height = cropBoxData.height;
            var right2 = left2 + width;
            var bottom2 = top2 + height;
            var minLeft = 0;
            var minTop = 0;
            var maxWidth = containerData.width;
            var maxHeight = containerData.height;
            var renderable = true;
            var offset2;
            if (!aspectRatio && event.shiftKey) {
              aspectRatio = width && height ? width / height : 1;
            }
            if (this.limited) {
              minLeft = cropBoxData.minLeft;
              minTop = cropBoxData.minTop;
              maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
              maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
            }
            var pointer = pointers[Object.keys(pointers)[0]];
            var range = {
              x: pointer.endX - pointer.startX,
              y: pointer.endY - pointer.startY
            };
            var check = function check2(side) {
              switch (side) {
                case ACTION_EAST:
                  if (right2 + range.x > maxWidth) {
                    range.x = maxWidth - right2;
                  }
                  break;
                case ACTION_WEST:
                  if (left2 + range.x < minLeft) {
                    range.x = minLeft - left2;
                  }
                  break;
                case ACTION_NORTH:
                  if (top2 + range.y < minTop) {
                    range.y = minTop - top2;
                  }
                  break;
                case ACTION_SOUTH:
                  if (bottom2 + range.y > maxHeight) {
                    range.y = maxHeight - bottom2;
                  }
                  break;
              }
            };
            switch (action) {
              case ACTION_ALL:
                left2 += range.x;
                top2 += range.y;
                break;
              case ACTION_EAST:
                if (range.x >= 0 && (right2 >= maxWidth || aspectRatio && (top2 <= minTop || bottom2 >= maxHeight))) {
                  renderable = false;
                  break;
                }
                check(ACTION_EAST);
                width += range.x;
                if (width < 0) {
                  action = ACTION_WEST;
                  width = -width;
                  left2 -= width;
                }
                if (aspectRatio) {
                  height = width / aspectRatio;
                  top2 += (cropBoxData.height - height) / 2;
                }
                break;
              case ACTION_NORTH:
                if (range.y <= 0 && (top2 <= minTop || aspectRatio && (left2 <= minLeft || right2 >= maxWidth))) {
                  renderable = false;
                  break;
                }
                check(ACTION_NORTH);
                height -= range.y;
                top2 += range.y;
                if (height < 0) {
                  action = ACTION_SOUTH;
                  height = -height;
                  top2 -= height;
                }
                if (aspectRatio) {
                  width = height * aspectRatio;
                  left2 += (cropBoxData.width - width) / 2;
                }
                break;
              case ACTION_WEST:
                if (range.x <= 0 && (left2 <= minLeft || aspectRatio && (top2 <= minTop || bottom2 >= maxHeight))) {
                  renderable = false;
                  break;
                }
                check(ACTION_WEST);
                width -= range.x;
                left2 += range.x;
                if (width < 0) {
                  action = ACTION_EAST;
                  width = -width;
                  left2 -= width;
                }
                if (aspectRatio) {
                  height = width / aspectRatio;
                  top2 += (cropBoxData.height - height) / 2;
                }
                break;
              case ACTION_SOUTH:
                if (range.y >= 0 && (bottom2 >= maxHeight || aspectRatio && (left2 <= minLeft || right2 >= maxWidth))) {
                  renderable = false;
                  break;
                }
                check(ACTION_SOUTH);
                height += range.y;
                if (height < 0) {
                  action = ACTION_NORTH;
                  height = -height;
                  top2 -= height;
                }
                if (aspectRatio) {
                  width = height * aspectRatio;
                  left2 += (cropBoxData.width - width) / 2;
                }
                break;
              case ACTION_NORTH_EAST:
                if (aspectRatio) {
                  if (range.y <= 0 && (top2 <= minTop || right2 >= maxWidth)) {
                    renderable = false;
                    break;
                  }
                  check(ACTION_NORTH);
                  height -= range.y;
                  top2 += range.y;
                  width = height * aspectRatio;
                } else {
                  check(ACTION_NORTH);
                  check(ACTION_EAST);
                  if (range.x >= 0) {
                    if (right2 < maxWidth) {
                      width += range.x;
                    } else if (range.y <= 0 && top2 <= minTop) {
                      renderable = false;
                    }
                  } else {
                    width += range.x;
                  }
                  if (range.y <= 0) {
                    if (top2 > minTop) {
                      height -= range.y;
                      top2 += range.y;
                    }
                  } else {
                    height -= range.y;
                    top2 += range.y;
                  }
                }
                if (width < 0 && height < 0) {
                  action = ACTION_SOUTH_WEST;
                  height = -height;
                  width = -width;
                  top2 -= height;
                  left2 -= width;
                } else if (width < 0) {
                  action = ACTION_NORTH_WEST;
                  width = -width;
                  left2 -= width;
                } else if (height < 0) {
                  action = ACTION_SOUTH_EAST;
                  height = -height;
                  top2 -= height;
                }
                break;
              case ACTION_NORTH_WEST:
                if (aspectRatio) {
                  if (range.y <= 0 && (top2 <= minTop || left2 <= minLeft)) {
                    renderable = false;
                    break;
                  }
                  check(ACTION_NORTH);
                  height -= range.y;
                  top2 += range.y;
                  width = height * aspectRatio;
                  left2 += cropBoxData.width - width;
                } else {
                  check(ACTION_NORTH);
                  check(ACTION_WEST);
                  if (range.x <= 0) {
                    if (left2 > minLeft) {
                      width -= range.x;
                      left2 += range.x;
                    } else if (range.y <= 0 && top2 <= minTop) {
                      renderable = false;
                    }
                  } else {
                    width -= range.x;
                    left2 += range.x;
                  }
                  if (range.y <= 0) {
                    if (top2 > minTop) {
                      height -= range.y;
                      top2 += range.y;
                    }
                  } else {
                    height -= range.y;
                    top2 += range.y;
                  }
                }
                if (width < 0 && height < 0) {
                  action = ACTION_SOUTH_EAST;
                  height = -height;
                  width = -width;
                  top2 -= height;
                  left2 -= width;
                } else if (width < 0) {
                  action = ACTION_NORTH_EAST;
                  width = -width;
                  left2 -= width;
                } else if (height < 0) {
                  action = ACTION_SOUTH_WEST;
                  height = -height;
                  top2 -= height;
                }
                break;
              case ACTION_SOUTH_WEST:
                if (aspectRatio) {
                  if (range.x <= 0 && (left2 <= minLeft || bottom2 >= maxHeight)) {
                    renderable = false;
                    break;
                  }
                  check(ACTION_WEST);
                  width -= range.x;
                  left2 += range.x;
                  height = width / aspectRatio;
                } else {
                  check(ACTION_SOUTH);
                  check(ACTION_WEST);
                  if (range.x <= 0) {
                    if (left2 > minLeft) {
                      width -= range.x;
                      left2 += range.x;
                    } else if (range.y >= 0 && bottom2 >= maxHeight) {
                      renderable = false;
                    }
                  } else {
                    width -= range.x;
                    left2 += range.x;
                  }
                  if (range.y >= 0) {
                    if (bottom2 < maxHeight) {
                      height += range.y;
                    }
                  } else {
                    height += range.y;
                  }
                }
                if (width < 0 && height < 0) {
                  action = ACTION_NORTH_EAST;
                  height = -height;
                  width = -width;
                  top2 -= height;
                  left2 -= width;
                } else if (width < 0) {
                  action = ACTION_SOUTH_EAST;
                  width = -width;
                  left2 -= width;
                } else if (height < 0) {
                  action = ACTION_NORTH_WEST;
                  height = -height;
                  top2 -= height;
                }
                break;
              case ACTION_SOUTH_EAST:
                if (aspectRatio) {
                  if (range.x >= 0 && (right2 >= maxWidth || bottom2 >= maxHeight)) {
                    renderable = false;
                    break;
                  }
                  check(ACTION_EAST);
                  width += range.x;
                  height = width / aspectRatio;
                } else {
                  check(ACTION_SOUTH);
                  check(ACTION_EAST);
                  if (range.x >= 0) {
                    if (right2 < maxWidth) {
                      width += range.x;
                    } else if (range.y >= 0 && bottom2 >= maxHeight) {
                      renderable = false;
                    }
                  } else {
                    width += range.x;
                  }
                  if (range.y >= 0) {
                    if (bottom2 < maxHeight) {
                      height += range.y;
                    }
                  } else {
                    height += range.y;
                  }
                }
                if (width < 0 && height < 0) {
                  action = ACTION_NORTH_WEST;
                  height = -height;
                  width = -width;
                  top2 -= height;
                  left2 -= width;
                } else if (width < 0) {
                  action = ACTION_SOUTH_WEST;
                  width = -width;
                  left2 -= width;
                } else if (height < 0) {
                  action = ACTION_NORTH_EAST;
                  height = -height;
                  top2 -= height;
                }
                break;
              case ACTION_MOVE:
                this.move(range.x, range.y);
                renderable = false;
                break;
              case ACTION_ZOOM:
                this.zoom(getMaxZoomRatio(pointers), event);
                renderable = false;
                break;
              case ACTION_CROP:
                if (!range.x || !range.y) {
                  renderable = false;
                  break;
                }
                offset2 = getOffset(this.cropper);
                left2 = pointer.startX - offset2.left;
                top2 = pointer.startY - offset2.top;
                width = cropBoxData.minWidth;
                height = cropBoxData.minHeight;
                if (range.x > 0) {
                  action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
                } else if (range.x < 0) {
                  left2 -= width;
                  action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
                }
                if (range.y < 0) {
                  top2 -= height;
                }
                if (!this.cropped) {
                  removeClass(this.cropBox, CLASS_HIDDEN);
                  this.cropped = true;
                  if (this.limited) {
                    this.limitCropBox(true, true);
                  }
                }
                break;
            }
            if (renderable) {
              cropBoxData.width = width;
              cropBoxData.height = height;
              cropBoxData.left = left2;
              cropBoxData.top = top2;
              this.action = action;
              this.renderCropBox();
            }
            forEach(pointers, function(p) {
              p.startX = p.endX;
              p.startY = p.endY;
            });
          }
        };
        var methods = {
          crop: function crop() {
            if (this.ready && !this.cropped && !this.disabled) {
              this.cropped = true;
              this.limitCropBox(true, true);
              if (this.options.modal) {
                addClass(this.dragBox, CLASS_MODAL);
              }
              removeClass(this.cropBox, CLASS_HIDDEN);
              this.setCropBoxData(this.initialCropBoxData);
            }
            return this;
          },
          reset: function reset() {
            if (this.ready && !this.disabled) {
              this.imageData = assign({}, this.initialImageData);
              this.canvasData = assign({}, this.initialCanvasData);
              this.cropBoxData = assign({}, this.initialCropBoxData);
              this.renderCanvas();
              if (this.cropped) {
                this.renderCropBox();
              }
            }
            return this;
          },
          clear: function clear() {
            if (this.cropped && !this.disabled) {
              assign(this.cropBoxData, {
                left: 0,
                top: 0,
                width: 0,
                height: 0
              });
              this.cropped = false;
              this.renderCropBox();
              this.limitCanvas(true, true);
              this.renderCanvas();
              removeClass(this.dragBox, CLASS_MODAL);
              addClass(this.cropBox, CLASS_HIDDEN);
            }
            return this;
          },
          replace: function replace(url) {
            var hasSameSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            if (!this.disabled && url) {
              if (this.isImg) {
                this.element.src = url;
              }
              if (hasSameSize) {
                this.url = url;
                this.image.src = url;
                if (this.ready) {
                  this.viewBoxImage.src = url;
                  forEach(this.previews, function(element) {
                    element.getElementsByTagName("img")[0].src = url;
                  });
                }
              } else {
                if (this.isImg) {
                  this.replaced = true;
                }
                this.options.data = null;
                this.uncreate();
                this.load(url);
              }
            }
            return this;
          },
          enable: function enable() {
            if (this.ready && this.disabled) {
              this.disabled = false;
              removeClass(this.cropper, CLASS_DISABLED);
            }
            return this;
          },
          disable: function disable() {
            if (this.ready && !this.disabled) {
              this.disabled = true;
              addClass(this.cropper, CLASS_DISABLED);
            }
            return this;
          },
          destroy: function destroy() {
            var element = this.element;
            if (!element[NAMESPACE]) {
              return this;
            }
            element[NAMESPACE] = void 0;
            if (this.isImg && this.replaced) {
              element.src = this.originalUrl;
            }
            this.uncreate();
            return this;
          },
          move: function move(offsetX) {
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : offsetX;
            var _this$canvasData = this.canvasData, left2 = _this$canvasData.left, top2 = _this$canvasData.top;
            return this.moveTo(isUndefined(offsetX) ? offsetX : left2 + Number(offsetX), isUndefined(offsetY) ? offsetY : top2 + Number(offsetY));
          },
          moveTo: function moveTo(x) {
            var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
            var canvasData = this.canvasData;
            var changed = false;
            x = Number(x);
            y = Number(y);
            if (this.ready && !this.disabled && this.options.movable) {
              if (isNumber(x)) {
                canvasData.left = x;
                changed = true;
              }
              if (isNumber(y)) {
                canvasData.top = y;
                changed = true;
              }
              if (changed) {
                this.renderCanvas(true);
              }
            }
            return this;
          },
          zoom: function zoom(ratio, _originalEvent) {
            var canvasData = this.canvasData;
            ratio = Number(ratio);
            if (ratio < 0) {
              ratio = 1 / (1 - ratio);
            } else {
              ratio = 1 + ratio;
            }
            return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
          },
          zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
            var options = this.options, canvasData = this.canvasData;
            var width = canvasData.width, height = canvasData.height, naturalWidth = canvasData.naturalWidth, naturalHeight = canvasData.naturalHeight;
            ratio = Number(ratio);
            if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
              var newWidth = naturalWidth * ratio;
              var newHeight = naturalHeight * ratio;
              if (dispatchEvent(this.element, EVENT_ZOOM, {
                ratio,
                oldRatio: width / naturalWidth,
                originalEvent: _originalEvent
              }) === false) {
                return this;
              }
              if (_originalEvent) {
                var pointers = this.pointers;
                var offset2 = getOffset(this.cropper);
                var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
                  pageX: _originalEvent.pageX,
                  pageY: _originalEvent.pageY
                };
                canvasData.left -= (newWidth - width) * ((center.pageX - offset2.left - canvasData.left) / width);
                canvasData.top -= (newHeight - height) * ((center.pageY - offset2.top - canvasData.top) / height);
              } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
                canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
                canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
              } else {
                canvasData.left -= (newWidth - width) / 2;
                canvasData.top -= (newHeight - height) / 2;
              }
              canvasData.width = newWidth;
              canvasData.height = newHeight;
              this.renderCanvas(true);
            }
            return this;
          },
          rotate: function rotate(degree) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
          },
          rotateTo: function rotateTo(degree) {
            degree = Number(degree);
            if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
              this.imageData.rotate = degree % 360;
              this.renderCanvas(true, true);
            }
            return this;
          },
          scaleX: function scaleX(_scaleX) {
            var scaleY = this.imageData.scaleY;
            return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
          },
          scaleY: function scaleY(_scaleY) {
            var scaleX = this.imageData.scaleX;
            return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
          },
          scale: function scale(scaleX) {
            var scaleY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX;
            var imageData = this.imageData;
            var transformed = false;
            scaleX = Number(scaleX);
            scaleY = Number(scaleY);
            if (this.ready && !this.disabled && this.options.scalable) {
              if (isNumber(scaleX)) {
                imageData.scaleX = scaleX;
                transformed = true;
              }
              if (isNumber(scaleY)) {
                imageData.scaleY = scaleY;
                transformed = true;
              }
              if (transformed) {
                this.renderCanvas(true, true);
              }
            }
            return this;
          },
          getData: function getData2() {
            var rounded = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            var options = this.options, imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var data;
            if (this.ready && this.cropped) {
              data = {
                x: cropBoxData.left - canvasData.left,
                y: cropBoxData.top - canvasData.top,
                width: cropBoxData.width,
                height: cropBoxData.height
              };
              var ratio = imageData.width / imageData.naturalWidth;
              forEach(data, function(n, i) {
                data[i] = n / ratio;
              });
              if (rounded) {
                var bottom2 = Math.round(data.y + data.height);
                var right2 = Math.round(data.x + data.width);
                data.x = Math.round(data.x);
                data.y = Math.round(data.y);
                data.width = right2 - data.x;
                data.height = bottom2 - data.y;
              }
            } else {
              data = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              };
            }
            if (options.rotatable) {
              data.rotate = imageData.rotate || 0;
            }
            if (options.scalable) {
              data.scaleX = imageData.scaleX || 1;
              data.scaleY = imageData.scaleY || 1;
            }
            return data;
          },
          setData: function setData2(data) {
            var options = this.options, imageData = this.imageData, canvasData = this.canvasData;
            var cropBoxData = {};
            if (this.ready && !this.disabled && isPlainObject(data)) {
              var transformed = false;
              if (options.rotatable) {
                if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
                  imageData.rotate = data.rotate;
                  transformed = true;
                }
              }
              if (options.scalable) {
                if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
                  imageData.scaleX = data.scaleX;
                  transformed = true;
                }
                if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
                  imageData.scaleY = data.scaleY;
                  transformed = true;
                }
              }
              if (transformed) {
                this.renderCanvas(true, true);
              }
              var ratio = imageData.width / imageData.naturalWidth;
              if (isNumber(data.x)) {
                cropBoxData.left = data.x * ratio + canvasData.left;
              }
              if (isNumber(data.y)) {
                cropBoxData.top = data.y * ratio + canvasData.top;
              }
              if (isNumber(data.width)) {
                cropBoxData.width = data.width * ratio;
              }
              if (isNumber(data.height)) {
                cropBoxData.height = data.height * ratio;
              }
              this.setCropBoxData(cropBoxData);
            }
            return this;
          },
          getContainerData: function getContainerData() {
            return this.ready ? assign({}, this.containerData) : {};
          },
          getImageData: function getImageData() {
            return this.sized ? assign({}, this.imageData) : {};
          },
          getCanvasData: function getCanvasData() {
            var canvasData = this.canvasData;
            var data = {};
            if (this.ready) {
              forEach(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(n) {
                data[n] = canvasData[n];
              });
            }
            return data;
          },
          setCanvasData: function setCanvasData(data) {
            var canvasData = this.canvasData;
            var aspectRatio = canvasData.aspectRatio;
            if (this.ready && !this.disabled && isPlainObject(data)) {
              if (isNumber(data.left)) {
                canvasData.left = data.left;
              }
              if (isNumber(data.top)) {
                canvasData.top = data.top;
              }
              if (isNumber(data.width)) {
                canvasData.width = data.width;
                canvasData.height = data.width / aspectRatio;
              } else if (isNumber(data.height)) {
                canvasData.height = data.height;
                canvasData.width = data.height * aspectRatio;
              }
              this.renderCanvas(true);
            }
            return this;
          },
          getCropBoxData: function getCropBoxData() {
            var cropBoxData = this.cropBoxData;
            var data;
            if (this.ready && this.cropped) {
              data = {
                left: cropBoxData.left,
                top: cropBoxData.top,
                width: cropBoxData.width,
                height: cropBoxData.height
              };
            }
            return data || {};
          },
          setCropBoxData: function setCropBoxData(data) {
            var cropBoxData = this.cropBoxData;
            var aspectRatio = this.options.aspectRatio;
            var widthChanged;
            var heightChanged;
            if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
              if (isNumber(data.left)) {
                cropBoxData.left = data.left;
              }
              if (isNumber(data.top)) {
                cropBoxData.top = data.top;
              }
              if (isNumber(data.width) && data.width !== cropBoxData.width) {
                widthChanged = true;
                cropBoxData.width = data.width;
              }
              if (isNumber(data.height) && data.height !== cropBoxData.height) {
                heightChanged = true;
                cropBoxData.height = data.height;
              }
              if (aspectRatio) {
                if (widthChanged) {
                  cropBoxData.height = cropBoxData.width / aspectRatio;
                } else if (heightChanged) {
                  cropBoxData.width = cropBoxData.height * aspectRatio;
                }
              }
              this.renderCropBox();
            }
            return this;
          },
          getCroppedCanvas: function getCroppedCanvas() {
            var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!this.ready || !window.HTMLCanvasElement) {
              return null;
            }
            var canvasData = this.canvasData;
            var source = getSourceCanvas(this.image, this.imageData, canvasData, options);
            if (!this.cropped) {
              return source;
            }
            var _this$getData = this.getData(options.rounded), initialX = _this$getData.x, initialY = _this$getData.y, initialWidth = _this$getData.width, initialHeight = _this$getData.height;
            var ratio = source.width / Math.floor(canvasData.naturalWidth);
            if (ratio !== 1) {
              initialX *= ratio;
              initialY *= ratio;
              initialWidth *= ratio;
              initialHeight *= ratio;
            }
            var aspectRatio = initialWidth / initialHeight;
            var maxSizes = getAdjustedSizes({
              aspectRatio,
              width: options.maxWidth || Infinity,
              height: options.maxHeight || Infinity
            });
            var minSizes = getAdjustedSizes({
              aspectRatio,
              width: options.minWidth || 0,
              height: options.minHeight || 0
            }, "cover");
            var _getAdjustedSizes = getAdjustedSizes({
              aspectRatio,
              width: options.width || (ratio !== 1 ? source.width : initialWidth),
              height: options.height || (ratio !== 1 ? source.height : initialHeight)
            }), width = _getAdjustedSizes.width, height = _getAdjustedSizes.height;
            width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
            height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            canvas.width = normalizeDecimalNumber(width);
            canvas.height = normalizeDecimalNumber(height);
            context.fillStyle = options.fillColor || "transparent";
            context.fillRect(0, 0, width, height);
            var _options$imageSmoothi = options.imageSmoothingEnabled, imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi, imageSmoothingQuality = options.imageSmoothingQuality;
            context.imageSmoothingEnabled = imageSmoothingEnabled;
            if (imageSmoothingQuality) {
              context.imageSmoothingQuality = imageSmoothingQuality;
            }
            var sourceWidth = source.width;
            var sourceHeight = source.height;
            var srcX = initialX;
            var srcY = initialY;
            var srcWidth;
            var srcHeight;
            var dstX;
            var dstY;
            var dstWidth;
            var dstHeight;
            if (srcX <= -initialWidth || srcX > sourceWidth) {
              srcX = 0;
              srcWidth = 0;
              dstX = 0;
              dstWidth = 0;
            } else if (srcX <= 0) {
              dstX = -srcX;
              srcX = 0;
              srcWidth = Math.min(sourceWidth, initialWidth + srcX);
              dstWidth = srcWidth;
            } else if (srcX <= sourceWidth) {
              dstX = 0;
              srcWidth = Math.min(initialWidth, sourceWidth - srcX);
              dstWidth = srcWidth;
            }
            if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
              srcY = 0;
              srcHeight = 0;
              dstY = 0;
              dstHeight = 0;
            } else if (srcY <= 0) {
              dstY = -srcY;
              srcY = 0;
              srcHeight = Math.min(sourceHeight, initialHeight + srcY);
              dstHeight = srcHeight;
            } else if (srcY <= sourceHeight) {
              dstY = 0;
              srcHeight = Math.min(initialHeight, sourceHeight - srcY);
              dstHeight = srcHeight;
            }
            var params = [srcX, srcY, srcWidth, srcHeight];
            if (dstWidth > 0 && dstHeight > 0) {
              var scale = width / initialWidth;
              params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
            }
            context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function(param) {
              return Math.floor(normalizeDecimalNumber(param));
            }))));
            return canvas;
          },
          setAspectRatio: function setAspectRatio(aspectRatio) {
            var options = this.options;
            if (!this.disabled && !isUndefined(aspectRatio)) {
              options.aspectRatio = Math.max(0, aspectRatio) || NaN;
              if (this.ready) {
                this.initCropBox();
                if (this.cropped) {
                  this.renderCropBox();
                }
              }
            }
            return this;
          },
          setDragMode: function setDragMode(mode) {
            var options = this.options, dragBox = this.dragBox, face = this.face;
            if (this.ready && !this.disabled) {
              var croppable = mode === DRAG_MODE_CROP;
              var movable = options.movable && mode === DRAG_MODE_MOVE;
              mode = croppable || movable ? mode : DRAG_MODE_NONE;
              options.dragMode = mode;
              setData(dragBox, DATA_ACTION, mode);
              toggleClass(dragBox, CLASS_CROP, croppable);
              toggleClass(dragBox, CLASS_MOVE, movable);
              if (!options.cropBoxMovable) {
                setData(face, DATA_ACTION, mode);
                toggleClass(face, CLASS_CROP, croppable);
                toggleClass(face, CLASS_MOVE, movable);
              }
            }
            return this;
          }
        };
        var AnotherCropper = WINDOW.Cropper;
        var Cropper2 = /* @__PURE__ */ function() {
          function Cropper3(element) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            _classCallCheck(this, Cropper3);
            if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
              throw new Error("The first argument is required and must be an <img> or <canvas> element.");
            }
            this.element = element;
            this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
            this.cropped = false;
            this.disabled = false;
            this.pointers = {};
            this.ready = false;
            this.reloading = false;
            this.replaced = false;
            this.sized = false;
            this.sizing = false;
            this.init();
          }
          _createClass(Cropper3, [{
            key: "init",
            value: function init() {
              var element = this.element;
              var tagName = element.tagName.toLowerCase();
              var url;
              if (element[NAMESPACE]) {
                return;
              }
              element[NAMESPACE] = this;
              if (tagName === "img") {
                this.isImg = true;
                url = element.getAttribute("src") || "";
                this.originalUrl = url;
                if (!url) {
                  return;
                }
                url = element.src;
              } else if (tagName === "canvas" && window.HTMLCanvasElement) {
                url = element.toDataURL();
              }
              this.load(url);
            }
          }, {
            key: "load",
            value: function load(url) {
              var _this = this;
              if (!url) {
                return;
              }
              this.url = url;
              this.imageData = {};
              var element = this.element, options = this.options;
              if (!options.rotatable && !options.scalable) {
                options.checkOrientation = false;
              }
              if (!options.checkOrientation || !window.ArrayBuffer) {
                this.clone();
                return;
              }
              if (REGEXP_DATA_URL.test(url)) {
                if (REGEXP_DATA_URL_JPEG.test(url)) {
                  this.read(dataURLToArrayBuffer(url));
                } else {
                  this.clone();
                }
                return;
              }
              var xhr = new XMLHttpRequest();
              var clone = this.clone.bind(this);
              this.reloading = true;
              this.xhr = xhr;
              xhr.onabort = clone;
              xhr.onerror = clone;
              xhr.ontimeout = clone;
              xhr.onprogress = function() {
                if (xhr.getResponseHeader("content-type") !== MIME_TYPE_JPEG) {
                  xhr.abort();
                }
              };
              xhr.onload = function() {
                _this.read(xhr.response);
              };
              xhr.onloadend = function() {
                _this.reloading = false;
                _this.xhr = null;
              };
              if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
                url = addTimestamp(url);
              }
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.withCredentials = element.crossOrigin === "use-credentials";
              xhr.send();
            }
          }, {
            key: "read",
            value: function read2(arrayBuffer) {
              var options = this.options, imageData = this.imageData;
              var orientation = resetAndGetOrientation(arrayBuffer);
              var rotate = 0;
              var scaleX = 1;
              var scaleY = 1;
              if (orientation > 1) {
                this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
                var _parseOrientation = parseOrientation(orientation);
                rotate = _parseOrientation.rotate;
                scaleX = _parseOrientation.scaleX;
                scaleY = _parseOrientation.scaleY;
              }
              if (options.rotatable) {
                imageData.rotate = rotate;
              }
              if (options.scalable) {
                imageData.scaleX = scaleX;
                imageData.scaleY = scaleY;
              }
              this.clone();
            }
          }, {
            key: "clone",
            value: function clone() {
              var element = this.element, url = this.url;
              var crossOrigin = element.crossOrigin;
              var crossOriginUrl = url;
              if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
                if (!crossOrigin) {
                  crossOrigin = "anonymous";
                }
                crossOriginUrl = addTimestamp(url);
              }
              this.crossOrigin = crossOrigin;
              this.crossOriginUrl = crossOriginUrl;
              var image = document.createElement("img");
              if (crossOrigin) {
                image.crossOrigin = crossOrigin;
              }
              image.src = crossOriginUrl || url;
              image.alt = element.alt || "The image to crop";
              this.image = image;
              image.onload = this.start.bind(this);
              image.onerror = this.stop.bind(this);
              addClass(image, CLASS_HIDE);
              element.parentNode.insertBefore(image, element.nextSibling);
            }
          }, {
            key: "start",
            value: function start2() {
              var _this2 = this;
              var image = this.image;
              image.onload = null;
              image.onerror = null;
              this.sizing = true;
              var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
              var done = function done2(naturalWidth, naturalHeight) {
                assign(_this2.imageData, {
                  naturalWidth,
                  naturalHeight,
                  aspectRatio: naturalWidth / naturalHeight
                });
                _this2.initialImageData = assign({}, _this2.imageData);
                _this2.sizing = false;
                _this2.sized = true;
                _this2.build();
              };
              if (image.naturalWidth && !isIOSWebKit) {
                done(image.naturalWidth, image.naturalHeight);
                return;
              }
              var sizingImage = document.createElement("img");
              var body = document.body || document.documentElement;
              this.sizingImage = sizingImage;
              sizingImage.onload = function() {
                done(sizingImage.width, sizingImage.height);
                if (!isIOSWebKit) {
                  body.removeChild(sizingImage);
                }
              };
              sizingImage.src = image.src;
              if (!isIOSWebKit) {
                sizingImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
                body.appendChild(sizingImage);
              }
            }
          }, {
            key: "stop",
            value: function stop() {
              var image = this.image;
              image.onload = null;
              image.onerror = null;
              image.parentNode.removeChild(image);
              this.image = null;
            }
          }, {
            key: "build",
            value: function build() {
              if (!this.sized || this.ready) {
                return;
              }
              var element = this.element, options = this.options, image = this.image;
              var container = element.parentNode;
              var template = document.createElement("div");
              template.innerHTML = TEMPLATE;
              var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
              var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
              var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
              var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
              var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
              this.container = container;
              this.cropper = cropper;
              this.canvas = canvas;
              this.dragBox = dragBox;
              this.cropBox = cropBox;
              this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
              this.face = face;
              canvas.appendChild(image);
              addClass(element, CLASS_HIDDEN);
              container.insertBefore(cropper, element.nextSibling);
              removeClass(image, CLASS_HIDE);
              this.initPreview();
              this.bind();
              options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
              options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
              options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
              addClass(cropBox, CLASS_HIDDEN);
              if (!options.guides) {
                addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
              }
              if (!options.center) {
                addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
              }
              if (options.background) {
                addClass(cropper, "".concat(NAMESPACE, "-bg"));
              }
              if (!options.highlight) {
                addClass(face, CLASS_INVISIBLE);
              }
              if (options.cropBoxMovable) {
                addClass(face, CLASS_MOVE);
                setData(face, DATA_ACTION, ACTION_ALL);
              }
              if (!options.cropBoxResizable) {
                addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
                addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
              }
              this.render();
              this.ready = true;
              this.setDragMode(options.dragMode);
              if (options.autoCrop) {
                this.crop();
              }
              this.setData(options.data);
              if (isFunction(options.ready)) {
                addListener(element, EVENT_READY, options.ready, {
                  once: true
                });
              }
              dispatchEvent(element, EVENT_READY);
            }
          }, {
            key: "unbuild",
            value: function unbuild() {
              if (!this.ready) {
                return;
              }
              this.ready = false;
              this.unbind();
              this.resetPreview();
              var parentNode = this.cropper.parentNode;
              if (parentNode) {
                parentNode.removeChild(this.cropper);
              }
              removeClass(this.element, CLASS_HIDDEN);
            }
          }, {
            key: "uncreate",
            value: function uncreate() {
              if (this.ready) {
                this.unbuild();
                this.ready = false;
                this.cropped = false;
              } else if (this.sizing) {
                this.sizingImage.onload = null;
                this.sizing = false;
                this.sized = false;
              } else if (this.reloading) {
                this.xhr.onabort = null;
                this.xhr.abort();
              } else if (this.image) {
                this.stop();
              }
            }
          }], [{
            key: "noConflict",
            value: function noConflict() {
              window.Cropper = AnotherCropper;
              return Cropper3;
            }
          }, {
            key: "setDefaults",
            value: function setDefaults(options) {
              assign(DEFAULTS, isPlainObject(options) && options);
            }
          }]);
          return Cropper3;
        }();
        assign(Cropper2.prototype, render8, preview, events, handlers, change, methods);
        return Cropper2;
      });
    }
  });

  // node_modules/vue/dist/vue.runtime.esm-bundler.js
  var vue_runtime_esm_bundler_exports = {};
  __export(vue_runtime_esm_bundler_exports, {
    compile: () => compile
  });
  var import_runtime_dom = __toESM(require_runtime_dom());
  __reExport(vue_runtime_esm_bundler_exports, __toESM(require_runtime_dom()));
  function initDev() {
    {
      (0, import_runtime_dom.initCustomFormatter)();
    }
  }
  if (true) {
    initDev();
  }
  var compile = () => {
    if (true) {
      (0, import_runtime_dom.warn)(
        `Runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
      );
    }
  };

  // sfc-script:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/ProgressRing.vue?type=script
  var ProgressRing_default = {
    __name: "ProgressRing",
    props: {
      primary: String,
      secondary: String,
      radius: Number,
      progress: Number,
      stroke: Number
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      let normalizedRadius = (0, vue_runtime_esm_bundler_exports.ref)(props.radius - props.stroke * 2);
      let circumference = (0, vue_runtime_esm_bundler_exports.ref)(normalizedRadius.value * 2 * Math.PI);
      let strokeDashoffset = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        return circumference.value - props.progress / 100 * circumference.value;
      });
      const __returned__ = { props, get normalizedRadius() {
        return normalizedRadius;
      }, set normalizedRadius(v) {
        normalizedRadius = v;
      }, get circumference() {
        return circumference;
      }, set circumference(v) {
        circumference = v;
      }, get strokeDashoffset() {
        return strokeDashoffset;
      }, set strokeDashoffset(v) {
        strokeDashoffset = v;
      }, computed: vue_runtime_esm_bundler_exports.computed, ref: vue_runtime_esm_bundler_exports.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/ProgressRing.vue?type=template
  var _hoisted_1 = ["height", "width"];
  var _hoisted_2 = ["stroke-dasharray", "stroke-width", "r", "cx", "cy"];
  var _hoisted_3 = ["stroke-dasharray", "stroke-width", "r", "cx", "cy"];
  var _hoisted_4 = ["x", "y"];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("svg", {
      height: $props.radius * 2,
      width: $props.radius * 2
    }, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("circle", {
        "stroke-dasharray": $setup.circumference + " " + $setup.circumference,
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
          stroke: $props.secondary,
          strokeDashoffset: 0
        }),
        "stroke-width": $props.stroke,
        fill: "transparent",
        r: $setup.normalizedRadius,
        cx: $props.radius,
        cy: $props.radius
      }, null, 12, _hoisted_2),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("circle", {
        "stroke-dasharray": $setup.circumference + " " + $setup.circumference,
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
          stroke: $props.primary,
          strokeDashoffset: $setup.strokeDashoffset
        }),
        "stroke-width": $props.stroke,
        fill: "transparent",
        r: $setup.normalizedRadius,
        cx: $props.radius,
        cy: $props.radius
      }, null, 12, _hoisted_3),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("text", {
        "dominant-baseline": "middle",
        "text-anchor": "middle",
        x: $props.radius,
        y: $props.radius,
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
          color: "var(--text-color)",
          fontSize: "var(--text-xs)",
          fontWeight: "var(--text-bold)"
        })
      }, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.progress) + "% ", 13, _hoisted_4)
    ], 8, _hoisted_1);
  }

  // frappe/public/js/frappe/file_uploader/ProgressRing.vue
  ProgressRing_default.render = render;
  ProgressRing_default.__file = "frappe/public/js/frappe/file_uploader/ProgressRing.vue";
  ProgressRing_default.__scopeId = "data-v-e4881e80";
  var ProgressRing_default2 = ProgressRing_default;

  // sfc-script:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/FilePreview.vue?type=script
  var FilePreview_default = {
    __name: "FilePreview",
    props: {
      file: Object,
      allow_toggle_private: {
        default: true
      },
      allow_toggle_optimize: {
        default: true
      }
    },
    emits: ["toggle_optimize", "toggle_private", "toggle_image_cropper", "remove"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      let emit = __emit;
      const props = __props;
      let src = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let optimize = (0, vue_runtime_esm_bundler_exports.ref)(props.file.optimize);
      let file_size = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        return frappe.form.formatters.FileSize(props.file.file_obj.size);
      });
      let is_private = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        return props.file.doc ? props.file.doc.is_private : props.file.private;
      });
      let uploaded = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        return props.file.request_succeeded;
      });
      let is_image = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        return props.file.file_obj.type.startsWith("image");
      });
      let allow_toggle_optimize = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        let is_svg = props.file.file_obj.type == "image/svg+xml";
        return props.allow_toggle_optimize && is_image.value && !is_svg && !uploaded.value && !props.file.failed;
      });
      let is_cropable = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        let croppable_types = ["image/jpeg", "image/png"];
        return !uploaded.value && !props.file.uploading && !props.file.failed && croppable_types.includes(props.file.file_obj.type);
      });
      let progress = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        let value = Math.round(props.file.progress * 100 / props.file.total);
        if (isNaN(value)) {
          value = 0;
        }
        return value;
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (is_image.value) {
          if (window.FileReader) {
            let fr = new FileReader();
            fr.onload = () => src.value = fr.result;
            fr.readAsDataURL(props.file.file_obj);
          }
        }
      });
      const __returned__ = { get emit() {
        return emit;
      }, set emit(v) {
        emit = v;
      }, props, get src() {
        return src;
      }, set src(v) {
        src = v;
      }, get optimize() {
        return optimize;
      }, set optimize(v) {
        optimize = v;
      }, get file_size() {
        return file_size;
      }, set file_size(v) {
        file_size = v;
      }, get is_private() {
        return is_private;
      }, set is_private(v) {
        is_private = v;
      }, get uploaded() {
        return uploaded;
      }, set uploaded(v) {
        uploaded = v;
      }, get is_image() {
        return is_image;
      }, set is_image(v) {
        is_image = v;
      }, get allow_toggle_optimize() {
        return allow_toggle_optimize;
      }, set allow_toggle_optimize(v) {
        allow_toggle_optimize = v;
      }, get is_cropable() {
        return is_cropable;
      }, set is_cropable(v) {
        is_cropable = v;
      }, get progress() {
        return progress;
      }, set progress(v) {
        progress = v;
      }, ref: vue_runtime_esm_bundler_exports.ref, onMounted: vue_runtime_esm_bundler_exports.onMounted, computed: vue_runtime_esm_bundler_exports.computed, ProgressRing: ProgressRing_default2 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/FilePreview.vue?type=template
  var _hoisted_12 = { class: "file-preview" };
  var _hoisted_22 = { class: "file-icon" };
  var _hoisted_32 = ["src", "alt"];
  var _hoisted_42 = ["innerHTML"];
  var _hoisted_5 = ["href"];
  var _hoisted_6 = { class: "file-name" };
  var _hoisted_7 = {
    key: 1,
    class: "file-name"
  };
  var _hoisted_8 = { class: "file-size" };
  var _hoisted_9 = { class: "flex config-area" };
  var _hoisted_10 = {
    key: 0,
    class: "frappe-checkbox"
  };
  var _hoisted_11 = ["checked"];
  var _hoisted_122 = {
    key: 1,
    class: "frappe-checkbox"
  };
  var _hoisted_13 = ["checked"];
  var _hoisted_14 = {
    key: 0,
    class: "file-error text-danger"
  };
  var _hoisted_15 = { class: "file-actions" };
  var _hoisted_16 = ["innerHTML"];
  var _hoisted_17 = ["innerHTML"];
  var _hoisted_18 = { class: "file-action-buttons" };
  var _hoisted_19 = ["innerHTML"];
  var _hoisted_20 = ["innerHTML"];
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_12, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_22, [
        $setup.is_image ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("img", {
          key: 0,
          src: $setup.src,
          alt: $props.file.name
        }, null, 8, _hoisted_32)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          key: 1,
          class: "fallback",
          innerHTML: _ctx.frappe.utils.icon("file", "md")
        }, null, 8, _hoisted_42))
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", null, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", null, [
          $props.file.doc ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("a", {
            key: 0,
            class: "flex",
            href: $props.file.doc.file_url,
            target: "_blank"
          }, [
            (0, vue_runtime_esm_bundler_exports.createElementVNode)("span", _hoisted_6, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.file.name), 1)
          ], 8, _hoisted_5)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("span", _hoisted_7, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.file.name), 1))
        ]),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", null, [
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("span", _hoisted_8, (0, vue_runtime_esm_bundler_exports.toDisplayString)($setup.file_size), 1)
        ]),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_9, [
          $setup.allow_toggle_optimize ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("label", _hoisted_10, [
            (0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
              type: "checkbox",
              checked: $setup.optimize,
              onChange: _cache[0] || (_cache[0] = ($event) => $setup.emit("toggle_optimize"))
            }, null, 40, _hoisted_11),
            (0, vue_runtime_esm_bundler_exports.createTextVNode)((0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Optimize")), 1)
          ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
          $props.allow_toggle_private ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("label", _hoisted_122, [
            (0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
              type: "checkbox",
              checked: $props.file.private,
              onChange: _cache[1] || (_cache[1] = ($event) => $setup.emit("toggle_private"))
            }, null, 40, _hoisted_13),
            (0, vue_runtime_esm_bundler_exports.createTextVNode)((0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Private")), 1)
          ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
        ]),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", null, [
          $props.file.error_message ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("span", _hoisted_14, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.file.error_message), 1)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
        ])
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_15, [
        (0, vue_runtime_esm_bundler_exports.withDirectives)((0, vue_runtime_esm_bundler_exports.createVNode)($setup["ProgressRing"], {
          primary: "var(--primary-color)",
          secondary: "var(--gray-200)",
          radius: 24,
          progress: $setup.progress,
          stroke: 3
        }, null, 8, ["progress"]), [
          [vue_runtime_esm_bundler_exports.vShow, $props.file.uploading && !$setup.uploaded && !$props.file.failed]
        ]),
        $setup.uploaded ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          key: 0,
          innerHTML: _ctx.frappe.utils.icon("solid-success", "lg")
        }, null, 8, _hoisted_16)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
        $props.file.failed ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          key: 1,
          innerHTML: _ctx.frappe.utils.icon("solid-error", "lg")
        }, null, 8, _hoisted_17)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_18, [
          $setup.is_cropable ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("button", {
            key: 0,
            class: "btn btn-crop muted",
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.emit("toggle_image_cropper")),
            innerHTML: _ctx.frappe.utils.icon("crop", "md")
          }, null, 8, _hoisted_19)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
          !$setup.uploaded && !$props.file.uploading && !$props.file.failed ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("button", {
            key: 1,
            class: "btn muted",
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.emit("remove")),
            innerHTML: _ctx.frappe.utils.icon("delete", "md")
          }, null, 8, _hoisted_20)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
        ])
      ])
    ]);
  }

  // frappe/public/js/frappe/file_uploader/FilePreview.vue
  FilePreview_default.render = render2;
  FilePreview_default.__file = "frappe/public/js/frappe/file_uploader/FilePreview.vue";
  FilePreview_default.__scopeId = "data-v-d6847533";
  var FilePreview_default2 = FilePreview_default;

  // node_modules/@popperjs/core/lib/enums.js
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  // node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindow.js
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  // node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect,
    requires: ["computeStyles"]
  };

  // node_modules/@popperjs/core/lib/utils/getBasePlacement.js
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  // node_modules/@popperjs/core/lib/utils/math.js
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // node_modules/@popperjs/core/lib/utils/userAgent.js
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  // node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/contains.js
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  // node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
  }

  // node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }

  // node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  // node_modules/@popperjs/core/lib/utils/within.js
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }

  // node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  // node_modules/@popperjs/core/lib/utils/expandToHashMap.js
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  // node_modules/@popperjs/core/lib/modifiers/arrow.js
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect2(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect2,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  // node_modules/@popperjs/core/lib/utils/getVariation.js
  function getVariation(placement) {
    return placement.split("-")[1];
  }

  // node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  // node_modules/@popperjs/core/lib/modifiers/eventListeners.js
  var passive = {
    passive: true
  };
  function effect3(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect: effect3,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }

  // node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  // node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
  }

  // node_modules/@popperjs/core/lib/utils/rectToClientRect.js
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  // node_modules/@popperjs/core/lib/utils/computeOffsets.js
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }

  // node_modules/@popperjs/core/lib/utils/detectOverflow.js
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  // node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }

  // node_modules/@popperjs/core/lib/modifiers/flip.js
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  // node_modules/@popperjs/core/lib/modifiers/hide.js
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  // node_modules/@popperjs/core/lib/modifiers/offset.js
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  // node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getAltAxis.js
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  // node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min2 = offset2 + overflow[mainSide];
      var max2 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  // node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // node_modules/@popperjs/core/lib/utils/orderModifiers.js
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  // node_modules/@popperjs/core/lib/utils/debounce.js
  function debounce(fn2) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn2());
          });
        });
      }
      return pending;
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergeByName.js
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  // node_modules/@popperjs/core/lib/createPopper.js
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn2 === "function") {
              state = fn2({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
          if (typeof effect4 === "function") {
            var cleanupFn = effect4({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn2) {
          return fn2();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }

  // node_modules/@popperjs/core/lib/popper.js
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // sfc-script:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/TreeNode.vue?type=script
  var TreeNode_default2 = {
    __name: "TreeNode",
    props: {
      node: Object,
      selected_node: Object
    },
    emits: ["node-click", "load-more"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      let emit = __emit;
      let icon = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        let icons = {
          open: frappe.utils.icon("folder-open", "md"),
          closed: frappe.utils.icon("folder-normal", "md"),
          leaf: frappe.utils.icon("primitive-dot", "xs"),
          search: frappe.utils.icon("search")
        };
        if (props.node.by_search)
          return icons.search;
        if (props.node.is_leaf)
          return icons.leaf;
        if (props.node.open)
          return icons.open;
        return icons.closed;
      });
      let open_file = (filename) => {
        return frappe.utils.get_form_link("File", filename);
      };
      const reference2 = (0, vue_runtime_esm_bundler_exports.ref)(null);
      const popover = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let isOpen = (0, vue_runtime_esm_bundler_exports.ref)(false);
      let popper2 = (0, vue_runtime_esm_bundler_exports.ref)(null);
      function setupPopper() {
        if (!popper2.value) {
          popper2.value = createPopper(reference2.value, popover.value, {
            placement: "top",
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 4]
                }
              }
            ]
          });
        } else {
          popper2.value.update();
        }
      }
      let hoverTimer = null;
      let leaveTimer = null;
      function onMouseover() {
        leaveTimer && clearTimeout(leaveTimer) && (leaveTimer = null);
        hoverTimer && clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => {
          isOpen.value = true;
          setupPopper();
        }, 800);
      }
      function onMouseleave() {
        hoverTimer && clearTimeout(hoverTimer) && (hoverTimer = null);
        leaveTimer && clearTimeout(leaveTimer);
        leaveTimer = setTimeout(() => {
          isOpen.value = false;
        }, 100);
      }
      const __returned__ = { props, get emit() {
        return emit;
      }, set emit(v) {
        emit = v;
      }, get icon() {
        return icon;
      }, set icon(v) {
        icon = v;
      }, get open_file() {
        return open_file;
      }, set open_file(v) {
        open_file = v;
      }, reference: reference2, popover, get isOpen() {
        return isOpen;
      }, set isOpen(v) {
        isOpen = v;
      }, get popper() {
        return popper2;
      }, set popper(v) {
        popper2 = v;
      }, setupPopper, get hoverTimer() {
        return hoverTimer;
      }, set hoverTimer(v) {
        hoverTimer = v;
      }, get leaveTimer() {
        return leaveTimer;
      }, set leaveTimer(v) {
        leaveTimer = v;
      }, onMouseover, onMouseleave, TreeNode: TreeNode_default, get createPopper() {
        return createPopper;
      }, ref: vue_runtime_esm_bundler_exports.ref, computed: vue_runtime_esm_bundler_exports.computed };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/TreeNode.vue?type=template
  var _hoisted_110 = ["disabled"];
  var _hoisted_23 = ["innerHTML"];
  var _hoisted_33 = { class: "tree-label" };
  var _hoisted_43 = ["href", "disabled", "innerHTML"];
  var _hoisted_52 = { key: 0 };
  var _hoisted_62 = {
    class: "popover",
    ref: "popover",
    role: "tooltip"
  };
  var _hoisted_72 = ["src"];
  var _hoisted_82 = { class: "tree-children" };
  var _hoisted_92 = ["disabled"];
  function render3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["tree-node", { opened: $props.node.open }])
    }, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("span", {
        ref: "reference",
        class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["tree-link", { active: $props.node.value === $props.selected_node.value }]),
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.emit("node-click", $props.node)),
        disabled: $props.node.fetching,
        onMouseover: $setup.onMouseover,
        onMouseleave: $setup.onMouseleave
      }, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", { innerHTML: $setup.icon }, null, 8, _hoisted_23),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("a", _hoisted_33, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.node.label), 1),
        (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" Icon open File record in new tab "),
        $props.node.is_leaf ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("a", {
          key: 0,
          href: $setup.open_file($props.node.value),
          disabled: $props.node.fetching,
          target: "_blank",
          class: "file-doc-link ml-2",
          innerHTML: _ctx.frappe.utils.icon("external-link", "sm"),
          onClick: _cache[0] || (_cache[0] = (0, vue_runtime_esm_bundler_exports.withModifiers)(() => {
          }, ["stop"]))
        }, null, 8, _hoisted_43)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
      ], 42, _hoisted_110),
      $props.node.file_url && _ctx.frappe.utils.is_image_file($props.node.file_url) ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_52, [
        (0, vue_runtime_esm_bundler_exports.withDirectives)((0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_62, [
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("img", {
            src: $props.node.file_url
          }, null, 8, _hoisted_72)
        ], 512), [
          [vue_runtime_esm_bundler_exports.vShow, $setup.isOpen]
        ])
      ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      (0, vue_runtime_esm_bundler_exports.withDirectives)((0, vue_runtime_esm_bundler_exports.createElementVNode)("ul", _hoisted_82, [
        ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)($props.node.children, (n) => {
          return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)($setup["TreeNode"], {
            key: n.value,
            node: n,
            selected_node: $props.selected_node,
            onNodeClick: (n2) => $setup.emit("node-click", n2),
            onLoadMore: (n2) => $setup.emit("load-more", n2)
          }, null, 8, ["node", "selected_node", "onNodeClick", "onLoadMore"]);
        }), 128)),
        $props.node.has_more_children ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("button", {
          key: 0,
          class: "btn btn-xs btn-load-more",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.emit("load-more", $props.node)),
          disabled: $props.node.children_loading
        }, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.node.children_loading ? _ctx.__("Loading...") : _ctx.__("Load more")), 9, _hoisted_92)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
      ], 512), [
        [vue_runtime_esm_bundler_exports.vShow, $props.node.open]
      ])
    ], 2);
  }

  // frappe/public/js/frappe/file_uploader/TreeNode.vue
  TreeNode_default2.render = render3;
  TreeNode_default2.__file = "frappe/public/js/frappe/file_uploader/TreeNode.vue";
  TreeNode_default2.__scopeId = "data-v-877e6dee";
  var TreeNode_default = TreeNode_default2;

  // sfc-script:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/FileBrowser.vue?type=script
  var FileBrowser_default = {
    __name: "FileBrowser",
    emits: ["hide-browser"],
    setup(__props, { expose: __expose, emit: __emit }) {
      let emit = __emit;
      let node = (0, vue_runtime_esm_bundler_exports.ref)({
        label: __("Home"),
        value: "Home",
        children: [],
        children_start: 0,
        children_loading: false,
        is_leaf: false,
        fetching: false,
        fetched: false,
        open: false,
        filtered: true
      });
      let selected_node = (0, vue_runtime_esm_bundler_exports.ref)({});
      let search_text = (0, vue_runtime_esm_bundler_exports.ref)("");
      let page_length = (0, vue_runtime_esm_bundler_exports.ref)(10);
      let folder_node = (0, vue_runtime_esm_bundler_exports.ref)(null);
      function toggle_node(node2) {
        if (!node2.fetched && !node2.is_leaf) {
          node2.fetching = true;
          node2.children_start = 0;
          node2.children_loading = false;
          get_files_in_folder(node2.value, 0).then(({ files, has_more }) => {
            node2.open = true;
            node2.children = files;
            node2.fetched = true;
            node2.fetching = false;
            node2.children_start += page_length.value;
            node2.has_more_children = has_more;
          });
        } else {
          node2.open = !node2.open;
          select_node(node2);
        }
      }
      function load_more(node2) {
        if (node2.has_more_children) {
          let start2 = node2.children_start;
          node2.children_loading = true;
          get_files_in_folder(node2.value, start2).then(({ files, has_more }) => {
            node2.children = node2.children.concat(files);
            node2.children_start += page_length.value;
            node2.has_more_children = has_more;
            node2.children_loading = false;
          });
        }
      }
      function select_node(node2) {
        if (node2.is_leaf) {
          selected_node.value = node2;
        }
      }
      function get_files_in_folder(folder, start2) {
        return frappe.call("frappe.core.api.file.get_files_in_folder", {
          folder,
          start: start2,
          page_length: page_length.value
        }).then((r) => {
          let { files = [], has_more = false } = r.message || {};
          files.sort((a, b) => {
            if (a.is_folder && b.is_folder) {
              return a.modified < b.modified ? -1 : 1;
            }
            if (a.is_folder) {
              return -1;
            }
            if (b.is_folder) {
              return 1;
            }
            return 0;
          });
          files = files.map((file) => make_file_node(file));
          return { files, has_more };
        });
      }
      function search_by_name() {
        if (search_text.value === "") {
          node.value = folder_node.value;
          return;
        }
        if (search_text.value.length < 3)
          return;
        frappe.call("frappe.core.api.file.get_files_by_search_text", {
          text: search_text.value
        }).then((r) => {
          let files = r.message || [];
          files = files.map((file) => make_file_node(file));
          if (!folder_node.value) {
            folder_node.value = node.value;
          }
          node.value = {
            label: __("Search Results"),
            value: "",
            children: files,
            by_search: true,
            open: true,
            filtered: true
          };
        });
      }
      function make_file_node(file) {
        let filename = file.file_name || file.name;
        let label = frappe.utils.file_name_ellipsis(filename, 40);
        return {
          label,
          filename,
          file_url: file.file_url,
          value: file.name,
          is_leaf: !file.is_folder,
          fetched: !file.is_folder,
          children: [],
          children_loading: false,
          children_start: 0,
          open: false,
          fetching: false,
          filtered: true
        };
      }
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        toggle_node(node.value);
      });
      __expose({ selected_node });
      const __returned__ = { get emit() {
        return emit;
      }, set emit(v) {
        emit = v;
      }, get node() {
        return node;
      }, set node(v) {
        node = v;
      }, get selected_node() {
        return selected_node;
      }, set selected_node(v) {
        selected_node = v;
      }, get search_text() {
        return search_text;
      }, set search_text(v) {
        search_text = v;
      }, get page_length() {
        return page_length;
      }, set page_length(v) {
        page_length = v;
      }, get folder_node() {
        return folder_node;
      }, set folder_node(v) {
        folder_node = v;
      }, toggle_node, load_more, select_node, get_files_in_folder, search_by_name, make_file_node, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref, TreeNode: TreeNode_default };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/FileBrowser.vue?type=template
  var _hoisted_111 = { class: "file-browser" };
  var _hoisted_24 = { class: "file-browser-list" };
  var _hoisted_34 = { class: "file-filter" };
  var _hoisted_44 = ["placeholder"];
  function render4(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_111, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", null, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("a", {
          href: "",
          class: "text-muted text-medium",
          onClick: _cache[0] || (_cache[0] = (0, vue_runtime_esm_bundler_exports.withModifiers)(($event) => $setup.emit("hide-browser"), ["prevent"]))
        }, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("\u2190 Back to upload files")), 1)
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_24, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_34, [
          (0, vue_runtime_esm_bundler_exports.withDirectives)((0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
            type: "search",
            class: "form-control input-xs",
            placeholder: _ctx.__("Search by filename or extension"),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.search_text = $event),
            onInput: _cache[2] || (_cache[2] = ($event) => _ctx.frappe.utils.debounce($setup.search_by_name(), 300))
          }, null, 40, _hoisted_44), [
            [vue_runtime_esm_bundler_exports.vModelText, $setup.search_text]
          ])
        ]),
        (0, vue_runtime_esm_bundler_exports.createVNode)($setup["TreeNode"], {
          class: "tree with-skeleton",
          node: $setup.node,
          selected_node: $setup.selected_node,
          onNodeClick: _cache[3] || (_cache[3] = (n) => $setup.toggle_node(n)),
          onLoadMore: _cache[4] || (_cache[4] = (n) => $setup.load_more(n))
        }, null, 8, ["node", "selected_node"])
      ])
    ]);
  }

  // frappe/public/js/frappe/file_uploader/FileBrowser.vue
  FileBrowser_default.render = render4;
  FileBrowser_default.__file = "frappe/public/js/frappe/file_uploader/FileBrowser.vue";
  FileBrowser_default.__scopeId = "data-v-1d966cc2";
  var FileBrowser_default2 = FileBrowser_default;

  // sfc-script:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/WebLink.vue?type=script
  var WebLink_default = {
    __name: "WebLink",
    emits: ["hide-web-link"],
    setup(__props, { expose: __expose, emit: __emit }) {
      let emit = __emit;
      let url = (0, vue_runtime_esm_bundler_exports.ref)("");
      __expose({ url });
      const __returned__ = { get emit() {
        return emit;
      }, set emit(v) {
        emit = v;
      }, get url() {
        return url;
      }, set url(v) {
        url = v;
      }, ref: vue_runtime_esm_bundler_exports.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/WebLink.vue?type=template
  var _hoisted_112 = { class: "file-web-link margin-bottom" };
  var _hoisted_25 = { class: "input-group" };
  var _hoisted_35 = ["placeholder"];
  function render5(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_112, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("a", {
        href: "",
        class: "text-muted text-medium",
        onClick: _cache[0] || (_cache[0] = (0, vue_runtime_esm_bundler_exports.withModifiers)(($event) => $setup.emit("hide-web-link"), ["prevent"]))
      }, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("\u2190 Back to upload files")), 1),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_25, [
        (0, vue_runtime_esm_bundler_exports.withDirectives)((0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
          type: "text",
          class: "form-control",
          placeholder: _ctx.__("Attach a web link"),
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.url = $event)
        }, null, 8, _hoisted_35), [
          [vue_runtime_esm_bundler_exports.vModelText, $setup.url]
        ])
      ])
    ]);
  }

  // frappe/public/js/frappe/file_uploader/WebLink.vue
  WebLink_default.render = render5;
  WebLink_default.__file = "frappe/public/js/frappe/file_uploader/WebLink.vue";
  WebLink_default.__scopeId = "data-v-55466dd8";
  var WebLink_default2 = WebLink_default;

  // frappe/public/js/integrations/google_drive_picker.js
  var GoogleDrivePicker = class {
    constructor({ pickerCallback, enabled, appId, clientId } = {}) {
      this.scope = "https://www.googleapis.com/auth/drive.file";
      this.pickerApiLoaded = false;
      this.enabled = enabled;
      this.appId = appId;
      this.pickerCallback = pickerCallback;
      this.clientId = clientId;
    }
    async loadPicker() {
      inject_script("https://accounts.google.com/gsi/client").then(() => {
        this.authenticate();
      });
      inject_script("https://apis.google.com/js/api.js").then(() => {
        gapi.load("client:picker", {
          callback: () => {
            gapi.client.load("https://www.googleapis.com/discovery/v1/apis/drive/v3/rest");
          }
        });
      });
    }
    authenticate() {
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: this.clientId,
        scope: this.scope,
        callback: async (response) => {
          if (response.error !== void 0) {
            frappe.throw(response);
          }
          this.createPicker(response.access_token);
        }
      });
      tokenClient.requestAccessToken({ prompt: "" });
    }
    createPicker(access_token) {
      const docsView = new google.picker.DocsView();
      docsView.setParent("root");
      docsView.setIncludeFolders(true);
      this.picker = new google.picker.PickerBuilder().setAppId(this.appId).setOAuthToken(access_token).addView(docsView).addView(new google.picker.DocsUploadView()).setLocale(frappe.boot.lang).setCallback(this.pickerCallback).build();
      this.picker.setVisible(true);
      this.setupHide();
    }
    setupHide() {
      let bg = document.querySelectorAll(".picker-dialog-bg");
      for (const el of bg) {
        el.addEventListener("click", () => {
          this.picker.dispose();
        });
      }
    }
  };
  function inject_script(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`) !== null) {
        resolve();
        return;
      }
      let script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  // sfc-script:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/ImageCropper.vue?type=script
  var import_cropperjs = __toESM(require_cropper());
  var ImageCropper_default = {
    __name: "ImageCropper",
    props: {
      file: Object,
      fixed_aspect_ratio: Number
    },
    emits: ["toggle_image_cropper"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      let emit = __emit;
      let aspect_ratio = (0, vue_runtime_esm_bundler_exports.ref)(props.fixed_aspect_ratio != null ? props.fixed_aspect_ratio : NaN);
      let src = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let cropper = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let image = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let image_ref = (0, vue_runtime_esm_bundler_exports.ref)(null);
      function crop_image() {
        props.file.crop_box_data = cropper.value.getData();
        const canvas = cropper.value.getCroppedCanvas();
        const file_type = props.file.file_obj.type;
        canvas.toBlob((blob) => {
          var cropped_file_obj = new File([blob], props.file.name, {
            type: blob.type
          });
          props.file.file_obj = cropped_file_obj;
          emit("toggle_image_cropper");
        }, file_type);
      }
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (window.FileReader) {
          let fr = new FileReader();
          fr.onload = () => src.value = fr.result;
          fr.readAsDataURL(props.file.cropper_file);
        }
        let crop_box = props.file.crop_box_data;
        image.value = image_ref.value;
        image.value.onload = () => {
          cropper.value = new import_cropperjs.default(image.value, {
            zoomable: false,
            scalable: false,
            viewMode: 1,
            data: crop_box,
            aspectRatio: aspect_ratio.value
          });
          window.cropper = cropper.value;
        };
      });
      let aspect_ratio_buttons = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        return [
          {
            label: __("1:1", null, "Image Cropper"),
            value: 1
          },
          {
            label: __("4:3", null, "Image Cropper"),
            value: 4 / 3
          },
          {
            label: __("16:9", null, "Image Cropper"),
            value: 16 / 9
          },
          {
            label: __("Free", null, "Image Cropper"),
            value: NaN
          }
        ];
      });
      (0, vue_runtime_esm_bundler_exports.watch)(
        aspect_ratio,
        (value) => {
          if (cropper.value) {
            cropper.value.setAspectRatio(value);
          }
        },
        { deep: true }
      );
      const __returned__ = { props, get emit() {
        return emit;
      }, set emit(v) {
        emit = v;
      }, get aspect_ratio() {
        return aspect_ratio;
      }, set aspect_ratio(v) {
        aspect_ratio = v;
      }, get src() {
        return src;
      }, set src(v) {
        src = v;
      }, get cropper() {
        return cropper;
      }, set cropper(v) {
        cropper = v;
      }, get image() {
        return image;
      }, set image(v) {
        image = v;
      }, get image_ref() {
        return image_ref;
      }, set image_ref(v) {
        image_ref = v;
      }, crop_image, get aspect_ratio_buttons() {
        return aspect_ratio_buttons;
      }, set aspect_ratio_buttons(v) {
        aspect_ratio_buttons = v;
      }, computed: vue_runtime_esm_bundler_exports.computed, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref, watch: vue_runtime_esm_bundler_exports.watch, get Cropper() {
        return import_cropperjs.default;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/ImageCropper.vue?type=template
  var _hoisted_113 = ["src", "alt"];
  var _hoisted_26 = { class: "image-cropper-actions" };
  var _hoisted_36 = {
    key: 0,
    class: "btn-group"
  };
  var _hoisted_45 = ["onClick"];
  function render6(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", null, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", null, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("img", {
          ref: "image_ref",
          src: $setup.src,
          alt: $props.file.name
        }, null, 8, _hoisted_113)
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_26, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", null, [
          $props.fixed_aspect_ratio == null ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_36, [
            ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)($setup.aspect_ratio_buttons, (button) => {
              return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("button", {
                type: "button",
                class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["btn btn-default btn-sm", {
                  active: isNaN($setup.aspect_ratio) ? isNaN(button.value) : button.value === $setup.aspect_ratio
                }]),
                key: button.label,
                onClick: ($event) => $setup.aspect_ratio = button.value
              }, (0, vue_runtime_esm_bundler_exports.toDisplayString)(button.label), 11, _hoisted_45);
            }), 128))
          ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
        ]),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", null, [
          $props.fixed_aspect_ratio == null ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("button", {
            key: 0,
            class: "btn btn-sm margin-right",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("toggle_image_cropper"))
          }, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Back")), 1)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("button", {
            class: "btn btn-primary btn-sm",
            onClick: $setup.crop_image
          }, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Crop")), 1)
        ])
      ])
    ]);
  }

  // frappe/public/js/frappe/file_uploader/ImageCropper.vue
  ImageCropper_default.render = render6;
  ImageCropper_default.__file = "frappe/public/js/frappe/file_uploader/ImageCropper.vue";
  ImageCropper_default.__scopeId = "data-v-21184c3b";
  var ImageCropper_default2 = ImageCropper_default;

  // sfc-script:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/FileUploader.vue?type=script
  var FileUploader_default = {
    __name: "FileUploader",
    props: {
      show_upload_button: {
        default: true
      },
      disable_file_browser: {
        default: false
      },
      allow_multiple: {
        default: true
      },
      as_dataurl: {
        default: false
      },
      doctype: {
        default: null
      },
      docname: {
        default: null
      },
      fieldname: {
        default: null
      },
      folder: {
        default: "Home"
      },
      method: {
        default: null
      },
      on_success: {
        default: null
      },
      make_attachments_public: {
        default: null
      },
      restrictions: {
        default: () => ({
          max_file_size: null,
          max_number_of_files: null,
          allowed_file_types: [],
          crop_image_aspect_ratio: null
        })
      },
      attach_doc_image: {
        default: false
      },
      upload_notes: {
        default: null
      },
      allow_web_link: {
        default: true
      },
      allow_take_photo: {
        default: true
      },
      allow_toggle_private: {
        default: true
      },
      allow_toggle_optimize: {
        default: true
      },
      allow_google_drive: {
        default: true
      }
    },
    setup(__props, { expose: __expose }) {
      var _a;
      const props = __props;
      let files = (0, vue_runtime_esm_bundler_exports.ref)([]);
      let file_input = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let file_browser = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let web_link = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let is_dragging = (0, vue_runtime_esm_bundler_exports.ref)(false);
      let currently_uploading = (0, vue_runtime_esm_bundler_exports.ref)(-1);
      let show_file_browser = (0, vue_runtime_esm_bundler_exports.ref)(false);
      let show_web_link = (0, vue_runtime_esm_bundler_exports.ref)(false);
      let show_image_cropper = (0, vue_runtime_esm_bundler_exports.ref)(false);
      let crop_image_with_index = (0, vue_runtime_esm_bundler_exports.ref)(-1);
      let trigger_upload = (0, vue_runtime_esm_bundler_exports.ref)(false);
      let close_dialog = (0, vue_runtime_esm_bundler_exports.ref)(false);
      let hide_dialog_footer = (0, vue_runtime_esm_bundler_exports.ref)(false);
      let allow_take_photo = (0, vue_runtime_esm_bundler_exports.ref)(false);
      let google_drive_settings = (0, vue_runtime_esm_bundler_exports.ref)({
        enabled: false
      });
      let wrapper_ready = (0, vue_runtime_esm_bundler_exports.ref)(false);
      if (props.allow_take_photo) {
        allow_take_photo.value = window.navigator.mediaDevices;
      }
      if (frappe.user_id !== "Guest" && props.allow_google_drive) {
        frappe.call({
          method: "frappe.integrations.doctype.google_settings.google_settings.get_file_picker_settings",
          callback: (resp) => {
            if (!resp.exc) {
              google_drive_settings.value = resp.message;
            }
          }
        });
      }
      if (props.restrictions.max_file_size == null) {
        frappe.call("frappe.core.api.file.get_max_file_size").then((res) => {
          props.restrictions.max_file_size = Number(res.message);
        });
      }
      if (props.restrictions.max_number_of_files == null && props.doctype) {
        props.restrictions.max_number_of_files = (_a = frappe.get_meta(props.doctype)) == null ? void 0 : _a.max_attachments;
      }
      function dragover() {
        is_dragging.value = true;
      }
      function dragleave() {
        is_dragging.value = false;
      }
      function dropfiles(e) {
        is_dragging.value = false;
        add_files(e.dataTransfer.files);
      }
      function browse_files() {
        file_input.value.click();
      }
      function on_file_input(e) {
        add_files(file_input.value.files);
      }
      function remove_file(file) {
        files.value = files.value.filter((f) => f !== file);
      }
      function toggle_image_cropper(index) {
        crop_image_with_index.value = show_image_cropper.value ? -1 : index;
        hide_dialog_footer.value = !show_image_cropper.value;
        show_image_cropper.value = !show_image_cropper.value;
      }
      function toggle_all_private() {
        let flag;
        let private_values = files.value.filter((file) => file.private);
        if (private_values.length < files.value.length) {
          flag = true;
        } else {
          flag = false;
        }
        files.value = files.value.map((file) => {
          file.private = flag;
          return file;
        });
      }
      function show_max_files_number_warning(file) {
        console.warn(
          `File skipped because it exceeds the allowed specified limit of ${max_number_of_files} uploads`,
          file
        );
        if (props.doctype) {
          MSG = __('File "{0}" was skipped because only {1} uploads are allowed for DocType "{2}"', [
            file.name,
            max_number_of_files,
            props.doctype
          ]);
        } else {
          MSG = __('File "{0}" was skipped because only {1} uploads are allowed', [
            file.name,
            max_number_of_files
          ]);
        }
        frappe.show_alert({
          message: MSG,
          indicator: "orange"
        });
      }
      function add_files(file_array) {
        let _files = Array.from(file_array).filter(check_restrictions).map((file) => {
          let is_image = file.type.startsWith("image");
          let size_kb = file.size / 1024;
          return {
            file_obj: file,
            cropper_file: file,
            crop_box_data: null,
            optimize: size_kb > 200 && is_image && !file.type.includes("svg"),
            name: file.name,
            doc: null,
            progress: 0,
            total: 0,
            failed: false,
            request_succeeded: false,
            error_message: null,
            uploading: false,
            private: !props.make_attachments_public
          };
        });
        max_number_of_files = props.restrictions.max_number_of_files;
        if (max_number_of_files && _files.length > max_number_of_files) {
          _files.slice(max_number_of_files).forEach((file) => {
            show_max_files_number_warning(file, props.doctype);
          });
          _files = _files.slice(0, max_number_of_files);
        }
        files.value = files.value.concat(_files);
        if (files.value.length === 1 && !props.allow_multiple && props.restrictions.crop_image_aspect_ratio != null) {
          if (!files.value[0].file_obj.type.includes("svg")) {
            toggle_image_cropper(0);
          }
        }
      }
      function check_restrictions(file) {
        let { max_file_size, allowed_file_types = [] } = props.restrictions;
        let is_correct_type = true;
        let valid_file_size = true;
        if (allowed_file_types && allowed_file_types.length) {
          is_correct_type = allowed_file_types.some((type) => {
            if (type.includes("/")) {
              if (!file.type)
                return false;
              return file.type.match(type);
            }
            if (type[0] === ".") {
              return file.name.toLowerCase().endsWith(type.toLowerCase());
            }
            return false;
          });
        }
        if (max_file_size && file.size != null) {
          valid_file_size = file.size < max_file_size;
        }
        if (!is_correct_type) {
          console.warn("File skipped because of invalid file type", file);
          frappe.show_alert({
            message: __('File "{0}" was skipped because of invalid file type', [file.name]),
            indicator: "orange"
          });
        }
        if (!valid_file_size) {
          console.warn("File skipped because of invalid file size", file.size, file);
          frappe.show_alert({
            message: __('File "{0}" was skipped because size exceeds {1} MB', [
              file.name,
              max_file_size / (1024 * 1024)
            ]),
            indicator: "orange"
          });
        }
        return is_correct_type && valid_file_size;
      }
      function upload_files(dialog) {
        if (show_file_browser.value) {
          return upload_via_file_browser();
        }
        if (show_web_link.value) {
          return upload_via_web_link();
        }
        if (props.as_dataurl) {
          return return_as_dataurl();
        }
        if (!files.value.length) {
          frappe.msgprint(__("Please select a file first."));
          return Promise.reject();
        }
        dialog == null ? void 0 : dialog.get_primary_btn().prop("disabled", true);
        dialog == null ? void 0 : dialog.get_secondary_btn().prop("disabled", true);
        return frappe.run_serially(files.value.map((file, i) => () => upload_file(file, i)));
      }
      function upload_via_file_browser() {
        let selected_file = file_browser.value.selected_node;
        if (!selected_file.value) {
          frappe.msgprint(__("Click on a file to select it."));
          close_dialog.value = true;
          return Promise.reject();
        }
        close_dialog.value = true;
        return upload_file({
          library_file_name: selected_file.value
        });
      }
      function upload_via_web_link() {
        let file_url = web_link.value.url;
        if (!file_url) {
          frappe.msgprint(__("Invalid URL"));
          close_dialog.value = true;
          return Promise.reject();
        }
        file_url = decodeURI(file_url);
        close_dialog.value = true;
        return upload_file({
          file_url
        });
      }
      function return_as_dataurl() {
        let promises = files.value.map(
          (file) => frappe.dom.file_to_base64(file.file_obj).then((dataurl) => {
            file.dataurl = dataurl;
            props.on_success && props.on_success(file);
          })
        );
        close_dialog.value = true;
        return Promise.all(promises);
      }
      function upload_file(file, i) {
        currently_uploading.value = i;
        return new Promise((resolve, reject) => {
          let xhr = new XMLHttpRequest();
          xhr.upload.addEventListener("loadstart", (e) => {
            file.uploading = true;
          });
          xhr.upload.addEventListener("progress", (e) => {
            if (e.lengthComputable) {
              file.progress = e.loaded;
              file.total = e.total;
            }
          });
          xhr.upload.addEventListener("load", (e) => {
            file.uploading = false;
            resolve();
          });
          xhr.addEventListener("error", (e) => {
            file.failed = true;
            reject();
          });
          xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                file.request_succeeded = true;
                let r = null;
                let file_doc = null;
                try {
                  r = JSON.parse(xhr.responseText);
                  if (r.message.doctype === "File") {
                    file_doc = r.message;
                  }
                } catch (e) {
                  r = xhr.responseText;
                }
                file.doc = file_doc;
                if (props.on_success) {
                  props.on_success(file_doc, r);
                }
                if (i == files.value.length - 1 && files.value.every((file2) => file2.request_succeeded)) {
                  close_dialog.value = true;
                }
              } else if (xhr.status === 403) {
                file.failed = true;
                let response = JSON.parse(xhr.responseText);
                file.error_message = `Not permitted. ${response._error_message || ""}.`;
                try {
                  let server_messages = JSON.parse(response._server_messages);
                  server_messages.forEach((m) => {
                    m = JSON.parse(m);
                    file.error_message += `
 ${m.message} `;
                  });
                } catch (e) {
                  console.warning("Failed to parse server message", e);
                }
              } else if (xhr.status === 413) {
                file.failed = true;
                file.error_message = "Size exceeds the maximum allowed file size.";
              } else {
                file.failed = true;
                file.error_message = xhr.status === 0 ? "XMLHttpRequest Error" : `${xhr.status} : ${xhr.statusText}`;
                let error = null;
                try {
                  error = JSON.parse(xhr.responseText);
                } catch (e) {
                }
                frappe.request.cleanup({}, error);
              }
            }
          };
          xhr.open("POST", "/api/method/upload_file", true);
          xhr.setRequestHeader("Accept", "application/json");
          xhr.setRequestHeader("X-Frappe-CSRF-Token", frappe.csrf_token);
          let form_data = new FormData();
          if (file.file_obj) {
            form_data.append("file", file.file_obj, file.name);
          }
          form_data.append("is_private", +file.private);
          form_data.append("folder", props.folder);
          if (file.file_url) {
            form_data.append("file_url", file.file_url);
          }
          if (file.file_name) {
            form_data.append("file_name", file.file_name);
          }
          if (file.library_file_name) {
            form_data.append("library_file_name", file.library_file_name);
          }
          if (props.doctype && props.docname) {
            form_data.append("doctype", props.doctype);
            form_data.append("docname", props.docname);
          }
          if (props.fieldname) {
            form_data.append("fieldname", props.fieldname);
          }
          if (props.method) {
            form_data.append("method", props.method);
          }
          if (file.optimize) {
            form_data.append("optimize", true);
          }
          if (props.attach_doc_image) {
            form_data.append("max_width", 200);
            form_data.append("max_height", 200);
          }
          xhr.send(form_data);
        });
      }
      function capture_image() {
        const capture = new frappe.ui.Capture({
          animate: false,
          error: true
        });
        capture.show();
        capture.submit((data_urls) => {
          data_urls.forEach((data_url) => {
            let filename = `capture_${frappe.datetime.now_datetime().replaceAll(/[: -]/g, "_")}.png`;
            url_to_file(data_url, filename, "image/png").then((file) => add_files([file]));
          });
        });
      }
      function show_google_drive_picker() {
        close_dialog.value = true;
        let google_drive = new GoogleDrivePicker(__spreadValues({
          pickerCallback: (data) => google_drive_callback(data)
        }, google_drive_settings.value));
        google_drive.loadPicker();
      }
      function google_drive_callback(data) {
        if (data.action == google.picker.Action.PICKED) {
          upload_file({
            file_url: data.docs[0].url,
            file_name: data.docs[0].name
          });
        } else if (data.action == google.picker.Action.CANCEL) {
          cur_frm.attachments.new_attachment();
        }
      }
      function url_to_file(url, filename, mime_type) {
        return fetch(url).then((res) => res.arrayBuffer()).then((buffer) => new File([buffer], filename, { type: mime_type }));
      }
      let upload_complete = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        return files.value.length > 0 && files.value.every((file) => file.total !== 0 && file.progress === file.total);
      });
      (0, vue_runtime_esm_bundler_exports.watch)(
        files,
        (newvalue, oldvalue) => {
          if (!props.allow_multiple && newvalue.length > 1) {
            files.value = [newvalue[newvalue.length - 1]];
          }
        },
        { deep: true }
      );
      __expose({
        files,
        add_files,
        upload_files,
        toggle_all_private,
        wrapper_ready,
        close_dialog
      });
      const __returned__ = { props, get files() {
        return files;
      }, set files(v) {
        files = v;
      }, get file_input() {
        return file_input;
      }, set file_input(v) {
        file_input = v;
      }, get file_browser() {
        return file_browser;
      }, set file_browser(v) {
        file_browser = v;
      }, get web_link() {
        return web_link;
      }, set web_link(v) {
        web_link = v;
      }, get is_dragging() {
        return is_dragging;
      }, set is_dragging(v) {
        is_dragging = v;
      }, get currently_uploading() {
        return currently_uploading;
      }, set currently_uploading(v) {
        currently_uploading = v;
      }, get show_file_browser() {
        return show_file_browser;
      }, set show_file_browser(v) {
        show_file_browser = v;
      }, get show_web_link() {
        return show_web_link;
      }, set show_web_link(v) {
        show_web_link = v;
      }, get show_image_cropper() {
        return show_image_cropper;
      }, set show_image_cropper(v) {
        show_image_cropper = v;
      }, get crop_image_with_index() {
        return crop_image_with_index;
      }, set crop_image_with_index(v) {
        crop_image_with_index = v;
      }, get trigger_upload() {
        return trigger_upload;
      }, set trigger_upload(v) {
        trigger_upload = v;
      }, get close_dialog() {
        return close_dialog;
      }, set close_dialog(v) {
        close_dialog = v;
      }, get hide_dialog_footer() {
        return hide_dialog_footer;
      }, set hide_dialog_footer(v) {
        hide_dialog_footer = v;
      }, get allow_take_photo() {
        return allow_take_photo;
      }, set allow_take_photo(v) {
        allow_take_photo = v;
      }, get google_drive_settings() {
        return google_drive_settings;
      }, set google_drive_settings(v) {
        google_drive_settings = v;
      }, get wrapper_ready() {
        return wrapper_ready;
      }, set wrapper_ready(v) {
        wrapper_ready = v;
      }, dragover, dragleave, dropfiles, browse_files, on_file_input, remove_file, toggle_image_cropper, toggle_all_private, show_max_files_number_warning, add_files, check_restrictions, upload_files, upload_via_file_browser, upload_via_web_link, return_as_dataurl, upload_file, capture_image, show_google_drive_picker, google_drive_callback, url_to_file, get upload_complete() {
        return upload_complete;
      }, set upload_complete(v) {
        upload_complete = v;
      }, computed: vue_runtime_esm_bundler_exports.computed, ref: vue_runtime_esm_bundler_exports.ref, watch: vue_runtime_esm_bundler_exports.watch, FilePreview: FilePreview_default2, FileBrowser: FileBrowser_default2, WebLink: WebLink_default2, get GoogleDrivePicker() {
        return GoogleDrivePicker;
      }, ImageCropper: ImageCropper_default2 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/Users/amee/erpnext-bench/apps/frappe/frappe/public/js/frappe/file_uploader/FileUploader.vue?type=template
  var _withScopeId = (n) => ((0, vue_runtime_esm_bundler_exports.pushScopeId)("data-v-8673c2f5"), n = n(), (0, vue_runtime_esm_bundler_exports.popScopeId)(), n);
  var _hoisted_114 = ["onDragover", "onDragleave", "onDrop"];
  var _hoisted_27 = { class: "file-upload-area" };
  var _hoisted_37 = { key: 0 };
  var _hoisted_46 = { class: "text-center" };
  var _hoisted_53 = { class: "mt-3 text-center" };
  var _hoisted_63 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createStaticVNode)('<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8673c2f5><circle cx="15" cy="15" r="15" fill="var(--subtle-fg)" data-v-8673c2f5></circle><path d="M13.5 22V19" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" data-v-8673c2f5></path><path d="M16.5 22V19" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" data-v-8673c2f5></path><path d="M10.5 22H19.5" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" data-v-8673c2f5></path><path d="M7.5 16H22.5" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" data-v-8673c2f5></path><path d="M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" data-v-8673c2f5></path></svg>', 1);
  var _hoisted_73 = { class: "mt-1" };
  var _hoisted_83 = ["multiple", "accept"];
  var _hoisted_93 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("circle", {
      cx: "15",
      cy: "15",
      r: "15",
      fill: "var(--subtle-fg)"
    }),
    /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("path", {
      d: "M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z",
      stroke: "var(--text-color)",
      "stroke-miterlimit": "10",
      "stroke-linecap": "square"
    }),
    /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("path", {
      d: "M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12",
      stroke: "var(--text-color)",
      "stroke-miterlimit": "10",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  ], -1));
  var _hoisted_102 = { class: "mt-1" };
  var _hoisted_115 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createStaticVNode)('<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8673c2f5><circle cx="15" cy="15" r="15" fill="var(--subtle-fg)" data-v-8673c2f5></circle><path d="M12.0469 17.9543L17.9558 12.0454" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" data-v-8673c2f5></path><path d="M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" data-v-8673c2f5></path><path d="M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" data-v-8673c2f5></path></svg>', 1);
  var _hoisted_123 = { class: "mt-1" };
  var _hoisted_132 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("circle", {
      cx: "15",
      cy: "15",
      r: "15",
      fill: "var(--subtle-fg)"
    }),
    /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("path", {
      d: "M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z",
      stroke: "var(--text-color)",
      "stroke-linejoin": "round"
    }),
    /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("circle", {
      cx: "15",
      cy: "16",
      r: "2.5",
      stroke: "var(--text-color)"
    })
  ], -1));
  var _hoisted_142 = { class: "mt-1" };
  var _hoisted_152 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("svg", {
    width: "30",
    height: "30"
  }, [
    /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("image", {
      href: "/assets/frappe/icons/social/google_drive.svg",
      width: "30",
      height: "30"
    })
  ], -1));
  var _hoisted_162 = { class: "mt-1" };
  var _hoisted_172 = {
    key: 0,
    class: "mt-3 text-center"
  };
  var _hoisted_182 = { key: 1 };
  var _hoisted_192 = { class: "file-preview-area" };
  var _hoisted_202 = {
    key: 0,
    class: "file-preview-container"
  };
  var _hoisted_21 = {
    key: 1,
    class: "flex align-items-center justify-content-end"
  };
  var _hoisted_222 = { key: 0 };
  var _hoisted_232 = { key: 1 };
  function render7(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: "file-uploader",
      onDragover: (0, vue_runtime_esm_bundler_exports.withModifiers)($setup.dragover, ["prevent"]),
      onDragleave: (0, vue_runtime_esm_bundler_exports.withModifiers)($setup.dragleave, ["prevent"]),
      onDrop: (0, vue_runtime_esm_bundler_exports.withModifiers)($setup.dropfiles, ["prevent"])
    }, [
      (0, vue_runtime_esm_bundler_exports.withDirectives)((0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_27, [
        !$setup.is_dragging ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_37, [
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_46, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Drag and drop files here or upload from")), 1),
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_53, [
            (0, vue_runtime_esm_bundler_exports.createElementVNode)("button", {
              class: "btn btn-file-upload",
              onClick: $setup.browse_files
            }, [
              _hoisted_63,
              (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_73, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("My Device")), 1)
            ]),
            (0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
              type: "file",
              class: "hidden",
              ref: "file_input",
              onChange: $setup.on_file_input,
              multiple: $props.allow_multiple,
              accept: ($props.restrictions.allowed_file_types || []).join(", ")
            }, null, 40, _hoisted_83),
            !$props.disable_file_browser ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("button", {
              key: 0,
              class: "btn btn-file-upload",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.show_file_browser = true)
            }, [
              _hoisted_93,
              (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_102, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Library")), 1)
            ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
            $props.allow_web_link ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("button", {
              key: 1,
              class: "btn btn-file-upload",
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.show_web_link = true)
            }, [
              _hoisted_115,
              (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_123, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Link")), 1)
            ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
            $setup.allow_take_photo ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("button", {
              key: 2,
              class: "btn btn-file-upload",
              onClick: $setup.capture_image
            }, [
              _hoisted_132,
              (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_142, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Camera")), 1)
            ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
            $props.allow_google_drive && $setup.google_drive_settings.enabled ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("button", {
              key: 3,
              class: "btn btn-file-upload",
              onClick: $setup.show_google_drive_picker
            }, [
              _hoisted_152,
              (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_162, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Google Drive")), 1)
            ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
          ]),
          $props.upload_notes ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_172, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.upload_notes), 1)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
        ])) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_182, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Drop files here")), 1))
      ], 512), [
        [vue_runtime_esm_bundler_exports.vShow, $setup.files.length === 0 && !$setup.show_file_browser && !$setup.show_web_link]
      ]),
      (0, vue_runtime_esm_bundler_exports.withDirectives)((0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_192, [
        !$setup.show_image_cropper ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_202, [
          ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)($setup.files, (file, i) => {
            return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)($setup["FilePreview"], {
              key: file.name,
              file,
              allow_toggle_private: $props.allow_toggle_private,
              allow_toggle_optimize: $props.allow_toggle_optimize,
              onRemove: ($event) => $setup.remove_file(file),
              onToggle_private: ($event) => file.private = !file.private,
              onToggle_optimize: ($event) => file.optimize = !file.optimize,
              onToggle_image_cropper: ($event) => $setup.toggle_image_cropper(i)
            }, null, 8, ["file", "allow_toggle_private", "allow_toggle_optimize", "onRemove", "onToggle_private", "onToggle_optimize", "onToggle_image_cropper"]);
          }), 128))
        ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
        $props.show_upload_button && $setup.currently_uploading === -1 ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_21, [
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("button", {
            class: "btn btn-primary btn-sm margin-right",
            onClick: _cache[2] || (_cache[2] = () => $setup.upload_files())
          }, [
            $setup.files.length === 1 ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("span", _hoisted_222, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Upload file")), 1)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("span", _hoisted_232, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Upload {0} files", [$setup.files.length])), 1))
          ])
        ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
      ], 512), [
        [vue_runtime_esm_bundler_exports.vShow, $setup.files.length && !$setup.show_file_browser && !$setup.show_web_link]
      ]),
      $setup.show_image_cropper && $setup.wrapper_ready ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)($setup["ImageCropper"], {
        key: 0,
        file: $setup.files[$setup.crop_image_with_index],
        fixed_aspect_ratio: $props.restrictions.crop_image_aspect_ratio,
        onToggle_image_cropper: _cache[3] || (_cache[3] = ($event) => $setup.toggle_image_cropper(-1)),
        onUpload_after_crop: _cache[4] || (_cache[4] = ($event) => $setup.trigger_upload = true)
      }, null, 8, ["file", "fixed_aspect_ratio"])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      $setup.show_file_browser && !$props.disable_file_browser ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)($setup["FileBrowser"], {
        key: 1,
        ref: "file_browser",
        onHideBrowser: _cache[5] || (_cache[5] = ($event) => $setup.show_file_browser = false)
      }, null, 512)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      $setup.show_web_link ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)($setup["WebLink"], {
        key: 2,
        ref: "web_link",
        onHideWebLink: _cache[6] || (_cache[6] = ($event) => $setup.show_web_link = false)
      }, null, 512)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 40, _hoisted_114);
  }

  // frappe/public/js/frappe/file_uploader/FileUploader.vue
  FileUploader_default.render = render7;
  FileUploader_default.__file = "frappe/public/js/frappe/file_uploader/FileUploader.vue";
  FileUploader_default.__scopeId = "data-v-8673c2f5";
  var FileUploader_default2 = FileUploader_default;

  // frappe/public/js/frappe/file_uploader/file_uploader.bundle.js
  var FileUploader = class {
    constructor({
      wrapper,
      method,
      on_success,
      doctype,
      docname,
      fieldname,
      files,
      folder,
      restrictions = {},
      upload_notes,
      allow_multiple,
      as_dataurl,
      disable_file_browser,
      dialog_title,
      attach_doc_image,
      frm,
      make_attachments_public,
      allow_web_link,
      allow_take_photo,
      allow_toggle_private,
      allow_toggle_optimize,
      allow_google_drive
    } = {}) {
      var _a;
      frm && frm.attachments.max_reached(true);
      if (!wrapper) {
        this.make_dialog(dialog_title);
      } else {
        this.wrapper = wrapper.get ? wrapper.get(0) : wrapper;
      }
      if (restrictions && !restrictions.allowed_file_types) {
        let allowed_extensions = (_a = frappe.sys_defaults) == null ? void 0 : _a.allowed_file_extensions;
        if (allowed_extensions) {
          restrictions.allowed_file_types = allowed_extensions.split("\n").map((ext) => `.${ext}`);
        }
      }
      let app = (0, vue_runtime_esm_bundler_exports.createApp)(FileUploader_default2, {
        show_upload_button: !Boolean(this.dialog),
        doctype,
        docname,
        fieldname,
        method,
        folder,
        on_success,
        restrictions,
        upload_notes,
        allow_multiple,
        as_dataurl,
        disable_file_browser,
        attach_doc_image,
        make_attachments_public,
        allow_web_link,
        allow_take_photo,
        allow_toggle_private,
        allow_toggle_optimize,
        allow_google_drive
      });
      SetVueGlobals(app);
      this.uploader = app.mount(this.wrapper);
      if (!this.dialog) {
        this.uploader.wrapper_ready = true;
      }
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => this.uploader.files,
        (files2) => {
          let all_private = files2.every((file) => file.private);
          if (this.dialog) {
            this.dialog.set_secondary_action_label(
              all_private ? __("Set all public") : __("Set all private")
            );
          }
        },
        { deep: true }
      );
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => this.uploader.trigger_upload,
        (trigger_upload) => {
          if (trigger_upload) {
            this.upload_files();
          }
        }
      );
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => this.uploader.close_dialog,
        (close_dialog) => {
          if (close_dialog) {
            this.dialog && this.dialog.hide();
          }
        }
      );
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => this.uploader.hide_dialog_footer,
        (hide_dialog_footer) => {
          if (hide_dialog_footer) {
            this.dialog && this.dialog.footer.addClass("hide");
            this.dialog.$wrapper.data("bs.modal")._config.backdrop = "static";
          } else {
            this.dialog && this.dialog.footer.removeClass("hide");
            this.dialog.$wrapper.data("bs.modal")._config.backdrop = true;
          }
        }
      );
      if (files && files.length) {
        this.uploader.add_files(files);
      }
    }
    upload_files() {
      return this.uploader.upload_files(this.dialog);
    }
    make_dialog(title) {
      this.dialog = new frappe.ui.Dialog({
        title: title || __("Upload"),
        primary_action_label: __("Upload"),
        primary_action: () => this.upload_files(),
        secondary_action_label: __("Set all private"),
        secondary_action: () => {
          this.uploader.toggle_all_private();
        },
        on_page_show: () => {
          this.uploader.wrapper_ready = true;
        }
      });
      this.wrapper = this.dialog.body;
      this.dialog.show();
      this.dialog.$wrapper.on("hidden.bs.modal", function() {
        $(this).data("bs.modal", null);
        $(this).remove();
      });
    }
  };
  frappe.provide("frappe.ui");
  frappe.ui.FileUploader = FileUploader;
  var file_uploader_bundle_default = FileUploader;
})();
/*!
 * Cropper.js v1.6.1
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-09-17T03:44:19.860Z
 */
/*! #__NO_SIDE_EFFECTS__ */
//# sourceMappingURL=file_uploader.bundle.VCEWAFMB.js.map
