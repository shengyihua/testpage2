window.__require=function t(e,o,n){function r(i,p){if(!o[i]){if(!e[i]){var a=i.split("/");if(a=a[a.length-1],!e[a]){var s="function"==typeof __require&&__require;if(!p&&s)return s(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+i+"'")}i=a}var l=o[i]={exports:{}};e[i][0].call(l.exports,function(t){return r(e[i][1][t]||t)},l,l.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({Data:[function(t,e,o){"use strict";cc._RF.push(e,"5b3933gKnhDR5xzkd3hN1Sl","Data"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){this.state=0}return t.getInstance=function(){return this.instance=this.instance?this.instance:new t,this.instance},t}();o.default=n,cc._RF.pop()},{}],GameOver:[function(t,e,o){"use strict";cc._RF.push(e,"83ca76b1x1GqJEwLyLhjmoX","GameOver");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.overbutton=function(){cc.director.loadScene("Home")},e=r([i],e)}(cc.Component));o.default=p,cc._RF.pop()},{}],GameUI:[function(t,e,o){"use strict";cc._RF.push(e,"bb1c6zKmzNFzKXANBPkr5Yo","GameUI");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.videopanel1=null,e.videopanel2=null,e.videopanel3=null,e.videopanel4=null,e.road=null,e.selectpage=null,e.nubmergame=null,e.gameover=null,e}return n(e,t),e.prototype.start=function(){this.vc1=this.videopanel1.getComponent("VideoControl"),this.vc1.show(),this.vc2=this.videopanel2.getComponent("VideoControl"),this.vc3=this.videopanel3.getComponent("VideoControl"),this.vc4=this.videopanel3.getComponent("VideoControl")},e.prototype.onVideoPlayerEvent1=function(t,e){e===cc.VideoPlayer.EventType.COMPLETED&&(this.road.active=!0,this.videopanel1.active=!1)},e.prototype.onVideoPlayerEvent2=function(t,e){e===cc.VideoPlayer.EventType.COMPLETED&&(this.selectpage.active=!0,this.videopanel2.active=!1)},e.prototype.onVideoPlayerEvent3=function(t,e){e===cc.VideoPlayer.EventType.COMPLETED&&(this.nubmergame.active=!0,this.videopanel3.active=!1)},e.prototype.onVideoPlayerEvent4=function(t,e){e===cc.VideoPlayer.EventType.COMPLETED&&(this.gameover.active=!0,this.videopanel4.active=!1)},e.prototype.skip1=function(){this.road.active=!0,this.videopanel1.active=!1},e.prototype.skip2=function(){this.selectpage.active=!0,this.videopanel2.active=!1},e.prototype.skip3=function(){this.nubmergame.active=!0,this.videopanel3.active=!1},e.prototype.skip4=function(){this.gameover.active=!0,this.videopanel4.active=!1},e.prototype.over=function(){cc.director.loadScene("Home")},r([p(cc.Node)],e.prototype,"videopanel1",void 0),r([p(cc.Node)],e.prototype,"videopanel2",void 0),r([p(cc.Node)],e.prototype,"videopanel3",void 0),r([p(cc.Node)],e.prototype,"videopanel4",void 0),r([p(cc.Node)],e.prototype,"road",void 0),r([p(cc.Node)],e.prototype,"selectpage",void 0),r([p(cc.Node)],e.prototype,"nubmergame",void 0),r([p(cc.Node)],e.prototype,"gameover",void 0),e=r([i],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],Helloworld:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Helloworld");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return n(e,t),e.prototype.start=function(){this.label.string=this.text},r([p(cc.Label)],e.prototype,"label",void 0),r([p],e.prototype,"text",void 0),e=r([i],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],HomeUI:[function(t,e,o){"use strict";cc._RF.push(e,"9f271sPSYVLHb+Y0FjJUbfo","HomeUI");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){},e.prototype.showSelectPanel=function(){cc.director.loadScene("SelectPage")},e.prototype.showVideo1Panel=function(){cc.director.loadScene("V0")},e.prototype.showVideo2Panel=function(){cc.director.loadScene("V1")},e=r([i],e)}(cc.Component));o.default=p,cc._RF.pop()},{}],NumerGame:[function(t,e,o){"use strict";cc._RF.push(e,"9d738Ah9pBHRIArW1C8no1P","NumerGame");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=t("./Data"),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.nbg=null,e.nlab=null,e.nums=[1,2,3,4,5,6,7,8,9],e.temp=0,e.tnum=10,e.end1=!1,e.down=!1,e.indexnum=0,e}return n(e,t),e.prototype.start=function(){for(var t=0;t<9;t++){var e=this.random(0,8),o=this.random(0,8),n=this.nums[e];this.nums[e]=this.nums[o],this.nums[o]=n}this.gs=this.nbg.children;for(t=0;t<this.gs.length;t++)this.gs[t].getComponentInChildren(cc.Label).string=""+this.nums[t];this.node.on(cc.Node.EventType.TOUCH_START,this.onMouseDownCallback,this,!0),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onMouseMoveCallback,this,!0),this.node.on(cc.Node.EventType.TOUCH_END,this.onMouseUpCallback,this,!0),this.nowselect=null,this.labs=this.nlab.children},e.prototype.onMouseDownCallback=function(t){if(this.end1){this.down=!0;for(var e=this.node.convertToNodeSpaceAR(t.getLocation()),o=0;o<this.gs.length;o++){if(e.sub(this.labs[o].getPosition()).mag()<32)return this.nowselect=this.labs[o],void(this.oldpos=this.labs[o].position)}}},e.prototype.onMouseMoveCallback=function(t){if(1==this.down&&null!=this.nowselect){var e=this.node.convertToNodeSpaceAR(t.getLocation());this.nowselect.setPosition(e)}},e.prototype.onMouseUpCallback=function(t){var e=this.node.convertToNodeSpaceAR(t.getLocation());if(null!=this.nowselect){for(var o=0;o<this.gs.length;o++){if(e.sub(this.gs[o].getPosition()).mag()<28)return this.gs[o].getComponentInChildren(cc.Label).string==this.nowselect.getComponent(cc.Label).string?(this.label.string="\u8bed\u97f3:\u7b54\u5bf9\u4e86!",this.nowselect.active=!1,this.gs[o].children[0].active=!0,this.indexnum++,9==this.indexnum&&cc.director.loadScene("V4")):(this.label.string="\u8bed\u97f3:\u7b54\u9519\u4e86\uff01",this.nowselect.setPosition(this.oldpos)),this.down=!1,void(this.nowselect=null)}this.nowselect.setPosition(this.oldpos)}this.down=!1,this.nowselect=null},e.prototype.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},e.prototype.update=function(t){if(!this.end1&&(this.temp+=t,this.temp>1&&(this.temp=0,this.tnum-=1,this.label.string="\u8bed\u97f3\uff1a\u8fd8\u5269"+this.tnum+"\u79d2",0==this.tnum))){for(var e=this.nbg.children,o=0;o<e.length;o++)e[o].children[0].active=!1;this.end1=!0,a.default.getInstance().state=1}},r([p(cc.Label)],e.prototype,"label",void 0),r([p(cc.Node)],e.prototype,"nbg",void 0),r([p(cc.Node)],e.prototype,"nlab",void 0),e=r([i],e)}(cc.Component);o.default=s,cc._RF.pop()},{"./Data":"Data"}],Road:[function(t,e,o){"use strict";cc._RF.push(e,"50bacZKU6dE34XzxgEelSV3","Road");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.road=null,e.cb=null,e.isgo=!1,e}return n(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onMouseDownCallback,this,!0),this.node.on(cc.Node.EventType.TOUCH_END,this.onMouseUpCallback,this,!0)},e.prototype.onMouseDownCallback=function(t){this.isgo=!0},e.prototype.onMouseUpCallback=function(t){this.isgo=!1},e.prototype.update=function(t){this.isgo&&(this.road.x+=72*t,this.road.x>28&&(this.road.x=28,this.isgo=!1,this.cb.active=!0))},e.prototype.test=function(){cc.director.loadScene("V2")},r([p(cc.Node)],e.prototype,"road",void 0),r([p(cc.Node)],e.prototype,"cb",void 0),e=r([i],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],SelectPage:[function(t,e,o){"use strict";cc._RF.push(e,"5aec7A11dxMAJ2+3bGvEGlK","SelectPage");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.temp=0,e.tnum=30,e}return n(e,t),e.prototype.start=function(){},e.prototype.update=function(t){this.temp+=t,this.temp>1&&(this.temp=0,this.tnum-=1,this.label.string="\u8bed\u97f3\uff1a\u8fd8\u5269"+this.tnum+"\u79d2",0==this.tnum&&cc.director.loadScene("V3"))},e.prototype.skip=function(){cc.director.loadScene("V3")},r([p(cc.Label)],e.prototype,"label",void 0),e=r([i],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],VDControl0:[function(t,e,o){"use strict";cc._RF.push(e,"85da01MCKxLK6mdobPlwOv1","VDControl0");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.vp=null,e}return n(e,t),e.prototype.start=function(){this.vp.node.on("ready-to-play",this.callback,this)},e.prototype.callback=function(t){t.detail;this.vp&&this.vp.play()},e.prototype.onVideoPlayerEvent=function(t,e){e===cc.VideoPlayer.EventType.COMPLETED&&cc.director.loadScene("SelectPage")},e.prototype.skip=function(){cc.director.loadScene("SelectPage")},r([p(cc.VideoPlayer)],e.prototype,"vp",void 0),e=r([i],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],VDControl1:[function(t,e,o){"use strict";cc._RF.push(e,"d6e22ZVXnBCLbtIl6GJ4bOp","VDControl1");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.vp=null,e}return n(e,t),e.prototype.start=function(){this.vp.node.on("ready-to-play",this.callback,this)},e.prototype.callback=function(t){t.detail;this.vp&&this.vp.play()},e.prototype.onVideoPlayerEvent=function(t,e){e===cc.VideoPlayer.EventType.COMPLETED&&cc.director.loadScene("Road")},e.prototype.skip=function(){cc.director.loadScene("Road")},r([p(cc.VideoPlayer)],e.prototype,"vp",void 0),e=r([i],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],VDControl2:[function(t,e,o){"use strict";cc._RF.push(e,"fd80aExTF5LM5wR2pJL5O/e","VDControl2");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.vp=null,e}return n(e,t),e.prototype.start=function(){this.vp.node.on("ready-to-play",this.callback,this)},e.prototype.callback=function(t){t.detail;this.vp&&this.vp.play()},e.prototype.onVideoPlayerEvent=function(t,e){e===cc.VideoPlayer.EventType.COMPLETED&&cc.director.loadScene("Card")},e.prototype.skip=function(){cc.director.loadScene("Card")},r([p(cc.VideoPlayer)],e.prototype,"vp",void 0),e=r([i],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],VDControl3:[function(t,e,o){"use strict";cc._RF.push(e,"68d9bZ9tqZAmbe2186qtKjB","VDControl3");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.vp=null,e}return n(e,t),e.prototype.start=function(){this.vp.node.on("ready-to-play",this.callback,this)},e.prototype.callback=function(t){t.detail;this.vp&&this.vp.play()},e.prototype.onVideoPlayerEvent=function(t,e){e===cc.VideoPlayer.EventType.COMPLETED&&cc.director.loadScene("NumberGame")},e.prototype.skip=function(){cc.director.loadScene("NumberGame")},r([p(cc.VideoPlayer)],e.prototype,"vp",void 0),e=r([i],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],VDControl4:[function(t,e,o){"use strict";cc._RF.push(e,"25d8c/PlK1Atrfdo00QRSmW","VDControl4");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.vp=null,e}return n(e,t),e.prototype.start=function(){this.vp.node.on("ready-to-play",this.callback,this)},e.prototype.callback=function(t){t.detail;this.vp&&this.vp.play()},e.prototype.onVideoPlayerEvent=function(t,e){e===cc.VideoPlayer.EventType.COMPLETED&&cc.director.loadScene("GameOver")},e.prototype.skip=function(){cc.director.loadScene("GameOver")},r([p(cc.VideoPlayer)],e.prototype,"vp",void 0),e=r([i],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],VideoControl:[function(t,e,o){"use strict";cc._RF.push(e,"c0fc50xkGZOV4WKZ5BaR43u","VideoControl");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.clipname1="",e}return n(e,t),e.prototype.onLoad=function(){this.oldpos=this.node.position},e.prototype.callback=function(t){this.videoplayer.play()},e.prototype.hide=function(){this.node.position=this.oldpos,this.videoplayer.currentTime=0,this.videoplayer.stop()},e.prototype.show=function(){this.node.position=cc.v3(0,0,0),this.videoplayer.currentTime=0,this.videoplayer.resume(),this.videoplayer.node.on("ready-to-play",this.callback,this)},e.prototype.play=function(){this.videoplayer.currentTime=0,this.videoplayer.play()},r([p()],e.prototype,"clipname1",void 0),r([p(cc.VideoPlayer)],e.prototype,"videoplayer",void 0),e=r([i],e)}(cc.Component);o.default=a,cc._RF.pop()},{}]},{},["Data","GameOver","GameUI","Helloworld","HomeUI","NumerGame","Road","SelectPage","VDControl0","VDControl1","VDControl2","VDControl3","VDControl4","VideoControl"]);