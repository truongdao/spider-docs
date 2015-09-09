/**
 * 
 */	
	
	loadCssFile(back.data.back.home_dir+'common/style.css');
	back.services.include('common/site_json.js', renderSiteWrapper);
	
function renderSiteWrapper(){
	var section = document.getElementById('content');
	
	//1. create elements
	var footer = document.createElement("footer");
	var header = document.createElement("header");
	var nav = document.createElement("nav");
	var address = document.createElement("div");
	footer.id = 'footer';
	header.id = 'header';
	nav.id = 'nav';
	address.id = 'address';
	
	//2. compose contents
	composeHeaderBar(header);
	composeLeftsideBar(nav);
	composeFootBar(footer);
	composeAddressBar(address);
	
	//3. re-layout section

	section.insertBefore(address ,section.firstChild);
	document.body.insertBefore(nav, section);
	document.body.insertBefore(header, nav);
	document.body.appendChild(footer);	

};


/*****************************************************************************/
/*    U T I L   F U N C T I O N S                                            */
/*****************************************************************************/

function loadCssFile(cssPath) {
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = cssPath;
    var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
}

function composeHeaderBar(obj){
	var _content=
			'<h1><a style="text-decoration:none;color:cyan" href="'+ 
			back.data.back.home_dir+ back.data.site.header.home +'">' +
			back.data.site.header.prj_name +
			'</a></h1>';
	obj.innerHTML = _content;
}

function composeLeftsideBar(obj){
	var leftside_json = back.data.site.leftside_json;
	var leftside_tag = obj;
	var	output = '<ul class="ul-sidebar">\n';
	
	for(var k in leftside_json){
		var link = leftside_json[k];
		if(link==null) link = 'javascript:void(0);';
		else link = back.data.back.home_dir + link;
		output += '<li style="list-style-type: none" ><a style="text-decoration:none" href="'+link + '">' + k +'</a></li>\n';
	}

	output += '</ul>\n';
	leftside_tag.innerHTML = output;
}


function composeFootBar(obj){
	var _content="Copyright © 2015 Truong Dao";
	obj.innerHTML = _content;
}

function composeAddressBar(obj){
	var paths = window.location.href.split('/');
	var acc_link = back.data.back.home_dir;
	var step2Home = acc_link.split('/').length;
	
	var str='';
	for(var i =paths.length - step2Home; i< paths.length-1; i+=1){
		acc_link = acc_link+paths[i]+'/';
		str += '<a style="text-decoration:none" href="'+
		acc_link+
		'ls-all.html"'+'>'+
		paths[i]+'</a>'+
		' &rsaquo; ';
	}
	str+= '<a style="text-decoration:none" href="'+
			window.location.href+'">'+paths.pop()+'</a>';
	obj.innerHTML = str;
	obj.style.height = '45px';
	obj.style.fontSize = '75%';
}
