(function(E) {
    "object" === typeof module && "undefined" !== typeof module.exports ? module.exports = E : E(FusionCharts)
}
)(function(E) {
    E.register("module", ["private", "HTMLTableDataHandler", function() {
        var q = this
          , A = q.window
          , E = A.document
          , h = function(c) {
            var a, b, f = [];
            b = 0;
            for (a = c.length; b < a; b += 1)
                3 !== c[b].nodeType && f.push(c[b]);
            return f
        }
          , G = function(c) {
            var a = h(c.childNodes);
            if (a.length) {
                if ("TBODY" === a[0].nodeName)
                    return a[0];
                if ("THEAD" === a[0].nodeName && a[1] && "TBODY" === a[1].nodeName)
                    return a[1]
            }
            return c
        }
          , w = function(c) {
            return void 0 !== c.innerText ? c.innerText : c.textContent
        }
          , B = function(c) {
            var a, b, f, p, d, e, k = 1, g, l = {}, r = [];
            a = 0;
            for (f = c.length; a < f; a += 1)
                for (d = h(c[a].childNodes),
                k = 1,
                b = e = 0,
                p = d.length; b < p; b += 1) {
                    g = b + k + e - 1;
                    l[g] && a - l[g].rowNum < l[g].row && (e += l[g].col,
                    g += l[g].col);
                    1 < parseInt(d[b].getAttribute("rowspan"), 10) && (l[g] || (l[g] = {}),
                    l[g].rowNum = a,
                    l[g].row = parseInt(d[b].getAttribute("rowspan"), 10),
                    1 < parseInt(d[b].getAttribute("colspan"), 10) ? l[g].col = parseInt(d[b].getAttribute("colspan"), 10) : l[g].col = 1);
                    for (; r.length <= g; )
                        r.push({
                            childNodes: []
                        });
                    r[g].childNodes.push(d[b]);
                    1 < parseInt(d[b].getAttribute("colspan"), 10) && (k += parseInt(d[b].getAttribute("colspan"), 10) - 1)
                }
            return r
        }
          , F = function(c, a) {
            for (var b = c.length; b; )
                if (--b,
                c[b] === a)
                    return !0;
            return !1
        }
          , x = 0
          , v = function(c, a, b, f) {
            var p, d, e, k, g = null, l = [], r = [], n = 0, m, n = {}, q = 0, u = 0;
            if ("undefined" === typeof b) {
                k = h(c[0].childNodes);
                e = 0;
                for (p = k.length; e < p; e += 1)
                    if (c = e + q,
                    l[c] = "__fcBLANK__" + (c + 1),
                    m = parseInt(k[e].colSpan, 10),
                    m = 1 < m ? m : parseInt(k[e].rowSpan, 10),
                    1 < m) {
                        for (b = 1; b < m; b += 1)
                            l[c + b] = "__fcBLANK__" + (c + b + 1);
                        q += m - 1
                    }
                d = 0;
                b = e + q;
                for (p = a.length; d < p; d += 1)
                    0 < a[d] ? delete l[a[d] - 1] : delete l[b + a[d]];
                return {
                    index: -1,
                    labelObj: l
                }
            }
            if (0 === b) {
                d = 0;
                for (b = c.length; d < b; d += 1) {
                    k = h(c[d].childNodes);
                    n = r[d] = 0;
                    if (f && f._extractByHeaderTag)
                        for (e = 0,
                        p = k.length; e < p; e += 1) {
                            if ("th" == k[e].nodeName.toLowerCase())
                                return a = v(c, a, d + 1),
                                delete a.labelObj[f._rowLabelIndex],
                                a
                        }
                    else
                        for (e = 0,
                        p = k.length; e < p; e += 1)
                            if (!F(a, e + 1) && !F(a, e - p))
                                if (m = w(k[e]),
                                "" === m.replace(/^\s*/, "").replace(/\s*$/, ""))
                                    r[d] += 1;
                                else if (parseFloat(m) != m && (n += 1,
                                1 < n))
                                    return v(c, a, d + 1);
                    0 < d && (r[d - 1] > r[d] ? g = d - 1 : r[d - 1] < r[d] && (g = d))
                }
                return null !== g ? v(c, a, g + 1) : v(c, a)
            }
            0 > b ? b += c.length : 0 < b && --b;
            k = h(c[b].childNodes);
            f = void 0 !== c[0].nodeType ? !0 : !1;
            e = 0;
            for (p = k.length; e < p; e += 1) {
                l = 0;
                f ? "1" !== k[e].colSpan && (l = parseInt(k[e].colSpan, 10)) : "1" !== k[e].rowSpan && (l = parseInt(k[e].rowSpan, 10));
                l = 1 < l ? l : 0;
                m = w(k[e]);
                if ("" !== m.replace(/^\s*/, "").replace(/\s*$/, ""))
                    n[e + u] = m;
                else {
                    a: {
                        r = B(c);
                        d = b;
                        g = m = void 0;
                        r = h(r[e].childNodes);
                        q = void 0;
                        m = 0;
                        for (g = r.length; m < g; m += 1)
                            if (m !== d && (q = w(r[m]),
                            parseFloat(q) === q)) {
                                d = !0;
                                break a
                            }
                        d = !1
                    }
                    d && (n[e + u] = "__fcBLANK__" + x,
                    x += 1)
                }
                if (1 < l) {
                    m = n[e + u];
                    for (d = 1; d < l; d += 1)
                        n[e + u + d] = m + " (" + d + ")";
                    u += l - 1
                }
            }
            e = p + u;
            d = 0;
            for (p = a.length; d < p; d += 1)
                0 < a[d] ? delete n[a[d] - 1] : delete n[e + a[d]];
            return {
                labelObj: n,
                index: b
            }
        };
        q.addDataHandler("HTMLTable", {
            encode: function(c, a, b) {
                var f, p, d;
                a = {
                    chartAttributes: {},
                    major: "row",
                    useLabels: !0,
                    useLegend: !0,
                    labelSource: 0,
                    legendSource: 0,
                    ignoreCols: [],
                    ignoreRows: [],
                    showLabels: !0,
                    showLegend: !0,
                    seriesColors: [],
                    convertBlankTo: "0",
                    hideTable: !1,
                    chartType: a.chartType && a.chartType(),
                    labels: [],
                    legend: [],
                    data: []
                };
                var e, k, g, l = {}, r = {};
                q.extend(a, b);
                "string" === typeof c && (c = E.getElementById(c));
                "undefined" !== typeof A.jQuery && c instanceof A.jQuery && (c = c.get(0));
                if (c) {
                    a.hideTable && (c.style.display = "none");
                    var n, m, x, u;
                    b = {};
                    var C, y, F, D;
                    p = {};
                    d = {};
                    g = h(c.childNodes);
                    var z = h(g.length && "THEAD" === g[0].nodeName && g[1] && "TBODY" === g[1].nodeName ? g[0].childNodes : []).concat(h(G(c).childNodes))
                      , N = z.length
                      , J = 0
                      , K = 0
                      , I = 0
                      , t = 0
                      , L = !1
                      , M = a.chartType;
                    -1 !== "column2d column3d pie3d pie2d line bar2d area2d doughnut2d doughnut3d pareto2d pareto3d".split(" ").indexOf(M) && (L = !0);
                    a.rowLabelSource = parseInt(a.labelSource, 10);
                    a.colLabelSource = parseInt(a.legendSource, 10);
                    "column" === a.major ? (c = a.useLabels ? v(z, a.ignoreCols, a.rowLabelSource) : v(z, a.ignoreCols),
                    g = a.useLegend ? v(B(z), a.ignoreRows, a.colLabelSource) : v(B(z), a.ignoreRows)) : (m = v(B(z), a.ignoreRows, a.rowLabelSource),
                    c = a.useLabels ? m : v(B(z), a.ignoreRows),
                    a._rowLabelIndex = m.index,
                    a._extractByHeaderTag = !0,
                    g = a.useLegend ? v(z, a.ignoreCols, a.colLabelSource, a) : v(z, a.ignoreCols),
                    delete a._extractByHeaderTag,
                    m = c,
                    c = g,
                    g = m);
                    delete c.labelObj[g.index];
                    delete g.labelObj[c.index];
                    if ("row" === a.major)
                        for (n in g.labelObj)
                            b[n] = {};
                    else
                        for (n in c.labelObj)
                            b[n] = {};
                    for (n = 0; n < N; n += 1)
                        if (c.index !== n && void 0 !== g.labelObj[n]) {
                            J += 1;
                            x = h(z[n].childNodes);
                            p[n] = 0;
                            d[n] = {};
                            m = 0;
                            for (F = x.length; m < F; m += 1) {
                                u = x[m];
                                y = parseInt(u.getAttribute("colspan"), 10);
                                D = parseInt(u.getAttribute("rowspan"), 10);
                                for (C = m + p[n]; t < n; ) {
                                    if (d[t])
                                        for (f in d[t]) {
                                            if (f > C)
                                                break;
                                            n - t <= d[t][f].row && (C += d[t][f].col)
                                        }
                                    t += 1
                                }
                                1 < y && (p[n] += y - 1);
                                1 < D && (d[n][C] = 1 < y ? {
                                    row: D - 1,
                                    col: y
                                } : {
                                    row: D - 1,
                                    col: 1
                                });
                                if (g.index !== C && void 0 !== c.labelObj[C]) {
                                    I += 1;
                                    u = w(u);
                                    if ("" === u.replace(/^\s*/, "").replace(/\s*$/, ""))
                                        if (a.convertBlankTo)
                                            u = a.convertBlankTo;
                                        else
                                            continue;
                                    y = 1 < y ? y : 1;
                                    D = 1 < D ? D : 1;
                                    if ("row" === a.major)
                                        for (t = 0; t < y; ) {
                                            for (f = 0; f < D; )
                                                b[n + f][C + t] = parseFloat(u),
                                                f += 1;
                                            t += 1
                                        }
                                    else
                                        for (t = 0; t < y; ) {
                                            for (f = 0; f < D; )
                                                b[C + t][n + f] = parseFloat(u),
                                                f += 1;
                                            t += 1
                                        }
                                }
                            }
                            I > K && (K = I)
                        }
                    f = b;
                    b = M ? L ? "single" : "multi" : 1 < J && 1 < K ? "multi" : "single";
                    p = g;
                    d = c
                } else
                    f = null,
                    d = p = b = void 0;
                "row" !== a.major ? c = d : (c = p,
                p = d);
                l.chart = q.extend({}, a.chartAttributes);
                if ("multi" === b) {
                    l.categories = [{
                        category: []
                    }];
                    l.dataset = [];
                    d = l.categories[0].category;
                    g = l.dataset;
                    b = 0;
                    for (e in f)
                        for (k in !0 === a.showLabels ? d.push(q.extend({
                            label: -1 != c.labelObj[e].indexOf("__fcBLANK__") ? "" : c.labelObj[e]
                        }, a.labels[b])) : d.push({
                            label: ""
                        }),
                        b += 1,
                        f[e])
                            "undefined" === typeof r[k] && (r[k] = []),
                            r[k].push({
                                value: f[e][k]
                            });
                    b = 0;
                    for (e in r)
                        !0 === a.showLegend ? g.push(q.extend({
                            seriesname: -1 !== p.labelObj[e].indexOf("__fcBLANK__") ? "" : p.labelObj[e],
                            data: r[e]
                        }, a.legend[b])) : g.push({
                            seriesname: "",
                            data: r[e]
                        }),
                        b += 1
                } else if ("single" === b)
                    if (l.data = [],
                    g = l.data,
                    b = 0,
                    a.showLabels)
                        for (e in f)
                            for (k in f[e])
                                g.push(q.extend({
                                    label: -1 !== c.labelObj[e].indexOf("__fcBLANK__") ? "" : c.labelObj[e],
                                    value: f[e][k]
                                }, a.labels[b])),
                                b += 1;
                    else
                        for (e in f)
                            for (k in f[e])
                                g.push({
                                    value: f[e][k]
                                });
                return {
                    data: q.core.transcodeData(l, "JSON", "XML"),
                    error: void 0
                }
            },
            decode: function(c, a) {
                q.raiseError(a, "07101734", "run", "::HTMLTableDataHandler.decode()", "FusionCharts HTMLTable data-handler only supports decoding of data.");
                throw Error("FeatureNotSupportedException()");
            },
            transportable: !1
        })
    }
    ]);
    E.register("module", ["private", "extensions.jQueryPlugin", function() {
        var q = this, A = q.window, H = A.document, h = A.jQuery, G, w, B, F = A.Math.min, x = q.hcLib.isArray, v = {
            feed: "feedData",
            setdata: "setData",
            setdataforid: "setDataForId",
            getdata: "getData",
            getdataforid: "getDataForId",
            clear: "clearChart",
            stop: "stopUpdate",
            start: "restartUpdate"
        }, c = {
            feedData: function(a) {
                return "string" === typeof a ? [a] : "object" === typeof a && a.stream ? [a.stream] : !1
            },
            getData: function(a) {
                return isNaN(a) ? "object" === typeof a && a.index ? [a.index] : [] : [a]
            },
            getDataForId: function(a) {
                return "string" === typeof a ? [a] : "object" === typeof a && a.id ? [a.id] : []
            },
            setData: function(a, b, f) {
                var c = [];
                "object" !== typeof a ? c = [a, b, f] : (a.value && c.push(a.value),
                a.label && c.push(a.label));
                return c
            },
            setDataForId: function(a, b, f) {
                var c = [];
                "string" === typeof a || "string" === typeof b || "string" === typeof f ? c = [a, b, f] : "object" === typeof a && (a.value && c.push(a.value),
                a.label && c.push(a.label));
                return c
            },
            clearChart: function(a) {
                return [a]
            },
            stopUpdate: function(a) {
                return [a]
            },
            restartUpdate: function(a) {
                return [a]
            }
        };
        h.FusionCharts = q.core;
        G = function(a, b) {
            var f, c, d, e;
            c = x(b) || b instanceof h ? F(a.length, b.length) : a.length;
            for (f = 0; f < c; f += 1)
                d = x(b) || b instanceof h ? b[f] : b,
                a[f].parentNode ? q.core.render(h.extend({}, d, {
                    renderAt: a[f]
                })) : (d = new E(h.extend({}, d, {
                    renderAt: a[f]
                })),
                h.FusionCharts.delayedRender || (h.FusionCharts.delayedRender = {}),
                h.FusionCharts.delayedRender[d.id] = a[f],
                e = H.createElement("script"),
                e.setAttribute("type", "text/javascript"),
                /msie/i.test(A.navigator.userAgent) && !A.opera ? e.text = "FusionCharts.items['" + d.id + "'].render();" : e.appendChild(H.createTextNode("FusionCharts.items['" + d.id + "'].render()")),
                a[f].appendChild(e));
            return a
        }
        ;
        q.addEventListener("*", function(a, b) {
            var f;
            h.extend(a, h.Event("fusioncharts" + a.eventType));
            a.sender && a.sender.options ? (f = a.sender.options.containerElement || a.sender.options.containerElementId,
            "object" === typeof f ? h(f).trigger(a, b) : h("#" + f).length ? h("#" + f).trigger(a, b) : h(H).trigger(a, b)) : h(H).trigger(a, b)
        });
        w = function(a) {
            return a.filter(":FusionCharts").add(a.find(":FusionCharts"))
        }
        ;
        B = function(a, b, f) {
            "object" === typeof b && a.each(function() {
                this.configureLink(b, f)
            })
        }
        ;
        h.fn.insertFusionCharts = function(a) {
            return G(this, a)
        }
        ;
        h.fn.appendFusionCharts = function(a) {
            a.insertMode = "append";
            return G(this, a)
        }
        ;
        h.fn.prependFusionCharts = function(a) {
            a.insertMode = "prepend";
            return G(this, a)
        }
        ;
        h.fn.attrFusionCharts = function(a, b) {
            var f = []
              , c = w(this);
            if (void 0 !== b)
                return c.each(function() {
                    this.FusionCharts.setChartAttribute(a, b)
                }),
                this;
            if ("object" === typeof a)
                return c.each(function() {
                    this.FusionCharts.setChartAttribute(a)
                }),
                this;
            c.each(function() {
                f.push(this.FusionCharts.getChartAttribute(a))
            });
            return f
        }
        ;
        h.fn.updateFusionCharts = function(a) {
            var b = {}, f = w(this), c = [["swfUrl", !1], ["type", !1], ["height", !1], ["width", !1], ["containerBackgroundColor", !0], ["containerBackgroundAlpha", !0], ["dataFormat", !1], ["dataSource", !1]], d, e, k, g, l, h;
            d = 0;
            for (e = c.length; d < e; d += 1)
                l = c[d][0],
                b.type = b.type || b.swfUrl,
                a[l] && (c[d][1] && (g = !0),
                b[l] = a[l]);
            f.each(function() {
                k = this.FusionCharts;
                if (g)
                    h = k.clone(b),
                    h.render();
                else {
                    if (void 0 !== b.dataSource || void 0 !== b.dataFormat)
                        void 0 === b.dataSource ? k.setChartData(k.args.dataSource, b.dataFormat) : void 0 === b.dataFormat ? k.setChartData(b.dataSource, k.args.dataFormat) : k.setChartData(b.dataSource, b.dataFormat);
                    void 0 === b.width && void 0 === b.height || k.resizeTo(b.width, b.height);
                    b.type && k.chartType(b.type)
                }
            });
            return this
        }
        ;
        h.fn.cloneFusionCharts = function(a, b) {
            var c, p;
            "function" !== typeof a && "function" === typeof b && (p = a,
            a = b,
            b = p);
            c = [];
            w(this).each(function() {
                c.push(this.FusionCharts.clone(b, {}, !0))
            });
            a.call(h(c), c);
            return this
        }
        ;
        h.fn.disposeFusionCharts = function() {
            w(this).each(function() {
                this.FusionCharts.dispose();
                delete this.FusionCharts;
                0 === this._fcDrillDownLevel && delete this._fcDrillDownLevel
            });
            return this
        }
        ;
        h.fn.convertToFusionCharts = function(a, b) {
            var c = [];
            "undefined" === typeof a.dataConfiguration && (a.dataConfiguration = {});
            h.extend(!0, a.dataConfiguration, b);
            a.dataSource || (a.dataSource = this.get(0));
            a.renderAt ? "string" === typeof a.renderAt ? c.push(h("#" + a.renderAt).insertFusionCharts(a).get(0)) : "object" === typeof a.renderAt && c.push(h(a.renderAt).insertFusionCharts(a).get(0)) : this.each(function() {
                c.push(h("<div></div>").insertBefore(this).insertFusionCharts(a).get(0))
            });
            return h(c)
        }
        ;
        h.fn.drillDownFusionChartsTo = function() {
            var a = w(this), b, c, h, d, e;
            "undefined" === typeof this._fcDrillDownLevel && (this._fcDrillDownLevel = 0);
            b = 0;
            for (c = arguments.length; b < c; b += 1)
                if (e = arguments[b],
                x(e))
                    for (h = 0,
                    d = e.length; h < d; h += 1)
                        B(a, e[h], this._fcDrillDownLevel),
                        this._fcDrillDownLevel += 1;
                else
                    B(a, e, this._fcDrillDownLevel),
                    this._fcDrillDownLevel += 1;
            return this
        }
        ;
        h.fn.streamFusionChartsData = function(a, b, f, h) {
            var d = w(this), e = [], k, g, l;
            g = v[a && a.toLowerCase()];
            if (void 0 === g)
                if (1 === arguments.length)
                    l = [a],
                    g = v.feed;
                else
                    return this;
            else
                l = 1 === arguments.length ? [] : c[g](b, f, h);
            if ("getData" === g || "getDataForId" === g)
                return d.each(function() {
                    k = this.FusionCharts;
                    "function" === typeof k[g] && e.push(k[g].apply(k, l))
                }),
                e;
            d.each(function() {
                k = this.FusionCharts;
                "function" === typeof k[g] && k[g].apply(k, l)
            });
            return this
        }
        ;
        h.extend(h.expr[":"], {
            FusionCharts: function(a) {
                return a.FusionCharts instanceof q.core
            }
        })
    }
    ])
});
