/**
 * back.js top
 * Top level where global services are defined.
 * 
 * author:	Truong Dao
 * date:	Aug 2015
 * ver:		1.0
 */

/*home path from user's view*/
var __backHome;


/*    S E R V I C E S   R E G I S T E R                                      */


function backServicesIntro(){
	alert('this is back services');
}

var back = {
		'data': {
			'back': {
				'info'	: 'back.js v1.0 by Truong Dao',
				'home_dir'	:	__backHome
			}
		},
		'services': {
			/* invoke a js library whose path start from root '/' */
			'include': function(abs_path, callback){
			    var h = document.getElementsByTagName('head')[0];
			    var s = document.createElement('script');
			    s.id =	'__backjs';
			    s.type = 'text/javascript';
			    s.src = __backHome + abs_path;
			    s.onreadystatechange = callback;
			    s.onload = callback;
			    h.appendChild(s);
			},
			'backServicesIntro': backServicesIntro
		}
};

/*    W H E N   B A C K   S E R V I C E S   W E R E   L O A D E D            */

vWhenBackServicesLoaded();

/*    E N D   O F   B A C K . J S                                            */
