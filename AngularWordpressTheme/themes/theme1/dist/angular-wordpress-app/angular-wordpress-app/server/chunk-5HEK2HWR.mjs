import './polyfills.server.mjs';
import{A as w,D as A,H as E,K as F,L as H,a as m,b as f,c as M,d as O,e as P,f as p,g as y,h as k,i as n,j as r,k as l,l as i,m as s,t as I,v as d,w as h,x as S,y as _,z as D}from"./chunk-JOTRAXDI.mjs";var u=class t{constructor(e,o){this.http=e;this.platformId=o;h(this.platformId)&&(this.apiUrl=origin.includes(":8080")?origin.replace(":8080",""):`${origin}/wp-json/wp/v2/posts`)}apiUrl;getPosts(){return h(this.platformId)?(console.log("Fetching posts from:",this.apiUrl),this.http.get(this.apiUrl).pipe(f(this.handleError("getPosts",[])))):m([])}handleError(e="operation",o){return c=>(console.error(c),m(o))}static \u0275fac=function(o){return new(o||t)(P(S),P(y))};static \u0275prov=O({token:t,factory:t.\u0275fac,providedIn:"root"})};var a=class t{constructor(e){this.postService=e}ngOnInit(){this.postService.getPosts().pipe(M(e=>{console.log("Posts fetched:",e)}),f(e=>(console.error("Error fetching posts:",e),m([])))).subscribe()}static \u0275fac=function(o){return new(o||t)(k(u))};static \u0275cmp=p({type:t,selectors:[["app-post"]],standalone:!0,features:[s],decls:1,vars:0,consts:[[1,"posts-container"]],template:function(o,c){o&1&&l(0,"div",0)},dependencies:[d],styles:[".posts-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:20px;background-color:#f9f9f9}.post[_ngcontent-%COMP%]{padding:15px;border:1px solid #ddd;border-radius:5px;background-color:#fff}.post[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0;font-size:24px;color:#333}.post[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:16px;color:#555}"]})};var C=class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=p({type:t,selectors:[["app-root"]],standalone:!0,features:[s],decls:11,vars:0,consts:[["routerLink","/"],["routerLink","/user"],["routerLink","/post"]],template:function(o,c){o&1&&(n(0,"h1"),i(1,"Hello WordPress!"),r(),n(2,"nav")(3,"a",0),i(4,"Home"),r(),n(5,"a",1),i(6,"User"),r(),n(7,"a",2),i(8,"Posts"),r()(),l(9,"router-outlet")(10,"app-post"))},dependencies:[d,E,F,a],styles:["body[_ngcontent-%COMP%]{background-color:#fefbd8}h1[_ngcontent-%COMP%]{background-color:#0a4950;color:brown}div[_ngcontent-%COMP%]{background-color:#d5f4e6}span[_ngcontent-%COMP%]{background-color:#f18973}nav[_ngcontent-%COMP%]{background-color:#333;padding:1rem;display:flex;justify-content:space-around}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:1.2rem;padding:.5rem 1rem;border-radius:5px;transition:background-color .3s,color .3s}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#555;color:#ffeb3b}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#ffeb3b;color:#333}"]})};var v=class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=p({type:t,selectors:[["app-home"]],standalone:!0,features:[s],decls:2,vars:0,template:function(o,c){o&1&&(n(0,"p"),i(1,"home works!"),r())}})};var b=class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=p({type:t,selectors:[["app-user"]],standalone:!0,features:[s],decls:2,vars:0,template:function(o,c){o&1&&(n(0,"p"),i(1,"user works!"),r())}})};var j=[{path:"",component:v},{path:"user",component:b},{path:"post",component:a}];var T={providers:[H(j),w(),_()]};var R={providers:[A()]},U=I(T,R);var L=()=>D(C,U),Mo=L;export{Mo as a};
