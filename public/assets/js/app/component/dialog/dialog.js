define(['./common', './login', './project', './port', './install', './share', './installDriver'], function(common, login, project, port, install, share, installDriver) {

	function init() {
		common.init();
		login.init();
		project.init();
		port.init();
		install.init();
		share.init();
		installDriver.init();
	}

	return {
		init: init,
	};
});