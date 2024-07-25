/* ###########################################################################

GLOBAL ASSETS RELEASE 2.4

SUN SNIFF & COMMON JS LIB - v5.2

COPYRIGHT SUN MICROSYSTEMS INC. 2007

CONTACT webdesign -at- sun.com WITH ANY QUESTIONS

########################################################################### */

is = new ottosniff();
function ottosniff(){
	var b = navigator.appName
	if (b=="Netscape") this.b = "ns"
	else this.b = b
	this.version = navigator.appVersion
	this.v = parseInt(this.version)
	this.ns = (this.b=="ns" && this.v>=5)
	this.op = (navigator.userAgent.indexOf('Opera')>-1)
	this.safari = (navigator.userAgent.indexOf('Safari')>-1)
	this.op7 = (navigator.userAgent.indexOf('Opera')>-1 && this.v>=7 && this.v<8)
	this.op78 = (navigator.userAgent.indexOf('Opera')>-1 && this.v>=7 || navigator.userAgent.indexOf('Opera')>-1 && this.v>=8)
	this.ie5 = (this.version.indexOf('MSIE 5')>-1)
	this.ie6 = (this.version.indexOf('MSIE 6')>-1)
	this.ie7 = (this.version.indexOf('MSIE 7')>-1)
	this.ie56 = (this.ie5||this.ie6)
	this.iewin = (this.ie56 && navigator.userAgent.indexOf('Windows')>-1 || this.ie7 && navigator.userAgent.indexOf('Windows')>-1)
	this.iemac = (this.ie56 && navigator.userAgent.indexOf('Mac')>-1)
	this.moz = (navigator.userAgent.indexOf('Mozilla')>-1)
	this.ff = (navigator.userAgent.indexOf('Firefox')>-1)
	this.moz13 = (navigator.userAgent.indexOf('Mozilla')>-1 && navigator.userAgent.indexOf('1.3')>-1)
	this.oldmoz = (navigator.userAgent.indexOf('SunOS')>-1 || this.moz13 && !this.ff ||  navigator.userAgent.indexOf('Mozilla')>-1 && navigator.userAgent.indexOf('1.4')>-1 && !this.ff || navigator.userAgent.indexOf('Mozilla')>-1 && navigator.userAgent.indexOf('1.5')>-1 && !this.ff || navigator.userAgent.indexOf('Mozilla')>-1 && navigator.userAgent.indexOf('1.6')>-1 && !this.ff)
	this.anymoz = (this.ff||this.moz)
	this.ns6 = (navigator.userAgent.indexOf('Netscape6')>-1)
	this.docom = (this.ie56||this.ns||this.iewin||this.op||this.iemac||this.safari||this.moz||this.oldmoz||this.ns6)
}

// VARS
ptest="noprint";
var oldmenu = new Array();
var navmenu = new Array();
var a1menus = new Array();
var a1hrefs = new Array();
var imgpreload = new Array();
var preloaderOn = new Array();
var preloaderOff = new Array();
var preloaderActive = new Array();
var activeImg = new Array();
var plx = 0;

// ADD BROWSER CLASS TO BODY
var bodycheck=0;
findbody();
function findbody(){
	var bbod = document.getElementsByTagName('body')[0];
	if (bbod){
		var bclass = "";
		if(is.op){var bclass = "browserOpera ";}
		else if(is.safari){var bclass = "browserSafari ";}
		else if(is.ie56){var bclass = "browserExplorer56 browserExplorer ";}
		else if(is.ie7){var bclass = "browserExplorer7 browserExplorer ";}
		else if(is.iemac){var bclass = "browserExplorerMac ";}
		else if(is.oldmoz){var bclass = "browserOldMoz ";}
		else {var bclass = "";}
		bclass = bclass+"jsenabled";
		addClassName(bbod, bclass);
	}else if(bodycheck < 100){
		bodycheck++;
		setTimeout('findbody();',100);
	}
}

// sniff for various page elements
var kdoc = document;
var sniffStatus = {'a1':false,'pagetitle':false,'sunhome':false}
if(kdoc.getElementById('a0v2') && window.s_account){
	sniffStatus.sunhome = true;
}


// PAGE PREP
function prepSunPage(){
	if (is.docom){
		//copyright
		if(kdoc.getElementById('copyDate')){
			var thisdate = new Date();
			kdoc.getElementById('copyDate').innerHTML = "1994-"+thisdate.getFullYear();
		}
		// no hardcode A2
		if (ptest.indexOf("yesprint") == -1 && ptest.indexOf("prepmenus") == -1 && document.getElementById('mtopic1') && navmenu['1.0']){
			printmenus();
			prepmenus();
		}
		// add actions to global search
		if (kdoc.getElementById('searchfield')){
			kdoc.getElementById('searchfield').onfocus = function(){
				if(kdoc.getElementById('searchfield').value==kdoc.getElementById('searchfield').defaultValue)kdoc.getElementById('searchfield').value='';
				if (!is.iemac){
					kdoc.getElementById('searchfield').style.width='110px';
				}
			};
			kdoc.getElementById('searchfield').onblur = function(){
				if(kdoc.getElementById('searchfield').value=="")kdoc.getElementById('searchfield').value=kdoc.getElementById('searchfield').defaultValue;
				if (!is.iemac){
					kdoc.getElementById('searchfield').style.width='67px'
				}
			};
		}
		// add blur action to logo
		if (kdoc.getElementById('sunlogo')){
			kdoc.getElementById('sunlogo').onfocus = function(){hideA2(0)};
		}
		// add bg spacer gif to off divs in IE for better response
		if(is.ie56 && kdoc.getElementById('offdiv') && kdoc.getElementById('offdivL') && kdoc.getElementById('offdivT') && kdoc.getElementById('offdivR') && imdir && !is.iemac){
			kdoc.getElementById('offdiv').style.background = kdoc.getElementById('offdivL').style.background = kdoc.getElementById('offdivT').style.background = kdoc.getElementById('offdivR').style.background = 'url('+imdir+'/a.gif)';
		}
		//dom crawl
		domCrawl(kdoc);
		// prep homepage
		if (kdoc.getElementById('newsitem2') || kdoc.getElementById('subhover2') || kdoc.getElementById('a0v2')){
			prephome();
			done = true;
		}
		if (typeof postCrawl != 'undefined') {
			for (func in postCrawl) { postCrawl[func](); }
		}
	}
}


//DOM CRAWL
function domCrawl(domObject,tagList){
	if (is.ie5 && !tagList){
		 var tagList = new Array('a','b','div','span','td','li','ul','input','select','img','option','area','a','div','span');
	}else if (!tagList){
		 var tagList = new Array('*');
	}else if (tagList){
		 var tagList = tagList.split(',');
	}
	for (var ivp=0;ivp<tagList.length;ivp++){
		var an = domObject.getElementsByTagName(tagList[ivp]);
		for (var i=0;i<an.length;i++){
			var lcNodeName = an[i].nodeName.toLowerCase();
			if (an[i].className.indexOf('k2over') > -1 || an[i].className.indexOf('k2cl') > -1 || an[i].className.indexOf('a2menu') > -1 || an[i].className.indexOf('k2show') > -1 || an[i].className.indexOf('k2hide') > -1){
				sniffK2(an[i]);
			}else if (sniffStatus.sunhome == true && an[i].className.indexOf('tickeritem') > -1){
				sniffTicker(an[i]);
			}else if (lcNodeName == 'div' && hasClassName(an[i], 'g23')){
				sniffG23(an[i]);
			}else if (lcNodeName == 'a' && hasClassName(an[i], 'media-launch')){
				sniffMedia(an[i]);
			}else if (hasClassName(an[i], 'modal-launch') || hasClassName(an[i], 'modal-close')){
				sniffModal(an[i]);
			}else if (sniffStatus.pagetitle == false && lcNodeName == 'h1' && an[i].parentNode.className.indexOf('pagetitle') > -1){
				sniffStatus.pagetitle = true;
				sniffSharePage(an[i]);
			}else if (lcNodeName == 'input' && hasClassName(an[i], 'autoclear')){
				sniffAutoclear(an[i]);
			}else if (lcNodeName == 'img' && an[i].src.indexOf('_off.') > -1){
				sniffRollover(an[i]);
			}else if (lcNodeName == 'div' && hasClassName(an[i], 'imgbox')){
				sniffImgbox(an[i]);
			}else if (sniffStatus.a1 == false && lcNodeName == 'div' && hasClassName(an[i], 'a1r2')){
				sniffStatus.a1 = true;
				sniffA1(an[i]);
			}else if (lcNodeName == 'select' && hasClassName(an[i], 'goto')){
				sniffGoto(an[i]);
			}else if (lcNodeName == 'ul' && hasClassName(an[i], 'goto')){
				sniffGotoUL(an[i]);
			}else if (hasClassName(an[i], 'xfadefirst')){
				sniffXfade(an[i]);
			}else if (lcNodeName == 'a' && hasClassName(an[i], 'popup') || lcNodeName == 'area' && hasClassName(an[i], 'popup')){
				sniffPopUp(an[i]);
			}else if (lcNodeName == 'a' && hasClassName(an[i], 'imgswap') || lcNodeName == 'area' && hasClassName(an[i], 'imgswap') || lcNodeName == 'img' && hasClassName(an[i], 'imgswap') || lcNodeName == 'span' && hasClassName(an[i], 'imgswap')){
				sniffImgswap(an[i]);
			}
			if(lcNodeName == 'a' && sniffStatus.sunhome == true || lcNodeName == 'area' && sniffStatus.sunhome == true || lcNodeName == 'input' && sniffStatus.sunhome == true){			
				var fn = function(){ OmnitureSetObject(this) };
				addEvent(an[i],"mouseup",fn);
			}
			if (typeof widgets != 'undefined') {
				if (hasClassName(an[i], 'wg1')){
					sniffWg1(an[i]);
				}
			}
		}
	}
}

//GET PARENT
function hasParent(obj,tag ,classname){
	var parent = obj;
    if(classname){
    	while (parent = parent.parentNode) {
	    	if (parent.nodeName.toLowerCase() == tag && hasClassName(parent,classname) || tag == "*" && hasClassName(parent,classname)){
				return parent;
        	}
    	}
	}else{
    	while (parent = parent.parentNode) {
	    	if (parent.id == tag){
				return parent;
        	}
    	}
	}	
}

//OPEN K2
function showK2(popupID,callerID,Xoffset,Yoffset,Zindex,posy,btmup,ort){
	if (is.docom){
			if (popupID.indexOf('flymenu') > -1){
				var oam = popupID;
				oam = (oam.replace(/flymenu(\d)/,"$1") * 1);
				hideA2(oam);
				clrtopic(oam,true);
			}
			var popupObj = document.getElementById(popupID);
			if (!popupObj){
				var popupObj = popupID;
			}
			if(popupID.indexOf('flymenu') > -1 && popupObj.offsetTop > 0 && is.op || popupID.indexOf('offdiv') > -1 && popupObj.offsetTop > 0 && is.op ){
				callerID = null;
			}
			if (callerID){
				var ptop = plft = 0;
				var callerObj = document.getElementById(callerID);
				if (!callerObj){
					var callerObj = callerID;
				}
				
				if (ort == "hLeft"){
					plft = plft - popupObj.offsetWidth;
				}else if (ort == "hMiddleLeft"){
					plft = plft - popupObj.offsetWidth;
					plft = plft + parseInt(callerObj.offsetWidth / 2);
				}else if (ort == "hMiddle"){
					plft = parseInt(callerObj.offsetWidth / 2);
					plft = plft - parseInt(popupObj.offsetWidth / 2);
				}else if (ort == "hMiddleRight"){
					plft = parseInt(callerObj.offsetWidth / 2);
				}else if (ort == "hRight"){
					plft = callerObj.offsetWidth;
				}else if (ort == "hAlignRight"){
					plft = plft + callerObj.offsetWidth - popupObj.offsetWidth;
				}
				
				if (btmup == "vTop"){
					ptop = ptop - popupObj.offsetHeight;
				}else if (btmup == "vMiddle"){
					ptop = ptop + parseInt(callerObj.offsetHeight / 2);
					ptop = ptop - parseInt(popupObj.offsetHeight / 2);
				}else if (btmup == "vBottom"){
					ptop = ptop + callerObj.offsetHeight;
				}else if (btmup == "vAlignBottom"){
					ptop = ptop + callerObj.offsetHeight - popupObj.offsetHeight;
				}else if (btmup == "vAlignTopBottom"){
					var scrolltop = 0;
					if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
						scrolltop = document.body.scrollTop;
					}else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop)){
						scrolltop = document.documentElement.scrollTop;
					}
					var winheight = 0;
					if( typeof( window.innerWidth ) == 'number' ) {
						winheight = window.innerHeight;
					} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
						winheight = document.documentElement.clientHeight;
					}
					var alignbottom = callerObj.offsetHeight - popupObj.offsetHeight;
				}
				
				if (is.op && posy != "a2" || is.safari && posy == "Absolute"){
					if (posy != "Absolute" && posy != "a2"){
						callerObj.style.position = "relative";
					}
					while(callerObj.offsetParent){
						plft = plft + callerObj.offsetLeft;
						ptop = ptop + callerObj.offsetTop;
						callerObj = callerObj.offsetParent;
					}
				}else{
					while(callerObj){
						plft = plft + callerObj.offsetLeft;
						ptop = ptop + callerObj.offsetTop;
						callerObj = callerObj.offsetParent;
					}
				}
				
				if (btmup == "vAlignTopBottom" && ptop > scrolltop + (winheight/2)){
					ptop = ptop + alignbottom;
					Yoffset = Yoffset * -1;
				}
				
				
				plft = plft + Xoffset;
				ptop = ptop + Yoffset;
				
				
				popupObj.style.top=ptop+'px';
				popupObj.style.left=plft+'px';
			}
			if (Zindex){
				popupObj.style.zIndex = Zindex;
			}
			popupObj.style.visibility = "visible";
	}
}




//CLOSE K2
ked = new Array();
function hideK2(popupID,popcls,fader){
	var popupObj = document.getElementById(popupID);
	if (!popupObj){
		var popupObj = popupID;
	}
	popupObj.style.visibility = "hidden";
	if (popcls){
		ked[popupID] = "";
	}
}

//HIDE A2 MENUS
function hideA2(nwf){
	var fa = 1;
	while (typeof flym != "undefined" && flym[fa]){
		if(fa != nwf){
			flym[fa].style.visibility = "hidden";
		}
		clrtopic(fa, null);
		fa++;
	}
	if(nwf == 0){
		flym[0].style.visibility = "hidden";
		flym[1000].style.visibility = "hidden";
		flym[1001].style.visibility = "hidden";
		flym[1002].style.visibility = "hidden";
	}
	clrmenu(null);
}

//ADD OPENED K2s
function addK2(p0,p1,p2,p3,p4,p5,p6,p7){
	if (is.docom){
		ked[p0] = new Array(p0,p1,p2,p3,p4,p5,p6,p7);
	}
}

//MOVE OPENED
window.onresize = function moveK2(){
	for (kdp in ked){
		if (ked[kdp][0]){
			if (is.iemac){
				hideK2(ked[kdp][0]);
			}else{
				showK2(ked[kdp][0],ked[kdp][1],ked[kdp][2],ked[kdp][3],ked[kdp][4],ked[kdp][5],ked[kdp][6],ked[kdp][7]);
			}
		}
	}
	if(typeof flym != "undefined" && flym[1] && is.op){
		var fa = 0;
		while (flym[fa]){
			flym[fa].style.top = "-1500px";
			fa++;
		}
		flym[1000].style.top = "-1500px";
		flym[1001].style.top = "-1500px";
		flym[1002].style.top = "-1500px";
	}
}

// ADD PREPSUNPAGE ONLOAD
if (is.docom){
	if (window.attachEvent){
		window.attachEvent('onload',prepSunPage);
	}else if (window.addEventListener){
		window.addEventListener('load',prepSunPage,false);
	}else if (is.iemac){
		document.onreadystatechange = function(){if (document.readyState == "interactive"){prepSunPage()}};
	}
}

// ADD ONRESIZE EVENTS
function addOnresizeEvent(func){
  var oldrsize = window.onresize;
  if (typeof window.onresize != 'function'){
	window.onresize = func;
  }else {
	window.onresize = function(){
	  oldrsize();
	  func();
	}
  }
}

// ADD CLASSES TO OBJECTS
function addClassName(element, className){
	if (hasClassName(element, className)) { return false; }
	if (!element.className) { element.className = className; }
	else { element.className += ' '+className; }
	return true;
}

// REMOVE CLASSES FROM OBJECTS
function removeClassName(element, className){
	if (!hasClassName(element, className)) { return false; }
	var classNames = element.className.split(' ');
	var newClassNames = [];
	for (var a=0; a<classNames.length; a++){
		if (classNames[a] != className) { newClassNames[newClassNames.length] = classNames[a]; }
	}
	element.className = newClassNames.join(' ');
	return true;
}

// TEST FOR CLASS NAME
function hasClassName(element, className){
	var exp = new RegExp("\\b"+className+"\\b");
	return (element.className && exp.exec(element.className))?true:false;
}

// SHORTCUT FOR BUILDING ELEMENTS
function elem(name, atts, text) {
	// atts passed as obj literal {'id':'foo','class':'bar'}
	var e = document.createElement(name);
	if (atts) {
		for (key in atts) {
			// setAttribute() has shaky support, try direct methods first
			if (key == 'class') { e.className = atts[key]; }
			else if (key == 'id') { e.id = atts[key]; }
			else if (key == 'href') { e.href = atts[key]; }
			else if (key == 'action') { e.action = atts[key]; }
			else if (key == 'method') { e.method = atts[key]; }
			else if (key == 'title') { e.title = atts[key]; }
			else if (key == 'alt') { e.alt = atts[key]; }
			else if (key == 'border') { e.border = atts[key]; }
			else if (key == 'caption') { e.caption = atts[key]; }
			else if (key == 'cellspacing') { e.cellspacing = atts[key]; }
			else { e.setAttribute(key, atts[key]); }
		}
	}
	if (text) {
		e.appendChild(document.createTextNode(text));
	}
	return e;
}

// GRAB JUST THE TEXTUAL DATA OF AN ELEMENT
function elemText(el) {
	// <a id="foo" href="page.html">click <b>here</b></a>
	// elemText(document.getElementById('foo')) == "click here"
	// warning: recurses through *all* descendants of el
	var chlds = el.childNodes;
	var result = '';
	for (var a=0; a<chlds.length; a++) {
		if (3 == chlds[a].nodeType) {
			result += chlds[a].data;
		} else if (1 == chlds[a].nodeType) {
			result += elemText(chlds[a]);
		}
	}
	return result;
}

// SET OPACITY
function setopacity(id_or_obj,opac){
	if (document.getElementById(id_or_obj)){
		var oobj = document.getElementById(id_or_obj);
	}else if(id_or_obj){
		var oobj = id_or_obj;
	}
	if (oobj){
		if (document.all && !is.op){
			oobj.filters.alpha.opacity = opac * 100;
		}else{
			oobj.style.MozOpacity = opac;
			oobj.style.opacity = opac;
		}
	}
}



/*	
	AddEvent()
	See <http://www.dustindiaz.com/rock-solid-addevent/> for more information.
	This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/

//ADD EVENT
function addEvent( obj, type, fn ) {
	if (obj.addEventListener) {
		obj.addEventListener( type, fn, false );
		EventCache.add(obj, type, fn);
	}
	else if (obj.attachEvent) {
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
		EventCache.add(obj, type, fn);
	}
	else {
		obj["on"+type] = obj["e"+type+fn];
	}
}

/*	
	EventCache Version 1.0
	Copyright 2005 Mark Wubben
	Provides a way for automagically removing events from nodes and thus preventing memory leakage.
	See <http://novemberborn.net/javascript/event-cache> for more information.
	This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/

//EVENT CACHE
var EventCache = function(){
	var listEvents = [];
	return {
		listEvents : listEvents,
		add : function(node, sEventName, fHandler){
			listEvents.push(arguments);
		},
		flush : function(){
			var i, item;
			for(i = listEvents.length - 1; i >= 0; i = i - 1){
				item = listEvents[i];
				if(item[0].removeEventListener){
					item[0].removeEventListener(item[1], item[2], item[3]);
				};
				if(item[1].substring(0, 2) != "on"){
					item[1] = "on" + item[1];
				};
				if(item[0].detachEvent){
					item[0].detachEvent(item[1], item[2]);
				};
				item[0][item[1]] = null;
			};
		}
	};
}();

addEvent(window,'unload',EventCache.flush);


// SNIFF -> CROSSFADER
var xfade = new Array();
var xfadeObj = new Array();
var xfadeLoop = new Array();
var xfadeStop = new Array();

function sniffXfade(fobj){
	if ((fobj.id.substring((fobj.id.length - 1),fobj.id.length) * 1) == 1){
		var transparent = false;
		var bgforie;
		var pause = 10000;
		var id =  fobj.id.substring(0,(fobj.id.length - 1));
		var cls = fobj.className.split(' ');
		for (var v=0;v<cls.length;v++){
			if (cls[v].indexOf("pause") == 0){
				pause = cls[v].replace(/pause(.*)$/,"$1");
				pause = pause * 1000;
			}else if (cls[v].indexOf("transparent") == 0){
				transparent = true;			
			}else if (cls[v].indexOf(".jpg") == 0 || cls[v].indexOf(".gif") == 0){
				bgforie = cls[v];			
			}
		}
		var xf = 1;
		while (document.getElementById(id+xf)){
			xfadeObj[id+xf] = new Array(document.getElementById(id+xf),0);
			xfadeObj[id+xf][0].onmouseover = function(){if(xfadeStop[id][0] != -1){xfadeStop[id][0] = 0;}}
			xfadeObj[id+xf][0].onmouseout  = function(){if(xfadeStop[id][0] != -1){xfadeStop[id][0] = 1;}}
			// transparent obj
			if (transparent){
				if (is.oldmoz){
					setopacity(xfadeObj[id+xf][0],1);
					xfadeObj[id+xf][0].style.visibility = "hidden";
				}
				if (bgforie && is.iewin){
					xfadeObj[id+xf][0].style.backgroundImage = 'url('+bgforie+')';
				}
				if (is.oldmoz && xf == 1){
					xfadeObj[id+xf][0].style.visibility = "visible";
				}
			}
			xf++;
		}
		xf--;
		xfade[id] = new Array(xf,1,pause);
		if (document.getElementById(id+'Total')){
			document.getElementById(id+'Total').innerHTML = xf;
		}
		if (document.getElementById(id+'Back')){
			document.getElementById(id+'Back').onclick = function(){
				xfadeStop[id] = new Array(-1,-1);
				clearTimeout(xfadeLoop[id]);
				xfader(id);
				return false;
			};
		}
		if (document.getElementById(id+'Next')){
			document.getElementById(id+'Next').onclick = function(){
				xfadeStop[id] = new Array(-1,1);
				clearTimeout(xfadeLoop[id]);
				xfader(id);
				return false;
			};
		}
		xfadeStop[id] = new Array(1,1);
		xfadeLoop[id] = setTimeout('xfader(\''+id+'\')',pause);
	}
}


// CROSSFADER
function xfader(id){
	// define this/next frame
	var nx = xfade[id][1] + xfadeStop[id][1]; 
	if(nx > xfade[id][0]){
		nx = 1;
	}
	if(nx < 1){
		nx = xfade[id][0];
	}
	var stillfading = false;
	if (xfadeStop[id][0] == 0 && xfadeObj[id+nx][1] != 0){
		var stillfading = true;
	}
	var ox = xfade[id][1];
	if (xfadeObj[id+ox][1] == 0){
		xfadeObj[id+ox][1] = 1;
	}
	if (xfadeStop[id][0] != 0 || stillfading){
		// set up objects
		if (xfadeObj[id+nx][1] == 0){
			if (!is.oldmoz){
				setopacity(xfadeObj[id+nx][0],.1);
			}
			xfadeObj[id+nx][0].style.visibility = "visible";
			xfadeObj[id+ox][0].style.zIndex = 2;
			xfadeObj[id+nx][0].style.zIndex = 10;
		}
		// if skip to next
		if (xfadeStop[id][0] == -1){
			xfadeObj[id+nx][1] = 1;
		}else{
			if (is.safari || is.oldmoz || is.ns6 || is.iemac){
				xfadeObj[id+nx][1] = 1;
			}else{
				xfadeObj[id+nx][1] = xfadeObj[id+nx][1] + .2;
			}
		}
		
		// set opac
		if (is.anymoz && xfadeObj[id+nx][1] == 1){
			if (!is.oldmoz){
				setopacity(xfadeObj[id+nx][0],.99);
			}
		}else{
			setopacity(xfadeObj[id+nx][0],xfadeObj[id+nx][1]);
		}
		// if fading else, complete and pause
		if (xfadeObj[id+nx][1] < 1){
			setTimeout('xfader(\''+id+'\')',120);
		}else{
			xfade[id][1] = nx;
			xfadeObj[id+ox][0].style.visibility = "hidden";
			xfadeObj[id+ox][1] = 0;
			if (document.getElementById(id+'This')){
				document.getElementById(id+'This').innerHTML = nx;
			}
			if (xfadeStop[id][0] != 0){	
				xfadeStop[id] = new Array(1,1);
				xfadeLoop[id] = setTimeout('xfader(\''+id+'\')',xfade[id][2]);
			}
		}
	}
	// if paused
	if(xfadeStop[id][0] == 0){
		clearTimeout(xfadeLoop[id]);
		xfadeLoop[id] = setTimeout('xfader(\''+id+'\')',200);
	}
}

// MAKE THE K4 BOX APPEAR (ALSO SETS FOCUS)
function showK4(id){
	var div = document.getElementById(id);
	if (!div) { return; }
	removeClassName(div, "k4hidden");
	var inputs = div.getElementsByTagName("input");
	for (var a=0;a<inputs.length;a++){
		if (inputs[a].type == 'text'){
			inputs[a].focus();
			break;
		}
	}
	if (is.ie6){
		var selects = document.getElementsByTagName("select");
		for (var a=0;a<selects.length;a++){
			addClassName(selects[a], 'k4in-effect');
		}
	}
}

// MAKE THE K4 BOX DISAPPEAR
function hideK4(id){
	var div = document.getElementById(id);
	addClassName(div, "k4hidden");
	if (is.ie6){
		var selects = document.getElementsByTagName("select");
		for (var a=0;a<selects.length;a++){
			removeClassName(selects[a], 'k4in-effect');
		}
	}
}

// SNIFF -> K2
function sniffK2(fobj){
	var pdoc = document;
	fobj.prp = new Array(0,0,0,"","","");
	fobj.className = fobj.className.replace(/(k2over) +/,"$1-");
	fobj.className = fobj.className.replace(/(k2click) +/,"$1-");
	fobj.className = fobj.className.replace(/(k2close) +/,"$1-");
	var cls = fobj.className.split(' ');
	for (var v=0;v<cls.length;v++){
		if (cls[v].indexOf("k2over") > -1 || cls[v].indexOf("k2click") > -1){
			var p_objs = fobj.aob = cls[v].split('-');
			if (!p_objs[2]){
				fobj.aob[2] = p_objs[2] = p_objs[1];
				fobj.aob[1] = fobj;
			}
			kpop = pdoc.getElementById(p_objs[2]);
			kpop.kp_objs = p_objs[2];
			kpop.kp_trig = p_objs[1];
		}else if (cls[v].indexOf("a2menu") > -1){
			fobj.aob = p_objs = new Array("a2menu","mtopic"+fobj.getAttribute('id').substring(5),fobj.getAttribute('id').substring(5));
			fobj.aob[2] = p_objs[2] = "flymenu"+fobj.aob[2];
			kpop = pdoc.getElementById(p_objs[2]);
			kpop.kp_objs = p_objs[2];
		}else if (cls[v].indexOf("k2close") > -1){
			fobj.aob = cls[v].split('-');
		}else if (cls[v].indexOf("x") == 0){
			fobj.prp[0] = (cls[v].substring(1) * 1) + fobj.prp[0];
		}else if (cls[v].indexOf("y") == 0){
			fobj.prp[1] = (cls[v].substring(1) * 1) + fobj.prp[1];
		}else if (cls[v].indexOf("z") == 0){
			fobj.prp[2] = (cls[v].substring(1) * 1);
		}else if (cls[v].indexOf("pAbsolute") == 0){
			fobj.prp[3] = (cls[v].substring(1));
		}else if (cls[v].indexOf("vBottom") == 0 || cls[v].indexOf("vTop") == 0 || cls[v].indexOf("vMiddle") == 0 || cls[v].indexOf("vAlignTopBottom") == 0){
			fobj.prp[4] = cls[v];
		}else if (cls[v].indexOf("hRight") == 0 || cls[v].indexOf("hMiddleRight") == 0 || cls[v].indexOf("hLeft") == 0 || cls[v].indexOf("hMiddleLeft") == 0 || cls[v].indexOf("hMiddle") == 0 || cls[v].indexOf("hAlignRight") == 0){
			fobj.prp[5] = cls[v];
		}
	}
	if (fobj.aob[0].indexOf("a2menu") > -1){
			fobj.prp[0] = fobj.prp[0] - 20;
			fobj.onmouseover = function(){
				showK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],"a2","vBottom",this.prp[5]);
				showK2('offdiv','mtopics',-110,this.prp[1],"","a2","vBottom","");
				showK2('offdivT','mtopics',-110,this.prp[1],"","a2","vTop","");
				showK2('offdivL','mtopics',0,this.prp[1],"","a2","vMiddle","hLeft");
				showK2('offdivR','mtopics',0,this.prp[1],"","a2","vMiddle","hRight");
			};
			fobj.onfocus = function(){
				if(!is.op){
					showK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],"a2","vBottom",this.prp[5]);
				}
			};
			fobj.onclick = function(){
				if(window.s_account && this.getAttribute('title')){
					s_linkType='o';
					s_linkName='Masthead Menu: '+this.getAttribute('title');
					s_prop15=s_pageName;
					s_prop16=this.getAttribute('title');
					s_lnk=s_co(this);s_gs(s_account);
				}
			};
	}else if (fobj.aob[0].indexOf("k2over") > -1){
		fobj.onmouseover = function(){showK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],this.prp[3],this.prp[4],this.prp[5])};
		if (!hasClassName(fobj, "mOverOff")){
			kpop.onmouseover = function(){showK2(this.kp_objs)};
		}
		kpop.onmouseout = function(){hideK2(this.kp_objs)};
		fobj.onmouseout = function(){hideK2(this.aob[2])};
		fobj.onfocus = function(){showK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],this.prp[3],this.prp[4],this.prp[5])};
		fobj.onblur = function(){hideK2(this.aob[2])};
	}else if (fobj.aob[0] == "k2click"){
		fobj.onclick = function(){
			showK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],this.prp[3],this.prp[4],this.prp[5]);
			addK2(this.aob[2],this.aob[1],this.prp[0],this.prp[1],this.prp[2],this.prp[3],this.prp[4],this.prp[5]);
			return false;
		};
	}else if (fobj.aob[0] == "k2close"){
		fobj.onclick = function(){hideK2(this.aob[1],1);return false};
	}
	fobj.className = fobj.className.replace(/(k2over)-|(k2cl...)-/,"$1 ");
}

// SNIFF -> TICKER
function sniffTicker(fobj){
	fobj.omni = fobj.innerHTML;
	fobj.onclick = function(){
		s_linkType='o';
		s_linkName='ticker';
		s_prop15=s_pageName;
		s_prop16=this.omni;
		s_lnk=s_co(this);
		s_gs(s_account);
	};
}

// SNIFF -> G23
function sniffG23(fobj){
	var uls = fobj.getElementsByTagName('ul');
	for (var a=0;a<uls.length;a++){
		if (hasClassName(uls[a], 'g23tree')){
			var tree = uls[a];
			var lis = tree.getElementsByTagName('li');
			for (var b=0;b<lis.length;b++){
				var li = lis[b];
				var isDefaultExpanded = hasClassName(li, 'default-expanded');
				var isBranch = false;
				if (li.getElementsByTagName('ul').length>0){
					// it's a branch if there's a nested <ul>
					if (isDefaultExpanded) { addClassName(li, 'branch'); }
					else { addClassName(li, 'collapsed branch'); }
					isBranch = true;
				}
				var isLast = true;
				if (li.nextSibling){
					if (li.nextSibling.nodeType == 1) { isLast = false; }
					else if (li.nextSibling.nextSibling && li.nextSibling.nextSibling.nodeType == 1) { isLast = false; }
				}
				if (isLast) { addClassName(li, 'last'); }
				if (is.ie6) { li.isLast = isLast; li.isBranch = isBranch; }
				if (is.ie6 && li.isLast && li.isBranch && isDefaultExpanded) { addClassName(li, 'ie-expanded-last'); }
				else if (is.ie6 && li.isLast && li.isBranch && !isDefaultExpanded) { addClassName(li, 'ie-collapsed-last'); }
				if (isBranch){
					// build the expand/collapse button
					var link = document.createElement('a');
					link.className = 'g23toggler';
					var linkContent = document.createElement('img');
					linkContent.src = '/im/a.gif';
					linkContent.height = '10';
					linkContent.width = '20';
					linkContent.alt = 'expand / collapse ';
					link.appendChild(linkContent);
					link.onclick = function(){
						if (!hasClassName(this.parentNode, 'collapsed')){
							addClassName(this.parentNode, 'collapsed');
							if (is.ie6 && this.parentNode.isLast && this.parentNode.isBranch){
								addClassName(this.parentNode, 'ie-collapsed-last');
								removeClassName(this.parentNode, 'ie-expanded-last');
							}
						}else {
							removeClassName(this.parentNode, 'collapsed');
							if (is.ie6 && this.parentNode.isLast && this.parentNode.isBranch){
								removeClassName(this.parentNode, 'ie-collapsed-last');
								addClassName(this.parentNode, 'ie-expanded-last');
							}
						}
					};
					li.insertBefore(link, li.firstChild);
					if (hasClassName(tree, 'g23check-tree')){
						// build the indicator of how many children are checked
						var countSpan = document.createElement('span');
						countSpan.className = 'g23checked-count';
						for (var c=0;c<li.childNodes.length;c++){
							if (li.childNodes[c].nodeName.toLowerCase()=='ul') { li.sublist = li.childNodes[c]; }
							if (hasClassName(li.childNodes[c], 'g23item-extra-info')) { li.extraInfo = li.childNodes[c]; }
						}
						if (li.extraInfo) { li.insertBefore(countSpan, li.extraInfo); }
						else if (li.sublist) { li.insertBefore(countSpan, li.sublist); }
						li.countSpan = countSpan;
						countSpan.appendChild(document.createTextNode(' ')); // space, rather than empty string, for safari
						if (window.opera) { countSpan.innerHTML = '&nbsp;'; } // tickle opera!
						li.updateCount = function(){
							var count = 0;
							var inputs = this.sublist.getElementsByTagName('input');
							for (var b=0; b<inputs.length; b++){
								if (inputs[b].type != 'checkbox') { continue; }
								if (inputs[b].checked) { count++; }
							}
							inputs = null;
							if (this.countSpan){
								if (count  < 1) { this.countSpan.firstChild.data = ' '; if (window.opera) { this.countSpan.innerHTML = '&nbsp;'; } } // safari space, tickle opera
								if (count == 1) { this.countSpan.firstChild.data = '(1 checked item not shown)'; }
								if (count  > 1) { this.countSpan.firstChild.data = '('+count+' checked items not shown)'; }
							}
						}
					}
				}
				li = null;
			}
			if (hasClassName(tree, 'g23check-tree')){
				var inputs = tree.getElementsByTagName('input');
				for (var b=0; b<inputs.length; b++){
					if (inputs[b].type != 'checkbox') { continue; }
					if (inputs[b].parentNode.nodeName.toLowerCase() == 'li') { inputs[b].parentNode.checkBox = inputs[b]; }
					inputs[b].onclick = function(){
						var parent = this.parentNode;
						if (parent.nodeName.toLowerCase()=='li'){
							var subinputs = parent.getElementsByTagName('input');
							for (var c=0;c<subinputs.length;c++){
								subinputs[c].checked = this.checked;
							}
							var subitems = parent.getElementsByTagName('li');
							for (var c=0;c<subitems.length;c++){
								if (typeof subitems[c].updateCount == 'function') { subitems[c].updateCount(); }
							}
							if (!this.checked){
								parent = this;
								while (parent.parentNode){
									parent = parent.parentNode;
									if (parent.checkBox) { parent.checkBox.checked = false; }
								}
							}else if (parent.parentNode.parentNode.checkBox){
								subinputs = parent.parentNode.parentNode.getElementsByTagName('input');
								var allChecked = true;
								for (var c=0;c<subinputs.length;c++){
									if (subinputs[c].type != 'checkbox') { continue; }
									if (subinputs[c] != parent.parentNode.parentNode.checkBox && !subinputs[c].checked) { allChecked = false; }
								}
								parent.parentNode.parentNode.checkBox.checked = allChecked;
							}
						}
						parent = this;
						while (parent.parentNode){
							parent = parent.parentNode;
							if (typeof parent.updateCount == 'function') { parent.updateCount(); }
						}
						parent = null;
					}
				}
				if (location.hash){
					var target = location.hash.substring(1);
					for (var b=0;b<lis.length;b++){
						var li = lis[b];
						if (li.id == target){
							var inputs = li.getElementsByTagName('input');
							for (var c=0; c<inputs.length; c++){
								if (inputs[c].type != 'checkbox') { continue; }
								inputs[c].checked = true;
							}
							var el = li;
							while (el.parentNode && !hasClassName(el, 'g23tree')){
								if (el.nodeName.toLowerCase() == 'li' && hasClassName(el, 'branch')){
									removeClassName(el, 'collapsed');
									if (is.ie6 && el.isLast && el.isBranch){
										removeClassName(el, 'ie-collapsed-last');
										addClassName(el, 'ie-expanded-last');
									}
								}
								el = el.parentNode;
							}
							var subitems = li.getElementsByTagName('li');
							for (var c=0;c<subitems.length;c++){
								if (hasClassName(subitems[c], 'branch')){
									removeClassName(subitems[c], 'collapsed');
									if (is.ie6 && subitems[c].isLast && subitems[c].isBranch){
										removeClassName(subitems[c], 'ie-collapsed-last');
										addClassName(subitems[c], 'ie-expanded-last');
									}
								}
							}
							inputs = null;
							el = null;
						}
					}
				}
				for (var b=0;b<lis.length;b++){
					var li = lis[b];
					if (typeof li.updateCount == 'function') { li.updateCount(); }
					li = null;
				}
			}
			tree = null;
		}
	}
}

// SNIFF -> MEDIA SHELL
function sniffMedia(fobj){
	fobj.onclick = function(e){
		var target = (this.target) ? this.target : "_media_window";
		var params = 'top=0,left=0,width=662,height=643,resizable';
		var mediaWin = window.open(this.href, target, params);
		mediaWin.focus();
		return false;
	};
}

// SNIFF -> MODAL POP UPS
function sniffModal(fobj){
	if (hasClassName(fobj, "modal-launch")){
		var matches = fobj.className.match(/launch\-id\-([a-z0-9_-]+)/);
		if (!matches) { return; }else { fobj.modalId = matches[1]; }
		fobj.onclick = function(e){
			showK4(this.modalId);
			return false;
		};
	}else{
		fobj.onclick = function(e){
			var k4 = this.parentNode;
			while (!hasClassName(k4, 'k4') && k4.parentNode) { k4 = k4.parentNode; }
			if (hasClassName(k4, 'k4') && k4.id) { hideK4(k4.id); }
			return false;
		};
	}
}

// SNIFF -> AUTOCLEAR
function sniffAutoclear(fobj){
	fobj.onfocus = function(){
		if(this.value == this.defaultValue){
			this.value='';
		};
	};
	fobj.onblur = function(){
		if(this.value==''){
			this.value = this.defaultValue;
		}
	};
}

// SNIFF -> ROLLOVERS
function sniffRollover(fobj){
	fobj.rsrc = fobj.src;
	preloaderOff[fobj.rsrc] = new Image();
	preloaderOff[fobj.rsrc].src = fobj.rsrc;
	if (hasClassName(fobj, "rollover")){
	  preloaderOn[fobj.rsrc] = new Image();
	  preloaderOn[fobj.rsrc].src = fobj.src.replace(/_off\./,"_on.");
	  fobj.onmouseout = function(){
		  if (activeImg[this.imgGroup] != this){
			  this.src = preloaderOff[this.rsrc].src
		  }
	  };
		fobj.onmouseover = function(){
			if (activeImg[this.imgGroup] != this){
				this.src = preloaderOn[this.rsrc].src
			}
		};
	}
	if (fobj.className.indexOf("active-") > -1){
	  fobj.imgGroup = fobj.className;
	  fobj.imgGroup = fobj.imgGroup.replace(/.*active-(.*).*/,"$1");
	  preloaderActive[fobj.rsrc] = new Image();
	  preloaderActive[fobj.rsrc].src = fobj.src.replace(/_off\./,"_active.");
	  if (fobj.className.indexOf("setactive-") > -1){
		  activeImg[fobj.imgGroup] = fobj;
		  fobj.src = preloaderActive[fobj.rsrc].src;
	  }
	  fobj.onclick = function(){
			if (this.src != preloaderActive[this.rsrc].src){
				this.src = preloaderActive[this.rsrc].src;
				if (activeImg[this.imgGroup]){
					activeImg[this.imgGroup].src = preloaderOff[activeImg[this.imgGroup].rsrc].src;
				}
				activeImg[this.imgGroup] = this;
			}
		};
	}
}

// SNIFF -> A1 menus
function sniffA1(fobj){
	var alinks = fobj.getElementsByTagName('a');
	var a1divs = '';
	for (var a=0;a<alinks.length;a++){
		var thishref = /^ *(.*) *$/.exec(alinks[a].innerHTML);
		for (i in a1hrefs){
			for (ai in a1hrefs[i]){
				if (a1hrefs[i][ai] == thishref[1]){
					if (hasClassName(alinks[a], "a1cart")){
							alinks[a].innerHTML = '<span class="carticon">&#160;</span>'+alinks[a].innerHTML;
					}
					addClassName(alinks[a], 'k2over-'+i);
					addClassName(alinks[a], 'y3');
					addClassName(alinks[a], 'x-10');
					if (a1menus[i]){
						var outw = (a1menus[i][0] * 1) + 22;
						var w0 = a1menuwrap[0].replace(/set_outerwidth/,'style="width:'+outw+'px;min-width:'+outw+'px;"');
						var w1 = a1menuwrap[1].replace(/set_width/,'style="width:'+a1menus[i][0]+'px;min-width:'+a1menus[i][0]+'px;"');
						var w1 = w1.replace(/set_outerwidth/,'style="width:'+outw+'px;min-width:'+outw+'px;"');
						var w2 = a1menuwrap[2].replace(/set_outerwidth/,'style="width:'+outw+'px;min-width:'+outw+'px;"');
						a1divs = a1divs+w0+i+w1+a1menus[i][1]+w2;
						a1menus[i] = false;
					}
				}
			}
		}
	}
	if (a1divs != ''){
		fobj.innerHTML = fobj.innerHTML+a1divs;
	}
}

// SNIFF -> PopUps
function sniffPopUp(fobj){
	addEvent(fobj,"click",function(e){
		var popW = '800';
		var popH = '600';
		var param = new Array('no',0,0,0,0,0,0,'','');
		var popUrl = fobj.href;
		if (fobj.target){
			var popTarget = fobj.target;
		}else{
			var popTarget = "newpopup";
		}
		var cls = fobj.className.split(' ');
		for (var v=0;v<cls.length;v++){
			if (cls[v].search('[0-9]+x[0-9]+') > -1){
				var f = cls[v].split('x');
				popW = f[0];
				popH = f[1];
			}else if(cls[v].indexOf("name-") == 0){
				var f = cls[v].split('name-');
				popTarget = f[1];
			}else if(cls[v] == "scrolling"){
				var param = new Array('yes',1,0,0,0,0,0);
			}else if(cls[v] == "full"){
				var param = new Array('yes',1,1,1,1,1,1);
			}else if(cls[v].indexOf("yes_") == 0 || cls[v].indexOf("no_") == 0){
				var f = cls[v].split('_');
				f[1] = "f"+f[1];
				var param = f[1].split('');
				param[0] = f[0];
			}		

			if(fobj.className.indexOf("centerpop") > 1){
				param[7] = screen.availHeight/2 - popH/2;
				param[8] = screen.availWidth/2 - popW/2;
 			}
	
		}
		openPopup(popUrl,popTarget,popW,popH,param[0],param[1],param[2],param[3],param[4],param[5],param[6],param[7],param[8]);
		if (is.ie56) {
			e.returnValue=false;
		}else{
			e.preventDefault();
		}
	});
}

// GENERIC POP UP 
function openPopup(url,name,width,height,resizable,scrollbars,menubar,toolbar,location,directories,status,top,left) {
	if(top && left){
		var tl = ',top=' + top +',left=' + left;
	}else{
		var tl = '';
	}
	popup = window.open(url, name, 'width=' + width + ',height=' + height + ',resizable=' + resizable + ',scrollbars=' + scrollbars	+ ',menubar=' + menubar + ',toolbar=' + toolbar + ',location=' + location + ',directories=' + directories + ',status=' + status+tl);
	popup.focus();
	return false;
}


// SNIFF -> goto menu
function sniffGoto(fobj){
	var fn = function(){
		if(this.options[this.selectedIndex].value != "" && this.options[this.selectedIndex].getAttribute("value")){
			document.location = this.options[this.selectedIndex].value;
		}
	};

	addEvent(fobj,"change",fn);
	// homepage + omniture
	if(window.s_account && document.getElementById('a0v2')){
		var fn = function(){
			if(this.options[this.selectedIndex].value != "" && this.options[this.selectedIndex].getAttribute("value")){
				var p = hasParent(fobj,'div','b7sect');
				set_sobj('B7-'+p.id+'-Menu-'+this.options[this.selectedIndex].text);
			}
		};
		addEvent(fobj,"change",fn);
	}
}

// SNIFF -> goto UL menu
function sniffGotoUL(fobj){
	var li = fobj.getElementsByTagName('li');
	var options = "";
	var form = document.createElement('form');
	fobj.parentNode.insertBefore(form, fobj);
	form.action = '';
	for (var n=0;n<li.length;n++){
		if (li[n].getElementsByTagName('a')[0]){
			options = options+'<option value="'+li[n].getElementsByTagName('a')[0].href+'">'+li[n].getElementsByTagName('a')[0].innerHTML+'</option>';
		}else if (li[n].innerHTML){
			options = options+'<option value="">'+li[n].innerHTML+'</option>';
		}
	}
	form.innerHTML = '<select class="goto">'+options+'</select>';
	fobj.parentNode.removeChild(fobj);
}

// SNIFF -> IMG BOX & IMG ZOOM
var zimg = 1;
function sniffImgbox(imgdiv){
	var img = imgdiv.getElementsByTagName('img')[0];	
	var bgimg = 'url('+img.src+') no-repeat';
	imgdiv.style.background  = bgimg;
	img.src = imdir+'/a.gif';
	
	if (hasClassName(imgdiv,'imgcorners')){
		imgdiv.innerHTML = '<div class="imgw1"><div class="imgw2"><div class="imgw3"><div class="imgw4">'+imgdiv.innerHTML+'</div></div></div></div>';
	}
	if (hasClassName(imgdiv,'imgzoom')){
		var lgimg = imgdiv.getElementsByTagName('a')[0].href;
		var alink = imgdiv.getElementsByTagName('a')[0];
		var lgDiv = document.createElement('div');
		lgDiv.className = 'zoomimg k2';
		lgDiv.id = 'zoomimg'+zimg;
		var lgImg = document.createElement('img');
		lgImg.src = lgimg;
		lgDiv.appendChild(lgImg);
		imgdiv.appendChild(lgDiv);
		
		if (hasClassName(imgdiv,'imgright')){
			imgdiv.className = imgdiv.className+' hAlignRight x10';
		}else{
			imgdiv.className = imgdiv.className+' x-10';
		}
		imgdiv.className = imgdiv.className+' vAlignTopBottom y-10 k2over-zoomimg'+zimg;
		sniffK2(imgdiv);
		zimg++;
		alink.onclick = function(){return false;}
	}
}

// SNIFF -> SHARE THIS PAGE
function sniffSharePage(h1) {
	if (is.ie5) { return; }
	if (typeof shareComp == 'undefined') { return; }
	var titleDiv = h1.parentNode;
	var shareDiv = document.createElement('div');
	shareDiv.className = 'sharepage';
	shareDiv.innerHTML = shareComp;
	titleDiv.id='sharepage';
	titleDiv.appendChild(shareDiv);
	if (is.ie6) {
		addEvent(shareDiv, 'mouseover', function(e){addClassName(this, 'hover')});
		addEvent(shareDiv, 'mouseout', function(e){removeClassName(this, 'hover')});
		ul = shareDiv.getElementsByTagName('ul')[0];
		ul.style.width = (26 * ul.getElementsByTagName('li').length) + 'px';
	}
	var links = shareDiv.getElementsByTagName('a');
	if (typeof window.s_co!='undefined') {
		for (var a=0; a<links.length; a++) {
			addEvent(links[a], 'click', function(e) {
				s_linkType='o';
				s_linkName=this.href;
				s_lnk=s_co(this);
				s_gs(s_account);
			});
		}
	}
}

// SNIFF -> IMG SWAP
function sniffImgswap(link) {
	if (link.src){
		imgpreload[link.id] = new Image();
		imgpreload[link.id].src = link.src;
	}else{
		link.imgref = link.className.replace(/[^ ]* ?([^ ]+_\d).*/,"$1").split('_');
		link.src = document.getElementById(link.imgref[0]).src.replace(/_\d+\./,"_"+link.imgref[1]+".");
		imgpreload[link.src] = new Image();
		imgpreload[link.src].src = link.src;
		if (!hasClassName(link,'swapOnclick')){
			link.onmouseover = function(){
				document.getElementById(this.imgref[0]).src = imgpreload[this.src].src;
			}	
			link.onmouseout = function(){
				document.getElementById(this.imgref[0]).src = imgpreload[this.imgref[0]].src;
			}
			if (!hasClassName(link,'followLink')){
				link.onclick = function(){return false;}
			}
		}else{
			link.onclick = function(){
				imgpreload[this.imgref[0]].src = document.getElementById(this.imgref[0]).src = imgpreload[this.src].src;
				return false;
			}	
		}
	}	
}
