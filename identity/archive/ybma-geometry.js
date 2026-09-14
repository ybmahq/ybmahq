/* YBMA — Cut / Turned wordmarks + U3 symbol, parametric geometry.  Sessions 23–24 · 13 Sep 2026.
   Units: cap height = 100, baseline y = 100, y grows downward.
   Rebuilt from the recorded spec (S19–S22): cap 100 · stem 15 · Y angle dx/dy 0.5625 ·
   tail sheared on the Y angle · U3 on a 120 square (joint 11 · turn 86).
   Session 23 locks: gap 15 (one stroke) · overrun 75 (¾ cap) · U3 entry 18 (was 12).
   Construction geometry — not optically corrected type. */
(function (global) {
  const YB = {
    cap: 100, stem: 15, flareW: 21, flareL: 18, tan: 0.5625,
    def: { gap: 15, overrun: 75, Jy: 50, fit: { yb: 13, bm: 21, ma: 15 } },
    sym: { S: 120, entry: 18, turn: 86, joint: 11 },
      };
  const f = n => (Math.round(n * 100) / 100).toString();

  // A straight stroke p1→p2 of width w. Ends may flare (carved terminal). e1/e2 extend an end past
  // a clip line so the clip makes a flat cut; the flare is over-driven so the width AT the clip
  // line equals flareW.
  function stroke(p1, p2, w, o = {}) {
    let dx = p2[0] - p1[0], dy = p2[1] - p1[1];
    const len0 = Math.hypot(dx, dy); dx /= len0; dy /= len0;
    const nx = -dy, ny = dx;
    const e1 = o.e1 || 0, e2 = o.e2 || 0;
    const P = [p1[0] - dx * e1, p1[1] - dy * e1];
    const len = len0 + e1 + e2;
    const hw = w / 2, hf = YB.flareW / 2;
    const L1 = o.f1 ? YB.flareL + e1 : 0, L2 = o.f2 ? YB.flareL + e2 : 0;
    const over = (e, L) => { if (!e) return hf; const s = e / L; return (hf - s * (2 - s) * hw) / ((1 - s) * (1 - s)); };
    const h1 = over(e1, L1), h2 = over(e2, L2);
    const W = (u, v) => [P[0] + dx * u + nx * v, P[1] + dy * u + ny * v];
    let d = '';
    const M = (u, v) => { const p = W(u, v); d += `M${f(p[0])},${f(p[1])}`; };
    const L = (u, v) => { const p = W(u, v); d += `L${f(p[0])},${f(p[1])}`; };
    const Q = (cu, cv, u, v) => { const c = W(cu, cv), p = W(u, v); d += `Q${f(c[0])},${f(c[1])} ${f(p[0])},${f(p[1])}`; };
    if (o.f1) { M(0, h1); Q(L1 * 0.5, hw, L1, hw); } else M(0, hw);
    if (o.f2) { L(len - L2, hw); Q(len - L2 * 0.5, hw, len, h2); L(len, -h2); Q(len - L2 * 0.5, -hw, len - L2, -hw); }
    else { L(len, hw); L(len, -hw); }
    if (o.f1) { L(L1, -hw); Q(L1 * 0.5, -hw, 0, -h1); } else L(0, -hw);
    return d + 'Z';
  }
  const rect = (x, y, w, h) => `M${f(x)},${f(y)}h${f(w)}v${f(h)}h${f(-w)}Z`;

  function letterY(o) {
    const t = YB.tan, Jy = o.Jy, top = Jy * t, hw = YB.stem / 2;
    const cx = top + 12;
    const arms = [
      stroke([cx, Jy], [cx - top, 0], YB.stem, { f2: true, e2: 12 }),
      stroke([cx, Jy], [cx + top, 0], YB.stem, { f2: true, e2: 12 }),
    ];
    const yt = 100 + o.gap, yb = yt + YB.stem;
    const stemTail = (xe) => `M${f(cx - hw)},${f(Jy - 10)}L${f(cx + hw)},${f(Jy - 10)}L${f(cx + hw)},${f(yt)}L${f(xe)},${f(yt)}L${f(xe - YB.stem * t)},${f(yb)}L${f(cx - hw)},${f(yb)}Z`;
    return { clipped: arms, stemTail, cx, x0: 0, x1: cx * 2, capL: 0, capR: cx * 2, baseL: cx - hw, baseR: cx + hw };
  }
  function letterB() {
    const s = YB.stem, hw = s / 2;
    const stem = stroke([hw, 0], [hw, 100], s, { f1: true, f2: true });
    const bowls =
      `M${hw},0L36,0C52,0 60,9 60,23C60,37 52,46 36,46L${hw},46Z` +
      `M22,14L36,14C42,14 45.5,17 45.5,23C45.5,29 42,32 36,32L22,32Z` +
      `M${hw},46L39,46C57,46 65,55 65,73C65,91 57,100 39,100L${hw},100Z` +
      `M22,60L39,60C46.5,60 50.5,64 50.5,73C50.5,82 46.5,86 39,86L22,86Z`;
    return { clipped: [stem], evenodd: [bowls], x0: -3, x1: 65, capL: -3, capR: 60, baseL: -3, baseR: 65 };
  }
  function letterM() {
    const s = YB.stem, hw = s / 2, W = 90, mid = W / 2;
    const phi = Math.atan(29.4 / 100), off = hw / Math.cos(phi);
    const stems = [stroke([hw, 0], [hw, 100], s, { f1: true, f2: true }), stroke([W - hw, 0], [W - hw, 100], s, { f1: true, f2: true })];
    const diags = [stroke([hw, 0], [mid - off, 100], s, { e1: 12, e2: 14 }), stroke([W - hw, 0], [mid + off, 100], s, { e1: 12, e2: 14 })];
    return { clipped: [...stems, ...diags], x0: -3, x1: W + 3, capL: -3, capR: W + 3, baseL: -3, baseR: W + 3 };
  }
  function letterA() {
    const s = YB.stem, hw = s / 2, half = 42, cx = half;
    const psi = Math.atan(half / 100), off = hw / Math.cos(psi);
    const legs = [
      stroke([cx + off, 0], [cx - half + off, 100], s, { e1: 14, f2: true, e2: 12 }),
      stroke([cx - off, 0], [cx + half - off, 100], s, { e1: 14, f2: true, e2: 12 }),
    ];
    return { clipped: [...legs, rect(cx - 22, 62, 44, 14)], x0: -6, x1: 2 * half + 6, capL: cx - 2, capR: cx + 2, baseL: -6, baseR: 2 * half + 6 };
  }

  /* Wordmark layout in absolute coordinates. opts: gap · overrun (past the A's right extent, measured
     at the leading point) · Jy · fit{yb,bm,ma} · afterText (extra run before the overrun, for division lockups) */
  function wordmark(opts = {}) {
    const o = Object.assign({}, YB.def, opts, { fit: Object.assign({}, YB.def.fit, opts.fit || {}) });
    const Y = letterY(o), B = letterB(), M = letterM(), A = letterA();
    const xY = 0;
    const xB = xY + Y.capR + o.fit.yb - B.capL;
    const xM = xB + B.baseR + o.fit.bm - M.baseL;
    const xA = xM + M.baseR + o.fit.ma - A.baseL;
    const right = xA + A.x1;
    const tailEnd = right + (o.afterText || 0) + o.overrun;
    const letters = [
      { name: 'Y', x: xY, clipped: Y.clipped, free: [Y.stemTail(tailEnd - xY)] },
      { name: 'B', x: xB, clipped: B.clipped, evenodd: B.evenodd },
      { name: 'M', x: xM, clipped: M.clipped },
      { name: 'A', x: xA, clipped: A.clipped },
    ];
    return {
      letters, width: tailEnd, height: 100 + o.gap + YB.stem, opts: o,
      stemX: xY + Y.cx, tailTop: 100 + o.gap, tailBottom: 100 + o.gap + YB.stem, tailEnd, wordRight: right,
      letterBounds: [[xY + Y.x0, xY + Y.x1], [xB + B.x0, xB + B.x1], [xM + M.x0, xM + M.x1], [xA + A.x0, xA + A.x1]],
    };
  }
  /* ================= TURNED — the Session 20 engine, verbatim =================
     Ported from the Session 20 artifact ("Seven ways YBMA could look like itself"), config TURN,
     unchanged. Cap 100, baseline y=100. Plain monoline; the B is elliptical; the A has a flat apex of
     exactly one stem width, which is the Y's stem — the "turn" is a silhouette relationship, not a
     literal rotation. Session 24 (revised, 14 Sep 2026) at founder instruction: match this exactly. */
  const S20 = (function () {
    function pts(a){return 'M'+a.map(p=>p[0].toFixed(2)+' '+p[1].toFixed(2)).join('L')+'Z';}
    function LY(c){ const w=c.wY,s=c.s,jy=c.jy,f=c.fl||0,fh=c.fh||16; const fb=(c.flBot!==undefined)?c.flBot:f;
      const tan=(w/2)/jy, HT=s*Math.sqrt(1+tan*tan); const yj=(w/2-s/2)/tan, yin=(w/2-HT)/tan; const xm=w/2;
      return pts([[-f,0],[HT+f,0],[HT+tan*fh,fh],[xm,yin],[w-HT-tan*fh,fh],[w-HT-f,0],[w+f,0],[w-tan*fh,fh],[xm+s/2,yj],[xm+s/2,100-fh],[xm+s/2+fb,100],[xm-s/2-fb,100],[xm-s/2,100-fh],[xm-s/2,yj],[tan*fh,fh]]); }
    function LM(c){ const w=c.wM,s=c.s,vy=c.mv,f=c.fl||0,fh=c.fh||16; const tan=(w/2)/vy, HT=s*Math.sqrt(1+tan*tan); const yin=(w/2-HT)/tan, yp=s/tan;
      return pts([[-f,0],[HT,0],[w/2,yin],[w-HT,0],[w+f,0],[w,fh],[w,100-fh],[w+f,100],[w-s-f,100],[w-s,100-fh],[w-s,yp],[w/2,vy],[s,yp],[s,100-fh],[s+f,100],[-f,100],[0,100-fh],[0,fh]]); }
    function LA(c){ const w=c.wA,s=c.s,af=c.af,cb=c.cb,f=c.fl||0,fh=c.fh||16; const tan=((w-af)/2)/100, HT=s*Math.sqrt(1+tan*tan);
      let yc=100-(w/2-HT)/tan; if(yc<3) yc=3; const xl=HT+tan*(100-cb), xl2=HT+tan*(100-cb-s);
      const outer=pts([[(w-af)/2,0],[(w+af)/2,0],[w-tan*fh,100-fh],[w+f,100],[w-HT-f,100],[w-HT-tan*fh,100-fh],[w/2,yc],[HT+tan*fh,100-fh],[HT+f,100],[-f,100],[tan*fh,100-fh]]);
      const bar=pts([[xl,cb],[w-xl,cb],[w-xl2,cb+s],[xl2,cb+s]]); return outer+' '+bar; }
    function LB(c){ const w=c.wB,s=c.s,ym=c.ym,f=c.fl||0,fh=c.fh||16; const xu=c.xu!==undefined?c.xu:w*0.60, xl=c.xl!==undefined?c.xl:w*0.57;
      const wi=c.waist!==undefined?c.waist:s*1.05; const ru=w-xu, rl=w-xl; const cu1=(ym-wi/2)-s, cl1=(100-ym-wi/2)-s;
      const outer=`M${-f} 0H${xu}A${ru} ${ym/2} 0 0 1 ${xu} ${ym}H${xl}A${rl} ${(100-ym)/2} 0 0 1 ${xl} 100H${-f}V${100-fh}H0V${fh}H${-f}Z`;
      const cup=`M${s} ${s}H${xu}A${ru-s} ${cu1/2} 0 0 1 ${xu} ${s+cu1}H${s}Z`;
      const clo=`M${s} ${ym+wi/2}H${xl}A${rl-s} ${cl1/2} 0 0 1 ${xl} ${ym+wi/2+cl1}H${s}Z`; return outer+' '+cup+' '+clo; }
    const TURN={s:17,wY:74,jy:56,wB:65,ym:48,wM:88,mv:90,wA:74,af:17,cb:66,fl:0,tr:10,xu:39,xl:37,waist:17};
    return { LY, LM, LA, LB, TURN };
  })();
  YB.TURN = S20.TURN;
  function wordmarkTurned(opts = {}) {
    const c = Object.assign({}, S20.TURN, opts);
    const L = [S20.LY(c), S20.LB(c), S20.LM(c), S20.LA(c)], W = [c.wY, c.wB, c.wM, c.wA], names = ['Y', 'B', 'M', 'A'];
    let x = 0; const letters = [], letterBounds = [];
    for (let i = 0; i < 4; i++) { letters.push({ name: names[i], x, raw: L[i] }); letterBounds.push([x, x + W[i]]); x += W[i] + c.tr; }
    const width = x - c.tr;
    return { letters, width, height: 100, opts: c, wordRight: width, yCx: c.wY / 2, aCx: letterBounds[3][0] + c.wA / 2, turned: true, letterBounds };
  }
  let uid = 0;
  function wordmarkSVG(wm, o = {}) {
    const id = 'wc' + (++uid);
    const fill = o.fill || '#000';
    let s = `<defs><clipPath id="${id}"><rect x="-50" y="0" width="${wm.width + 200}" height="100"/></clipPath></defs>`;
    s += `<g fill="${fill}" class="${o.cls || ''}">`;
    for (const L of wm.letters) {
      if (L.raw) { s += `<g class="ltr ltr-${L.name}" transform="translate(${f(L.x)},0)"><path fill-rule="evenodd" d="${L.raw}"/></g>`; continue; }
      s += `<g class="ltr ltr-${L.name}" transform="translate(${f(L.x)},0)"><g clip-path="url(#${id})">`;
      if (L.rot) s += `<g transform="rotate(180 ${f(L.rot[0])} ${f(L.rot[1])})">`;
      for (const d of L.clipped) s += `<path d="${d}"/>`;
      for (const d of (L.evenodd || [])) s += `<path d="${d} " fill-rule="evenodd"/>`;
      if (L.rot) s += `</g>`;
      for (const d of (L.extra || [])) s += `<path d="${d}"/>`;
      s += `</g>`;
      if (L.free && o.tail !== false) s += `<path class="tail" d="${L.free[0]}"/>`;
      if (L.free && o.tail === false) s += `<g clip-path="url(#${id})"><path d="${L.free[0]}"/></g>`;
      s += `</g>`;
    }
    return s + `</g>`;
  }

  /* U3 on an S-square. entry: x where the joint's lower edge enters the top edge; turn: y of the upper
     stone's bottom edge; joint: perpendicular width. The lower-right corner is sheared on the Y angle
     across the full band — exactly the wordmark's tail terminal. */
  function symbol(opts = {}) {
    const p = Object.assign({}, YB.sym, opts);
    const t = YB.tan, cos = 1 / Math.sqrt(1 + t * t);
    const S = p.S, jh = p.joint / cos;
    const xA = y => p.entry + t * y, xB = y => p.entry + jh + t * y;
    const bandTop = p.turn + p.joint, bandH = S - bandTop, shearX = bandH * t;
    const upper = `M${f(xB(0))},0L${S},0L${S},${f(p.turn)}L${f(xB(p.turn))},${f(p.turn)}Z`;
    const lower = `M0,0L${f(p.entry)},0L${f(xA(bandTop))},${f(bandTop)}L${S},${f(bandTop)}L${f(S - shearX)},${S}L0,${S}Z`;
    return { upper, lower, S, p, jh, bandTop, bandH, shearX, xA, xB };
  }
  function symbolSVG(sym, o = {}) {
    return `<g fill="${o.fill || '#000'}" class="${o.cls || ''}"><path class="upper" d="${sym.upper}"/><path class="lower" d="${sym.lower}"/></g>`;
  }
  global.YB = Object.assign(YB, { stroke, wordmark, wordmarkTurned, wordmarkSVG, symbol, symbolSVG });
})(typeof window !== 'undefined' ? window : globalThis);
