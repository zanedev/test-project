"use strict";function define(e,t){Object.defineProperty(Array.prototype,e,{value:t,writable:!0,configurable:!0,enumerable:!1})}function ArrayIterator(e,t,n){this.array=e,this.start=null==t?0:t,this.end=n}var Function=require("./shim-function"),GenericCollection=require("./generic-collection"),GenericOrder=require("./generic-order"),WeakMap=require("weak-map");module.exports=Array;var array_splice=Array.prototype.splice,array_slice=Array.prototype.slice;Array.empty=[],Object.freeze&&Object.freeze(Array.empty),Array.from=function(e){var t=[];return t.addEach(e),t},Array.unzip=function(e){for(var t=[],n=1/0,i=0;e.length>i;i++){var r=e[i];e[i]=r.toArray(),n>r.length&&(n=r.length)}for(var i=0;e.length>i;i++)for(var r=e[i],a=0;r.length>a;a++)n>a&&a in r&&(t[a]=t[a]||[],t[a][i]=r[a]);return t},define("addEach",GenericCollection.prototype.addEach),define("deleteEach",GenericCollection.prototype.deleteEach),define("toArray",GenericCollection.prototype.toArray),define("toObject",GenericCollection.prototype.toObject),define("all",GenericCollection.prototype.all),define("any",GenericCollection.prototype.any),define("min",GenericCollection.prototype.min),define("max",GenericCollection.prototype.max),define("sum",GenericCollection.prototype.sum),define("average",GenericCollection.prototype.average),define("only",GenericCollection.prototype.only),define("flatten",GenericCollection.prototype.flatten),define("zip",GenericCollection.prototype.zip),define("enumerate",GenericCollection.prototype.enumerate),define("group",GenericCollection.prototype.group),define("sorted",GenericCollection.prototype.sorted),define("reversed",GenericCollection.prototype.reversed),define("constructClone",function(e){var t=new this.constructor;return t.addEach(e),t}),define("has",function(e,t){return-1!==this.find(e,t)}),define("get",function(e,t){if(+e!==e)throw Error("Indicies must be numbers");return!e in this?t:this[e]}),define("set",function(e,t){return this.splice(e,1,t),!0}),define("add",function(e){return this.push(e),!0}),define("delete",function(e,t){var n=this.find(e,t);return-1!==n?(this.splice(n,1),!0):!1}),define("find",function(e,t){t=t||this.contentEquals||Object.equals;for(var n=0;this.length>n;n++)if(n in this&&t(this[n],e))return n;return-1}),define("findLast",function(e,t){t=t||this.contentEquals||Object.equals;var n=this.length;do if(n--,n in this&&t(this[n],e))return n;while(n>0);return-1}),define("swap",function(e,t,n){var i,r,a,s,o;if(n!==void 0){if(i=[e,t],Array.isArray(n)||(n=array_slice.call(n)),a=0,r=n.length,1e3>r){for(a;r>a;a++)i[a+2]=n[a];return array_splice.apply(this,i)}for(o=array_splice.apply(this,i),a;r>a;){for(i=[e+a,0],s=2;1002>s&&r>a;s++,a++)i[s]=n[a];array_splice.apply(this,i)}return o}return t!==void 0?array_splice.call(this,e,t):e!==void 0?array_splice.call(this,e):[]}),define("peek",function(){return this[0]}),define("poke",function(e){this.length>0&&(this[0]=e)}),define("peekBack",function(){return this.length>0?this[this.length-1]:void 0}),define("pokeBack",function(e){this.length>0&&(this[this.length-1]=e)}),define("one",function(){for(var e in this)if(Object.owns(this,e))return this[e]}),define("clear",function(){return this.length=0,this}),define("compare",function(e,t){t=t||Object.compare;var n,i,r,a,s;if(this===e)return 0;if(!e||!Array.isArray(e))return GenericOrder.prototype.compare.call(this,e,t);for(i=Math.min(this.length,e.length),n=0;i>n;n++)if(n in this){if(!(n in e))return-1;if(r=this[n],a=e[n],s=t(r,a))return s}else if(n in e)return 1;return this.length-e.length}),define("equals",function(e,t){t=t||Object.equals;var n,i,r=0,a=this.length;if(this===e)return!0;if(!e||!Array.isArray(e))return GenericOrder.prototype.equals.call(this,e);if(a!==e.length)return!1;for(;a>r;++r)if(r in this){if(!(r in e))return!1;if(n=this[r],i=e[r],!t(n,i))return!1}else if(r in e)return!1;return!0}),define("clone",function(e,t){if(null==e)e=1/0;else if(0===e)return this;if(t=t||new WeakMap,t.has(this))return t.get(this);var n=Array(this.length);t.set(this,n);for(var i in this)n[i]=Object.clone(this[i],e-1,t);return n}),define("iterate",function(e,t){return new ArrayIterator(this,e,t)}),define("Iterator",ArrayIterator),ArrayIterator.prototype.next=function(){if(this.start===(null==this.end?this.array.length:this.end))throw StopIteration;return this.array[this.start++]};