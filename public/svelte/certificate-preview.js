//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var e = !1, t = !1;
function n() {
	t = !0;
}
//#endregion
//#region node_modules/svelte/src/internal/flags/legacy.js
n();
//#endregion
//#region node_modules/svelte/src/constants.js
var r = {}, i = Symbol(), a = Array.isArray, o = Array.prototype.indexOf, s = Array.prototype.includes, c = Array.from, l = Object.keys, u = Object.defineProperty, d = Object.getOwnPropertyDescriptor, f = Object.getOwnPropertyDescriptors, p = Object.prototype, m = Array.prototype, h = Object.getPrototypeOf, g = Object.isExtensible, ee = () => {};
function _(e) {
	return e();
}
function v(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function te() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var y = 1024, b = 2048, x = 4096, ne = 8192, re = 16384, ie = 32768, ae = 1 << 25, oe = 65536, se = 1 << 19, ce = 1 << 20, le = 65536, ue = 1 << 21, de = 1 << 22, fe = 1 << 23, pe = Symbol("$state"), me = Symbol("legacy props"), S = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
globalThis.document?.contentType;
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function he() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ge(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function _e() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ve(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function ye() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function be() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function xe(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Se() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ce() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function we() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Te() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ee() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function De(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Oe() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var C = !1;
function ke(e) {
	C = e;
}
var w;
function T(e) {
	if (e === null) throw De(), r;
	return w = e;
}
function Ae() {
	return T(/* @__PURE__ */ Kt(w));
}
function E(e) {
	if (C) {
		if (/* @__PURE__ */ Kt(w) !== null) throw De(), r;
		w = e;
	}
}
function je(e = 1) {
	if (C) {
		for (var t = e, n = w; t--;) n = /* @__PURE__ */ Kt(n);
		w = n;
	}
}
function Me(e = !0) {
	for (var t = 0, n = w;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Kt(n);
		e && n.remove(), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Ne(e) {
	return e === this.v;
}
function Pe(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Fe(e) {
	return !Pe(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var D = null;
function Ie(e) {
	D = e;
}
function Le(e, n = !1, r) {
	D = {
		p: D,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: G,
		l: t && !n ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function Re(e) {
	var t = D, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) nn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, D = t.p, e ?? {};
}
function ze() {
	return !t || D !== null && D.l === null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Be = [];
function Ve() {
	var e = Be;
	Be = [], v(e);
}
function He(e) {
	if (Be.length === 0 && !$e) {
		var t = Be;
		queueMicrotask(() => {
			t === Be && Ve();
		});
	}
	Be.push(e);
}
function Ue() {
	for (; Be.length > 0;) Ve();
}
function We(e) {
	var t = G;
	if (t === null) return H.f |= fe, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	O(e, t);
}
function O(e, t) {
	for (; t !== null;) {
		if (t.f & 128) {
			if (!(t.f & 32768)) throw e;
			try {
				t.b.error(e);
				return;
			} catch (t) {
				e = t;
			}
		}
		t = t.parent;
	}
	throw e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Ge = ~(b | x | y);
function k(e, t) {
	e.f = e.f & Ge | t;
}
function Ke(e) {
	e.f & 512 || e.deps === null ? k(e, y) : k(e, x);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function qe(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= le, qe(t.deps));
}
function Je(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), qe(e.deps), k(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Ye = !1, Xe = !1;
function Ze(e) {
	var t = Xe;
	try {
		return Xe = !1, [e(), Xe];
	} finally {
		Xe = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var A = /* @__PURE__ */ new Set(), j = null, M = null, Qe = null, $e = !1, et = !1, tt = null, nt = null, rt = 0, it = 1, at = class t {
	id = it++;
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#e = /* @__PURE__ */ new Set();
	#t = /* @__PURE__ */ new Set();
	#n = /* @__PURE__ */ new Set();
	#r = /* @__PURE__ */ new Map();
	#i = /* @__PURE__ */ new Map();
	#a = null;
	#o = [];
	#s = [];
	#c = /* @__PURE__ */ new Set();
	#l = /* @__PURE__ */ new Set();
	#u = /* @__PURE__ */ new Map();
	#d = /* @__PURE__ */ new Set();
	is_fork = !1;
	#f = !1;
	#p = /* @__PURE__ */ new Set();
	#m() {
		return this.is_fork || this.#i.size > 0;
	}
	#h() {
		for (let n of this.#p) for (let r of n.#i.keys()) {
			for (var e = !1, t = r; t.parent !== null;) {
				if (this.#u.has(t)) {
					e = !0;
					break;
				}
				t = t.parent;
			}
			if (!e) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#u.has(e) || this.#u.set(e, {
			d: [],
			m: []
		}), this.#d.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#u.get(e);
		if (n) {
			this.#u.delete(e);
			for (var r of n.d) k(r, b), t(r);
			for (r of n.m) k(r, x), t(r);
		}
		this.#d.add(e);
	}
	#g() {
		if (rt++ > 1e3 && (A.delete(this), ot()), !this.#m()) {
			for (let e of this.#c) this.#l.delete(e), k(e, b), this.schedule(e);
			for (let e of this.#l) k(e, x), this.schedule(e);
		}
		let n = this.#o;
		this.#o = [], this.apply();
		var r = tt = [], i = [], a = nt = [];
		for (let e of n) try {
			this.#_(e, r, i);
		} catch (t) {
			throw ft(e), t;
		}
		if (j = null, a.length > 0) {
			var o = t.ensure();
			for (let e of a) o.schedule(e);
		}
		if (tt = null, nt = null, this.#m() || this.#h()) {
			this.#v(i), this.#v(r);
			for (let [e, t] of this.#u) dt(e, t);
		} else {
			this.#r.size === 0 && A.delete(this), this.#c.clear(), this.#l.clear();
			for (let e of this.#e) e(this);
			this.#e.clear(), st(i), st(r), this.#a?.resolve();
		}
		var s = j;
		if (this.#o.length > 0) {
			let e = s ??= this;
			e.#o.push(...this.#o.filter((t) => !e.#o.includes(t)));
		}
		s !== null && (A.add(s), s.#g()), e && !A.has(this) && this.#y();
	}
	#_(t, n, r) {
		t.f ^= y;
		for (var i = t.first; i !== null;) {
			var a = i.f, o = (a & 96) != 0;
			if (!(o && a & 1024 || a & 8192 || this.#u.has(i)) && i.fn !== null) {
				o ? i.f ^= y : a & 4 ? n.push(i) : e && a & 16777224 ? r.push(i) : Nn(i) && (a & 16 && this.#l.add(i), Rn(i));
				var s = i.first;
				if (s !== null) {
					i = s;
					continue;
				}
			}
			for (; i !== null;) {
				var c = i.next;
				if (c !== null) {
					i = c;
					break;
				}
				i = i.parent;
			}
		}
	}
	#v(e) {
		for (var t = 0; t < e.length; t += 1) Je(e[t], this.#c, this.#l);
	}
	capture(e, t, n = !1) {
		e.v !== i && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), M?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		j = this;
	}
	deactivate() {
		j = null, M = null;
	}
	flush() {
		try {
			et = !0, j = this, this.#g();
		} finally {
			rt = 0, Qe = null, tt = null, nt = null, et = !1, j = null, M = null, At.clear();
		}
	}
	discard() {
		for (let e of this.#t) e(this);
		this.#t.clear(), this.#n.clear(), A.delete(this);
	}
	register_created_effect(e) {
		this.#s.push(e);
	}
	#y() {
		for (let l of A) {
			var e = l.id < this.id, t = [];
			for (let [r, [i, a]] of this.current) {
				if (l.current.has(r)) {
					var n = l.current.get(r)[0];
					if (e && i !== n) l.current.set(r, [i, a]);
					else continue;
				}
				t.push(r);
			}
			var r = [...l.current.keys()].filter((e) => !this.current.has(e));
			if (r.length === 0) e && l.discard();
			else if (t.length > 0) {
				if (e) for (let e of this.#d) l.unskip_effect(e, (e) => {
					e.f & 4194320 ? l.schedule(e) : l.#v([e]);
				});
				l.activate();
				var i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
				for (var o of t) ct(o, r, i, a);
				a = /* @__PURE__ */ new Map();
				var s = [...l.current.keys()].filter((e) => this.current.has(e) ? this.current.get(e)[0] !== e : !0);
				for (let e of this.#s) !(e.f & 155648) && lt(e, s, a) && (e.f & 4194320 ? (k(e, b), l.schedule(e)) : l.#c.add(e));
				if (l.#o.length > 0) {
					l.apply();
					for (var c of l.#o) l.#_(c, [], []);
					l.#o = [];
				}
				l.deactivate();
			}
		}
		for (let e of A) e.#p.has(this) && (e.#p.delete(this), e.#p.size === 0 && !e.#m() && (e.activate(), e.#g()));
	}
	increment(e, t) {
		let n = this.#r.get(t) ?? 0;
		if (this.#r.set(t, n + 1), e) {
			let e = this.#i.get(t) ?? 0;
			this.#i.set(t, e + 1);
		}
	}
	decrement(e, t, n) {
		let r = this.#r.get(t) ?? 0;
		if (r === 1 ? this.#r.delete(t) : this.#r.set(t, r - 1), e) {
			let e = this.#i.get(t) ?? 0;
			e === 1 ? this.#i.delete(t) : this.#i.set(t, e - 1);
		}
		this.#f || n || (this.#f = !0, He(() => {
			this.#f = !1, this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#c.add(t);
		for (let e of t) this.#l.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#e.add(e);
	}
	ondiscard(e) {
		this.#t.add(e);
	}
	on_fork_commit(e) {
		this.#n.add(e);
	}
	run_fork_commit_callbacks() {
		for (let e of this.#n) e(this);
		this.#n.clear();
	}
	settled() {
		return (this.#a ??= te()).promise;
	}
	static ensure() {
		if (j === null) {
			let e = j = new t();
			et || (A.add(j), $e || He(() => {
				j === e && e.flush();
			}));
		}
		return j;
	}
	apply() {
		if (!e || !this.is_fork && A.size === 1) {
			M = null;
			return;
		}
		M = /* @__PURE__ */ new Map();
		for (let [e, [t]] of this.current) M.set(e, t);
		for (let e of A) if (!(e === this || e.is_fork)) {
			var t = !1, n = !1;
			if (e.id < this.id) for (let [r, [, i]] of e.current) i || (t ||= this.current.has(r), n ||= !this.current.has(r));
			if (t && n) this.#p.add(e);
			else for (let [t, n] of e.previous) M.has(t) || M.set(t, n);
		}
	}
	schedule(t) {
		if (Qe = t, t.b?.is_pending && t.f & 16777228 && !(t.f & 32768)) {
			t.b.defer_effect(t);
			return;
		}
		for (var n = t; n.parent !== null;) {
			n = n.parent;
			var r = n.f;
			if (tt !== null && n === G && (e || (H === null || !(H.f & 2)) && !Ye)) return;
			if (r & 96) {
				if (!(r & 1024)) return;
				n.f ^= y;
			}
		}
		this.#o.push(n);
	}
};
function N(e) {
	var t = $e;
	$e = !0;
	try {
		var n;
		for (e && (j !== null && !j.is_fork && j.flush(), n = e());;) {
			if (Ue(), j === null) return n;
			j.flush();
		}
	} finally {
		$e = t;
	}
}
function ot() {
	try {
		ye();
	} catch (e) {
		O(e, Qe);
	}
}
var P = null;
function st(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Nn(r) && (P = /* @__PURE__ */ new Set(), Rn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && yn(r), P?.size > 0)) {
				At.clear();
				for (let e of P) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) P.has(n) && (P.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Rn(n);
					}
				}
				P.clear();
			}
		}
		P = null;
	}
}
function ct(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? ct(i, t, n, r) : e & 4194320 && !(e & 2048) && lt(i, t, r) && (k(i, b), ut(i));
	}
}
function lt(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (s.call(t, r)) return !0;
		if (r.f & 2 && lt(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function ut(e) {
	j.schedule(e);
}
function dt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), k(e, y);
		for (var n = e.first; n !== null;) dt(n, t), n = n.next;
	}
}
function ft(e) {
	k(e, y);
	for (var t = e.first; t !== null;) ft(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function pt(e) {
	let t = 0, n = Mt(0), r;
	return () => {
		$t() && (Z(n), dn(() => (t === 0 && (r = Vn(() => e(() => It(n)))), t += 1, () => {
			He(() => {
				--t, t === 0 && (r?.(), r = void 0, It(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var mt = oe | se;
function ht(e, t, n, r) {
	new gt(e, t, n, r);
}
var gt = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = C ? w : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = pt(() => (this.#m = Mt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = G;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = G.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = pn(() => {
			if (C) {
				let e = this.#t;
				Ae();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#v() : this.#g();
			} else this.#y();
		}, mt), C && (this.#e = w);
	}
	#g() {
		try {
			this.#a = mn(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t && (this.#s = mn(() => {
			t(this.#e, () => e, () => () => {});
		}));
	}
	#v() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = mn(() => e(this.#e)), He(() => {
			var e = this.#c = document.createDocumentFragment(), t = Wt();
			e.append(t), this.#a = this.#x(() => mn(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, bn(this.#o, () => {
				this.#o = null;
			}), this.#b(j));
		}));
	}
	#y() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = mn(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Sn(this.#a, e);
				let t = this.#n.pending;
				this.#o = mn(() => t(this.#e));
			} else this.#b(j);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Je(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = G, n = H, r = D;
		K(this.#i), W(this.#i), Ie(this.#i.ctx);
		try {
			return at.ensure(), e();
		} catch (e) {
			return We(e), null;
		} finally {
			K(t), W(n), Ie(r);
		}
	}
	#S(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#b(t), this.#o && bn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#S(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, He(() => {
			this.#d = !1, this.#m && Pt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Z(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		j?.is_fork ? (this.#a && j.skip_effect(this.#a), this.#o && j.skip_effect(this.#o), this.#s && j.skip_effect(this.#s), j.on_fork_commit(() => {
			this.#C(e);
		})) : this.#C(e);
	}
	#C(e) {
		this.#a &&= (B(this.#a), null), this.#o &&= (B(this.#o), null), this.#s &&= (B(this.#s), null), C && (T(this.#t), je(), T(Me()));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1, i = !1;
		let a = () => {
			if (r) {
				Oe();
				return;
			}
			r = !0, i && Te(), this.#s !== null && bn(this.#s, () => {
				this.#s = null;
			}), this.#x(() => {
				this.#y();
			});
		}, o = (e) => {
			try {
				i = !0, t?.(e, a), i = !1;
			} catch (e) {
				O(e, this.#i && this.#i.parent);
			}
			n && (this.#s = this.#x(() => {
				try {
					return mn(() => {
						var t = G;
						t.b = this, t.f |= 128, n(this.#e, () => e, () => a);
					});
				} catch (e) {
					return O(e, this.#i.parent), null;
				}
			}));
		};
		He(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				O(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(o, (e) => O(e, this.#i && this.#i.parent)) : o(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function _t(e, t, n, r) {
	let i = ze() ? xt : Ct;
	var a = e.filter((e) => !e.settled);
	if (n.length === 0 && a.length === 0) {
		r(t.map(i));
		return;
	}
	var o = G, s = vt(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function l(e) {
		s();
		try {
			r(e);
		} catch (e) {
			o.f & 16384 || O(e, o);
		}
		yt();
	}
	if (n.length === 0) {
		c.then(() => l(t.map(i)));
		return;
	}
	var u = bt();
	function d() {
		Promise.all(n.map((e) => /* @__PURE__ */ St(e))).then((e) => l([...t.map(i), ...e])).catch((e) => O(e, o)).finally(() => u());
	}
	c ? c.then(() => {
		s(), d(), yt();
	}) : d();
}
function vt() {
	var e = G, t = H, n = D, r = j;
	return function(i = !0) {
		K(e), W(t), Ie(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function yt(e = !0) {
	K(null), W(null), Ie(null), e && j?.deactivate();
}
function bt() {
	var e = G, t = e.b, n = j, r = t.is_rendered();
	return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
		t.update_pending_count(-1, n), n.decrement(r, e, i);
	};
}
/* @__NO_SIDE_EFFECTS__ */
function xt(e) {
	var t = 2 | b;
	return G !== null && (G.f |= se), {
		ctx: D,
		deps: null,
		effects: null,
		equals: Ne,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: i,
		wv: 0,
		parent: G,
		ac: null
	};
}
/* @__NO_SIDE_EFFECTS__ */
function St(e, t, n) {
	let r = G;
	r === null && he();
	var a = void 0, o = Mt(i), s = !H, c = /* @__PURE__ */ new Map();
	return un(() => {
		var t = G, n = te();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, n.reject).finally(yt);
		} catch (e) {
			n.reject(e), yt();
		}
		var i = j;
		if (s) {
			if (t.f & 32768) var l = bt();
			if (r.b.is_rendered()) c.get(i)?.reject(S), c.delete(i);
			else {
				for (let e of c.values()) e.reject(S);
				c.clear();
			}
			c.set(i, n);
		}
		let u = (e, n = void 0) => {
			if (l && l(n === S), !(n === S || t.f & 16384)) {
				if (i.activate(), n) o.f |= fe, Pt(o, n);
				else {
					o.f & 8388608 && (o.f ^= fe), Pt(o, e);
					for (let [e, t] of c) {
						if (c.delete(e), e === i) break;
						t.reject(S);
					}
				}
				i.deactivate();
			}
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), en(() => {
		for (let e of c.values()) e.reject(S);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ct(e) {
	let t = /* @__PURE__ */ xt(e);
	return t.equals = Fe, t;
}
function wt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) B(t[n]);
	}
}
function Tt(e) {
	var t, n = G, r = e.parent;
	if (!V && r !== null && r.f & 24576) return Ee(), e.v;
	K(r);
	try {
		e.f &= ~le, wt(e), t = Fn(e);
	} finally {
		K(n);
	}
	return t;
}
function Et(e) {
	var t = Tt(e);
	if (!e.equals(t) && (e.wv = Mn(), (!j?.is_fork || e.deps === null) && (j === null ? e.v = t : j.capture(e, t, !0), e.deps === null))) {
		k(e, y);
		return;
	}
	V || (M === null ? Ke(e) : ($t() || j?.is_fork) && M.set(e, t));
}
function Dt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(S), t.teardown = ee, t.ac = null, Ln(t, 0), gn(t));
}
function Ot(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && Rn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var kt = /* @__PURE__ */ new Set(), At = /* @__PURE__ */ new Map(), jt = !1;
function Mt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ne,
		rv: 0,
		wv: 0
	};
}
/* @__NO_SIDE_EFFECTS__ */
function F(e, t) {
	let n = Mt(e, t);
	return En(n), n;
}
/* @__NO_SIDE_EFFECTS__ */
function Nt(e, n = !1, r = !0) {
	let i = Mt(e);
	return n || (i.equals = Fe), t && r && D !== null && D.l !== null && (D.l.s ??= []).push(i), i;
}
function I(e, t, n = !1) {
	return H !== null && (!U || H.f & 131072) && ze() && H.f & 4325394 && (q === null || !s.call(q, e)) && we(), Pt(e, n ? Rt(t) : t, nt);
}
function Pt(e, t, n = null) {
	if (!e.equals(t)) {
		At.set(e, V ? t : e.v);
		var r = at.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && Tt(t), M === null && Ke(t);
		}
		e.wv = Mn(), Lt(e, b, n), ze() && G !== null && G.f & 1024 && !(G.f & 96) && (X === null ? Dn([e]) : X.push(e)), !r.is_fork && kt.size > 0 && !jt && Ft();
	}
	return t;
}
function Ft() {
	jt = !1;
	for (let e of kt) e.f & 1024 && k(e, x), Nn(e) && Rn(e);
	kt.clear();
}
function It(e) {
	I(e, e.v + 1);
}
function Lt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = ze(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === G)) {
			var l = (c & b) === 0;
			if (l && k(s, t), c & 2) {
				var u = s;
				M?.delete(u), c & 65536 || (c & 512 && (s.f |= le), Lt(u, x, n));
			} else if (l) {
				var d = s;
				c & 16 && P !== null && P.add(d), n === null ? ut(d) : n.push(d);
			}
		}
	}
}
function Rt(e) {
	if (typeof e != "object" || !e || pe in e) return e;
	let t = h(e);
	if (t !== p && t !== m) return e;
	var n = /* @__PURE__ */ new Map(), r = a(e), o = /* @__PURE__ */ F(0), s = null, c = An, l = (e) => {
		if (An === c) return e();
		var t = H, n = An;
		W(null), jn(c);
		var r = e();
		return W(t), jn(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ F(e.length, s)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Se();
			var i = n.get(t);
			return i === void 0 ? l(() => {
				var e = /* @__PURE__ */ F(r.value, s);
				return n.set(t, e), e;
			}) : I(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = l(() => /* @__PURE__ */ F(i, s));
					n.set(t, e), It(o);
				}
			} else I(r, i), It(o);
			return !0;
		},
		get(t, r, a) {
			if (r === pe) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || d(t, r)?.writable) && (o = l(() => /* @__PURE__ */ F(Rt(c ? t[r] : i), s)), n.set(r, o)), o !== void 0) {
				var u = Z(o);
				return u === i ? void 0 : u;
			}
			return Reflect.get(t, r, a);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var a = n.get(t);
				a && (r.value = Z(a));
			} else if (r === void 0) {
				var o = n.get(t), s = o?.v;
				if (o !== void 0 && s !== i) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === pe) return !0;
			var r = n.get(t), a = r !== void 0 && r.v !== i || Reflect.has(e, t);
			return (r !== void 0 || G !== null && (!a || d(e, t)?.writable)) && (r === void 0 && (r = l(() => /* @__PURE__ */ F(a ? Rt(e[t]) : i, s)), n.set(t, r)), Z(r) === i) ? !1 : a;
		},
		set(e, t, a, c) {
			var u = n.get(t), f = t in e;
			if (r && t === "length") for (var p = a; p < u.v; p += 1) {
				var m = n.get(p + "");
				m === void 0 ? p in e && (m = l(() => /* @__PURE__ */ F(i, s)), n.set(p + "", m)) : I(m, i);
			}
			if (u === void 0) (!f || d(e, t)?.writable) && (u = l(() => /* @__PURE__ */ F(void 0, s)), I(u, Rt(a)), n.set(t, u));
			else {
				f = u.v !== i;
				var h = l(() => Rt(a));
				I(u, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, t);
			if (g?.set && g.set.call(c, a), !f) {
				if (r && typeof t == "string") {
					var ee = n.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= ee.v && I(ee, _ + 1);
				}
				It(o);
			}
			return !0;
		},
		ownKeys(e) {
			Z(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== i;
			});
			for (var [r, a] of n) a.v !== i && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Ce();
		}
	});
}
var zt, Bt, Vt, Ht;
function Ut() {
	if (zt === void 0) {
		zt = window, Bt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Vt = d(t, "firstChild").get, Ht = d(t, "nextSibling").get, g(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), g(n) && (n.__t = void 0);
	}
}
function Wt(e = "") {
	return document.createTextNode(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Gt(e) {
	return Vt.call(e);
}
/* @__NO_SIDE_EFFECTS__ */
function Kt(e) {
	return Ht.call(e);
}
function L(e, t) {
	if (!C) return /* @__PURE__ */ Gt(e);
	var n = /* @__PURE__ */ Gt(w);
	if (n === null) n = w.appendChild(Wt());
	else if (t && n.nodeType !== 3) {
		var r = Wt();
		return n?.before(r), T(r), r;
	}
	return t && Yt(n), T(n), n;
}
function R(e, t = 1, n = !1) {
	let r = C ? w : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Kt(r);
	if (!C) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Wt();
			return r === null ? i?.after(a) : r.before(a), T(a), a;
		}
		Yt(r);
	}
	return T(r), r;
}
function qt(e) {
	e.textContent = "";
}
function Jt(e, t, n) {
	let r = n ? { is: n } : void 0;
	return document.createElementNS(t ?? "http://www.w3.org/1999/xhtml", e, r);
}
function Yt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Xt(e) {
	var t = H, n = G;
	W(null), K(null);
	try {
		return e();
	} finally {
		W(t), K(n);
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Zt(e) {
	G === null && (H === null && ve(e), _e()), V && ge(e);
}
function Qt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function z(e, t) {
	var n = G;
	n !== null && n.f & 8192 && (e |= ne);
	var r = {
		ctx: D,
		deps: null,
		nodes: null,
		f: e | b | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	j?.register_created_effect(r);
	var i = r;
	if (e & 4) tt === null ? at.ensure().schedule(r) : tt.push(r);
	else if (t !== null) {
		try {
			Rn(r);
		} catch (e) {
			throw B(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= oe));
	}
	if (i !== null && (i.parent = n, n !== null && Qt(i, n), H !== null && H.f & 2 && !(e & 64))) {
		var a = H;
		(a.effects ??= []).push(i);
	}
	return r;
}
function $t() {
	return H !== null && !U;
}
function en(e) {
	let t = z(8, null);
	return k(t, y), t.teardown = e, t;
}
function tn(e) {
	Zt("$effect");
	var t = G.f;
	if (!H && t & 32 && !(t & 32768)) {
		var n = D;
		(n.e ??= []).push(e);
	} else return nn(e);
}
function nn(e) {
	return z(4 | ce, e);
}
function rn(e) {
	return Zt("$effect.pre"), z(8 | ce, e);
}
function an(e) {
	at.ensure();
	let t = z(64 | se, e);
	return () => {
		B(t);
	};
}
function on(e) {
	at.ensure();
	let t = z(64 | se, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? bn(t, () => {
			B(t), n(void 0);
		}) : (B(t), n(void 0));
	});
}
function sn(e) {
	return z(4, e);
}
function cn(e, t) {
	var n = D, r = {
		effect: null,
		ran: !1,
		deps: e
	};
	n.l.$.push(r), r.effect = dn(() => {
		if (e(), !r.ran) {
			r.ran = !0;
			var n = G;
			try {
				K(n.parent), Vn(t);
			} finally {
				K(n);
			}
		}
	});
}
function ln() {
	var e = D;
	dn(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			n.f & 1024 && n.deps !== null && k(n, x), Nn(n) && Rn(n), t.ran = !1;
		}
	});
}
function un(e) {
	return z(de | se, e);
}
function dn(e, t = 0) {
	return z(8 | t, e);
}
function fn(e, t = [], n = [], r = []) {
	_t(r, t, n, (t) => {
		z(8, () => e(...t.map(Z)));
	});
}
function pn(e, t = 0) {
	return z(16 | t, e);
}
function mn(e) {
	return z(32 | se, e);
}
function hn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = V, n = H;
		Tn(!0), W(null);
		try {
			t.call(null);
		} finally {
			Tn(e), W(n);
		}
	}
}
function gn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Xt(() => {
			e.abort(S);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : B(n, t), n = r;
	}
}
function _n(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || B(t), t = n;
	}
}
function B(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (vn(e.nodes.start, e.nodes.end), n = !0), k(e, ae), gn(e, t && !n), Ln(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	hn(e), e.f ^= ae, e.f |= re;
	var i = e.parent;
	i !== null && i.first !== null && yn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function vn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Kt(e);
		e.remove(), e = n;
	}
}
function yn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function bn(e, t, n = !0) {
	var r = [];
	xn(e, r, !0);
	var i = () => {
		n && B(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function xn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ne;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				xn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Sn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Kt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Cn = null, wn = !1, V = !1;
function Tn(e) {
	V = e;
}
var H = null, U = !1;
function W(e) {
	H = e;
}
var G = null;
function K(e) {
	G = e;
}
var q = null;
function En(t) {
	H !== null && (!e || H.f & 2) && (q === null ? q = [t] : q.push(t));
}
var J = null, Y = 0, X = null;
function Dn(e) {
	X = e;
}
var On = 1, kn = 0, An = kn;
function jn(e) {
	An = e;
}
function Mn() {
	return ++On;
}
function Nn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~le), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Nn(a) && Et(a), a.wv > e.wv) return !0;
		}
		t & 512 && M === null && k(e, y);
	}
	return !1;
}
function Pn(t, n, r = !0) {
	var i = t.reactions;
	if (i !== null && !(!e && q !== null && s.call(q, t))) for (var a = 0; a < i.length; a++) {
		var o = i[a];
		o.f & 2 ? Pn(o, n, !1) : n === o && (r ? k(o, b) : o.f & 1024 && k(o, x), ut(o));
	}
}
function Fn(e) {
	var t = J, n = Y, r = X, i = H, a = q, o = D, s = U, c = An, l = e.f;
	J = null, Y = 0, X = null, H = l & 96 ? null : e, q = null, Ie(e.ctx), U = !1, An = ++kn, e.ac !== null && (Xt(() => {
		e.ac.abort(S);
	}), e.ac = null);
	try {
		e.f |= ue;
		var u = e.fn, d = u();
		e.f |= ie;
		var f = e.deps, p = j?.is_fork;
		if (J !== null) {
			var m;
			if (p || Ln(e, Y), f !== null && Y > 0) for (f.length = Y + J.length, m = 0; m < J.length; m++) f[Y + m] = J[m];
			else e.deps = f = J;
			if ($t() && e.f & 512) for (m = Y; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Y < f.length && (Ln(e, Y), f.length = Y);
		if (ze() && X !== null && !U && f !== null && !(e.f & 6146)) for (m = 0; m < X.length; m++) Pn(X[m], e);
		if (i !== null && i !== e) {
			if (kn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = kn;
			if (t !== null) for (let e of t) e.rv = kn;
			X !== null && (r === null ? r = X : r.push(...X));
		}
		return e.f & 8388608 && (e.f ^= fe), d;
	} catch (e) {
		return We(e);
	} finally {
		e.f ^= ue, J = t, Y = n, X = r, H = i, q = a, Ie(o), U = s, An = c;
	}
}
function In(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = o.call(n, e);
		if (r !== -1) {
			var a = n.length - 1;
			a === 0 ? n = t.reactions = null : (n[r] = n[a], n.pop());
		}
	}
	if (n === null && t.f & 2 && (J === null || !s.call(J, t))) {
		var c = t;
		c.f & 512 && (c.f ^= 512, c.f &= ~le), c.v !== i && Ke(c), Dt(c), Ln(c, 0);
	}
}
function Ln(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) In(e, n[r]);
}
function Rn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		k(e, y);
		var n = G, r = wn;
		G = e, wn = !0;
		try {
			t & 16777232 ? _n(e) : gn(e), hn(e);
			var i = Fn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = On;
		} finally {
			wn = r, G = n;
		}
	}
}
function Z(e) {
	var t = (e.f & 2) != 0;
	if (Cn?.add(e), H !== null && !U && !(G !== null && G.f & 16384) && (q === null || !s.call(q, e))) {
		var n = H.deps;
		if (H.f & 2097152) e.rv < kn && (e.rv = kn, J === null && n !== null && n[Y] === e ? Y++ : J === null ? J = [e] : J.push(e));
		else {
			(H.deps ??= []).push(e);
			var r = e.reactions;
			r === null ? e.reactions = [H] : s.call(r, H) || r.push(H);
		}
	}
	if (V && At.has(e)) return At.get(e);
	if (t) {
		var i = e;
		if (V) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Bn(i)) && (a = Tt(i)), At.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !U && H !== null && (wn || (H.f & 512) != 0), c = (i.f & ie) === 0;
		Nn(i) && (o && (i.f |= 512), Et(i)), o && !c && (Ot(i), zn(i));
	}
	if (M?.has(e)) return M.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function zn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Ot(t), zn(t));
}
function Bn(e) {
	if (e.v === i) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (At.has(t) || t.f & 2 && Bn(t)) return !0;
	return !1;
}
function Vn(e) {
	var t = U;
	try {
		return U = !0, e();
	} finally {
		U = t;
	}
}
function Hn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (pe in e) Un(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && pe in n && Un(n);
		}
	}
}
function Un(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Un(e[n], t);
		} catch {}
		let n = h(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = f(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Wn = Symbol("events"), Gn = /* @__PURE__ */ new Set(), Kn = /* @__PURE__ */ new Set(), qn = null;
function Jn(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	qn = e;
	var o = 0, s = qn === e && e[Wn];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[Wn] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		u(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = H, f = G;
		W(null), K(null);
		try {
			for (var p, m = []; a !== null;) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var g = a[Wn]?.[r];
					g != null && (!a.disabled || e.target === a) && g.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble || h === t || h === null) break;
				a = h;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Wn] = t, delete e.currentTarget, W(d), K(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Yn = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Xn(e) {
	return Yn?.createHTML(e) ?? e;
}
function Zn(e) {
	var t = Jt("template");
	return t.innerHTML = Xn(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Qn(e, t) {
	var n = G;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/* @__NO_SIDE_EFFECTS__ */
function $n(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (C) return Qn(w, null), w;
		i === void 0 && (i = Zn(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Gt(i)));
		var t = r || Bt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Gt(t), s = t.lastChild;
			Qn(o, s);
		} else Qn(t, t);
		return t;
	};
}
function er(e, t) {
	if (C) {
		var n = G;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = w), Ae();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var tr = ["touchstart", "touchmove"];
function nr(e) {
	return tr.includes(e);
}
function Q(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function rr(e, t) {
	return or(e, t);
}
function ir(e, t) {
	Ut(), t.intro = t.intro ?? !1;
	let n = t.target, i = C, a = w;
	try {
		for (var o = /* @__PURE__ */ Gt(n); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ Kt(o);
		if (!o) throw r;
		ke(!0), T(o);
		let i = or(e, {
			...t,
			anchor: o
		});
		return ke(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== r && console.warn("Failed to hydrate: ", i), t.recover === !1 && be(), Ut(), qt(n), ke(!1), rr(e, t);
	} finally {
		ke(i), T(a);
	}
}
var ar = /* @__PURE__ */ new Map();
function or(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: l }) {
	Ut();
	var u = void 0, d = on(() => {
		var s = n ?? t.appendChild(Wt());
		ht(s, { pending: () => {} }, (t) => {
			Le({});
			var n = D;
			if (o && (n.c = o), a && (i.$$events = a), C && Qn(t, null), u = e(t, i) || {}, C && (G.nodes.end = w, w === null || w.nodeType !== 8 || w.data !== "]")) throw De(), r;
			Re();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!d.has(r)) {
					d.add(r);
					var i = nr(r);
					for (let e of [t, document]) {
						var a = ar.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), ar.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Jn, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(c(Gn)), Kn.add(f), () => {
			for (var e of d) for (let n of [t, document]) {
				var r = ar.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Jn), r.delete(e), r.size === 0 && ar.delete(n)) : r.set(e, i);
			}
			Kn.delete(f), s !== n && s.parentNode?.removeChild(s);
		};
	});
	return sr.set(u, d), u;
}
var sr = /* @__PURE__ */ new WeakMap();
function cr(e, t) {
	let n = sr.get(e);
	return n ? (sr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function lr(e, t) {
	sn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = Jt("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function ur(e = !1) {
	let t = D, n = t.l.u;
	if (!n) return;
	let r = () => Hn(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ xt(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => Z(i);
	}
	n.b.length && rn(() => {
		dr(t, r), v(n.b);
	}), tn(() => {
		let e = Vn(() => n.m.map(_));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && tn(() => {
		dr(t, r), v(n.a);
	});
}
function dr(e, t) {
	if (e.l.s) for (let t of e.l.s) Z(t);
	t();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, n, r, i) {
	var a = !t || (r & 2) != 0, o = (r & 8) != 0, s = (r & 16) != 0, c = i, l = !0, u = () => (l && (l = !1, c = s ? Vn(i) : i), c);
	let f;
	if (o) {
		var p = pe in e || me in e;
		f = d(e, n)?.set ?? (p && n in e ? (t) => e[n] = t : void 0);
	}
	var m, h = !1;
	o ? [m, h] = Ze(() => e[n]) : m = e[n], m === void 0 && i !== void 0 && (m = u(), f && (a && xe(n), f(m)));
	var g = a ? () => {
		var t = e[n];
		return t === void 0 ? u() : (l = !0, t);
	} : () => {
		var t = e[n];
		return t !== void 0 && (c = void 0), t === void 0 ? c : t;
	};
	if (a && !(r & 4)) return g;
	if (f) {
		var ee = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!a || !t || ee || h) && f(t ? g() : e), e) : g();
		});
	}
	var _ = !1, v = (r & 1 ? xt : Ct)(() => (_ = !1, g()));
	o && Z(v);
	var te = G;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Z(v) : a && o ? Rt(e) : e;
			return I(v, n), _ = !0, c !== void 0 && (c = n), e;
		}
		return V && _ || te.f & 16384 ? v.v : Z(v);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function fr(e) {
	return new pr(e);
}
var pr = class {
	#e;
	#t;
	constructor(t) {
		var n = /* @__PURE__ */ new Map(), r = (e, t) => {
			var r = /* @__PURE__ */ Nt(t, !1, !1);
			return n.set(e, r), r;
		};
		let i = new Proxy({
			...t.props || {},
			$$events: {}
		}, {
			get(e, t) {
				return Z(n.get(t) ?? r(t, Reflect.get(e, t)));
			},
			has(e, t) {
				return t === me ? !0 : (Z(n.get(t) ?? r(t, Reflect.get(e, t))), Reflect.has(e, t));
			},
			set(e, t, i) {
				return I(n.get(t) ?? r(t, i), i), Reflect.set(e, t, i);
			}
		});
		this.#t = (t.hydrate ? ir : rr)(t.component, {
			target: t.target,
			anchor: t.anchor,
			props: i,
			context: t.context,
			intro: t.intro ?? !1,
			recover: t.recover,
			transformError: t.transformError
		}), !e && (!t?.props?.$$host || t.sync === !1) && N(), this.#e = i.$$events;
		for (let e of Object.keys(this.#t)) e === "$set" || e === "$destroy" || e === "$on" || u(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(i, e);
		}, this.#t.$destroy = () => {
			cr(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, mr;
typeof HTMLElement == "function" && (mr = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = Jt("slot");
					e !== "default" && (n.name = e), er(t, n);
				};
			}
			let t = {}, n = gr(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = hr(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = fr({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = an(() => {
				dn(() => {
					this.$$r = !0;
					for (let e of l(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = hr(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = hr(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return l(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function hr(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function gr(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function _r(e, t, n, r, i, a) {
	let o = class extends mr {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return l(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return l(t).forEach((e) => {
		u(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = hr(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (d(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		u(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region svelte-widget/src/CertificatePreview.svelte
var vr = /* @__PURE__ */ $n("<article class=\"sheet svelte-1m2tzsd\"><header class=\"top svelte-1m2tzsd\"><div><p class=\"kicker svelte-1m2tzsd\">Medical Certificate</p> <h1 class=\"svelte-1m2tzsd\">Acute Episode of Compulsive Desire-to-Travel-to-Japan Syndrome</h1></div> <div class=\"status svelte-1m2tzsd\"><span class=\"svelte-1m2tzsd\">STATUS</span> <strong class=\"svelte-1m2tzsd\"> </strong></div></header> <section class=\"grid svelte-1m2tzsd\"><div class=\"label svelte-1m2tzsd\">Patient Name</div> <div class=\"value svelte-1m2tzsd\"> </div> <div class=\"label svelte-1m2tzsd\">Date of Birth</div> <div class=\"value svelte-1m2tzsd\"> </div> <div class=\"label svelte-1m2tzsd\">Gender Identity</div> <div class=\"value svelte-1m2tzsd\"> </div> <div class=\"label svelte-1m2tzsd\">Address</div> <div class=\"value svelte-1m2tzsd\"> </div> <div class=\"label svelte-1m2tzsd\">Japan-Travel Urge Score</div> <div class=\"value svelte-1m2tzsd\"> </div> <div class=\"label svelte-1m2tzsd\">Certificate ID</div> <div class=\"value svelte-1m2tzsd\"> </div></section> <section class=\"diagnosis svelte-1m2tzsd\"><h2 class=\"svelte-1m2tzsd\">Clinical Notes</h2> <p class=\"svelte-1m2tzsd\"> </p> <p class=\"recommend svelte-1m2tzsd\"> </p></section> <footer class=\"bottom svelte-1m2tzsd\"><div class=\"meta svelte-1m2tzsd\"><p class=\"svelte-1m2tzsd\"> </p> <p class=\"svelte-1m2tzsd\"> </p></div> <div class=\"sign-wrap svelte-1m2tzsd\"><div class=\"seal svelte-1m2tzsd\">FOR FUN</div> <p class=\"doctor svelte-1m2tzsd\"> </p></div></footer></article>"), yr = {
	hash: "svelte-1m2tzsd",
	code: "jp-certificate-preview {display:block;width:100%;contain:layout paint style;}.sheet.svelte-1m2tzsd {box-sizing:border-box;width:min(100%, 940px);min-height:1120px;margin:0 auto;padding:40px;border:3px solid #4b2713;background:radial-gradient(circle at 5% 5%, rgba(255, 255, 255, 0.48), transparent 26%),\n      linear-gradient(145deg, #fff8e9 0%, #f8ecd6 38%, #f6e4c2 100%);color:#25130b;box-shadow:inset 0 0 0 1px rgba(62, 36, 21, 0.22);overflow-x:hidden;}.top.svelte-1m2tzsd {display:flex;justify-content:space-between;gap:16px;border-bottom:1px solid rgba(61, 34, 20, 0.38);padding-bottom:20px;}.kicker.svelte-1m2tzsd {margin:0;letter-spacing:0.12em;font-size:12px;text-transform:uppercase;color:rgba(50, 31, 20, 0.72);}h1.svelte-1m2tzsd {margin:8px 0 0;line-height:1.2;font-size:30px;}.status.svelte-1m2tzsd {min-width:150px;text-align:right;}.status.svelte-1m2tzsd span:where(.svelte-1m2tzsd) {display:block;font-size:12px;color:rgba(43, 28, 16, 0.7);}.status.svelte-1m2tzsd strong:where(.svelte-1m2tzsd) {display:inline-block;margin-top:8px;border:2px solid #ad0f22;color:#ad0f22;padding:8px 14px;font-size:18px;letter-spacing:0.08em;}.grid.svelte-1m2tzsd {margin-top:24px;display:grid;grid-template-columns:160px 1fr;border:1px solid rgba(63, 34, 20, 0.3);}.label.svelte-1m2tzsd,\n  .value.svelte-1m2tzsd {padding:12px 14px;border-bottom:1px solid rgba(63, 34, 20, 0.22);}.value.svelte-1m2tzsd,\n  .diagnosis.svelte-1m2tzsd p:where(.svelte-1m2tzsd),\n  .doctor.svelte-1m2tzsd,\n  .meta.svelte-1m2tzsd p:where(.svelte-1m2tzsd),\n  h1.svelte-1m2tzsd {overflow-x:hidden;text-wrap:wrap;overflow-wrap:anywhere;word-break:break-word;}.label.svelte-1m2tzsd {font-weight:700;border-right:1px solid rgba(63, 34, 20, 0.22);background:rgba(120, 80, 43, 0.1);}.grid.svelte-1m2tzsd > :where(.svelte-1m2tzsd):nth-last-child(-n + 2) {border-bottom:0;}.diagnosis.svelte-1m2tzsd {margin-top:26px;border:1px solid rgba(63, 34, 20, 0.3);padding:18px;}h2.svelte-1m2tzsd {margin:0;font-size:21px;}.diagnosis.svelte-1m2tzsd p:where(.svelte-1m2tzsd) {margin:14px 0 0;line-height:1.65;font-size:16px;}.recommend.svelte-1m2tzsd {font-weight:600;color:#8f0616;}.bottom.svelte-1m2tzsd {margin-top:38px;display:flex;align-items:flex-end;justify-content:space-between;gap:18px;}.meta.svelte-1m2tzsd p:where(.svelte-1m2tzsd) {margin:6px 0;font-size:14px;}.sign-wrap.svelte-1m2tzsd {text-align:right;}.seal.svelte-1m2tzsd {margin-left:auto;display:grid;place-items:center;width:92px;height:92px;border-radius:999px;border:4px double #c1121f;color:#c1121f;font-weight:700;letter-spacing:0.08em;transform:rotate(-12deg);background:rgba(255, 255, 255, 0.3);}.doctor.svelte-1m2tzsd {margin:14px 0 0;font-size:15px;font-weight:700;}\n\n  @media (max-width: 860px) {.sheet.svelte-1m2tzsd {min-height:auto;padding:24px;}h1.svelte-1m2tzsd {font-size:22px;}.top.svelte-1m2tzsd {flex-direction:column;}.status.svelte-1m2tzsd {text-align:left;}.grid.svelte-1m2tzsd {grid-template-columns:118px 1fr;}.bottom.svelte-1m2tzsd {align-items:flex-start;flex-direction:column;}\n  }\n\n  @media print {.sheet.svelte-1m2tzsd {width:194mm;min-height:273mm;margin:0;box-shadow:none;break-inside:avoid;}\n  }"
};
function br(e, t) {
	Le(t, !1), lr(e, yr);
	let n = /* @__PURE__ */ Nt(), r = /* @__PURE__ */ Nt(), i = /* @__PURE__ */ Nt(), a = /* @__PURE__ */ Nt(), o = $(t, "patient", 12, "Choe Gu-sung"), s = $(t, "birth", 12, "2070-10-29"), c = $(t, "sex", 12, "male"), l = $(t, "address", 12, "503, Hanasakigawa Heights, 27 Kasumi-ro, Byeolbit-gu, Seoul, Republic of Korea"), u = $(t, "doctor", 12, "Ameku Takao, M.D."), d = $(t, "hospital", 12, "Tenkai General Hospital"), f = $(t, "level", 12, "severe"), p = $(t, "score", 12, "85"), m = $(t, "note", 12, "Immediate attempts to book flights to Japan were observed when spring fare promotions appeared."), h = $(t, "issued", 12, "2026-04-19"), g = $(t, "serial", 12, "AJTDS-550e8400-e29b-41d4-a716-446655440000"), ee = {
		mild: "MILD",
		moderate: "MODERATE",
		severe: "SEVERE",
		critical: "CRITICAL"
	}, _ = {
		female: "Female",
		male: "Male",
		non_binary: "Non-binary",
		genderfluid: "Genderfluid",
		genderqueer: "Genderqueer",
		agender: "Agender",
		intersex: "Intersex",
		two_spirit: "Two-Spirit",
		questioning: "Questioning",
		prefer_not_to_say: "Prefer not to say",
		other: "Other"
	};
	cn(() => Hn(f()), () => {
		I(n, ee[f()] ?? f().toUpperCase());
	}), cn(() => Hn(c()), () => {
		I(r, _[c()] ?? "Prefer not to say");
	}), cn(() => Hn(p()), () => {
		I(i, Number(p()));
	}), cn(() => Z(i), () => {
		I(a, Z(i) >= 90 ? "Immediate passport lock and airport-access restriction advised." : Z(i) >= 70 ? "Minimize exposure to Japan travel content and monitor patient behavior." : "Periodic observation and comfort food intervention may reduce symptoms.");
	}), ln();
	var v = {
		get patient() {
			return o();
		},
		set patient(e) {
			o(e), N();
		},
		get birth() {
			return s();
		},
		set birth(e) {
			s(e), N();
		},
		get sex() {
			return c();
		},
		set sex(e) {
			c(e), N();
		},
		get address() {
			return l();
		},
		set address(e) {
			l(e), N();
		},
		get doctor() {
			return u();
		},
		set doctor(e) {
			u(e), N();
		},
		get hospital() {
			return d();
		},
		set hospital(e) {
			d(e), N();
		},
		get level() {
			return f();
		},
		set level(e) {
			f(e), N();
		},
		get score() {
			return p();
		},
		set score(e) {
			p(e), N();
		},
		get note() {
			return m();
		},
		set note(e) {
			m(e), N();
		},
		get issued() {
			return h();
		},
		set issued(e) {
			h(e), N();
		},
		get serial() {
			return g();
		},
		set serial(e) {
			g(e), N();
		}
	};
	ur();
	var te = vr(), y = L(te), b = R(L(y), 2), x = R(L(b), 2), ne = L(x, !0);
	E(x), E(b), E(y);
	var re = R(y, 2), ie = R(L(re), 2), ae = L(ie, !0);
	E(ie);
	var oe = R(ie, 4), se = L(oe, !0);
	E(oe);
	var ce = R(oe, 4), le = L(ce, !0);
	E(ce);
	var ue = R(ce, 4), de = L(ue, !0);
	E(ue);
	var fe = R(ue, 4), pe = L(fe);
	E(fe);
	var me = R(fe, 4), S = L(me, !0);
	E(me), E(re);
	var he = R(re, 2), ge = R(L(he), 2), _e = L(ge, !0);
	E(ge);
	var ve = R(ge, 2), ye = L(ve);
	E(ve), E(he);
	var be = R(he, 2), xe = L(be), Se = L(xe), Ce = L(Se);
	E(Se);
	var we = R(Se, 2), Te = L(we);
	E(we), E(xe);
	var Ee = R(xe, 2), De = R(L(Ee), 2), Oe = L(De);
	return E(De), E(Ee), E(be), E(te), fn(() => {
		Q(ne, Z(n)), Q(ae, o()), Q(se, s()), Q(le, Z(r)), Q(de, l()), Q(pe, `${Z(i) ?? ""} / 100`), Q(S, g()), Q(_e, m()), Q(ye, `Recommendation: ${Z(a) ?? ""}`), Q(Ce, `Issue Date: ${h() ?? ""}`), Q(Te, `Medical Institution: ${d() ?? ""}`), Q(Oe, `Attending Physician: ${u() ?? ""}`);
	}), er(e, te), Re(v);
}
customElements.define("jp-certificate-preview", _r(br, {
	patient: {},
	birth: {},
	sex: {},
	address: {},
	doctor: {},
	hospital: {},
	level: {},
	score: {},
	note: {},
	issued: {},
	serial: {}
}, [], [], { mode: "open" }));
//#endregion
