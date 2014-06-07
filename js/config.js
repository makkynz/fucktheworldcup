

//global configs
var config = null;
var env = window.location.host == 'fucktheworldcup.com' ? 'prd' : 'dev';

var config = {
	
	dev_instagramClientId: 'b3691ccf09e94f0d85dfb01bb7bd907c',
	prd_instagramClientId: 'a1eef0d6dd1b40a4b65e176e8cef4844',
	tags: ['fucktheworldcup','allbacks']

}

//delete properties not needed in current env
for (var prop in config) {
	if(prop.indexOf('dev_') == 0 || prop.indexOf('prd_') == 0){
		if (config.hasOwnProperty(prop) && prop.indexOf(env+'_') == 0) {
        	config[prop.replace(env+'_','')] = config[prop];
    	}
    	delete config[prop];
	}
   
}

