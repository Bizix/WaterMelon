(this["webpackJsonpwatermelon-react"]=this["webpackJsonpwatermelon-react"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/watermelon_04.17098dbf.png"},23:function(e,t,a){e.exports=a(49)},28:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),l=(a(28),a(6)),s=a(1),o=a(2),u=a.n(o),d=a(4),m=a(8),b=a(11),f=a(7),p=a.n(f),y=p.a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),k=r.a.createContext([{},function(){}]),g=function(e){var t=Object(n.useState)({genre:{path:"DM0000",id:"top100",text:"Top 100"},tracks:{},customPlaylist:[],playlistTracks:[],currentSong:{},watchingPlaylist:!1}),a=Object(m.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(!1),f=Object(m.a)(o,2),g=f[0],v=f[1],h=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.id,n=t.path,console.log(g),c.tracks[a]||g){e.next=8;break}return console.log("need to fetch"),e.next=6,p()("https://cors-anywhere.herokuapp.com/https://www.melon.com/chart/day/index.htm?classCd=".concat(n));case 6:r=e.sent,x(r.data);case 8:v(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"AIzaSyDJG4uwhqh0A4gCLmgQuDhyJM7DK57dbDk",e.next=3,y.get("/search",{params:{q:"".concat(t," ").concat(a),part:"snippet",maxResults:1,key:"AIzaSyDJG4uwhqh0A4gCLmgQuDhyJM7DK57dbDk"}});case 3:return n=e.sent,r=n.data.items[0].id.videoId,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=function(e){var t=document.createElement("div");t.innerHTML=e;var a=t.querySelectorAll("#lst50 .rank, #lst100 .rank"),n=t.querySelectorAll(".rank01>span>a"),r=t.querySelectorAll(".rank02>span>a"),l=t.querySelectorAll(".rank03>a"),o=t.querySelectorAll(".image_typeAll>img"),u=t.querySelectorAll("tr[data-song-no]"),d=[];a.forEach((function(e,t){var a={rank:e.textContent,title:n[t].textContent,artist:r[t].textContent,album:l[t].textContent,art:o[t].src,YouTubeId:"",key:u[t].getAttribute("data-song-no"),availableAction:"add",trackGenre:c.genre.id,trackIndex:t};"undefined"===typeof c.currentSong.title&&0===t&&E(a,t,"play"),d.push(a)}));var m=Object(s.a)({},c.tracks,Object(b.a)({},c.genre.id,d));i((function(e){return Object(s.a)({},e,{tracks:m})}))},E=function(){var e=Object(d.a)(u.a.mark((function e(t,a,n){var r,o,d,m,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=Object(l.a)(c.customPlaylist),d=Object(s.a)({},c.tracks),m=[c.genre.id],!t.YouTubeId){e.next=7;break}r=t.YouTubeId,e.next=10;break;case 7:return e.next=9,w(t.artist,t.title);case 9:r=e.sent;case 10:"undefined"!==typeof d[m]&&""===d[m][a].YouTubeId&&(console.log("should be updating"),d[m][a].YouTubeId=r,i((function(e){return Object(s.a)({},e,{tracks:d})}))),"play"===n?(b={rank:t.rank,title:t.title,artist:t.artist,album:t.album,art:t.art,YouTubeId:r,key:t.key,availableAction:t.availableAction,trackGenre:t.trackGenre,trackIndex:t.trackIndex},i((function(e){return Object(s.a)({},e,{currentSong:b})}))):o.includes(r)?(console.log("delete ".concat(r)),o=o.filter((function(e){return e!==r})),console.log(o),i((function(e){return Object(s.a)({},e,{customPlaylist:o})})),d[m][a].availableAction="add",i((function(e){return Object(s.a)({},e,{tracks:d})}))):!1===o.includes(r)&&(console.log("add ".concat(r)),o=[].concat(Object(l.a)(c.customPlaylist),[r]),console.log(o),i((function(e){return Object(s.a)({},e,{customPlaylist:o})})),d[m][a].availableAction="delete",i((function(e){return Object(s.a)({},e,{tracks:d})})));case 12:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.log(g),!1===g&&(console.log(c.genre),v(!0),h(c.genre))}),[c.genre]),r.a.createElement(k.Provider,{value:[c,i]},e.children)},v=k,h=p.a.create({baseURL:"https://www.googleapis.com/customsearch/v1"}),w=function(){var e=Object(n.useContext)(v),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),o=i[0],b=i[1],f=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"AIzaSyDJG4uwhqh0A4gCLmgQuDhyJM7DK57dbDk",e.next=3,y.get("/search",{params:{q:"".concat(t," ").concat(a),part:"snippet",maxResults:1,key:"AIzaSyDJG4uwhqh0A4gCLmgQuDhyJM7DK57dbDk"}});case 3:return n=e.sent,r=n.data.items[0].id.videoId,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0===o){e.next=2;break}return e.delegateYield(u.a.mark((function e(){var t,n,c,i,l,o,d,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(!0),t=Object(s.a)({},a.currentSong),n=[],c=[],i="",l=Object(s.a)({},a.tracks),o=[a.genre.id],d=0;case 8:if(!(d<10)){e.next=25;break}if(""!==(m=l[o][d]).YouTubeId){e.next=16;break}return e.next=13,f(l[o][d].artist,l[o][d].title);case 13:i=e.sent,e.next=17;break;case 16:i=m.YouTubeId;case 17:t.YouTubeId===i&&(t.availableAction="delete",r((function(e){return Object(s.a)({},e,{currentSong:t})}))),"delete",m.availableAction="delete",n.push(i),c.push(m);case 22:d++,e.next=8;break;case 25:b(!1),r((function(e){return Object(s.a)({},e,{tracks:l,customPlaylist:n,playlistTracks:c})}));case 27:case"end":return e.stop()}}),e)}))(),"t0",2);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(u.a.mark((function e(t,n,c){var i,o,d,m,b,p,y,k,g;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=Object(s.a)({},a.currentSong),d=Object(l.a)(a.customPlaylist),m=Object(l.a)(a.playlistTracks),b=Object(s.a)({},a.tracks),p=[a.genre.id],!t.YouTubeId){e.next=9;break}i=t.YouTubeId,e.next=12;break;case 9:return e.next=11,f(t.artist,t.title);case 11:i=e.sent;case 12:""===b[p][n].YouTubeId&&(console.log("should be updating"),b[p][n].YouTubeId=i,r((function(e){return Object(s.a)({},e,{tracks:b})}))),"play"===c?window.screen.width>767?(y={rank:t.rank,title:t.title,artist:t.artist,album:t.album,art:t.art,YouTubeId:i,key:t.key,availableAction:t.availableAction,trackGenre:t.trackGenre,trackIndex:t.trackIndex},!1,r((function(e){return Object(s.a)({},e,{currentSong:y,watchingPlaylist:!1})}))):(k="https://www.youtube.com/watch?v=".concat(i),window.open(k,"_blank").focus()):d.includes(i)?(console.log("delete ".concat(i)),o.YouTubeId===i&&(o.availableAction="add",console.log(o),r((function(e){return Object(s.a)({},e,{currentSong:o})}))),g=t.trackGenre,d=d.filter((function(e){return e!==i})),b[g][n].availableAction="add",m=m.filter((function(e){return e.YouTubeId!==i})),r((function(e){return Object(s.a)({},e,{tracks:b,customPlaylist:d,playlistTracks:m})})),0===d.length&&!0===a.watchingPlaylist&&(!1,r((function(e){return Object(s.a)({},e,{watchingPlaylist:!1})})))):!1===d.includes(i)&&(console.log("add ".concat(i)),o.YouTubeId===i&&(o.availableAction="delete",r((function(e){return Object(s.a)({},e,{currentSong:o})}))),d=[].concat(Object(l.a)(a.customPlaylist),[i]),t.availableAction="delete",m=[].concat(Object(l.a)(a.playlistTracks),[t]),b[p][n].availableAction="delete",r((function(e){return Object(s.a)({},e,{tracks:b,customPlaylist:d,playlistTracks:m})})));case 14:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(u.a.mark((function e(t,a,n){var r,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"AIzaSyDJG4uwhqh0A4gCLmgQuDhyJM7DK57dbDk","002575468132888478770:v1qvdfuvdlz",e.next=4,h.get("?",{params:{key:"AIzaSyDJG4uwhqh0A4gCLmgQuDhyJM7DK57dbDk",cx:"002575468132888478770:v1qvdfuvdlz",q:"".concat(a," ").concat(n)}});case 4:r=e.sent,"undefined"!==typeof(c=r.data.items)?(i=c[0].link,console.log(i),window.open(i,"_blank").focus()):console.log("No lyrics found!");case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return{state:a,headers:a.headers,genre:a.genre,tracks:a.tracks,currentSong:a.currentSong,customPlaylist:a.customPlaylist,watchingPlaylist:a.watchingPlaylist,isLoading:o,playlistTracks:a.playlistTracks,clearPlaylist:function(){var e=[],t=[],n=Object(s.a)({},a.tracks),c=[a.genre.id];for(var i in n){for(var l in i)n[c][l].availableAction="add";r((function(a){return Object(s.a)({},a,{tracks:n,customPlaylist:e,playlistTracks:t})}))}r((function(e){return Object(s.a)({},e,{watchingPlaylist:!1})}))},viewPlaylist:function(){r((function(e){return Object(s.a)({},e,{watchingPlaylist:!0})}))},fetchYoutube:f,fetchGenrePlaylist:p,getGenre:function(e){r((function(t){return Object(s.a)({},t,{genre:e})}))},handleCurrentSong:k,getLyrics:g}},x=a(22),E=a.n(x),O=r.a.memo((function(){var e=w().getGenre;return r.a.createElement("div",{id:"header",className:"dark"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:E.a,alt:""})),r.a.createElement("div",{className:"genre_container"},[{id:"top100",path:"DM0000",text:"Top 100"},{id:"kpop",path:"GN0200",text:"K-Pop"},{id:"rap",path:"GN0300",text:"Rap/Hiphop"},{id:"rb",path:"GN0400",text:"R&B"},{id:"indie",path:"GN0500",text:"Indie"},{id:"rock",path:"GN0600",text:"Rock"},{id:"balad",path:"GN0100",text:"Balads"},{id:"trot",path:"GN0700",text:"Trot"},{id:"folk",path:"GN0800",text:"Folk"}].map((function(t){return r.a.createElement("div",{id:t.id,className:"genre",key:t.path,onClick:function(){e(t)}},t.text)}))))})),N=function(){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("div",{className:"playlist_header"},r.a.createElement("div",{className:"ranking"},"Ranking"),r.a.createElement("div",{className:"song"},"Song Title"),r.a.createElement("div",{className:"artist"},"Artist"),r.a.createElement("div",{className:"album"},"Album"))))},j=a(5),A=a.n(j),T=function(e){var t,a=w().watchingPlaylist;if(!0===a)t="https://www.youtube.com/embed/VIDEO_ID?playlist=".concat(e.playlist);else{if(!1!==a)return"";t="https://www.youtube.com/embed/".concat(e.youtubeID)}return"undefined"!==typeof t&&console.log(t),r.a.createElement("div",{id:"iframe_container"},r.a.createElement("iframe",{id:"ytplayer",className:"playlist",type:"text/html",width:"900",height:"506",allowFullScreen:"allowfullscreen",src:t}))},I=function(e){var t,a=e.track,n=e.index,c=w(),i=c.customPlaylist,l=c.handleCurrentSong,s=c.getLyrics;return r.a.createElement("div",{className:"ui item row",key:a.key},r.a.createElement("div",{className:"trackWrapper ui sixteen wide column grid"},r.a.createElement("div",{className:"grid ui fourteen wide column"},r.a.createElement("div",{className:"trackFaqs ui  floated left sixteen wide  row"},r.a.createElement("div",{className:"rank"},a.rank),r.a.createElement("div",{className:"art_img ui image"},r.a.createElement("img",{src:a.art,alt:""})),r.a.createElement("div",{className:"song_title "},a.title),r.a.createElement("div",{className:"artist_name"},a.artist),r.a.createElement("div",{className:"album_name"},a.album))),r.a.createElement("div",{className:"mediaLinks two wide ui padded column"},r.a.createElement("div",{className:"ui column"},r.a.createElement("div",{className:"mediaButton ui button red  centered fa-2x watchOnYT",style:{display:"inline-block"},onClick:function(){l(a,n,"play")}},r.a.createElement("i",{className:"fab fa-youtube"}),r.a.createElement("div",{className:"buttonText"},"Watch")),r.a.createElement("div",{className:"mediaButton ui button grey centered fa-2x watchOnYT",id:"playlistButton",style:{display:"inline-block"},onClick:function(){l(a,n,a.availableAction)}},r.a.createElement("i",{className:"fab fa-youtube"}),r.a.createElement("div",{className:"buttonText"},(t=a.availableAction,0===i.length?"Playlist":"add"===t&&i.length>0&&i.length<50?"Add":"delete"===t?"Delete":void 0))),r.a.createElement("div",{className:"mediaButton ui button black  centered fa-2x watchOnYT",id:"lyricButton",style:{display:"inline-block"},onClick:function(){s(a.artist,a.title,a.album)}},r.a.createElement("i",{className:"fab"}),r.a.createElement("div",{className:"buttonText"},"Lyrics"))))))};var P=function(){var e=w(),t=e.watchingPlaylist,a=e.playlistTracks,n=e.currentSong;return r.a.createElement("div",{id:"current_playlist_container"},function(){var e=a;if(!1===t)return r.a.createElement("div",{id:"current_song"},r.a.createElement(I,{track:n,index:n.trackIndex,key:n.YouTubeId}));if(!0===t){var c=A.a.toArray(e).map((function(e,t){return r.a.createElement(I,{track:e,index:e.trackIndex,key:t})}));return r.a.createElement("div",{id:"custom_playlist_container",className:"ui list grid"}," ",c," ")}return"Loading..."}())};var D=r.a.memo((function(){var e=w(),t=e.state,a=e.genre,n=e.currentSong,c=e.isLoading,i=e.fetchGenrePlaylist,l=e.customPlaylist,s=e.clearPlaylist,o=e.viewPlaylist,u=function(){if(A.a.size(t.tracks[a.id])>0&&"undefined"!==A.a.size(t.tracks[a.id]))return r.a.createElement("div",{className:"ui button red basic fa-2x watchOnYT",style:{display:"inline-block"},onClick:function(){i()}},c?"Loading...":"Quick ".concat(t.genre.text," Playlist"))},d=function(){return l.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui button red basic fa-2x watchOnYT",style:{display:"inline-block"},onClick:function(){o()}},"View Playlist (",l.length,")"),r.a.createElement("div",{className:"ui button red basic fa-2x watchOnYT",style:{display:"inline-block"},onClick:function(){s()}},"Delete Playlist")):""};return r.a.createElement(r.a.Fragment,null,function(){if(0!=A.a.size(t.tracks))return r.a.createElement("div",null,r.a.createElement(T,{youtubeID:n.YouTubeId,playlist:l}),r.a.createElement("div",{id:"button_container"},u(),d()),r.a.createElement(P,null))}())})),S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"playlist_container"},r.a.createElement("div",{className:"fa-3x"},r.a.createElement("i",{className:"fas fa-circle-notch fa-spin"}))))},Y=r.a.memo((function(){var e=w(),t=(e.state,e.isLoading),a=e.genre,n=e.tracks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"playlist_container",className:"ui relaxed centered list grid"},function(){var e=n[a.id];if(t||!e)return r.a.createElement(S,null);var c=(e=A.a.toArray(e)).map((function(e,t){return r.a.createElement(I,{track:e,index:t,key:t})}));return r.a.createElement(r.a.Fragment,null,c)}()))})),G=function(){return r.a.createElement("div",{id:"main_container",className:"App ui container"},r.a.createElement(g,null,r.a.createElement(O,null),r.a.createElement("div",{className:"ui grid equal width"},r.a.createElement("div",{className:"ui row centered "},r.a.createElement("div",{className:"six wide column mobilePlaylist",id:"mobile"},r.a.createElement(N,null),r.a.createElement(Y,null)),r.a.createElement("div",{className:"six wide column middle nowPlaying"},r.a.createElement(D,null))))))};i.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.449405d1.chunk.js.map