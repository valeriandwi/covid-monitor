(this["webpackJsonpcovid-monitor"]=this["webpackJsonpcovid-monitor"]||[]).push([[0],{27:function(e,a,t){e.exports=t(58)},32:function(e,a,t){},33:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},34:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(17),i=t.n(r),s=(t(32),t(25)),c=(t(33),t(34),t(18)),l=t.n(c),u=t(19),f=t.n(u),m=t(20),d=t.n(m),p=t(70);var h=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){f.a.get("https://indonesia-covid-19.mathdro.id/api/harian").then((function(e){r(e.data.data.filter((function(e){return null!==e.jumlahKasusKumulatif})))})).catch((function(e){return alert(e.response.data)}))}),[]);var i={chart:{type:"area",stacked:!1,height:350,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"}},dataLabels:{enabled:!1},markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},yaxis:{title:{text:"Jumlah Kasus Baru",style:{color:"#fff"}},labels:{show:!0,style:{colors:"#fff"}},axisTicks:{color:"#fff"}},xaxis:{type:"datetime",categories:t.map((function(e){return e.tanggal})),labels:{formatter:function(e,a){return d()(new Date(e)).format("DD MMM")},style:{colors:"#fff"}}}},c=[{name:"Jumlah Kasus Baru",data:t.map((function(e){return e.jumlahKasusBaruperHari}))}];return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",null,o.a.createElement(p.a,{variant:"h5",style:{color:"#fff"}},"Perkembangan Kasus Baru COVID-19"),o.a.createElement(l.a,{options:i,series:c,type:"area",width:"800px"}),o.a.createElement(p.a,{variant:"body2",style:{color:"#fff",marginTop:"20px"}},"\xa9 VDP"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.a6c41351.chunk.js.map