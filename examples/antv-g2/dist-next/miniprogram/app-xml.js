(function(){/* write at: 2022/11/21 14:19:14 */ (function(__DEFAULT_EXPRESSION__,__OMIT__,__ADDITION_KEY__,__ASSIGN__,__TRY_RUN__,__REPLACE_PROPERTY__,__COPE_SJS_MODULE__,__NORMALIZE_LIST__,__IS_UNDEF__,__FOR_THIS_KEY__,__GET_PATH__, __appCode__, defineSafeScript, requireSafeScript, DEFINE_ID) {
/* sourceFile: pages/home/index.tyml */
DEFINE_ID = "dist/tuya/pages/home/index.tyml.js";
defineSafeScript(DEFINE_ID, function (require, module, exports, getRegExp,getDate,global,window,top,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit ){ 'use strict';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_tyml_exports = {};
__export(index_tyml_exports, {
  default: () => home_default,
  templateExport: () => templateExport2
});
module.exports = __toCommonJS(index_tyml_exports);
var __EXPRESSION__ = __DEFAULT_EXPRESSION__;
var _safeScript = {};
var _patchDataSjs = {};
var _forListData;
var _forPatchData;
var templateExport = {};
var templateUsage = {};
templateExport["REMAX_TPL"] = templateUsage["REMAX_TPL"] = function render(ctx, host, patchData) {
  var _a;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    (_forListData = __EXPRESSION__3((_a = ctx.root) == null ? void 0 : _a.children), _forPatchData = __TRY_RUN__(function() {
      var _a2;
      return __EXPRESSION__3((_a2 = _patchDataSjs.root) == null ? void 0 : _a2.children);
    }), _renderList(_forListData, function renderList(item, idx) {
      function listItem(ctx2, patchData2, _FOR_KEY_) {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        return _createBlock(
          {
            tid: "0-0",
            name: _Block,
            children: __ADDITION_KEY__(
              _normalizeChildren([
                (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                  id: __EXPRESSION__3("REMAX_TPL_" + ((_c = (_b = (_a2 = ctx2.root) == null ? void 0 : _a2.nodes) == null ? void 0 : _b[ctx2.item]) == null ? void 0 : _c.type)),
                  module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f = (_e = (_d = ctx2.root) == null ? void 0 : _d.nodes) == null ? void 0 : _e[ctx2.item]) == null ? void 0 : _f.type))],
                  data: __EXPRESSION__3({ i: (_h = (_g = ctx2.root) == null ? void 0 : _g.nodes) == null ? void 0 : _h[ctx2.item] }),
                  patchData: __EXPRESSION__3({ i: (_j = (_i = patchData2.root) == null ? void 0 : _i.nodes) == null ? void 0 : _j[patchData2.item] })
                }))
              ]),
              { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
            )
          },
          {}
        );
      }
      var itemCtx = { index: idx };
      itemCtx["item"] = item;
      var listData = __ASSIGN__({}, ctx, itemCtx);
      var updateItem = { index: idx };
      updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
      var patchForData = __ASSIGN__({}, patchData, updateItem);
      return listItem(listData, patchForData, "item");
    }))
  ]);
};
templateExport["REMAX_TPL_button"] = templateUsage["REMAX_TPL_button"] = function render2(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "1-0",
      name: "button",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        disabled: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["disabled"], "disabled")),
        "form-type": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["form-type"], "form-type")),
        hidden: _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["id"], "id")),
        loading: _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["loading"], "loading")),
        "open-type": _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["open-type"], "open-type")),
        plain: _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["plain"], "plain")),
        size: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["size"], "size")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["style"], "style"))),
        type: _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["type"], "type"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindanimationstart"], "bind:animationstart"),
        "bind:getphonenumber": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindgetphonenumber"], "bind:getphonenumber"),
        "bind:longpress": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["animation"]],
        class: [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["class"]],
        "disable-scroll": [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["disable-scroll"]],
        disabled: [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["disabled"]],
        "form-type": [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["form-type"]],
        hidden: [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["hidden"]],
        "hover-class": [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["hover-class"]],
        "hover-start-time": [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["hover-start-time"]],
        "hover-stay-time": [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["hover-stay-time"]],
        "hover-stop-propagation": [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["hover-stop-propagation"]],
        id: [(_za = (_ya = patchData.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["id"]],
        loading: [(_Ba = (_Aa = patchData.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["loading"]],
        "open-type": [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["open-type"]],
        plain: [(_Fa = (_Ea = patchData.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["plain"]],
        size: [(_Ha = (_Ga = patchData.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["size"]],
        style: [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["style"]],
        type: [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["type"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_Ma = ctx.i) == null ? void 0 : _Ma.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "1-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_camera"] = templateUsage["REMAX_TPL_camera"] = function render3(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "2-0",
      name: "camera",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        "background-color": _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["background-color"], "background-color")),
        "border-color": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["border-color"], "border-color")),
        "border-radius": _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["border-radius"], "border-radius")),
        "border-radius-bottom-left": _normalizeProps(
          __EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["border-radius-bottom-left"], "border-radius-bottom-left")
        ),
        "border-radius-bottom-right": _normalizeProps(
          __EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["border-radius-bottom-right"], "border-radius-bottom-right")
        ),
        "border-radius-top-left": _normalizeProps(
          __EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["border-radius-top-left"], "border-radius-top-left")
        ),
        "border-radius-top-right": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["border-radius-top-right"], "border-radius-top-right")
        ),
        "border-style": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["border-style"], "border-style")),
        "border-width": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["border-width"], "border-width")),
        "class-name": _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["class-name"], "class-name")),
        "device-position": _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["device-position"], "device-position")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["disable-scroll"], "disable-scroll")),
        flash: _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["flash"], "flash")),
        hidden: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["id"], "id")),
        mode: _normalizeProps(__EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["mode"], "mode")),
        resolution: _normalizeProps(__EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["resolution"], "resolution")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["style"], "style"))),
        "update-layout": _normalizeProps(__EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["update-layout"], "update-layout"))
      },
      event: {
        "bind:bindstop": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bind:bindstop"], "bind:bindstop"),
        "bind:error": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bind:error"], "bind:error"),
        "bind:initdone": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bind:initdone"], "bind:initdone"),
        "bind:animationend": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_pa = (_oa = ctx.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_ra = (_qa = ctx.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_ta = (_sa = ctx.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_va = (_ua = ctx.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["animation"]],
        "background-color": [(_za = (_ya = patchData.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["background-color"]],
        "border-color": [(_Ba = (_Aa = patchData.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["border-color"]],
        "border-radius": [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["border-radius"]],
        "border-radius-bottom-left": [(_Fa = (_Ea = patchData.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["border-radius-bottom-left"]],
        "border-radius-bottom-right": [(_Ha = (_Ga = patchData.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["border-radius-bottom-right"]],
        "border-radius-top-left": [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["border-radius-top-left"]],
        "border-radius-top-right": [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["border-radius-top-right"]],
        "border-style": [(_Na = (_Ma = patchData.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["border-style"]],
        "border-width": [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["border-width"]],
        "class-name": [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["class-name"]],
        "device-position": [(_Ta = (_Sa = patchData.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["device-position"]],
        "disable-scroll": [(_Va = (_Ua = patchData.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["disable-scroll"]],
        flash: [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["flash"]],
        hidden: [(_Za = (_Ya = patchData.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["hidden"]],
        "hover-class": [(_$a = (__a = patchData.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["hover-class"]],
        "hover-start-time": [(_bb = (_ab = patchData.i) == null ? void 0 : _ab.props) == null ? void 0 : _bb["hover-start-time"]],
        "hover-stay-time": [(_db = (_cb = patchData.i) == null ? void 0 : _cb.props) == null ? void 0 : _db["hover-stay-time"]],
        "hover-stop-propagation": [(_fb = (_eb = patchData.i) == null ? void 0 : _eb.props) == null ? void 0 : _fb["hover-stop-propagation"]],
        id: [(_hb = (_gb = patchData.i) == null ? void 0 : _gb.props) == null ? void 0 : _hb["id"]],
        mode: [(_jb = (_ib = patchData.i) == null ? void 0 : _ib.props) == null ? void 0 : _jb["mode"]],
        resolution: [(_lb = (_kb = patchData.i) == null ? void 0 : _kb.props) == null ? void 0 : _lb["resolution"]],
        style: [(_nb = (_mb = patchData.i) == null ? void 0 : _mb.props) == null ? void 0 : _nb["style"]],
        "update-layout": [(_pb = (_ob = patchData.i) == null ? void 0 : _ob.props) == null ? void 0 : _pb["update-layout"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_qb = ctx.i) == null ? void 0 : _qb.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "2-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_canvas"] = templateUsage["REMAX_TPL_canvas"] = function render4(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "3-0",
      name: "canvas",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        "canvas-id": _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["canvas-id"], "canvas-id")),
        class: _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["id"], "id")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["style"], "style"))),
        type: _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["type"], "type"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindanimationstart"], "bind:animationstart"),
        "bind:error": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["binderror"], "bind:error"),
        "bind:longpress": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_X = (_W = patchData.i) == null ? void 0 : _W.props) == null ? void 0 : _X["animation"]],
        "canvas-id": [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["canvas-id"]],
        class: [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["class"]],
        "disable-scroll": [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["disable-scroll"]],
        hidden: [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["hidden"]],
        "hover-class": [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["hover-class"]],
        "hover-start-time": [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["hover-start-time"]],
        "hover-stay-time": [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["hover-stay-time"]],
        "hover-stop-propagation": [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["hover-stop-propagation"]],
        id: [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["id"]],
        style: [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["style"]],
        type: [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["type"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_sa = ctx.i) == null ? void 0 : _sa.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "3-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_checkbox"] = templateUsage["REMAX_TPL_checkbox"] = function render5(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "4-0",
      name: "checkbox",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        checked: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["checked"], "checked")),
        class: _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["class"], "class")),
        color: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["color"], "color")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["disable-scroll"], "disable-scroll")),
        disabled: _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["disabled"], "disabled")),
        hidden: _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["id"], "id")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["style"], "style"))),
        value: _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["value"], "value"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["animation"]],
        checked: [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["checked"]],
        class: [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["class"]],
        color: [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["color"]],
        "disable-scroll": [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["disable-scroll"]],
        disabled: [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["disabled"]],
        hidden: [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["hidden"]],
        "hover-class": [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["hover-class"]],
        "hover-start-time": [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["hover-start-time"]],
        "hover-stay-time": [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["hover-stay-time"]],
        "hover-stop-propagation": [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["hover-stop-propagation"]],
        id: [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["id"]],
        style: [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["style"]],
        value: [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["value"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ya = ctx.i) == null ? void 0 : _ya.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "4-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_checkbox-group"] = templateUsage["REMAX_TPL_checkbox-group"] = function render6(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "5-0",
      name: "checkbox-group",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["id"], "id")),
        name: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["name"], "name")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["style"], "style")))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["bindanimationstart"], "bind:animationstart"),
        "bind:change": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindchange"], "bind:change"),
        "bind:longpress": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_V = (_U = patchData.i) == null ? void 0 : _U.props) == null ? void 0 : _V["animation"]],
        class: [(_X = (_W = patchData.i) == null ? void 0 : _W.props) == null ? void 0 : _X["class"]],
        "disable-scroll": [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["disable-scroll"]],
        hidden: [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["hidden"]],
        "hover-class": [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["hover-class"]],
        "hover-start-time": [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["hover-start-time"]],
        "hover-stay-time": [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["hover-stay-time"]],
        "hover-stop-propagation": [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["hover-stop-propagation"]],
        id: [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["id"]],
        name: [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["name"]],
        style: [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["style"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_oa = ctx.i) == null ? void 0 : _oa.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "5-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_cover-view"] = templateUsage["REMAX_TPL_cover-view"] = function render7(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "6-0",
      name: "cover-view",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["id"], "id")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["style"], "style")))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_R = (_Q = patchData.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["animation"]],
        class: [(_T = (_S = patchData.i) == null ? void 0 : _S.props) == null ? void 0 : _T["class"]],
        "disable-scroll": [(_V = (_U = patchData.i) == null ? void 0 : _U.props) == null ? void 0 : _V["disable-scroll"]],
        hidden: [(_X = (_W = patchData.i) == null ? void 0 : _W.props) == null ? void 0 : _X["hidden"]],
        "hover-class": [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["hover-class"]],
        "hover-start-time": [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["hover-start-time"]],
        "hover-stay-time": [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["hover-stay-time"]],
        "hover-stop-propagation": [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["hover-stop-propagation"]],
        id: [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["id"]],
        style: [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["style"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ia = ctx.i) == null ? void 0 : _ia.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "6-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_form"] = templateUsage["REMAX_TPL_form"] = function render8(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "7-0",
      name: "form",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["id"], "id")),
        "report-submit": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["report-submit"], "report-submit")),
        "report-submit-timeout": _normalizeProps(
          __EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["report-submit-timeout"], "report-submit-timeout")
        ),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["style"], "style")))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindlongtap"], "bind:longtap"),
        "bind:reset": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindreset"], "bind:reset"),
        "bind:submit": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindsubmit"], "bind:submit"),
        "bind:tap": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["animation"]],
        class: [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["class"]],
        "disable-scroll": [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["disable-scroll"]],
        hidden: [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["hidden"]],
        "hover-class": [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["hover-class"]],
        "hover-start-time": [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["hover-start-time"]],
        "hover-stay-time": [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["hover-stay-time"]],
        "hover-stop-propagation": [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["hover-stop-propagation"]],
        id: [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["id"]],
        "report-submit": [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["report-submit"]],
        "report-submit-timeout": [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["report-submit-timeout"]],
        style: [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["style"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ua = ctx.i) == null ? void 0 : _ua.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "7-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_g-2-chart-index-0e35c37"] = templateUsage["REMAX_TPL_g-2-chart-index-0e35c37"] = function render9(ctx, host, patchData) {
  var _a;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _normalizeProps = host.normalizeProps;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "8-0",
      name: "g-2-chart-index-0e35c37",
      isStatic: true,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_a = ctx.i) == null ? void 0 : _a.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
            return _createBlock(
              {
                tid: "8-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    __EXPRESSION__3((_d = (_c = (_b = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b[ctx2.item]) == null ? void 0 : _c.props) == null ? void 0 : _d["slot"]) ? _createBlock(
                      {
                        tid: "8-2",
                        name: _Block,
                        children: _normalizeChildren([
                          _createElementVNode({
                            tid: "8-3",
                            name: "view",
                            attrs: {
                              slot: _normalizeProps(
                                __EXPRESSION__3((_h = (_g = (_f = (_e = ctx2.i) == null ? void 0 : _e.nodes) == null ? void 0 : _f[ctx2.item]) == null ? void 0 : _g.props) == null ? void 0 : _h["slot"], "slot")
                              )
                            },
                            updateFields: __OMIT__({
                              slot: [(_i = patchData2.i) == null ? void 0 : _i.nodes, (_k = (_j = patchData2.item) == null ? void 0 : _j.props) == null ? void 0 : _k["slot"]]
                            }),
                            isStatic: false,
                            children: _normalizeChildren([
                              (_forListData = __EXPRESSION__3((_n = (_m = (_l = ctx2.i) == null ? void 0 : _l.nodes) == null ? void 0 : _m[ctx2.item]) == null ? void 0 : _n.children), _forPatchData = __TRY_RUN__(function() {
                                var _a3, _b2, _c2;
                                return __EXPRESSION__3((_c2 = (_b2 = (_a3 = _patchDataSjs.i) == null ? void 0 : _a3.nodes) == null ? void 0 : _b2[_patchDataSjs.item]) == null ? void 0 : _c2.children);
                              }), _renderList(_forListData, function renderList2(item2, idx2) {
                                function listItem2(ctx3, patchData3, _FOR_KEY_2) {
                                  var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2;
                                  return _createBlock(
                                    {
                                      tid: "8-4",
                                      name: _Block,
                                      children: __ADDITION_KEY__(
                                        _normalizeChildren([
                                          (__IS_UNDEF__(patchData3[_FOR_KEY_2]) && (patchData3[_FOR_KEY_2] = ctx3[_FOR_KEY_2]), _createTemplate({
                                            id: __EXPRESSION__3(
                                              "REMAX_TPL_" + ((_e2 = (_d2 = (_c2 = (_b2 = (_a3 = ctx3.i) == null ? void 0 : _a3.nodes) == null ? void 0 : _b2[ctx3.item]) == null ? void 0 : _c2.nodes) == null ? void 0 : _d2[ctx3.sItem]) == null ? void 0 : _e2.type)
                                            ),
                                            module: templateUsage[__EXPRESSION__3(
                                              "REMAX_TPL_" + ((_j2 = (_i2 = (_h2 = (_g2 = (_f2 = ctx3.i) == null ? void 0 : _f2.nodes) == null ? void 0 : _g2[ctx3.item]) == null ? void 0 : _h2.nodes) == null ? void 0 : _i2[ctx3.sItem]) == null ? void 0 : _j2.type)
                                            )],
                                            data: __EXPRESSION__3({
                                              i: (_n2 = (_m2 = (_l2 = (_k2 = ctx3.i) == null ? void 0 : _k2.nodes) == null ? void 0 : _l2[ctx3.item]) == null ? void 0 : _m2.nodes) == null ? void 0 : _n2[ctx3.sItem]
                                            }),
                                            patchData: __EXPRESSION__3({
                                              i: (_r2 = (_q2 = (_p2 = (_o2 = patchData3.i) == null ? void 0 : _o2.nodes) == null ? void 0 : _p2[patchData3.item]) == null ? void 0 : _q2.nodes) == null ? void 0 : _r2[patchData3.sItem]
                                            })
                                          }))
                                        ]),
                                        { key: __FOR_THIS_KEY__(ctx3["sItem"], idx2), forKey: "*this" }
                                      )
                                    },
                                    {}
                                  );
                                }
                                var itemCtx2 = { index: idx2 };
                                itemCtx2["sItem"] = item2;
                                var listData2 = __ASSIGN__({}, ctx2, itemCtx2);
                                var updateItem2 = { index: idx2 };
                                updateItem2["sItem"] = __NORMALIZE_LIST__(_forPatchData)[idx2];
                                var patchForData2 = __ASSIGN__({}, patchData2, updateItem2);
                                return listItem2(listData2, patchForData2, "sItem");
                              }))
                            ])
                          })
                        ])
                      },
                      {}
                    ) : _createBlock(
                      {
                        tid: "8-5",
                        name: _Block,
                        children: _normalizeChildren([
                          (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                            id: __EXPRESSION__3("REMAX_TPL_" + ((_q = (_p = (_o = ctx2.i) == null ? void 0 : _o.nodes) == null ? void 0 : _p[ctx2.item]) == null ? void 0 : _q.type)),
                            module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_t = (_s = (_r = ctx2.i) == null ? void 0 : _r.nodes) == null ? void 0 : _s[ctx2.item]) == null ? void 0 : _t.type))],
                            data: __EXPRESSION__3({ i: (_v = (_u = ctx2.i) == null ? void 0 : _u.nodes) == null ? void 0 : _v[ctx2.item] }),
                            patchData: __EXPRESSION__3({ i: (_x = (_w = patchData2.i) == null ? void 0 : _w.nodes) == null ? void 0 : _x[patchData2.item] })
                          }))
                        ])
                      },
                      {}
                    )
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_image"] = templateUsage["REMAX_TPL_image"] = function render10(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "9-0",
      name: "image",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["id"], "id")),
        "lazy-load": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["lazy-load"], "lazy-load")),
        mode: _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["mode"], "mode")),
        src: _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["src"], "src")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["style"], "style")))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindanimationstart"], "bind:animationstart"),
        "bind:error": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["binderror"], "bind:error"),
        "bind:load": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindload"], "bind:load"),
        "bind:longpress": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["animation"]],
        class: [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["class"]],
        "disable-scroll": [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["disable-scroll"]],
        hidden: [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["hidden"]],
        "hover-class": [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["hover-class"]],
        "hover-start-time": [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["hover-start-time"]],
        "hover-stay-time": [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["hover-stay-time"]],
        "hover-stop-propagation": [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["hover-stop-propagation"]],
        id: [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["id"]],
        "lazy-load": [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["lazy-load"]],
        mode: [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["mode"]],
        src: [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["src"]],
        style: [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["style"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ya = ctx.i) == null ? void 0 : _ya.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "9-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_input"] = templateUsage["REMAX_TPL_input"] = function render11(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb, _tb, _ub, _vb, _wb, _xb, _yb;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "10-0",
      name: "input",
      attrs: {
        "adjust-position": _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["adjust-position"], "adjust-position")),
        animation: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["class"], "class")),
        "confirm-hold": _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["confirm-hold"], "confirm-hold")),
        "confirm-type": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["confirm-type"], "confirm-type")),
        cursor: _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["cursor"], "cursor")),
        "cursor-spacing": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["cursor-spacing"], "cursor-spacing")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["disable-scroll"], "disable-scroll")),
        disabled: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["disabled"], "disabled")),
        focus: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["focus"], "focus")),
        hidden: _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["id"], "id")),
        maxlength: _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["maxlength"], "maxlength")),
        password: _normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["password"], "password")),
        placeholder: _normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["placeholder"], "placeholder")),
        "placeholder-style": _normalizeProps(__EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["placeholder-style"], "placeholder-style")),
        "selection-end": _normalizeProps(__EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["selection-end"], "selection-end")),
        "selection-start": _normalizeProps(__EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["selection-start"], "selection-start")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["style"], "style"))),
        type: _normalizeProps(__EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["type"], "type")),
        value: _normalizeProps(__EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["value"], "value"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindanimationstart"], "bind:animationstart"),
        "bind:blur": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindblur"], "bind:blur"),
        "bind:confirm": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bindconfirm"], "bind:confirm"),
        "bind:focus": __EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bindfocus"], "bind:focus"),
        "bind:input": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bindinput"], "bind:input"),
        "bind:keyboardheightchange": __EXPRESSION__3(
          (_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["bindkeyboardheightchange"],
          "bind:keyboardheightchange"
        ),
        "bind:longpress": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_pa = (_oa = ctx.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_ra = (_qa = ctx.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_ta = (_sa = ctx.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_va = (_ua = ctx.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_xa = (_wa = ctx.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_za = (_ya = ctx.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_Ba = (_Aa = ctx.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        "adjust-position": [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["adjust-position"]],
        animation: [(_Fa = (_Ea = patchData.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["animation"]],
        class: [(_Ha = (_Ga = patchData.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["class"]],
        "confirm-hold": [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["confirm-hold"]],
        "confirm-type": [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["confirm-type"]],
        cursor: [(_Na = (_Ma = patchData.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["cursor"]],
        "cursor-spacing": [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["cursor-spacing"]],
        "disable-scroll": [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["disable-scroll"]],
        disabled: [(_Ta = (_Sa = patchData.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["disabled"]],
        focus: [(_Va = (_Ua = patchData.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["focus"]],
        hidden: [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["hidden"]],
        "hover-class": [(_Za = (_Ya = patchData.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["hover-class"]],
        "hover-start-time": [(_$a = (__a = patchData.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["hover-start-time"]],
        "hover-stay-time": [(_bb = (_ab = patchData.i) == null ? void 0 : _ab.props) == null ? void 0 : _bb["hover-stay-time"]],
        "hover-stop-propagation": [(_db = (_cb = patchData.i) == null ? void 0 : _cb.props) == null ? void 0 : _db["hover-stop-propagation"]],
        id: [(_fb = (_eb = patchData.i) == null ? void 0 : _eb.props) == null ? void 0 : _fb["id"]],
        maxlength: [(_hb = (_gb = patchData.i) == null ? void 0 : _gb.props) == null ? void 0 : _hb["maxlength"]],
        password: [(_jb = (_ib = patchData.i) == null ? void 0 : _ib.props) == null ? void 0 : _jb["password"]],
        placeholder: [(_lb = (_kb = patchData.i) == null ? void 0 : _kb.props) == null ? void 0 : _lb["placeholder"]],
        "placeholder-style": [(_nb = (_mb = patchData.i) == null ? void 0 : _mb.props) == null ? void 0 : _nb["placeholder-style"]],
        "selection-end": [(_pb = (_ob = patchData.i) == null ? void 0 : _ob.props) == null ? void 0 : _pb["selection-end"]],
        "selection-start": [(_rb = (_qb = patchData.i) == null ? void 0 : _qb.props) == null ? void 0 : _rb["selection-start"]],
        style: [(_tb = (_sb = patchData.i) == null ? void 0 : _sb.props) == null ? void 0 : _tb["style"]],
        type: [(_vb = (_ub = patchData.i) == null ? void 0 : _ub.props) == null ? void 0 : _vb["type"]],
        value: [(_xb = (_wb = patchData.i) == null ? void 0 : _wb.props) == null ? void 0 : _xb["value"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_yb = ctx.i) == null ? void 0 : _yb.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "10-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_ipc-player"] = templateUsage["REMAX_TPL_ipc-player"] = function render12(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb, _tb, _ub, _vb, _wb, _xb, _yb, _zb, _Ab, _Bb, _Cb, _Db, _Eb, _Fb, _Gb, _Hb, _Ib, _Jb, _Kb, _Lb, _Mb, _Nb, _Ob, _Pb, _Qb, _Rb, _Sb;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "11-0",
      name: "ipc-player",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        "auto-pause-if-navigate": _normalizeProps(
          __EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["auto-pause-if-navigate"], "auto-pause-if-navigate")
        ),
        "auto-pause-if-open-native": _normalizeProps(
          __EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["auto-pause-if-open-native"], "auto-pause-if-open-native")
        ),
        autoplay: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["autoplay"], "autoplay")),
        "background-color": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["background-color"], "background-color")),
        "border-color": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["border-color"], "border-color")),
        "border-radius": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["border-radius"], "border-radius")),
        "border-style": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["border-style"], "border-style")),
        "border-width": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["border-width"], "border-width")),
        clarity: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["clarity"], "clarity")),
        class: _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["class"], "class")),
        "device-id": _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["device-id"], "device-id")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["id"], "id")),
        muted: _normalizeProps(__EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["muted"], "muted")),
        "object-fit": _normalizeProps(__EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["object-fit"], "object-fit")),
        orientation: _normalizeProps(__EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["orientation"], "orientation")),
        "ptz-controllable": _normalizeProps(__EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["ptz-controllable"], "ptz-controllable")),
        "rotate-z": _normalizeProps(__EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["rotate-z"], "rotate-z")),
        scalable: _normalizeProps(__EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["scalable"], "scalable")),
        "scale-multiple": _normalizeProps(__EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["scale-multiple"], "scale-multiple")),
        "sound-mode": _normalizeProps(__EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["sound-mode"], "sound-mode")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["style"], "style"))),
        "update-layout": _normalizeProps(__EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["update-layout"], "update-layout"))
      },
      event: {
        "bind:connectchange": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bind:connectchange"], "bind:connectchange"),
        "bind:error": __EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bind:error"], "bind:error"),
        "bind:initdone": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bind:initdone"], "bind:initdone"),
        "bind:onlinechange": __EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["bind:onlinechange"], "bind:onlinechange"),
        "bind:previewchange": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bind:previewchange"], "bind:previewchange"),
        "bind:videotap": __EXPRESSION__3((_pa = (_oa = ctx.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["bind:videotap"], "bind:videotap"),
        "bind:zoomchange": __EXPRESSION__3((_ra = (_qa = ctx.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["bind:zoomchange"], "bind:zoomchange"),
        "bind:animationend": __EXPRESSION__3((_ta = (_sa = ctx.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_va = (_ua = ctx.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_xa = (_wa = ctx.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_za = (_ya = ctx.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_Ba = (_Aa = ctx.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_Da = (_Ca = ctx.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_Fa = (_Ea = ctx.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_Ha = (_Ga = ctx.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_Ja = (_Ia = ctx.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_La = (_Ka = ctx.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_Na = (_Ma = ctx.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["animation"]],
        "auto-pause-if-navigate": [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["auto-pause-if-navigate"]],
        "auto-pause-if-open-native": [(_Ta = (_Sa = patchData.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["auto-pause-if-open-native"]],
        autoplay: [(_Va = (_Ua = patchData.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["autoplay"]],
        "background-color": [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["background-color"]],
        "border-color": [(_Za = (_Ya = patchData.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["border-color"]],
        "border-radius": [(_$a = (__a = patchData.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["border-radius"]],
        "border-style": [(_bb = (_ab = patchData.i) == null ? void 0 : _ab.props) == null ? void 0 : _bb["border-style"]],
        "border-width": [(_db = (_cb = patchData.i) == null ? void 0 : _cb.props) == null ? void 0 : _db["border-width"]],
        clarity: [(_fb = (_eb = patchData.i) == null ? void 0 : _eb.props) == null ? void 0 : _fb["clarity"]],
        class: [(_hb = (_gb = patchData.i) == null ? void 0 : _gb.props) == null ? void 0 : _hb["class"]],
        "device-id": [(_jb = (_ib = patchData.i) == null ? void 0 : _ib.props) == null ? void 0 : _jb["device-id"]],
        "disable-scroll": [(_lb = (_kb = patchData.i) == null ? void 0 : _kb.props) == null ? void 0 : _lb["disable-scroll"]],
        hidden: [(_nb = (_mb = patchData.i) == null ? void 0 : _mb.props) == null ? void 0 : _nb["hidden"]],
        "hover-class": [(_pb = (_ob = patchData.i) == null ? void 0 : _ob.props) == null ? void 0 : _pb["hover-class"]],
        "hover-start-time": [(_rb = (_qb = patchData.i) == null ? void 0 : _qb.props) == null ? void 0 : _rb["hover-start-time"]],
        "hover-stay-time": [(_tb = (_sb = patchData.i) == null ? void 0 : _sb.props) == null ? void 0 : _tb["hover-stay-time"]],
        "hover-stop-propagation": [(_vb = (_ub = patchData.i) == null ? void 0 : _ub.props) == null ? void 0 : _vb["hover-stop-propagation"]],
        id: [(_xb = (_wb = patchData.i) == null ? void 0 : _wb.props) == null ? void 0 : _xb["id"]],
        muted: [(_zb = (_yb = patchData.i) == null ? void 0 : _yb.props) == null ? void 0 : _zb["muted"]],
        "object-fit": [(_Bb = (_Ab = patchData.i) == null ? void 0 : _Ab.props) == null ? void 0 : _Bb["object-fit"]],
        orientation: [(_Db = (_Cb = patchData.i) == null ? void 0 : _Cb.props) == null ? void 0 : _Db["orientation"]],
        "ptz-controllable": [(_Fb = (_Eb = patchData.i) == null ? void 0 : _Eb.props) == null ? void 0 : _Fb["ptz-controllable"]],
        "rotate-z": [(_Hb = (_Gb = patchData.i) == null ? void 0 : _Gb.props) == null ? void 0 : _Hb["rotate-z"]],
        scalable: [(_Jb = (_Ib = patchData.i) == null ? void 0 : _Ib.props) == null ? void 0 : _Jb["scalable"]],
        "scale-multiple": [(_Lb = (_Kb = patchData.i) == null ? void 0 : _Kb.props) == null ? void 0 : _Lb["scale-multiple"]],
        "sound-mode": [(_Nb = (_Mb = patchData.i) == null ? void 0 : _Mb.props) == null ? void 0 : _Nb["sound-mode"]],
        style: [(_Pb = (_Ob = patchData.i) == null ? void 0 : _Ob.props) == null ? void 0 : _Pb["style"]],
        "update-layout": [(_Rb = (_Qb = patchData.i) == null ? void 0 : _Qb.props) == null ? void 0 : _Rb["update-layout"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_Sb = ctx.i) == null ? void 0 : _Sb.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "11-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_label"] = templateUsage["REMAX_TPL_label"] = function render13(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "12-0",
      name: "label",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        for: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["for"], "for")),
        hidden: _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["id"], "id")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["style"], "style")))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_T = (_S = patchData.i) == null ? void 0 : _S.props) == null ? void 0 : _T["animation"]],
        class: [(_V = (_U = patchData.i) == null ? void 0 : _U.props) == null ? void 0 : _V["class"]],
        "disable-scroll": [(_X = (_W = patchData.i) == null ? void 0 : _W.props) == null ? void 0 : _X["disable-scroll"]],
        for: [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["for"]],
        hidden: [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["hidden"]],
        "hover-class": [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["hover-class"]],
        "hover-start-time": [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["hover-start-time"]],
        "hover-stay-time": [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["hover-stay-time"]],
        "hover-stop-propagation": [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["hover-stop-propagation"]],
        id: [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["id"]],
        style: [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["style"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ma = ctx.i) == null ? void 0 : _ma.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "12-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_map"] = templateUsage["REMAX_TPL_map"] = function render14(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb, _tb, _ub, _vb, _wb, _xb, _yb, _zb, _Ab, _Bb, _Cb, _Db, _Eb, _Fb, _Gb, _Hb, _Ib, _Jb, _Kb, _Lb, _Mb;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "13-0",
      name: "map",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        "background-color": _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["background-color"], "background-color")),
        "border-color": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["border-color"], "border-color")),
        "border-radius": _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["border-radius"], "border-radius")),
        "border-radius-bottom-left": _normalizeProps(
          __EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["border-radius-bottom-left"], "border-radius-bottom-left")
        ),
        "border-radius-bottom-right": _normalizeProps(
          __EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["border-radius-bottom-right"], "border-radius-bottom-right")
        ),
        "border-radius-top-left": _normalizeProps(
          __EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["border-radius-top-left"], "border-radius-top-left")
        ),
        "border-radius-top-right": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["border-radius-top-right"], "border-radius-top-right")
        ),
        "border-style": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["border-style"], "border-style")),
        "border-width": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["border-width"], "border-width")),
        circles: _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["circles"], "circles")),
        "class-name": _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["class-name"], "class-name")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["id"], "id")),
        latitude: _normalizeProps(__EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["latitude"], "latitude")),
        longitude: _normalizeProps(__EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["longitude"], "longitude")),
        markers: _normalizeProps(__EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["markers"], "markers")),
        "max-scale": _normalizeProps(__EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["max-scale"], "max-scale")),
        "min-scale": _normalizeProps(__EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["min-scale"], "min-scale")),
        polygons: _normalizeProps(__EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["polygons"], "polygons")),
        polyline: _normalizeProps(__EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["polyline"], "polyline")),
        scale: _normalizeProps(__EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["scale"], "scale")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["style"], "style"))),
        "update-layout": _normalizeProps(__EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["update-layout"], "update-layout"))
      },
      event: {
        "bind:callouttap": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bind:callouttap"], "bind:callouttap"),
        "bind:initdone": __EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bind:initdone"], "bind:initdone"),
        "bind:markertap": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bind:markertap"], "bind:markertap"),
        "bind:regionchange": __EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["bind:regionchange"], "bind:regionchange"),
        "bind:animationend": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_pa = (_oa = ctx.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_ra = (_qa = ctx.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_ta = (_sa = ctx.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_va = (_ua = ctx.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_xa = (_wa = ctx.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_za = (_ya = ctx.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_Ba = (_Aa = ctx.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_Da = (_Ca = ctx.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_Fa = (_Ea = ctx.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_Ha = (_Ga = ctx.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["animation"]],
        "background-color": [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["background-color"]],
        "border-color": [(_Na = (_Ma = patchData.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["border-color"]],
        "border-radius": [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["border-radius"]],
        "border-radius-bottom-left": [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["border-radius-bottom-left"]],
        "border-radius-bottom-right": [(_Ta = (_Sa = patchData.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["border-radius-bottom-right"]],
        "border-radius-top-left": [(_Va = (_Ua = patchData.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["border-radius-top-left"]],
        "border-radius-top-right": [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["border-radius-top-right"]],
        "border-style": [(_Za = (_Ya = patchData.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["border-style"]],
        "border-width": [(_$a = (__a = patchData.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["border-width"]],
        circles: [(_bb = (_ab = patchData.i) == null ? void 0 : _ab.props) == null ? void 0 : _bb["circles"]],
        "class-name": [(_db = (_cb = patchData.i) == null ? void 0 : _cb.props) == null ? void 0 : _db["class-name"]],
        "disable-scroll": [(_fb = (_eb = patchData.i) == null ? void 0 : _eb.props) == null ? void 0 : _fb["disable-scroll"]],
        hidden: [(_hb = (_gb = patchData.i) == null ? void 0 : _gb.props) == null ? void 0 : _hb["hidden"]],
        "hover-class": [(_jb = (_ib = patchData.i) == null ? void 0 : _ib.props) == null ? void 0 : _jb["hover-class"]],
        "hover-start-time": [(_lb = (_kb = patchData.i) == null ? void 0 : _kb.props) == null ? void 0 : _lb["hover-start-time"]],
        "hover-stay-time": [(_nb = (_mb = patchData.i) == null ? void 0 : _mb.props) == null ? void 0 : _nb["hover-stay-time"]],
        "hover-stop-propagation": [(_pb = (_ob = patchData.i) == null ? void 0 : _ob.props) == null ? void 0 : _pb["hover-stop-propagation"]],
        id: [(_rb = (_qb = patchData.i) == null ? void 0 : _qb.props) == null ? void 0 : _rb["id"]],
        latitude: [(_tb = (_sb = patchData.i) == null ? void 0 : _sb.props) == null ? void 0 : _tb["latitude"]],
        longitude: [(_vb = (_ub = patchData.i) == null ? void 0 : _ub.props) == null ? void 0 : _vb["longitude"]],
        markers: [(_xb = (_wb = patchData.i) == null ? void 0 : _wb.props) == null ? void 0 : _xb["markers"]],
        "max-scale": [(_zb = (_yb = patchData.i) == null ? void 0 : _yb.props) == null ? void 0 : _zb["max-scale"]],
        "min-scale": [(_Bb = (_Ab = patchData.i) == null ? void 0 : _Ab.props) == null ? void 0 : _Bb["min-scale"]],
        polygons: [(_Db = (_Cb = patchData.i) == null ? void 0 : _Cb.props) == null ? void 0 : _Db["polygons"]],
        polyline: [(_Fb = (_Eb = patchData.i) == null ? void 0 : _Eb.props) == null ? void 0 : _Fb["polyline"]],
        scale: [(_Hb = (_Gb = patchData.i) == null ? void 0 : _Gb.props) == null ? void 0 : _Hb["scale"]],
        style: [(_Jb = (_Ib = patchData.i) == null ? void 0 : _Ib.props) == null ? void 0 : _Jb["style"]],
        "update-layout": [(_Lb = (_Kb = patchData.i) == null ? void 0 : _Kb.props) == null ? void 0 : _Lb["update-layout"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_Mb = ctx.i) == null ? void 0 : _Mb.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "13-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_movable-area"] = templateUsage["REMAX_TPL_movable-area"] = function render15(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "14-0",
      name: "movable-area",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["id"], "id")),
        "scale-area": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["scale-area"], "scale-area")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["style"], "style")))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_T = (_S = patchData.i) == null ? void 0 : _S.props) == null ? void 0 : _T["animation"]],
        class: [(_V = (_U = patchData.i) == null ? void 0 : _U.props) == null ? void 0 : _V["class"]],
        "disable-scroll": [(_X = (_W = patchData.i) == null ? void 0 : _W.props) == null ? void 0 : _X["disable-scroll"]],
        hidden: [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["hidden"]],
        "hover-class": [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["hover-class"]],
        "hover-start-time": [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["hover-start-time"]],
        "hover-stay-time": [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["hover-stay-time"]],
        "hover-stop-propagation": [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["hover-stop-propagation"]],
        id: [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["id"]],
        "scale-area": [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["scale-area"]],
        style: [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["style"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ma = ctx.i) == null ? void 0 : _ma.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "14-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_movable-view"] = templateUsage["REMAX_TPL_movable-view"] = function render16(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "15-0",
      name: "movable-view",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        damping: _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["damping"], "damping")),
        direction: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["direction"], "direction")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["disable-scroll"], "disable-scroll")),
        disabled: _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["disabled"], "disabled")),
        friction: _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["friction"], "friction")),
        hidden: _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["hover-stop-propagation"], "hover-stop-propagation")
        ),
        htouchmove: _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["htouchmove"], "htouchmove")),
        id: _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["id"], "id")),
        inertia: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["inertia"], "inertia")),
        "out-of-bounds": _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["out-of-bounds"], "out-of-bounds")),
        scale: _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["scale"], "scale")),
        "scale-max": _normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["scale-max"], "scale-max")),
        "scale-min": _normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["scale-min"], "scale-min")),
        "scale-value": _normalizeProps(__EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["scale-value"], "scale-value")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["style"], "style"))),
        vtouchmove: _normalizeProps(__EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["vtouchmove"], "vtouchmove")),
        x: _normalizeProps(__EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["x"], "x")),
        y: _normalizeProps(__EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["y"], "y"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindanimationstart"], "bind:animationstart"),
        "bind:change": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindchange"], "bind:change"),
        "bind:longpress": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bindlongtap"], "bind:longtap"),
        "bind:scale": __EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bindscale"], "bind:scale"),
        "bind:tap": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_pa = (_oa = ctx.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_ra = (_qa = ctx.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_ta = (_sa = ctx.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["animation"]],
        class: [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["class"]],
        damping: [(_za = (_ya = patchData.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["damping"]],
        direction: [(_Ba = (_Aa = patchData.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["direction"]],
        "disable-scroll": [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["disable-scroll"]],
        disabled: [(_Fa = (_Ea = patchData.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["disabled"]],
        friction: [(_Ha = (_Ga = patchData.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["friction"]],
        hidden: [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["hidden"]],
        "hover-class": [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["hover-class"]],
        "hover-start-time": [(_Na = (_Ma = patchData.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["hover-start-time"]],
        "hover-stay-time": [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["hover-stay-time"]],
        "hover-stop-propagation": [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["hover-stop-propagation"]],
        htouchmove: [(_Ta = (_Sa = patchData.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["htouchmove"]],
        id: [(_Va = (_Ua = patchData.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["id"]],
        inertia: [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["inertia"]],
        "out-of-bounds": [(_Za = (_Ya = patchData.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["out-of-bounds"]],
        scale: [(_$a = (__a = patchData.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["scale"]],
        "scale-max": [(_bb = (_ab = patchData.i) == null ? void 0 : _ab.props) == null ? void 0 : _bb["scale-max"]],
        "scale-min": [(_db = (_cb = patchData.i) == null ? void 0 : _cb.props) == null ? void 0 : _db["scale-min"]],
        "scale-value": [(_fb = (_eb = patchData.i) == null ? void 0 : _eb.props) == null ? void 0 : _fb["scale-value"]],
        style: [(_hb = (_gb = patchData.i) == null ? void 0 : _gb.props) == null ? void 0 : _hb["style"]],
        vtouchmove: [(_jb = (_ib = patchData.i) == null ? void 0 : _ib.props) == null ? void 0 : _jb["vtouchmove"]],
        x: [(_lb = (_kb = patchData.i) == null ? void 0 : _kb.props) == null ? void 0 : _lb["x"]],
        y: [(_nb = (_mb = patchData.i) == null ? void 0 : _mb.props) == null ? void 0 : _nb["y"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ob = ctx.i) == null ? void 0 : _ob.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "15-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_native-video"] = templateUsage["REMAX_TPL_native-video"] = function render17(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb, _tb, _ub, _vb, _wb, _xb, _yb, _zb, _Ab, _Bb, _Cb, _Db, _Eb, _Fb, _Gb, _Hb, _Ib, _Jb, _Kb, _Lb, _Mb, _Nb, _Ob, _Pb, _Qb, _Rb, _Sb, _Tb, _Ub, _Vb, _Wb, _Xb, _Yb, _Zb, __b, _$b, _ac, _bc, _cc, _dc, _ec, _fc, _gc, _hc, _ic, _jc, _kc, _lc, _mc, _nc, _oc;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "16-0",
      name: "native-video",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        autoplay: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["autoplay"], "autoplay")),
        "background-color": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["background-color"], "background-color")),
        "border-color": _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["border-color"], "border-color")),
        "border-radius": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["border-radius"], "border-radius")),
        "border-radius-bottom-left": _normalizeProps(
          __EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["border-radius-bottom-left"], "border-radius-bottom-left")
        ),
        "border-radius-bottom-right": _normalizeProps(
          __EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["border-radius-bottom-right"], "border-radius-bottom-right")
        ),
        "border-radius-top-left": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["border-radius-top-left"], "border-radius-top-left")
        ),
        "border-radius-top-right": _normalizeProps(
          __EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["border-radius-top-right"], "border-radius-top-right")
        ),
        "border-style": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["border-style"], "border-style")),
        "border-width": _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["border-width"], "border-width")),
        class: _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["class"], "class")),
        controls: _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["controls"], "controls")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["disable-scroll"], "disable-scroll")),
        duration: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["duration"], "duration")),
        hidden: _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["id"], "id")),
        "initial-time": _normalizeProps(__EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["initial-time"], "initial-time")),
        loop: _normalizeProps(__EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["loop"], "loop")),
        muted: _normalizeProps(__EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["muted"], "muted")),
        "object-fit": _normalizeProps(__EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["object-fit"], "object-fit")),
        poster: _normalizeProps(__EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["poster"], "poster")),
        "show-center-play-btn": _normalizeProps(
          __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["show-center-play-btn"], "show-center-play-btn")
        ),
        "show-fullscreen-btn": _normalizeProps(
          __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["show-fullscreen-btn"], "show-fullscreen-btn")
        ),
        "show-mute-btn": _normalizeProps(__EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["show-mute-btn"], "show-mute-btn")),
        "show-play-btn": _normalizeProps(__EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["show-play-btn"], "show-play-btn")),
        src: _normalizeProps(__EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["src"], "src")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["style"], "style"))),
        "update-layout": _normalizeProps(__EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["update-layout"], "update-layout"))
      },
      event: {
        "bind:controlstoggle": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bind:controlstoggle"], "bind:controlstoggle"),
        "bind:ended": __EXPRESSION__3((_pa = (_oa = ctx.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["bind:ended"], "bind:ended"),
        "bind:error": __EXPRESSION__3((_ra = (_qa = ctx.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["bind:error"], "bind:error"),
        "bind:fullscreenchange": __EXPRESSION__3((_ta = (_sa = ctx.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["bind:fullscreenchange"], "bind:fullscreenchange"),
        "bind:loadedmetadata": __EXPRESSION__3((_va = (_ua = ctx.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["bind:loadedmetadata"], "bind:loadedmetadata"),
        "bind:pause": __EXPRESSION__3((_xa = (_wa = ctx.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["bind:pause"], "bind:pause"),
        "bind:play": __EXPRESSION__3((_za = (_ya = ctx.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["bind:play"], "bind:play"),
        "bind:progress": __EXPRESSION__3((_Ba = (_Aa = ctx.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["bind:progress"], "bind:progress"),
        "bind:seekcomplete": __EXPRESSION__3((_Da = (_Ca = ctx.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["bind:seekcomplete"], "bind:seekcomplete"),
        "bind:timeupdate": __EXPRESSION__3((_Fa = (_Ea = ctx.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["bind:timeupdate"], "bind:timeupdate"),
        "bind:waiting": __EXPRESSION__3((_Ha = (_Ga = ctx.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["bind:waiting"], "bind:waiting"),
        "bind:animationend": __EXPRESSION__3((_Ja = (_Ia = ctx.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_La = (_Ka = ctx.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_Na = (_Ma = ctx.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_Pa = (_Oa = ctx.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_Ra = (_Qa = ctx.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_Ta = (_Sa = ctx.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_Va = (_Ua = ctx.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_Xa = (_Wa = ctx.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_Za = (_Ya = ctx.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_$a = (__a = ctx.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_bb = (_ab = ctx.i) == null ? void 0 : _ab.props) == null ? void 0 : _bb["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_db = (_cb = patchData.i) == null ? void 0 : _cb.props) == null ? void 0 : _db["animation"]],
        autoplay: [(_fb = (_eb = patchData.i) == null ? void 0 : _eb.props) == null ? void 0 : _fb["autoplay"]],
        "background-color": [(_hb = (_gb = patchData.i) == null ? void 0 : _gb.props) == null ? void 0 : _hb["background-color"]],
        "border-color": [(_jb = (_ib = patchData.i) == null ? void 0 : _ib.props) == null ? void 0 : _jb["border-color"]],
        "border-radius": [(_lb = (_kb = patchData.i) == null ? void 0 : _kb.props) == null ? void 0 : _lb["border-radius"]],
        "border-radius-bottom-left": [(_nb = (_mb = patchData.i) == null ? void 0 : _mb.props) == null ? void 0 : _nb["border-radius-bottom-left"]],
        "border-radius-bottom-right": [(_pb = (_ob = patchData.i) == null ? void 0 : _ob.props) == null ? void 0 : _pb["border-radius-bottom-right"]],
        "border-radius-top-left": [(_rb = (_qb = patchData.i) == null ? void 0 : _qb.props) == null ? void 0 : _rb["border-radius-top-left"]],
        "border-radius-top-right": [(_tb = (_sb = patchData.i) == null ? void 0 : _sb.props) == null ? void 0 : _tb["border-radius-top-right"]],
        "border-style": [(_vb = (_ub = patchData.i) == null ? void 0 : _ub.props) == null ? void 0 : _vb["border-style"]],
        "border-width": [(_xb = (_wb = patchData.i) == null ? void 0 : _wb.props) == null ? void 0 : _xb["border-width"]],
        class: [(_zb = (_yb = patchData.i) == null ? void 0 : _yb.props) == null ? void 0 : _zb["class"]],
        controls: [(_Bb = (_Ab = patchData.i) == null ? void 0 : _Ab.props) == null ? void 0 : _Bb["controls"]],
        "disable-scroll": [(_Db = (_Cb = patchData.i) == null ? void 0 : _Cb.props) == null ? void 0 : _Db["disable-scroll"]],
        duration: [(_Fb = (_Eb = patchData.i) == null ? void 0 : _Eb.props) == null ? void 0 : _Fb["duration"]],
        hidden: [(_Hb = (_Gb = patchData.i) == null ? void 0 : _Gb.props) == null ? void 0 : _Hb["hidden"]],
        "hover-class": [(_Jb = (_Ib = patchData.i) == null ? void 0 : _Ib.props) == null ? void 0 : _Jb["hover-class"]],
        "hover-start-time": [(_Lb = (_Kb = patchData.i) == null ? void 0 : _Kb.props) == null ? void 0 : _Lb["hover-start-time"]],
        "hover-stay-time": [(_Nb = (_Mb = patchData.i) == null ? void 0 : _Mb.props) == null ? void 0 : _Nb["hover-stay-time"]],
        "hover-stop-propagation": [(_Pb = (_Ob = patchData.i) == null ? void 0 : _Ob.props) == null ? void 0 : _Pb["hover-stop-propagation"]],
        id: [(_Rb = (_Qb = patchData.i) == null ? void 0 : _Qb.props) == null ? void 0 : _Rb["id"]],
        "initial-time": [(_Tb = (_Sb = patchData.i) == null ? void 0 : _Sb.props) == null ? void 0 : _Tb["initial-time"]],
        loop: [(_Vb = (_Ub = patchData.i) == null ? void 0 : _Ub.props) == null ? void 0 : _Vb["loop"]],
        muted: [(_Xb = (_Wb = patchData.i) == null ? void 0 : _Wb.props) == null ? void 0 : _Xb["muted"]],
        "object-fit": [(_Zb = (_Yb = patchData.i) == null ? void 0 : _Yb.props) == null ? void 0 : _Zb["object-fit"]],
        poster: [(_$b = (__b = patchData.i) == null ? void 0 : __b.props) == null ? void 0 : _$b["poster"]],
        "show-center-play-btn": [(_bc = (_ac = patchData.i) == null ? void 0 : _ac.props) == null ? void 0 : _bc["show-center-play-btn"]],
        "show-fullscreen-btn": [(_dc = (_cc = patchData.i) == null ? void 0 : _cc.props) == null ? void 0 : _dc["show-fullscreen-btn"]],
        "show-mute-btn": [(_fc = (_ec = patchData.i) == null ? void 0 : _ec.props) == null ? void 0 : _fc["show-mute-btn"]],
        "show-play-btn": [(_hc = (_gc = patchData.i) == null ? void 0 : _gc.props) == null ? void 0 : _hc["show-play-btn"]],
        src: [(_jc = (_ic = patchData.i) == null ? void 0 : _ic.props) == null ? void 0 : _jc["src"]],
        style: [(_lc = (_kc = patchData.i) == null ? void 0 : _kc.props) == null ? void 0 : _lc["style"]],
        "update-layout": [(_nc = (_mc = patchData.i) == null ? void 0 : _mc.props) == null ? void 0 : _nc["update-layout"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_oc = ctx.i) == null ? void 0 : _oc.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "16-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_page-container"] = templateUsage["REMAX_TPL_page-container"] = function render18(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "17-0",
      name: "page-container",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "close-on-slideDown": _normalizeProps(
          __EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["close-on-slideDown"], "close-on-slideDown")
        ),
        "custom-style": _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["custom-style"], "custom-style")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["disable-scroll"], "disable-scroll")),
        duration: _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["duration"], "duration")),
        hidden: _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["id"], "id")),
        overlay: _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["overlay"], "overlay")),
        "overlay-style": _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["overlay-style"], "overlay-style")),
        position: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["position"], "position")),
        round: _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["round"], "round")),
        show: _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["show"], "show")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["style"], "style"))),
        "z-index": _normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["z-index"], "z-index"))
      },
      event: {
        "bind:afterenter": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindafterenter"], "bind:afterenter"),
        "bind:afterleave": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindafterleave"], "bind:afterleave"),
        "bind:animationend": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindanimationstart"], "bind:animationstart"),
        "bind:beforeenter": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindbeforeenter"], "bind:beforeenter"),
        "bind:beforeleave": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindbeforeleave"], "bind:beforeleave"),
        "bind:clickoverlay": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindclickoverlay"], "bind:clickoverlay"),
        "bind:enter": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindenter"], "bind:enter"),
        "bind:leave": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindleave"], "bind:leave"),
        "bind:longpress": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_pa = (_oa = ctx.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_ra = (_qa = ctx.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_ta = (_sa = ctx.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["animation"]],
        class: [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["class"]],
        "close-on-slideDown": [(_za = (_ya = patchData.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["close-on-slideDown"]],
        "custom-style": [(_Ba = (_Aa = patchData.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["custom-style"]],
        "disable-scroll": [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["disable-scroll"]],
        duration: [(_Fa = (_Ea = patchData.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["duration"]],
        hidden: [(_Ha = (_Ga = patchData.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["hidden"]],
        "hover-class": [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["hover-class"]],
        "hover-start-time": [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["hover-start-time"]],
        "hover-stay-time": [(_Na = (_Ma = patchData.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["hover-stay-time"]],
        "hover-stop-propagation": [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["hover-stop-propagation"]],
        id: [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["id"]],
        overlay: [(_Ta = (_Sa = patchData.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["overlay"]],
        "overlay-style": [(_Va = (_Ua = patchData.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["overlay-style"]],
        position: [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["position"]],
        round: [(_Za = (_Ya = patchData.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["round"]],
        show: [(_$a = (__a = patchData.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["show"]],
        style: [(_bb = (_ab = patchData.i) == null ? void 0 : _ab.props) == null ? void 0 : _bb["style"]],
        "z-index": [(_db = (_cb = patchData.i) == null ? void 0 : _cb.props) == null ? void 0 : _db["z-index"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_eb = ctx.i) == null ? void 0 : _eb.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "17-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_picker"] = templateUsage["REMAX_TPL_picker"] = function render19(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "18-0",
      name: "picker",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "custom-item": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["custom-item"], "custom-item")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["disable-scroll"], "disable-scroll")),
        disabled: _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["disabled"], "disabled")),
        end: _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["end"], "end")),
        fields: _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["fields"], "fields")),
        hidden: _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["id"], "id")),
        mode: _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["mode"], "mode")),
        name: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["name"], "name")),
        range: _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["range"], "range")),
        "range-key": _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["range-key"], "range-key")),
        start: _normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["start"], "start")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["style"], "style"))),
        value: _normalizeProps(__EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["value"], "value"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindanimationstart"], "bind:animationstart"),
        "bind:cancel": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindcancel"], "bind:cancel"),
        "bind:change": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindchange"], "bind:change"),
        "bind:columnchange": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindcolumnchange"], "bind:columnchange"),
        "bind:longpress": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["animation"]],
        class: [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["class"]],
        "custom-item": [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["custom-item"]],
        "disable-scroll": [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["disable-scroll"]],
        disabled: [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["disabled"]],
        end: [(_za = (_ya = patchData.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["end"]],
        fields: [(_Ba = (_Aa = patchData.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["fields"]],
        hidden: [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["hidden"]],
        "hover-class": [(_Fa = (_Ea = patchData.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["hover-class"]],
        "hover-start-time": [(_Ha = (_Ga = patchData.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["hover-start-time"]],
        "hover-stay-time": [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["hover-stay-time"]],
        "hover-stop-propagation": [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["hover-stop-propagation"]],
        id: [(_Na = (_Ma = patchData.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["id"]],
        mode: [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["mode"]],
        name: [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["name"]],
        range: [(_Ta = (_Sa = patchData.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["range"]],
        "range-key": [(_Va = (_Ua = patchData.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["range-key"]],
        start: [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["start"]],
        style: [(_Za = (_Ya = patchData.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["style"]],
        value: [(_$a = (__a = patchData.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["value"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ab = ctx.i) == null ? void 0 : _ab.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "18-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_picker-view"] = templateUsage["REMAX_TPL_picker-view"] = function render20(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "19-0",
      name: "picker-view",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["id"], "id")),
        "indicator-style": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["indicator-style"], "indicator-style")),
        "mask-style": _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["mask-style"], "mask-style")),
        name: _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["name"], "name")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["style"], "style"))),
        value: _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["value"], "value"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindanimationstart"], "bind:animationstart"),
        "bind:change": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindchange"], "bind:change"),
        "bind:longpress": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["animation"]],
        class: [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["class"]],
        "disable-scroll": [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["disable-scroll"]],
        hidden: [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["hidden"]],
        "hover-class": [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["hover-class"]],
        "hover-start-time": [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["hover-start-time"]],
        "hover-stay-time": [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["hover-stay-time"]],
        "hover-stop-propagation": [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["hover-stop-propagation"]],
        id: [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["id"]],
        "indicator-style": [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["indicator-style"]],
        "mask-style": [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["mask-style"]],
        name: [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["name"]],
        style: [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["style"]],
        value: [(_za = (_ya = patchData.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["value"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_Aa = ctx.i) == null ? void 0 : _Aa.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2;
            return _createBlock(
              {
                tid: "19-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    _createElementVNode({
                      tid: "19-2",
                      name: "picker-view-column",
                      isStatic: true,
                      children: _normalizeChildren([
                        (_forListData = __EXPRESSION__3((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.children), _forPatchData = __TRY_RUN__(function() {
                          var _a3, _b3, _c3;
                          return __EXPRESSION__3((_c3 = (_b3 = (_a3 = _patchDataSjs.i) == null ? void 0 : _a3.nodes) == null ? void 0 : _b3[_patchDataSjs.item]) == null ? void 0 : _c3.children);
                        }), _renderList(_forListData, function renderList2(item2, idx2) {
                          function listItem2(ctx3, patchData3, _FOR_KEY_2) {
                            var _a3, _b3, _c3, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2;
                            return _createBlock(
                              {
                                tid: "19-3",
                                name: _Block,
                                children: _normalizeChildren([
                                  (__IS_UNDEF__(patchData3[_FOR_KEY_2]) && (patchData3[_FOR_KEY_2] = ctx3[_FOR_KEY_2]), _createTemplate({
                                    id: __EXPRESSION__3(
                                      "REMAX_TPL_" + ((_e2 = (_d2 = (_c3 = (_b3 = (_a3 = ctx3.i) == null ? void 0 : _a3.nodes) == null ? void 0 : _b3[ctx3.item]) == null ? void 0 : _c3.nodes) == null ? void 0 : _d2[ctx3.sItem]) == null ? void 0 : _e2.type)
                                    ),
                                    module: templateUsage[__EXPRESSION__3(
                                      "REMAX_TPL_" + ((_j2 = (_i2 = (_h2 = (_g2 = (_f2 = ctx3.i) == null ? void 0 : _f2.nodes) == null ? void 0 : _g2[ctx3.item]) == null ? void 0 : _h2.nodes) == null ? void 0 : _i2[ctx3.sItem]) == null ? void 0 : _j2.type)
                                    )],
                                    data: __EXPRESSION__3({ i: (_n2 = (_m2 = (_l2 = (_k2 = ctx3.i) == null ? void 0 : _k2.nodes) == null ? void 0 : _l2[ctx3.item]) == null ? void 0 : _m2.nodes) == null ? void 0 : _n2[ctx3.sItem] }),
                                    patchData: __EXPRESSION__3({
                                      i: (_r2 = (_q2 = (_p2 = (_o2 = patchData3.i) == null ? void 0 : _o2.nodes) == null ? void 0 : _p2[patchData3.item]) == null ? void 0 : _q2.nodes) == null ? void 0 : _r2[patchData3.sItem]
                                    })
                                  }))
                                ])
                              },
                              {}
                            );
                          }
                          var itemCtx2 = { index: idx2 };
                          itemCtx2["sItem"] = item2;
                          var listData2 = __ASSIGN__({}, ctx2, itemCtx2);
                          var updateItem2 = { index: idx2 };
                          updateItem2["sItem"] = __NORMALIZE_LIST__(_forPatchData)[idx2];
                          var patchForData2 = __ASSIGN__({}, patchData2, updateItem2);
                          return listItem2(listData2, patchForData2, "sItem");
                        }))
                      ])
                    })
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_picker-view-column"] = templateUsage["REMAX_TPL_picker-view-column"] = function render21(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "20-0",
      name: "picker-view-column",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["id"], "id")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["style"], "style")))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_R = (_Q = patchData.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["animation"]],
        class: [(_T = (_S = patchData.i) == null ? void 0 : _S.props) == null ? void 0 : _T["class"]],
        "disable-scroll": [(_V = (_U = patchData.i) == null ? void 0 : _U.props) == null ? void 0 : _V["disable-scroll"]],
        hidden: [(_X = (_W = patchData.i) == null ? void 0 : _W.props) == null ? void 0 : _X["hidden"]],
        "hover-class": [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["hover-class"]],
        "hover-start-time": [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["hover-start-time"]],
        "hover-stay-time": [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["hover-stay-time"]],
        "hover-stop-propagation": [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["hover-stop-propagation"]],
        id: [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["id"]],
        style: [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["style"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ia = ctx.i) == null ? void 0 : _ia.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "20-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_progress"] = templateUsage["REMAX_TPL_progress"] = function render22(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "21-0",
      name: "progress",
      attrs: {
        active: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["active"], "active")),
        "active-Color": _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["active-Color"], "active-Color")),
        "active-mode": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["active-mode"], "active-mode")),
        animation: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["animation"], "animation")),
        "background-color": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["background-color"], "background-color")),
        "border-radius": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["border-radius"], "border-radius")),
        class: _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["disable-scroll"], "disable-scroll")),
        "font-size": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["font-size"], "font-size")),
        hidden: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["id"], "id")),
        percent: _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["percent"], "percent")),
        "show-info": _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["show-info"], "show-info")),
        "stroke-width": _normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["stroke-width"], "stroke-width")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["style"], "style")))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        active: [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["active"]],
        "active-Color": [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["active-Color"]],
        "active-mode": [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["active-mode"]],
        animation: [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["animation"]],
        "background-color": [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["background-color"]],
        "border-radius": [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["border-radius"]],
        class: [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["class"]],
        "disable-scroll": [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["disable-scroll"]],
        "font-size": [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["font-size"]],
        hidden: [(_za = (_ya = patchData.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["hidden"]],
        "hover-class": [(_Ba = (_Aa = patchData.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["hover-class"]],
        "hover-start-time": [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["hover-start-time"]],
        "hover-stay-time": [(_Fa = (_Ea = patchData.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["hover-stay-time"]],
        "hover-stop-propagation": [(_Ha = (_Ga = patchData.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["hover-stop-propagation"]],
        id: [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["id"]],
        percent: [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["percent"]],
        "show-info": [(_Na = (_Ma = patchData.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["show-info"]],
        "stroke-width": [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["stroke-width"]],
        style: [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["style"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_Sa = ctx.i) == null ? void 0 : _Sa.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "21-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_radio"] = templateUsage["REMAX_TPL_radio"] = function render23(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "22-0",
      name: "radio",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        checked: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["checked"], "checked")),
        class: _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["class"], "class")),
        color: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["color"], "color")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["disable-scroll"], "disable-scroll")),
        disabled: _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["disabled"], "disabled")),
        hidden: _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["id"], "id")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["style"], "style"))),
        value: _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["value"], "value"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["animation"]],
        checked: [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["checked"]],
        class: [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["class"]],
        color: [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["color"]],
        "disable-scroll": [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["disable-scroll"]],
        disabled: [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["disabled"]],
        hidden: [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["hidden"]],
        "hover-class": [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["hover-class"]],
        "hover-start-time": [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["hover-start-time"]],
        "hover-stay-time": [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["hover-stay-time"]],
        "hover-stop-propagation": [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["hover-stop-propagation"]],
        id: [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["id"]],
        style: [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["style"]],
        value: [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["value"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ya = ctx.i) == null ? void 0 : _ya.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "22-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_radio-group"] = templateUsage["REMAX_TPL_radio-group"] = function render24(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "23-0",
      name: "radio-group",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["id"], "id")),
        name: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["name"], "name")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["style"], "style")))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["bindanimationstart"], "bind:animationstart"),
        "bind:change": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindchange"], "bind:change"),
        "bind:longpress": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_V = (_U = patchData.i) == null ? void 0 : _U.props) == null ? void 0 : _V["animation"]],
        class: [(_X = (_W = patchData.i) == null ? void 0 : _W.props) == null ? void 0 : _X["class"]],
        "disable-scroll": [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["disable-scroll"]],
        hidden: [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["hidden"]],
        "hover-class": [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["hover-class"]],
        "hover-start-time": [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["hover-start-time"]],
        "hover-stay-time": [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["hover-stay-time"]],
        "hover-stop-propagation": [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["hover-stop-propagation"]],
        id: [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["id"]],
        name: [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["name"]],
        style: [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["style"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_oa = ctx.i) == null ? void 0 : _oa.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "23-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_scroll-view"] = templateUsage["REMAX_TPL_scroll-view"] = function render25(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "24-0",
      name: "scroll-view",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        "enable-back-to-top": _normalizeProps(
          __EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["enable-back-to-top"], "enable-back-to-top")
        ),
        hidden: _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["id"], "id")),
        "lower-threshold": _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["lower-threshold"], "lower-threshold")),
        "scroll-into-view": _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["scroll-into-view"], "scroll-into-view")),
        "scroll-left": _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["scroll-left"], "scroll-left")),
        "scroll-top": _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["scroll-top"], "scroll-top")),
        "scroll-with-animation": _normalizeProps(
          __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["scroll-with-animation"], "scroll-with-animation")
        ),
        "scroll-x": _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["scroll-x"], "scroll-x")),
        "scroll-y": _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["scroll-y"], "scroll-y")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["style"], "style"))),
        "upper-threshold": _normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["upper-threshold"], "upper-threshold"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindlongtap"], "bind:longtap"),
        "bind:scroll": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindscroll"], "bind:scroll"),
        "bind:scrolltolower": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindscrolltolower"], "bind:scrolltolower"),
        "bind:scrolltoupper": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindscrolltoupper"], "bind:scrolltoupper"),
        "bind:tap": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["animation"]],
        class: [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["class"]],
        "disable-scroll": [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["disable-scroll"]],
        "enable-back-to-top": [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["enable-back-to-top"]],
        hidden: [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["hidden"]],
        "hover-class": [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["hover-class"]],
        "hover-start-time": [(_za = (_ya = patchData.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["hover-start-time"]],
        "hover-stay-time": [(_Ba = (_Aa = patchData.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["hover-stay-time"]],
        "hover-stop-propagation": [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["hover-stop-propagation"]],
        id: [(_Fa = (_Ea = patchData.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["id"]],
        "lower-threshold": [(_Ha = (_Ga = patchData.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["lower-threshold"]],
        "scroll-into-view": [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["scroll-into-view"]],
        "scroll-left": [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["scroll-left"]],
        "scroll-top": [(_Na = (_Ma = patchData.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["scroll-top"]],
        "scroll-with-animation": [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["scroll-with-animation"]],
        "scroll-x": [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["scroll-x"]],
        "scroll-y": [(_Ta = (_Sa = patchData.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["scroll-y"]],
        style: [(_Va = (_Ua = patchData.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["style"]],
        "upper-threshold": [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["upper-threshold"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_Ya = ctx.i) == null ? void 0 : _Ya.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "24-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_slider"] = templateUsage["REMAX_TPL_slider"] = function render26(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "25-0",
      name: "slider",
      attrs: {
        activeColor: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["activeColor"], "activeColor")),
        animation: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["animation"], "animation")),
        backgroundColor: _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["backgroundColor"], "backgroundColor")),
        blockColor: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["blockColor"], "blockColor")),
        boxSize: _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["boxSize"], "boxSize")),
        class: _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["class"], "class")),
        color: _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["color"], "color")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["id"], "id")),
        max: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["max"], "max")),
        min: _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["min"], "min")),
        selecteColor: _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["selecteColor"], "selecteColor")),
        showValue: _normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["showValue"], "showValue")),
        step: _normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["step"], "step")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["style"], "style"))),
        value: _normalizeProps(__EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["value"], "value"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindanimationstart"], "bind:animationstart"),
        "bind:change": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindchange"], "bind:change"),
        "bind:changing": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindchanging"], "bind:changing"),
        "bind:longpress": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        activeColor: [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["activeColor"]],
        animation: [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["animation"]],
        backgroundColor: [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["backgroundColor"]],
        blockColor: [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["blockColor"]],
        boxSize: [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["boxSize"]],
        class: [(_za = (_ya = patchData.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["class"]],
        color: [(_Ba = (_Aa = patchData.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["color"]],
        "disable-scroll": [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["disable-scroll"]],
        hidden: [(_Fa = (_Ea = patchData.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["hidden"]],
        "hover-class": [(_Ha = (_Ga = patchData.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["hover-class"]],
        "hover-start-time": [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["hover-start-time"]],
        "hover-stay-time": [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["hover-stay-time"]],
        "hover-stop-propagation": [(_Na = (_Ma = patchData.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["hover-stop-propagation"]],
        id: [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["id"]],
        max: [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["max"]],
        min: [(_Ta = (_Sa = patchData.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["min"]],
        selecteColor: [(_Va = (_Ua = patchData.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["selecteColor"]],
        showValue: [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["showValue"]],
        step: [(_Za = (_Ya = patchData.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["step"]],
        style: [(_$a = (__a = patchData.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["style"]],
        value: [(_bb = (_ab = patchData.i) == null ? void 0 : _ab.props) == null ? void 0 : _bb["value"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_cb = ctx.i) == null ? void 0 : _cb.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "25-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_swiper"] = templateUsage["REMAX_TPL_swiper"] = function render27(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "26-0",
      name: "swiper",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        autoplay: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["autoplay"], "autoplay")),
        bingtransition: _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["bingtransition"], "bingtransition")),
        circular: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["circular"], "circular")),
        class: _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["class"], "class")),
        current: _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["current"], "current")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["disable-scroll"], "disable-scroll")),
        "display-multiple-items": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["display-multiple-items"], "display-multiple-items")
        ),
        duration: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["duration"], "duration")),
        hidden: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["id"], "id")),
        "indicator-active-color": _normalizeProps(
          __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["indicator-active-color"], "indicator-active-color")
        ),
        "indicator-color": _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["indicator-color"], "indicator-color")),
        "indicator-dots": _normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["indicator-dots"], "indicator-dots")),
        interval: _normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["interval"], "interval")),
        "next-margin": _normalizeProps(__EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["next-margin"], "next-margin")),
        "previous-margin": _normalizeProps(__EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["previous-margin"], "previous-margin")),
        "snap-to-edge": _normalizeProps(__EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["snap-to-edge"], "snap-to-edge")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["style"], "style"))),
        vertical: _normalizeProps(__EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["vertical"], "vertical"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindanimationend"], "bind:animationend"),
        "bind:animationfinish": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindanimationfinish"], "bind:animationfinish"),
        "bind:animationiteration": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindanimationstart"], "bind:animationstart"),
        "bind:change": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindchange"], "bind:change"),
        "bind:longpress": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_pa = (_oa = ctx.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_ra = (_qa = ctx.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_ta = (_sa = ctx.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["animation"]],
        autoplay: [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["autoplay"]],
        bingtransition: [(_za = (_ya = patchData.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["bingtransition"]],
        circular: [(_Ba = (_Aa = patchData.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["circular"]],
        class: [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["class"]],
        current: [(_Fa = (_Ea = patchData.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["current"]],
        "disable-scroll": [(_Ha = (_Ga = patchData.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["disable-scroll"]],
        "display-multiple-items": [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["display-multiple-items"]],
        duration: [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["duration"]],
        hidden: [(_Na = (_Ma = patchData.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["hidden"]],
        "hover-class": [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["hover-class"]],
        "hover-start-time": [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["hover-start-time"]],
        "hover-stay-time": [(_Ta = (_Sa = patchData.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["hover-stay-time"]],
        "hover-stop-propagation": [(_Va = (_Ua = patchData.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["hover-stop-propagation"]],
        id: [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["id"]],
        "indicator-active-color": [(_Za = (_Ya = patchData.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["indicator-active-color"]],
        "indicator-color": [(_$a = (__a = patchData.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["indicator-color"]],
        "indicator-dots": [(_bb = (_ab = patchData.i) == null ? void 0 : _ab.props) == null ? void 0 : _bb["indicator-dots"]],
        interval: [(_db = (_cb = patchData.i) == null ? void 0 : _cb.props) == null ? void 0 : _db["interval"]],
        "next-margin": [(_fb = (_eb = patchData.i) == null ? void 0 : _eb.props) == null ? void 0 : _fb["next-margin"]],
        "previous-margin": [(_hb = (_gb = patchData.i) == null ? void 0 : _gb.props) == null ? void 0 : _hb["previous-margin"]],
        "snap-to-edge": [(_jb = (_ib = patchData.i) == null ? void 0 : _ib.props) == null ? void 0 : _jb["snap-to-edge"]],
        style: [(_lb = (_kb = patchData.i) == null ? void 0 : _kb.props) == null ? void 0 : _lb["style"]],
        vertical: [(_nb = (_mb = patchData.i) == null ? void 0 : _mb.props) == null ? void 0 : _nb["vertical"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ob = ctx.i) == null ? void 0 : _ob.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "26-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    _createElementVNode({
                      tid: "26-2",
                      name: "swiper-item",
                      attrs: { key: _normalizeProps(__EXPRESSION__3((_d2 = (_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.props) == null ? void 0 : _d2.key, "key")) },
                      updateFields: __OMIT__({ key: [(_e2 = patchData2.i) == null ? void 0 : _e2.nodes, (_g2 = (_f2 = patchData2.item) == null ? void 0 : _f2.props) == null ? void 0 : _g2.key] }),
                      isStatic: false,
                      children: _normalizeChildren([
                        (_forListData = __EXPRESSION__3((_j2 = (_i2 = (_h2 = ctx2.i) == null ? void 0 : _h2.nodes) == null ? void 0 : _i2[ctx2.item]) == null ? void 0 : _j2.children), _forPatchData = __TRY_RUN__(function() {
                          var _a3, _b3, _c3;
                          return __EXPRESSION__3((_c3 = (_b3 = (_a3 = _patchDataSjs.i) == null ? void 0 : _a3.nodes) == null ? void 0 : _b3[_patchDataSjs.item]) == null ? void 0 : _c3.children);
                        }), _renderList(_forListData, function renderList2(item2, idx2) {
                          function listItem2(ctx3, patchData3, _FOR_KEY_2) {
                            var _a3, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2;
                            return _createBlock(
                              {
                                tid: "26-3",
                                name: _Block,
                                children: __ADDITION_KEY__(
                                  _normalizeChildren([
                                    (__IS_UNDEF__(patchData3[_FOR_KEY_2]) && (patchData3[_FOR_KEY_2] = ctx3[_FOR_KEY_2]), _createTemplate({
                                      id: __EXPRESSION__3(
                                        "REMAX_TPL_" + ((_e3 = (_d3 = (_c3 = (_b3 = (_a3 = ctx3.i) == null ? void 0 : _a3.nodes) == null ? void 0 : _b3[ctx3.item]) == null ? void 0 : _c3.nodes) == null ? void 0 : _d3[ctx3.sItem]) == null ? void 0 : _e3.type)
                                      ),
                                      module: templateUsage[__EXPRESSION__3(
                                        "REMAX_TPL_" + ((_j3 = (_i3 = (_h3 = (_g3 = (_f3 = ctx3.i) == null ? void 0 : _f3.nodes) == null ? void 0 : _g3[ctx3.item]) == null ? void 0 : _h3.nodes) == null ? void 0 : _i3[ctx3.sItem]) == null ? void 0 : _j3.type)
                                      )],
                                      data: __EXPRESSION__3({ i: (_n2 = (_m2 = (_l2 = (_k2 = ctx3.i) == null ? void 0 : _k2.nodes) == null ? void 0 : _l2[ctx3.item]) == null ? void 0 : _m2.nodes) == null ? void 0 : _n2[ctx3.sItem] }),
                                      patchData: __EXPRESSION__3({
                                        i: (_r2 = (_q2 = (_p2 = (_o2 = patchData3.i) == null ? void 0 : _o2.nodes) == null ? void 0 : _p2[patchData3.item]) == null ? void 0 : _q2.nodes) == null ? void 0 : _r2[patchData3.sItem]
                                      })
                                    }))
                                  ]),
                                  { key: __FOR_THIS_KEY__(ctx3["sItem"], idx2), forKey: "*this" }
                                )
                              },
                              {}
                            );
                          }
                          var itemCtx2 = { index: idx2 };
                          itemCtx2["sItem"] = item2;
                          var listData2 = __ASSIGN__({}, ctx2, itemCtx2);
                          var updateItem2 = { index: idx2 };
                          updateItem2["sItem"] = __NORMALIZE_LIST__(_forPatchData)[idx2];
                          var patchForData2 = __ASSIGN__({}, patchData2, updateItem2);
                          return listItem2(listData2, patchForData2, "sItem");
                        }))
                      ])
                    })
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_switch"] = templateUsage["REMAX_TPL_switch"] = function render28(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "27-0",
      name: "switch",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        checked: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["checked"], "checked")),
        class: _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["class"], "class")),
        color: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["color"], "color")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["disable-scroll"], "disable-scroll")),
        disabled: _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["disabled"], "disabled")),
        hidden: _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["id"], "id")),
        name: _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["name"], "name")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["style"], "style"))),
        type: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["type"], "type"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindanimationstart"], "bind:animationstart"),
        "bind:change": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindchange"], "bind:change"),
        "bind:longpress": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["animation"]],
        checked: [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["checked"]],
        class: [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["class"]],
        color: [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["color"]],
        "disable-scroll": [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["disable-scroll"]],
        disabled: [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["disabled"]],
        hidden: [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["hidden"]],
        "hover-class": [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["hover-class"]],
        "hover-start-time": [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["hover-start-time"]],
        "hover-stay-time": [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["hover-stay-time"]],
        "hover-stop-propagation": [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["hover-stop-propagation"]],
        id: [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["id"]],
        name: [(_za = (_ya = patchData.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["name"]],
        style: [(_Ba = (_Aa = patchData.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["style"]],
        type: [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["type"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_Ea = ctx.i) == null ? void 0 : _Ea.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "27-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_text"] = templateUsage["REMAX_TPL_text"] = function render29(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "28-0",
      name: "text",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        decode: _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["decode"], "decode")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["id"], "id")),
        selectable: _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["selectable"], "selectable")),
        space: _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["space"], "space")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["style"], "style"))),
        "user-select": _normalizeProps(__EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["user-select"], "user-select"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["animation"]],
        class: [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["class"]],
        decode: [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["decode"]],
        "disable-scroll": [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["disable-scroll"]],
        hidden: [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["hidden"]],
        "hover-class": [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["hover-class"]],
        "hover-start-time": [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["hover-start-time"]],
        "hover-stay-time": [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["hover-stay-time"]],
        "hover-stop-propagation": [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["hover-stop-propagation"]],
        id: [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["id"]],
        selectable: [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["selectable"]],
        space: [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["space"]],
        style: [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["style"]],
        "user-select": [(_xa = (_wa = patchData.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["user-select"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ya = ctx.i) == null ? void 0 : _ya.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "28-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_textarea"] = templateUsage["REMAX_TPL_textarea"] = function render30(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "29-0",
      name: "textarea",
      attrs: {
        "adjust-position": _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["adjust-position"], "adjust-position")),
        animation: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["animation"], "animation")),
        "auto-height": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["auto-height"], "auto-height")),
        class: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["class"], "class")),
        cursor: _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["cursor"], "cursor")),
        "cursor-spacing": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["cursor-spacing"], "cursor-spacing")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["disable-scroll"], "disable-scroll")),
        disabled: _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["disabled"], "disabled")),
        focus: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["focus"], "focus")),
        hidden: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["id"], "id")),
        maxlength: _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["maxlength"], "maxlength")),
        name: _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["name"], "name")),
        placeholder: _normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["placeholder"], "placeholder")),
        "placeholder-style": _normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["placeholder-style"], "placeholder-style")),
        "selection-end": _normalizeProps(__EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["selection-end"], "selection-end")),
        "selection-start": _normalizeProps(__EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["selection-start"], "selection-start")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["style"], "style"))),
        value: _normalizeProps(__EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["value"], "value"))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindanimationstart"], "bind:animationstart"),
        "bind:blur": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindblur"], "bind:blur"),
        "bind:confirm": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindconfirm"], "bind:confirm"),
        "bind:focus": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindfocus"], "bind:focus"),
        "bind:input": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bindinput"], "bind:input"),
        "bind:keyboardheightchange": __EXPRESSION__3(
          (_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bindkeyboardheightchange"],
          "bind:keyboardheightchange"
        ),
        "bind:line-change": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bindline-change"], "bind:line-change"),
        "bind:longpress": __EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_pa = (_oa = ctx.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_ra = (_qa = ctx.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_ta = (_sa = ctx.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_va = (_ua = ctx.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_xa = (_wa = ctx.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_za = (_ya = ctx.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        "adjust-position": [(_Ba = (_Aa = patchData.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["adjust-position"]],
        animation: [(_Da = (_Ca = patchData.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["animation"]],
        "auto-height": [(_Fa = (_Ea = patchData.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["auto-height"]],
        class: [(_Ha = (_Ga = patchData.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["class"]],
        cursor: [(_Ja = (_Ia = patchData.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["cursor"]],
        "cursor-spacing": [(_La = (_Ka = patchData.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["cursor-spacing"]],
        "disable-scroll": [(_Na = (_Ma = patchData.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["disable-scroll"]],
        disabled: [(_Pa = (_Oa = patchData.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["disabled"]],
        focus: [(_Ra = (_Qa = patchData.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["focus"]],
        hidden: [(_Ta = (_Sa = patchData.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["hidden"]],
        "hover-class": [(_Va = (_Ua = patchData.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["hover-class"]],
        "hover-start-time": [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["hover-start-time"]],
        "hover-stay-time": [(_Za = (_Ya = patchData.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["hover-stay-time"]],
        "hover-stop-propagation": [(_$a = (__a = patchData.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["hover-stop-propagation"]],
        id: [(_bb = (_ab = patchData.i) == null ? void 0 : _ab.props) == null ? void 0 : _bb["id"]],
        maxlength: [(_db = (_cb = patchData.i) == null ? void 0 : _cb.props) == null ? void 0 : _db["maxlength"]],
        name: [(_fb = (_eb = patchData.i) == null ? void 0 : _eb.props) == null ? void 0 : _fb["name"]],
        placeholder: [(_hb = (_gb = patchData.i) == null ? void 0 : _gb.props) == null ? void 0 : _hb["placeholder"]],
        "placeholder-style": [(_jb = (_ib = patchData.i) == null ? void 0 : _ib.props) == null ? void 0 : _jb["placeholder-style"]],
        "selection-end": [(_lb = (_kb = patchData.i) == null ? void 0 : _kb.props) == null ? void 0 : _lb["selection-end"]],
        "selection-start": [(_nb = (_mb = patchData.i) == null ? void 0 : _mb.props) == null ? void 0 : _nb["selection-start"]],
        style: [(_pb = (_ob = patchData.i) == null ? void 0 : _ob.props) == null ? void 0 : _pb["style"]],
        value: [(_rb = (_qb = patchData.i) == null ? void 0 : _qb.props) == null ? void 0 : _rb["value"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_sb = ctx.i) == null ? void 0 : _sb.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "29-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_video"] = templateUsage["REMAX_TPL_video"] = function render31(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb, _tb, _ub, _vb, _wb, _xb, _yb, _zb, _Ab, _Bb, _Cb, _Db, _Eb, _Fb, _Gb, _Hb, _Ib, _Jb, _Kb, _Lb, _Mb, _Nb, _Ob, _Pb, _Qb, _Rb, _Sb, _Tb, _Ub;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "30-0",
      name: "video",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        autoplay: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["autoplay"], "autoplay")),
        "class-name": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["class-name"], "class-name")),
        controls: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["controls"], "controls")),
        "danmu-btn": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["danmu-btn"], "danmu-btn")),
        "danmu-list": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["danmu-list"], "danmu-list")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["disable-scroll"], "disable-scroll")),
        duration: _normalizeProps(__EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["duration"], "duration")),
        "enable-danmu": _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["enable-danmu"], "enable-danmu")),
        hidden: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["id"], "id")),
        "initial-time": _normalizeProps(__EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["initial-time"], "initial-time")),
        loop: _normalizeProps(__EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["loop"], "loop")),
        muted: _normalizeProps(__EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["muted"], "muted")),
        "object-fit": _normalizeProps(__EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["object-fit"], "object-fit")),
        poster: _normalizeProps(__EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["poster"], "poster")),
        "show-center-play-btn": _normalizeProps(
          __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["show-center-play-btn"], "show-center-play-btn")
        ),
        "show-fullscreen-btn": _normalizeProps(
          __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["show-fullscreen-btn"], "show-fullscreen-btn")
        ),
        "show-mute-btn": _normalizeProps(__EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["show-mute-btn"], "show-mute-btn")),
        "show-play-btn": _normalizeProps(__EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["show-play-btn"], "show-play-btn")),
        src: _normalizeProps(__EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["src"], "src")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["style"], "style")))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_$ = (__ = ctx.i) == null ? void 0 : __.props) == null ? void 0 : _$["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_ba = (_aa = ctx.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_da = (_ca = ctx.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["bindanimationstart"], "bind:animationstart"),
        "bind:canplay": __EXPRESSION__3((_fa = (_ea = ctx.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["bindcanplay"], "bind:canplay"),
        "bind:canplaythrough": __EXPRESSION__3((_ha = (_ga = ctx.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["bindcanplaythrough"], "bind:canplaythrough"),
        "bind:ended": __EXPRESSION__3((_ja = (_ia = ctx.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["bindended"], "bind:ended"),
        "bind:error": __EXPRESSION__3((_la = (_ka = ctx.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["binderror"], "bind:error"),
        "bind:loadedmetadata": __EXPRESSION__3((_na = (_ma = ctx.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["bindloadedmetadata"], "bind:loadedmetadata"),
        "bind:longpress": __EXPRESSION__3((_pa = (_oa = ctx.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_ra = (_qa = ctx.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["bindlongtap"], "bind:longtap"),
        "bind:pause": __EXPRESSION__3((_ta = (_sa = ctx.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["bindpause"], "bind:pause"),
        "bind:play": __EXPRESSION__3((_va = (_ua = ctx.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["bindplay"], "bind:play"),
        "bind:playing": __EXPRESSION__3((_xa = (_wa = ctx.i) == null ? void 0 : _wa.props) == null ? void 0 : _xa["bindplaying"], "bind:playing"),
        "bind:progress": __EXPRESSION__3((_za = (_ya = ctx.i) == null ? void 0 : _ya.props) == null ? void 0 : _za["bindprogress"], "bind:progress"),
        "bind:ratechange": __EXPRESSION__3((_Ba = (_Aa = ctx.i) == null ? void 0 : _Aa.props) == null ? void 0 : _Ba["bindratechange"], "bind:ratechange"),
        "bind:seekcomplete": __EXPRESSION__3((_Da = (_Ca = ctx.i) == null ? void 0 : _Ca.props) == null ? void 0 : _Da["bindseekcomplete"], "bind:seekcomplete"),
        "bind:tap": __EXPRESSION__3((_Fa = (_Ea = ctx.i) == null ? void 0 : _Ea.props) == null ? void 0 : _Fa["bindtap"], "bind:tap"),
        "bind:timeupdate": __EXPRESSION__3((_Ha = (_Ga = ctx.i) == null ? void 0 : _Ga.props) == null ? void 0 : _Ha["bindtimeupdate"], "bind:timeupdate"),
        "bind:touchcancel": __EXPRESSION__3((_Ja = (_Ia = ctx.i) == null ? void 0 : _Ia.props) == null ? void 0 : _Ja["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_La = (_Ka = ctx.i) == null ? void 0 : _Ka.props) == null ? void 0 : _La["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_Na = (_Ma = ctx.i) == null ? void 0 : _Ma.props) == null ? void 0 : _Na["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_Pa = (_Oa = ctx.i) == null ? void 0 : _Oa.props) == null ? void 0 : _Pa["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_Ra = (_Qa = ctx.i) == null ? void 0 : _Qa.props) == null ? void 0 : _Ra["bindtransitionend"], "bind:transitionend"),
        "bind:volumechange": __EXPRESSION__3((_Ta = (_Sa = ctx.i) == null ? void 0 : _Sa.props) == null ? void 0 : _Ta["bindvolumechange"], "bind:volumechange"),
        "bind:waiting": __EXPRESSION__3((_Va = (_Ua = ctx.i) == null ? void 0 : _Ua.props) == null ? void 0 : _Va["bindwaiting"], "bind:waiting")
      },
      updateFields: __OMIT__({
        animation: [(_Xa = (_Wa = patchData.i) == null ? void 0 : _Wa.props) == null ? void 0 : _Xa["animation"]],
        autoplay: [(_Za = (_Ya = patchData.i) == null ? void 0 : _Ya.props) == null ? void 0 : _Za["autoplay"]],
        "class-name": [(_$a = (__a = patchData.i) == null ? void 0 : __a.props) == null ? void 0 : _$a["class-name"]],
        controls: [(_bb = (_ab = patchData.i) == null ? void 0 : _ab.props) == null ? void 0 : _bb["controls"]],
        "danmu-btn": [(_db = (_cb = patchData.i) == null ? void 0 : _cb.props) == null ? void 0 : _db["danmu-btn"]],
        "danmu-list": [(_fb = (_eb = patchData.i) == null ? void 0 : _eb.props) == null ? void 0 : _fb["danmu-list"]],
        "disable-scroll": [(_hb = (_gb = patchData.i) == null ? void 0 : _gb.props) == null ? void 0 : _hb["disable-scroll"]],
        duration: [(_jb = (_ib = patchData.i) == null ? void 0 : _ib.props) == null ? void 0 : _jb["duration"]],
        "enable-danmu": [(_lb = (_kb = patchData.i) == null ? void 0 : _kb.props) == null ? void 0 : _lb["enable-danmu"]],
        hidden: [(_nb = (_mb = patchData.i) == null ? void 0 : _mb.props) == null ? void 0 : _nb["hidden"]],
        "hover-class": [(_pb = (_ob = patchData.i) == null ? void 0 : _ob.props) == null ? void 0 : _pb["hover-class"]],
        "hover-start-time": [(_rb = (_qb = patchData.i) == null ? void 0 : _qb.props) == null ? void 0 : _rb["hover-start-time"]],
        "hover-stay-time": [(_tb = (_sb = patchData.i) == null ? void 0 : _sb.props) == null ? void 0 : _tb["hover-stay-time"]],
        "hover-stop-propagation": [(_vb = (_ub = patchData.i) == null ? void 0 : _ub.props) == null ? void 0 : _vb["hover-stop-propagation"]],
        id: [(_xb = (_wb = patchData.i) == null ? void 0 : _wb.props) == null ? void 0 : _xb["id"]],
        "initial-time": [(_zb = (_yb = patchData.i) == null ? void 0 : _yb.props) == null ? void 0 : _zb["initial-time"]],
        loop: [(_Bb = (_Ab = patchData.i) == null ? void 0 : _Ab.props) == null ? void 0 : _Bb["loop"]],
        muted: [(_Db = (_Cb = patchData.i) == null ? void 0 : _Cb.props) == null ? void 0 : _Db["muted"]],
        "object-fit": [(_Fb = (_Eb = patchData.i) == null ? void 0 : _Eb.props) == null ? void 0 : _Fb["object-fit"]],
        poster: [(_Hb = (_Gb = patchData.i) == null ? void 0 : _Gb.props) == null ? void 0 : _Hb["poster"]],
        "show-center-play-btn": [(_Jb = (_Ib = patchData.i) == null ? void 0 : _Ib.props) == null ? void 0 : _Jb["show-center-play-btn"]],
        "show-fullscreen-btn": [(_Lb = (_Kb = patchData.i) == null ? void 0 : _Kb.props) == null ? void 0 : _Lb["show-fullscreen-btn"]],
        "show-mute-btn": [(_Nb = (_Mb = patchData.i) == null ? void 0 : _Mb.props) == null ? void 0 : _Nb["show-mute-btn"]],
        "show-play-btn": [(_Pb = (_Ob = patchData.i) == null ? void 0 : _Ob.props) == null ? void 0 : _Pb["show-play-btn"]],
        src: [(_Rb = (_Qb = patchData.i) == null ? void 0 : _Qb.props) == null ? void 0 : _Rb["src"]],
        style: [(_Tb = (_Sb = patchData.i) == null ? void 0 : _Sb.props) == null ? void 0 : _Tb["style"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_Ub = ctx.i) == null ? void 0 : _Ub.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "30-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_view"] = templateUsage["REMAX_TPL_view"] = function render32(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "31-0",
      name: "view",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        class: _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class"], "class")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["id"], "id")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["style"], "style")))
      },
      event: {
        "bind:animationend": __EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["bindanimationstart"], "bind:animationstart"),
        "bind:longpress": __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_R = (_Q = patchData.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["animation"]],
        class: [(_T = (_S = patchData.i) == null ? void 0 : _S.props) == null ? void 0 : _T["class"]],
        "disable-scroll": [(_V = (_U = patchData.i) == null ? void 0 : _U.props) == null ? void 0 : _V["disable-scroll"]],
        hidden: [(_X = (_W = patchData.i) == null ? void 0 : _W.props) == null ? void 0 : _X["hidden"]],
        "hover-class": [(_Z = (_Y = patchData.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["hover-class"]],
        "hover-start-time": [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["hover-start-time"]],
        "hover-stay-time": [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["hover-stay-time"]],
        "hover-stop-propagation": [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["hover-stop-propagation"]],
        id: [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["id"]],
        style: [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["style"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_ia = ctx.i) == null ? void 0 : _ia.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "31-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_web-view"] = templateUsage["REMAX_TPL_web-view"] = function render33(ctx, host, patchData) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _normalizeProps = host.normalizeProps;
  var _normalizeStyle = host.normalizeStyle;
  var _createElementVNode = host.createElementVNode;
  var _renderList = host.renderList;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createTemplate = host.createTemplate;
  return _normalizeChildren([
    _createElementVNode({
      tid: "32-0",
      name: "web-view",
      attrs: {
        animation: _normalizeProps(__EXPRESSION__3((_b = (_a = ctx.i) == null ? void 0 : _a.props) == null ? void 0 : _b["animation"], "animation")),
        "class-name": _normalizeProps(__EXPRESSION__3((_d = (_c = ctx.i) == null ? void 0 : _c.props) == null ? void 0 : _d["class-name"], "class-name")),
        "disable-scroll": _normalizeProps(__EXPRESSION__3((_f = (_e = ctx.i) == null ? void 0 : _e.props) == null ? void 0 : _f["disable-scroll"], "disable-scroll")),
        hidden: _normalizeProps(__EXPRESSION__3((_h = (_g = ctx.i) == null ? void 0 : _g.props) == null ? void 0 : _h["hidden"], "hidden")),
        "hover-class": _normalizeProps(__EXPRESSION__3((_j = (_i = ctx.i) == null ? void 0 : _i.props) == null ? void 0 : _j["hover-class"], "hover-class")),
        "hover-start-time": _normalizeProps(__EXPRESSION__3((_l = (_k = ctx.i) == null ? void 0 : _k.props) == null ? void 0 : _l["hover-start-time"], "hover-start-time")),
        "hover-stay-time": _normalizeProps(__EXPRESSION__3((_n = (_m = ctx.i) == null ? void 0 : _m.props) == null ? void 0 : _n["hover-stay-time"], "hover-stay-time")),
        "hover-stop-propagation": _normalizeProps(
          __EXPRESSION__3((_p = (_o = ctx.i) == null ? void 0 : _o.props) == null ? void 0 : _p["hover-stop-propagation"], "hover-stop-propagation")
        ),
        id: _normalizeProps(__EXPRESSION__3((_r = (_q = ctx.i) == null ? void 0 : _q.props) == null ? void 0 : _r["id"], "id")),
        src: _normalizeProps(__EXPRESSION__3((_t = (_s = ctx.i) == null ? void 0 : _s.props) == null ? void 0 : _t["src"], "src")),
        style: _normalizeStyle(_normalizeProps(__EXPRESSION__3((_v = (_u = ctx.i) == null ? void 0 : _u.props) == null ? void 0 : _v["style"], "style"))),
        "update-layout": _normalizeProps(__EXPRESSION__3((_x = (_w = ctx.i) == null ? void 0 : _w.props) == null ? void 0 : _x["update-layout"], "update-layout"))
      },
      event: {
        "bind:Message": __EXPRESSION__3((_z = (_y = ctx.i) == null ? void 0 : _y.props) == null ? void 0 : _z["bindMessage"], "bind:Message"),
        "bind:animationend": __EXPRESSION__3((_B = (_A = ctx.i) == null ? void 0 : _A.props) == null ? void 0 : _B["bindanimationend"], "bind:animationend"),
        "bind:animationiteration": __EXPRESSION__3((_D = (_C = ctx.i) == null ? void 0 : _C.props) == null ? void 0 : _D["bindanimationiteration"], "bind:animationiteration"),
        "bind:animationstart": __EXPRESSION__3((_F = (_E = ctx.i) == null ? void 0 : _E.props) == null ? void 0 : _F["bindanimationstart"], "bind:animationstart"),
        "bind:error": __EXPRESSION__3((_H = (_G = ctx.i) == null ? void 0 : _G.props) == null ? void 0 : _H["binderror"], "bind:error"),
        "bind:load": __EXPRESSION__3((_J = (_I = ctx.i) == null ? void 0 : _I.props) == null ? void 0 : _J["bindload"], "bind:load"),
        "bind:longpress": __EXPRESSION__3((_L = (_K = ctx.i) == null ? void 0 : _K.props) == null ? void 0 : _L["bindlongpress"], "bind:longpress"),
        "bind:longtap": __EXPRESSION__3((_N = (_M = ctx.i) == null ? void 0 : _M.props) == null ? void 0 : _N["bindlongtap"], "bind:longtap"),
        "bind:tap": __EXPRESSION__3((_P = (_O = ctx.i) == null ? void 0 : _O.props) == null ? void 0 : _P["bindtap"], "bind:tap"),
        "bind:touchcancel": __EXPRESSION__3((_R = (_Q = ctx.i) == null ? void 0 : _Q.props) == null ? void 0 : _R["bindtouchcancel"], "bind:touchcancel"),
        "bind:touchend": __EXPRESSION__3((_T = (_S = ctx.i) == null ? void 0 : _S.props) == null ? void 0 : _T["bindtouchend"], "bind:touchend"),
        "bind:touchmove": __EXPRESSION__3((_V = (_U = ctx.i) == null ? void 0 : _U.props) == null ? void 0 : _V["bindtouchmove"], "bind:touchmove"),
        "bind:touchstart": __EXPRESSION__3((_X = (_W = ctx.i) == null ? void 0 : _W.props) == null ? void 0 : _X["bindtouchstart"], "bind:touchstart"),
        "bind:transitionend": __EXPRESSION__3((_Z = (_Y = ctx.i) == null ? void 0 : _Y.props) == null ? void 0 : _Z["bindtransitionend"], "bind:transitionend")
      },
      updateFields: __OMIT__({
        animation: [(_$ = (__ = patchData.i) == null ? void 0 : __.props) == null ? void 0 : _$["animation"]],
        "class-name": [(_ba = (_aa = patchData.i) == null ? void 0 : _aa.props) == null ? void 0 : _ba["class-name"]],
        "disable-scroll": [(_da = (_ca = patchData.i) == null ? void 0 : _ca.props) == null ? void 0 : _da["disable-scroll"]],
        hidden: [(_fa = (_ea = patchData.i) == null ? void 0 : _ea.props) == null ? void 0 : _fa["hidden"]],
        "hover-class": [(_ha = (_ga = patchData.i) == null ? void 0 : _ga.props) == null ? void 0 : _ha["hover-class"]],
        "hover-start-time": [(_ja = (_ia = patchData.i) == null ? void 0 : _ia.props) == null ? void 0 : _ja["hover-start-time"]],
        "hover-stay-time": [(_la = (_ka = patchData.i) == null ? void 0 : _ka.props) == null ? void 0 : _la["hover-stay-time"]],
        "hover-stop-propagation": [(_na = (_ma = patchData.i) == null ? void 0 : _ma.props) == null ? void 0 : _na["hover-stop-propagation"]],
        id: [(_pa = (_oa = patchData.i) == null ? void 0 : _oa.props) == null ? void 0 : _pa["id"]],
        src: [(_ra = (_qa = patchData.i) == null ? void 0 : _qa.props) == null ? void 0 : _ra["src"]],
        style: [(_ta = (_sa = patchData.i) == null ? void 0 : _sa.props) == null ? void 0 : _ta["style"]],
        "update-layout": [(_va = (_ua = patchData.i) == null ? void 0 : _ua.props) == null ? void 0 : _va["update-layout"]]
      }),
      isStatic: false,
      children: _normalizeChildren([
        (_forListData = __EXPRESSION__3((_wa = ctx.i) == null ? void 0 : _wa.children), _forPatchData = __TRY_RUN__(function() {
          var _a2;
          return __EXPRESSION__3((_a2 = _patchDataSjs.i) == null ? void 0 : _a2.children);
        }), _renderList(_forListData, function renderList(item, idx) {
          function listItem(ctx2, patchData2, _FOR_KEY_) {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
            return _createBlock(
              {
                tid: "32-1",
                name: _Block,
                children: __ADDITION_KEY__(
                  _normalizeChildren([
                    (__IS_UNDEF__(patchData2[_FOR_KEY_]) && (patchData2[_FOR_KEY_] = ctx2[_FOR_KEY_]), _createTemplate({
                      id: __EXPRESSION__3("REMAX_TPL_" + ((_c2 = (_b2 = (_a2 = ctx2.i) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2[ctx2.item]) == null ? void 0 : _c2.type)),
                      module: templateUsage[__EXPRESSION__3("REMAX_TPL_" + ((_f2 = (_e2 = (_d2 = ctx2.i) == null ? void 0 : _d2.nodes) == null ? void 0 : _e2[ctx2.item]) == null ? void 0 : _f2.type))],
                      data: __EXPRESSION__3({ i: (_h2 = (_g2 = ctx2.i) == null ? void 0 : _g2.nodes) == null ? void 0 : _h2[ctx2.item] }),
                      patchData: __EXPRESSION__3({ i: (_j2 = (_i2 = patchData2.i) == null ? void 0 : _i2.nodes) == null ? void 0 : _j2[patchData2.item] })
                    }))
                  ]),
                  { key: __FOR_THIS_KEY__(ctx2["item"], idx), forKey: "*this" }
                )
              },
              {}
            );
          }
          var itemCtx = { index: idx };
          itemCtx["item"] = item;
          var listData = __ASSIGN__({}, ctx, itemCtx);
          var updateItem = { index: idx };
          updateItem["item"] = __NORMALIZE_LIST__(_forPatchData)[idx];
          var patchForData = __ASSIGN__({}, patchData, updateItem);
          return listItem(listData, patchForData, "item");
        }))
      ])
    })
  ]);
};
templateExport["REMAX_TPL_plain-text"] = templateUsage["REMAX_TPL_plain-text"] = function render34(ctx, host, patchData) {
  var _a;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _normalizeChildren = host.normalizeChildren;
  var _createBlock = host.createBlock;
  var _Block = host.Block;
  var _createText = host.createText;
  return _normalizeChildren([
    _createBlock(
      {
        tid: "33-0",
        name: _Block,
        children: _normalizeChildren([
          _createText(
            {
              type: "text",
              tid: "33-1",
              isStatic: false,
              value: __EXPRESSION__3((_a = ctx.i) == null ? void 0 : _a.text, "")
            },
            {}
          )
        ])
      },
      {}
    )
  ]);
};
var render35 = function render36(ctx, host, patchData) {
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _createFragment = host.createFragment;
  var _Fragment = host.Fragment;
  var _normalizeChildren = host.normalizeChildren;
  return _createFragment({ name: _Fragment, children: _normalizeChildren([]) });
};
render35.version = "v2";
var __EXPRESSION__2 = __DEFAULT_EXPRESSION__;
var _safeScript2 = {};
var _patchDataSjs2 = {};
var templateExport2 = {};
var templateUsage2 = {};
__ASSIGN__(templateUsage2, templateExport);
var render37 = function render38(ctx, host, patchData) {
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript2);
  __ASSIGN__(_patchDataSjs2, patchData, _safeScript2);
  var __EXPRESSION__3 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _createFragment = host.createFragment;
  var _Fragment = host.Fragment;
  var _normalizeChildren = host.normalizeChildren;
  var _createTemplate = host.createTemplate;
  return _createFragment({
    name: _Fragment,
    children: _normalizeChildren([
      _createTemplate({
        id: "REMAX_TPL",
        module: templateUsage2["REMAX_TPL"],
        data: __EXPRESSION__3({ root: ctx.root }),
        patchData: __EXPRESSION__3({ root: patchData.root })
      }),
      _createTemplate({
        id: "REMAX_TPL",
        module: templateUsage2["REMAX_TPL"],
        data: __EXPRESSION__3({ root: ctx.modalRoot }),
        patchData: __EXPRESSION__3({ root: patchData.modalRoot })
      })
    ])
  });
};
render37.version = "v2";
var home_default = render37;

});
__appCode__['pages/home/index.xml'] = requireSafeScript(DEFINE_ID).default;
/* sourceFile: components/g2-chart/index.tyml */
DEFINE_ID = "dist/tuya/components/g2-chart/index.tyml.js";
defineSafeScript(DEFINE_ID, function (require, module, exports, getRegExp,getDate,global,window,top,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit ){ 'use strict';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_tyml_exports = {};
__export(index_tyml_exports, {
  default: () => g2_chart_default,
  templateExport: () => templateExport
});
module.exports = __toCommonJS(index_tyml_exports);
var __EXPRESSION__ = __DEFAULT_EXPRESSION__;
var _safeScript = {};
var _patchDataSjs = {};
var templateExport = {};
var render = function render2(ctx, host, patchData) {
  var _a;
  patchData = patchData || {};
  __ASSIGN__(ctx, _safeScript);
  __ASSIGN__(_patchDataSjs, patchData, _safeScript);
  var __EXPRESSION__2 = host.normalizeExpression || __DEFAULT_EXPRESSION__;
  var _createFragment = host.createFragment;
  var _Fragment = host.Fragment;
  var _normalizeChildren = host.normalizeChildren;
  var _createElementVNode = host.createElementVNode;
  var _createText = host.createText;
  var _normalizeStyle = host.normalizeStyle;
  return _createFragment({
    name: _Fragment,
    children: _normalizeChildren([
      _createElementVNode({
        tid: "0",
        name: "view",
        attrs: { class: "container" },
        updateFields: __OMIT__({}),
        isStatic: true,
        children: _normalizeChildren([
          _createText(
            {
              type: "text",
              tid: "1",
              isStatic: false,
              value: "\n  " + __EXPRESSION__2((_a = ctx.chart) == null ? void 0 : _a.foo, "") + "\n  "
            },
            {}
          ),
          _createElementVNode({
            tid: "2",
            name: "canvas",
            attrs: {
              class: "canvasDom",
              "canvas-id": "myCanvas",
              style: _normalizeStyle("width: 100%; height: 250px")
            },
            updateFields: __OMIT__({}),
            isStatic: true,
            children: []
          }),
          _createElementVNode({
            tid: "3",
            name: "button",
            event: { "bind:tap": "draw" },
            isStatic: true,
            children: _normalizeChildren([
              _createText(
                {
                  type: "text",
                  tid: "4",
                  isStatic: true,
                  value: "\u91CD\u65B0\u6E32\u67D3\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u56FE\u8868"
                },
                {}
              )
            ])
          })
        ])
      })
    ])
  });
};
render.version = "v2";
var g2_chart_default = render;

});
__appCode__['components/g2-chart/index.xml'] = requireSafeScript(DEFINE_ID).default;
})(function __DEFAULT_EXPRESSION__(v) { return typeof v === "undefined" ? "" : v; },function __OMIT__(v) {
        var u = [];
        for (var key in v) {
          var hasValue = v[key].some(function(item){  return typeof item !== 'undefined'; });
          if(hasValue){
            u.push(key);
          };
        };
        return u.length > 0 ? u : undefined;
      },function __ADDITION_KEY__(nodes, addition) {
        if ('key' in addition) {
          // // DEBUG_XML esbuild 注入环境变量
          // if (DEBUG_XML) {
          //   !addition.key && console.warn('[基础库] template directive key "'+addition.forKey+'" is empty value, please check.')
          // };
          nodes.forEach(function addKey(node, index) { 
            var k = node.key || addition.key;
            if (typeof k !== 'object') { k = k + '_' + index }
            node.key = k; 
          }); 
        };
        return nodes;
      },Object.assign,function __TRY_RUN__(fn) {
      try{
        return fn();
      }catch(e){
        return void 0;
      };
    },function __REPLACE_PROPERTY__(k) {return k === 'constructor' ? 'v_constructor' : k},function __COPE_SJS_MODULE__(target) {
  if (target === null || target === undefined) return target;
  var constructor = target.constructor;
  if (
    constructor === String ||
    constructor === Boolean ||
    constructor === Number
  )
    return target;
  if (constructor === Object) {
    var copy = {};
    for (var key in target) {
      if (target.hasOwnProperty(key)) {
        var k = key;
        if (key === 'v_constructor') {
          k = k.substring(2);
        }
        copy[k] = __COPE_SJS_MODULE__(target[key]);
      }
    }

    return copy;
  }
  if (constructor === Array) {
    var copy = [];
    for (var i = 0; i < target.length; i++) {
      copy.push(__COPE_SJS_MODULE__(target[i]));
    }
    return copy;
  }
  if (constructor === Date) {
    var copy = new Date();
    copy.setTime(target.getTime());
    return copy;
  }
  if (constructor === RegExp) {
    var f = '';
    if (target.global) f += 'g';
    if (target.ignoreCase) f += 'i';
    if (target.multiline) f += 'm';
    return new RegExp(target.source, f);
  }
  if (constructor === Function) {
    return target;
  }
  return null;
},function __NORMALIZE_LIST__(list, cb) {
  var result = [];
  var t = Object.prototype.toString.call(list).slice(8, -1)
  switch (t) {
    case 'Boolean':
    case 'Null':
    case 'Undefined':
      break;
    case 'Array':
    case 'Object':
      result = list;
      break;
    case 'String':
      result = Array.from(list);
      break;
    case 'Number':
      if (!isNaN(list)) {
        var arr = new Array(list);
        for (var i = 0; i < arr.length; i++) {
          arr[i] = i;
        }
        result = arr;
      }
      break;
  }
  return result;
},function __IS_UNDEF__(v) { return typeof v === 'undefined' },function __FOR_THIS_KEY__(v, idx) { 
    var type = typeof v; 
    return (type === 'string' || type === 'number') ? v : 'k_'+idx 
  },function __GET_PATH__(obj, paths) { 
    var current = obj;
    for (var i = 0; i < paths.length; i++) { 
      var key = paths[i];
      var value = current[key];
      if (value == undefined) { 
        return value; 
      } 
      current = value; 
    } 
    return current; 
  }, __appCode__, defineSafeScript, requireSafeScript);})();//# sourceMappingURL=/app-xml.js.map