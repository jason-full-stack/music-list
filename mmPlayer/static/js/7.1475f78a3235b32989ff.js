webpackJsonp([7],{Hd0m:function(t,e){},NilF:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Gu7T"),l=s.n(i),n=s("Dd8w"),a=s.n(n),c=s("NYxO"),r=s("kvay"),o=s("N3MO"),u={name:"play-list",data:function(){return{show:!1}},components:{MusicList:r.a,MmDialog:o.a},computed:a()({},Object(c.c)(["playing","playlist","currentMusic","audioEle"])),methods:a()({clearList:function(){this.clearPlayList(),this.$mmToast("列表清空成功")},selectItem:function(t,e){t.id!==this.currentMusic.id||this.playing?(this.setCurrentIndex(e),this.setPlaying(!0)):this.setPlaying(!0)},deleteItem:function(t){var e=[].concat(l()(this.playlist));e.splice(t,1),this.removerPlayListItem({list:e,index:t}),this.$mmToast("删除成功")}},Object(c.d)({setPlaying:"SET_PLAYING",setCurrentIndex:"SET_CURRENTINDEX",clearPlaylist:"CLEAR_PLAYLIST"}),Object(c.b)(["removerPlayListItem","clearPlayList"]))},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playList"},[s("music-list",{attrs:{list:t.playlist,listType:1},on:{select:t.selectItem,del:t.deleteItem}},[s("div",{staticClass:"list-btn",attrs:{slot:"listBtn"},slot:"listBtn"},[s("span",{on:{click:function(e){t.$refs.dialog.show()}}},[t._v("清空列表")])])]),t._v(" "),s("mm-dialog",{ref:"dialog",attrs:{bodyText:"是否清空正在播放列表",confirmBtnText:"清空"},on:{confirm:t.clearList}})],1)},staticRenderFns:[]};var m=s("VU/8")(u,d,!1,function(t){s("Hd0m")},null,null);e.default=m.exports}});