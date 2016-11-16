define(function() {	
	return {
		debug: true,
		greet: " ",

		encrypt: {
			publicKey: "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7Jat1/19NDxOObrFpW8USTia6\nuHt34Sac1Arm6F2QUzsdUEUmvGyLIOIGcdb+F6pTdx4ftY+wZi7Aomp4k3vNqXmX\nT0mE0vpQlCmsPUcMHXuUi93XTGPxLXIv9NXxCJZXSYI0JeyuhT9/ithrYlbMlyNc\nwKB/BwSpp+Py2MTT2wIDAQAB\n-----END PUBLIC KEY-----"
		},

		share: {
			weibo: {
				appKey: "3063806388",
				url: "http://service.weibo.com/share/share.php"
			},
		},

		project: {
			buildUrl: "http://ide.kenrobot.com/api/build",
			maxCodeLength: 10 * 1024 * 1024,
		},

		//chrome扩展app配置
		chromeExt: {
			//Chrome app id
			appId: "hhgmonhbodfiplppmcangkmlfkcnilpd",

			//串口名字
			serialNameReg : /(USB-SERIAL)|(arduino)|(\/dev\/cu\.usbmodem)/i,

			//烧写速度
			uploadDelay: 250,

			//波特率
			bitRate: 115200,
		},
	};
});