(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(11),r=c.n(i),s=(c(17),c(6)),j=(c(18),c(25)),o=c(26),h=c(27),u=c(4),l=function(e){var t=e.city,c=e.setCity,a=e.fetchCityWeather,i=(e.click,e.setClick),r=n.a.useState(""),l=Object(s.a)(r,2),d=l[0],p=l[1];return Object(u.jsx)(j.a,{children:Object(u.jsxs)(o.a,{children:[Object(u.jsxs)(o.a.Group,{controlId:"formBasicEmail",children:[Object(u.jsx)(o.a.Label,{children:"City"}),Object(u.jsx)(o.a.Control,{value:t,type:"text",placeholder:"Enter city",onChange:function(e){c(e.target.value)}}),Object(u.jsx)("p",{className:"text-danger",children:d})]}),Object(u.jsx)(h.a,{variant:"primary",onClick:function(e){i(!0),t?(p(""),a()):p("City field is empty")},children:"Submit"})]})})},d=function(e){var t=e.cityWeather,c=e.click,a=n.a.useState(""),i=Object(s.a)(a,2),r=i[0],o=i[1],h=n.a.useState(""),l=Object(s.a)(h,2),d=l[0],p=l[1],b=n.a.useState(""),x=Object(s.a)(b,2),m=x[0],O=x[1],f=n.a.useState(""),y=Object(s.a)(f,2),C=y[0],g=y[1],S=n.a.useState(""),v=Object(s.a)(S,2),w=v[0],k=v[1],F=n.a.useState(""),W=Object(s.a)(F,2),E=W[0],T=W[1];return n.a.useEffect((function(){console.log("city Weather ",t),c&&t.hasOwnProperty("weather")&&(o(t.name),p(t.main.humidity+" %"),O((t.main.temp-273.15).toFixed(2)+" \xb0C"),g((t.main.temp_min-273.15).toFixed(2)+" \xb0C"),k((t.main.temp_max-273.15).toFixed(2)+" \xb0C"),T(t.wind.speed+" km/h"))})),Object(u.jsx)(j.a,{children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[Object(u.jsxs)("p",{children:["City Name: ",r]}),Object(u.jsxs)("p",{children:["Humidity: ",d]}),Object(u.jsxs)("p",{children:["Temperature: ",m]}),Object(u.jsxs)("p",{children:["Minimum Temperature: ",C]}),Object(u.jsxs)("p",{children:["Maximum Temperature: ",w]}),Object(u.jsxs)("p",{children:["Wind Speed: ",E]})]})})})};var p=function(){var e=n.a.useState(""),t=Object(s.a)(e,2),c=t[0],a=t[1],i=n.a.useState({}),r=Object(s.a)(i,2),j=r[0],o=r[1],h=n.a.useState(!1),p=Object(s.a)(h,2),b=p[0],x=p[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"text-center text-info text-danger",children:"Weather App"}),Object(u.jsx)(l,{city:c,setCity:a,fetchCityWeather:function(){fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&appid=963424f43671e87392a23f7c94544f2c")).then((function(e){return e.json()})).then((function(e){o(e)})).catch((function(e){console.log("Error is ",e)}))},click:b,setClick:x}),Object(u.jsx)(d,{cityWeather:j,click:b})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};c(23);r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),b()}},[[24,1,2]]]);
//# sourceMappingURL=main.875579f2.chunk.js.map