define(['vendor/jquery', './userModel'], function($1, userModel) {

	function get(key, type) {
		type = type || "id";

		var data = {};
		data.user_id = userModel.getUserId();

		if (type == "hash") {
			data.type = type;
			data.hash = key;
		} else if (type == "last") {
			data.type = 'last';
		} else {
			data.id = key;
		}

		return $.ajax({
			type: 'POST',
			url: '/api/project/get',
			data: data,
			dataType: 'json',
		});
	}

	function getAll() {
		return $.ajax({
			type: 'POST',
			url: '/api/projects/user',
			data: {
				user_id: userModel.getUserId(),
			},
			dataType: 'json',
		});
	}

	function getSchema() {
		var schema = {
			hardware: {
				boards: [{
					label: "KenBlock",
					name: "KenBlock",
					tags: ["KenBlock"],
					pins: [{
						uid: "c9168884-b454-4342-b677-f06dacb0b3cc",
						width: 34,
						height: 22,
						x: 0.417,
						y: 0.842,
						name: "2",
						tags: ["digital"],
						overlay: [0.5, -0.5]
					}, {
						uid: "55798942-05de-4d9c-82e8-ddced2259aec",
						width: 34,
						height: 22,
						x: 0.466,
						y: 0.842,
						name: "3",
						tags: ["digital", "analog-out"],
						overlay: [0.5, -0.5]
					}, {
						uid: "c297515b-2a2d-4b5c-96a8-e740d83a75ce",
						width: 34,
						height: 22,
						x: 0.515,
						y: 0.842,
						name: "8",
						tags: ["digital"],
						overlay: [0.5, -0.5]
					}, {
						uid: "86624d9f-0ddb-4356-8664-0afc9223e12e",
						width: 34,
						height: 22,
						x: 0.564,
						y: 0.842,
						name: "9",
						tags: ["digital", "analog-out"],
						overlay: [0.5, -0.5]
					}, {
						uid: "e29d477e-8923-40c2-8922-af988a78811f",
						width: 34,
						height: 22,
						x: 0.613,
						y: 0.842,
						name: "10",
						tags: ["digital", "analog-out"],
						overlay: [0.5, -0.5]
					}, {
						uid: "08001087-da26-451b-b124-5c100d928201",
						width: 34,
						height: 22,
						x: 0.662,
						y: 0.842,
						name: "11",
						tags: ["digital", "analog-out"],
						overlay: [0.5, -0.5]
					}, {
						width: 34,
						height: 22,
						x: 0.417,
						y: 0.157,
						name: "A0",
						tags: ["analog-in"],
						uid: "7186a1cf-2fab-4c5a-8d1e-19836d4a561d",
						overlay: [0.5, 1.5]
					}, {
						uid: "7c10ef7d-a65e-497d-868a-b9c2e43bea81",
						width: 34,
						height: 22,
						x: 0.466,
						y: 0.157,
						name: "A1",
						tags: ["analog-in"],
						overlay: [0.5, 1.5]
					}, {
						uid: "15ad5a73-f510-44bc-b4ac-5886a8211d38",
						width: 34,
						height: 22,
						x: 0.515,
						y: 0.157,
						name: "A2",
						tags: ["analog-in"],
						overlay: [0.5, 1.5]
					}, {
						uid: "129d8693-115f-40c4-a6c1-4315bd020254",
						width: 34,
						height: 22,
						x: 0.564,
						y: 0.157,
						name: "A3",
						tags: ["analog-in"],
						overlay: [0.5, 1.5]
					}, {
						uid: "d679b1cd-91d4-4aed-8f6f-6ad31d041518",
						width: 34,
						height: 22,
						x: 0.613,
						y: 0.157,
						name: "A6",
						tags: ["analog-in"],
						overlay: [0.5, 1.5]
					}, {
						uid: "15c50e12-8705-4d47-803d-5c50b7512981",
						width: 34,
						height: 22,
						x: 0.662,
						y: 0.157,
						name: "A7",
						tags: ["analog-in"],
						overlay: [0.5, 1.5]
					}, {
						uid: "ed9cbaec-e3fb-4acb-87d9-c4825bb5594c",
						width: 40,
						height: 21.2,
						x: 0.364,
						y: 0.844,
						name: "USART",
						tags: ["serial"],
						overlay: [0.5, -0.5]
					}, {
						uid: "e6f796e0-d283-41d3-a996-7316acb2c4cc",
						width: 40,
						height: 20,
						x: 0.364,
						y: 0.156,
						name: "IIC",
						tags: ["iic"],
						overlay: [0.5, 1.5]
					}, {
						uid: "cc94cecf-1424-4352-8309-474a814981f5",
						width: 40,
						height: 18,
						x: 0.733,
						y: 0.707,
						name: "IIC",
						tags: ["iic"],
						overlay: [0.5, 1.5],
						rotate: true
							//  给这个IIC 加了一个旋转s
					}, {
						uid: "0ae7f137-66e0-437a-998f-c71a2ec62c3b",
						width: 18,
						height: 54,
						x: 0.733,
						y: 0.324,
						name: "MA",
						tags: ["motor"],
						overlay: [0.5, 1.5]
					}, {
						uid: "ee0399c9-2700-4456-96e1-47803c1ff60a",
						width: 18,
						height: 54,
						x: 0.733,
						y: 0.53,
						name: "MB",
						tags: ["motor"],
						overlay: [0.5, 1.5]
					}]
				}, {
					label: "KenBlock-ATmega328",
					name: "KenBlock-ATmega328",
					tags: ["KenBlock-ATmega328"],
					pins: [{
							uid: "c9168884-b454-4342-b677-f06dacb0b3cc",
							width: 33,
							height: 20,
							x: 0.163,
							y: 0.837,
							name: "2",
							tags: ["digital", "analog-out"],
							overlay: [0.5, -0.5]
						}, {
							uid: "55798942-05de-4d9c-82e8-ddced2259aec",
							width: 32,
							height: 20,
							x: 0.211,
							y: 0.837,
							name: "3",
							tags: ["digital", "analog-out"],
							overlay: [0.5, -0.5]
						}, {
							uid: "c297515b-2a2d-4b5c-96a8-e740d83a75ce",
							width: 33,
							height: 20,
							x: 0.26,
							y: 0.837,
							name: "8",
							tags: ["digital", "analog-out"],
							overlay: [0.5, -0.5]
						}, {
							uid: "86624d9f-0ddb-4356-8664-0afc9223e12e",
							width: 33,
							height: 20,
							x: 0.309,
							y: 0.837,
							name: "9",
							tags: ["digital", "analog-out"],
							overlay: [0.5, -0.5]
						}, {
							uid: "e29d477e-8923-40c2-8922-af988a78811f",
							width: 33,
							height: 20,
							x: 0.358,
							y: 0.837,
							name: "10",
							tags: ["digital", "analog-out"],
							overlay: [0.5, -0.5]
						}, {
							uid: "08001087-da26-451b-b124-5c100d928201",
							width: 33,
							height: 20,
							x: 0.407,
							y: 0.837,
							name: "11",
							tags: ["digital", "analog-out"],
							overlay: [0.5, -0.5]
						}, {
							width: 33,
							height: 20,
							x: 0.163,
							y: 0.162,
							name: "A0",
							tags: ["analog-in"],
							uid: "7186a1cf-2fab-4c5a-8d1e-19836d4a561d",
							overlay: [0.5, 1.5]
						}, {
							uid: "7c10ef7d-a65e-497d-868a-b9c2e43bea81",
							width: 34,
							height: 20,
							x: 0.211,
							y: 0.162,
							name: "A1",
							tags: ["analog-in"],
							overlay: [0.5, 1.5]
						}, {
							uid: "15ad5a73-f510-44bc-b4ac-5886a8211d38",
							width: 33,
							height: 20,
							x: 0.26,
							y: 0.162,
							name: "A2",
							tags: ["analog-in"],
							overlay: [0.5, 1.5]
						}, {
							uid: "129d8693-115f-40c4-a6c1-4315bd020254",
							width: 33,
							height: 20,
							x: 0.309,
							y: 0.162,
							name: "A3",
							tags: ["analog-in"],
							overlay: [0.5, 1.5]
						}, {
							uid: "d679b1cd-91d4-4aed-8f6f-6ad31d041518",
							width: 33,
							height: 20,
							x: 0.358,
							y: 0.162,
							name: "A6",
							tags: ["analog-in"],
							overlay: [0.5, 1.5]
						}, {
							uid: "15c50e12-8705-4d47-803d-5c50b7512981",
							width: 33,
							height: 20,
							x: 0.408,
							y: 0.162,
							name: "A7",
							tags: ["analog-in"],
							overlay: [0.5, 1.5]
						}, {
							uid: "ed9cbaec-e3fb-4acb-87d9-c4825bb5594c",
							width: 40,
							height: 20,
							x: 0.11,
							y: 0.837,
							name: "USART",
							tags: ["serial"],
							overlay: [0.5, -0.5]
						}, {
							uid: "e6f796e0-d283-41d3-a996-7316acb2c4cc",
							width: 40,
							height: 20,
							x: 0.11,
							y: 0.162,
							name: "IIC",
							tags: ["iic"],
							overlay: [0.5, 1.5]
						}, {
							uid: "cc94cecf-1424-4352-8309-474a814981f5",
							width: 40,
							height: 20,
							x: 0.480,
							y: 0.7,
							name: "IIC",
							tags: ["iic"],
							overlay: [0.5, 1.5],
							rotate: true
						}, {
							uid: "0ae7f137-66e0-437a-998f-c71a2ec62c3b",
							width: 20,
							height: 54,
							x: 0.480,
							y: 0.329,
							name: "MA",
							tags: ["motor"],
							overlay: [0.5, 1.5]
						}, {
							uid: "ee0399c9-2700-4456-96e1-47803c1ff60a",
							width: 20,
							height: 54,
							x: 0.480,
							y: 0.520,
							name: "MB",
							tags: ["motor"],
							overlay: [0.5, 1.5]
						}
						// , {
						// 	uid: "ee0399c9-2700-4456-96e1-47803c1ff60c",
						// 	width: 20,
						// 	height: 54,
						// 	x: 0.70,
						// 	y: 0.520,
						// 	name: "MB",
						// 	tags: ["motor"],
						// 	overlay: [0.5, 1.5]
						// }
						/*-------------------------------------------------------*/
						/*添加328板子 新的端点*/
						, {
							uid: "fe0399c9-2700-4456-96e1-47803c1ff60c",
							width: 39,
							height: 16,
							x: 0.618,
							y: 0.158,
							name: "PA1",
							tags: ["4P-analog"],
							overlay: [0.5, 1.8]
						}, {
							uid: "fa0399c9-2700-4456-96e1-47803c1ff60c",
							width: 39,
							height: 16,
							x: 0.676,
							y: 0.158,
							name: "PA2",
							tags: ["4P-analog"],
							overlay: [0.5, 1.8]
						}, {
							uid: "fa1399c9-2700-4456-96e1-47803c1ff60c",
							width: 54,
							height: 16,
							x: 0.744,
							y: 0.158,
							name: "PA3",
							tags: ["4P-analog"],
							overlay: [0.5, 1.8]
						}, {
							uid: "fa1199c9-2700-4456-96e1-47803c1ff60c",
							width: 54,
							height: 16,
							x: 0.824,
							y: 0.158,
							name: "PD5",
							tags: ["6P-digital"],
							overlay: [0.5, 1.8]
						}, {
							uid: "fa1119c9-2700-4456-96e1-47803c1ff60c",
							width: 54,
							height: 16,
							x: 0.900,
							y: 0.158,
							name: "PD6",
							label: "PD6/SPI",
							tags: ["6P-digital", "SPI"],
							overlay: [0.5, 1.8]
						}, {
							uid: "fa1111c9-2700-4456-96e1-47803c1ff60c",
							width: 42,
							height: 14,
							x: 0.620,
							y: 0.837,
							name: "USART",
							tags: ["serial"],
							overlay: [0.5, -0.8]
						}, {
							uid: "fa1111a9-2700-4456-96e1-47803c1ff60c",
							width: 42,
							height: 14,
							x: 0.675,
							y: 0.837,
							name: "PD1",
							tags: ["4P-digital"],
							overlay: [0.5, -0.8]
						}, {
							uid: "fa1111a1-2700-4456-96e1-47803c1ff60c",
							width: 42,
							height: 14,
							x: 0.735,
							y: 0.837,
							name: "PD2",
							tags: ["4P-digital"],
							overlay: [0.5, -0.8]
						}, {
							uid: "fa1111a1-1700-4456-96e1-47803c1ff60c",
							width: 42,
							height: 14,
							x: 0.795,
							y: 0.837,
							name: "PD3",
							tags: ["4P-digital"],
							overlay: [0.5, -0.8]
						}, {
							uid: "fa1111a1-1100-4456-96e1-47803c1ff60c",
							width: 42,
							height: 14,
							x: 0.851,
							y: 0.837,
							name: "PD4",
							tags: ["4P-digital"],
							overlay: [0.5, -0.8]
						}, {
							uid: "fa1111a1-1110-4456-96e1-47803c1ff60c",
							width: 38,
							height: 14,
							x: 0.910,
							y: 0.837,
							name: "IIC",
							tags: ["iic"],
							overlay: [0.5, -0.8]
						}, {
							uid: "fa1111a1-1111-4456-96e1-47803c1ff60c",
							width: 13,
							height: 32,
							x: 0.988,
							y: 0.636,
							name: "IIC",
							tags: ["iic"],
							overlay: [0.5, -0.8]
						}, {
							uid: "fa1111a1-1111-1456-96e1-47803c1ff60c",
							width: 13,
							height: 32,
							x: 0.988,
							y: 0.513,
							name: "IIC",
							tags: ["iic"],
							overlay: [0.5, -0.8]
						}, {
							uid: "fa1111a1-1111-1156-96e1-47803c1ff60c",
							width: 13,
							height: 55,
							x: 0.988,
							y: 0.342,
							name: "IICINT",
							tags: ["iic-6P"],
							overlay: [0.5, -0.8]
						}
						/*-------------------------------------------------------------*/
					]
				}],
				components: [{
						uid: "aa1a2f4c-2934-414a-823f-9961fbf23c55",
						name: "LED",
						label: "LED模块",
						type: "led",
						category: "action",
						boards: ["KenBlock"],
						width: 72,
						height: 72,
						pins: [{
							name: "s",
							anchor: [0.5, 1],
							tags: ["digital"]
						}],
						code: {
							var: 'int {NAME} = {s};',
							setup: 'pinMode({NAME}, OUTPUT);'
						}
					}, {
						uid: "a8466d12-ed5e-4cc8-bffe-1031c3bb10e1",
						name: "RGB",
						label: "彩色LED模块",
						type: "rgb",
						category: "action",
						boards: ["KenBlock"],
						width: 72,
						height: 72,
						pins: [{
							name: "s",
							anchor: [0.5, 1],
							tags: ["analog-out"]
						}],
						code: {
							var: 'RoRGBLed {NAME}({s});'
						}
					}, {
						uid: "bd3ddead-5062-4ab3-9b3d-2ba85e938d0e",
						name: "Button",
						label: "按键模块",
						type: "button",
						category: "sensor",
						boards: ["KenBlock"],
						width: 72,
						height: 72,
						pins: [{
							name: "s",
							anchor: [0.5, 1],
							tags: ["digital"],
						}],
						code: {
							var: 'int {NAME} = {s};',
							setup: 'pinMode({NAME}, INPUT);'
						}
					}, {
						uid: "9b26a7f3-facc-4f80-83ad-8a29f909c1d7",
						name: "Buzzer",
						label: "蜂鸣器模块",
						type: "buzzer",
						category: "action",
						boards: ["KenBlock"],
						width: 72,
						height: 72,
						pins: [{
							name: "s",
							anchor: [0.5, 1],
							tags: ["digital"],
						}],
						code: {
							include: '#include <RoSys.h>',
							var: 'RoBuzzer {NAME}({s});'
						}
					}, {
						uid: "18d12ce2-d24f-4bb6-ba1f-7ab3c50215df",
						name: "Pot",
						label: "电位器模块",
						type: "pot",
						category: "sensor",
						boards: ["KenBlock"],
						width: 72,
						height: 72,
						pins: [{
							name: "s",
							anchor: [0.5, 1],
							tags: ["analog-in"],
						}],
						code: {
							var: 'int {NAME} = {s};',
							setup: 'pinMode({NAME}, INPUT);'
						}
					}, {
						uid: "2d6073e7-ecee-4699-8ccb-f1bb52c4655a",
						name: "Light",
						label: "光敏传感器",
						type: "lightSensor",
						category: "sensor",
						boards: ["KenBlock"],
						width: 72,
						height: 72,
						pins: [{
							name: "s",
							anchor: [0.5, 1],
							tags: ["analog-in"],
						}],
						code: {
							var: 'int {NAME} = {s};',
							setup: 'pinMode({NAME}, INPUT);'
						}
					}, {
						uid: "bbf2233f-f9a8-4e95-8a1d-4ae7419786c7",
						name: "LedMatrix",
						label: "点阵模块",
						type: "ACT009",
						category: "action",
						boards: ["KenBlock"],
						width: 72,
						height: 72,
						pins: [{
							name: "s",
							anchor: [0.5, 1],
							tags: ["6P-digital"],
						}],
						code: {
							include: '#include <RoSys.h>',
							extra: 'unsigned char Data_he[][8]=\n{\n{0x04, 0x0E, 0x78, 0x08, 0x08, 0xFF, 0x08, 0x18},\n{0x1C,0x2A,0x2A,0x48,0x88,0x08,0x08,0x08},\n{0x00,0x00,0x00,0x7C,0x44,0x44,0x44,0x44},\n{0x44,0x44,0x44,0x44,0x7C,0x44,0x00,0x00},/*"和",0*/\n};\nunsigned char Data_xin[][8]=\n	{\n{0x00,0x00,0x00,0x1E,0x3F,0x7F,0x7F,0x7F},\n{0x3F,0x1F,0x0F,0x07,0x03,0x01,0x00,0x00},\n{0x00,0x00,0x00,0x78,0xFC,0xFE,0xFE,0xFE},\n{0xFC,0xF8,0xF0,0xE0,0xC0,0x80,0x00,0x00},/*心形*/\n};',
							var: 'RoLedMatrix {NAME}({s},1);',
							setup: 'int devices={NAME}.getDeviceCount();for(int addr=0;addr<devices;addr++){{NAME}.shutDown(addr,false);{NAME}.setIntensity(addr,8);{NAME}.clearDisplay(addr);}'
						}
					}, {
						uid: "bbf2233f-f9a8-4e95-8a1d-4ae7419786c7",
						name: "disp",
						label: "数码管模块",
						type: "Ro7SegmentDisplay",
						category: "action",
						boards: ["KenBlock"],
						width: 72,
						height: 72,
						pins: [{
							name: "s",
							anchor: [0.5, 1],
							tags: ["4P-digital"],
						}],
						code: {
							include: '#include <RoSys.h>',
							var: 'Ro7SegmentDisplay {NAME}({s});',
						}
					}
					/*  编程部分的代码 */
				]
			},
			software: {
				blocks: [{
						type: "group",
						name: "group",
						content: [],
						connectors: [{
							type: "connector-empty"
						}, {
							type: "connector-empty"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}],
						code: "{STATEMENTS}",
						tags: []
					}, {
						type: "output",
						name: "returnSensor",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "读取"
						}, {
							id: "SENSOR",
							type: "dynamic-select",
							options: "sensors"
						}],
						code: "{SENSOR.type}",
						returnType: {
							type: "fromDynamicSelect",
							id: "SENSOR",
							options: "sensors"
						},
						tags: ["module"],
						module: "sensor"
					},
					// {
					// 	type: "output",
					// 	name: "hardwareVariable",
					// 	connectors: [{
					// 		type: "connector-output",
					// 		accept: "connector-input"
					// 	}],
					// 	content: [{
					// 		type: "text",
					// 		value: "返回"
					// 	}, {
					// 		id: "VARIABLE",
					// 		type: "dynamic-select",
					// 		options: "hardwareVariables"
					// 	}],
					// 	code: "{VARIABLE}",
					// 	returnType: {
					// 		type: "fromDynamicSelect",
					// 		id: "VARIABLE",
					// 		options: "hardwareVariables"
					// 	},
					// 	tags: ["module"],
					// 	module: "hardwareVariable"
					// }, 
					{
						type: "output",
						name: "hts221Temperature",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "读取"
						}, {
							id: "SENSOR",
							type: "dynamic-select",
							options: "hts221s"
						}, {
							type: "text",
							value: "的温度"
						}],
						code: "{SENSOR}.readTemperature()",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["module"],
						module: "hts221"
					}, {
						type: "output",
						name: "hts221Humidity",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "读取"
						}, {
							id: "SENSOR",
							type: "dynamic-select",
							options: "hts221s"
						}, {
							type: "text",
							value: "的湿度"
						}],
						code: "{SENSOR}.readHumidity()",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["module"],
						module: "hts221"
					}, {
						type: "output",
						name: "encoderRead",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "读取旋转编码器"
						}, {
							id: "SENSOR",
							type: "dynamic-select",
							options: "encoders"
						}, {
							type: "text",
							value: "的值"
						}],
						code: "{SENSOR}.read()",
						returnType: {
							type: "simple",
							value: "int"
						},
						tags: ["module"],
						module: "encoder"
					}, {
						type: "statement",
						name: "encoderWrite",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "旋转编码器"
						}, {
							id: "SENSOR",
							type: "dynamic-select",
							options: "encoders"
						}, {
							type: "text",
							value: "写入"
						}, {
							type: "number-input",
							id: "VALUE"
						}],
						code: "{SENSOR}.write({VALUE});",
						tags: ["module"],
						module: "encoder"
					}, {
						type: "output",
						name: "ultrasoundDistance",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "超声波"
						}, {
							id: "SENSOR",
							type: "dynamic-select",
							options: "ultrasounds"
						}, {
							type: "text",
							value: "测量距离"
						}],
						code: "{SENSOR}.Distance()",
						returnType: {
							type: "simple",
							value: "long"
						},
						tags: ["module"],
						module: "ultrasound"
					}, {
						type: "output",
						name: "ultrasoundDistanceAvg",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "超声波"
						}, {
							id: "SENSOR",
							type: "dynamic-select",
							options: "ultrasounds"
						}, {
							type: "text",
							value: "测量平均距离"
						}],
						code: "{SENSOR}.DistanceAvg()",
						returnType: {
							type: "simple",
							value: "long"
						},
						tags: ["module"],
						module: "ultrasound"
					}, {
						type: "statement",
						name: "ultrasoundPing",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "超声波"
						}, {
							id: "SENSOR",
							type: "dynamic-select",
							options: "ultrasounds"
						}, {
							type: "text",
							value: "Ping"
						}],
						code: "{SENSOR}.Ping();",
						tags: ["module"],
						module: "ultrasound"
					}, {
						type: "output",
						name: "ultrasoundGetDistance",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "获取超声波"
						}, {
							id: "SENSOR",
							type: "dynamic-select",
							options: "ultrasounds"
						}, {
							type: "text",
							value: "上次测量的距离"
						}],
						code: "{SENSOR}.getDistance()",
						returnType: {
							type: "simple",
							value: "long"
						},
						tags: ["module"],
						module: "ultrasound"
					}, {
						type: "statement",
						name: "motorRun",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "电机"
						}, {
							id: "MOTOR",
							type: "dynamic-select",
							options: "motors"
						}, {
							type: "text",
							value: "转动，速度为"
						}, {
							id: "SPEED",
							type: "number-input"
						}],
						code: "{MOTOR}.run({SPEED});",
						tags: ["module"],
						module: "motor"
					}, {
						type: "statement",
						name: "motorStop",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "电机"
						}, {
							id: "MOTOR",
							type: "dynamic-select",
							options: "motors"
						}, {
							type: "text",
							value: "停止转动"
						}],
						code: "{MOTOR}.stop();",
						tags: ["module"],
						module: "motor"
					}, {
						type: "statement",
						name: "buzzer111",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "蜂鸣器"
						}, {
							id: "BUZZER",
							type: "dynamic-select",
							options: "buzzers"
						}, {
							type: "text",
							value: "发出音阶"
						}, {
							id: "NOTE",
							type: "static-select",
							options: [{
								label: "Do",
								value: "262"
							}, {
								label: "Re",
								value: "294"
							}, {
								label: "Mi",
								value: "330"
							}, {
								label: "Fa",
								value: "349"
							}, {
								label: "Sol",
								value: "392"
							}, {
								label: "La",
								value: "440"
							}, {
								label: "Si",
								value: "494"
							}, {
								label: "C#",
								value: "277"
							}, {
								label: "D#",
								value: "311"
							}, {
								label: "F#",
								value: "370"
							}, {
								label: "G#",
								value: "415"
							}, {
								label: "A#",
								value: "466"
							}]
						}, {
							type: "text",
							value: "持续"
						}, {
							id: "SECONDS",
							type: "number-input",
							value: 2000
						}, {
							type: "text",
							value: "毫秒"
						}],
						code: "{BUZZER}.tone({NOTE},{SECONDS});",
						tags: ["module"],
						module: "buzzer"
					}, 
					{
						type: "statement",
						name: "buzzer222",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "蜂鸣器"
						}, {
							id: "BUZZER",
							type: "dynamic-select",
							options: "buzzers"
						}, {
							type: "text",
							value: "发出音阶"
						}, {
							id: "NOTE",
							type: "static-select",
							options: [{
								label: "NOTE_B0",
								value: "31"
							}, {
								label: "NOTE_C1",
								value: "33"
							}, {
								label: "NOTE_CS1",
								value: "35"
							}, {
								label: "NOTE_D1",
								value: "37"
							}, {
								label: "NOTE_DS1",
								value: "39"
							}, {
								label: "NOTE_E1",
								value: "41"
							}, {
								label: "NOTE_F1",
								value: "44"
							}, {
								label: "NOTE_FS1",
								value: "46"
							}, {
								label: "NOTE_G1",
								value: "49"
							}, {
								label: "NOTE_GS1",
								value: "52"
							}, {
								label: "NOTE_A1",
								value: "55"
							}, {
								label: "NOTE_AS1",
								value: "58"
							}, {
								label: "NOTE_B1",
								value: "62"
							}, {
								label: "NOTE_C2",
								value: "65"
							}, {
								label: "NOTE_CS2",
								value: "69"
							}, {
								label: "NOTE_D2",
								value: "73"
							}, {
								label: "NOTE_DS2",
								value: "78"
							}, {
								label: "NOTE_E2",
								value: "82"
							}, {
								label: "NOTE_F2",
								value: "87"
							}, {
								label: "NOTE_FS2",
								value: "93"
							}, {
								label: "NOTE_G2",
								value: "98"
							}, {
								label: "NOTE_GS2",
								value: "104"
							}, {
								label: "NOTE_A2",
								value: "110"
							}, {
								label: "NOTE_AS2",
								value: "117"
							}, {
								label: "NOTE_B2",
								value: "123"
							}, {
								label: "NOTE_C3",
								value: "131"
							}, {
								label: "NOTE_CS3",
								value: "139"
							}, {
								label: "NOTE_D3",
								value: "147"
							}, {
								label: "NOTE_DS3",
								value: "156"
							}, {
								label: "NOTE_E3",
								value: "165"
							}, {
								label: "NOTE_F3",
								value: "175"
							}, {
								label: "NOTE_FS3",
								value: "185"
							}, {
								label: "NOTE_G3",
								value: "196"
							}, {
								label: "NOTE_GS3",
								value: "208"
							}, {
								label: "NOTE_A3",
								value: "220"
							}, {
								label: "NOTE_AS3",
								value: "233"
							}, {
								label: "NOTE_B3",
								value: "247"
							}, {
								label: "NOTE_C4",
								value: "262"
							}, {
								label: "NOTE_CS4",
								value: "277"
							}, {
								label: "NOTE_D4",
								value: "294"
							}, {
								label: "NOTE_DS4",
								value: "311"
							}, {
								label: "NOTE_E4",
								value: "330"
							}, {
								label: "NOTE_F4",
								value: "349"
							}, {
								label: "NOTE_FS4",
								value: "370"
							}, {
								label: "NOTE_G4",
								value: "392"
							}, {
								label: "NOTE_GS4",
								value: "415"
							}, {
								label: "NOTE_A4",
								value: "440"
							}, {
								label: "NOTE_AS4",
								value: "466"
							}, {
								label: "NOTE_B4",
								value: "494"
							}, {
								label: "NOTE_C5",
								value: "523"
							}, {
								label: "NOTE_CS5",
								value: "554"
							}, {
								label: "NOTE_D5",
								value: "587"
							}, {
								label: "NOTE_DS5",
								value: "622"
							}, {
								label: "NOTE_E5",
								value: "659"
							}, {
								label: "NOTE_F5",
								value: "698"
							}, {
								label: "NOTE_FS5",
								value: "740"
							}, {
								label: "NOTE_G5",
								value: "784"
							}, {
								label: "NOTE_GS5",
								value: "831"
							}, {
								label: "NOTE_A5",
								value: "880"
							}, {
								label: "NOTE_AS5",
								value: "932"
							}, {
								label: "NOTE_B5",
								value: "988"
							}, {
								label: "NOTE_C6",
								value: "1047"
							}, {
								label: "NOTE_CS6",
								value: "1109"
							}, {
								label: "NOTE_D6",
								value: "1175"
							}, {
								label: "NOTE_DS6",
								value: "1245"
							}, {
								label: "NOTE_E6",
								value: "1319"
							}, {
								label: "NOTE_F6",
								value: "1397"
							}, {
								label: "NOTE_FS6",
								value: "1480"
							}, {
								label: "NOTE_G6",
								value: "1568"
							}, {
								label: "NOTE_GS6",
								value: "1661"
							}, {
								label: "NOTE_A6",
								value: "1760"
							}, {
								label: "NOTE_AS6",
								value: "1865"
							}, {
								label: "NOTE_B6",
								value: "1976"
							}, {
								label: "NOTE_C7",
								value: "2093"
							}, {
								label: "NOTE_CS7",
								value: "2217"
							}, {
								label: "NOTE_D7",
								value: "2349"
							}, {
								label: "NOTE_DS7",
								value: "2489"
							}, {
								label: "NOTE_E7",
								value: "2637"
							}, {
								label: "NOTE_F7",
								value: "2794"
							}, {
								label: "NOTE_FS7",
								value: "2960"
							}, {
								label: "NOTE_G7",
								value: "3136"
							}, {
								label: "NOTE_GS7",
								value: "3322"
							}, {
								label: "NOTE_A7",
								value: "3520"
							}, {
								label: "NOTE_AS7",
								value: "3729"
							}, {
								label: "NOTE_B7",
								value: "3951"
							}, {
								label: "NOTE_C8",
								value: "4186"
							}, {
								label: "NOTE_CS8",
								value: "4435"
							}, {
								label: "NOTE_D8",
								value: "4699"
							}, {
								label: "NOTE_DS8",
								value: "4978"
							}]
						}, {
							type: "text",
							value: "持续"
						}, {
							id: "SECONDS",
							type: "number-input",
							value: 2000
						}, {
							type: "text",
							value: "毫秒"
						}],
						code: "{BUZZER}.tone({NOTE},{SECONDS});",
						tags: ["module"],
						module: "buzzer"
					}
					,{
						type: "statement",
						name: "buzzerClose",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "关闭蜂鸣器"
						}, {
							id: "BUZZER",
							type: "dynamic-select",
							options: "buzzers"
						}],
						code: "{BUZZER}.noTone();",
						tags: ["module"],
						module: "buzzer"
					}, {
						type: "statement",
						name: "continuousServoStart",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "设置舵机"
						}, {
							id: "SERVO",
							type: "dynamic-select",
							options: "continuousServos"
						}, {
							type: "text",
							value: "方向为"
						}, {
							id: "DIRECTION",
							type: "static-select",
							options: [{
								label: "顺时针",
								value: "180"
							}, {
								label: "逆时针",
								value: "0"
							}]
						}],
						code: "{SERVO}.write({DIRECTION});",
						tags: ["module"],
						module: "continuousServo"
					}, {
						type: "statement",
						name: "continuousServoStop",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "停止舵机"
						}, {
							id: "SERVO",
							type: "dynamic-select",
							options: "continuousServos"
						}, {
							type: "text",
							value: "转动"
						}],
						code: "{SERVO}.write(90);",
						tags: ["module"],
						module: "continuousServo"
					}, {
						type: "statement",
						name: "lcdTurnOnOff",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							id: "STATE",
							type: "static-select",
							options: [{
								label: "打开",
								value: "backlight"
							}, {
								label: "关闭",
								value: "noBacklight"
							}]
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "lcds"
						}, {
							type: "text",
							value: "的背光"
						}],
						code: "{LCD}.{STATE}();",
						tags: ["module"],
						module: "lcd"
					}, {
						type: "statement",
						name: "lcdWrite",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "在液晶"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "lcds"
						}, {
							type: "text",
							value: "上显示"
						}, {
							id: "TEXT",
							type: "string-input",
							placeholder: "Hi!"
						}],
						code: "{LCD}.print(\"{TEXT}\");",
						tags: ["module"],
						module: "lcd"
					}, {
						type: "statement",
						name: "lcdWritePosition",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "在液晶"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "lcds"
						}, {
							id: "ROW",
							type: "number-input",
							value: 0
						}, {
							type: "text",
							value: "行"
						}, {
							id: "COLUMN",
							type: "number-input",
							value: 0
						}, {
							type: "text",
							value: "列"
						}, {
							type: "text",
							value: "上显示"
						}, {
							id: "TEXT",
							type: "string-input",
							placeholder: "Hi!"
						}],
						code: "{LCD}.setCursor({COLUMN},{ROW});{LCD}.print(\"{TEXT}\");",
						tags: ["module"],
						module: "lcd"
					}, {
						type: "statement",
						name: "lcdClear",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "清屏"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "lcds"
						}],
						code: "{LCD}.clear();",
						tags: ["module"],
						module: "lcd"
					}, {
						type: "statement",
						name: "led",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							id: "STATE",
							type: "static-select",
							options: [{
								label: "点亮",
								value: "HIGH"
							}, {
								label: "关闭",
								value: "LOW"
							}]
						}, {
							type: "text",
							value: "LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "leds"
						}],
						code: "digitalWrite({LED},{STATE});",
						tags: ["module"],
						module: "led"
					}
					// console.log("第一条")；
					, {
						type: "statement",
						name: "rgbLedSimple",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "点亮彩色LED灯"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "rgbs"
						}, {
							type: "text",
							value: ","
						}, {
							id: "index",
							type: "static-select",
							options: [{
								label: "全部",
								value: "0"
							}, {
								label: "1",
								value: "1"
							}, {
								label: "2",
								value: "2"
							}, {
								label: "3",
								value: "3"
							}, {
								label: "4",
								value: "4"
							}]
						}, {
							type: "text",
							value: "灯，颜色为"
						}, {
							id: "COLOR",
							type: "static-select",
							options: [{
								label: "白色",
								value: "255,255,255"
							}, {
								label: "黄色",
								value: "255,255,0"
							}, {
								label: "橙色",
								value: "200,50,0"
							}, {
								label: "红色",
								value: "255,0,0"
							}, {
								label: "绿色",
								value: "0,255,0"
							}, {
								label: "深绿",
								value: "0,60,102"
							}, {
								label: "蓝色",
								value: "40,40,255"
							}, {
								label: "深蓝",
								value: "0,0,255"
							}, {
								label: "粉红",
								value: "255,0,255"
							}]
						}],
						code: "{LED}.setColor({index}, {COLOR});{LED}.show();",
						tags: ["module"],
						module: "rgb"
					}, {
						type: "statement",
						name: "rgbLed",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "3c6c39e3-3938-4197-bfd0-256f75e6b0f3"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "ccf583b0-be53-40f1-8c1c-21ab3b742db8"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "15cd8f30-8b59-4402-84f1-7a1f574d954b"
						}],
						content: [{
							type: "text",
							value: "点亮彩色LED灯"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "rgbs"
						}, {
							type: "text",
							value: ","
						}, {
							id: "index",
							type: "static-select",
							options: [{
								label: "全部",
								value: "0"
							}, {
								label: "1",
								value: "1"
							}, {
								label: "2",
								value: "2"
							}, {
								label: "3",
								value: "3"
							}, {
								label: "4",
								value: "4"
							}]
						}, {
							type: "text",
							value: "灯，颜色值 红色"
						}, {
							blockInputId: "red",
							type: "block-input",
							acceptType: "number",
							name: "3c6c39e3-3938-4197-bfd0-256f75e6b0f3"
						}, {
							type: "text",
							value: "绿色"
						}, {
							blockInputId: "green",
							type: "block-input",
							acceptType: "number",
							name: "ccf583b0-be53-40f1-8c1c-21ab3b742db8"
						}, {
							type: "text",
							value: "蓝色"
						}, {
							blockInputId: "blue",
							type: "block-input",
							acceptType: "number",
							name: "15cd8f30-8b59-4402-84f1-7a1f574d954b"
						}],
						code: "{LED}.setColor({index},{red},{green},{blue});{LED}.show();",
						tags: ["module"],
						module: "rgb"
					}, {
						type: "statement",
						name: "rgbLedFade",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "让三色LED渐变"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "rgbs"
						}, {
							type: "text",
							value: "色值红色为"
						}, {
							id: "RED",
							type: "number-input",
							value: 0
						}, {
							type: "text",
							value: "绿色为"
						}, {
							id: "GREEN",
							type: "number-input",
							value: 0
						}, {
							type: "text",
							value: "蓝色为"
						}, {
							id: "BLUE",
							type: "number-input",
							value: 0
						}],
						code: "{LED}.crossFade({RED},{GREEN},{BLUE});",
						tags: ["module"],
						module: "kongmoban"
					}, {
						type: "output",
						name: "SEN006Read",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "45f8b420-e328-429d-8e78-a0d778431819"
						}],
						content: [{
							type: "text",
							value: "获取摇杆"
						}, {
							id: "JOYSTICK",
							type: "dynamic-select",
							options: "SEN006s"
						}, {
							type: "text",
							value: "X轴或Y轴的值，坐标轴为"
						}, {
							blockInputId: "INDEX",
							type: "block-input",
							name: "45f8b420-e328-429d-8e78-a0d778431819"
						}],
						code: "{JOYSTICK}.read({INDEX})",
						returnType: {
							type: "simple",
							value: "int"
						},
						tags: ["module"],
						module: "SEN006"
					}, {
						type: "output",
						name: "SEN006ReadX",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "获取摇杆"
						}, {
							id: "JOYSTICK",
							type: "dynamic-select",
							options: "SEN006s"
						}, {
							type: "text",
							value: "X轴的值"
						}],
						code: "{JOYSTICK}.readX()",
						returnType: {
							type: "simple",
							value: "int"
						},
						tags: ["module"],
						module: "SEN006"
					}, {
						type: "output",
						name: "SEN006ReadY",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "获取摇杆"
						}, {
							id: "JOYSTICK",
							type: "dynamic-select",
							options: "SEN006s"
						}, {
							type: "text",
							value: "Y轴的值"
						}],
						code: "{JOYSTICK}.readY()",
						returnType: {
							type: "simple",
							value: "int"
						},
						tags: ["module"],
						module: "SEN006"
					}, {
						type: "output",
						name: "SEN006Angle",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "获取摇杆"
						}, {
							id: "JOYSTICK",
							type: "dynamic-select",
							options: "SEN006s"
						}, {
							type: "text",
							value: "的角度"
						}],
						code: "{JOYSTICK}.angle()",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["module"],
						module: "SEN006"
					}, {
						type: "output",
						name: "SEN006OffCenter",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "获取摇杆"
						}, {
							id: "JOYSTICK",
							type: "dynamic-select",
							options: "SEN006s"
						}, {
							type: "text",
							value: "离中心的距离"
						}],
						code: "{JOYSTICK}.OffCenter()",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["module"],
						module: "SEN006"
					}, {
						type: "output",
						name: "SEN017ReadSensors",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "获取巡线阵列"
						}, {
							id: "LINE",
							type: "dynamic-select",
							options: "SEN017s"
						}, {
							type: "text",
							value: "的传感器状态"
						}],
						code: "{LINE}.readSensors()",
						returnType: {
							type: "simple",
							value: "int"
						},
						tags: ["module"],
						module: "SEN017"
					}, {
						type: "output",
						name: "SEN017ReadSensor",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "79c13bfc-59fe-4ee1-a075-2c4572b50f44"
						}],
						content: [{
							type: "text",
							value: "获取巡线阵列"
						}, {
							id: "LINE",
							type: "dynamic-select",
							options: "SEN017s"
						}, {
							type: "text",
							value: "的某个传感器的状态，传感器序号为"
						}, {
							blockInputId: "INDEX",
							type: "block-input",
							name: "79c13bfc-59fe-4ee1-a075-2c4572b50f44"
						}],
						code: "{LINE}.readSensors({INDEX})",
						returnType: {
							type: "simple",
							value: "int"
						},
						tags: ["module"],
						module: "SEN017"
					}, {
						type: "statement",
						name: "ACT002Show",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "彩色LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "ACT002s"
						}, {
							type: "text",
							value: "显示"
						}],
						code: "{LED}.show();",
						tags: ["module"],
						module: "ACT002"
					}, {
						type: "output",
						name: "ACT002GetNumber",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "获取彩色LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "ACT002s"
						}, {
							type: "text",
							value: "的值"
						}],
						code: "{LED}.getNumber()",
						returnType: {
							type: "simple",
							value: "int"
						},
						tags: ["module"],
						module: "ACT002"
					}, {
						type: "statement",
						name: "ACT002SetNumber",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "4d9a6bee-e01d-4314-93c2-7d7f27b03812"
						}],
						content: [{
							type: "text",
							value: "设置彩色LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "ACT002s"
						}, {
							type: "text",
							value: "的值为"
						}, {
							blockInputId: "NUMBER",
							type: "block-input",
							acceptType: "number",
							name: "4d9a6bee-e01d-4314-93c2-7d7f27b03812"
						}],
						code: "{LED}.setNumber({NUMBER});",
						tags: ["module"],
						module: "ACT002"
					}, {
						type: "statement",
						name: "ACT002SetColor",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "ce1dccd8-0d31-4de8-9bf6-976f0d36f847"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "4adce8d3-8232-4a19-a8f0-e5dd4b85f5f0"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "cb442ce5-3a46-4aa4-a456-38ae732d0fc9"
						}],
						content: [{
							type: "text",
							value: "设置彩色LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "ACT002s"
						}, {
							type: "text",
							value: "的颜色，红色为"
						}, {
							blockInputId: "RED",
							type: "block-input",
							acceptType: "number",
							name: "ce1dccd8-0d31-4de8-9bf6-976f0d36f847"
						}, {
							type: "text",
							value: "绿色为"
						}, {
							blockInputId: "GREEN",
							type: "block-input",
							acceptType: "number",
							name: "4adce8d3-8232-4a19-a8f0-e5dd4b85f5f0"
						}, {
							type: "text",
							value: "蓝色为"
						}, {
							blockInputId: "BLUE",
							type: "block-input",
							acceptType: "number",
							name: "cb442ce5-3a46-4aa4-a456-38ae732d0fc9"
						}],
						code: "{LED}.setColor({RED}, {GREEN}, {BLUE});",
						tags: ["module"],
						module: "ACT002"
					}, {
						type: "statement",
						name: "ACT002SetColor2",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "a1a513e2-7672-407c-b36f-360b54c49e8e"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "5645ecae-9edc-4bbd-9b4a-29abd88832d8"
						}],
						content: [{
							type: "text",
							value: "设置彩色LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "ACT002s"
						}, {
							type: "text",
							value: "的颜色，索引为"
						}, {
							blockInputId: "INDEX",
							type: "block-input",
							acceptType: "number",
							name: "a1a513e2-7672-407c-b36f-360b54c49e8e"
						}, {
							type: "text",
							value: "值为"
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: "number",
							name: "5645ecae-9edc-4bbd-9b4a-29abd88832d8"
						}],
						code: "{LED}.setColor({INDEX}, {VALUE});",
						tags: ["module"],
						module: "ACT002"
					},
					// {
					// 	type: "output",
					// 	name: "ACT009GetDeviceCount",
					// 	connectors: [{
					// 		type: "connector-output",
					// 		accept: "connector-input"
					// 	}],
					// 	content: [{
					// 		type: "text",
					// 		value: "获取点阵模块"
					// 	}, {
					// 		id: "LCD",
					// 		type: "dynamic-select",
					// 		options: "ACT009s"
					// 	}, {
					// 		type: "text",
					// 		value: "的模块数量"
					// 	}],
					// 	code: "{LCD}.getDeviceCount()",
					// 	returnType: {
					// 		type: "simple",
					// 		value: "short"
					// 	},
					// 	tags: ["module"],
					// 	module: "ACT009"
					// },

					// {
					// 	type: "statement",
					// 	name: "ACT009Shutdown",
					// 	connectors: [{
					// 		type: "connector-top",
					// 		accept: "connector-bottom"
					// 	}, {
					// 		type: "connector-bottom",
					// 		accept: "connector-top"
					// 	}, {
					// 		type: "connector-input",
					// 		accept: "connector-output",
					// 		acceptType: "all",
					// 		name: "d1e01a1f-ebff-441a-9672-1207e3dda8df"
					// 	}, {
					// 		type: "connector-input",
					// 		accept: "connector-output",
					// 		acceptType: "boolean",
					// 		name: "fd3a61fa-83b0-4bfc-a5cf-159dd2096109"
					// 	}],
					// 	content: [{
					// 		type: "text",
					// 		value: "设置点阵模块"
					// 	}, {
					// 		id: "LCD",
					// 		type: "dynamic-select",
					// 		options: "ACT009s"
					// 	}, {
					// 		type: "text",
					// 		value: "关断模式，地址为"
					// 	}, {
					// 		blockInputId: "ADDR",
					// 		type: "block-input",
					// 		acceptType: "number",
					// 		name: "d1e01a1f-ebff-441a-9672-1207e3dda8df"
					// 	}, {
					// 		type: "text",
					// 		value: "状态为"
					// 	}, {
					// 		blockInputId: "STATUS",
					// 		type: "block-input",
					// 		acceptType: "boolean",
					// 		name: "fd3a61fa-83b0-4bfc-a5cf-159dd2096109"
					// 	}],
					// 	code: "{LCD}.shutdown({ADDR}, {STATUS});",
					// 	tags: ["module"],
					// 	module: "ACT009"
					// }, 
					// {
					// 	type: "statement",
					// 	name: "ACT009SetScanLimit",
					// 	connectors: [{
					// 		type: "connector-top",
					// 		accept: "connector-bottom"
					// 	}, {
					// 		type: "connector-bottom",
					// 		accept: "connector-top"
					// 	}, {
					// 		type: "connector-input",
					// 		accept: "connector-output",
					// 		acceptType: "all",
					// 		name: "8d0eb454-5d48-4c02-8e1e-9219177db4c5"
					// 	}, 
					// 	{
					// 		type: "connector-input",
					// 		accept: "connector-output",
					// 		acceptType: "all",
					// 		name: "079428c7-bbb6-47bd-bf23-b9ef1e547493"
					// 	}],
					// 	content: [{
					// 		type: "text",
					// 		value: "设置点阵模块"
					// 	}, {
					// 		id: "LCD",
					// 		type: "dynamic-select",
					// 		options: "ACT009s"
					// 	}, {
					// 		type: "text",
					// 		value: "扫描界限，地址为"
					// 	}, {
					// 		blockInputId: "ADDR",
					// 		type: "block-input",
					// 		acceptType: "number",
					// 		name: "8d0eb454-5d48-4c02-8e1e-9219177db4c5"
					// 	}, {
					// 		type: "text",
					// 		value: "数量为"
					// 	}, {
					// 		blockInputId: "LIMIT",
					// 		type: "block-input",
					// 		acceptType: "number",
					// 		name: "079428c7-bbb6-47bd-bf23-b9ef1e547493"
					// 	}],
					// 	code: "{LCD}.setScanLimit({ADDR}, {LIMIT});",
					// 	tags: ["module"],
					// 	module: "ACT009"
					// }, 
					// {
					// 	type: "statement",
					// 	name: "ACT009SetIndensity",
					// 	connectors: [{
					// 		type: "connector-top",
					// 		accept: "connector-bottom"
					// 	}, {
					// 		type: "connector-bottom",
					// 		accept: "connector-top"
					// 	}, {
					// 		type: "connector-input",
					// 		accept: "connector-output",
					// 		acceptType: "all",
					// 		name: "69ca1287-7c0c-478d-943e-6b79abccb75c"
					// 	}, {
					// 		type: "connector-input",
					// 		accept: "connector-output",
					// 		acceptType: "all",
					// 		name: "3404b249-a24b-4afb-a0aa-b122c9eb63e0"
					// 	}],
					// 	content: [{
					// 		type: "text",
					// 		value: "设置点阵模块"
					// 	}, {
					// 		id: "LCD",
					// 		type: "dynamic-select",
					// 		options: "ACT009s"
					// 	}, {
					// 		type: "text",
					// 		value: "亮度，地址为"
					// 	}, {
					// 		blockInputId: "ADDR",
					// 		type: "block-input",
					// 		acceptType: "number",
					// 		name: "69ca1287-7c0c-478d-943e-6b79abccb75c"
					// 	}, {
					// 		type: "text",
					// 		value: "亮度为"
					// 	}, {
					// 		blockInputId: "INDTENSITY",
					// 		type: "block-input",
					// 		acceptType: "number",
					// 		name: "3404b249-a24b-4afb-a0aa-b122c9eb63e0"
					// 	}],
					// 	code: "{LCD}.setIntensity({ADDR}, {INDTENSITY});",
					// 	tags: ["module"],
					// 	module: "ACT009"
					// }, 
					// {
					// 	type: "statement",
					// 	name: "ACT009ClearDisplay",
					// 	connectors: [{
					// 		type: "connector-top",
					// 		accept: "connector-bottom"
					// 	}, {
					// 		type: "connector-bottom",
					// 		accept: "connector-top"
					// 	}, {
					// 		type: "connector-input",
					// 		accept: "connector-output",
					// 		acceptType: "all",
					// 		name: "063e64db-6ce0-4818-bdfa-90ee400da4c1"
					// 	}],
					// 	content: [{
					// 		type: "text",
					// 		value: "清除点阵模块"
					// 	}, {
					// 		id: "LCD",
					// 		type: "dynamic-select",
					// 		options: "ACT009s"
					// 	}, {
					// 		type: "text",
					// 		value: "显示，地址为"
					// 	}, {
					// 		blockInputId: "ADDR",
					// 		type: "block-input",
					// 		acceptType: "number",
					// 		name: "063e64db-6ce0-4818-bdfa-90ee400da4c1"
					// 	}],
					// 	code: "{LCD}.clearDisplay({ADDR});",
					// 	tags: ["module"],
					// 	module: "ACT009"
					// }, 
					{
						type: "statement",
						name: "rtcInit",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "更新时间"
						}, {
							id: "RTC",
							type: "dynamic-select",
							options: "rtcs"
						}],
						code: "{RTC}.adjust(DateTime(__DATE__, __TIME__));",
						tags: ["module"],
						module: "rtc"
					}, {
						type: "output",
						name: "rtcGet",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "获取"
						}, {
							id: "RTC",
							type: "dynamic-select",
							options: "rtcs"
						}, {
							type: "text",
							value: "的"
						}, {
							id: "RTC_FUNC",
							type: "static-select",
							options: [{
								label: "日期",
								value: "getDate"
							}, {
								label: "小时",
								value: "getTime"
							}]
						}],
						code: "{RTC}.{RTC_FUNC}()",
						returnType: {
							type: "simple",
							value: "String"
						},
						tags: ["module"],
						module: "rtc"
					}, {
						type: "output",
						name: "rtcGet-v2",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "获取"
						}, {
							id: "RTC",
							type: "dynamic-select",
							options: "rtcs"
						}, {
							type: "text",
							value: "的"
						}, {
							id: "FUNCTION",
							type: "static-select",
							options: [{
								label: "小时",
								value: "getHour"
							}, {
								label: "分钟",
								value: "getMinute"
							}, {
								label: "秒",
								value: "getSecond"
							}, {
								label: "天",
								value: "getDay"
							}, {
								label: "月",
								value: "getMonth"
							}, {
								label: "年",
								value: "getYear"
							}]
						}],
						code: "{RTC}.{FUNCTION}()",
						returnType: {
							type: "simple",
							value: "int"
						},
						tags: ["module"],
						module: "rtc"
					}, {
						type: "statement",
						name: "oscillator",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "Oscillate servo"
						}, {
							id: "OSCILLATOR",
							type: "dynamic-select",
							options: "oscillators"
						}, {
							type: "text",
							value: "around"
						}, {
							id: "PHASE",
							type: "number-input",
							value: 90
						}, {
							type: "text",
							value: "with amplitude"
						}, {
							id: "AMPLITUDE",
							type: "number-input",
							value: 90
						}, {
							type: "text",
							value: "with speed"
						}, {
							id: "SPEED",
							type: "number-input",
							value: 2000
						}],
						code: "{OSCILLATOR}.SetO({PHASE});{OSCILLATOR}.SetA({AMPLITUDE});{OSCILLATOR}.SetT({SPEED});{OSCILLATOR}.refresh();",
						tags: ["module"],
						module: "oscillator"
					}, {
						type: "statement",
						name: "oscillatorStart",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "Start oscillator"
						}, {
							id: "OSCILLATOR",
							type: "dynamic-select",
							options: "oscillators"
						}],
						code: "{OSCILLATOR}.Play();",
						tags: ["module"],
						module: "oscillator"
					}, {
						type: "statement",
						name: "oscillatorStop",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "Stop oscillator"
						}, {
							id: "OSCILLATOR",
							type: "dynamic-select",
							options: "oscillators"
						}],
						code: "{OSCILLATOR}.Stop();",
						tags: ["module"],
						module: "oscillator"
					}, {
						type: "statement",
						name: "servoNormal",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "设置舵机"
						}, {
							id: "SERVO",
							type: "dynamic-select",
							options: "servos"
						}, {
							type: "text",
							value: "角度为"
						}, {
							id: "POSITION",
							type: "number-input",
							value: 90
						}, {
							type: "text",
							value: "度"
						}],
						code: "{SERVO}.write({POSITION});",
						tags: ["module"],
						module: "servo"
					}, {
						type: "output",
						name: "serialReceive",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "接收串口数据"
						}],
						code: "Serial.read()",
						returnType: {
							type: "simple",
							value: "char"
						},
						tags: ["module"],
						module: "serial"
					}, {
						type: "statement",
						name: "serialSend-v1",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "f8471331-86fc-4e8e-9293-8ddd1bca79a5"
						}],
						content: [{
							type: "text",
							value: "串口发送"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							acceptType: "all",
							name: "f8471331-86fc-4e8e-9293-8ddd1bca79a5"
						}, {
							id: "LN",
							type: "static-select",
							options: [{
								label: "有换行符",
								value: "println"
							}, {
								label: "没有换行符",
								value: "print"
							}]
						}],
						code: "Serial.{LN}({DATA});",
						tags: ["module"],
						module: "serial"
					}, {
						type: "output",
						name: "returnComponent",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "返回"
						}, {
							id: "COMPONENT",
							type: "dynamic-select",
							options: "components"
						}],
						code: "{COMPONENT}",
						returnType: {
							type: "fromDynamicSelect",
							id: "COMPONENT",
							options: "components"
						},
						tags: ["module", "advanced"],
						module: "component"
					}, {
						type: "statement",
						name: "buzzerAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "b57fc0e6-15ae-49b6-965b-42460821a5f2"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "4b4393d0-ce5e-45e6-b83e-a45f9530d5a2"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "b38394fc-9676-494a-b44a-94f658cd9319"
						}],
						content: [{
							type: "text",
							value: "蜂鸣器"
						}, {
							blockInputId: "BUZZER",
							type: "block-input",
							acceptType: "all",
							name: "b57fc0e6-15ae-49b6-965b-42460821a5f2"
						}, {
							type: "text",
							value: "发出频率"
						}, {
							blockInputId: "NOTE",
							type: "block-input",
							acceptType: "all",
							name: "4b4393d0-ce5e-45e6-b83e-a45f9530d5a2"
						}, {
							type: "text",
							value: "持续"
						}, {
							blockInputId: "SECONDS",
							type: "block-input",
							acceptType: "all",
							name: "b38394fc-9676-494a-b44a-94f658cd9319"
						}, {
							type: "text",
							value: "毫秒"
						}],
						code: "tone({BUZZER},{NOTE},{SECONDS});\ndelay({SECONDS});",
						tags: ["module", "advanced"]
					}, {
						type: "statement",
						name: "motorRunAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "a3ea169d-374d-4c22-886a-28111090a21d"
						}],
						content: [{
							type: "text",
							value: "电机"
						}, {
							id: "MOTOR",
							type: "dynamic-select",
							options: "motors"
						}, {
							type: "text",
							value: "转动，速度为"
						}, {
							blockInputId: "SPEED",
							type: "block-input",
							acceptType: "all",
							name: "a3ea169d-374d-4c22-886a-28111090a21d"
						}],
						code: "{MOTOR}.run({SPEED});",
						tags: ["module", "advanced"],
						module: "motor"
					}, {
						type: "statement",
						name: "continuousServoStartAdvanced-v1",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "1484b139-1fe7-4eaa-b015-49989cbd89d3"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "5b0354c0-8e85-4755-9e03-95525f1057a9"
						}],
						content: [{
							type: "text",
							value: "设置舵机"
						}, {
							blockInputId: "SERVO",
							type: "block-input",
							acceptType: "all",
							name: "1484b139-1fe7-4eaa-b015-49989cbd89d3"
						}, {
							type: "text",
							value: "方向为"
						}, {
							blockInputId: "DIRECTION",
							type: "block-input",
							acceptType: "all",
							name: "5b0354c0-8e85-4755-9e03-95525f1057a9"
						}],
						code: "{SERVO}.write({DIRECTION});",
						tags: ["module", "advanced"]
					}, {
						type: "statement",
						name: "continuousServoStopAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "584cafc9-1451-42fb-a56b-a219a4db672e"
						}],
						content: [{
							type: "text",
							value: "停止舵机"
						}, {
							blockInputId: "SERVO",
							type: "block-input",
							acceptType: "all",
							name: "584cafc9-1451-42fb-a56b-a219a4db672e"
						}, {
							type: "text",
							value: "转动"
						}],
						code: "{SERVO}.write(90);",
						tags: ["module", "advanced"]
					}, {
						type: "statement",
						name: "lcdTurnOnOffAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "6e9f7268-0bf0-45f2-97d8-428034412094"
						}],
						content: [{
							id: "STATE",
							type: "static-select",
							options: [{
								label: "打开",
								value: "backlight"
							}, {
								label: "关闭",
								value: "noBacklight"
							}]
						}, {
							blockInputId: "LCD",
							type: "block-input",
							acceptType: "all",
							name: "6e9f7268-0bf0-45f2-97d8-428034412094"
						}, {
							type: "text",
							value: "的背光"
						}],
						code: "{LCD}.{STATE}();",
						tags: ["module", "advanced"]
					}, {
						type: "statement",
						name: "lcdWriteAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "0ff787be-1b73-4c85-84e0-f38651e4a29d"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "087df5f7-1ad4-4fcf-923b-3c8866b13512"
						}],
						content: [{
							type: "text",
							value: "在液晶"
						}, {
							blockInputId: "LCD",
							type: "block-input",
							acceptType: "all",
							name: "087df5f7-1ad4-4fcf-923b-3c8866b13512"
						}, {
							type: "text",
							value: "上显示"
						}, {
							blockInputId: "TEXT",
							type: "block-input",
							acceptType: "all",
							name: "0ff787be-1b73-4c85-84e0-f38651e4a29d"
						}],
						code: "{LCD}.print({TEXT});",
						tags: ["module", "advanced"]
					}, {
						type: "statement",
						name: "ledAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "9050f447-06fe-4956-bd2b-a440ce757f52"
						}],
						content: [{
							id: "STATE",
							type: "static-select",
							options: [{
								label: "点亮",
								value: "HIGH"
							}, {
								label: "关闭",
								value: "LOW"
							}]
						}, {
							type: "text",
							value: "LED"
						}, {
							blockInputId: "LED",
							type: "block-input",
							acceptType: "all",
							name: "9050f447-06fe-4956-bd2b-a440ce757f52"
						}],
						code: "digitalWrite({LED},{STATE});",
						tags: ["module", "advanced"]
					}, {
						type: "statement",
						name: "encoderWriteAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "b444f54e-ce20-4b09-a246-cc6c4ec4ee1b"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "f76dc724-1666-4d74-9d58-0733fbe78071"
						}],
						content: [{
							type: "text",
							value: "旋转编码器"
						}, {
							blockInputId: "ENCODER",
							type: "block-input",
							acceptType: "all",
							name: "b444f54e-ce20-4b09-a246-cc6c4ec4ee1b"
						}, {
							type: "text",
							value: "写入"
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: "all",
							name: "f76dc724-1666-4d74-9d58-0733fbe78071"
						}],
						code: "{ENCODER}.write({VALUE});",
						tags: ["module", "advanced"]
					}, {
						type: "statement",
						name: "rgbLedAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "03fafc3a-a1f9-4422-a3ce-ca9e554e1476"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "937f2ffe-5fb2-4c93-a032-da86f0d8f3ab"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "09b65f04-37b9-4a60-b9a6-e063eef8334e"
						}],
						content: [{
							type: "text",
							value: "点亮三色LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "rgbs"
						}, {
							type: "text",
							value: "色值红色为"
						}, {
							blockInputId: "RED",
							type: "block-input",
							acceptType: "all",
							name: "03fafc3a-a1f9-4422-a3ce-ca9e554e1476"
						}, {
							type: "text",
							value: "绿色为"
						}, {
							blockInputId: "GREEN",
							type: "block-input",
							acceptType: "all",
							name: "937f2ffe-5fb2-4c93-a032-da86f0d8f3ab"
						}, {
							type: "text",
							value: "蓝色为"
						}, {
							blockInputId: "BLUE",
							type: "block-input",
							acceptType: "all",
							name: "09b65f04-37b9-4a60-b9a6-e063eef8334e"
						}],
						code: "{LED}.setRGBcolor({RED},{GREEN},{BLUE});",
						tags: ["module", "advanced"],
						module: "rgb"
					}, {
						type: "statement",
						name: "SEN006SetPin",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "7487ae62-79d7-4783-a090-5e2e4602ed92"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "942dca2e-54fc-4a0b-809e-1810e9de9695"
						}],
						content: [{
							type: "text",
							value: "设置摇杆"
						}, {
							id: "JOYSTICK",
							type: "dynamic-select",
							options: "SEN006s"
						}, {
							type: "text",
							value: "的引脚，X为"
						}, {
							blockInputId: "X",
							type: "block-input",
							acceptType: "number",
							name: "7487ae62-79d7-4783-a090-5e2e4602ed92"
						}, {
							type: "text",
							value: "Y为"
						}, {
							blockInputId: "Y",
							type: "block-input",
							acceptType: "number",
							name: "942dca2e-54fc-4a0b-809e-1810e9de9695"
						}],
						code: "{JOYSTICK}.setpin({X}, {Y});",
						tags: ["module", "advanced"],
						module: "SEN006"
					}, {
						type: "statement",
						name: "SEN006CalCenterValue",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "b9101a87-ba5b-47f8-a961-11d84c477aa7"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "80843961-c4f8-44db-94b3-a565eb0f3357"
						}],
						content: [{
							type: "text",
							value: "校正摇杆"
						}, {
							id: "JOYSTICK",
							type: "dynamic-select",
							options: "SEN006s"
						}, {
							type: "text",
							value: "的中心点，X轴偏移量为"
						}, {
							blockInputId: "X_OFFSET",
							type: "block-input",
							acceptType: "number",
							name: "b9101a87-ba5b-47f8-a961-11d84c477aa7"
						}, {
							type: "text",
							value: "Y轴偏移量为"
						}, {
							blockInputId: "Y_OFFSET",
							type: "block-input",
							acceptType: "number",
							name: "80843961-c4f8-44db-94b3-a565eb0f3357"
						}],
						code: "{JOYSTICK}.CalCenterValue({X_OFFSET}, {Y_OFFSET});",
						tags: ["module", "advanced"],
						module: "SEN006"
					}, {
						type: "statement",
						name: "SEN017SetPin",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "a7a7a3e6-20d3-4325-8991-640a46245a4f"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "9864f191-1571-4277-934b-745d917c8793"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "1f1b4a92-aace-41d7-80d8-be43a927fe8a"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "62113218-19d6-4b3d-b7ec-e08a0463ab68"
						}],
						content: [{
							type: "text",
							value: "设置巡线阵列"
						}, {
							id: "LINE",
							type: "dynamic-select",
							options: "SEN017s"
						}, {
							type: "text",
							value: "的引脚，D1为"
						}, {
							blockInputId: "D1",
							type: "block-input",
							acceptType: "number",
							name: "a7a7a3e6-20d3-4325-8991-640a46245a4f"
						}, {
							type: "text",
							value: "D2为"
						}, {
							blockInputId: "D2",
							type: "block-input",
							acceptType: "number",
							name: "9864f191-1571-4277-934b-745d917c8793"
						}, {
							type: "text",
							value: "D3为"
						}, {
							blockInputId: "D3",
							type: "block-input",
							acceptType: "number",
							name: "1f1b4a92-aace-41d7-80d8-be43a927fe8a"
						}, {
							type: "text",
							value: "D4为"
						}, {
							blockInputId: "D4",
							type: "block-input",
							acceptType: "number",
							name: "62113218-19d6-4b3d-b7ec-e08a0463ab68"
						}],
						code: "{LINE}.setpin({D1}, {D2}, {D3}, {D4});",
						tags: ["module", "advanced"],
						module: "SEN017"
					}, {
						type: "statement",
						name: "ACT002SetPinAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "23a19473-9337-444a-9fc1-5c5037b1a928"
						}],
						content: [{
							type: "text",
							value: "设置彩色LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "ACT002s"
						}, {
							type: "text",
							value: "的引脚"
						}, {
							blockInputId: "PIN",
							type: "block-input",
							acceptType: "number",
							name: "23a19473-9337-444a-9fc1-5c5037b1a928"
						}],
						code: "{LED}.setpin({PIN});",
						tags: ["module", "advanced"],
						module: "ACT002"
					}, {
						type: "statement",
						name: "ACT002SetColorAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "a78378a4-288e-4c59-b3fe-140fcff76ab3"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "a7db4f9f-4c42-4201-a869-df4c6e6e294e"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "bf8f7ddb-b806-4ce2-a8cf-94221d59ab1e"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "f198ff94-ab2b-4462-9a74-8737cf810219"
						}],
						content: [{
							type: "text",
							value: "设置彩色LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "ACT002s"
						}, {
							type: "text",
							value: "的颜色，索引为"
						}, {
							blockInputId: "INDEX",
							type: "block-input",
							acceptType: "number",
							name: "a78378a4-288e-4c59-b3fe-140fcff76ab3"
						}, {
							type: "text",
							value: "红色为"
						}, {
							blockInputId: "RED",
							type: "block-input",
							acceptType: "number",
							name: "a7db4f9f-4c42-4201-a869-df4c6e6e294e"
						}, {
							type: "text",
							value: "绿色为"
						}, {
							blockInputId: "GREEN",
							type: "block-input",
							acceptType: "number",
							name: "bf8f7ddb-b806-4ce2-a8cf-94221d59ab1e"
						}, {
							type: "text",
							value: "蓝色为"
						}, {
							blockInputId: "BLUE",
							type: "block-input",
							acceptType: "number",
							name: "f198ff94-ab2b-4462-9a74-8737cf810219"
						}],
						code: "{LED}.setColor({INDEX}, {RED}, {GREEN}, {BLUE});",
						tags: ["module", "advanced"],
						module: "ACT002"
					}, {
						type: "statement",
						name: "ACT002SetColorAt",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "be700e00-0037-4fe2-9651-79cc641d7eaf"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "42cf1754-0995-4eb3-97ae-b72b5b53b045"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "212eb953-50d9-4119-be7b-7d710beca448"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "8a570b92-eb58-4e9e-91bd-689c4309b154"
						}],
						content: [{
							type: "text",
							value: "设置彩色LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "ACT002s"
						}, {
							type: "text",
							value: "的颜色，在索引为"
						}, {
							blockInputId: "INDEX",
							type: "block-input",
							acceptType: "number",
							name: "be700e00-0037-4fe2-9651-79cc641d7eaf"
						}, {
							type: "text",
							value: "红色为"
						}, {
							blockInputId: "RED",
							type: "block-input",
							acceptType: "number",
							name: "42cf1754-0995-4eb3-97ae-b72b5b53b045"
						}, {
							type: "text",
							value: "绿色为"
						}, {
							blockInputId: "GREEN",
							type: "block-input",
							acceptType: "number",
							name: "212eb953-50d9-4119-be7b-7d710beca448"
						}, {
							type: "text",
							value: "蓝色为"
						}, {
							blockInputId: "BLUE",
							type: "block-input",
							acceptType: "number",
							name: "8a570b92-eb58-4e9e-91bd-689c4309b154"
						}],
						code: "{LED}.setColorAt({INDEX}, {RED}, {GREEN}, {BLUE});",
						tags: ["module", "advanced"],
						module: "ACT002"
					}, {
						type: "output",
						name: "ACT002GetColorAt",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "122d0e54-5e58-4e22-8896-56070b2b7a21"
						}],
						content: [{
							type: "text",
							value: "获取彩色LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "ACT002s"
						}, {
							type: "text",
							value: "的颜色，索引为"
						}, {
							blockInputId: "INDEX",
							type: "block-input",
							name: "122d0e54-5e58-4e22-8896-56070b2b7a21"
						}],
						code: "{LED}.getColorAt({INDEX})",
						returnType: {
							type: "simple",
							value: "cRGB"
						},
						tags: ["module", "advanced"],
						module: "ACT002"
					}, {
						type: "statement",
						name: "ACT005SetPin",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "c243ecff-5b4c-4e98-acbe-f7c97a05e734"
						}],
						content: [{
							type: "text",
							value: "设置蜂鸣器"
						}, {
							id: "BUZZER",
							type: "dynamic-select",
							options: "ACT005s"
						}, {
							type: "text",
							value: "引脚为"
						}, {
							blockInputId: "PIN",
							type: "block-input",
							acceptType: "number",
							name: "c243ecff-5b4c-4e98-acbe-f7c97a05e734"
						}],
						code: "{BUZZER}.setpin({PIN});",
						tags: ["module", "advanced"],
						module: "ACT005"
					}, {
						type: "statement",
						name: "ACT005ToneAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "525fdbdf-9d6c-4f8f-a8cb-cd3849756675"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "b8bd82e7-1251-4f8b-b8cb-ca8fc1b068cf"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "fb32e4d7-82de-4981-ac8a-63ac436511e9"
						}],
						content: [{
							type: "text",
							value: "蜂鸣器"
						}, {
							id: "BUZZER",
							type: "dynamic-select",
							options: "ACT005s"
						}, {
							type: "text",
							value: "发出声音，引脚为"
						}, {
							blockInputId: "PIN",
							type: "block-input",
							acceptType: "number",
							name: "525fdbdf-9d6c-4f8f-a8cb-cd3849756675"
						}, {
							type: "text",
							value: "频率为"
						}, {
							blockInputId: "FREQUENCY",
							type: "block-input",
							acceptType: "number",
							name: "b8bd82e7-1251-4f8b-b8cb-ca8fc1b068cf"
						}, {
							type: "text",
							value: "Hz，持续时间为"
						}, {
							blockInputId: "DURATION",
							type: "block-input",
							acceptType: "number",
							name: "fb32e4d7-82de-4981-ac8a-63ac436511e9"
						}, {
							type: "text",
							value: "毫秒"
						}],
						code: "{BUZZER}.tone({PIN}, {FREQUENCY}, {DURATION});",
						tags: ["module", "advanced"],
						module: "ACT005"
					}, {
						type: "statement",
						name: "ACT005DidiAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "c0fea7ec-d21f-43b8-a034-aba9019e32c3"
						}],
						content: [{
							type: "text",
							value: "蜂鸣器"
						}, {
							id: "BUZZER",
							type: "dynamic-select",
							options: "ACT005s"
						}, {
							type: "text",
							value: "发出嘀嘀声，引脚为"
						}, {
							blockInputId: "PIN",
							type: "block-input",
							acceptType: "number",
							name: "c0fea7ec-d21f-43b8-a034-aba9019e32c3"
						}],
						code: "{BUZZER}.didi({PIN});",
						tags: ["module", "advanced"],
						module: "ACT005"
					}, {
						type: "statement",
						name: "ACT005NoToneAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "aef18e3d-2146-463e-9210-ca2bce54dd0e"
						}],
						content: [{
							type: "text",
							value: "关闭蜂鸣器"
						}, {
							id: "BUZZER",
							type: "dynamic-select",
							options: "ACT005s"
						}, {
							type: "text",
							value: "引脚为"
						}, {
							blockInputId: "PIN",
							type: "block-input",
							acceptType: "number",
							name: "aef18e3d-2146-463e-9210-ca2bce54dd0e"
						}],
						code: "{BUZZER}.noTone({PIN});",
						tags: ["module", "advanced"],
						module: "ACT005"
					}, {
						type: "statement",
						name: "ACT008Display2",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "17d73bf3-bbb9-4e8d-a729-8743e3bbedda"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "7d29b5ab-03ba-4d2b-a5c2-fa439b8ee758"
						}],
						content: [{
							type: "text",
							value: "数码管"
						}, {
							id: "SEGMENT",
							type: "dynamic-select",
							options: "ACT008s"
						}, {
							type: "text",
							value: "指定位"
						}, {
							blockInputId: "ADDR",
							type: "block-input",
							acceptType: "number",
							name: "17d73bf3-bbb9-4e8d-a729-8743e3bbedda"
						}, {
							type: "text",
							value: "显示数据"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							acceptType: "number",
							name: "7d29b5ab-03ba-4d2b-a5c2-fa439b8ee758"
						}],
						code: "{SEGMENT}.display({ADDR}, {DATA});",
						tags: ["module", "advanced"],
						module: "ACT008"
					}, {
						type: "statement",
						name: "ACT008Display3",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "fa1bb295-4220-4d9b-9972-87df4762a8a4"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "9725f5d6-798d-4fb4-bf61-1582fa1892ef"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "0cdfe9c3-4c3d-4460-932b-b61cfbecfbc5"
						}],
						content: [{
							type: "text",
							value: "数码管"
						}, {
							id: "SEGMENT",
							type: "dynamic-select",
							options: "ACT008s"
						}, {
							type: "text",
							value: "指定位"
						}, {
							blockInputId: "ADDR",
							type: "block-input",
							acceptType: "number",
							name: "fa1bb295-4220-4d9b-9972-87df4762a8a4"
						}, {
							type: "text",
							value: "显示数据"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							acceptType: "number",
							name: "9725f5d6-798d-4fb4-bf61-1582fa1892ef"
						}, {
							type: "text",
							value: "显示时钟点"
						}, {
							blockInputId: "POINT",
							type: "block-input",
							acceptType: "number",
							name: "0cdfe9c3-4c3d-4460-932b-b61cfbecfbc5"
						}],
						code: "{SEGMENT}.display({ADDR}, {DATA}, {POINT});",
						tags: ["module", "advanced"],
						module: "ACT008"
					}, {
						type: "statement",
						name: "ACT008Write",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "dcc2313c-1906-4094-ad29-c567c32cef7a"
						}],
						content: [{
							type: "text",
							value: "数码管"
						}, {
							id: "SEGMENT",
							type: "dynamic-select",
							options: "ACT008s"
						}, {
							type: "text",
							value: "写入数据"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							acceptType: "number",
							name: "dcc2313c-1906-4094-ad29-c567c32cef7a"
						}],
						code: "{SEGMENT}.write({DATA});",
						tags: ["module", "advanced"],
						module: "ACT008"
					}, {
						type: "statement",
						name: "ACT008Write2",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "47fd804a-f1cb-4d8c-be23-898dda80a098"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "6c7d142b-d19c-49ac-9fe9-3320b8fcc69e"
						}],
						content: [{
							type: "text",
							value: "数码管"
						}, {
							id: "SEGMENT",
							type: "dynamic-select",
							options: "ACT008s"
						}, {
							type: "text",
							value: "写入数据，位地址为"
						}, {
							blockInputId: "ADDR",
							type: "block-input",
							acceptType: "number",
							name: "47fd804a-f1cb-4d8c-be23-898dda80a098"
						}, {
							type: "text",
							value: "数据为"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							acceptType: "number",
							name: "6c7d142b-d19c-49ac-9fe9-3320b8fcc69e"
						}],
						code: "{SEGMENT}.write({ADDR}, {DATA});",
						tags: ["module", "advanced"],
						module: "ACT008"
					}, {
						type: "output",
						name: "ACT008Coding",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "8b40d6ea-834f-4870-b09a-b88b91ffb684"
						}],
						content: [{
							type: "text",
							value: "数码管"
						}, {
							id: "SEGMENT",
							type: "dynamic-select",
							options: "ACT008s"
						}, {
							type: "text",
							value: "转换数据"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							name: "8b40d6ea-834f-4870-b09a-b88b91ffb684"
						}, {
							type: "text",
							value: "为数码管段码"
						}],
						code: "{SEGMENT}.coding({DATA})",
						returnType: {
							type: "simple",
							value: "int"
						},
						tags: ["module", "advanced"],
						module: "ACT008"
					}, {
						type: "statement",
						name: "ACT008Coding2",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "f33f7baa-17c5-4405-a1ce-36ef9d1d696f"
						}],
						content: [{
							type: "text",
							value: "数码管"
						}, {
							id: "SEGMENT",
							type: "dynamic-select",
							options: "ACT008s"
						}, {
							type: "text",
							value: "转换数据"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							acceptType: "number",
							name: "f33f7baa-17c5-4405-a1ce-36ef9d1d696f"
						}, {
							type: "text",
							value: "为数码管段码数组"
						}],
						code: "{SEGMENT}.coding({DATA});",
						tags: ["module", "advanced"],
						module: "ACT008"
					}
					/*, {
										type: "statement",
										name: "ACT008Set",
										connectors: [{
											type: "connector-top",
											accept: "connector-bottom"
										}, {
											type: "connector-bottom",
											accept: "connector-top"
										}, {
											type: "connector-input",
											accept: "connector-output",
											acceptType: "all",
											name: "d9b811eb-353f-44fa-bb1c-9cc422af6462"
										}, {
											type: "connector-input",
											accept: "connector-output",
											acceptType: "all",
											name: "218b6269-8ae2-44d2-8728-58b64f45191f"
										}, {
											type: "connector-input",
											accept: "connector-output",
											acceptType: "all",
											name: "8bf83db2-323c-42cc-a6dd-ae63effae27b"
										}],
										content: [{
											type: "text",
											value: "设置数码管"
										}, {
											id: "SEGMENT",
											type: "dynamic-select",
											options: "Ro7SegmentDisplays"
										}, {
											type: "text",
											value: "亮度为"
										}, {
											blockInputId: "BRIGHTNESS",
											type: "block-input",
											acceptType: "number",
											name: "d9b811eb-353f-44fa-bb1c-9cc422af6462"
										}, {
											type: "text",
											value: "数据地址为"
										}, {
											blockInputId: "DATA_ADDR",
											type: "block-input",
											acceptType: "number",
											name: "218b6269-8ae2-44d2-8728-58b64f45191f"
										}, {
											type: "text",
											value: "显示地址为"
										}, {
											blockInputId: "DISPLAY_ADDR",
											type: "block-input",
											acceptType: "number",
											name: "8bf83db2-323c-42cc-a6dd-ae63effae27b"
										}],
										code: "{SEGMENT}.set({BRIGHTNESS}, {DATA_ADDR}, {DISPLAY_ADDR});",
										tags: ["module"],
										module: "Ro7SegmentDisplay"
									}*/
					, {
						type: "statement",
						name: "ACT009SetPin",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "a51a9749-5f80-4092-a2b3-ddeca3473aeb"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "d5014d11-7d0a-4a01-bd57-0628400d759a"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "e661dd26-e81c-4802-b971-b0859bd4f4aa"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "3cb3d2c2-93c8-4815-9b1f-54eecfcab023"
						}],
						content: [{
							type: "text",
							value: "设置点阵模块"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "ACT009s"
						}, {
							type: "text",
							value: "引脚，DATA为"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							acceptType: "number",
							name: "a51a9749-5f80-4092-a2b3-ddeca3473aeb"
						}, {
							type: "text",
							value: "CLK为"
						}, {
							blockInputId: "CLK",
							type: "block-input",
							acceptType: "number",
							name: "d5014d11-7d0a-4a01-bd57-0628400d759a"
						}, {
							type: "text",
							value: "CS为"
						}, {
							blockInputId: "CS",
							type: "block-input",
							acceptType: "number",
							name: "e661dd26-e81c-4802-b971-b0859bd4f4aa"
						}, {
							type: "text",
							value: "数量为"
						}, {
							blockInputId: "NUM",
							type: "block-input",
							acceptType: "number",
							name: "3cb3d2c2-93c8-4815-9b1f-54eecfcab023"
						}],
						code: "{LCD}.setpin({DATA}, {CLK}, {CS}, {NUM});",
						tags: ["module", "advanced"],
						module: "ACT009"
					}, {
						type: "statement",
						name: "ACT009SetLed",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "f2069e73-7c79-43b5-865f-8fbbb1392156"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "c4d622c5-1def-4bba-86ff-305fb133a816"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "b48aaa24-bb98-4765-9fab-20f59249f038"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "fbfc5e58-ab7b-40e6-b225-ab240ed7696f"
						}],
						content: [{
							type: "text",
							value: "设置点阵模块"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "ACT009s"
						}, {
							type: "text",
							value: "指定点的LED亮灭，地址为"
						}, {
							blockInputId: "ADDR",
							type: "block-input",
							acceptType: "number",
							name: "f2069e73-7c79-43b5-865f-8fbbb1392156"
						}, {
							type: "text",
							value: "行"
						}, {
							blockInputId: "ROW",
							type: "block-input",
							acceptType: "number",
							name: "c4d622c5-1def-4bba-86ff-305fb133a816"
						}, {
							type: "text",
							value: "列"
						}, {
							blockInputId: "COL",
							type: "block-input",
							acceptType: "number",
							name: "b48aaa24-bb98-4765-9fab-20f59249f038"
						}, {
							type: "text",
							value: "亮灭"
						}, {
							blockInputId: "STATE",
							type: "block-input",
							acceptType: "number",
							name: "fbfc5e58-ab7b-40e6-b225-ab240ed7696f"
						}],
						code: "{LCD}.setLed({ADDR}, {ROW}, {COL}, {STATE});",
						tags: ["module", "advanced"],
						module: "ACT009"
					}, {
						type: "statement",
						name: "ACT009SetRow",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "afc8783a-257f-4877-b1de-e691efc56ad8"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "2e81a42d-aaaa-4489-9abb-3baf8d1a8c19"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "2699a77f-dfa2-4412-9c83-757e88af0fda"
						}],
						content: [{
							type: "text",
							value: "设置点阵模块"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "ACT009s"
						}, {
							type: "text",
							value: "指定行的LED亮灭，地址为"
						}, {
							blockInputId: "ADDR",
							type: "block-input",
							acceptType: "number",
							name: "afc8783a-257f-4877-b1de-e691efc56ad8"
						}, {
							type: "text",
							value: "行"
						}, {
							blockInputId: "ROW",
							type: "block-input",
							acceptType: "number",
							name: "2e81a42d-aaaa-4489-9abb-3baf8d1a8c19"
						}, {
							type: "text",
							value: "亮灭"
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: "number",
							name: "2699a77f-dfa2-4412-9c83-757e88af0fda"
						}],
						code: "{LCD}.setRow({ADDR}, {ROW}, {VALUE});",
						tags: ["module", "advanced"],
						module: "ACT009"
					}, {
						type: "statement",
						name: "ACT009SetColumn",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "1ec003a0-8e02-41ab-b746-c825a1d372c3"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "3ea29551-3f0b-4be3-8c33-8064ae8dc775"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "a3328dd9-8ff3-4f3a-9c0e-4ac811ad3da7"
						}],
						content: [{
							type: "text",
							value: "设置点阵模块"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "ACT009s"
						}, {
							type: "text",
							value: "指定列的LED亮灭，地址为"
						}, {
							blockInputId: "ADDR",
							type: "block-input",
							acceptType: "number",
							name: "1ec003a0-8e02-41ab-b746-c825a1d372c3"
						}, {
							type: "text",
							value: "列"
						}, {
							blockInputId: "COL",
							type: "block-input",
							acceptType: "number",
							name: "3ea29551-3f0b-4be3-8c33-8064ae8dc775"
						}, {
							type: "text",
							value: "亮灭"
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: "number",
							name: "a3328dd9-8ff3-4f3a-9c0e-4ac811ad3da7"
						}],
						code: "{LCD}.setColumn({ADDR}, {COL}, {VALUE});",
						tags: ["module", "advanced"],
						module: "ACT009"
					}, {
						type: "statement",
						name: "ACT009DisplayRotation",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "6e2c90e2-71fb-44cd-890c-ba70597a978e"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "2df43577-798f-48c5-bc58-08a812cb250a"
						}],
						content: [{
							type: "text",
							value: "点阵模块"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "ACT009s"
						}, {
							type: "text",
							value: "旋转90度显示，地址为"
						}, {
							blockInputId: "ADDR",
							type: "block-input",
							acceptType: "number",
							name: "6e2c90e2-71fb-44cd-890c-ba70597a978e"
						}, {
							type: "text",
							value: "数据为"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							acceptType: "number",
							name: "2df43577-798f-48c5-bc58-08a812cb250a"
						}],
						code: "{LCD}.displayRotation({ADDR}, {DATA});",
						tags: ["module"],
						module: "ZZZkongmokuai"
					}, {
						type: "statement",
						name: "ACT009DisplayMinRotation",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "805cd578-0a23-410d-83da-b15b410ff142"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "2f0d9241-5093-4578-90e4-a509b957c659"
						}],
						content: [{
							type: "text",
							value: "点阵模块"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "ACT009s"
						}, {
							type: "text",
							value: "8*8旋转90度显示，地址为"
						}, {
							blockInputId: "ADDR",
							type: "block-input",
							acceptType: "number",
							name: "805cd578-0a23-410d-83da-b15b410ff142"
						}, {
							type: "text",
							value: "数据为"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							acceptType: "number",
							name: "2f0d9241-5093-4578-90e4-a509b957c659"
						}],
						code: "{LCD}.displayMinRotation({ADDR}, {DATA});",
						tags: ["module", "advanced"],
						module: "ACT009"
					}, {
						type: "statement",
						name: "oscillatorAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "7df60b80-3437-452c-a01c-b2eb70f38a9a"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "85c20ede-0585-478b-bddf-b5ce72e632f9"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "990e249d-9108-4fbf-86c5-1d5200572995"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "8a83d1fa-74d9-4993-afd1-0c14796e169a"
						}],
						content: [{
							type: "text",
							value: "Oscillate servo"
						}, {
							blockInputId: "OSCILLATOR",
							type: "block-input",
							acceptType: "all",
							name: "7df60b80-3437-452c-a01c-b2eb70f38a9a"
						}, {
							type: "text",
							value: "around"
						}, {
							blockInputId: "PHASE",
							type: "block-input",
							acceptType: "all",
							name: "85c20ede-0585-478b-bddf-b5ce72e632f9"
						}, {
							type: "text",
							value: "with amplitude"
						}, {
							blockInputId: "AMPLITUDE",
							type: "block-input",
							acceptType: "all",
							name: "990e249d-9108-4fbf-86c5-1d5200572995"
						}, {
							type: "text",
							value: "with speed"
						}, {
							blockInputId: "SPEED",
							type: "block-input",
							acceptType: "all",
							name: "8a83d1fa-74d9-4993-afd1-0c14796e169a"
						}],
						code: "{OSCILLATOR}.SetO({PHASE});\n{OSCILLATOR}.SetA({AMPLITUDE});\n{OSCILLATOR}.SetT({SPEED});\n{OSCILLATOR}.refresh();",
						tags: ["module", "advanced"]
					}, {
						type: "statement",
						name: "oscillatorStartAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "b0e8f5b3-a867-424d-ba93-22ff7406bd26"
						}],
						content: [{
							type: "text",
							value: "Oscillator"
						}, {
							blockInputId: "OSCILLATOR",
							type: "block-input",
							acceptType: "all",
							name: "b0e8f5b3-a867-424d-ba93-22ff7406bd26"
						}],
						code: "{OSCILLATOR}.start()",
						tags: ["module", "advanced"]
					}, {
						type: "statement",
						name: "oscillatorStopAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "b489257c-fc38-493b-93b2-b3311db488b4"
						}],
						content: [{
							type: "text",
							value: "Stop oscillator"
						}, {
							blockInputId: "OSCILLATOR",
							type: "block-input",
							acceptType: "all",
							name: "b489257c-fc38-493b-93b2-b3311db488b4"
						}],
						code: "{OSCILLATOR}.stop()",
						tags: ["module", "advanced"]
					}, {
						type: "output",
						name: "digitalReadAdvanced",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "c585be5f-5bdf-476d-b3c1-ebb0f8886cb8"
						}],
						content: [{
							type: "text",
							value: "读取引脚"
						}, {
							blockInputId: "PIN",
							type: "block-input",
							acceptType: "all",
							name: "c585be5f-5bdf-476d-b3c1-ebb0f8886cb8"
						}, {
							type: "text",
							value: "的数字量"
						}],
						code: "digitalRead({PIN})",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["module", "advanced"],
						module: "default"
					},
					/*11111111111111111111111111111111111111*/
					{
						type: "output",
						name: "analogRead1",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "读取引脚"
						}, {
							id: "PIN",
							type: "dynamic-select",
							options: "pots"
						}, {
							type: "text",
							value: "的数字量"
						}],
						code: "analogRead({PIN})",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["module"],
						module: "pot"
					}, {
						type: "output",
						name: "analogRead2",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "读取引脚"
						}, {
							id: "PIN",
							type: "dynamic-select",
							options: "pots"
						}, {
							type: "text",
							value: "的模拟量"
						}],
						code: "analogRead({PIN})",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["module"],
						module: "pot"
					}, {
						type: "output",
						name: "analogRead3",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "读取"
						}, {
							id: "PIN",
							type: "dynamic-select",
							options: "pots"
						}, {
							type: "text",
							value: "的值"
						}],
						code: "analogRead({PIN})",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["module"],
						module: "pot"
					}, {
						type: "statement",
						name: "buzzer1",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "蜂鸣器"
						}, {
							id: "BUZZER",
							type: "dynamic-select",
							options: "buzzers"
						}, {
							type: "text",
							value: "发出声音，频率为"
						}, {
							id: "RATE",
							type: "number-input",
							value: 1000
						}, {
							type: "text",
							value: "持续"
						}, {
							id: "SECONDS",
							type: "number-input",
							value: 1000
						}, {
							type: "text",
							value: "毫秒"
						}],
						code: "{BUZZER}.tone({RATE},{SECONDS});",
						tags: ["module"],
						module: "buzzer"
					}, {
						type: "statement",
						name: "ACT005Didi",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "蜂鸣器"
						}, {
							id: "BUZZER",
							type: "dynamic-select",
							options: "buzzers"
						}, {
							type: "text",
							value: "发出嘀嘀声"
						}],
						code: "{BUZZER}.didi();",
						tags: ["module"],
						module: "buzzer"
					}, {
						type: "statement",
						name: "ACT008Init",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "2fd82468-e88c-4569-a91d-94862092c502"
						}],
						content: [{
							type: "text",
							value: "数码管"
						}, {
							id: "SEGMENT",
							type: "dynamic-select",
							options: "Ro7SegmentDisplays"
						}, {
							type: "text",
							value: "显示数字"
						}, {
							blockInputId: "RATE",
							type: "block-input",
							acceptType: "all",
							name: "2fd82468-e88c-4569-a91d-94862092c502"
						}],
						code: "{SEGMENT}.display({RATE});",
						tags: ["module"],
						module: "Ro7SegmentDisplay"
					}, {
						type: "statement",
						name: "led1",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "20a464bc-527f-4429-b21e-8db0b9404285"
						}],
						content: [{
							type: "text",
							value: "设置LED"
						}, {
							id: "LED",
							type: "dynamic-select",
							options: "leds"
						}, {
							type: "text",
							value: "亮度为"
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: "all",
							name: "20a464bc-527f-4429-b21e-8db0b9404285"
						}],
						code: "analogWrite({LED},{VALUE});",
						tags: ["module"],
						module: "led"
					},
					//   控制亮度 0 - 7
					{
						type: "statement",
						name: "SetBrightness",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "设置数码管"
						}, {
							id: "SEGMENT",
							type: "dynamic-select",
							options: "Ro7SegmentDisplays"
						}, {
							type: "text",
							value: "亮度为"
						}, {
							id: "Brightness",
							type: "static-select",
							options: [{
								label: "0",
								value: "0"
							}, {
								label: "1",
								value: "1"
							}, {
								label: "2",
								value: "2"
							}, {
								label: "3",
								value: "3"
							}, {
								label: "4",
								value: "4"
							}, {
								label: "5",
								value: "5"
							}, {
								label: "6",
								value: "6"
							}, {
								label: "7",
								value: "7"
							}]
						}],
						code: "{SEGMENT}.setBrightness({Brightness});",
						tags: ["module"],
						module: "Ro7SegmentDisplay"
					}, {
						type: "statement",
						name: "ACT008ClearDisplay",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "清除数码管"
						}, {
							id: "SEGMENT",
							type: "dynamic-select",
							options: "Ro7SegmentDisplays"
						}, {
							type: "text",
							value: "显示"
						}],
						code: "{SEGMENT}.clearDisplay();",
						tags: ["module"],
						module: "Ro7SegmentDisplay"
					}, {
						type: "output",
						name: "analogRead4",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "获取"
						}, {
							id: "PIN",
							type: "dynamic-select",
							options: "buttons"
						}, {
							type: "text",
							value: "的状态"
						}],
						code: "digitalRead({PIN})",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["module"],
						module: "button"
					}, {
						type: "output",
						name: "LightanalogRead",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "读取光敏传感器"
						}, {
							id: "PIN",
							type: "dynamic-select",
							options: "lightSensors"
						}, {
							type: "text",
							value: "的光照强度"
						}],
						code: "analogRead({PIN})",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["module"],
						module: "lightSensor"
					}, {
						type: "statement",
						name: "ACT008SetPin",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "设置数码管"
						}, {
							id: "SEGMENT",
							type: "dynamic-select",
							options: "Ro7SegmentDisplays"
						}, {
							type: "text",
							value: "第"
						}, {
							id: "BitAddr",
							type: "static-select",
							options: [{
								label: "0",
								value: "0"
							}, {
								label: "1",
								value: "1"
							}, {
								label: "2",
								value: "2"
							}, {
								label: "3",
								value: "3"
							}]
						}, {
							type: "text",
							value: "位显示"
						}, {
							id: "DispData",
							type: "static-select",
							options: [{
								label: "0",
								value: "0"
							}, {
								label: "1",
								value: "1"
							}, {
								label: "2",
								value: "2"
							}, {
								label: "3",
								value: "3"
							}, {
								label: "4",
								value: "4"
							}, {
								label: "5",
								value: "5"
							}, {
								label: "6",
								value: "6"
							}, {
								label: "7",
								value: "7"
							}, {
								label: "8",
								value: "8"
							}, {
								label: "9",
								value: "9"
							}, {
								label: "A",
								value: "'A'"
							}, {
								label: "B",
								value: "'B'"
							}, {
								label: "C",
								value: "'C'"
							}, {
								label: "D",
								value: "'D'"
							}, {
								label: "E",
								value: "'E'"
							}, {
								label: "F",
								value: "'F'"
							}]
						}],
						code: "{SEGMENT}.displayBit({BitAddr}, {DispData});",
						tags: ["module"],
						module: "Ro7SegmentDisplay"
					},
					// {
					// 	type: "statement",
					// 	name: "ACT009Shutdown",
					// 	connectors: [{
					// 		type: "connector-top",
					// 		accept: "connector-bottom"
					// 	}, {
					// 		type: "connector-bottom",
					// 		accept: "connector-top"
					// 	}, {
					// 		type: "connector-input",
					// 		accept: "connector-output",
					// 		acceptType: "all",
					// 		name: "d1e01a1f-ebff-441a-9672-1207e3dda8df"
					// 	}, {
					// 		type: "connector-input",
					// 		accept: "connector-output",
					// 		acceptType: "boolean",
					// 		name: "fd3a61fa-83b0-4bfc-a5cf-159dd2096109"
					// 	}],
					// 	content: [{
					// 		type: "text",
					// 		value: "设置点阵模块"
					// 	}, {
					// 		id: "LCD",
					// 		type: "dynamic-select",
					// 		options: "ACT009s"
					// 	}, {
					// 		type: "text",
					// 		value: "关断模式，地址为"
					// 	}, {
					// 		blockInputId: "ADDR",
					// 		type: "block-input",
					// 		acceptType: "number",
					// 		name: "d1e01a1f-ebff-441a-9672-1207e3dda8df"
					// 	}, {
					// 		type: "text",
					// 		value: "状态为"
					// 	}, {
					// 		blockInputId: "STATUS",
					// 		type: "block-input",
					// 		acceptType: "boolean",
					// 		name: "fd3a61fa-83b0-4bfc-a5cf-159dd2096109"
					// 	}],
					// 	code: "{LCD}.shutdown({ADDR}, {STATUS});",
					// 	tags: ["module"],
					// 	module: "ACT009"
					// }
					, {
						type: "statement",
						name: "LCDdisplay01",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "c9ee8ac8-96b7-49b0-b907-11be6f352a70"
						}],
						content: [{
							type: "text",
							value: "点阵模块"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "ACT009s"
						}, {
							type: "text",
							value: "显示，第"
						}, {
							id: "addr",
							type: "static-select",
							options: [{
								label: "0",
								value: "0"
							}, {
								label: "1",
								value: "1"
							}, {
								label: "2",
								value: "2"
							}, {
								label: "3",
								value: "3"
							}]
						}, {
							type: "text",
							value: "个显示字符"
						}, {
							blockInputId: "ch",
							type: "block-input",
							acceptType: "number",
							name: "c9ee8ac8-96b7-49b0-b907-11be6f352a70"
						}],
						code: "{LCD}.display({addr},{ch});",
						tags: ["module"],
						module: "ACT009"
					}, {
						type: "statement",
						name: "LCDdisplay02",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "点阵模块"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "ACT009s"
						}, {
							type: "text",
							value: "第"
						}, {
							id: "addr",
							type: "static-select",
							options: [{
								label: "0",
								value: "0"
							}, {
								label: "1",
								value: "1"
							}, {
								label: "2",
								value: "2"
							}, {
								label: "3",
								value: "3"
							}]
						}, {
							type: "text",
							value: "个显示"
						}, {
							id: "ch",
							type: "static-select",
							options: [{
								label: "汉字",
								value: "Data_he"
							}, {
								label: "心形",
								value: "Data_xin"
							}]
						}],
						code: "{LCD}.display({addr},{ch});",
						tags: ["module"],
						module: "ACT009"
					}, {
						type: "statement",
						name: "setDisplayType",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "设置点阵模块"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "ACT009s"
						}, {
							type: "text",
							value: "显示模式"
						}, {
							id: "angleValue",
							type: "static-select",
							options: [{
								label: "0deg",
								value: "0"
							}, {
								label: "90deg",
								value: "1"
							}]
						}, {
							type: "text",
							value: ","
						}, {
							id: "sizeValue",
							type: "static-select",
							options: [{
								label: "8*8",
								value: "0"
							}, {
								label: "8*16",
								value: "1"
							}, {
								label: "16*16",
								value: "2"
							}]
						}],
						code: "{LCD}.setDisplayType({angleValue},{sizeValue});",
						tags: ["module"],
						module: "ACT009"
					},
					// {
					// 	type: "statement",
					// 	name: "LCDdisplay03",
					// 	connectors: [{
					// 		type: "connector-top",
					// 		accept: "connector-bottom"
					// 	}, {
					// 		type: "connector-bottom",
					// 		accept: "connector-top"
					// 	}, {
					// 		type: "connector-input",
					// 		accept: "connector-output",
					// 		acceptType: "all",
					// 		name: "b2dd8577-68e0-4a38-a041-f4c4b4301c7a"
					// 	}, {
					// 		type: "connector-input",
					// 		accept: "connector-output",
					// 		acceptType: "all",
					// 		name: "c9ee8ac8-96b7-49b0-b907-11be6f352a70"
					// 	}],
					// 	content: [{
					// 		type: "text",
					// 		value: "点阵模块"
					// 	}, {
					// 		id: "LCD",
					// 		type: "dynamic-select",
					// 		options: "ACT009s"
					// 	}, {
					// 		type: "text",
					// 		value: "显示，第"
					// 	}, {
					// 		blockInputId: "addr",
					// 		type: "block-input",
					// 		acceptType: "number",
					// 		name: "b2dd8577-68e0-4a38-a041-f4c4b4301c7a"
					// 	}, {
					// 		type: "text",
					// 		value: "个字符显示"
					// 	}, {
					// 		blockInputId: "ch",
					// 		type: "block-input",
					// 		acceptType: "number",
					// 		name: "c9ee8ac8-96b7-49b0-b907-11be6f352a70"
					// 	}],
					// 	code: "{LCD}.display({addr},{ch});",
					// 	tags: ["module"],
					// 	module: "ACT009"
					// }
					// ,
					{
						type: "statement",
						name: "clearDisplay01",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "清除点阵模块"
						}, {
							id: "LCD",
							type: "dynamic-select",
							options: "ACT009s"
						}, {
							type: "text",
							value: "显示"
						}, {
							id: "addr",
							type: "static-select",
							options: [{
								label: "0",
								value: "0"
							}, {
								label: "1",
								value: "1"
							}, {
								label: "2",
								value: "2"
							}, {
								label: "3",
								value: "3"
							}, {
								label: "全部",
								value: "4"
							}]
						}],
						code: "{LCD}.clearDisplay({addr});",
						tags: ["module"],
						module: "ACT009"
					}
					/*11111111111111111111111111111111111111111111111111111*/
					, {
						type: "output",
						name: "analogReadAdvanced",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "8b0e7306-5424-4483-bb25-991cc88ee22c"
						}],
						content: [{
							type: "text",
							value: "读取引脚"
						}, {
							blockInputId: "PIN",
							type: "block-input",
							acceptType: "all",
							name: "8b0e7306-5424-4483-bb25-991cc88ee22c"
						}, {
							type: "text",
							value: "的模拟量"
						}],
						code: "'{PIN}'.indexOf('A') !== -1 ? 'analogRead({PIN})'.replace(/\"/g, '') : 'analogRead({PIN})'",
						eval: true,
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["module", "advanced"],
						module: "default"
					}, {
						type: "statement",
						name: "analogWrite",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "5dbec0d7-2c71-4943-bdda-091ec3248cd7"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "786457fd-727b-4a52-ac76-ac47a96c097a"
						}],
						content: [{
							type: "text",
							value: "设置引脚"
						}, {
							blockInputId: "PIN",
							type: "block-input",
							acceptType: "all",
							name: "5dbec0d7-2c71-4943-bdda-091ec3248cd7"
						}, {
							type: "text",
							value: "模拟量为"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							acceptType: "all",
							name: "786457fd-727b-4a52-ac76-ac47a96c097a"
						}],
						code: "'{PIN}'.indexOf('A') !== -1 ? 'analogWrite({PIN},{DATA});'.replace(/\"/g, '') : 'analogWrite({PIN},{DATA});'",
						eval: true,
						tags: ["module", "advanced"],
						module: "default"
					}, {
						type: "statement",
						name: "digitalWrite",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "06703099-aea8-4ef9-a648-a32f89051e5c"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "c68c77de-ef1c-4f54-88a3-a8566d882b7b"
						}],
						content: [{
							type: "text",
							value: "设置引脚"
						}, {
							blockInputId: "PIN",
							type: "block-input",
							acceptType: "all",
							name: "06703099-aea8-4ef9-a648-a32f89051e5c"
						}, {
							type: "text",
							value: "数字量为"
						}, {
							blockInputId: "DATA",
							type: "block-input",
							acceptType: "all",
							name: "c68c77de-ef1c-4f54-88a3-a8566d882b7b"
						}],
						code: "digitalWrite({PIN},{DATA});",
						tags: ["module", "advanced"],
						module: "default"
					}, {
						type: "statement",
						name: "servoNormalAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "78baf27b-134e-493c-87cf-c89193802711"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "90672fb5-8f1f-45d2-82de-9415185c2b44"
						}],
						content: [{
							type: "text",
							value: "设置舵机"
						}, {
							blockInputId: "SERVO",
							type: "block-input",
							acceptType: "all",
							name: "78baf27b-134e-493c-87cf-c89193802711"
						}, {
							type: "text",
							value: "角度为"
						}, {
							blockInputId: "POSITION",
							type: "block-input",
							acceptType: "all",
							name: "90672fb5-8f1f-45d2-82de-9415185c2b44"
						}, {
							type: "text",
							value: "度"
						}],
						code: "{SERVO}.write({POSITION});",
						tags: ["module", "advanced"]
					}, {
						type: "statement",
						name: "lcdWritePositionAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "5b8ac541-9ef8-48fa-b798-04ef13c0ef83"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "ff3bf8e8-5438-4a0d-822a-346d8838af7d"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "7ed6194c-1253-4ac3-a1cd-c5a1b0334e8a"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "c0f6dffb-bbb6-4906-bb65-313ee54e26b9"
						}],
						content: [{
							type: "text",
							value: "在液晶"
						}, {
							blockInputId: "LCD",
							type: "block-input",
							acceptType: "all",
							name: "ff3bf8e8-5438-4a0d-822a-346d8838af7d"
						}, {
							blockInputId: "ROW",
							type: "block-input",
							acceptType: "all",
							name: "c0f6dffb-bbb6-4906-bb65-313ee54e26b9"
						}, {
							type: "text",
							value: "行"
						}, {
							blockInputId: "COLUMN",
							type: "block-input",
							acceptType: "all",
							name: "7ed6194c-1253-4ac3-a1cd-c5a1b0334e8a"
						}, {
							type: "text",
							value: "列"
						}, {
							type: "text",
							value: "上显示"
						}, {
							blockInputId: "TEXT",
							type: "block-input",
							acceptType: "all",
							name: "5b8ac541-9ef8-48fa-b798-04ef13c0ef83"
						}],
						code: "{LCD}.setCursor({COLUMN},{ROW});{LCD}.print({TEXT});",
						tags: ["module", "advanced"]
					}, {
						type: "statement-input",
						name: "voidFunction",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "定义函数"
						}, {
							id: "FUNCNAME",
							type: "var-input",
							placeholder: "名字"
						}],
						createDynamicContent: "voidFunctions",
						returnType: {
							type: "simple",
							value: "void"
						},
						code: "void {FUNCNAME}(){{STATEMENTS}}",
						tags: ["function"]
					}, {
						type: "statement",
						name: "invokeFunction",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "调用函数"
						}, {
							id: "FUNCTION",
							type: "dynamic-select",
							options: "voidFunctions"
						}],
						code: "{FUNCTION}();",
						tags: ["function"]
					}, {
						type: "statement-input",
						name: "returnFunction",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "10711311-e515-493b-ba2b-22899b993034"
						}],
						content: [{
							type: "text",
							value: "定义函数"
						}, {
							id: "FUNCNAME",
							type: "var-input",
							placeholder: "名字"
						}, {
							extra: true,
							type: "text",
							value: "返回"
						}, {
							extra: true,
							blockInputId: "RETURN",
							type: "block-input",
							acceptType: "all",
							name: "10711311-e515-493b-ba2b-22899b993034"
						}],
						createDynamicContent: "returnFunctions",
						returnType: {
							type: "fromInput",
							blockInputId: "RETURN"
						},
						code: "{RETURN.connectionType} {FUNCNAME}() {{STATEMENTS}return {RETURN};}",
						tags: ["function"]
					}, {
						type: "output",
						name: "invokeReturnFunction",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "调用函数"
						}, {
							id: "FUNCTION",
							type: "dynamic-select",
							options: "returnFunctions"
						}],
						code: "{FUNCTION}()",
						returnType: {
							type: "fromDynamicSelect",
							id: "FUNCTION",
							options: "returnFunctions"
						},
						tags: ["function"]
					}, {
						type: "statement-input",
						name: "voidFunctionWithArguments",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "e9864451-638d-4c6e-bd6b-69bd4af0cb68"
						}],
						content: [{
							type: "text",
							value: "定义函数"
						}, {
							id: "FUNCNAME",
							type: "var-input",
							placeholder: "名字"
						}, {
							type: "text",
							value: "并带这些参数:"
						}, {
							blockInputId: "ARGS",
							type: "block-input",
							acceptType: "all",
							name: "e9864451-638d-4c6e-bd6b-69bd4af0cb68"
						}],
						createDynamicContent: "voidFunctions",
						returnType: {
							type: "simple",
							value: "void"
						},
						arguments: {
							type: "fromInput",
							blockInputId: "ARGS"
						},
						code: "void {FUNCNAME} ({ARGS}){{STATEMENTS}}",
						tags: ["function", "advanced"]
					}, {
						type: "statement",
						name: "invokeFunctionWithArguments",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "fe804f29-2a6b-4e0e-a02b-8c2ae96e4472"
						}],
						content: [{
							type: "text",
							value: "调用函数"
						}, {
							id: "FUNCTION",
							type: "dynamic-select",
							options: "voidFunctions"
						}, {
							type: "text",
							value: "用这些参数:"
						}, {
							blockInputId: "ARGS",
							type: "block-input",
							acceptType: "all",
							name: "fe804f29-2a6b-4e0e-a02b-8c2ae96e4472"
						}],
						code: "{FUNCTION}({ARGS});",
						tags: ["function", "advanced"]
					}, {
						type: "statement-input",
						name: "returnFunctionWithArguments",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "10f62c3e-5a74-42b1-bd7b-b62e7ba82246"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "e4eaed75-8741-45ea-8dd0-bbd9776295dd"
						}],
						content: [{
							type: "text",
							value: "定义函数"
						}, {
							id: "FUNCNAME",
							type: "var-input",
							placeholder: "名字"
						}, {
							type: "text",
							value: "并带这些参数:"
						}, {
							blockInputId: "ARGS",
							type: "block-input",
							acceptType: "all",
							name: "10f62c3e-5a74-42b1-bd7b-b62e7ba82246"
						}, {
							extra: true,
							type: "text",
							value: "返回"
						}, {
							extra: true,
							blockInputId: "RETURN",
							type: "block-input",
							acceptType: "all",
							name: "e4eaed75-8741-45ea-8dd0-bbd9776295dd"
						}],
						createDynamicContent: "returnFunctions",
						returnType: {
							type: "fromInput",
							blockInputId: "RETURN"
						},
						arguments: {
							type: "fromInput",
							blockInputId: "ARGS"
						},
						code: "{RETURN.connectionType} {FUNCNAME} ({ARGS}) {{STATEMENTS}return {RETURN};}",
						tags: ["function", "advanced"]
					}, {
						type: "output",
						name: "invokeReturnFunctionWithArguments",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "51828a12-4317-4316-9d88-12f2d127f447"
						}],
						content: [{
							type: "text",
							value: "调用函数"
						}, {
							id: "FUNCTION",
							type: "dynamic-select",
							options: "returnFunctions"
						}, {
							type: "text",
							value: "用这些参数:"
						}, {
							blockInputId: "ARGS",
							type: "block-input",
							acceptType: "all",
							name: "51828a12-4317-4316-9d88-12f2d127f447"
						}],
						code: "{FUNCTION}({ARGS})",
						returnType: {
							type: "fromDynamicSelect",
							id: "FUNCTION",
							options: "returnFunctions"
						},
						tags: ["function", "advanced"]
					}, {
						type: "output",
						name: "argument",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "变量"
						}, {
							id: "TYPE",
							type: "static-select",
							options: [{
								label: "整数",
								value: "int"
							}, {
								label: "浮点数",
								value: "float"
							}, {
								label: "文本",
								value: "String"
							}, {
								label: "字符",
								value: "char"
							}, {
								label: "布尔",
								value: "bool"
							}]
						}, {
							id: "VARNAME",
							type: "var-input",
							value: ""
						}],
						createDynamicContent: "vars",
						code: "{TYPE} {VARNAME}",
						returnType: {
							type: "fromDropdown",
							id: "TYPE",
							options: "vars"
						},
						tags: ["function", "advanced"]
					}, {
						type: "output",
						name: "arguments",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "d7e20b5c-3939-4e96-93dc-30aebf2b64c9"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "99234802-2fbc-4866-b413-f1af75abfdf6"
						}],
						content: [{
							blockInputId: "ARG1",
							type: "block-input",
							acceptType: "all",
							name: "d7e20b5c-3939-4e96-93dc-30aebf2b64c9"
						}, {
							type: "text",
							value: ","
						}, {
							blockInputId: "ARG2",
							type: "block-input",
							acceptType: "all",
							name: "99234802-2fbc-4866-b413-f1af75abfdf6"
						}],
						createDynamicContent: "vars",
						code: "{ARG1},{ARG2}",
						returnType: {
							type: "simple",
							value: "var"
						},
						tags: ["function", "advanced"]
					}, {
						type: "statement",
						name: "return",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "71c95139-77d4-42d0-8646-88e432b48cd5"
						}],
						content: [{
							type: "text",
							value: "返回"
						}, {
							blockInputId: "RETURN",
							type: "block-input",
							acceptType: "all",
							name: "71c95139-77d4-42d0-8646-88e432b48cd5"
						}],
						code: "return {RETURN};",
						tags: ["function", "advanced"]
					}, {
						type: "statement",
						name: "declareVariable",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "30694572-fbd8-41c3-b005-58b61c5d5de0"
						}],
						content: [{
							type: "text",
							value: "定义变量"
						}, {
							id: "NAME",
							type: "var-input",
							value: ""
						}, {
							type: "text",
							value: "="
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: "all",
							name: "30694572-fbd8-41c3-b005-58b61c5d5de0"
						}],
						returnType: {
							type: "fromInput",
							blockInputId: "VALUE"
						},
						createDynamicContent: "vars",
						code: "{VALUE.connectionType} {NAME} = {VALUE};",
						tags: ["var"]
					}, {
						type: "output",
						name: "selectVariable",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "变量"
						}, {
							id: "VAR",
							type: "dynamic-select",
							options: "vars"
						}],
						code: "{VAR}",
						returnType: {
							type: "fromDynamicSelect",
							id: "VAR",
							options: "vars"
						},
						tags: ["var"]
					}, {
						type: "statement",
						name: "setVariable",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "464bec0a-cfec-4ccf-a376-ba30ca1387ff"
						}],
						content: [{
							type: "text",
							value: "变量"
						}, {
							id: "NAME",
							type: "dynamic-select",
							options: "vars"
						}, {
							type: "text",
							value: "="
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: {
								type: "fromDynamicSelect",
								id: "NAME",
								options: "vars"
							},
							name: "464bec0a-cfec-4ccf-a376-ba30ca1387ff"
						}],
						code: "{NAME} = {VALUE};",
						tags: ["var"]
					}, {
						type: "output",
						name: "arrayVariable",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "变量"
						}, {
							id: "VAR",
							type: "dynamic-select",
							options: "vars"
						}, {
							type: "text",
							value: "["
						}, {
							id: "POSITION",
							type: "number-input",
							value: 0
						}, {
							type: "text",
							value: "]"
						}],
						code: "{VAR}[{POSITION}]",
						returnType: {
							type: "fromDynamicSelect",
							id: "VAR",
							pointer: "true",
							options: "vars"
						},
						tags: ["var"]
					}, {
						type: "statement",
						name: "setArrayVariable",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: {
								type: "fromDynamicSelect",
								id: "NAME",
								pointer: "true",
								options: "vars"
							},
							name: "e6031a11-ad01-470b-ae8d-ffb05b1f5384"
						}],
						content: [{
							type: "text",
							value: "变量"
						}, {
							id: "NAME",
							type: "dynamic-select",
							options: "vars"
						}, {
							type: "text",
							value: "["
						}, {
							id: "ITERATOR",
							type: "number-input",
							value: 0
						}, {
							type: "text",
							value: "]"
						}, {
							type: "text",
							value: "="
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: {
								type: "fromDynamicSelect",
								id: "NAME",
								pointer: "true",
								options: "vars"
							},
							name: "e6031a11-ad01-470b-ae8d-ffb05b1f5384"
						}],
						code: "{NAME}[{ITERATOR}] = {VALUE};",
						tags: ["var"]
					}, {
						type: "output",
						name: "arrayVariableAdvanced",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "ffd52cf5-42da-4f8a-aab2-d9b9a4f4e349"
						}],
						content: [{
							type: "text",
							value: "变量"
						}, {
							id: "VAR",
							type: "dynamic-select",
							options: "vars"
						}, {
							type: "text",
							value: "["
						}, {
							blockInputId: "POSITION",
							type: "block-input",
							acceptType: "all",
							name: "ffd52cf5-42da-4f8a-aab2-d9b9a4f4e349"
						}, {
							type: "text",
							value: "]"
						}],
						code: "{VAR}[{POSITION}]",
						returnType: {
							type: "fromDynamicSelect",
							id: "VAR",
							pointer: "true",
							options: "vars"
						},
						tags: ["var", "advanced"]
					}, {
						type: "statement",
						name: "setArrayVariableAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "e9510b5d-42e8-4e6c-8410-532e170d7b49"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "5bb90cb1-09df-441f-aac5-d936db4f3a49"
						}],
						content: [{
							type: "text",
							value: "变量"
						}, {
							id: "NAME",
							type: "dynamic-select",
							options: "vars"
						}, {
							type: "text",
							value: "["
						}, {
							blockInputId: "ITERATOR",
							type: "block-input",
							acceptType: "all",
							name: "e9510b5d-42e8-4e6c-8410-532e170d7b49"
						}, {
							type: "text",
							value: "]"
						}, {
							type: "text",
							value: "="
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: "all",
							name: "5bb90cb1-09df-441f-aac5-d936db4f3a49"
						}],
						code: "{NAME}[{ITERATOR}] = {VALUE};",
						tags: ["var", "advanced"]
					}, {
						type: "statement",
						name: "declareVariableAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "5acbea42-4537-40d4-adbb-04e00cd31ef0"
						}],
						content: [{
							type: "text",
							value: "定义变量"
						}, {
							id: "NAME",
							type: "var-input",
							value: ""
						}, {
							type: "text",
							value: "为类型"
						}, {
							id: "TYPE",
							type: "static-select",
							options: [{
								label: "整数",
								value: "int"
							}, {
								label: "浮点数",
								value: "float"
							}, {
								label: "文本",
								value: "String"
							}, {
								label: "字符",
								value: "char"
							}, {
								label: "布尔",
								value: "bool"
							}]
						}, {
							type: "text",
							value: "="
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: "all",
							name: "5acbea42-4537-40d4-adbb-04e00cd31ef0"
						}],
						returnType: {
							type: "fromDropdown",
							id: "TYPE"
						},
						createDynamicContent: "vars",
						code: "{TYPE} {NAME} = {VALUE};",
						tags: ["var", "advanced"]
					}, {
						type: "statement",
						name: "comment",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "注释 //"
						}, {
							id: "COMMENT",
							type: "comment-input",
							placeholder: "输入你的注释"
						}],
						code: "/*\n{COMMENT}\n*/",
						tags: ["code"]
					}, {
						type: "statement",
						name: "code",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							id: "CODE",
							type: "code-input",
							value: "",
							placeholder: "输入你自己的代码"
						}],
						code: "{CODE}\n",
						tags: ["code"]
					}, {
						type: "output",
						name: "number",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							id: "VALUE",
							type: "number-input",
							value: 0
						}],
						code: "{VALUE}",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["math"]
					}, {
						type: "output",
						name: "numberArray",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "大小为"
						}, {
							id: "VALUE",
							type: "number-input",
							value: 3
						}, {
							type: "text",
							value: "的浮点数数组"
						}],
						code: "(float*)malloc({VALUE}*sizeof(float))",
						returnType: {
							type: "simple",
							value: "float *"
						},
						tags: ["math"]
					}, {
						type: "output",
						name: "basicOperations",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "a8e477d9-6623-498b-b65d-a73bdfd7575c"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "5b96efbe-61d9-4c74-a6cd-98164f7374e7"
						}],
						content: [{
							blockInputId: "ARG1",
							type: "block-input",
							acceptType: "all",
							name: "a8e477d9-6623-498b-b65d-a73bdfd7575c"
						}, {
							id: "OPERATOR",
							type: "static-select",
							options: [{
								label: "+",
								value: "+"
							}, {
								label: "-",
								value: "-"
							}, {
								label: "x",
								value: "*"
							}, {
								label: "/",
								value: "/"
							}, {
								label: "^",
								value: "^"
							}, {
								label: "%",
								value: "%"
							}]
						}, {
							blockInputId: "ARG2",
							type: "block-input",
							acceptType: "all",
							name: "5b96efbe-61d9-4c74-a6cd-98164f7374e7"
						}],
						code: "'{OPERATOR}' === '^'? 'pow({ARG1},{ARG2})' : '({ARG1} {OPERATOR} {ARG2})'",
						eval: true,
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["math"]
					}, {
						type: "output",
						name: "map",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "float",
							name: "06c5572f-cdc4-45c1-847e-820eea610df5"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "float",
							name: "a38f4793-0c7b-4b8b-94fd-38cb78b8a77d"
						}],
						content: [{
							type: "text",
							value: "把"
						}, {
							blockInputId: "VAR",
							type: "block-input",
							acceptType: "float",
							name: "06c5572f-cdc4-45c1-847e-820eea610df5"
						}, {
							type: "text",
							value: "从0-1024映射到[0-"
						}, {
							blockInputId: "MAXVAL",
							type: "block-input",
							acceptType: "float",
							name: "a38f4793-0c7b-4b8b-94fd-38cb78b8a77d"
						}, {
							type: "text",
							value: "]"
						}],
						code: "map({VAR},0,1023,0,{MAXVAL})",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["math"]
					}, {
						type: "statement",
						name: "randomSeed",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "随机数种子初始化"
						}],
						code: "randomSeed(micros());",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["math"]
					}, {
						type: "output",
						name: "random",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "float",
							name: "dee023ca-cbbc-4054-a515-fa0b52d87027"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "float",
							name: "1563871d-15b3-4456-9d54-2cb7dc0a60ec"
						}],
						content: [{
							type: "text",
							value: "随机数从"
						}, {
							blockInputId: "ARG1",
							type: "block-input",
							acceptType: "float",
							name: "dee023ca-cbbc-4054-a515-fa0b52d87027"
						}, {
							type: "text",
							value: "到"
						}, {
							blockInputId: "ARG2",
							type: "block-input",
							acceptType: "float",
							name: "1563871d-15b3-4456-9d54-2cb7dc0a60ec"
						}],
						code: "random({ARG1},{ARG2}+1)",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["math"]
					}, {
						type: "output",
						name: "mathOperations",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "f3efdecb-5b6c-4311-831b-95d25e3a040d"
						}],
						content: [{
							id: "OPERATOR",
							type: "static-select",
							options: [{
								label: "平方根",
								value: "sqrt"
							}, {
								label: "绝对值",
								value: "abs"
							}, {
								label: "ln",
								value: "log"
							}, {
								label: "log10",
								value: "log10"
							}, {
								label: "e^",
								value: "exp"
							}]
						}, {
							blockInputId: "ARG",
							type: "block-input",
							acceptType: "all",
							name: "f3efdecb-5b6c-4311-831b-95d25e3a040d"
						}],
						code: "{OPERATOR}({ARG})",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["math", "advanced"]
					}, {
						type: "output",
						name: "numberArrayAdvanced",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "c4a2264e-ce23-43de-9cdc-c5033629c07c"
						}],
						content: [{
							type: "text",
							value: "数组，大小:"
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: "all",
							name: "c4a2264e-ce23-43de-9cdc-c5033629c07c"
						}, {
							type: "text",
							value: "类型:"
						}, {
							id: "TYPE",
							type: "static-select",
							options: [{
								label: "浮点数",
								value: "float *"
							}, {
								label: "整数",
								value: "int *"
							}]
						}],
						code: "({TYPE})malloc({VALUE}*sizeof({TYPE.withoutAsterisk}))",
						returnType: {
							type: "fromSelect",
							id: "TYPE",
							options: "vars"
						},
						tags: ["math", "advanced"]
					}, {
						type: "output",
						name: "mapAdvanced",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "float",
							name: "59514d4c-e29d-4f7e-892b-4eadfb199ce7"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "float",
							name: "3e2e1b8f-2c0f-49ed-9a59-6abac5294fb4"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "float",
							name: "9a94702d-a6f9-4768-9518-cd49f6f110a8"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "float",
							name: "761ab971-9454-436c-979c-d7528c6667d7"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "float",
							name: "de6ccaba-271c-4103-8a86-4d01ad1c3169"
						}],
						content: [{
							type: "text",
							value: "把"
						}, {
							blockInputId: "VAR",
							type: "block-input",
							acceptType: "float",
							name: "59514d4c-e29d-4f7e-892b-4eadfb199ce7"
						}, {
							type: "text",
							value: "从 ["
						}, {
							blockInputId: "INITMIN",
							type: "block-input",
							acceptType: "float",
							name: "3e2e1b8f-2c0f-49ed-9a59-6abac5294fb4"
						}, {
							type: "text",
							value: "-"
						}, {
							blockInputId: "INITMAX",
							type: "block-input",
							acceptType: "float",
							name: "9a94702d-a6f9-4768-9518-cd49f6f110a8"
						}, {
							type: "text",
							value: "]映射到["
						}, {
							blockInputId: "FINMIN",
							type: "block-input",
							acceptType: "float",
							name: "761ab971-9454-436c-979c-d7528c6667d7"
						}, {
							type: "text",
							value: "-"
						}, {
							blockInputId: "FINMAX",
							type: "block-input",
							acceptType: "float",
							name: "de6ccaba-271c-4103-8a86-4d01ad1c3169"
						}, {
							type: "text",
							value: "]"
						}],
						code: "map({VAR},{INITMIN},{INITMAX},{FINMIN},{FINMAX})",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["math", "advanced"]
					}, {
						type: "output",
						name: "numConversion",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "2389f662-73ff-4bd9-a38b-4fec891cee9e"
						}],
						content: [{
							type: "text",
							value: "把"
						}, {
							blockInputId: "NUMBER",
							type: "block-input",
							acceptType: "all",
							name: "2389f662-73ff-4bd9-a38b-4fec891cee9e"
						}, {
							type: "text",
							value: "转换为"
						}, {
							id: "TYPE",
							type: "static-select",
							options: [{
								label: "整数",
								value: "int"
							}, {
								label: "浮点数",
								value: "float"
							}]
						}],
						code: "({TYPE}) {NUMBER}",
						returnType: {
							type: "fromSelect",
							id: "TYPE"
						},
						tags: ["math", "advanced"]
					}, {
						type: "output",
						name: "string",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "\""
						}, {
							id: "TEXT",
							type: "string-input",
							placeholder: "文本"
						}, {
							type: "text",
							value: "\""
						}],
						code: "\"{TEXT}\"",
						returnType: {
							type: "simple",
							value: "String"
						},
						tags: ["text"]
					}, {
						type: "output",
						name: "stringArray",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "大小为"
						}, {
							id: "VALUE",
							type: "number-input",
							value: 3
						}, {
							type: "text",
							value: "的文本数组"
						}],
						code: "(String *)malloc({VALUE}*sizeof(String))",
						returnType: {
							type: "simple",
							value: "String *"
						},
						tags: ["text"]
					}, {
						type: "output",
						name: "length",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "String",
							name: "6c5e3f13-3984-4864-a5f0-18b7c7b1f91d"
						}],
						content: [{
							type: "text",
							value: "文本长度"
						}, {
							blockInputId: "TEXT",
							type: "block-input",
							acceptType: "String",
							name: "6c5e3f13-3984-4864-a5f0-18b7c7b1f91d"
						}],
						code: "{TEXT}.length()",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["text"]
					}, {
						type: "output",
						name: "stringCreate",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "25ce044c-89da-433d-9a95-9b361825d16d"
						}],
						content: [{
							type: "text",
							value: "创建一个文本"
						}, {
							blockInputId: "TEXT",
							type: "block-input",
							acceptType: "all",
							name: "25ce044c-89da-433d-9a95-9b361825d16d"
						}],
						code: "String({TEXT})",
						returnType: {
							type: "simple",
							value: "String"
						},
						tags: ["text"]
					}, {
						type: "output",
						name: "stringSum",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "String",
							name: "2ab1835b-8c76-426b-a9f7-942f1d2698c9"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "String",
							name: "d3791943-f904-4e2e-ba3f-ff26a0b23165"
						}],
						content: [{
							blockInputId: "ARG1",
							type: "block-input",
							acceptType: "String",
							name: "2ab1835b-8c76-426b-a9f7-942f1d2698c9"
						}, {
							type: "text",
							value: "+"
						}, {
							blockInputId: "ARG2",
							type: "block-input",
							acceptType: "String",
							name: "d3791943-f904-4e2e-ba3f-ff26a0b23165"
						}],
						code: "String({ARG1})+String({ARG2})",
						returnType: {
							type: "simple",
							value: "String"
						},
						tags: ["text"]
					}, {
						type: "output",
						name: "stringArrayAdvanced",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "f6a2e865-4d05-4736-9136-b3b4ce753dc3"
						}],
						content: [{
							type: "text",
							value: "数组，大小:"
						}, {
							blockInputId: "VALUE",
							type: "block-input",
							acceptType: "all",
							name: "f6a2e865-4d05-4736-9136-b3b4ce753dc3"
						}, {
							type: "text",
							value: "类型:"
						}, {
							id: "TYPE",
							type: "static-select",
							options: [{
								label: "文本",
								value: "String *"
							}, {
								label: "字符",
								value: "char *"
							}]
						}],
						code: "({TYPE})malloc({VALUE}*sizeof({TYPE.withoutAsterisk}))",
						returnType: {
							type: "fromDropdown",
							id: "TYPE",
							options: "vars"
						},
						tags: ["text", "advanced"]
					}, {
						type: "output",
						name: "char",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "'"
						}, {
							id: "TEXT",
							type: "char-input",
							placeholder: "字符"
						}, {
							type: "text",
							value: "'"
						}],
						code: "'{TEXT}'",
						returnType: {
							type: "simple",
							value: "char"
						},
						tags: ["text", "advanced"]
					}, {
						type: "statement",
						name: "wait",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "延时"
						}, {
							id: "TIME",
							type: "number-input",
							value: 2000
						}, {
							type: "text",
							value: "毫秒"
						}],
						code: "delay({TIME});",
						tags: ["control"]
					}, {
						type: "output",
						name: "millis",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "获取执行到此刻的时间"
						}],
						code: "millis()",
						returnType: {
							type: "simple",
							value: "float"
						},
						tags: ["control"]
					}, {
						type: "statement-input",
						name: "if",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "eddef98f-062a-4a63-9798-c557032f429e"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "82e0bc04-84bf-4aa7-96d7-49ed2d9417e5"
						}],
						content: [{
							type: "text",
							value: "如果"
						}, {
							blockInputId: "ARG1",
							type: "block-input",
							acceptType: "all",
							name: "eddef98f-062a-4a63-9798-c557032f429e"
						}, {
							id: "OPERATOR",
							type: "static-select",
							options: [{
								label: "=",
								value: "=="
							}, {
								label: "!=",
								value: "!="
							}, {
								label: ">",
								value: ">"
							}, {
								label: ">=",
								value: ">="
							}, {
								label: "<",
								value: "<"
							}, {
								label: "<=",
								value: "<="
							}]
						}, {
							blockInputId: "ARG2",
							type: "block-input",
							acceptType: "all",
							name: "82e0bc04-84bf-4aa7-96d7-49ed2d9417e5"
						}, {
							type: "text",
							value: "那么"
						}],
						code: "if({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}",
						tags: ["control"]
					}, {
						type: "statement-input",
						name: "elseif",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "49b5ddd1-3c08-4252-b580-92dc049016e5"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "e7c6d463-9101-4c25-9376-95429065c9b6"
						}],
						content: [{
							type: "text",
							value: "否则如果"
						}, {
							blockInputId: "ARG1",
							type: "block-input",
							acceptType: "all",
							name: "49b5ddd1-3c08-4252-b580-92dc049016e5"
						}, {
							id: "OPERATOR",
							type: "static-select",
							options: [{
								label: "=",
								value: "=="
							}, {
								label: "!=",
								value: "!="
							}, {
								label: ">",
								value: ">"
							}, {
								label: ">=",
								value: ">="
							}, {
								label: "<",
								value: "<"
							}, {
								label: "<=",
								value: "<="
							}]
						}, {
							blockInputId: "ARG2",
							type: "block-input",
							acceptType: "all",
							name: "e7c6d463-9101-4c25-9376-95429065c9b6"
						}, {
							type: "text",
							value: "那么"
						}],
						code: "else if ({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}",
						tags: ["control"]
					}, {
						type: "statement-input",
						name: "else",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "否则，那么"
						}],
						code: "else {{STATEMENTS}}",
						tags: ["control"]
					}, {
						type: "statement-input",
						name: "switch",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "判断变量"
						}, {
							id: "VAR",
							type: "dynamic-select",
							options: "vars"
						}, {
							type: "text",
							value: "的值为"
						}],
						code: "switch (int({VAR})) {{STATEMENTS}}",
						tags: ["control"]
					}, {
						type: "statement-input",
						name: "case",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "如果变量值为"
						}, {
							id: "VAR",
							type: "number-input",
							value: 0
						}, {
							type: "text",
							value: "那么"
						}],
						code: "case {VAR}:{{STATEMENTS}break;}",
						tags: ["control", "advanced"]
					}, {
						type: "statement-input",
						name: "caseDefault",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "如果都不是，那么"
						}],
						code: "default:{{STATEMENTS}break;}",
						tags: ["control", "advanced"]
					}, {
						type: "statement-input",
						name: "for-v1",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "计数循环变量"
						}, {
							id: "VAR",
							type: "dynamic-select",
							options: "vars"
						}, {
							type: "text",
							value: "从"
						}, {
							id: "INIT",
							type: "number-input",
							value: 0
						}, {
							type: "text",
							value: "到"
						}, {
							id: "FINAL",
							type: "number-input",
							value: 10
						}, {
							id: "MODE",
							type: "static-select",
							options: [{
								label: "自增",
								value: "+"
							}, {
								label: "自减",
								value: "-"
							}]
						}, {
							id: "ADD",
							type: "number-input",
							value: 1
						}, {
							type: "text",
							value: "执行"
						}],
						code: "'for({VAR}={INIT};{VAR}' + ('{MODE}' === '+'?'<=':'>=' ) + '{FINAL};{VAR}{MODE}={ADD}){{STATEMENTS}}'",
						eval: true,
						tags: ["control"]
					}, {
						type: "statement-input",
						name: "while",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "0c389214-9287-46b5-8b16-6be02393a13e"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "9966db62-ea4f-4197-bfcf-2bb65235eeab"
						}],
						content: [{
							type: "text",
							value: "如果"
						}, {
							blockInputId: "ARG1",
							type: "block-input",
							acceptType: "all",
							name: "0c389214-9287-46b5-8b16-6be02393a13e"
						}, {
							id: "OPERATOR",
							type: "static-select",
							options: [{
								label: "=",
								value: "=="
							}, {
								label: "!=",
								value: "!="
							}, {
								label: ">",
								value: ">"
							}, {
								label: ">=",
								value: ">="
							}, {
								label: "<",
								value: "<"
							}, {
								label: "<=",
								value: "<="
							}]
						}, {
							blockInputId: "ARG2",
							type: "block-input",
							acceptType: "all",
							name: "9966db62-ea4f-4197-bfcf-2bb65235eeab"
						}, {
							type: "text",
							value: "则一直循环执行"
						}],
						code: "while ({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}",
						tags: ["control"]
					}, {
						type: "statement",
						name: "continue",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "开始下一次循环"
						}],
						code: "continue;",
						tags: ["control", "advanced"]
					}, {
						type: "statement",
						name: "break",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "结束本轮循环"
						}],
						code: "break;",
						tags: ["control", "advanced"]
					}, {
						type: "statement",
						name: "waitAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "78693039-07c0-4fd0-ad39-90adad25ae37"
						}],
						content: [{
							type: "text",
							value: "延时"
						}, {
							blockInputId: "TIME",
							type: "block-input",
							acceptType: "all",
							name: "78693039-07c0-4fd0-ad39-90adad25ae37"
						}],
						code: "delay({TIME});",
						tags: ["control", "advanced"]
					}, {
						type: "statement-input",
						name: "ifAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "7e633448-49e7-4aa6-b195-cd98e5b4f4c7"
						}],
						content: [{
							type: "text",
							value: "如果"
						}, {
							blockInputId: "CONDITION",
							type: "block-input",
							acceptType: "all",
							name: "7e633448-49e7-4aa6-b195-cd98e5b4f4c7"
						}, {
							type: "text",
							value: "那么"
						}],
						code: "if({CONDITION}){{STATEMENTS}}",
						tags: ["control", "advanced"]
					}, {
						type: "statement-input",
						name: "elseifAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "c12a4ad0-21ef-4938-adac-32ac49bae0cc"
						}],
						content: [{
							type: "text",
							value: "否则如果"
						}, {
							blockInputId: "VAR",
							type: "block-input",
							acceptType: "all",
							name: "c12a4ad0-21ef-4938-adac-32ac49bae0cc"
						}, {
							type: "text",
							value: "那么"
						}],
						code: "else if ({VAR}){{STATEMENTS}}",
						tags: ["control", "advanced"]
					}, {
						type: "statement-input",
						name: "else",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "否则，那么"
						}],
						code: "else {{STATEMENTS}}",
						tags: ["control", "advanced"]
					}, {
						type: "statement-input",
						name: "forAdvanced-v1",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "0baa13b5-5a96-4f16-85d8-c70557f55f76"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "4a2c2c67-d8c8-4b12-b8a4-e4cccdb90ebf"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "d20a2f18-ac40-4ae9-8b8b-6d911558c202"
						}],
						content: [{
							type: "text",
							value: "计数循环变量"
						}, {
							blockInputId: "VAR",
							type: "block-input",
							acceptType: "all",
							name: "0baa13b5-5a96-4f16-85d8-c70557f55f76"
						}, {
							type: "text",
							value: "从"
						}, {
							blockInputId: "INIT",
							type: "block-input",
							acceptType: "all",
							name: "4a2c2c67-d8c8-4b12-b8a4-e4cccdb90ebf"
						}, {
							type: "text",
							value: "到"
						}, {
							blockInputId: "FINAL",
							type: "block-input",
							acceptType: "all",
							name: "d20a2f18-ac40-4ae9-8b8b-6d911558c202"
						}, {
							id: "MODE",
							type: "static-select",
							options: [{
								label: "自增",
								value: "+"
							}, {
								label: "自减",
								value: "-"
							}]
						}, {
							id: "ADD",
							type: "number-input",
							value: 1
						}, {
							type: "text",
							value: "执行"
						}],
						code: "'for({VAR}={INIT};{VAR}' + ('{MODE}' === '+'?'<=':'>=' ) + '{FINAL};{VAR}{MODE}={ADD}){{STATEMENTS}}'",
						eval: true,
						tags: ["control", "advanced"]
					}, {
						type: "statement-input",
						name: "switchAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "72840f88-a613-4981-94a5-edfa5c0213d3"
						}],
						content: [{
							type: "text",
							value: "判断变量"
						}, {
							blockInputId: "VAR",
							type: "block-input",
							acceptType: "all",
							name: "72840f88-a613-4981-94a5-edfa5c0213d3"
						}],
						code: "switch (int({VAR})) {{STATEMENTS}}",
						tags: ["control", "advanced"]
					}, {
						type: "statement-input",
						name: "case",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "如果变量值为"
						}, {
							id: "VAR",
							type: "number-input",
							value: 0
						}, {
							type: "text",
							value: "那么"
						}],
						code: "case {VAR}:{{STATEMENTS}break;}",
						tags: ["control", "advanced"]
					}, {
						type: "statement-input",
						name: "caseDefault",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "如果都不是，那么"
						}],
						code: "default:{{STATEMENTS}break;}",
						tags: ["control", "advanced"]
					}, {
						type: "statement-input",
						name: "whileAdvanced",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}, {
							type: "connector-root",
							accept: "connector-top"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "15828cfc-31af-41ce-bcb1-8c660c96f38d"
						}],
						content: [{
							type: "text",
							value: "如果"
						}, {
							blockInputId: "CONDITION",
							type: "block-input",
							acceptType: "all",
							name: "15828cfc-31af-41ce-bcb1-8c660c96f38d"
						}, {
							type: "text",
							value: "则一直循环执行"
						}],
						code: "while ({CONDITION}){{STATEMENTS}}",
						tags: ["control", "advanced"]
					}, {
						type: "statement",
						name: "continue",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "开始下一次循环"
						}],
						code: "continue;",
						tags: ["control", "advanced"]
					}, {
						type: "statement",
						name: "break",
						connectors: [{
							type: "connector-top",
							accept: "connector-bottom"
						}, {
							type: "connector-bottom",
							accept: "connector-top"
						}],
						content: [{
							type: "text",
							value: "结束本轮循环"
						}],
						code: "break;",
						tags: ["control", "advanced"]
					}, {
						type: "output",
						name: "boolean",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							id: "STATE",
							type: "static-select",
							options: [{
								label: "True",
								value: "true"
							}, {
								label: "False",
								value: "false"
							}]
						}],
						code: "{STATE}",
						returnType: {
							type: "simple",
							value: "bool"
						},
						tags: ["logic"]
					}, {
						type: "output",
						name: "boolArray",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}],
						content: [{
							type: "text",
							value: "大小为"
						}, {
							id: "VALUE",
							type: "number-input",
							value: 0
						}, {
							type: "text",
							value: "的布尔数组"
						}],
						code: "(bool *)malloc({VALUE}*sizeof(bool))",
						returnType: {
							type: "simple",
							value: "bool *"
						},
						tags: ["logic"]
					}, {
						type: "output",
						name: "not",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "9f07b94b-133e-4172-a6b9-0d4426e80a71"
						}],
						content: [{
							type: "text",
							value: "非"
						}, {
							blockInputId: "CONDITION",
							type: "block-input",
							acceptType: "all",
							name: "9f07b94b-133e-4172-a6b9-0d4426e80a71"
						}],
						code: "!{CONDITION}",
						returnType: {
							type: "simple",
							value: "bool"
						},
						tags: ["logic"]
					}, {
						type: "output",
						name: "equalityOperations",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "45df525f-c5f8-4378-be11-21e53c913d7b"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "bb79d863-80a5-48aa-902f-daa72c5ffe0e"
						}],
						content: [{
							blockInputId: "ARG1",
							type: "block-input",
							acceptType: "all",
							name: "45df525f-c5f8-4378-be11-21e53c913d7b"
						}, {
							id: "OPERATOR",
							type: "static-select",
							options: [{
								label: "=",
								value: "=="
							}, {
								label: "!=",
								value: "!="
							}, {
								label: ">",
								value: ">"
							}, {
								label: ">=",
								value: ">="
							}, {
								label: "<",
								value: "<"
							}, {
								label: "<=",
								value: "<="
							}]
						}, {
							blockInputId: "ARG2",
							type: "block-input",
							acceptType: "all",
							name: "bb79d863-80a5-48aa-902f-daa72c5ffe0e"
						}],
						code: "{ARG1} {OPERATOR} {ARG2}",
						returnType: {
							type: "simple",
							value: "bool"
						},
						tags: ["logic"]
					}, {
						type: "output",
						name: "logicOperations",
						connectors: [{
							type: "connector-output",
							accept: "connector-input"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "db2684c7-f6ea-4e41-8376-a43e112857d8"
						}, {
							type: "connector-input",
							accept: "connector-output",
							acceptType: "all",
							name: "591531ad-b0e8-408f-b16d-7e765cb5d842"
						}],
						content: [{
							blockInputId: "ARG1",
							type: "block-input",
							acceptType: "all",
							name: "db2684c7-f6ea-4e41-8376-a43e112857d8"
						}, {
							id: "OPERATOR",
							type: "static-select",
							options: [{
								label: "且",
								value: "&&"
							}, {
								label: "或",
								value: "||"
							}]
						}, {
							blockInputId: "ARG2",
							type: "block-input",
							acceptType: "all",
							name: "591531ad-b0e8-408f-b16d-7e765cb5d842"
						}],
						code: "{ARG1} {OPERATOR} {ARG2}",
						returnType: {
							type: "simple",
							value: "bool"
						},
						tags: ["logic"]
					}
				]
			}
		};

		var prefix = "/assets/image/hardware/";
		schema.hardware.boards.forEach(function(board) {
			board.imageUrl = prefix + "board/" + board.name + ".png";
		});

		schema.hardware.components.forEach(function(component) {
			component.imageUrl = prefix + "component/" + component.name + ".png";
			// component.imageUrl2 = prefix + "component/" + component.name + "2.png";
			component.imageUrl2 = prefix + "component/led2.png";
		});

		var promise = $.Deferred();
		return promise.resolve(schema);
	}

	function save(project) {
		return $.ajax({
			type: 'POST',
			url: '/api/project/save',
			data: project,
			dataType: 'json',
		});
	}

	function build(id) {
		return $.ajax({
			type: "POST",
			url: "/api/project/build",
			dataType: "json",
			data: {
				id: id,
				user_id: userModel.getUserId(),
			},
		});
	}

	function remove(id) {
		return $.ajax({
			type: "POST",
			url: "/api/project/delete",
			data: {
				id: id,
				user_id: userModel.getUserId(),
			},
			dataType: "json",
		});
	}

	function upload(data, onProgress) {
		return $.ajax({
			type: 'POST',
			url: '/api/project/upload',
			dataType: 'json',
			data: data,
			processData: false,
			contentType: false,
			xhr: function() {
				var xhr = $.ajaxSettings.xhr();
				xhr.upload && onProgress && xhr.upload.addEventListener('progress', onProgress, false);
				return xhr;
			}
		});
	}

	return {
		get: get,
		getAll: getAll,
		save: save,
		build: build,
		remove: remove,
		upload: upload,
		getSchema: getSchema,
	};
});