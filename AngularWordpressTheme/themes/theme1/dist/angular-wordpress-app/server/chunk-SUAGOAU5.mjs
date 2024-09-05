import './polyfills.server.mjs';
import{A as d,B as H,C as D,D as I,E as T,H as A,L as N,O as U,P as j,a as c,b as m,c as M,d as y,e as O,f as p,g as _,h as l,i as S,j as k,k as h,l as r,m as n,n as f,o as i,p as w,q as s,x as E,z as F}from"./chunk-7TGJJO2M.mjs";var u=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-root"]],standalone:!0,features:[s],decls:10,vars:0,consts:[["routerLink","/"],["routerLink","/user"],["routerLink","/post"]],template:function(e,a){e&1&&(r(0,"h1"),i(1,"Hello WordPress!"),n(),r(2,"nav")(3,"a",0),i(4,"Home"),n(),r(5,"a",1),i(6,"User"),n(),r(7,"a",2),i(8,"Posts"),n()(),f(9,"router-outlet"))},dependencies:[d,N,U],styles:["body[_ngcontent-%COMP%]{background-color:#fefbd8}h1[_ngcontent-%COMP%]{background-color:#0a4950;color:brown}div[_ngcontent-%COMP%]{background-color:#d5f4e6}span[_ngcontent-%COMP%]{background-color:#f18973}nav[_ngcontent-%COMP%]{background-color:#333;padding:1rem;display:flex;justify-content:space-around}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:1.2rem;padding:.5rem 1rem;border-radius:5px;transition:background-color .3s,color .3s}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#555;color:#ffeb3b}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#ffeb3b;color:#333}"]})};var C=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-home"]],standalone:!0,features:[s],decls:2,vars:0,template:function(e,a){e&1&&(r(0,"p"),i(1,"home works!"),n())}})};var v=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-user"]],standalone:!0,features:[s],decls:2,vars:0,template:function(e,a){e&1&&(r(0,"p"),i(1,"user works!"),n())}})};var b=class t{constructor(o){this.http=o}apiUrl=window.location.origin.includes(":8080")?window.location.origin.replace(":8080",""):`${window.location.origin}/wp-json/wp/v2/posts`;getPosts(){return console.log("Fetching posts from:",this.apiUrl),this.http.get(this.apiUrl).pipe(m(this.handleError("getPosts",[])))}handleError(o="operation",e){return a=>(console.error(`${o} failed: ${a.message}`),c(e))}static \u0275fac=function(e){return new(e||t)(O(H))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};function W(t,o){if(t&1&&(r(0,"div")(1,"h2"),i(2),n(),f(3,"div",2),n()),t&2){let e=o.$implicit;l(2),w(e.title.rendered),l(),h("innerHTML",e.content.rendered,_)}}var P=class t{constructor(o){this.postService=o}posts=[];ngOnInit(){this.postService.getPosts().pipe(M(o=>{console.log("Posts fetched:",o),this.posts=o}),m(o=>(console.error("Error fetching posts:",o),c([])))).subscribe()}static \u0275fac=function(e){return new(e||t)(S(b))};static \u0275cmp=p({type:t,selectors:[["app-post"]],standalone:!0,features:[s],decls:2,vars:1,consts:[[1,"posts-container"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(e,a){e&1&&(r(0,"div",0),k(1,W,4,2,"div",1),n()),e&2&&(l(),h("ngForOf",a.posts))},dependencies:[d,F],styles:[".posts-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:20px;background-color:#f9f9f9}.post[_ngcontent-%COMP%]{padding:15px;border:1px solid #ddd;border-radius:5px;background-color:#fff}.post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0;font-size:24px;color:#333}.post[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:16px;color:#555}"]})};var L=[{path:"",component:C},{path:"user",component:v},{path:"post",component:P}];var R={providers:[j(L),T(),D()]};var Z={providers:[A()]},z=E(R,Z);var q=()=>I(u,z),Me=q;export{Me as a};
