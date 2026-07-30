"use strict";var c=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var m=c(function(D,j){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),E=require('@stdlib/math-base-assert-is-positive-zerof/dist');function O(a,r,t,f,i,n,q){var e,o,u,v,s;if(a<=0)return i;if(o=f,u=q,e=r[o],i[u]=e,u+=n,s=1,x(e)===!1)for(s;s<a;s++){if(o+=t,v=r[o],x(v)){e=v;break}(v>e||v===e&&E(v))&&(e=v),i[u]=e,u+=n}if(x(e))for(s;s<a;s++)i[u]=e,u+=n;return i}j.exports=O
});var d=c(function(F,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),P=m();function Z(a,r,t,f,i){var n=l(a,t),q=l(a,i);return P(a,r,t,n,f,i,q)}y.exports=Z
});var b=c(function(G,_){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=d(),h=m();g(R,"ndarray",h);_.exports=R
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=b(),p,k=z(w(__dirname,"./native.js"));A(k)?p=B:p=k;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
