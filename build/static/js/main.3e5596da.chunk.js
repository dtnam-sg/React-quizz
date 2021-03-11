(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"courseId":".net","name":".NET Framework","detail":"Basic Structure, Semantics, Multimedia, Forms, Global Attributes"},{"courseId":"angularjs","name":"Angular JS","detail":"Components and Directives, Template Syntax, Dependency Injection, Routing, Forms"},{"courseId":"c-sharp","name":"C#","detail":"Fundamentals, Objects and Types, Communication, Networking, Intermediate"},{"courseId":"react","name":"React","detail":"Components, Tools, ESNext Syntax, Basics, Hooks"},{"courseId":"c++","name":"C++","detail":"Syntax and Semantics, Pointers and Data Structures, Object Oriented Programming"},{"courseId":"django","name":"Django","detail":"Architecture, Configuration and Infrastructure, Models and Databases, Templates, URL Routing and Requests"},{"courseId":"java","name":"Java","detail":"Java Fundamentals, Java Classes and Instances, Core APIs, Java Data Structures, Java System Fundamentals"},{"courseId":"jquery","name":"jQuery","detail":"Selecting & Traversing, Events, AJAX, Animation, Install & Deploy"},{"courseId":"node.js","name":"Node.js","detail":"Modules, Packages, Events, HTTP, Console"},{"courseId":"kotlin","name":"Kotlin","detail":"Classes and Objects, Collections, Functions, Basics, Control Flow"},{"courseId":"php","name":"PHP","detail":"Arrays, Classes, Language Basics, Syntax, Utility Functions"},{"courseId":"nosql","name":"NoSQL","detail":"Using NoSQL, NoSQL Concepts, NoSQL Applications, Core NoSQL, Optimizing NoSQL"}]')},,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),r=a.n(l),s=(a(24),a(25),a(5)),o=a(1);a(26);var i=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Assessments"))},u=(a(27),function(e){var t=e.title,a=e.link,n=e.linkText;return c.a.createElement("div",{className:"introduction-title"},c.a.createElement("span",null,t),c.a.createElement("a",{href:a},n))}),m=function(e){var t=e.imageSrc,a=e.alt,n=e.description;return c.a.createElement("div",{className:"introduction-content__block"},c.a.createElement("div",null,c.a.createElement("img",{src:t,alt:a})),c.a.createElement("span",null,n))};var d=function(){return c.a.createElement("div",{className:"content-introduction"},c.a.createElement(u,{title:"How it works",link:"#",linkText:"Learn more"}),c.a.createElement("div",{className:"introduction-content"},c.a.createElement(m,{imageSrc:"https://static-exp1.licdn.com/sc/h/adj6i4rox81urqvl2lnz4me87",alt:"Choice",description:"Take a multiple-choice quiz"}),c.a.createElement(m,{imageSrc:"https://static-exp1.licdn.com/sc/h/kn2s7qlapljbu71375bjykd2",alt:"Skill",description:"Get a badge for your skill "}),c.a.createElement(m,{imageSrc:"https://static-exp1.licdn.com/sc/h/26mcnomu6yoddxp3x5ocohb5z",alt:"Lock",description:"Results are private unless you share them"})))},h=(a(28),a(29),["primary--solid","next--circle"]),p=["medium","large"],v=function(e){var t=e.onClick,a=e.buttonStyle,n=e.buttonSize,l=e.text,r=h.includes(a)?a:h[0],s=p.includes(n)?n:h[0];return c.a.createElement("button",{onClick:t,className:"btn ".concat(r," ").concat(s)},l)},E=function(e){var t=e.course,a=e.onViewCourseDetail;return c.a.createElement("div",{className:"list-courses__item"},c.a.createElement("span",null,t.name),c.a.createElement(v,{buttonStyle:"next--circle",buttonSize:"medium",text:c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","data-supported-dps":"16x16",fill:"currentColor",width:"16",height:"16",focusable:"false"},c.a.createElement("path",{d:"M9 8L5 2.07 6.54 1l4.2 6.15a1.5 1.5 0 010 1.69L6.54 15 5 13.93z"})),onClick:function(e){return a(t.courseId,e)}}))},f=function(e){var t=e.onViewCourseDetail,a=e.courses,n=void 0===a?[]:a;return c.a.createElement("div",{className:"list-courses"},n.map((function(e,a){return c.a.createElement(E,{key:a,course:e,onViewCourseDetail:t})})))},g=function(e){var t=e.text;return c.a.createElement("p",{className:"course-header"},t)};var b=function(e){var t=e.onViewCourseDetail,a=e.courses,n=void 0===a?[]:a;return c.a.createElement("div",{className:"content-course"},c.a.createElement(g,{text:"Recommended quizzes based on your skills "}),c.a.createElement("div",{className:"course-name"},c.a.createElement(f,{onViewCourseDetail:t,courses:n})))},w=(a(30),a(17)),N=function(){return w||[]},x=(a(31),a(6)),_=a(7),C=a(9),k=a(8),y=a(10),z=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(C.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(c)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(y.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props.label,a="tab-list-item";return a===t&&(a+="tab-list-active"),c.a.createElement("li",{className:a,onClick:e},t)}}]),t}(c.a.Component),S=(a(32),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(C.a)(this,Object(k.a)(t).call(this,e))).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(y.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return c.a.createElement("div",{className:"tabs"},c.a.createElement("div",{className:"tab-list"},t.map((function(t){var n=t.props.label;return c.a.createElement(z,{activeTab:a,key:n,label:n,onClick:e})}))),c.a.createElement("div",{className:"tab-content"},t.map((function(e){if(e.props.label===a)return e.props.children}))))}}]),t}(c.a.Component));a(33);var I=function(e){var t=e.text;return c.a.createElement("div",{className:"footer"},c.a.createElement(v,{buttonStyle:"primary--solid",buttonSize:"large",text:t}))},j=(a(34),function(){return c.a.createElement("div",{className:"tab-result"},c.a.createElement("h2",{className:"tab-result__header"},"Quizz to retake"),c.a.createElement("ul",{className:"tab-result__course"},c.a.createElement("li",{className:"tab-result__course-name"},c.a.createElement("div",{className:"tab-result__desc"},c.a.createElement("p",null,"Cascading Style Sheets(CSS)"),c.a.createElement("span",null,"Retake in 75d")),c.a.createElement(v,{buttonStyle:"next--circle",buttonSize:"medium",text:c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","data-supported-dps":"16x16",fill:"currentColor",width:"16",height:"16",focusable:"false"},c.a.createElement("path",{d:"M9 8L5 2.07 6.54 1l4.2 6.15a1.5 1.5 0 010 1.69L6.54 15 5 13.93z"}))})),c.a.createElement("div",{className:"tab-result__hr"}),c.a.createElement("li",{className:"tab-result__course-name"},c.a.createElement("div",{className:"tab-result__desc"},c.a.createElement("p",null,"HTML"),c.a.createElement("span",null,"Retake in 83d")),c.a.createElement(v,{buttonStyle:"next--circle",buttonSize:"medium",text:c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","data-supported-dps":"16x16",fill:"currentColor",width:"16",height:"16",focusable:"false"},c.a.createElement("path",{d:"M9 8L5 2.07 6.54 1l4.2 6.15a1.5 1.5 0 010 1.69L6.54 15 5 13.93z"}))}))))}),L=function(e){var t=e.courses,a=e.onViewCourseDetail;return c.a.createElement("div",{className:"content"},c.a.createElement(d,null),c.a.createElement(b,{onViewCourseDetail:a,courses:t}))},V=function(){var e=Object(o.f)(),t=N();return c.a.createElement("div",{className:"home-page"},c.a.createElement(i,null),c.a.createElement(S,null,c.a.createElement("div",{label:"Quizzes"},c.a.createElement(L,{onViewCourseDetail:function(t){console.log("what is course ID: ",t),console.log(t),e.push("/courses/".concat(t))},courses:t})),c.a.createElement("div",{label:"Result"},c.a.createElement(j,null))),c.a.createElement(I,{text:"Done"}))},M=(a(43),function(e){var t=e.course;return c.a.createElement("div",{className:"course-page"},c.a.createElement("div",{className:"course-header-page"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 84 21","data-supported-dps":"84x21",width:"84",height:"21",focusable:"false"},c.a.createElement("g",{className:"inbug",fill:"none",fillRule:"evenodd"},c.a.createElement("path",{d:"M82.042 0H64.146c-.856 0-1.583.677-1.583 1.511v17.977c0 .835.727 1.512 1.583 1.512h17.896c.857 0 1.52-.677 1.52-1.512V1.511C83.563.677 82.9 0 82.043 0",className:"bug-text-color",fill:"#FFF"}),c.a.createElement("path",{d:"M82.042 0H64.146c-.856 0-1.583.677-1.583 1.511v17.977c0 .835.727 1.512 1.583 1.512h17.896c.857 0 1.52-.677 1.52-1.512V1.511C83.563.677 82.9 0 82.043 0zM70.875 7.875h2.844v1.429c.41-.822 1.46-1.56 3.038-1.56 3.025 0 3.743 1.635 3.743 4.636v5.557h-3.063v-4.874c0-1.709-.41-2.672-1.452-2.672-1.446 0-2.048 1.039-2.048 2.672v4.874h-3.062V7.876zm-5.25 10.063h3.063V7.874h-3.063v10.063zm3.5-13.344a1.969 1.969 0 11-3.938 0 1.969 1.969 0 013.938 0z",className:"background",fill:"#0073B0"})),c.a.createElement("g",{className:"linkedin-text"},c.a.createElement("path",{d:"M59.5 17.938h-2.625v-1.532c-.478.727-1.87 1.663-3.281 1.663-2.99 0-4.944-1.892-4.944-4.944 0-2.803 1.641-5.381 4.506-5.381 1.287 0 2.576.25 3.282 1.225V3.063H59.5v14.874zm-5.578-7.482c-1.557 0-2.34.935-2.34 2.45 0 1.516.783 2.494 2.34 2.494s2.56-.978 2.56-2.494c0-1.515-1.003-2.45-2.56-2.45zM47.25 16.242c-.997 1.267-2.994 1.827-4.922 1.827-3.114 0-5.053-2.164-5.053-5.381 0-3.218 2.319-4.944 5.49-4.944 2.626 0 4.835 1.845 4.835 5.381 0 .547-.088.875-.088.875H40.25l.049.293c.174.964 1.208 1.457 2.412 1.457 1.017 0 1.778-.443 2.297-1.148l2.242 1.64zm-2.734-4.43c.02-1.038-.814-1.88-1.935-1.88-1.37 0-2.248.905-2.331 1.88h4.266z"}),c.a.createElement("path",{d:"M27.563 3.063h3.062v8.75l3.5-3.938h3.828l-4.266 4.594 4.102 5.469h-3.664l-3.5-4.813v4.813h-3.063zM16.188 7.875h2.625v1.477c.414-.79 1.766-1.608 3.28-1.608 3.156 0 3.72 1.862 3.72 4.56v5.633H22.75v-4.976c0-1.162.067-2.548-1.531-2.548-1.619 0-1.969 1.24-1.969 2.548v4.976h-3.063V7.876zM12.906 2.68c1.012 0 1.914.903 1.914 1.914 0 1.01-.902 1.914-1.914 1.914-1.01 0-1.914-.903-1.914-1.914s.904-1.914 1.914-1.914zm-1.531 15.258h3.063V7.874h-3.063v10.063zM0 3.063h3.063v11.812h6.562v3.063H0z"}))),c.a.createElement("h2",{className:"course-header-page__title"},t.name," Assessment"),c.a.createElement("figcaption",{className:"course-header-page__detail"},t.detail)),c.a.createElement("div",{className:"course-content"},c.a.createElement("div",{className:"course-content__bub"},c.a.createElement("h3",{className:"course-content__title"},"Before you begin"),c.a.createElement("p",{className:"course-content__desc"},"Each quiz must be completed in one session; make sure you have a stable internet connection & you\u2019re finished before exiting."),c.a.createElement("p",{className:"course-content__desc"},"The quiz is in English. If you don\u2019t pass, your results won\u2019t be displayed or shared on LinkedIn.")),c.a.createElement("div",{className:"course-content__overview"},c.a.createElement("h3",{className:"course-content__title"},"Overview"),c.a.createElement("p",{className:"course-content__desc"},"Answer 15-20 timed, multiple-choice questions"),c.a.createElement("ul",{className:"course-content__list"},c.a.createElement("li",{className:"course-content__education"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","data-supported-dps":"16x16",fill:"currentColor",width:"16",height:"16",focusable:"false"},c.a.createElement("path",{d:"M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 12.12A5.12 5.12 0 1113.13 8 5.13 5.13 0 018 13.12zm.88-5.54L11 9.2l-1.05 1.4-2.43-1.85A1 1 0 017.13 8V4h1.75v3.58z"})),c.a.createElement("span",{className:"course-content__education-desc"},c.a.createElement("strong",null,"~15 minutes")," duration")),c.a.createElement("li",{className:"course-content__education"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","data-supported-dps":"16x16",fill:"currentColor",width:"16",height:"16",focusable:"false"},c.a.createElement("path",{d:"M5 13v2H3a1 1 0 01-1-1V3a1 1 0 011-1h2.71L6 1.41A.76.76 0 016.68 1h.64a.76.76 0 01.68.41l.29.59H11a1 1 0 011 1v3h-2V4H9l-.25 1h-3.5L5 4H4v9zm8.54-6L9 12.72 7 10.1l-1.36 1.11 2.78 3.52a.74.74 0 001.15 0L14.86 8z"})),c.a.createElement("span",{className:"course-content__education-desc"},c.a.createElement("strong",null,"70th percentile")," required to pass and get a badge")),c.a.createElement("li",{className:"course-content__education"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","data-supported-dps":"16x16",fill:"currentColor",width:"16",height:"16",focusable:"false"},c.a.createElement("path",{d:"M14 3h-1V1h-2v2H5V1H3v2H2a1 1 0 00-1 1v10a1 1 0 001 1h9.13L15 11.13V4a1 1 0 00-1-1zM3 5h10v2H3V5zm7 5v3H3V8h10v2h-3z"})),c.a.createElement("span",{className:"course-content__education-desc"},c.a.createElement("strong",null,"Retry in 3 months")," if you don\u2019t pass")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://dtnam-sg.github.io/CV/",className:"course-content__link"},"Learn More"))))),c.a.createElement("div",null,c.a.createElement(I,{text:"Start"})))});var H=function(){var e=Object(o.g)().courseId;console.log("courseId: ",e);var t=function(e){return N().find((function(t){return t.courseId===e}))}(e);return console.log("found course :",t),c.a.createElement("div",null,c.a.createElement(M,{course:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement((function(){return c.a.createElement(s.a,null,c.a.createElement("div",null,c.a.createElement("ul",{className:"btn-home"},c.a.createElement("li",{className:"btn-icon"},c.a.createElement(s.b,{to:"/"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","data-supported-dps":"24x24",fill:"currentColor",width:"24",height:"24",focusable:"false"},c.a.createElement("path",{d:"M20 5.32L13.32 12 20 18.68 18.66 20 12 13.33 5.34 20 4 18.68 10.68 12 4 5.32 5.32 4 12 10.69 18.68 4z"}))))),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/"},c.a.createElement(V,null)),c.a.createElement(o.a,{path:"/courses/:courseId"},c.a.createElement(H,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.3e5596da.chunk.js.map