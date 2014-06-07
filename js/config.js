

//global configs
var config = null;
var env = window.location.host == 'fucktheworldcup.com' ? 'prd' : 'dev';

var config = {
	
	dev_instagramClientId: 'b3691ccf09e94f0d85dfb01bb7bd907c',
	prd_instagramClientId: 'a1eef0d6dd1b40a4b65e176e8cef4844'

}

//delete properties not needed in current env
for (var property in config) {
    if (config.hasOwnProperty(property) && property.indexOf(env+'_') == 0) {
        config[property.replace(env+'_','')] = config[property];
    }
    delete config[property];
}

