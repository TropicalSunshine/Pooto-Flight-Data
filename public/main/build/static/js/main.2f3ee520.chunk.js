(window.webpackJsonpmain=window.webpackJsonpmain||[]).push([[0],{17:function(t,e){var n="http://"+window.location.host;t.exports={getAllFlightCord:function(t){fetch(n+"/flights/all",{method:"GET",body:null}).then((function(t){return t.json()})).then((function(e){t(e.data)})).catch((function(t){console.log(t)}))},getAllGroundedCord:function(t){fetch(n+"/flights/grounded",{method:"GET",body:null}).then((function(t){return t.json()})).then((function(e){t(e.data)})).catch((function(t){console.log(t)}))},getAllAirports:function(t){fetch(n+"/airports/all",{method:"GET",body:null}).then((function(t){return t.json()})).then((function(e){console.log("getting all airports",e.data),t(e.data)})).catch((function(t){console.log(t)}))},getFirstAirportByCountry:function(t,e){t=t.toUpperCase(),fetch(n+"/airports/first/"+t,{method:"GET",body:null}).then((function(t){return t.json()})).then((function(t){console.log(t),e(t.data)})).catch((function(t){console.log(t)}))},getAirportsByCountry:function(t,e){t=t.toUpperCase(),fetch(n+"/airports/"+t,{method:"GET",body:null}).then((function(t){return t.json()})).then((function(t){console.log(t),e(t)}))},getDeparturesByIcao:function(t,e){fetch(n+"/airports/departure/icao24/"+t,{method:"GET",body:null}).then((function(t){return t.json()})).then((function(t){console.log(t),e(t)}))},getArrivalsByIcao:function(t,e){console.log("fetching icao"),fetch(n+"/airports/arrivals/icao24/"+t,{method:"GET",body:null}).then((function(t){return t.json()})).then((function(t){console.log(t),e(t)}))}}},51:function(t,e,n){t.exports=n(58)},56:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(28),r=n.n(o),l=(n(56),n(46)),s=n(10),c=n(11),u=n(13),d=n(12),h=n(14),p=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(d.a)(e).call(this))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{id:"Map",style:{position:"absolute",top:0,bottom:0,width:"100%"}})}}]),e}(a.Component),m=n(16),g=n(19),f=n(35),v=n.n(f);v.a.accessToken="pk.eyJ1IjoidHJvcGljYWx0b2Z1IiwiYSI6ImNrMGc5cWJjcDA1ZGMzY241aGtoeWJnczYifQ.1lkF8CRWw2bxBUsnBKd4Aw";var y,b=n(17).getAllFlightCord,E=n(17).getAllGroundedCord,w=n(17).getAllAirports,j=2e3,C=0,A=0;function O(t,e){e?y.setLayoutProperty(t,"visibility","visible"):y.setLayoutProperty(t,"visibility","none")}function k(){return C}function S(){return A}function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;y.flyTo({center:t,zoom:e})}var G=n(17),I=function(t){function e(t){var n;Object(s.a)(this,e),n=Object(u.a)(this,Object(d.a)(e).call(this,t));var a=Object(m.a)(n);return n.state={currentView:a.props.view,flightColor:"#04e000",groundedColor:"#ff0026",inputValue:"",numAirports:a.props.airports,numFlights:a.props.flights,numGrounded:a.props.grounded,blink:!1},n.blinkFlight.bind(Object(m.a)(n)),n.blinkGrounded.bind(Object(m.a)(n)),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(t){t.view!==this.props.view&&this.setState({currentView:this.props.view}),t.airports!=this.props.airports&&this.setState({numAirports:this.props.airports}),t.grounded!=this.props.grounded&&(this.blinkGrounded(),this.setState({numGrounded:this.props.grounded})),t.flights!=this.props.flights&&(this.blinkFlight(),this.setState({numFlights:this.props.flights}))}},{key:"componentWillUnmount",value:function(){clearInterval(this._data_interval)}},{key:"blinkFlight",value:function(){var t=this;this.setState({flightColor:"#000000"}),setTimeout((function(){t.setState({flightColor:"#04e000"})}),300)}},{key:"blinkGrounded",value:function(){var t=this;this.setState({groundedColor:"#000000"}),setTimeout((function(){t.setState({groundedColor:"#ff0026"})}),300)}},{key:"render",value:function(){var t;i.a.createElement("svg",(t={id:"plane-route-svg",version:"1.1"},Object(g.a)(t,"id","Layer_1"),Object(g.a)(t,"x","0px"),Object(g.a)(t,"y","0px"),Object(g.a)(t,"width","340px"),Object(g.a)(t,"height","333px"),Object(g.a)(t,"viewBox","0 0 340 333"),Object(g.a)(t,"enableBackground","new 0 0 340 333"),t),i.a.createElement("path",{className:"path",fill:"transparent",stroke:"#000000",strokeWidth:"4",strokeMiterlimit:"10",d:"M66.039,133.545c0,0-21-57,18-67s49-4,65,8\r s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41\r C46.039,146.545,53.039,128.545,66.039,133.545z"}));return i.a.createElement("div",{id:"flightinput"},i.a.createElement("div",{className:"flightinput-current-view"},this.state.currentView),i.a.createElement("div",{style:{width:"100%",height:"100px"}},i.a.createElement("div",{className:"flight-input-stats",style:{backgroundColor:this.state.flightColor}},i.a.createElement("div",{className:"flight-input-stats-num"},this.state.numFlights," In Flight"),i.a.createElement("div",{className:"flight-input-stats-desc"},"Aircafts in the Sky"))),i.a.createElement("div",{style:{width:"100%",height:"100px"}},i.a.createElement("div",{className:"flight-input-stats",style:{backgroundColor:this.state.groundedColor}},i.a.createElement("div",{className:"flight-input-stats-num"},this.state.numGrounded," Grounded"),i.a.createElement("div",{className:"flight-input-stats-desc"},"Aircrafts on the Ground"))),i.a.createElement("div",{style:{width:"100%",height:"100px"}},i.a.createElement("div",{className:"flight-input-stats",style:{backgroundColor:"#0084ff"}},i.a.createElement("div",{className:"flight-input-stats-num"}," ",this.state.numAirports," Airports"),i.a.createElement("div",{className:"flight-input-stats-desc"}," Major Airports "))))}}]),e}(a.Component),V=n(84),x=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{id:"mapcontrols"},i.a.createElement("div",{className:"mapcontrols-square",onClick:function(){},style:{borderBottomStyle:"Solid",borderWidth:"1px"}},i.a.createElement(V.a,{iconName:"Add"})),i.a.createElement("div",{className:"mapcontrols-square",style:{borderBottomStyle:"Solid",borderWidth:"1px"}},i.a.createElement(V.a,{iconName:"Remove"})),i.a.createElement("div",{className:"mapcontrols-square",onClick:function(){navigator.geolocation.getCurrentPosition((function(t){var e=[t.coords.longitude,t.coords.latitude];N(e,12),function(t){var e={width:100,height:100,data:new Uint8Array(4e4),onAdd:function(){var t=document.createElement("canvas");t.width=this.width,t.height=this.height,this.context=t.getContext("2d")},render:function(){var t=performance.now()%1e3/1e3,e=35*t+15,n=this.context;return n.clearRect(0,0,this.width,this.height),n.beginPath(),n.arc(this.width/2,this.height/2,e,0,2*Math.PI),n.fillStyle="rgba(252, 0, 126,"+(1-t)+")",n.fill(),n.beginPath(),n.arc(this.width/2,this.height/2,15,0,2*Math.PI),n.fillStyle="rgba(252, 3, 86, 1)",n.strokeStyle="white",n.lineWidth=2+4*(1-t),n.fill(),n.stroke(),this.data=n.getImageData(0,0,this.width,this.height).data,y.triggerRepaint(),!0}};y.addImage("pulsing-dot",e,{pixelRatio:2}),y.addLayer({id:"pulsing-dot",type:"symbol",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:t}}]}},layout:{"icon-image":"pulsing-dot"}})}(e)}))}},i.a.createElement(V.a,{iconName:"Location"})))}}]),e}(a.Component),F=n(82),P=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(u.a)(this,Object(d.a)(e).call(this))).state={showSettings:null},t}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t,e=this,n=this;return t=null==this.state.showSettings?"":n.state.showSettings?"settings-tab-window-slide-In":"settings-tab-window-slide-Out",i.a.createElement("div",{id:"settings-tab"},i.a.createElement("div",{className:"settings-tab-button",onClick:function(){null==e.state.showSettings&&(e.state.showSettings=!1),e.setState({showSettings:!n.state.showSettings})}},i.a.createElement(V.a,{iconName:"Settings"})),i.a.createElement("div",{className:"settings-tab-window "+t},i.a.createElement("div",{className:"settings-tab-control"},i.a.createElement(F.a,{inlineLabel:!0,label:"Air",onChange:function(t,e){O("flightsAll",e)}})),i.a.createElement("div",{className:"settings-tab-control"},i.a.createElement(F.a,{inlineLabel:!0,label:"Grounded",onChange:function(t,e){O("flightsGrounded",e)}})),i.a.createElement("div",{className:"settings-tab-control"},i.a.createElement(F.a,{inlineLabel:!0,label:"Airports",onChange:function(t,e){O("Airports",e)}}))))}}]),e}(a.Component),B=n(80),D=function(t){function e(t){return Object(s.a)(this,e),Object(u.a)(this,Object(d.a)(e).call(this,t))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=this.props.airportsData.map((function(t,e){return i.a.createElement(U,{access:t.name.toUpperCase(),lat:t.lat,long:t.long,key:e+"-"+t.name,icao:t.icao24,name:t.name,timezone:t.timezone,city:t.city})}));return i.a.createElement("div",{id:"airport-data-panel"},i.a.createElement("div",{style:{width:"100%",height:"30px"}},i.a.createElement("div",{className:"airport-data-panel-cancel-button",onClick:function(){t.props.unmount(),t.props.resetView()}},i.a.createElement(V.a,{iconName:"Cancel"}))),i.a.createElement("div",{className:"airport-data-panel-textfield"},i.a.createElement(B.a,{placeholder:"search airport",onChange:function(t,e){var n=document.getElementsByClassName("airport-data-component");e=e.toUpperCase();for(var a=0;a<n.length;a++)n[a].accessKey.startsWith(e)?n[a].style.display="":n[a].style.display="none"}})),i.a.createElement("div",{className:"airport-data-panel-content"},e))}}]),e}(a.Component);function U(t){return i.a.createElement("div",{className:"airport-data-component",accessKey:t.access,onClick:function(){N([t.long,t.lat],10)}},i.a.createElement("div",{className:"airport-data-component-name"},t.name),i.a.createElement("div",null,t.city),i.a.createElement("div",null,"Int ID: ",t.icao))}var W=n(78),M=n(86),L=n(20);function T(t){return i.a.createElement("div",{className:"loader",id:"loader-"+t.name},i.a.createElement(M.a,{size:L.a.large}))}var z=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(u.a)(this,Object(d.a)(e).call(this))).state={inputValue:"",airportsData:[],currentView:"World",numGrounded:0,numAirports:4188,numFlights:0,displayAirportPanel:!1,dataUpdateInterval:null},t.unmountAirportPanel=t.unmountAirportPanel.bind(Object(m.a)(t)),t.mountAirportPanel=t.mountAirportPanel.bind(Object(m.a)(t)),t.resetView=t.resetView.bind(Object(m.a)(t)),t.clearInput=t.clearInput.bind(Object(m.a)(t)),t}return Object(h.a)(e,t),Object(c.a)(e,[{key:"unmountAirportPanel",value:function(){this.setState({displayAirportPanel:!1})}},{key:"mountAirportPanel",value:function(){this.setState({displayAirportPanel:!0})}},{key:"resetView",value:function(){var t=this,e=0,n=0;this.setState({currentView:"World",numAirports:4188,dataUpdateInterval:setInterval((function(){e=k(),n=S(),t.setState({numFlights:e,numGrounded:n})}),2e3)})}},{key:"clearInput",value:function(){this.setState({inputValue:""})}},{key:"componentDidMount",value:function(){var t=this,e=0,n=0;this.setState({dataUpdateInterval:setInterval((function(){e=k(),n=S(),t.setState({numFlights:e,numGrounded:n})}),2e3)})}},{key:"render",value:function(){var t=this,e=this.state.displayAirportPanel&&i.a.createElement(D,{resetView:this.resetView,unmount:this.unmountAirportPanel,airportsData:this.state.airportsData});return i.a.createElement("div",{id:"overlay"},e,i.a.createElement(T,{name:"overlay"}),i.a.createElement(I,{view:this.state.currentView,airports:this.state.numAirports,grounded:this.state.numGrounded,flights:this.state.numFlights}),i.a.createElement("div",{className:"overlay-input-container"},i.a.createElement(B.a,{onKeyDown:function(e){var n=t;13===e.keyCode&&(Object(G.getFirstAirportByCountry)(t.state.inputValue,(function(t){N([t.long,t.lat],6)})),Object(G.getAirportsByCountry)(t.state.inputValue,(function(e){console.log(e),null!==e.data&&(clearInterval(t.state.dataUpdateInterval),t.setState({inputValue:"",displayAirportPanel:!0,currentView:n.state.inputValue.toUpperCase(),numAirports:e.num_airports,airportsData:e.data}))})))},value:this.state.inputValue,placeholder:"Enter Country",onChange:function(e,n){t.setState({inputValue:n})}}),i.a.createElement("br",null),i.a.createElement(W.a,{text:"Find",onClick:function(){var e=t;Object(G.getFirstAirportByCountry)(t.state.inputValue,(function(t){N([t.long,t.lat],6)})),Object(G.getAirportsByCountry)(t.state.inputValue,(function(n){console.log(n),null!==n.data&&(clearInterval(t.state.dataUpdateInterval),t.setState({inputValue:"",displayAirportPanel:!0,currentView:e.state.inputValue.toUpperCase(),numAirports:n.num_airports,airportsData:n.data}))}))}})),i.a.createElement(x,null),i.a.createElement(P,null),i.a.createElement(p,null))}}]),e}(a.Component);var J=function(){return Object(l.a)(),i.a.createElement("div",{className:"App"},i.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})),(new Date).getHours(),(y=new v.a.Map(Object(g.a)({container:"Map",style:"mapbox://styles/mapbox/streets-v11",zoom:3,center:[-96,37.8]},"style","mapbox://styles/mapbox/dark-v10"))).on("load",(function(){function t(t){return{type:"FeatureCollection",features:t}}document.getElementById("loader-overlay").classList.add("loader-fade-out"),b((function(e){C=e.length,y.addSource("flightsAll",{type:"geojson",data:t(e)}),y.addLayer({id:"flightsAll",source:"flightsAll",type:"circle",layout:{},paint:{"circle-radius":4,"circle-color":"green"}})})),y.addControl(new v.a.NavigationControl),setInterval((function(){b((function(e){C=e.length,e!=[]&&y.getSource("flightsAll").setData(t(e))}))}),j)})),y.on("load",(function(){E((function(t){A=t.length,y.addSource("flightsGrounded",{type:"geojson",data:{type:"FeatureCollection",features:t}}),y.addLayer({id:"flightsGrounded",source:"flightsGrounded",type:"circle",layout:{},paint:{"circle-radius":4,"circle-color":"red"}})})),setInterval((function(){E((function(t){A=t.length,t!=[]&&y.getSource("flightsGrounded").setData({type:"FeatureCollection",features:t})}))}),j)})),w((function(t){y.on("load",(function(){y.addSource("Airports",{type:"geojson",data:{type:"FeatureCollection",features:t}}),y.addLayer({id:"Airports",source:"Airports",type:"circle",layout:{},paint:{"circle-radius":4,"circle-color":"blue"}})}))}))}},[[51,1,2]]]);
//# sourceMappingURL=main.2f3ee520.chunk.js.map