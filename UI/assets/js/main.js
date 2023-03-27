/*
Central Automation v1.x
Last Updated 1.28
Aaron Scott (WiFi Downunder) 2023
*/

var centralURLs = [
	{
		'https://apigw-apacsouth.central.arubanetworks.com': 'https://app-apacsouth.central.arubanetworks.com',
		'https://api-ap.central.arubanetworks.com': 'https://app2-ap.central.arubanetworks.com',
		'https://internal-apigw.central.arubanetworks.com': 'https://internal-ui.central.arubanetworks.com',
		'https://app1-apigw.central.arubanetworks.com': 'https://app.central.arubanetworks.com',
		'https://apigw-prod2.central.arubanetworks.com': 'https://app-prod2-ui.central.arubanetworks.com',
		'https://apigw-us-east-1.central.arubanetworks.com': 'https://app-us-east-1.central.arubanetworks.com',
		'https://apigw-uswest4.central.arubanetworks.com': 'https://app-uswest4.central.arubanetworks.com',
		'https://apigw-ca.central.arubanetworks.com': 'app-ca.central.arubanetworks.com',
		'https://apigw.central.arubanetworks.com.cn': 'app.central.arubanetworks.com.cn',
		'https://apigw-apaceast.central.arubanetworks.com': 'https://app-apaceast.central.arubanetworks.com',
		'https://eu-apigw.central.arubanetworks.com': 'https://app2-eu.central.arubanetworks.com',
		'https://apigw-eucentral2.central.arubanetworks.com': 'https://app-eucentral2.central.arubanetworks.com',
		'https://apigw-eucentral3.central.arubanetworks.com': 'https://app-eucentral3.central.arubanetworks.com',
		'https://apigw-uaenorth1.central.arubanetworks.com': 'https://app-uaenorth1.central.arubanetworks.com',
		//COP: 'COP',
	},
];

function getCentralURLs() {
	return centralURLs;
}

var centralClusters = [
	{
		Internal: 'https://internal-apigw.central.arubanetworks.com',
		'US-1': 'https://app1-apigw.central.arubanetworks.com',
		'US-2': 'https://apigw-prod2.central.arubanetworks.com',
		'US-EAST-1': 'https://apigw-us-east-1.central.arubanetworks.com',
		'US-WEST-4': 'https://apigw-uswest4.central.arubanetworks.com',
		'APAC-1': 'https://api-ap.central.arubanetworks.com',
		'APAC-EAST1': 'https://apigw-apaceast.central.arubanetworks.com',
		'APAC-SOUTH1': 'https://apigw-apacsouth.central.arubanetworks.com',
		'EU-1': 'https://eu-apigw.central.arubanetworks.com',
		'EU-2': 'https://apigw-eucentral2.central.arubanetworks.com',
		'EU-3': 'https://apigw-eucentral3.central.arubanetworks.com',
		'Canada-1': 'https://apigw-ca.central.arubanetworks.com',
		'CN-North': 'https://apigw.central.arubanetworks.com.cn',
		'UAE-North': 'https://apigw-uaenorth1.central.arubanetworks.com',
		//'Central On-Prem': 'COP',
	},
];

var clusterNames = [
	{
		'https://internal-apigw.central.arubanetworks.com': 'Internal',
		'https://app1-apigw.central.arubanetworks.com': 'US-1',
		'https://apigw-prod2.central.arubanetworks.com': 'US-2',
		'https://apigw-us-east-1.central.arubanetworks.com': 'US-EAST-1',
		'https://apigw-uswest4.central.arubanetworks.com': 'US-WEST4',
		'https://api-ap.central.arubanetworks.com': 'APAC-1',
		'https://apigw-apaceast.central.arubanetworks.com': 'APAC-EAST1',
		'https://apigw-apacsouth.central.arubanetworks.com': 'APAC-SOUTH1',
		'https://eu-apigw.central.arubanetworks.com': 'EU-1',
		'https://apigw-eucentral2.central.arubanetworks.com': 'EU-2',
		'https://apigw-eucentral3.central.arubanetworks.com': 'EU-3',
		'https://apigw-ca.central.arubanetworks.com': 'Canada-1',
		'https://apigw.central.arubanetworks.com.cn': 'CN-North',
		'https://apigw-uaenorth1.central.arubanetworks.com': 'UAE-North',
		//COP: 'Central On-Prem',
	},
];

var antennas = {
	'AP-ANT-1W': { two: 3.8, five: 5.8 },
	'AP-ANT-19': { two: 3, five: 6 },
	'AP-ANT-20W': { two: 2, five: 2 },
	'AP-ANT-13B': { two: 2.2, five: 4 },
	'AP-ANT-16': { two: 3.9, five: 4.7 },
	'AP-ANT-40': { two: 4, five: 5 },
	'AP-ANT-25A': { two: 5, five: 5 },
	'AP-ANT-35A': { two: 5, five: 5 },
	'AP-ANT-45': { two: 4.5, five: 5.5 },
	'AP-ANT-28': { two: 7.5, five: 7.5 },
	'AP-ANT-38': { two: 7.5, five: 7.5 },
	'AP-ANT-48': { two: 8.5, five: 8.5 },
	'AP-ANT-32': { two: 2, five: 4 },
	'AP-ANT-22': { two: 2, five: 4 },
	'ANT-3X3-D100': { two: 5, five: 5 },
	'ANT-3X3-D608': { two: 7.5, five: 7.5 },
	'ANT-3X3-2005': { two: 5 },
	'ANT-3X3-5005': { five: 5 },
	'ANT-3X3-5010': { five: 10 },
	'ANT-3X3-5712': { five: 11.5 },
	'ANT-2X2-2005': { two: 5 },
	'ANT-2X2-5005': { five: 5 },
	'ANT-2X2-2314': { two: 14 },
	'ANT-2X2-5314': { five: 14 },
	'ANT-2X2-5010': { five: 10 },
	'ANT-2X2-2714': { two: 14 },
};

const ConfigType = { All: 0, IP: 1, Antenna: 2 };

var cop_url = 'https://apigw-';
var reachableProxies = [];

var forcedTokenRefresh = true;
var $SCRIPT_ROOT = '{{ request.script_root|tojson|safe }}';
var csvData;
var csvDataCount = 0;
var apiErrorCount = 0;
var moveCounter = 0;
var devicesToMove = 0;
var addCounter = 0;
var archiveCounter = 0;
var licenseCounter = 0;
var renameCounter = 0;
var zoneCounter = 0;
var radioModeCounter = 0;
var rfCounter = 0;
var radioCounter = 0;
var antennaCounter = 0;
var ipCounter = 0;
var rebootCounter = 0;
var checkedCounter = 0;
var updateVariablesCounter = 0;
var visitorCounter = 0;

var authPromise;
var inventoryPromise;
var monitoringPromise;
var apPromise;
var switchPromise;
var gatewayPromise;
var groupPromise;
var swarmPromise;
var customerPromise;
var zonePromise;
var rfPromise;
var bssidPromise;

var clients = [];
var wirelessClients = [];
var wiredClients = [];
var aps = [];
var bssids = [];
var apInventory = [];
var apInventoryCount = 0;
var switches = [];
var switchInventory = [];
var switchInventoryCount = 0;
var gateways = [];
var gatewayInventory = [];
var gatewayInventoryCount = 0;
var needGatewayDetails = false;
var deviceType = '';
var sites = [];
var siteCreationCount = 0;
var groups = [];
var groupTemplateInfo = [];
var downAPCount = 0;
var downSwitchCount = 0;
var downGatewayCount = 0;
var siteIssues = 0;
var swarms = [];

var mspAPs = [];
var mspAPMonitoring = [];
var mspAPCount = 0;
var mspSwitches = [];
var mspSwitchMonitoring = [];
var mspSwitchCount = 0;
var mspGateways = [];
var mspGatewayMonitoring = [];
var mspGatewayCount = 0;
var mspCustomers = [];
var mspCustomerCount = 0;
var mspID = '';

var rebootedDevices = 0;
var rebootErrors = 0;
var skippedDevices = 0;

var neighborSwitches = {};
var modifiedUISwitches = {};
var renamingCounters = {};
var magicNames = {};
var switchPortDetails = {};

var checkedDevices = {};
var commandCheckCounter = {};
const commandRetries = 5;
var devicesToReboot = [];

var needAntennaConfig = [];

const apiLimit = 1000;
const apiGLCPLimit = 100;
const apiSiteLimit = 1000;
const apiGroupLimit = 20;
const apiMSPLimit = 50;
const apiDelay = 250;
var apiMessage = false;

var currentWorkflow = '';
var movePromise;
var autoAddPromise;
var autoArchivePromise;
var autoLicensePromise;
var autoGroupPromise;
var autoSitePromise;
var autoRenamePromise;
var autoMagicRenamePromise;
var autoPortPromise;
var autoCustomerPromise;
var autoVariablesPromise;
var autoAntennaPromise;
var autoStaticIPPromise;

var manualGroup = '';
var manualCustomer = '';

var existingPassphrase = '';
var wlanConfig = {};

var authNotification;
var csvNotification;
var apNotification;
var switchNotification;
var gatewayNotification;
var siteNotification;
var groupNotification;
var wirelessNotification;
var wiredNotification;
var vcNotification;
var inventoryNotification;

var renameNotification;
var zoneNotification;
var profileNotification;
var radioNotification;
var antennaNotification;
var licenseNotification;
var moveNotification;
var renameNotification;
var rebootNotification;
var configNotification;
var ipNotification;
var visitorNotification;
var siteNotification;

var indexedDB;
var dbRequest;
var db;

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Cluster Utility functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function getAPIGateway(clusterName) {
	var apiURL = centralClusters[0][clusterName];
	return apiURL;
}

function getClusterName(url) {
	var clusterName = clusterNames[0][url];
	return clusterName;
}

function populateCentralClusters() {
	for (let k in centralClusters[0]) {
		$('#clusterselector').append($('<option>', { value: centralClusters[0][k], text: k }));
	}
}

function isCOPSelected() {
	//console.log(document.getElementById("clusterselector").value)
	if (document.getElementById('clusterselector').value === getAPIGateway('Central On-Prem')) {
		document.getElementById('cop_address_row').hidden = false;
	} else {
		document.getElementById('cop_address_row').hidden = true;
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Load and Save from Local Storage & IndexedDB functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// Added 1.19
function openIndexedDB() {
	indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

	if (!indexedDB) {
		console.log('IndexedDB could not be found in this browser.');
	}

	dbRequest = indexedDB.open('Central-Automation-Studio-DB', 1);

	dbRequest.onerror = function(event) {
		console.error('An error occurred with IndexedDB');
		console.error(event);
	};

	dbRequest.onupgradeneeded = function() {
		db = dbRequest.result;
		if (!db.objectStoreNames.contains('general')) {
			// if there's no "general" store
			db.createObjectStore('general', { keyPath: 'key' });
		}
	};

	dbRequest.onsuccess = function() {
		console.log('IndexedDB opened successfully');
		db = dbRequest.result;
	};
}

function saveDataToDB(indexKey, data) {
	const transaction = db.transaction('general', 'readwrite');
	const store = transaction.objectStore('general');
	store.put({ key: indexKey, data: data });
}

// Updated 1.12.4
function onFinishSetup() {
	console.log('onFinishSetup in Main deprecated');
	// Save all supplied addresses and details
	var base_url = document.getElementById('clusterselector').value;
	if (base_url === getAPIGateway('Central On-Prem')) {
		base_url = cop_url + document.getElementById('cop_address').value;
		localStorage.setItem('cop_address', $('#cop_address').val());
	}
	localStorage.setItem('client_id', $('#client_id').val());
	localStorage.setItem('client_secret', $('#client_secret').val());
	localStorage.setItem('base_url', base_url);
	localStorage.setItem('refresh_token', $('#refresh_token').val());
	localStorage.setItem('access_token', $('#access_token').val());
	localStorage.setItem('ap_naming_format', $('#ap_naming_format').val());
	localStorage.setItem('hostname_variable', $('#hostname_variable').val());
	localStorage.setItem('port_variable_format', $('#port_variable_format').val());
	localStorage.setItem('refresh_rate', $('#refresh_rate').val());
	localStorage.setItem('load_clients', document.getElementById('load_clients').checked);
	localStorage.setItem('load_group_properties', document.getElementById('load_group_properties').checked);
	localStorage.setItem('load_airmatch_events', document.getElementById('load_airmatch_events').checked);
	localStorage.setItem('load_vc_config', document.getElementById('load_vc_config').checked);
	localStorage.setItem('qr_color', $('#color_picker').val());
	localStorage.setItem('qr_logo', $('#qr_logo').val());
	localStorage.removeItem('monitoring_update');

	var cluster = getAccountforClientID($('#client_id').val());
	cluster['refresh_token'] = $('#refresh_token').val();
	cluster['access_token'] = $('#access_token').val();
	updateAccountDetails(cluster);
	console.log(base_url);
	tokenRefresh();
}

function loadMonitoringData(refreshrate) {
	// Check if we need to get the latest data - or can we just load it from localStorage
	apiMessage = false;

	if (!localStorage.getItem('monitoring_update')) {
		getMonitoringData();
	} else {
		var lastRefresh = new Date(parseInt(localStorage.getItem('monitoring_update')));
		var now = new Date();
		var diffTime = Math.abs(now - lastRefresh);
		var diffMinutes = Math.ceil(diffTime / (1000 * 60));
		if (diffMinutes > refreshrate) {
			//console.log("Reading new monitoring data from Central");
			getMonitoringData();
		} else {
			console.log('Reading monitoring data from IndexedDB');

			clients = [];
			downAPCount = 0;
			downSwitchCount = 0;
			downGatewayCount = 0;
			siteIssues = 4;
			var clientLoadCount = 0;

			const transaction = db.transaction('general', 'readonly');
			const store = transaction.objectStore('general');

			const allQuery = store.getAll();
			allQuery.onsuccess = function() {
				if (allQuery.result) {
					$.each(allQuery.result, function() {
						if (this.key === 'monitoring_aps') {
							aps = JSON.parse(this.data);
							$.each(aps, function() {
								loadAPUI(this);
							});
							updateAPUI();
						} else if (this.key === 'monitoring_switches') {
							switches = JSON.parse(this.data);
							$.each(switches, function() {
								loadSwitchUI(this);
							});
							updateSwitchUI();
						} else if (this.key === 'monitoring_gateways') {
							gateways = JSON.parse(this.data);
							$.each(gateways, function() {
								loadGatewayUI(this);
							});
							updateGatewayUI();
						} else if (this.key === 'monitoring_sites') {
							sites = JSON.parse(this.data);
							$.each(sites, function() {
								loadSiteUI(this);
							});
							updateSiteUI();
						} else if (this.key === 'monitoring_groups') {
							groups = JSON.parse(this.data);
							$.each(groups, function() {
								loadGroupUI(this);
							});
							updateGroupUI();
						} else if (this.key === 'monitoring_swarms') {
							var loadVCConfig = localStorage.getItem('load_vc_config');
							if (loadVCConfig === null || loadVCConfig === '') {
								loadVCConfig = true;
							} else {
								loadVCConfig = JSON.parse(loadVCConfig);
							}
							if (loadVCConfig) {
								swarms = JSON.parse(this.data);
								loadCurrentPageSwarm();
							} else {
								// Clear out old data
								saveDataToDB('monitoring_swarms', JSON.stringify([]));
							}
						} else if (this.key === 'monitoring_wirelessClients') {
							clientLoadCount++;
							wirelessClients = JSON.parse(this.data);
							clients = clients.concat(wirelessClients);
							if (clientLoadCount > 1) {
								$.each(clients, function() {
									loadClientsUI(this);
								});
								updateClientUI();
							}
						} else if (this.key === 'monitoring_wiredClients') {
							clientLoadCount++;
							wiredClients = JSON.parse(this.data);
							clients = clients.concat(wiredClients);
							if (clientLoadCount > 1) {
								$.each(clients, function() {
									loadClientsUI(this);
								});
								updateClientUI();
							}
						}
					});
				}
			};
		}
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Utility functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function titleCase(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map(function(word) {
			return word.replace(word[0], word[0].toUpperCase());
		})
		.join(' ');
}

function noUnderscore(str) {
	return str.replace(/_/g, ' ');
}

function cleanMACAddress(mac) {
	var currentMac = mac.trim();
	currentMac = currentMac.toUpperCase();
	currentMac = currentMac.replace(/[^a-z0-9]/gi, '');
	currentMac = currentMac.replace(/..\B/g, '$&:');
	return currentMac;
}

function padNumber(num, size) {
	num = num.toString();
	while (num.length < size) num = '0' + num;
	return num;
}

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function addSelectTitle(currentSelect, title, end) {
	var eaOption = document.createElement('option');
	eaOption.style.color = '#aaaaaa';
	eaOption.disabled = true;
	eaOption.innerHTML = title;
	if (end) currentSelect.appendChild(eaOption);
	else currentSelect.insertBefore(eaOption, currentSelect.firstChild);
}

function addSelectSeparator(currentSelect) {
	var eaOption = document.createElement('option');
	eaOption.style.color = '#aaaaaa';
	eaOption.disabled = true;
	eaOption.value = '────────────────────────────────────────────────';
	eaOption.innerHTML = '────────────────────────────────────────────────';
	currentSelect.appendChild(eaOption);
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Logging and Notifications
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
function showNotification(icon, message, from, align, color) {
	// Valid Colors: danger, warning, success, info, primary
	var iconString = 'central-icon ' + icon;
	return $.notify(
		{
			icon: iconString,
			message: message,
		},
		{
			type: color,
			timer: 300,
			placement: {
				from: from,
				align: align,
			},
			allow_dismiss: false,
		}
	);
}

// Added in 1.18.2
function showProgressNotification(icon, message, from, align, color) {
	// Valid Colors: danger, warning, success, info, primary
	var iconString = 'central-icon ' + icon;
	return $.notify(
		{
			icon: iconString,
			message: message,
		},
		{
			type: color,
			placement: {
				from: from,
				align: align,
			},
			showProgressbar: true,
			allow_dismiss: false,
			delay: 0,
		}
	);
}

// Updated 1.9.3
function logError(message) {
	var errorBody = document.getElementById('errorBody');
	var text = document.createTextNode('- ' + message);
	var span = document.createElement('span');
	span.style.color = '#FB404B';
	span.appendChild(text);
	errorBody.appendChild(span);
	var br = document.createElement('br');
	errorBody.appendChild(br);
	console.log(message);
	apiErrorCount++;
}

// Added 1.9.3
function logInformation(message) {
	var errorBody = document.getElementById('errorBody');
	var text = document.createTextNode('• ' + message);
	errorBody.appendChild(text);
	var br = document.createElement('br');
	errorBody.appendChild(br);
	console.log(message);
}

// Added 1.28.1
function logStart(message) {
	var errorBody = document.getElementById('errorBody');
	var br = document.createElement('br');
	errorBody.appendChild(br);
	var text = document.createTextNode(message);
	var span = document.createElement('span');
	span.style.color = '#23CCEF';
	span.appendChild(text);
	errorBody.appendChild(span);
	var br = document.createElement('br');
	errorBody.appendChild(br);
	console.log(message);
}

function clearErrorLog() {
	var errorBody = document.getElementById('errorBody');
	while (errorBody.hasChildNodes()) {
		errorBody.removeChild(errorBody.firstChild);
	}
}

function showLog() {
	$('#ErrorModalLink').trigger('click');
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		CSV functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function processCSV(results) {
	apiErrorCount = 0;
	csvData = results.data;
	csvDataCount = csvData.length;
	forcedTokenRefresh = false;
	tokenRefresh();
}

function loadCSVFile(clickedRow) {
	$('#files').parse({
		config: {
			delimiter: ',',
			header: true,
			complete: processCSV,
			skipEmptyLines: 'greedy',
			transformHeader: function(h) {
				return h.trim();
			},
		},
		before: function(file, inputElem) {
			csvNotification = showNotification('ca-cpu', 'Processing CSV File...', 'bottom', 'center', 'info');
		},
		error: function(err, file) {
			showNotification('ca-c-warning', err.message, 'bottom', 'center', 'danger');
		},
		complete: function() {
			csvNotification.close();
			if (clickedRow === 'mgmt-group') {
				$('#AddGroupModalLink').trigger('click');
			} else if (clickedRow === 'mgmt-group-clone') {
				$('#CloneGroupModalLink').trigger('click');
			} else if (clickedRow === 'mgmt-site') {
				$('#AddSiteModalLink').trigger('click');
			} else if (clickedRow === 'mgmt-customer') {
				showCustomerGroup();
				$('#AddCustomerModalLink').trigger('click');
			} else if (clickedRow === 'mgmt-inventory') {
				downloadMSPInventory();
			} else if (!csvData) {
				showNotification('ca-c-warning', 'No CSV data found. Try selecting a CSV document.', 'bottom', 'center', 'danger');
				return false;
			}
			// Clear error log
			clearErrorLog();

			if (clickedRow === 'adddevices') {
				logStart('Adding devices...');
				currentWorkflow = '';
				addDevices();
			} else if (clickedRow === 'archivedevices') {
				logStart('Archving devices...');
				currentWorkflow = '';
				archiveDevices();
			} else if (clickedRow === 'licensedevices') {
				logStart('Licensing devices...');
				currentWorkflow = '';
				licenseDevices();
			} else if (clickedRow === 'unlicensedevices') {
				logStart('Unlicensing devices...');
				currentWorkflow = '';
				unlicenseDevices();
			} else if (clickedRow === 'movetogroup') {
				currentWorkflow = '';
				if (csvContainsGroup() || manualGroup) {
					logStart('Moving devices to groups...');
					moveDevicesToGroup();
				} else {
					// missing group information in the CSV for some or all records
					$('#GroupModalLink').trigger('click');
				}
			} else if (clickedRow === 'movetosite') {
				logStart('Moving devices to sites...');
				currentWorkflow = '';
				moveDevicesToSite();
			} else if (clickedRow === 'renametemplate') {
				logStart('Renaming devices...');
				currentWorkflow = '';
				renameDevices();
			} else if (clickedRow === 'autorenametemplate') {
				currentWorkflow = '';
				magicRenameDevices();
			} else if (clickedRow === 'setZone') {
				logStart('Configuring Zones/SSIDs...');
				currentWorkflow = '';
				setAPZone();
			} else if (clickedRow === 'setRFProfile') {
				logStart('Configuring RF profiles...');
				currentWorkflow = '';
				setRFProfile();
			} else if (clickedRow === 'setRadioMode') {
				logStart('Configuring radio modes...');
				currentWorkflow = '';
				setRadioMode('all');
			} else if (clickedRow === 'enable24') {
				logStart('Enabling 2.4GHz radios...');
				currentWorkflow = '';
				enable24radios();
			} else if (clickedRow === 'disable24') {
				logStart('Disabling 2.4GHz radios...');
				currentWorkflow = '';
				disable24radios();
			} else if (clickedRow === 'devicevariables') {
				logStart('Updating device variables...');
				currentWorkflow = '';
				updateDeviceVariables();
			} else if (clickedRow === 'portdescriptions') {
				logStart('Updating port descriptions...');
				currentWorkflow = '';
				updatePortDescription();
			} else if (clickedRow === 'countrycode') {
				logStart('Updating country codes...');
				currentWorkflow = '';
				updateCountryCodes();
			} else if (clickedRow === 'antennaGain') {
				logStart('Configuring antenna gain...');
				currentWorkflow = '';
				buildAntennaAPList();
				loadAntennas();
				$('#AntennaConfigModalLink').trigger('click');
			} else if (clickedRow === 'staticIP') {
				logStart('Configuring static IP...');
				currentWorkflow = '';
				setStaticIPConfig();
			} else if (clickedRow === 'rebootDevices') {
				logStart('Rebooting devices...');
				currentWorkflow = '';
				rebootDevices();
			} else if (clickedRow === 'auto-add-license') {
				logStart('Adding devices and licensing...');
				currentWorkflow = 'auto-add-license';
				addAndLicense();
			} else if (clickedRow === 'auto-add-group') {
				currentWorkflow = 'auto-add-group';
				if (csvContainsGroup() || manualGroup) {
					logStart('Adding devices and moving to groups...');
					addAndGroup();
				} else {
					// missing group information in the CSV for some or all records
					$('#GroupModalLink').trigger('click');
				}
			} else if (clickedRow === 'auto-add-license-group') {
				currentWorkflow = 'auto-add-license-group';
				if (csvContainsGroup() || manualGroup) {
					logStart('Adding devices, licensing and moving to groups...');
					addLicenseGroup();
				} else {
					// missing group information in the CSV for some or all records
					$('#GroupModalLink').trigger('click');
				}
			} else if (clickedRow === 'auto-site-rename') {
				logStart('Moving devices to sites and renaming APs...');
				currentWorkflow = 'auto-site-rename';
				siteAndRename();
			} else if (clickedRow === 'auto-site-autorename') {
				logStart('Moving devices to sites and renaming APs...');
				currentWorkflow = 'auto-site-autorename';
				siteAndAutoRename();
			} else if (clickedRow === 'auto-renameap-portdescriptions') {
				logStart('Renaming APs and updating port descriptions...');
				currentWorkflow = 'auto-renameap-portdescriptions';
				renameAndPortDescriptions();
			} else if (clickedRow === 'auto-site-autorenameap-portdescriptions') {
				logStart('Renaming APs and updating port descriptions...');
				currentWorkflow = 'auto-site-autorenameap-portdescriptions';
				siteAndAutoRenameAndPortDescriptions();
			} else if (clickedRow === 'auto-renameap-radiomode') {
				logStart('Renaming APs and configuring radio modes...');
				currentWorkflow = 'auto-renameap-radiomode';
				renameAndRadioMode();

				// MSP Functions
			} else if (clickedRow === 'assigntocustomer') {
				currentWorkflow = '';
				if (csvContainsCustomer() || manualCustomer) {
					logStart('Assigning devices to customers...');
					assignDevicesToCustomer();
				} else {
					// missing group information in the CSV for some or all records
					$('#CustomerModalLink').trigger('click');
				}
			} else if (clickedRow === 'assignalltocustomer') {
				logStart('Assigning devices to a customer...');
				currentWorkflow = '';
				if (manualCustomer) {
					assignAllDevicesToCustomer();
				} else {
					// missing group information in the CSV for some or all records
					$('#CustomerModalLink').trigger('click');
				}
			} else if (clickedRow === 'licenseToCustomers') {
				logStart('Licensing devices to a customer...');
				currentWorkflow = '';
				licenseCounter = 0;
				licenseDevicesFromCSV(true);
			} else if (clickedRow === 'auto-add-customers') {
				currentWorkflow = 'auto-add-customers';
				if (csvContainsCustomer() || manualCustomer) {
					logStart('Adding devices and assigning to customers...');
					addAndCustomers();
				} else {
					// missing group information in the CSV for some or all records
					$('#CustomerModalLink').trigger('click');
				}
			} else if (clickedRow === 'auto-add-customers-license') {
				currentWorkflow = 'auto-add-customers-license';
				if (csvContainsCustomer() || manualCustomer) {
					logStart('Adding devices, assigning to customers and licensing...');
					addAndCustomersAndLicense();
				} else {
					// missing group information in the CSV for some or all records
					$('#CustomerModalLink').trigger('click');
				}
			} else if (clickedRow === 'auto-add-single') {
				currentWorkflow = 'auto-add-single';
				if (manualCustomer) {
					logStart('Adding devices and assigning to a customer...');
					addAndSingleCustomer();
				} else {
					// missing group information in the CSV for some or all records
					$('#CustomerModalLink').trigger('click');
				}
			} else if (clickedRow === 'auto-add-single-license') {
				currentWorkflow = 'auto-add-single-license';
				if (manualCustomer) {
					logStart('Adding devices, assigning to a customer and licensing...');
					addAndSingleCustomerAndLicense();
				} else {
					// missing group information in the CSV for some or all records
					$('#CustomerModalLink').trigger('click');
				}
			} else if (clickedRow === 'createVisitors') {
				logStart('Creating visitors...');
				currentWorkflow = '';
				createVisitors();
			}
		},
	});
}

function generateCSVForSite(clickedRow) {
	var select = document.getElementById('siteselector');
	var selectedSite = select.value;
	if (!selectedSite) {
		showNotification('ca-c-warning', 'Please select a Site before running a task', 'bottom', 'center', 'danger');
	} else {
		//console.log(selectedSite);

		//CSV header
		var siteKey = 'SITE';
		var serialKey = 'SERIAL';
		var macKey = 'MAC';
		var nameKey = 'DEVICE NAME';
		var groupKey = 'GROUP';

		// get APs for site
		csvData = [];
		$.each(aps, function() {
			if (this['site'] === selectedSite) {
				csvData.push({ [nameKey]: this['name'], [serialKey]: this['serial'], [macKey]: this['macaddr'], [groupKey]: this['group_name'], [siteKey]: this['site'] });
			}
		});

		$.each(switches, function() {
			if (this['site'] === selectedSite) {
				csvData.push({ [nameKey]: this['name'], [serialKey]: this['serial'], [macKey]: this['macaddr'], [groupKey]: this['group_name'], [siteKey]: this['site'] });
			}
		});

		$.each(gateways, function() {
			if (this['site'] === selectedSite) {
				csvData.push({ [nameKey]: this['name'], [serialKey]: this['serial'], [macKey]: this['macaddr'], [groupKey]: this['group_name'], [siteKey]: this['site'] });
			}
		});

		if (!csvData) {
			showNotification('ca-c-warning', 'No site devices found. Try selecting a different site?', 'bottom', 'center', 'danger');
			return false;
		}
		// Clear error log
		clearErrorLog();
		if (clickedRow === 'adddevices') {
			currentWorkflow = '';
			logStart('Adding devices...');
			addDevices();
		} else if (clickedRow === 'licensedevices') {
			logStart('Licensing devices...');
			currentWorkflow = '';
			licenseDevices();
		} else if (clickedRow === 'movetogroup') {
			logStart('Moving devices to groups...');
			currentWorkflow = '';
			moveDevicesToGroup();
		} else if (clickedRow === 'movetosite') {
			logStart('Moving devices to sites...');
			currentWorkflow = '';
			moveDevicesToSite();
		} else if (clickedRow === 'renametemplate') {
			logStart('Renaming devices...');
			currentWorkflow = '';
			renameDevices();
		} else if (clickedRow === 'autorenametemplate') {
			logStart('Renaming devices...');
			currentWorkflow = '';
			magicRenameDevices();
		} else if (clickedRow === 'portdescriptions') {
			logStart('Updating port descriptions...');
			currentWorkflow = '';
			updatePortDescription();
		} else if (clickedRow === 'countrycode') {
			logStart('Updating country codes...');
			currentWorkflow = '';
			updateCountryCodes();
		} else if (clickedRow === 'split5GhzMode') {
			logStart('Configuring 5GHz radios...');
			currentWorkflow = '';
			// get supported APs for site (rebuild the CSV)
			var split5Key = 'SPLIT 5GHZ MODE';
			var radio0Mode = 'RADIO 0 MODE';
			var radio2Mode = 'RADIO 2 MODE';
			csvData = [];
			$.each(aps, function() {
				if (this['site'] === selectedSite && this['model'].includes('555')) {
					csvData.push({ [nameKey]: this['name'], [serialKey]: this['serial'], [macKey]: this['macaddr'], [groupKey]: this['group_name'], [siteKey]: this['site'], [radio0Mode]: 'access', [radio2Mode]: 'access', [split5Key]: 'enabled' });
				}
			});
			setRadioMode('split');
		} else if (clickedRow === 'dual5GhzMode') {
			logStart('Configuring 5GHz radios...');
			currentWorkflow = '';
			// get supported APs for site (rebuild the CSV)
			var dual5Key = 'DUAL 5GHZ MODE';
			var radio0Mode = 'RADIO 0 MODE';
			var radio1Mode = 'RADIO 1 MODE';
			csvData = [];
			$.each(aps, function() {
				if (this['site'] === selectedSite && (this['model'].includes('344') || this['model'].includes('345'))) {
					csvData.push({ [nameKey]: this['name'], [serialKey]: this['serial'], [macKey]: this['macaddr'], [groupKey]: this['group_name'], [siteKey]: this['site'], [radio0Mode]: 'access', [radio1Mode]: 'access', [dual5Key]: 'enabled' });
				}
			});
			setRadioMode('dual');
		} else if (clickedRow === 'antennaGain') {
			logStart('Configuring antenna gain...');
			currentWorkflow = '';
			buildAntennaAPList();
			loadAntennas();
			$('#AntennaConfigModalLink').trigger('click');
		} else if (clickedRow === 'rebootDevices') {
			logStart('Rebooting devices...');
			currentWorkflow = '';
			rebootSiteDevices();
		} else if (clickedRow === 'auto-add-license') {
			logStart('Adding devices and licensing...');
			currentWorkflow = 'auto-add-license';
			addAndLicense();
		} else if (clickedRow === 'auto-add-license-group') {
			logStart('Adding devices, licensing and moving to group...');
			currentWorkflow = 'auto-add-license-group';
			addLicenseGroup();
		} else if (clickedRow === 'auto-site-rename') {
			logStart('Moving devices to site and renaming APs...');
			currentWorkflow = 'auto-site-rename';
			siteAndRename();
		} else if (clickedRow === 'auto-site-autorename') {
			logStart('Moving devices to site and renaming APs...');
			currentWorkflow = 'auto-site-autorename';
			siteAndAutoRename();
		} else if (clickedRow === 'auto-renameap-portdescriptions') {
			logStart('Renaming APs and updating port descriptions...');
			currentWorkflow = 'auto-renameap-portdescriptions';
			renameAndPortDescriptions();
		} else if (clickedRow === 'auto-autorenameap-portdescriptions') {
			logStart('Renaming APs and updating port descriptions...');
			currentWorkflow = 'auto-autorenameap-portdescriptions';
			autoRenameAndPortDescriptions();
		} else if (clickedRow === 'auto-site-autorenameap-portdescriptions') {
			logStart('Moving devices, renaming APs and updating port descriptions...');
			currentWorkflow = 'auto-site-autorenameap-portdescriptions';
			siteAndAutoRenameAndPortDescriptions();
		} else if (clickedRow === 'test-layer-one') {
			logStart('Testing layer one...');
			currentWorkflow = 'test-layer-one';
			showLayerOne();
		} else if (clickedRow === 'test-antenna-gain') {
			logStart('Testing for antenna gains...');
			currentWorkflow = 'test-antenna-gain';
			testAntennaGain();
		} else if (clickedRow === 'test-static-ip') {
			logStart('Testing for static IPs...');
			currentWorkflow = 'test-static-ip';
			testStaticIPAddress();
		}
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Authentication functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function tokenRefresh() {
	authNotification = showNotification('ca-padlock', 'Authenticating with Central...', 'bottom', 'center', 'info');
	var settings = {
		url: getAPIURL() + '/auth/refreshwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			client_id: localStorage.getItem('client_id'),
			client_secret: localStorage.getItem('client_secret'),
			access_token: localStorage.getItem('access_token'),
			refresh_token: localStorage.getItem('refresh_token'),
			base_url: localStorage.getItem('base_url'),
		}),
	};

	return $.ajax(settings)
		.done(function(commandResults, statusText, jqXHR) {
			authNotification.close();

			if (commandResults.hasOwnProperty('headers')) {
				updateAPILimits(JSON.parse(commandResults.headers));
			}

			var response = JSON.parse(commandResults.responseBody);
			if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
				apiErrorCount++;
				logError('Central Server Error (503): ' + commandResults.reason + ' (/auth/refresh)');
			} else if (commandResults.hasOwnProperty('error')) {
				Swal.fire({
					title: 'Central API connection failed',
					text: response.error_description.replace('refresh_token', 'Refresh Token'),
					icon: 'error',
				});
			} else if (commandResults.responseBody) {
				localStorage.setItem('refresh_token', response.refresh_token);
				localStorage.setItem('access_token', response.access_token);

				var cluster = getAccountforClientID(localStorage.getItem('client_id'));
				cluster['refresh_token'] = response.refresh_token;
				cluster['access_token'] = response.access_token;
				updateAccountDetails(cluster);

				var path = window.location.pathname;
				var page = path.split('/').pop();
				if (page.includes('settings')) {
					document.getElementById('refresh_token').value = response.refresh_token;
					document.getElementById('access_token').value = response.access_token;
					Swal.fire({
						title: 'Connected!',
						text: 'Central API connection successful',
						icon: 'success',
						confirmButtonText: 'Go to Dashboard',
					}).then(result => {
						if (result.isConfirmed) {
							window.location.href = window.location.href.substr(0, location.href.lastIndexOf('/') + 1) + 'dashboard.html';
						}
					});
				} else {
					showNotification('ca-padlock', 'Authentication Tokens Updated', 'bottom', 'center', 'success');
				}
			}
		})
		.fail(function(XMLHttpRequest, textStatus, errorThrown) {
			console.log('error');
			if (XMLHttpRequest.readyState == 4) {
				// HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
				showNotification('ca-globe', XMLHttpRequest.statusText.replace('refresh_token', 'Refresh Token'), 'bottom', 'center', 'danger');
			} else if (XMLHttpRequest.readyState == 0) {
				// Network error (i.e. connection refused, access denied due to CORS, etc.)
				showNotification('ca-globe', 'Can not connect to API server', 'bottom', 'center', 'danger');
			} else {
				// something weird is happening
			}
		});
}

// Added in 1.13 for simple re-auth
function authRefresh(refreshPromise) {
	authNotification = showNotification('ca-padlock', 'Authenticating with Central...', 'bottom', 'center', 'info');
	var settings = {
		url: getAPIURL() + '/auth/refreshwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			client_id: localStorage.getItem('client_id'),
			client_secret: localStorage.getItem('client_secret'),
			access_token: localStorage.getItem('access_token'),
			refresh_token: localStorage.getItem('refresh_token'),
			base_url: localStorage.getItem('base_url'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, jqXHR) {
		//console.log(commandResults)
		authNotification.close();
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}

		var response = JSON.parse(commandResults.responseBody);
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/auth/refresh)');
		} else if (response.hasOwnProperty('error')) {
			Swal.fire({
				title: 'Central API connection failed',
				text: response.error_description.replace('refresh_token', 'Refresh Token'),
				icon: 'error',
			});
		} else if (response) {
			localStorage.setItem('refresh_token', response.refresh_token);
			localStorage.setItem('access_token', response.access_token);

			var cluster = getAccountforClientID(localStorage.getItem('client_id'));
			cluster['refresh_token'] = response.refresh_token;
			cluster['access_token'] = response.access_token;
			updateAccountDetails(cluster);

			showNotification('ca-padlock', 'Authentication Tokens Updated', 'bottom', 'center', 'success');
		}
		refreshPromise.resolve();
	});
	return refreshPromise.promise();
}

function updateAPILimits(headers) {
	if (headers['X-RateLimit-Limit-day']) {
		var usage = parseInt(headers['X-RateLimit-Limit-day']) - parseInt(headers['X-RateLimit-Remaining-day']);
		$('#titleText').attr('data-original-title', 'Daily API Usage: ' + usage.toString() + ' / ' + headers['X-RateLimit-Limit-day']);
		if (parseInt(headers['X-RateLimit-Remaining-day']) == 0) showNotification('ca-api', 'Daily API limit reached', 'top', 'center', 'danger');
	} else {
		$('#titleText').attr('data-original-title', '');
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Monitoring functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
function loadCurrentPageCleanup() {
	// override on visible page - used as a notification
	// Called when new data is being pulled from Central
}

function loadCurrentPageClient() {
	// override on visible page - used as a notification
}

function loadCurrentPageAP() {
	// override on visible page - used as a notification
}

function loadCurrentPageSwitch() {
	// override on visible page - used as a notification
}

function loadCurrentPageGateway() {
	// override on visible page - used as a notification
}

function loadCurrentPageSite() {
	// override on visible page - used as a notification
}

function loadCurrentPageGroup() {
	// override on visible page - used as a notification
}

function loadCurrentPageSwarm() {
	// override on visible page - used as a notification
}

function loadCurrentPageVisitors() {
	// override on visible page - used as a notification
}

// Updated: 1.6.0
function getMonitoringData() {
	console.log('Reading new monitoring data from Central');

	// Are we including Clients in the monitoring data calls?
	var loadClients = localStorage.getItem('load_clients');
	if (loadClients === null || loadClients === '') {
		loadClients = true;
	} else {
		loadClients = JSON.parse(loadClients);
	}
	console.log('Client Monitoring: ' + loadClients);
	loadCurrentPageCleanup();
	updateMonitoringWithClients(loadClients);
}

function updateMonitoringWithClients(needClients) {
	apiMessage = false;

	if (!localStorage.getItem('base_url') && !localStorage.getItem('account_details')) {
		// No account settings at all.
		showNotification('ca-globe', 'API settings are blank...', 'bottom', 'center', 'danger');
		window.location.href = window.location.href.substr(0, location.href.lastIndexOf('/') + 1) + 'settings.html';
	} else if (localStorage.getItem('base_url') && !localStorage.getItem('account_details')) {
		// Old account settings - need to migrate to v1.6
		upgradeAccountSettings();
	}

	// Try and refresh the token
	showNotification('ca-dashboard', 'Updating Monitoring Data...', 'bottom', 'center', 'info');
	authNotification = showNotification('ca-padlock', 'Authenticating with Central...', 'bottom', 'center', 'info');
	var settings = {
		url: getAPIURL() + '/auth/refreshwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			client_id: localStorage.getItem('client_id'),
			client_secret: localStorage.getItem('client_secret'),
			access_token: localStorage.getItem('access_token'),
			refresh_token: localStorage.getItem('refresh_token'),
			base_url: localStorage.getItem('base_url'),
		}),
	};

	$.ajax(settings)
		.done(function(commandResults, statusText, jqXHR) {
			//console.log(commandResults);

			authNotification.close();
			var response = JSON.parse(commandResults.responseBody);
			if (commandResults.hasOwnProperty('headers')) {
				updateAPILimits(JSON.parse(commandResults.headers));
			}
			if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
				logError('Central Server Error (503): ' + commandResults.reason + ' (/auth/refresh)');
				Swal.fire({
					title: 'Central API connection failed',
					text: response.error_description.replace('refresh_token', 'Refresh Token'),
					icon: 'error',
				});
			} else if (response.hasOwnProperty('error')) {
				Swal.fire({
					title: 'Central API connection failed',
					text: response.error_description.replace('refresh_token', 'Refresh Token'),
					icon: 'error',
				});
			} else if (commandResults.responseBody) {
				localStorage.setItem('refresh_token', response.refresh_token);
				localStorage.setItem('access_token', response.access_token);

				var cluster = getAccountforClientID(localStorage.getItem('client_id'));
				cluster['refresh_token'] = response.refresh_token;
				cluster['access_token'] = response.access_token;
				updateAccountDetails(cluster);

				showNotification('ca-padlock', 'Authentication Tokens Updated', 'bottom', 'center', 'success');

				// Empty universal search table
				$('#universal-table')
					.DataTable()
					.rows()
					.remove();

				// Empty clients array
				clients = [];
				wiredClients = [];
				wirelessClients = [];
				if (document.getElementById('client_count')) document.getElementById('client_count').innerHTML = '0';
				$('#client-table')
					.DataTable()
					.rows()
					.remove();

				downAPCount = 0;
				downSwitchCount = 0;
				downGatewayCount = 0;
				siteIssues = 4;

				// Are we including Detailed Gateway Information in the monitoring data calls?
				needGatewayDetails = localStorage.getItem('load_gateway_details');
				if (needGatewayDetails === null || needGatewayDetails === '') {
					needGatewayDetails = true;
				} else {
					needGatewayDetails = JSON.parse(needGatewayDetails);
				}
				console.log('Gateway Details: ' + needGatewayDetails);

				// Refresh card data
				licenseNotification = showNotification('ca-license-key', 'Checking Central licenses...', 'bottom', 'center', 'info');
				setTimeout(getLicensingStats, 1000); // As to not go over the 7 calls/sec speed limit();
				apNotification = showNotification('ca-wifi', 'Obtaining APs...', 'bottom', 'center', 'info');
				getAPData(0, needClients);
				switchNotification = showNotification('ca-switch-stack', 'Obtaining Switches...', 'bottom', 'center', 'info');
				getSwitchData(0, needClients);
				gatewayNotification = showNotification('ca-content-delivery', 'Obtaining Gateways...', 'bottom', 'center', 'info');
				getGatewayData(0);
				siteNotification = showNotification('ca-world-pin', 'Obtaining Sites...', 'bottom', 'center', 'info');
				getSiteData(0);
				setTimeout(updateGroupData, 4000);
				setTimeout(updateSwarmData, 4000);

				localStorage.setItem('monitoring_update', +new Date());
			}
		})
		.fail(function(XMLHttpRequest, textStatus, errorThrown) {
			if (XMLHttpRequest.readyState == 4) {
				// HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
				showNotification('ca-globe', XMLHttpRequest.statusText, 'bottom', 'center', 'danger');
			} else if (XMLHttpRequest.readyState == 0) {
				// Network error (i.e. connection refused, access denied due to CORS, etc.)
				showNotification('ca-globe', 'Can not connect to API server', 'bottom', 'center', 'danger');
			} else {
				// something weird is happening
			}
		});
}

function getLicensingStats() {
	// Get overview stats
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/licensing/v1/subscriptions/stats?license_type=all',
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		licenseNotification.close();
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/platform/licensing/v1/subscriptions/stats)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		if (response) {
			if (response.expiring) {
				showNotification('ca-license-key', 'A Subscription Key expiring soon...', 'bottom', 'center', 'warning');
			}
		}
	});
}

// Clients
// Updated: 1.6.0
function loadClientsUI(client) {
	var status = '<i class="fa fa-circle text-neutral"></i>';
	if (!client['health'] && client['failure_stage'] !== '' && client['failure_stage'] !== 'NA') {
		status = '<span data-toggle="tooltip" data-placement="right" title="Failed To Connect: ' + client['failure_reason'] + ' at ' + client['failure_stage'] + '"><i class="fa fa-circle text-danger"></i></span>';
	} else if (!client['health']) {
		status = '<i class="fa fa-circle text-neutral"></i>';
	} else if (client['health'] < 50) {
		status = '<span data-toggle="tooltip" data-placement="right" title="Health: ' + client['health'] + '"><i class="fa fa-circle text-danger"></i></span>';
	} else if (client['health'] < 70) {
		status = '<span data-toggle="tooltip" data-placement="right" title="Health: ' + client['health'] + '"><i class="fa fa-circle text-warning"></i></span>';
	} else {
		status = '<span data-toggle="tooltip" data-placement="right" title="Health: ' + client['health'] + '"><i class="fa fa-circle text-success"></i></span>';
	}
	// Generate clean data for table
	var site = '';
	if (client['site']) site = client['site'];
	var health = '';
	if (client['health']) health = client['health'];
	var associatedDevice_name = '';
	var associatedDevice = findDeviceInMonitoring(client['associated_device']);
	if (associatedDevice) associatedDevice_name = associatedDevice.name;
	var ip_address = '';
	if (client['ip_address']) ip_address = client['ip_address'];
	var vlan = '';
	if (client['vlan']) vlan = client['vlan'];
	var os_type = '';
	if (client['os_type']) os_type = client['os_type'];
	var client_name = '';
	if (client['name']) client_name = client['name'];
	var client_mac = 'Unknown';
	if (client['macaddr']) client_mac = client['macaddr'];

	// Make link to Central
	client_name_url = encodeURI(client_name);
	var apiURL = localStorage.getItem('base_url');
	var clientURL = centralURLs[0][apiURL] + '/frontend/#/CLIENTDETAIL/' + client['macaddr'] + '?ccma=' + client['macaddr'] + '&cdcn=' + client_name_url + '&nc=client';

	// Add row to table
	var table = $('#client-table').DataTable();
	table.row.add([client_mac === 'Unknown' ? client_name : '<a href="' + clientURL + '" target="_blank"><strong>' + client_name + '</strong></a>', status, client_mac, ip_address, os_type, associatedDevice_name, site, vlan]);

	var universalTable = $('#universal-table').DataTable();
	universalTable.row.add(['Client', client_mac === 'Unknown' ? client_name : '<a href="' + clientURL + '" target="_blank"><strong>' + client_name + '</strong></a>', status, ip_address, client_mac, site, '', os_type, vlan, '', '', '']);

	$('[data-toggle="tooltip"]').tooltip();
}

function updateClientUI() {
	// Force reload of table data
	$('#client-table')
		.DataTable()
		.rows()
		.draw();
	$('#universal-table')
		.DataTable()
		.rows()
		.draw();

	var path = window.location.pathname;
	var page = path.split('/').pop();
	if (page.includes('clients')) {
		//console.log("loading Client Graphs")
		updateClientGraphs();
	}

	if (document.getElementById('client_count')) document.getElementById('client_count').innerHTML = '' + clients.length + '';

	$(document.getElementById('client_icon')).removeClass('text-warning');
	$(document.getElementById('client_icon')).removeClass('text-danger');
	$(document.getElementById('client_icon')).addClass('text-success');

	// call to current showing page
	loadCurrentPageClient();
}

function getWirelessClientData(offset) {
	if (offset == 0) wirelessNotification = showNotification('ca-laptop-1', 'Obtaining wireless clients...', 'bottom', 'center', 'info');
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/monitoring/v2/clients?calculate_total=true&offset=' + offset + '&limit=' + apiLimit + '&timerange=3H&client_type=WIRELESS&client_status=CONNECTED&show_usage=true&show_manufacturer=true&show_signal_db=true',
			//url: localStorage.getItem('base_url') + '/monitoring/v1/clients/wireless?calculate_total=true&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/monitoring/v2/clients)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		if (response.hasOwnProperty('error')) {
			$(document.getElementById('client_icon')).addClass('text-warning');
			$(document.getElementById('client_icon')).removeClass('text-success');
			$(document.getElementById('client_icon')).removeClass('text-danger');
			if (document.getElementById('client_count')) document.getElementById('client_count').innerHTML = '-';
		} else if (response.hasOwnProperty('message')) {
			if (!apiMessage) {
				apiMessage = true;
				showNotification('ca-api', response.message, 'top', 'center', 'danger');
			}
			$(document.getElementById('client_icon')).addClass('text-warning');
			$(document.getElementById('client_icon')).removeClass('text-primary');
			$(document.getElementById('client_icon')).removeClass('text-danger');
			saveDataToDB('monitoring_wirelessClients', JSON.stringify([]));
		} else {
			$.each(response.clients, function() {
				clients.push(this);
				wirelessClients.push(this);
				loadClientsUI(this);
			});

			if (offset + apiLimit < response.total) getWirelessClientData(offset + apiLimit);
			else {
				updateClientUI();
				saveDataToDB('monitoring_wirelessClients', JSON.stringify(wirelessClients));
				wirelessNotification.close();
			}
		}
	});
}

function getWiredClientData(offset) {
	if (offset == 0) wiredNotification = showNotification('ca-computer-monitor', 'Obtaining wired clients...', 'bottom', 'center', 'info');

	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/monitoring/v2/clients?calculate_total=true&offset=' + offset + '&limit=' + apiLimit + '&timerange=3H&client_type=WIRED&client_status=CONNECTED&show_usage=true&show_manufacturer=true',
			//url: localStorage.getItem('base_url') + '/monitoring/v1/clients/wired?calculate_total=true&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/monitoring/v2/clients)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		if (response.hasOwnProperty('error')) {
			$(document.getElementById('client_icon')).addClass('text-warning');
			$(document.getElementById('client_icon')).removeClass('text-success');
			$(document.getElementById('client_icon')).removeClass('text-primary');
			$(document.getElementById('client_icon')).removeClass('text-danger');
			if (document.getElementById('client_count')) document.getElementById('client_count').innerHTML = '-';
		} else if (response.hasOwnProperty('message')) {
			if (!apiMessage) {
				apiMessage = true;
				showNotification('ca-api', response.message, 'top', 'center', 'danger');
			}
			$(document.getElementById('client_icon')).addClass('text-warning');
			$(document.getElementById('client_icon')).removeClass('text-success');
			$(document.getElementById('client_icon')).removeClass('text-primary');
			$(document.getElementById('client_icon')).removeClass('text-danger');
			saveDataToDB('monitoring_wiredClients', JSON.stringify([]));
		} else {
			$.each(response.clients, function() {
				clients.push(this);
				wiredClients.push(this);
				loadClientsUI(this);
			});

			if (offset + apiLimit < response.total) getWiredClientData(offset + apiLimit);
			else {
				updateClientUI();
				saveDataToDB('monitoring_wiredClients', JSON.stringify(wiredClients));
				wiredNotification.close();
			}
		}
	});
}

function getWirelessClients() {
	return wirelessClients;
}

function getWiredClients() {
	return wiredClients;
}

// Access Points
// Updated: 1.6.0
function loadAPUI(ap) {
	//console.log(ap);
	var memoryUsage = (((ap['mem_total'] - ap['mem_free']) / ap['mem_total']) * 100).toFixed(0).toString();
	if (ap['status'] != 'Up') downAPCount++;
	var status = '<i class="fa fa-circle text-danger"></i>';
	if (ap['status'] == 'Up') {
		status = '<span data-toggle="tooltip" data-placement="right" data-html="true" title="CPU Usage: ' + ap['cpu_utilization'] + '%<br>Memory Usage:' + memoryUsage + '%"><i class="fa fa-circle text-success"></i></span>';
	}
	var ip_address = ap['ip_address'];
	if (!ip_address) ip_address = '';

	var uptime = ap['uptime'] ? ap['uptime'] : 0;
	var duration = moment.duration(uptime * 1000);

	// Make AP Name as a link to Central
	var name = encodeURI(ap['name']);
	var apiURL = localStorage.getItem('base_url');
	var centralURL = centralURLs[0][apiURL] + '/frontend/#/APDETAILV2/' + ap['serial'] + '?casn=' + ap['serial'] + '&cdcn=' + name + '&nc=access_point';
	// Add row to table
	var table = $('#ap-table').DataTable();
	table.row.add([ap['swarm_master'] ? '<a href="' + centralURL + '" target="_blank"><strong>' + ap['name'] + ' (VC)</strong></a>' : '<a href="' + centralURL + '" target="_blank"><strong>' + ap['name'] + '</strong></a>', status, ap['status'], ip_address, ap['model'], ap['serial'], ap['client_count'], ap['firmware_version'], ap['site'], ap['group_name'], ap['macaddr'], duration.humanize()]);

	var universalTable = $('#universal-table').DataTable();
	universalTable.row.add(['AP', '<a href="' + centralURL + '" target="_blank"><strong>' + ap['name'] + '</strong></a>', status, ip_address, ap['macaddr'], ap['site'], ap['group_name'], '', '', ap['model'], ap['serial'], ap['firmware_version']]);

	$('[data-toggle="tooltip"]').tooltip();
}

function updateAPUI() {
	// Force reload of table data
	$('#ap-table')
		.DataTable()
		.rows()
		.draw();
	$('#universal-table')
		.DataTable()
		.rows()
		.draw();

	if (document.getElementById('ap_count')) document.getElementById('ap_count').innerHTML = '' + aps.length + '';
	$(document.getElementById('ap_icon')).removeClass('text-warning');
	if (downAPCount > 0) {
		$(document.getElementById('ap_icon')).addClass('text-danger');
		$(document.getElementById('ap_icon')).removeClass('text-success');
	} else {
		$(document.getElementById('ap_icon')).removeClass('text-danger');
		$(document.getElementById('ap_icon')).addClass('text-success');
	}
	// call to current showing page
	loadCurrentPageAP();
}

function getAPData(offset, needClients) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/monitoring/v2/aps?calculate_total=true&show_resource_details=true&calculate_client_count=true&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	return $.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/monitoring/v2/aps)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			$(document.getElementById('ap_icon')).addClass('text-warning');
			$(document.getElementById('ap_icon')).removeClass('text-success');
			$(document.getElementById('ap_icon')).removeClass('text-primary');
			$(document.getElementById('ap_icon')).removeClass('text-danger');
			if (document.getElementById('ap_count')) document.getElementById('ap_count').innerHTML = '-';
		} else if (response.hasOwnProperty('message')) {
			if (!apiMessage) {
				apiMessage = true;
				showNotification('ca-api', response.message, 'top', 'center', 'danger');
			}
			$(document.getElementById('ap_icon')).addClass('text-warning');
			$(document.getElementById('ap_icon')).removeClass('text-success');
			$(document.getElementById('ap_icon')).removeClass('text-primary');
			$(document.getElementById('ap_icon')).removeClass('text-danger');
			saveDataToDB('monitoring_aps', JSON.stringify([]));
		} else {
			if (offset === 0) {
				downAPCount = 0;
				aps = [];
				$('#ap-table')
					.DataTable()
					.rows()
					.remove();
			}

			aps = aps.concat(response.aps);
			$.each(response.aps, function() {
				loadAPUI(this);
			});

			if (offset + apiLimit < response.total) getAPData(offset + apiLimit, needClients);
			else {
				updateAPUI();
				saveDataToDB('monitoring_aps', JSON.stringify(aps));
				if (apNotification) apNotification.close();

				// Grab wireless client data after grabbing APs (so we can match AP Serials to AP Names)
				if (needClients) getWirelessClientData(0);
			}
		}
	});
}

function refreshAPs() {
	$.when(tokenRefresh()).then(function() {
		apNotification = showNotification('ca-wifi', 'Obtaining APs...', 'bottom', 'center', 'info');
		getAPData(0, true);
	});
}

function getAPs() {
	return aps;
}

function getAPsForSite(site) {
	var siteAPs = [];
	$.each(aps, function() {
		if (this['site'] === site) siteAPs.push(this);
	});
	return siteAPs;
}

function getAPsForSiteID(siteID) {
	return getAPsForSite(getNameforSiteId(siteID));
}

function getAPsForGroup(group) {
	var groupAPs = [];
	$.each(aps, function() {
		if (this['group_name'] === group) groupAPs.push(this);
	});
	return groupAPs;
}

function getBSSIDData(offset) {
	if (offset == 0) bssidPromise = new $.Deferred();
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/monitoring/v2/bssids?calculate_total=true&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/monitoring/v2/bssids)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('message')) {
			if (!apiMessage) {
				apiMessage = true;
				showNotification('ca-api', response.message, 'top', 'center', 'danger');
			}
			saveDataToDB('monitoring_bssids', JSON.stringify([]));
		} else {
			if (offset === 0) {
				bssids = [];
			}

			bssids = bssids.concat(response.aps);

			if (offset + apiLimit < response.total) getBSSIDData(offset + apiLimit);
			else {
				bssidPromise.resolve();
				saveDataToDB('monitoring_bssids', JSON.stringify(bssids));
			}
		}
	});
	return bssidPromise.promise();
}

function getBSSIDs() {
	return bssids;
}

// Switches
// Updated: 1.6.0
function loadSwitchUI(device) {
	var memoryUsage = (((device['mem_total'] - device['mem_free']) / device['mem_total']) * 100).toFixed(0).toString();
	if (device['status'] != 'Up') downSwitchCount++;
	var status = '<i class="fa fa-circle text-danger"></i>';
	if (device['status'] == 'Up') {
		status = '<span data-toggle="tooltip" data-placement="right" data-html="true" title="CPU Usage: ' + device['cpu_utilization'] + '%<br>Memory Usage:' + memoryUsage + '%"><i class="fa fa-circle text-success"></i></span>';
	}

	// Make link to Central
	name = encodeURI(device['name']);
	var apiURL = localStorage.getItem('base_url');
	var clientURL = centralURLs[0][apiURL] + '/frontend/#/SWITCHDETAILS/' + device['serial'] + '?cssn=' + device['serial'] + '&cdcn=' + name + '&nc=device';

	// Add row to table
	var table = $('#switch-table').DataTable();
	table.row.add(['<a href="' + clientURL + '" target="_blank"><strong>' + device['name'] + '</strong></a>', status, device['status'], device['ip_address'], device['model'], device['serial'], device['firmware_version'], device['site'], device['group_name'], device['macaddr']]);

	var universalTable = $('#universal-table').DataTable();
	universalTable.row.add(['Switch', '<a href="' + clientURL + '" target="_blank"><strong>' + device['name'] + '</strong></a>', status, device['ip_address'], device['macaddr'], device['site'], device['group_name'], '', '', device['model'], device['serial'], device['firmware_version']]);
}

function updateSwitchUI() {
	// Force reload of table data
	$('#switch-table')
		.DataTable()
		.rows()
		.draw();
	$('#universal-table')
		.DataTable()
		.rows()
		.draw();

	if (document.getElementById('switch_count')) document.getElementById('switch_count').innerHTML = '' + switches.length + '';

	$(document.getElementById('switch_icon')).removeClass('text-warning');
	if (downSwitchCount > 0) {
		$(document.getElementById('switch_icon')).addClass('text-danger');
		$(document.getElementById('switch_icon')).removeClass('text-success');
	} else {
		$(document.getElementById('switch_icon')).removeClass('text-danger');
		$(document.getElementById('switch_icon')).addClass('text-success');
	}
	// call to current showing page
	loadCurrentPageSwitch();
}

function getSwitchData(offset, needClients) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/monitoring/v1/switches?calculate_total=true&show_resource_details=true&calculate_client_count=true&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/monitoring/v2/switches)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
			$(document.getElementById('switch_icon')).addClass('text-warning');
			$(document.getElementById('switch_icon')).removeClass('text-success');
			$(document.getElementById('switch_icon')).removeClass('text-danger');
			$(document.getElementById('switch_icon')).removeClass('text-primary');
			if (document.getElementById('switch_count')) document.getElementById('switch_count').innerHTML = '-';
		} else if (response.hasOwnProperty('message')) {
			if (!apiMessage) {
				apiMessage = true;
				showNotification('ca-api', response.message, 'top', 'center', 'danger');
			}
			$(document.getElementById('switch_icon')).addClass('text-warning');
			$(document.getElementById('switch_icon')).removeClass('text-danger');
			$(document.getElementById('switch_icon')).removeClass('text-success');
			$(document.getElementById('switch_icon')).removeClass('text-primary');
			saveDataToDB('monitoring_switches', JSON.stringify([]));
		} else {
			if (offset == 0) {
				downSwitchCount = 0;
				switches = [];
				$('#switch-table')
					.DataTable()
					.rows()
					.remove();
				var path = window.location.pathname;
				var page = path.split('/').pop();
				if (page.includes('experimental-switching'))
					$('#chassis-switch-table')
						.DataTable()
						.rows()
						.remove();
			}

			switches = switches.concat(response.switches);
			$.each(response.switches, function() {
				loadSwitchUI(this);
			});

			if (offset + apiLimit < response.total) getSwitchData(offset + apiLimit, needClients);
			else {
				updateSwitchUI();
				saveDataToDB('monitoring_switches', JSON.stringify(switches));
				switchNotification.close();
				// Grab wired client data after grabbing switches (so we can match switch Serials to AP Names)
				if (needClients) getWiredClientData(0);
			}
		}
	});
}

function getSwitches() {
	return switches;
}

function getSwitchesForSite(site) {
	var siteSwitches = [];
	$.each(switches, function() {
		if (this['site'] === site) siteSwitches.push(this);
	});
	return siteSwitches;
}

function getSwitchesForSiteID(siteID) {
	return getSwitchesForSite(getNameforSiteId(siteID));
}

function getSwitchesForGroup(group) {
	var groupSwitches = [];
	$.each(switches, function() {
		if (this['group_name'] == group) {
			groupSwitches.push(this);
		}
	});
	return groupSwitches;
}

// Gateways
// Updated: 1.22.0
function loadGatewayUI(device) {
	var memoryUsage = (((device['mem_total'] - device['mem_free']) / device['mem_total']) * 100).toFixed(0).toString();

	if (device['status'] != 'Up') downGatewayCount++;
	var status = '<i class="fa fa-circle text-danger"></i>';
	if (device['status'] == 'Up') {
		status = '<span data-toggle="tooltip" data-placement="right" data-html="true" title="CPU Usage: ' + device['cpu_utilization'] + '%<br>Memory Usage:' + memoryUsage + '%"><i class="fa fa-circle text-success"></i></span>';
	}

	var uplinkStatus = '';
	if (device['uplinks_metric']) {
		var uplinks = device['uplinks_metric'];
		if (uplinks['up'] > 0) uplinkStatus += '<i class="fa fa-arrow-up fa-fw text-success"><strong> ' + uplinks['up'] + ' </strong></i>';
		else uplinkStatus += '<i class="fa fa-arrow-up fa-fw"> ' + uplinks['up'] + ' </i>';
		if (uplinks['down'] > 0) uplinkStatus += '<i class="fa fa-arrow-down fa-fw text-danger"><strong> ' + uplinks['down'] + ' </strong></i>';
		else uplinkStatus += '<i class="fa fa-arrow-down fa-fw"> ' + uplinks['down'] + ' </i>';
	}

	var tunnelsStatus = '';
	if (device['tunnels_metric']) {
		var tunnels = device['tunnels_metric'];
		if (tunnels['up'] > 0) tunnelsStatus += '<i class="fa fa-arrow-up fa-fw text-success"><strong> ' + tunnels['up'] + ' </strong></i>';
		else tunnelsStatus += '<i class="fa fa-arrow-up fa-fw"> ' + tunnels['up'] + ' </i>';
		if (tunnels['down'] > 0) tunnelsStatus += '<i class="fa fa-arrow-down fa-fw text-danger"><strong> ' + tunnels['down'] + ' </strong></i>';
		else tunnelsStatus += '<i class="fa fa-arrow-down fa-fw"> ' + tunnels['down'] + ' </i>';
	}

	// Make link to Central
	name = encodeURI(device['name']);
	var apiURL = localStorage.getItem('base_url');
	var clientURL = centralURLs[0][apiURL] + '/frontend/#/GATEWAYDETAIL/OVERVIEW/' + device['serial'] + '?csg=' + device['serial'] + '&cdcn=' + name + '&nc=gateway';

	// Add row to table
	var table = $('#gateway-table').DataTable();
	table.row.add(['<a href="' + clientURL + '" target="_blank"><strong>' + device['name'] + '</strong></a>', status, device['status'], device['ip_address'], device['public_ip'] ? device['public_ip'] : '', device['model'], device['serial'], device['firmware_version'], device['site'], device['group_name'], device['macaddr'], uplinkStatus, tunnelsStatus, device['reboot_reason']]);

	var universalTable = $('#universal-table').DataTable();
	universalTable.row.add(['Gateway', '<a href="' + clientURL + '" target="_blank"><strong>' + device['name'] + '</strong></a>', status, device['ip_address'], device['macaddr'], device['site'], device['group_name'], '', '', device['model'], device['serial'], device['firmware_version']]);
}

function updateGatewayUI() {
	// Force reload of table data
	$('#gateway-table')
		.DataTable()
		.rows()
		.draw();
	$('#universal-table')
		.DataTable()
		.rows()
		.draw();

	if (document.getElementById('gateway_count')) document.getElementById('gateway_count').innerHTML = '' + gateways.length + '';
	$(document.getElementById('gateway_icon')).removeClass('text-warning');
	if (downGatewayCount > 0) {
		$(document.getElementById('gateway_icon')).addClass('text-danger');
		$(document.getElementById('gateway_icon')).removeClass('text-success');
	} else {
		$(document.getElementById('gateway_icon')).removeClass('text-danger');
		$(document.getElementById('gateway_icon')).addClass('text-success');
	}
	// call to current showing page
	loadCurrentPageGateway();
}

function getGatewayData(offset) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/monitoring/v1/gateways?calculate_total=true&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/monitoring/v2/gateways)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
			$(document.getElementById('gateway_icon')).addClass('text-warning');
			$(document.getElementById('gateway_icon')).removeClass('text-primary');
			$(document.getElementById('gateway_icon')).removeClass('text-success');
			$(document.getElementById('gateway_icon')).removeClass('text-danger');
			if (document.getElementById('gateway_count')) document.getElementById('gateway_count').innerHTML = '-';
		} else if (response.hasOwnProperty('message')) {
			if (!apiMessage) {
				apiMessage = true;
				showNotification('ca-api', response.message, 'top', 'center', 'danger');
			}
			$(document.getElementById('gateway_icon')).addClass('text-warning');
			$(document.getElementById('gateway_icon')).removeClass('text-primary');
			$(document.getElementById('gateway_icon')).removeClass('text-success');
			$(document.getElementById('gateway_icon')).removeClass('text-danger');
			saveDataToDB('monitoring_gateways', JSON.stringify([]));
		} else {
			if (offset == 0) {
				downGatewayCount = 0;
				gateways = [];
				$('#gateway-table')
					.DataTable()
					.rows()
					.remove();
			}

			gateways = gateways.concat(response.gateways);

			// Only load the gateway table with info if we are not getting the detailed info
			if (!needGatewayDetails) {
				$.each(response.gateways, function() {
					loadGatewayUI(this);
				});
			}

			if (offset + apiLimit < response.total) getGatewayData(offset + apiLimit);
			else {
				if (needGatewayDetails && response.total > 0) getGatewayDetails(0);
				else {
					updateGatewayUI();
					saveDataToDB('monitoring_gateways', JSON.stringify(gateways));
					gatewayNotification.close();
				}
			}
		}
	});
}

function getGatewayDetails(gatewayIndex) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/monitoring/v1/gateways/' + gateways[gatewayIndex].serial + '?stats_metric=true',
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/monitoring/v1/gateways/<SERIAL>)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		gateways[gatewayIndex] = response;
		gatewayIndex++;
		if (gatewayIndex < gateways.length) getGatewayDetails(gatewayIndex);
		// get the next gateway's detailed info
		else {
			$.each(gateways, function() {
				loadGatewayUI(this);
			});
			updateGatewayUI();
			saveDataToDB('monitoring_gateways', JSON.stringify(gateways));
			gatewayNotification.close();
		}
	});
}

function getGateways() {
	return gateways;
}

// Added in 1.15
function getGatewaysForSite(site) {
	var siteGateways = [];
	$.each(gateways, function() {
		if (this['site'] === site) siteGateways.push(this);
	});
	return siteGateways;
}

function getGatewaysForSiteID(siteID) {
	return getGatewaysForSite(getNameforSiteId(siteID));
}

function getGatewaysForGroup(group) {
	var groupGateways = [];
	$.each(gateways, function() {
		if (this['group_name'] === group) groupGateways.push(this);
	});
	return groupGateways;
}

// Sites
// Updated: 1.6.0
function loadSiteUI(site) {
	// Add row to table
	var table = $('#site-table').DataTable();

	var capestate = '';
	if (site['cape_state'] === 'good') {
		capestate += '<i class="fa fa-circle text-success"></i>';
		capestate += ' No User Experience Issues';
	} else if (site['cape_state']) {
		capestate += '<i class="fa fa-circle text-danger"></i> ';
		capestate = titleCase(noUnderscore(site['cape_state_dscr'][0]));
	}
	if (site['cape_url']) {
		capestate = '<a href="' + site['cape_url'] + '" target="_blank">' + capestate + '</a>';
	}

	var aiinsights = '';
	if (site['insight_hi'] != 0) {
		aiinsights += '<i class="fa fa-circle text-danger"></i>';
	}
	if (site['insight_mi'] != 0) {
		aiinsights += '<i class="fa fa-circle text-warning"></i>';
	}
	if (site['insight_lo'] != 0) {
		aiinsights += '<i class="fa fa-circle text-minor"></i>';
	}
	if (aiinsights === '') {
		aiinsights = '<i class="fa fa-circle text-neutral"></i>';
	}

	var status = '<i class="fa fa-circle text-success"></i>';
	var healthReason = '';
	if (site['wan_uplinks_down'] > 0) {
		status = '<i class="fa fa-circle text-danger"></i>';
		healthReason = 'Gateway with WAN links down';
		if (siteIssues > 1) siteIssues = 1;
	} else if (site['wan_tunnels_down'] > 0) {
		status = '<i class="fa fa-circle text-danger"></i>';
		healthReason = 'Gateway with VPN Tunnels down';
		if (siteIssues > 1) siteIssues = 1;
	} else if (site['wlan_cpu_high'] > 1) {
		status = '<i class="fa fa-circle text-danger"></i>';
		healthReason = 'APs with high CPU usage';
		if (siteIssues > 1) siteIssues = 1;
	} else if (site['wlan_cpu_high'] > 0) {
		status = '<i class="fa fa-circle text-danger"></i>';
		healthReason = 'AP with high CPU usage';
		if (siteIssues > 1) siteIssues = 1;
	} else if (site['wired_cpu_high'] > 1) {
		status = '<i class="fa fa-circle text-danger"></i>';
		healthReason = 'Switches with high CPU usage';
		if (siteIssues > 1) siteIssues = 1;
	} else if (site['wired_cpu_high'] > 0) {
		status = '<i class="fa fa-circle text-danger"></i>';
		healthReason = 'Switch with high CPU usage';
		if (siteIssues > 1) siteIssues = 1;
	} else if (site['branch_cpu_high'] > 1) {
		status = '<i class="fa fa-circle text-danger"></i>';
		healthReason = 'Gateways with high CPU usage';
		if (siteIssues > 1) siteIssues = 1;
	} else if (site['branch_cpu_high'] > 0) {
		status = '<i class="fa fa-circle text-danger"></i>';
		healthReason = 'Gateway with high CPU usage';
		if (siteIssues > 1) siteIssues = 1;
	} else if (site['wlan_device_status_down'] > 0) {
		status = '<i class="fa fa-circle text-danger"></i>';
		healthReason = 'One or more APs are down';
		if (siteIssues > 1) siteIssues = 1;
	} else if (site['wired_device_status_down'] > 0) {
		status = '<i class="fa fa-circle text-danger"></i>';
		healthReason = 'One or more switches are down';
		if (siteIssues > 1) siteIssues = 1;
	} else if (site['device_high_noise_6ghz'] > 0) {
		status = '<i class="fa fa-circle text-warning"></i>';
		healthReason = 'High noise on 6GHz';
		if (siteIssues > 2) siteIssues = 2;
	} else if (site['device_high_noise_5ghz'] > 0) {
		status = '<i class="fa fa-circle text-warning"></i>';
		healthReason = 'High noise on 5GHz';
		if (siteIssues > 2) siteIssues = 2;
	} else if (site['device_high_noise_2_4ghz'] > 0) {
		status = '<i class="fa fa-circle text-warning"></i>';
		healthReason = 'High noise on 2.4GHz';
		if (siteIssues > 2) siteIssues = 2;
	} else if (site['device_high_ch_6ghz'] > 0) {
		status = '<i class="fa fa-circle text-warning"></i>';
		healthReason = 'High channel utilization on 6GHz';
		if (siteIssues > 2) siteIssues = 2;
	} else if (site['device_high_ch_5ghz'] > 0) {
		status = '<i class="fa fa-circle text-warning"></i>';
		healthReason = 'High channel utilization on 5GHz';
		if (siteIssues > 2) siteIssues = 2;
	} else if (site['device_high_ch_2_4ghz'] > 0) {
		status = '<i class="fa fa-circle text-warning"></i>';
		healthReason = 'High channel utilization on 2.4GHz';
		if (siteIssues > 2) siteIssues = 2;
	} else if (site['device_high_mem'] > 0) {
		status = '<i class="fa fa-circle text-minor"></i>';
		healthReason = 'Devices with high memory utilization';
		if (siteIssues > 3) siteIssues = 3;
	}

	// Make link to Central
	var name = encodeURI(site['name']);
	var apiURL = localStorage.getItem('base_url');
	var clientURL = centralURLs[0][apiURL] + '/frontend/#/SITEHEALTH?id=' + site['id'] + '&name=' + name + '&cid=2&cn=Site&l=label&nc=site';
	var aiURL = centralURLs[0][apiURL] + '/frontend/#/SITE_INSIGHTS?id=' + site['id'] + '&name=' + name + '&cid=2&cn=Site&l=label&nc=site';

	table.row.add(['<a href="' + clientURL + '" target="_blank"><strong>' + site['name'] + '</strong></a>', status, site['device_up'], site['device_down'], site['connected_count'], capestate, '<a href="' + aiURL + '" target="_blank">' + aiinsights + '</a>', healthReason]);
}

function updateSiteUI() {
	// Force reload of table data
	$('#site-table')
		.DataTable()
		.rows()
		.draw();
	if (document.getElementById('site_count')) document.getElementById('site_count').innerHTML = '' + sites.length + '';

	if (siteIssues == 1) {
		$(document.getElementById('site_icon')).addClass('text-danger');
		$(document.getElementById('site_icon')).removeClass('text-warning');
		$(document.getElementById('site_icon')).removeClass('text-minor');
		$(document.getElementById('site_icon')).removeClass('text-primary');
	} else if (siteIssues == 2) {
		$(document.getElementById('site_icon')).removeClass('text-danger');
		$(document.getElementById('site_icon')).addClass('text-warning');
		$(document.getElementById('site_icon')).removeClass('text-minor');
		$(document.getElementById('site_icon')).removeClass('text-primary');
	} else if (siteIssues == 3) {
		$(document.getElementById('site_icon')).removeClass('text-danger');
		$(document.getElementById('site_icon')).removeClass('text-warning');
		$(document.getElementById('site_icon')).addClass('text-minor');
		$(document.getElementById('site_icon')).removeClass('text-primary');
	} else if (siteIssues == 4) {
		$(document.getElementById('site_icon')).removeClass('text-danger');
		$(document.getElementById('site_icon')).removeClass('text-warning');
		$(document.getElementById('site_icon')).removeClass('text-minor');
		$(document.getElementById('site_icon')).addClass('text-primary');
	}

	if ($('#siteselector')) {
		sites.sort((a, b) => {
			const siteA = a.name.toUpperCase(); // ignore upper and lowercase
			const siteB = b.name.toUpperCase(); // ignore upper and lowercase
			// Sort on Site Name
			if (siteA < siteB) {
				return -1;
			}
			if (siteA > siteB) {
				return 1;
			}
			return 0;
		});

		$.each(sites, function() {
			// Add group to the dropdown selector
			$('#siteselector').append($('<option>', { value: this['name'], text: this['name'] }));
			if ($('#siteselector').length != 0) {
				$('#siteselector').selectpicker('refresh');
			}
		});
	}

	// call to current showing page
	loadCurrentPageSite();
}

function getSiteData(offset) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/branchhealth/v1/site?limit=' + apiSiteLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/branchhealth/v1/site)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
			if (document.getElementById('site_count')) document.getElementById('site_count').innerHTML = '-';
			$(document.getElementById('site_icon')).addClass('text-warning');
			$(document.getElementById('site_icon')).removeClass('text-primary');
		} else if (response.hasOwnProperty('message')) {
			if (!apiMessage) {
				apiMessage = true;
				showNotification('ca-api', response.message, 'top', 'center', 'danger');
			}
			$(document.getElementById('site_icon')).addClass('text-warning');
			$(document.getElementById('site_icon')).removeClass('text-primary');
			saveDataToDB('monitoring_sites', JSON.stringify([]));
		} else {
			var path = window.location.pathname;
			var page = path.split('/').pop();

			if (offset == 0) {
				sites = [];
				$('#site-table')
					.DataTable()
					.clear();
				if (document.getElementById('siteselector')) {
					// remove old groups from the selector
					select = document.getElementById('siteselector');
					select.options.length = 0;
				}
			}

			sites = sites.concat(response.items);
			$.each(response.items, function() {
				loadSiteUI(this);
			});

			if (offset + apiSiteLimit < response.total) {
				getSiteData(offset + apiSiteLimit);
			} else {
				updateSiteUI();
				saveDataToDB('monitoring_sites', JSON.stringify(sites));
				siteNotification.close();
			}
		}
	});
}

function getSites() {
	return sites;
}

function getSiteNameForID(siteID) {
	var siteName = '';
	$.each(sites, function() {
		if (this['id'] === siteID) siteName = this['name'];
	});
	return siteName;
}

function getSiteIDForName(siteName) {
	var siteID = '';
	$.each(sites, function() {
		if (this['name'] === siteName) siteID = this['id'];
	});
	return siteID;
}

// Groups
function loadGroupUI(group) {
	// Add row to table
	//console.log(group);
	var table = $('#group-table').DataTable();
	var wiredTemplateUsed = '<button class="btn btn-round btn-outline btn-tag">UI Group</button>';
	if (group.template_details && group.template_details['Wired']) wiredTemplateUsed = '<button class="btn btn-round btn-tag">Template</button>';
	var wirelessTemplateUsed = '<button class="btn btn-round btn-outline btn-tag">UI Group</button>';
	if (group.template_details && group.template_details['Wireless']) wirelessTemplateUsed = '<button class="btn btn-round btn-tag">Template</button>';

	var groupProperties = '';
	if (group.group_properties) {
		if (group.group_properties['AllowedDevTypes'].includes('AccessPoints') || group.group_properties['AllowedDevTypes'].includes('Gateways')) {
			if (group.group_properties['AOSVersion'] === 'AOS_10X') groupProperties += '<button class="btn btn-round btn-tag btn-warning">AOS 10</button>';
			if (group.group_properties['AOSVersion'] === 'AOS_8X') groupProperties += '<button class="btn btn-round btn-tag btn-element">AOS 8</button>';
		}

		if (group.group_properties['AllowedDevTypes'].includes('AccessPoints')) {
			if (group.group_properties['AOSVersion'] === 'AOS_10X' && group.group_properties['ApNetworkRole'] === 'Standard') groupProperties += '<button class="btn btn-round btn-tag">Campus AP</button>';
			if (group.group_properties['AOSVersion'] === 'AOS_10X' && group.group_properties['ApNetworkRole'] === 'Microbranch') groupProperties += '<button class="btn btn-round btn-tag">Microbranch AP</button>';
		}

		if (group.group_properties['AllowedDevTypes'].includes('Switches')) {
			if (group.group_properties['AllowedSwitchTypes'].includes('AOS_CX')) groupProperties += '<button class="btn btn-round btn-tag">AOS-CX</button>';
			if (group.group_properties['AllowedSwitchTypes'].includes('AOS_S')) groupProperties += '<button class="btn btn-round btn-tag">AOS-S</button>';
			if (group.group_properties['MonitorOnlySwitch']) groupProperties += '<button class="btn btn-round btn-tag">Monitor-Only</button>';
		}

		if (group.group_properties['AllowedDevTypes'].includes('Gateways')) {
			if (group.group_properties['GwNetworkRole'] === 'BranchGateway') groupProperties += '<button class="btn btn-round btn-tag">Branch Gateway</button>';
			if (group.group_properties['GwNetworkRole'] === 'WLANGateway') groupProperties += '<button class="btn btn-round btn-tag">Mobility Gateway</button>';
			if (group.group_properties['GwNetworkRole'] === 'VPNConcentrator') groupProperties += '<button class="btn btn-round btn-tag">VPNC</button>';
		}
	}

	table.row.add(['<strong>' + group['group'] + '</strong>', wiredTemplateUsed, wirelessTemplateUsed, groupProperties]);
}

function updateGroupUI() {
	// Force reload of table data
	$('#group-table')
		.DataTable()
		.rows()
		.draw();

	if (document.getElementById('group_count')) document.getElementById('group_count').innerHTML = '' + groups.length + '';
	$(document.getElementById('group_icon')).addClass('text-primary');
	$(document.getElementById('group_icon')).removeClass('text-warning');

	// call to current showing page

	if ($('#groupselector')) {
		groups.sort((a, b) => {
			const groupA = a.group.toUpperCase(); // ignore upper and lowercase
			const groupB = b.group.toUpperCase(); // ignore upper and lowercase
			// Sort on Group name
			if (groupA < groupB) {
				return -1;
			}
			if (groupA > groupB) {
				return 1;
			}
			return 0;
		});
		$.each(groups, function() {
			// Add group to the dropdown selector
			$('#groupselector').append($('<option>', { value: this['group'], text: this['group'] }));
			if ($('#groupselector').length != 0) {
				$('#groupselector').selectpicker('refresh');
			}
		});
	}
	loadCurrentPageGroup();
}

function getGroupData(offset) {
	if (offset == 0) groupPromise = new $.Deferred();
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/configuration/v2/groups?limit=' + apiGroupLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v2/groups)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			if (response.error === 'invalid_token') {
				// Access Token expired - get a new one and try again.
				authPromise = new $.Deferred();
				$.when(authRefresh(authPromise)).then(function() {
					if (!failedAuth) {
						failedAuth = true;
						getGroupData(0);
					}
				});
			} else showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
			$(document.getElementById('group_icon')).addClass('text-warning');
			$(document.getElementById('group_icon')).removeClass('text-primary');
		} else if (response.hasOwnProperty('message')) {
			if (!apiMessage) {
				apiMessage = true;
				showNotification('ca-api', response.message, 'top', 'center', 'danger');
			}
			$(document.getElementById('group_icon')).addClass('text-warning');
			$(document.getElementById('group_icon')).removeClass('text-primary');
			saveDataToDB('monitoring_groups', JSON.stringify([]));
		} else {
			var path = window.location.pathname;
			var page = path.split('/').pop();

			if (offset == 0) {
				groups = [];
				$('#group-table')
					.DataTable()
					.rows()
					.remove();

				// remove old groups from the selector
				select = document.getElementById('groupselector');
				if (select) select.options.length = 0;
			}

			if (offset + apiGroupLimit < response.total) {
				getGroupData(offset + apiGroupLimit);
				getGroupTemplateInfo(response.data, false);
			} else {
				getGroupTemplateInfo(response.data, true);
			}
		}
	});
	return groupPromise.promise();
}

// Added in 1.15 (splitting up the larger refresh) - allows for selective refresh of data
function updateGroupData() {
	groups = [];
	groupNotification = showNotification('ca-folder-settings', 'Obtaining Groups...', 'bottom', 'center', 'info');
	getGroupData(0);
}

function getGroups() {
	return groups;
}

// Updated: 1.5.0
function getGroupTemplateInfo(currentGroups, last) {
	// ******************************************************************************************************************************************************************************* //
	// remove any groups with a comma in the name... due to API issue.
	var newGroups = [];
	$.each(currentGroups, function() {
		if (!this[0].includes(',')) newGroups.push(this);
	});
	currentGroups = newGroups;
	// ******************************************************************************************************************************************************************************* //

	// Combine groups into a single escaped comma separated list
	var groupList = currentGroups.join('%2C');
	//groupList = encodeURI(groupList);
	groupList = groupList.replace('&', '%26');
	groupList = groupList.replace("'", '%27');

	//console.log(groupList)

	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/configuration/v2/groups/template_info?groups=' + groupList,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	//console.log(settings)

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v2/groups/template_info)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
			$(document.getElementById('group_icon')).addClass('text-warning');
			$(document.getElementById('group_icon')).removeClass('text-primary');
		} else if (response.hasOwnProperty('message')) {
			if (!apiMessage) {
				apiMessage = true;
				showNotification('ca-api', response.message, 'top', 'center', 'danger');
			}
			$(document.getElementById('group_icon')).addClass('text-warning');
			$(document.getElementById('group_icon')).removeClass('text-primary');
			saveDataToDB('monitoring_groups', JSON.stringify([]));
			groupNotification.close();
		} else {
			// Sort Groups before loading into tables or dropdowns
			groups = groups.concat(response.data);
			groups.sort(compareGroups);
			//console.log(groups);
			response.data.sort(compareGroups);

			// Do we need to grab the group properties?
			var loadGroupProperties = localStorage.getItem('load_group_properties');
			if (loadGroupProperties === null || loadGroupProperties === '') {
				loadGroupProperties = true;
			} else {
				loadGroupProperties = JSON.parse(loadGroupProperties);
			}
			if (loadGroupProperties) {
				getGroupProperties(groupList, last);
			} else {
				$.each(response.data, function() {
					loadGroupUI(this);
				});

				if (last) {
					updateGroupUI();
					saveDataToDB('monitoring_groups', JSON.stringify(groups));
					groupNotification.close();
					groupPromise.resolve();
				}
			}
		}
	});
}

// removed until Migration support is needed
// Introduced: 1.5.0
// Get the group properties... Central 2.5.4 and later
function getGroupProperties(groupList, last) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/configuration/v1/groups/properties?groups=' + groupList,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	//console.log(settings)

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v1/groups/properties)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
			$(document.getElementById('group_icon')).addClass('text-warning');
			$(document.getElementById('group_icon')).removeClass('text-primary');
		} else if (response.hasOwnProperty('message')) {
			if (!apiMessage) {
				apiMessage = true;
				showNotification('ca-api', response.message, 'top', 'center', 'danger');
			}
			$(document.getElementById('group_icon')).addClass('text-warning');
			$(document.getElementById('group_icon')).removeClass('text-primary');
			saveDataToDB('monitoring_groups', JSON.stringify([]));
		} else {
			// Find each group in "groups" and add properties to it
			$.each(response.data, function() {
				var properties = this['properties'];
				var groupName = this['group'];
				$.each(groups, function() {
					if (this['group'] === groupName) {
						this['group_properties'] = properties;
						loadGroupUI(this);
						return false;
					}
				});
			});

			// Sort Groups before loading into tables or dropdowns
			groups.sort(compareGroups);
			//console.log(groups);
			response.data.sort(compareGroups);

			if (last) {
				updateGroupUI();
				saveDataToDB('monitoring_groups', JSON.stringify(groups));
				groupNotification.close();
				groupPromise.resolve();
			}
		}
	});
}

function compareGroups(a, b) {
	if (a.group < b.group) {
		return -1;
	}
	if (a.group > b.group) {
		return 1;
	}
	return 0;
}

// Swarms
function loadSwarmUI(swarm) {
	if ($('#groupselector')) {
		// Add site to the dropdown selector
		console.log(swarm);
		$('#groupselector').append($('<option>', { value: swarm['swarm_id'], text: swarm['group_name'] + ' > ' + swarm['name'] }));
		if ($('#groupselector').length != 0) {
			$('#groupselector').selectpicker('refresh');
		}
	}
}

function getSwarmData(offset) {
	if (offset == 0) swarmPromise = new $.Deferred();
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/monitoring/v1/swarms?calculate_total=true&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/monitoring/v1/swarms)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			if (response.error === 'invalid_token') {
				// Access Token expired - get a new one and try again.
				authPromise = new $.Deferred();
				$.when(authRefresh(authPromise)).then(function() {
					if (!failedAuth) {
						failedAuth = true;
						getSwarmData(offset);
					}
				});
			} else showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
		} else if (response.hasOwnProperty('message')) {
			if (!apiMessage) {
				apiMessage = true;
				showNotification('ca-api', response.message, 'top', 'center', 'danger');
			}
			saveDataToDB('monitoring_swarms', JSON.stringify([]));
		} else {
			if (offset == 0) {
				swarms = [];
			}
			swarms = swarms.concat(response.swarms);

			if (offset + apiLimit < response.total) getSwarmData(offset + apiLimit);
			else {
				loadCurrentPageSwarm();
				saveDataToDB('monitoring_swarms', JSON.stringify(swarms));
				swarmPromise.resolve();
				vcNotification.close();
			}
		}
	});
	return swarmPromise.promise();
}

// Added in 1.15 (splitting up the larger refresh) - allows for selective refresh of data
function updateSwarmData() {
	// Do we need to grab the Swarms?
	var loadVCConfig = localStorage.getItem('load_vc_config');
	if (loadVCConfig === null || loadVCConfig === '') {
		loadVCConfig = true;
	} else {
		loadVCConfig = JSON.parse(loadVCConfig);
	}
	if (loadVCConfig) {
		vcNotification = showNotification('ca-networking', 'Obtaining Virtual Controllers...', 'bottom', 'center', 'info');
		getSwarmData(0);
	}
}

function getSwarms() {
	return swarms;
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Inventory functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// Updated version 1.9.1
// now pulling from inventory instead of monitoring - bug fix
function downloadDeviceInventory() {
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		csvNotification = showNotification('ca-cloud-data-download', 'Preparing CSV file...', 'bottom', 'center', 'info');

		//CSV header
		var serialKey = 'SERIAL';
		var macKey = 'MAC';
		var typeKey = 'DEVICE TYPE';
		var skuKey = 'SKU';
		var modelKey = 'MODEL';
		var licenseKey = 'LICENSE';

		// get APs for site
		csvData = [];
		$.each(apInventory, function() {
			//console.log(this);
			var license = '';
			if (this['services'].length > 0) license = this['services'][0];

			csvData.push({ [serialKey]: this['serial'], [macKey]: this['macaddr'], [typeKey]: 'AP', [modelKey]: this['aruba_part_no'], [skuKey]: this['model'], [licenseKey]: license });
		});

		$.each(switchInventory, function() {
			//console.log(this);
			var license = '';
			if (this['services'].length > 0) license = this['services'][0];

			csvData.push({ [serialKey]: this['serial'], [macKey]: this['macaddr'], [typeKey]: 'Switch', [modelKey]: this['aruba_part_no'], [skuKey]: this['model'], [licenseKey]: license });
		});

		$.each(gatewayInventory, function() {
			//console.log(this);
			var license = '';
			if (this['services'].length > 0) license = this['services'][0];

			csvData.push({ [serialKey]: this['serial'], [macKey]: this['macaddr'], [typeKey]: 'Gateway', [modelKey]: this['aruba_part_no'], [skuKey]: this['model'], [licenseKey]: license });
		});

		var csv = Papa.unparse(csvData);

		var csvBlob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

		var csvURL = window.URL.createObjectURL(csvBlob);

		var csvLink = document.createElement('a');
		csvLink.href = csvURL;
		csvLink.setAttribute('download', 'inventory.csv');
		//csvLink.setAttribute('Inventory', 'inventory.csv');
		csvLink.click();
		window.URL.revokeObjectURL(csvLink);
		csvNotification.close();
	});
}
function updateInventory() {
	/*  
		Grab all inventories 
		after complete trigger promise
	*/
	inventoryNotification = showNotification('ca-stock-2', 'Obtaining device inventory...', 'bottom', 'center', 'info');
	// Get the device inventories (IAP, Switch, Gateway) to determine device type
	apPromise = new $.Deferred();
	switchPromise = new $.Deferred();
	gatewayPromise = new $.Deferred();
	$.when(getAPInventory(0), getSwitchInventory(0), getGatewayInventory(0)).then(function() {
		//console.log('Got ALL Inventories');
		inventoryNotification.close();
		showNotification('ca-stock-2', 'Device Inventory updated', 'bottom', 'center', 'success');
		inventoryPromise.resolve();
	});
	return inventoryPromise.promise();
}

// Updated version 1.9.1
// Change to include all_ap instead of just iap
function getAPInventory(offset) {
	/*  
		Grab ap inventory
		(loop while there are still items to get)
	*/
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/devices?sku_type=all_ap&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
		complete: function() {
			if (apInventory.length == apInventoryCount) {
				apPromise.resolve();
			}
		},
	};

	/* $.ajax returns a promise*/

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/platform/device_inventory/v1/devices)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
			$(document.getElementById('group_icon')).addClass('text-warning');
			$(document.getElementById('group_icon')).removeClass('text-primary');
		} else {
			if (offset == 0) {
				apInventory = [];
				apInventoryCount = response.total;
			}
			apInventory = apInventory.concat(response.devices);
			if (offset + apiLimit < response.total) getAPInventory(offset + apiLimit); // if there are still objects to get
			//console.log(response.devices);
		}
	});

	return apPromise.promise();
}

function getSwitchInventory(offset) {
	/*  
		Grab switch inventory
		(loop while there are still items to get)
	*/
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/devices?sku_type=switch&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
		complete: function() {
			if (switchInventory.length == switchInventoryCount) {
				/*$.each(switchInventory, function(){
					console.log(this.serial+","+this.macaddr);
				})*/
				switchPromise.resolve();
			}
		},
	};

	/* $.ajax returns a promise*/

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/platform/device_inventory/v1/devices)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
			$(document.getElementById('group_icon')).addClass('text-warning');
			$(document.getElementById('group_icon')).removeClass('text-primary');
		} else {
			if (offset == 0) {
				switchInventory = [];
				switchInventoryCount = response.total;
			}
			switchInventory = switchInventory.concat(response.devices);
			if (offset + apiLimit < response.total) getSwitchInventory(offset + apiLimit); // if there are still objects to get
		}
	});

	return switchPromise.promise();
}

function getGatewayInventory(offset) {
	/*  
		Grab gateway inventory
		(loop while there are still items to get)
	*/
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/devices?sku_type=gateway&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
		complete: function() {
			if (gatewayInventory.length == gatewayInventoryCount) {
				/*$.each(gatewayInventory, function(){
					console.log(this.serial+","+this.macaddr);
				})*/
				gatewayPromise.resolve();
			}
		},
	};

	/* $.ajax returns a promise*/

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/platform/device_inventory/v1/devices)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
			$(document.getElementById('group_icon')).addClass('text-warning');
			$(document.getElementById('group_icon')).removeClass('text-primary');
		} else {
			if (offset == 0) {
				gatewayInventory = [];
				gatewayInventoryCount = response.total;
			}
			gatewayInventory = gatewayInventory.concat(response.devices);
			if (offset + apiLimit < response.total) getGatewayInventory(offset + apiLimit); // if there are still objects to get
			//console.log(apInventory)
		}
	});

	return gatewayPromise.promise();
}

// Added in 1.10
function getFullInventory() {
	return [...apInventory, ...switchInventory, ...gatewayInventory];
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Searching functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function findDeviceInInventory(currentSerial) {
	/*  
		Search through all inventories 
		return the device if found, along with storing the device type
	*/
	var found = false;
	// Check APs
	deviceType = '';
	var foundDevice = null;
	$.each(apInventory, function() {
		if (this['serial'] === currentSerial) {
			foundDevice = this;
			deviceType = 'IAP';
			return false; // break  out of the for loop
		}
	});

	// Check Switches
	if (!foundDevice) {
		$.each(switchInventory, function() {
			if (this['serial'] === currentSerial) {
				foundDevice = this;
				deviceType = 'SWITCH';
				return false; // break  out of the for loop
			}
		});
	}

	// Check Gateways
	if (!foundDevice) {
		$.each(gatewayInventory, function() {
			if (this['serial'] === currentSerial) {
				foundDevice = this;
				deviceType = 'CONTROLLER';
				return false; // break  out of the for loop
			}
		});
	}

	return foundDevice;
}

function findDeviceInMSPInventory(currentSerial) {
	/*  
		Search through all inventories 
		return the device if found, along with storing the device type
	*/
	var found = false;
	// Check APs
	deviceType = '';
	var foundDevice = null;
	$.each(mspAPs, function() {
		if (this['serial'] === currentSerial) {
			foundDevice = this;
			deviceType = 'IAP';
			return false; // break  out of the for loop
		}
	});

	// Check Switches
	if (!foundDevice) {
		$.each(mspSwitches, function() {
			if (this['serial'] === currentSerial) {
				foundDevice = this;
				deviceType = 'SWITCH';
				return false; // break  out of the for loop
			}
		});
	}

	// Check Gateways
	if (!foundDevice) {
		$.each(mspGateways, function() {
			if (this['serial'] === currentSerial) {
				foundDevice = this;
				deviceType = 'CONTROLLER';
				return false; // break  out of the for loop
			}
		});
	}

	return foundDevice;
}

function findDeviceInMonitoring(currentSerial) {
	/*  
		Search through all monitoring data 
		return the device if found, along with storing the device type
	*/
	var found = false;
	// Check APs
	deviceType = '';
	var foundDevice = null;
	$.each(aps, function() {
		if (this['serial'] === currentSerial) {
			foundDevice = this;
			deviceType = 'IAP';
			return false; // break  out of the for loop
		}
	});

	// Check Switches
	if (!foundDevice) {
		$.each(switches, function() {
			if (this['serial'] === currentSerial) {
				foundDevice = this;
				deviceType = 'SWITCH';
				return false; // break  out of the for loop
			}
		});
	}

	// Check Gateways
	if (!foundDevice) {
		$.each(gateways, function() {
			if (this['serial'] === currentSerial) {
				foundDevice = this;
				deviceType = 'CONTROLLER';
				return false; // break  out of the for loop
			}
		});
	}

	if (!foundDevice) {
		$.each(mspAPs, function() {
			if (this['serial'] === currentSerial) {
				foundDevice = this;
				deviceType = 'IAP';
				return false; // break  out of the for loop
			}
		});
	}

	if (!foundDevice) {
		$.each(mspSwitches, function() {
			if (this['serial'] === currentSerial) {
				foundDevice = this;
				deviceType = 'SWITCH';
				return false; // break  out of the for loop
			}
		});
	}

	if (!foundDevice) {
		$.each(mspGateways, function() {
			if (this['serial'] === currentSerial) {
				foundDevice = this;
				deviceType = 'CONTROLLER';
				return false; // break  out of the for loop
			}
		});
	}

	return foundDevice;
}

function findDeviceInMonitoringForMAC(currentMAC) {
	/*  
		Search through all monitoring data 
		return the device if found, along with storing the device type
	*/
	var found = false;
	// Check APs
	deviceType = '';
	var foundDevice = null;
	$.each(aps, function() {
		if (this['macaddr'] === currentMAC) {
			foundDevice = this;
			deviceType = 'IAP';
			return false; // break  out of the for loop
		}
	});

	// Check Switches
	if (!foundDevice) {
		$.each(switches, function() {
			if (this['macaddr'] === currentMAC) {
				foundDevice = this;
				deviceType = 'SWITCH';
				return false; // break  out of the for loop
			}
		});
	}

	// Check Gateways
	if (!foundDevice) {
		$.each(gateways, function() {
			if (this['macaddr'] === currentMAC) {
				foundDevice = this;
				deviceType = 'CONTROLLER';
				return false; // break  out of the for loop
			}
		});
	}

	if (!foundDevice) {
		$.each(mspAPs, function() {
			if (this['macaddr'] === currentMAC) {
				foundDevice = this;
				deviceType = 'IAP';
				return false; // break  out of the for loop
			}
		});
	}

	if (!foundDevice) {
		$.each(mspSwitches, function() {
			if (this['macaddr'] === currentMAC) {
				foundDevice = this;
				deviceType = 'SWITCH';
				return false; // break  out of the for loop
			}
		});
	}

	if (!foundDevice) {
		$.each(mspGateways, function() {
			if (this['macaddr'] === currentMAC) {
				foundDevice = this;
				deviceType = 'CONTROLLER';
				return false; // break  out of the for loop
			}
		});
	}

	return foundDevice;
}

function findDeviceInMSPMonitoring(currentSerial) {
	/*  
		Search through all MSP monitoring data 
		return the device if found, along with storing the device type
	*/
	var found = false;
	// Check APs
	deviceType = '';
	var foundDevice = null;
	$.each(mspAPMonitoring, function() {
		if (this['serial'] === currentSerial) {
			foundDevice = this;
			deviceType = 'IAP';
			return false; // break  out of the for loop
		}
	});

	// Check Switches
	if (!foundDevice) {
		$.each(mspSwitchMonitoring, function() {
			if (this['serial'] === currentSerial) {
				foundDevice = this;
				deviceType = 'SWITCH';
				return false; // break  out of the for loop
			}
		});
	}

	// Check Gateways
	if (!foundDevice) {
		$.each(mspGatewayMonitoring, function() {
			if (this['serial'] === currentSerial) {
				foundDevice = this;
				deviceType = 'CONTROLLER';
				return false; // break  out of the for loop
			}
		});
	}

	return foundDevice;
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Add functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Updated 1.9.2
function addDevices() {
	addCounter = 0;
	showNotification('ca-c-add', 'Adding devices...', 'bottom', 'center', 'info');

	var base_url = localStorage.getItem('base_url');
	var currentClusterName = 'Internal';
	if (base_url) currentClusterName = getClusterName(base_url);

	var devices = [];
	$.each(csvData, function() {
		// build array for uploading.

		if (!this['SERIAL'] || !this['MAC']) {
			return false;
		}
		if (currentClusterName === 'Central On-Prem') devices.push({ mac: cleanMACAddress(this['MAC']), serial: this['SERIAL'].trim(), partNumber: this['MODEL'].trim() });
		else devices.push({ mac: cleanMACAddress(this['MAC']), serial: this['SERIAL'].trim() });
	});
	//console.log('About to add: ' + JSON.stringify(devices));
	var settings = {
		url: getAPIURL() + '/tools/postCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/devices',
			access_token: localStorage.getItem('access_token'),
			data: JSON.stringify(devices),
			//"data": JSON.stringify([{"mac": cleanMACAddress(this["MAC"]), "serial": this["SERIAL"].trim() }])
		}),
	};

	$.ajax(settings).done(function(response, textStatus, jqXHR) {
		//console.log('Add device response: ' + JSON.stringify(response));

		if (response.hasOwnProperty('message')) {
			if (response.message === 'API rate limit exceeded') {
				Swal.fire({
					title: 'API Limit',
					text: 'Daily API limit reached',
					icon: 'error',
				});
				apiErrorCount++;
			}
			if (response.message === 'No devices to add') {
				apiErrorCount++;
			}
		}

		if (response.hasOwnProperty('status')) {
			if (response.status === '503') {
				apiErrorCount++;
				logError('Central Server Error (503): ' + response.reason + ' (/platform/device_inventory/v1/devices)');
			}
		}

		// check for erroring devices
		if (response.code && response.code === 'ATHENA_ERROR_NO_DEVICE') {
			if (response.extra.message.invalid_device && response.extra.message.invalid_device.length > 0) {
				// invalid device - log reason
				$.each(response.extra.message.invalid_device, function() {
					if (this.status === 'ATHENA_ERROR_DEVICE_ALREADY_EXIST') {
						logError('Device with Serial number "' + this.serial + '" is already added to Central or is an invalid MAC address');
					} else if (this.status === 'INVALID_MAC_SN') {
						logError('Device with Serial number "' + this.serial + '" is invalid');
					} else {
						logError('Device with Serial number "' + this.serial + '" is invalid');
					}
					apiErrorCount++;
				});
			}
			if (response.extra.message.blocked_device && response.extra.message.blocked_device.length > 0) {
				// invalid device - log reason
				$.each(response.extra.message.blocked_device, function() {
					if (this.status === 'ATHENA_ERROR_DEVICE_ALREADY_EXIST') {
						logError('Device with Serial number "' + this.serial + '" is already added to your Central account');
					} else {
						logError('Device with Serial number "' + this.serial + '" is blocked from being added to your Central account');
					}
					apiErrorCount++;
				});
			}
		}

		//addCounter = addCounter + 1;
		addCounter = addCounter + devices.length;
		if (addCounter == devices.length) {
			if (currentWorkflow === '') {
				if (apiErrorCount != 0) {
					showLog();
					Swal.fire({
						title: 'Add Failure',
						text: 'Some or all devices failed to be added to Central',
						icon: 'error',
					});
				} else {
					Swal.fire({
						title: 'Add Success',
						text: 'All devices were added to Central',
						icon: 'success',
					});
				}
			} else {
				// complete the Add part of the automation
				console.log('Automation: Adding devices complete');
				autoAddPromise.resolve();
			}
		}
	});
	//console.log(JSON.stringify(devices));
	if (currentWorkflow !== '') {
		return autoAddPromise.promise();
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Archive functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// Added 1.9.2
function archiveDevices() {
	addCounter = 0;
	showNotification('ca-box', 'Archiving devices...', 'bottom', 'center', 'info');

	var devices = [];
	$.each(csvData, function() {
		// build array for uploading.

		if (!this['SERIAL']) {
			return false;
		}
		devices.push(this['SERIAL'].trim());
	});
	console.log('About to archive: ' + JSON.stringify(devices));
	var settings = {
		url: getAPIURL() + '/tools/postCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/devices/archive',
			access_token: localStorage.getItem('access_token'),
			//data: JSON.stringify(devices),
			data: JSON.stringify({ serials: devices }),
		}),
	};

	$.ajax(settings).done(function(response, textStatus, jqXHR) {
		console.log('Archive device response: ' + JSON.stringify(response));

		if (response.hasOwnProperty('message')) {
			if (response.message === 'API rate limit exceeded') {
				Swal.fire({
					title: 'API Limit',
					text: 'Daily API limit reached',
					icon: 'error',
				});
				apiErrorCount++;
			}
			if (response.message === 'No devices to archive') {
				apiErrorCount++;
			}
		}

		if (response.hasOwnProperty('status')) {
			if (response.status === '503') {
				apiErrorCount++;
				logError('Central Server Error (503): ' + response.reason + ' (/platform/device_inventory/v1/devices/archive)');
			}
		}

		// check for erroring devices
		if (response.code && response.code === 'ERROR_DEVICE_ARCHIVE_FAILED') {
			if (response.extra.message === 'No valid Serial(s) to Archive') {
				logError('No valid Serial(s) to Archive');
				apiErrorCount++;
			}
		}

		//addCounter = addCounter + 1;
		archiveCounter = archiveCounter + devices.length;
		if (archiveCounter == csvData.length) {
			if (currentWorkflow === '') {
				if (apiErrorCount != 0) {
					showLog();
					Swal.fire({
						title: 'Archive Failure',
						text: 'Some or all devices failed to be archived in Central',
						icon: 'error',
					});
				} else {
					Swal.fire({
						title: 'Archive Success',
						text: 'All devices were archived in Central',
						icon: 'success',
					});
				}
			} else {
				// complete the Add part of the automation
				console.log('Automation: Archiving devices complete');
				autoArchivePromise.resolve();
			}
		}
	});
	//console.log(JSON.stringify(devices));
	if (currentWorkflow !== '') {
		return autoArchivePromise.promise();
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Licensing functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
function checkForLicensingCompletion() {
	var licenseProgress = (licenseCounter / csvData.length) * 100;
	licenseNotification.update({ progress: licenseProgress });

	if (licenseCounter == csvData.length) {
		licenseNotification.close();
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'License Failure',
					text: 'Some or all devices failed to be licensed',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Add Success',
					text: 'All devices were assigned licenses',
					icon: 'success',
				});
			}
		} else {
			console.log('Automation: Licensing complete');
			autoLicensePromise.resolve();
		}
	}
}

/* Updated v.1.5.4 */
function licenseDevicesFromCSV(msp) {
	licenseNotification = showProgressNotification('ca-license-key', 'Licensing devices...', 'bottom', 'center', 'info');
	// variable to hold the device list per license service
	var serviceList = {};

	$.each(csvData, function() {
		// find device in inventory to get device type
		// only process if the Serial is filled in - e.g. not a blank row!
		if (this['SERIAL']) {
			var currentSerial = this['SERIAL'].trim();
			if (currentSerial === '') {
				// Blank row
				licenseCounter++;
				return true;
			}
			var requestedLicense = this['LICENSE'];
			if (requestedLicense) requestedLicense = requestedLicense.trim();
			if (!requestedLicense) requestedLicense = 'foundation';
			var license = '';

			// Find the device and type
			var foundDevice = findDeviceInInventory(currentSerial);
			if (msp) {
				foundDevice = findDeviceInMSPInventory(currentSerial);
			}

			if (deviceType === 'IAP') {
				if (requestedLicense.toLowerCase().includes('foundation')) {
					license = 'foundation_ap';
				} else {
					license = 'advanced_ap';
				}
			} else if (deviceType === 'SWITCH') {
				// Check Switches
				if (requestedLicense.toLowerCase().includes('foundation')) {
					license = 'foundation_switch_';
				} else {
					license = 'advanced_switch_';
				}
				// check the license skus at https://internal-apigw.central.arubanetworks.com/platform/licensing/v1/services/config
				// Grab switch model from
				var arubaPart = foundDevice['aruba_part_no'];
				if (arubaPart.startsWith('J')) arubaPart = foundDevice['model'];
				else if (arubaPart.startsWith('R')) arubaPart = foundDevice['model'];
				else if (arubaPart.startsWith('Q')) arubaPart = foundDevice['model'];

				if (arubaPart.includes('6400') || arubaPart.includes('54')) {
					license = license + '6400';
				} else if (arubaPart.includes('6300') || arubaPart.includes('38')) {
					license = license + '6300';
				} else if (arubaPart.includes('6100') || arubaPart.includes('6000') || arubaPart.includes('25')) {
					license = license + '6100';
				} else if (arubaPart.includes('6200') || arubaPart.includes('29')) {
					license = license + '6200';
				} else if ((arubaPart.includes('83') || arubaPart.includes('84') || arubaPart.includes('93') || arubaPart.includes('10000')) && requestedLicense.toLowerCase().includes('advanced')) {
					license = license + '8xxx_9xxx_10xxx';
				} else if (arubaPart.includes('83') || arubaPart.includes('84')) {
					license = license + '8400';
				}
			} else if (deviceType === 'CONTROLLER') {
				// Check Gateways
				if (requestedLicense.toLowerCase().includes('wlan')) {
					license = 'foundation_wlan_gw';
				} else if (requestedLicense.toLowerCase().includes('wlan') && requestedLicense.toLowerCase().includes('advanced') && arubaPart.includes('90')) {
					license = 'wlan_advanced_90xx';
				} else if (requestedLicense.toLowerCase().includes('wlan') && requestedLicense.toLowerCase().includes('advanced') && requestedLicense.toLowerCase().includes('security') && arubaPart.includes('90')) {
					license = 'wlan_advanced_90xx_sec';
				} else if (requestedLicense.toLowerCase().includes('wlan') && requestedLicense.toLowerCase().includes('advanced') && arubaPart.includes('91')) {
					license = 'wlan_advanced_91xx';
				} else if (requestedLicense.toLowerCase().includes('wlan') && requestedLicense.toLowerCase().includes('advanced') && requestedLicense.toLowerCase().includes('security') && arubaPart.includes('91')) {
					license = 'wlan_advanced_91xx_sec';
				} else if (requestedLicense.toLowerCase().includes('wlan') && requestedLicense.toLowerCase().includes('advanced') && requestedLicense.toLowerCase().includes('security') && arubaPart.includes('92')) {
					license = 'wlan_advanced_92xx_sec';
				} else if (requestedLicense.toLowerCase().includes('security') && requestedLicense.toLowerCase().includes('foundation-base')) {
					license = 'foundation_base_90xx_sec';
				} else if (requestedLicense.toLowerCase().includes('foundation-base')) {
					license = 'foundation_base_7005';
				} else if (requestedLicense.toLowerCase().includes('advance-base')) {
					license = 'advance_base_7005';
				} else if (requestedLicense.toLowerCase().includes('security') && requestedLicense.toLowerCase().includes('foundation') && (arubaPart.includes('70') || arubaPart.includes('90'))) {
					license = 'foundation_90xx_sec';
				} else if (requestedLicense.toLowerCase().includes('security') && requestedLicense.toLowerCase().includes('advanced') && (arubaPart.includes('70') || arubaPart.includes('90'))) {
					license = 'advance_90xx_sec';
				} else if (requestedLicense.toLowerCase().includes('security') && requestedLicense.toLowerCase().includes('advanced') && arubaPart.includes('91')) {
					license = 'advanced_91xx_sec';
				} else if (requestedLicense.toLowerCase().includes('security') && requestedLicense.toLowerCase().includes('advanced') && arubaPart.includes('92')) {
					license = 'advanced_92xx_sec';
				} else if (requestedLicense.toLowerCase().includes('foundation') && (arubaPart.includes('70') || arubaPart.includes('90'))) {
					license = 'foundation_70xx';
				} else if (requestedLicense.toLowerCase().includes('advanced') && (arubaPart.includes('70') || arubaPart.includes('90'))) {
					license = 'advance_70xx';
				} else if (requestedLicense.toLowerCase().includes('advanced') && arubaPart.includes('91')) {
					license = 'advance_91xx';
				} else if (requestedLicense.toLowerCase().includes('foundation') && arubaPart.includes('72')) {
					license = 'foundation_72xx';
				} else if (requestedLicense.toLowerCase().includes('advanced') && arubaPart.includes('72')) {
					license = 'advance_72xx';
				}
			}

			if (!foundDevice) {
				logError('Device with Serial Number: ' + currentSerial + ' was not found in the device inventory');
				licenseCounter = licenseCounter + 1;
				checkForLicensingCompletion();
			} else {
				// check if other devices have the same services assigned
				if (!serviceList[license]) {
					serviceList[license] = [];
				}

				// Add serial to the list that matches the services.
				var serials = serviceList[license];
				serials.push(currentSerial);
				serviceList[license] = serials;
			}
		} else {
			// Empty Row
			licenseCounter++;
			checkForLicensingCompletion();
		}
	});

	for (const [key, value] of Object.entries(serviceList)) {
		var serials = value;

		// Update licensing
		var settings = {
			url: getAPIURL() + '/tools/postCommand',
			method: 'POST',
			timeout: 0,
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify({
				url: localStorage.getItem('base_url') + '/platform/licensing/v1/subscriptions/assign',
				access_token: localStorage.getItem('access_token'),
				data: JSON.stringify({ serials: value, services: [key] }),
			}),
		};
		licenseCounter = licenseCounter + value.length;
		logInformation('Licensing with ' + key + ': ' + JSON.stringify(value));

		$.ajax(settings).done(function(response, textStatus, jqXHR) {
			if (Array.isArray(response.status)) {
				if (response.status[0].message.msg) {
					logError(response.status[0].message.msg);
				} else {
					logError('There was an error un-assigning licenses.');
				}
			} else if (response.error_code) {
				if (response.error_code == 400) {
					logError(response.message);
				} else {
					logError('There was an error un-assigning licenses.');
				}
			}

			if (response.hasOwnProperty('status')) {
				if (response.status === '503') {
					apiErrorCount++;
					logError('Central Server Error (503): ' + response.reason + ' (/platform/licensing/v1/subscriptions/assign)');
				}
			}
			checkForLicensingCompletion();
		});
	}

	if (currentWorkflow !== '') {
		return autoLicensePromise.promise();
	}
}

function licenseDevices() {
	/*  
		Grab all 3 inventories from API.  
		Scan though  each inventory to find the device.
		Generate the require license string
		Assign license.
	*/
	licenseCounter = 0;

	// Get the device inventories (IAP, Switch, Gateway) to determine device type
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		licenseDevicesFromCSV(false);
	});
	if (currentWorkflow !== '') {
		return autoLicensePromise.promise();
	}
}

// Added in 1.5.2
function checkForUnlicensingCompletion() {
	var licenseProgress = (licenseCounter / csvDataCount) * 100;
	licenseNotification.update({ progress: licenseProgress });

	if (licenseCounter == csvDataCount) {
		licenseNotification.close();
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'License Failure',
					text: 'Some or all devices failed to be unassigned licenses',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Add Success',
					text: 'All devices had licenses unassigned',
					icon: 'success',
				});
			}
		} else {
			console.log('Automation: Unlicensing complete');
			autoLicensePromise.resolve();
		}
	}
}

/* Updated v1.5.4*/
function unlicenseDevicesFromCSV() {
	licenseCounter = 0;
	licenseNotification = showProgressNotification('ca-license-key', 'Un-assigning licenses from devices', 'bottom', 'center', 'info');

	// variable to hold the device list per license service
	var serviceList = {};

	// unassign license from each device
	$.each(csvData, function() {
		if (this['SERIAL']) {
			// find the device to be able to get current license assigned.
			var device = findDeviceInInventory(this['SERIAL']);
			if (!device) {
				logError('Unable to find device ' + this['SERIAL'] + ' in the device inventory');
				apiErrorCount++;
				licenseCounter++;
				checkForUnlicensingCompletion();
			} else if (device['services'] && device['services'].length > 0) {
				// convert the services into a string
				var serviceName = JSON.stringify(device['services']);
				// check if other devices have the same services assigned
				if (!serviceList[serviceName]) {
					serviceList[serviceName] = [];
				}

				// Add serial to the list that matches the services.
				var serials = serviceList[serviceName];
				serials.push(this['SERIAL']);
				serviceList[serviceName] = serials;
			} else {
				licenseCounter++; // skipping devices without licenses.
				checkForUnlicensingCompletion(); // just in case none have licenses assigned.
			}
		} else {
			licenseCounter++; // missing a serial number in the row of the CSV (possibly blank row)
			checkForUnlicensingCompletion();
		}
	});

	for (const [key, value] of Object.entries(serviceList)) {
		var serials = value;

		// Update licensing
		var settings = {
			url: getAPIURL() + '/tools/postCommand',
			method: 'POST',
			timeout: 0,
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify({
				url: localStorage.getItem('base_url') + '/platform/licensing/v1/subscriptions/unassign',
				access_token: localStorage.getItem('access_token'),
				data: JSON.stringify({ serials: value, services: JSON.parse(key) }),
			}),
		};
		licenseCounter = licenseCounter + value.length;

		$.ajax(settings).done(function(response, textStatus, jqXHR) {
			//console.log(response);
			if (Array.isArray(response.status)) {
				if (response.status[0].message.msg) {
					logError(response.status[0].message.msg);
				} else {
					logError('There was an error un-assigning licenses.');
				}
			}

			if (response.hasOwnProperty('status')) {
				if (response.status === '503') {
					apiErrorCount++;
					logError('Central Server Error (503): ' + response.reason + ' (/platform/licensing/v1/subscriptions/unassign)');
				}
			}
			checkForUnlicensingCompletion();
		});
	}
}

// Added in 1.5.2
function unlicenseDevices() {
	/*  
		Grab all 3 inventories from API.  
		Scan though  each inventory to find the device.
		Grab the assigned service
		Unassign license.
	*/
	licenseCounter = 0;

	// Get the device inventories (IAP, Switch, Gateway) to determine device type
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		unlicenseDevicesFromCSV(false);
	});
	if (currentWorkflow !== '') {
		return autoLicensePromise.promise();
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Group functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function csvContainsGroup() {
	var containsGroup = true;
	$.each(csvData, function() {
		//console.log(this["GROUP"])
		if (!this['GROUP'] && this['SERIAL']) {
			containsGroup = false;
			return false;
		}
	});
	return containsGroup;
}

function selectGroup() {
	var select = document.getElementById('groupselector');
	manualGroup = select.value;
	document.getElementById('manualGroupParagraph').innerText = 'Manual Group: ' + manualGroup;
	var mgd = document.getElementById('manualGroupDiv');
	mgd.style.display = 'block';
	showNotification('ca-folder-replace', 'The ' + manualGroup + ' group will be used for devices with no group assigned. Please re-run the task.', 'top', 'center', 'warning');
}

function showCustomerGroup() {
	var x = document.getElementById('addToGroup');
	if (document.getElementById('addToGroupCheckbox').checked) {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}

// Updated in version 1.10
function moveDevicesToGroup() {
	/*  
		Move each device to the correct group
	*/
	moveNotification = showProgressNotification('ca-folder-replace', 'Moving devices into groups...', 'bottom', 'center', 'info');

	moveCounter = 0;
	var groupsToUse = {};

	devicesToMove = 0;
	// Build lists of devices for each Group
	$.each(csvData, function() {
		if (this['SERIAL']) {
			var selectedGroup = manualGroup;
			if (this['GROUP'].trim()) selectedGroup = this['GROUP'].trim();
			var groupDevices = [];
			if (groupsToUse[selectedGroup]) {
				// grab existing list for this group
				groupDevices = groupsToUse[selectedGroup];
			}
			// add device to the list
			groupDevices.push(this['SERIAL'].trim());
			// save the list back into the dictionary
			groupsToUse[selectedGroup] = groupDevices;
			devicesToMove++;
		}
	});
	// For each Group, move the devices in bulk (not a call per device)
	for (const [groupName, serialsToMove] of Object.entries(groupsToUse)) {
		var serialArray = serialsToMove;

		// Need to split up into 50 device blocks (API limitation)
		while (serialArray.length > 0) {
			var serialBlock = [];
			serialBlock = serialArray.splice(0, 50);
			logInformation('Adding Devices to ' + groupName + ': ' + JSON.stringify(serialBlock));

			// Move the block of serials in separate function to avoid variable changing between API call and response (due to looping) - enables better error and completion tracking
			$.when(performDeviceMove(groupName, serialBlock, new $.Deferred())).then(function() {
				// check for completion after each bulk move

				var moveProgress = (moveCounter / devicesToMove) * 100;
				moveNotification.update({ progress: moveProgress });

				if (moveCounter == devicesToMove) {
					moveNotification.close();
					if (currentWorkflow === '') {
						if (apiErrorCount != 0) {
							showLog();
							Swal.fire({
								title: 'Move Failure',
								text: 'Some or all devices failed to move to the specified group(s)',
								icon: 'error',
							});
						} else {
							Swal.fire({
								title: 'Move Success',
								text: 'All devices were to moved to the specified group(s)',
								icon: 'success',
							});
						}
						//console.log(manualGroup)
						if (manualGroup) {
							manualGroup = '';
							var mgd = document.getElementById('manualGroupDiv');
							if (mgd) mgd.style.display = 'none';
						}
					} else {
						logInformation('Automation: Move to Group complete');
						autoGroupPromise.resolve();
					}
				}
			});
		}
	}
	if (currentWorkflow !== '') {
		return autoGroupPromise.promise();
	}
}

// Added in version 1.10
function performDeviceMove(groupName, serialNumbers, movePromiseVar) {
	// Perform actual device move and update the counters/log
	var settings = {
		url: getAPIURL() + '/tools/postCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/configuration/v1/devices/move',
			access_token: localStorage.getItem('access_token'),
			data: JSON.stringify({ group: groupName, serials: serialNumbers }),
		}),
	};

	$.ajax(settings).done(function(response, statusText, xhr) {
		//console.log(response);
		if (response.hasOwnProperty('error_code') || response !== 'Success') {
			logError(response.description);
			apiErrorCount++;
		} else if (response.includes('Controller/Gateway group move has been initiated, please check audit trail for details')) {
			logInformation('Controller/Gateway group move has been initiated, please check audit trail in Central for details');
		}

		if (response.hasOwnProperty('status')) {
			if (response.status === '503') {
				apiErrorCount++;
				logError('Central Server Error (503): ' + response.reason + ' (/configuration/v1/devices/move)');
			}
		}
		moveCounter = moveCounter + serialNumbers.length;
		movePromiseVar.resolve();
	});
	return movePromiseVar.promise();
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Site functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
function createSiteFromCSV() {
	$('#sitefiles').parse({
		config: {
			delimiter: ',',
			header: true,
			complete: processCSV,
			skipEmptyLines: 'greedy',
			transformHeader: function(h) {
				return h.trim();
			},
		},
		before: function(file, inputElem) {
			csvNotification = showNotification('ca-cpu', 'Processing CSV File...', 'bottom', 'center', 'info');
		},
		error: function(err, file) {
			showNotification('ca-c-warning', err.message, 'bottom', 'center', 'danger');
		},
		complete: function() {
			csvNotification.close();
			siteCreationCount = 0;
			apiErrorCount = 0;
			siteNotification = showProgressNotification('ca-pin-add-2', 'Creating Sites...', 'bottom', 'center', 'info');
			$.each(csvData, function() {
				var currentSite = this['SITE NAME'].trim();
				var settings = {};
				if (this['ADDRESS'].trim()) {
					settings = {
						url: getAPIURL() + '/tools/postCommand',
						method: 'POST',
						timeout: 0,
						headers: {
							'Content-Type': 'application/json',
						},
						data: JSON.stringify({
							url: localStorage.getItem('base_url') + '/central/v2/sites',
							access_token: localStorage.getItem('access_token'),
							data: JSON.stringify({
								site_name: this['SITE NAME'].trim(),
								site_address: {
									address: this['ADDRESS'].trim(),
									city: this['CITY'].trim(),
									state: this['STATE'].trim(),
									country: this['COUNTRY'].trim(),
									zipcode: this['ZIPCODE'].trim(),
								},
							}),
						}),
					};
				} else {
					settings = {
						url: getAPIURL() + '/tools/postCommand',
						method: 'POST',
						timeout: 0,
						headers: {
							'Content-Type': 'application/json',
						},
						data: JSON.stringify({
							url: localStorage.getItem('base_url') + '/central/v2/sites',
							access_token: localStorage.getItem('access_token'),
							data: JSON.stringify({
								site_name: this['SITE NAME'].trim(),
								geolocation: {
									latitude: this['LATITUDE'].trim(),
									longitude: this['LONGITUDE'].trim(),
								},
							}),
						}),
					};
				}

				$.ajax(settings).done(function(response, textStatus, jqXHR) {
					//console.log(response)
					if (response.hasOwnProperty('error_code')) {
						apiErrorCount++;
						if (response.description === 'SITE_ERR_DUPLICATE_SITE_NAME') {
							logError('Site with name "' + currentSite + '" already exists');
						} else {
							logError(response.description + ': ' + currentSite);
						}
					} else if (response.hasOwnProperty('site_name')) {
						logInformation(currentSite + ' added successfully');
					}

					if (response.hasOwnProperty('status')) {
						if (response.status === '503') {
							apiErrorCount++;
							logError('Central Server Error (503): ' + response.reason + ' (/central/v2/sites)');
						} else if (response.status === '500') {
							logError('Site with name "' + currentSite + '" failed to be created');
						}
					}

					siteCreationCount++;
					var siteProgress = (siteCreationCount / csvData.length) * 100;
					siteNotification.update({ progress: siteProgress });

					if (siteCreationCount >= csvData.length) {
						siteNotification.close();
						if (apiErrorCount != 0) {
							showLog();
							Swal.fire({
								title: 'Site Creation Failure',
								text: 'Some or all Sites failed to be created',
								icon: 'error',
							});
						} else {
							Swal.fire({
								title: 'Site Creation Success',
								text: 'All sites were created successfully',
								icon: 'success',
							});
						}
					}
				});
			});
		},
	});
}

function createSite() {
	apiErrorCount = 0;
	var currentSite = document.getElementById('siteName').value.trim();
	var address = document.getElementById('siteAddress').value.trim();
	var city = document.getElementById('siteCity').value.trim();
	var state = document.getElementById('siteState').value.trim();
	var country = document.getElementById('siteCountry').value.trim();
	var zipcode = document.getElementById('siteZipcode').value.trim();
	var longitude = document.getElementById('siteLongitude').value.trim();
	var latitude = document.getElementById('siteLatitude').value.trim();

	if (currentSite === '' && (address === '' || city === '' || state === '' || country === '' || zipcode === '' || longitude === '' || latitude === '')) {
		showNotification('ca-pin-add', 'Please fill in either an address or coordinates to add a new Site', 'bottom', 'center', 'warning');
	} else {
		var settings = {};
		if (address) {
			settings = {
				url: getAPIURL() + '/tools/postCommand',
				method: 'POST',
				timeout: 0,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify({
					url: localStorage.getItem('base_url') + '/central/v2/sites',
					access_token: localStorage.getItem('access_token'),
					data: JSON.stringify({
						site_name: currentSite,
						site_address: {
							address: address,
							city: city,
							state: state,
							country: country,
							zipcode: zipcode,
						},
					}),
				}),
			};
		} else {
			settings = {
				url: getAPIURL() + '/tools/postCommand',
				method: 'POST',
				timeout: 0,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify({
					url: localStorage.getItem('base_url') + '/central/v2/sites',
					access_token: localStorage.getItem('access_token'),
					data: JSON.stringify({
						site_name: currentSite,
						geolocation: {
							latitude: latitude,
							longitude: longitude,
						},
					}),
				}),
			};
		}

		return $.ajax(settings).done(function(response, textStatus, jqXHR) {
			//console.log(response)
			if (response.hasOwnProperty('error_code')) {
				apiErrorCount++;
				if (response.description === 'SITE_ERR_DUPLICATE_SITE_NAME') {
					logError('Site with name "' + currentSite + '" already exists');
				} else {
					logError(response.description + ': ' + currentSite);
				}
			} else if (response.hasOwnProperty('site_name')) {
				logInformation(currentSite + ' added successfully');
			}
			if (response.hasOwnProperty('status')) {
				if (response.status === '503') {
					apiErrorCount++;
					logError('Central Server Error (503): ' + response.reason + ' (/central/v2/sites)');
				}
			}
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Site Creation Failure',
					text: 'Site failed to be created',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Site Creation Success',
					text: 'Site "' + currentSite + '" was created successfully',
					icon: 'success',
				});
			}
		});
	}
}

function unassignDeviceFromSite(device) {
	/*  
		remove the device from its current site
	*/
	console.log('Removing device: ' + device['serial'] + ' from site: ' + getIDforSite(device['site']));
	var settings = {
		url: getAPIURL() + '/tools/deleteCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/central/v2/sites/associate',
			access_token: localStorage.getItem('access_token'),
			data: JSON.stringify({ device_id: device['serial'], device_type: deviceType, site_id: parseInt(getIDforSite(device['site'])) }),
		}),
	};

	return $.ajax(settings).done(function(response, textStatus, jqXHR) {
		if (response.hasOwnProperty('status')) {
			if (response.status === '503') {
				apiErrorCount++;
				logError('Central Server Error (503): ' + response.reason + ' (/central/v2/sites/associate)');
			}
		}
		if (response.hasOwnProperty('error_code')) {
			logError(response.description);
		} else if (response.hasOwnProperty('success')) {
			logInformation(device['serial'] + ' removed from existing site (' + device['site'] + ')');
		} else {
			logError('Unable to remove ' + device['serial'] + " from it's current site");
		}
	});
}

function assignDeviceToSite(device, site) {
	/*  
		assigning the device to a site
	*/
	console.log('assigning site ' + site + ' for device: ' + device['serial']);
	var settings = {
		url: getAPIURL() + '/tools/postCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/central/v2/sites/associate',
			access_token: localStorage.getItem('access_token'),
			data: JSON.stringify({ device_id: device['serial'], device_type: deviceType, site_id: parseInt(site) }),
		}),
	};

	return $.ajax(settings).done(function(response, textStatus, jqXHR) {
		//console.log(response);
		if (response.status !== '200') {
			logError(device['serial'] + ' was not assigned to site ' + site);
		}
		if (response.hasOwnProperty('status')) {
			if (response.status === '503') {
				apiErrorCount++;
				logError('Central Server Error (503): ' + response.reason + ' (/central/v2/sites/associate)');
			}
		}
		moveCounter = moveCounter + 1;
		checkForSiteMoveCompletion();
	});
}

function getIDforSite(site) {
	/*  
		get site from sites monitoring data
		return site_id for matching site
	*/
	var siteId = -1; // used when the site isn't found
	//console.log('looking for site: '+site)
	$.each(sites, function() {
		if (this['name'] === site) {
			siteId = this['id'];
			return false;
		}
	});
	return siteId;
}

function getNameforSiteId(siteID) {
	/*  
		get site from sites monitoring data
		return site_id for matching site
	*/
	var siteName = -1; // used when the site isn't found
	//console.log('looking for site: '+site)
	$.each(sites, function() {
		if (this['id'] === siteID) {
			siteName = this['name'];
			return false;
		}
	});
	return siteName;
}

function checkForSiteMoveCompletion() {
	var moveProgress = (moveCounter / csvData.length) * 100;
	moveNotification.update({ progress: moveProgress });

	if (moveCounter == csvData.length) {
		moveNotification.close();
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Move to Site Failure',
					text: 'Some or all devices failed to be moved to the correct sites',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Add Success',
					text: 'All devices were moved to the correct sites',
					icon: 'success',
				});
			}
			updateMonitoringWithClients(false);
		} else {
			logInformation('Automation: Site assignment complete');
			autoSitePromise.resolve();
		}
	}
}

function moveDevicesToSite() {
	/*  
		get site from sites data
		get device from correct device data
		check if device is in a site
		if yes, and the correct site - do nothing :)
		if yes, but not the correct site, unassign device from old site
		assign new site
	*/

	moveNotification = showProgressNotification('ca-world-pin', 'Moving devices into sites...', 'bottom', 'center', 'info');
	moveCounter = 0;
	// Get the device monitoring data (IAP, Switch, Gateway) to determine device type
	$.each(csvData, function() {
		// find device in inventory to get device type
		if (this['SERIAL'] && this['SITE']) {
			var currentSerial = this['SERIAL'].trim();
			var currentSite = this['SITE'].trim();
			if (!currentSite) {
				logError('Device with Serial Number: ' + currentSerial + ' has no site name in the CSV file');
				moveCounter = moveCounter + 1;
				checkForSiteMoveCompletion();
			} else {
				var found = false;
				// Check APs
				// Find the device and type
				var foundDevice = findDeviceInMonitoring(currentSerial);

				if (!foundDevice) {
					logError('Device with Serial Number: ' + currentSerial + ' was not found in the device monitoring');
					moveCounter = moveCounter + 1;
					checkForSiteMoveCompletion();
				} else {
					if (!foundDevice['site']) {
						console.log('Not assigned to site');
						// add device to site
						siteId = getIDforSite(currentSite);
						if (siteId != -1) {
							assignDeviceToSite(foundDevice, siteId);
						} else {
							logError('Device with Serial Number: ' + currentSerial + ' could not be assigned to an unknown site');
							moveCounter = moveCounter + 1;
							checkForSiteMoveCompletion();
						}
					} else if (foundDevice['site'] !== currentSite) {
						// remove from old site,  then add to new site
						console.log('Unassign from site!');
						$.when(unassignDeviceFromSite(foundDevice)).then(function() {
							siteId = getIDforSite(currentSite);
							if (siteId != -1) {
								assignDeviceToSite(foundDevice, siteId);
							} else {
								logError('Device with Serial Number: ' + currentSerial + ' could not be assigned to an unknown site');
								moveCounter = moveCounter + 1;
								checkForSiteMoveCompletion();
							}
						});
					} else {
						// no need to move the device. It's already in the correct site
						moveCounter = moveCounter + 1;
						checkForSiteMoveCompletion();
					}
				}
			}
		} else {
			// blank line in CSV
			moveCounter = moveCounter + 1;
			checkForSiteMoveCompletion();
		}
	});
	if (currentWorkflow !== '') {
		return autoSitePromise.promise();
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Renaming functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
function checkForRenameCompletion() {
	var renameProgress = (renameCounter / csvData.length) * 100;
	renameNotification.update({ progress: renameProgress });

	if (renameCounter == csvData.length) {
		renameNotification.close();
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Renaming Failure',
					text: 'Some or all devices failed to be renamed',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Renaming Success',
					text: 'All devices were renamed',
					icon: 'success',
				});
			}
		} else if (currentWorkflow === 'auto-site-rename') {
			logInformation('Automation: Renaming complete');
			autoRenamePromise.resolve();
		} else if (currentWorkflow === 'auto-site-autorename') {
			logInformation('Automation: Magic Renaming complete');
			autoMagicRenamePromise.resolve();
		} else if (currentWorkflow === 'auto-site-autorenameap-portdescriptions') {
			logInformation('Automation: Magic Renaming complete');
			autoMagicRenamePromise.resolve();
		}
	}
}

function renameDevices() {
	/*  
		if AP - grab ap settings via API, then update the hostname
		if switch - "update" "_sys_hostname"
	*/

	renameCounter = 0;
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		renameNotification = showProgressNotification('ca-card-update', 'Renaming devices...', 'bottom', 'center', 'info');

		var hostnameVariable = localStorage.getItem('hostname_variable');
		if (hostnameVariable === null || hostnameVariable === '') {
			hostnameVariable = '_sys_hostname';
		}

		$.each(csvData, function() {
			// find device in inventory to get device type
			if (this['SERIAL'] && this['DEVICE NAME']) {
				var currentSerial = this['SERIAL'].trim();
				var newHostname = this['DEVICE NAME'].trim();
				if (!newHostname) {
					logError('Device with Serial Number: ' + currentSerial + ' has no device name in the CSV file');
					renameCounter = renameCounter + 1;
					checkForRenameCompletion();
				} else {
					var device = findDeviceInInventory(currentSerial);
					if (!device) {
						logError('Unable to find device ' + currentSerial + ' in the device inventory');
						apiErrorCount++;
						renameCounter = renameCounter + 1;
						checkForRenameCompletion();
					} else if (deviceType === 'IAP') {
						// if AP then get AP settings
						var settings = {
							url: getAPIURL() + '/tools/getCommandwHeaders',
							method: 'POST',
							timeout: 0,
							headers: {
								'Content-Type': 'application/json',
							},
							data: JSON.stringify({
								url: localStorage.getItem('base_url') + '/configuration/v2/ap_settings/' + currentSerial,
								access_token: localStorage.getItem('access_token'),
							}),
						};

						$.ajax(settings).done(function(commandResults, statusText, xhr) {
							if (commandResults.hasOwnProperty('headers')) {
								updateAPILimits(JSON.parse(commandResults.headers));
							}
							if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
								logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v2/ap_settings/<SERIAL>)');
								apiErrorCount++;
								return;
							} else if (commandResults.hasOwnProperty('error_code')) {
								logError(commandResults.description);
								apiErrorCount++;
								renameCounter = renameCounter + 1;
								checkForRenameCompletion();
							} else {
								var response = JSON.parse(commandResults.responseBody);

								// Update ap settings
								var settings = {
									url: getAPIURL() + '/tools/postCommand',
									method: 'POST',
									timeout: 0,
									headers: {
										'Content-Type': 'application/json',
									},
									data: JSON.stringify({
										url: localStorage.getItem('base_url') + '/configuration/v2/ap_settings/' + currentSerial,
										access_token: localStorage.getItem('access_token'),
										data: JSON.stringify({ achannel: response.achannel, atxpower: response.atxpower, dot11a_radio_disable: response.dot11a_radio_disable, dot11g_radio_disable: response.dot11g_radio_disable, gchannel: response.gchannel, gtxpower: response.gtxpower, ip_address: response.ip_address, usb_port_disable: response.usb_port_disable, zonename: response.zonename, hostname: newHostname }),
									}),
								};

								$.ajax(settings).done(function(response, textStatus, jqXHR) {
									if (response.hasOwnProperty('status')) {
										if (response.status === '503') {
											apiErrorCount++;
											logError('Central Server Error (503): ' + response.reason + ' (/configuration/v2/ap_settings/<SERIAL>)');
										}
									}
									if (response !== currentSerial) {
										logError(currentSerial + ' was not renamed');
										//console.log(response.reason);
										apiErrorCount++;
									} else {
										logInformation(currentSerial + ' was renamed successfully');
									}
									renameCounter = renameCounter + 1;
									checkForRenameCompletion();
								});
							}
						});
					} else if (deviceType === 'SWITCH') {
						var currentMac = this['MAC'].trim();
						// patch the switch template variables
						var variables = {};
						variables[hostnameVariable] = newHostname;
						variables['_sys_serial'] = currentSerial;
						variables['_sys_lan_mac'] = currentMac;

						var settings = {
							url: getAPIURL() + '/tools/patchCommand',
							method: 'POST',
							timeout: 0,
							headers: {
								'Content-Type': 'application/json',
							},
							data: JSON.stringify({
								url: localStorage.getItem('base_url') + '/configuration/v1/devices/' + currentSerial + '/template_variables',
								access_token: localStorage.getItem('access_token'),
								data: JSON.stringify({ variables: variables }),
							}),
						};

						$.ajax(settings).done(function(response, textStatus, jqXHR) {
							if (response.hasOwnProperty('status')) {
								if (response.status === '503') {
									apiErrorCount++;
									logError('Central Server Error (503): ' + response.reason + ' (/configuration/v1/devices/<SERIAL>/template_variables)');
								}
							} else if (response.description && response.description === 'Internal Server Error') {
								apiErrorCount++;
								logError('Central Server Error (500): Internal Server Error (/configuration/v1/devices/<SERIAL>/template_variables)');
							}
							if (response !== 'Success') {
								logError('The switch ' + currentSerial + ' was not able to be renamed');
								apiErrorCount++;
							}
							renameCounter = renameCounter + 1;
							checkForRenameCompletion();
						});
					} else if (deviceType === 'CONTROLLER') {
						// unsupported
						logError('The gateway ' + currentSerial + " was not able to be renamed,  as gateway renaming isn't supported yet");
						renameCounter = renameCounter + 1;
						checkForRenameCompletion();
					}
				}
			} else {
				renameCounter = renameCounter + 1;
				checkForRenameCompletion();
			}
		});
	});
	if (currentWorkflow !== '') {
		return autoRenamePromise.promise();
	}
}

function magicRenameDevices() {
	/*  
		if AP - grab ap settings via API, then update the hostname
		if switch - "update" "_sys_hostname" or if customer hostname variable is configured
	*/

	renameCounter = 0;
	renamingCounters = {};
	magicNames = {};
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		renameNotification = showProgressNotification('ca-pattern-recognition', 'Renaming devices...', 'bottom', 'center', 'info');

		var hostnameVariable = localStorage.getItem('hostname_variable');
		if (hostnameVariable === null || hostnameVariable === '') {
			hostnameVariable = '_sys_hostname';
		}

		$.each(csvData, function() {
			// find device in inventory to get device type
			var currentSerial = this['SERIAL'].trim();
			var currentMac = this['MAC'].trim();
			var currentdevice = this;
			$.when(getAnyTopologyNeighbors(currentSerial)).then(function() {
				//console.log(neighborSwitches)
				// Grab AP name format from localStorage
				var newHostname = localStorage.getItem('ap_naming_format');
				if (newHostname === null || newHostname === '') {
					newHostname = '{{initials}}-{{model}}-{{number}}';
				} else {
					newHostname = newHostname.toLowerCase();
				}

				// Format: SiteInitials-APModel-Number
				if (!currentdevice['SITE'] && (newHostname.includes('{{site}}') || newHostname.includes('{{initials}}'))) {
					logError('Device with Serial Number: ' + currentSerial + ' has no site name in the CSV file');
					renameCounter = renameCounter + 1;
					checkForRenameCompletion();
				} else if (!neighborSwitches[currentSerial] && (newHostname.includes('{{switch}}') || newHostname.includes('{{port}}'))) {
					logError('Device with Serial Number: ' + currentSerial + ' has neighbor switch information');
					renameCounter = renameCounter + 1;
					checkForRenameCompletion();
				} else {
					var siteInitials = '';
					var site = '';
					if (newHostname.includes('{{site}}') || newHostname.includes('{{initials}}')) {
						site = currentdevice['SITE'];
						siteInitials = site.match(/\b(\w)/g).join('');
					}
					var device = findDeviceInInventory(currentSerial);
					if (!device) {
						logError('Unable to find device ' + currentSerial + ' in the device inventory');
						apiErrorCount++;
						renameCounter = renameCounter + 1;
						checkForRenameCompletion();
					} else if (deviceType === 'IAP') {
						// Grab model number
						var model = device.aruba_part_no;
						if (model.startsWith('J')) model = device.model;
						else if (model.startsWith('R')) model = device.model;
						else if (model.startsWith('Q')) model = device.model;

						// grab AP number - sequential for each site, and update for next AP.
						var apNumber = renamingCounters[siteInitials];
						if (!apNumber) {
							renamingCounters[siteInitials] = 1;
							apNumber = 1;
						}
						renamingCounters[siteInitials] = apNumber + 1;
						var connectedSwitch = neighborSwitches[currentSerial];
						if (!connectedSwitch) connectedSwitch = {};
						if (!connectedSwitch['neighborName']) connectedSwitch['neighborName'] = 'UnknownSwitch';
						if (!connectedSwitch['remotePort']) connectedSwitch['remotePort'] = 'UnknownPort';

						//  generate string for AP number
						var tripleDigit = padNumber(apNumber, 3);

						// Replace elements in the format
						newHostname = newHostname.replace('{{initials}}', siteInitials);
						newHostname = newHostname.replace('{{site}}', site);
						newHostname = newHostname.replace('{{model}}', model);
						newHostname = newHostname.replace('{{number}}', tripleDigit);
						newHostname = newHostname.replace('{{switch}}', connectedSwitch['neighborName']);
						newHostname = newHostname.replace('{{port}}', connectedSwitch['remotePort']);

						// Replace spaces
						newHostname = newHostname.replace(/ /g, '');

						magicNames[currentSerial] = newHostname; // store incase of enhanced workflow requiring it.

						// if AP then get AP settings
						var settings = {
							url: getAPIURL() + '/tools/getCommandwHeaders',
							method: 'POST',
							timeout: 0,
							headers: {
								'Content-Type': 'application/json',
							},
							data: JSON.stringify({
								url: localStorage.getItem('base_url') + '/configuration/v2/ap_settings/' + currentSerial,
								access_token: localStorage.getItem('access_token'),
							}),
						};

						$.ajax(settings).done(function(commandResults, statusText, xhr) {
							if (commandResults.hasOwnProperty('headers')) {
								updateAPILimits(JSON.parse(commandResults.headers));
							}
							if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
								logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v2/ap_settings/<SERIAL>)');
								apiErrorCount++;
								return;
							} else if (commandResults.hasOwnProperty('error_code')) {
								logError(commandResults.description);
								apiErrorCount++;
								renameCounter = renameCounter + 1;
								checkForRenameCompletion();
							} else {
								var response = JSON.parse(commandResults.responseBody);
								if (response.hostname === newHostname) {
									// no need to do anything as the name already matches
									logInformation('Device ' + currentSerial + " hostname doesn't need to be updated");
									renameCounter = renameCounter + 1;
									checkForRenameCompletion();
								} else {
									// Update ap settings
									var settings = {
										url: getAPIURL() + '/tools/postCommand',
										method: 'POST',
										timeout: 0,
										headers: {
											'Content-Type': 'application/json',
										},
										data: JSON.stringify({
											url: localStorage.getItem('base_url') + '/configuration/v2/ap_settings/' + currentSerial,
											access_token: localStorage.getItem('access_token'),
											data: JSON.stringify({ achannel: response.achannel, atxpower: response.atxpower, dot11a_radio_disable: response.dot11a_radio_disable, dot11g_radio_disable: response.dot11g_radio_disable, gchannel: response.gchannel, gtxpower: response.gtxpower, ip_address: response.ip_address, usb_port_disable: response.usb_port_disable, zonename: response.zonename, hostname: newHostname }),
										}),
									};

									$.ajax(settings).done(function(response, textStatus, jqXHR) {
										if (response.hasOwnProperty('status')) {
											if (response.status === '503') {
												apiErrorCount++;
												logError('Central Server Error (503): ' + response.reason + ' (/configuration/v2/ap_settings/<SERIAL>)');
											}
										}
										if (response !== currentSerial) {
											logError(device.serial + ' was not renamed');
											//console.log(response.reason);
											apiErrorCount++;
										}
										renameCounter = renameCounter + 1;
										checkForRenameCompletion();
									});
								}
							}
						});
					} else if (deviceType === 'SWITCH') {
						// Grab model number
						//console.log(device);
						var model = device.aruba_part_no;
						if (model.startsWith('J')) model = device.model;
						else if (model.startsWith('R')) model = device.model;
						else if (model.startsWith('Q')) model = device.model;

						// grab AP number - sequential for each site, and update for next AP.
						var apNumber = renamingCounters[siteInitials];
						if (!apNumber) {
							renamingCounters[siteInitials] = 1;
							apNumber = 1;
						}
						renamingCounters[siteInitials] = apNumber + 1;
						var connectedSwitch = neighborSwitches[currentSerial];
						if (!connectedSwitch) connectedSwitch = {};
						if (!connectedSwitch['neighborName']) connectedSwitch['neighborName'] = 'UnknownSwitch';
						if (!connectedSwitch['remotePort']) connectedSwitch['remotePort'] = 'UnknownPort';

						//  generate string for AP number
						var tripleDigit = padNumber(apNumber, 3);

						// Replace elements in the format
						newHostname = newHostname.replace('{{initials}}', siteInitials);
						newHostname = newHostname.replace('{{site}}', site);
						newHostname = newHostname.replace('{{model}}', model);
						newHostname = newHostname.replace('{{number}}', tripleDigit);
						newHostname = newHostname.replace('{{switch}}', connectedSwitch['neighborName']);
						newHostname = newHostname.replace('{{port}}', connectedSwitch['remotePort']);

						// Replace spaces
						newHostname = newHostname.replace(/ /g, '');

						magicNames[currentSerial] = newHostname; // store incase of enhanced workflow requiring it.

						var variables = {};
						variables[hostnameVariable] = newHostname;
						variables['_sys_serial'] = currentSerial;
						variables['_sys_lan_mac'] = currentMac;
						console.log(variables);

						// patch the switch template variables
						var settings = {
							url: getAPIURL() + '/tools/patchCommand',
							method: 'POST',
							timeout: 0,
							headers: {
								'Content-Type': 'application/json',
							},
							data: JSON.stringify({
								url: localStorage.getItem('base_url') + '/configuration/v1/devices/' + currentSerial + '/template_variables',
								access_token: localStorage.getItem('access_token'),
								data: JSON.stringify({ variables: variables }),
							}),
						};

						$.ajax(settings).done(function(response, textStatus, jqXHR) {
							console.log(response);
							if (response.hasOwnProperty('status')) {
								if (response.status === '503') {
									apiErrorCount++;
									logError('Central Server Error (503): ' + response.reason + ' (/configuration/v1/devices/<SERIAL>/template_variables)');
								}
							} else if (response.description && response.description === 'Internal Server Error') {
								apiErrorCount++;
								logError('Central Server Error (500): Internal Server Error (/configuration/v1/devices/<SERIAL>/template_variables)');
							}
							if (response !== 'Success') {
								logError('The switch ' + currentSerial + ' was not able to be renamed');
								if (response.description) {
									logError(response.description);
								}
								apiErrorCount++;
							}
							renameCounter = renameCounter + 1;
							checkForRenameCompletion();
						});
					} else {
						//console.log("Not an IAP or switch")
						renameCounter = renameCounter + 1;
						checkForRenameCompletion();
					}
				}
			});
		});
	});
	if (currentWorkflow !== '') {
		return autoMagicRenamePromise.promise();
	}
}

function checkForUpdatePortCompletion() {
	if (updatePortsCounter == csvData.length) {
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Renaming Failure',
					text: 'Some or all ports failed to be renamed',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Renaming Success',
					text: 'All ports with connected APs were renamed',
					icon: 'success',
				});
			}
		} else {
			autoPortPromise.resolve();
		}
	}
}

function getAnyTopologyNeighbors(serial) {
	/*  
		get LLDP neighbours for AP
	*/
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/topology_external_api/apNeighbors/' + serial,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	return $.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/topology_external_api/apNeighbors/<SERIAL>)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		var neighbors = response.neighbors;

		$.each(neighbors, function() {
			// Neighbour is a switch, and AP connects on Eth0, and its one of our managed switches
			if (this.neighborRole === 'Switch' && this.localPort === 'eth0') {
				neighborSwitches[serial] = this;
				return false;
			}
		});
	});
}

function getTopologyNeighbors(serial) {
	/*  
		get LLDP neighbours for AP
	*/
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/topology_external_api/apNeighbors/' + serial,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	return $.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/topology_external_api/apNeighbors/<SERIAL>)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		var neighbors = response.neighbors;
		$.each(neighbors, function() {
			// Neighbour is a switch, and AP connects on Eth0, and its one of our managed switches
			if (this.neighborRole === 'Switch' && this.localPort === 'eth0' && findDeviceInMonitoring(this.neighborSerial)) {
				neighborSwitches[serial] = this;
				//console.log(this)
				return false;
			}
		});
	});
}

/* Updated v.1.9 */
function getSwitchPorts(currentSerial) {
	/*  
		Get switch port details from AOS-S UI Group API
	*/
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/configuration/v1/aos_switch/ports/devices/' + currentSerial,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	return $.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v1/aos_switch/ports/devices/<SERIAL>)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);
		//console.log('Got Switch port details for switch: ' + currentSerial);
		modifiedUISwitches[currentSerial] = response;
	});
}

function updateSwitchPorts(currentSerial) {
	// Update port description with AP hostname
	var settings = {
		url: getAPIURL() + '/tools/putCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/configuration/v1/aos_switch/ports/devices/' + neighborSwitches[currentSerial].neighborSerial,
			access_token: localStorage.getItem('access_token'),
			data: JSON.stringify({ ports: modifiedUISwitches[neighborSwitches[currentSerial].neighborSerial].ports }),
		}),
	};

	$.ajax(settings).done(function(response, textStatus, jqXHR) {
		if (response.hasOwnProperty('status')) {
			if (response.status === '503') {
				apiErrorCount++;
				logError('Central Server Error (503): ' + response.reason + ' (/configuration/v1/aos_switch/ports/devices/<SERIAL>)');
			}
		}
		logInformation('Updating switch port name for AP (' + currentSerial + '): ' + response);
		if (response !== 'Success') {
			logError('The switch port for AP (' + currentSerial + ') was not able to be renamed');
			apiErrorCount++;
		}
		updatePortsCounter = updatePortsCounter + 1;
		checkForUpdatePortCompletion();
	});
}
function updatePortDescription(magic) {
	/*  
		if switch templates - "update" the variable using the switch port variable from settings
		else using UI group - "update" the port number directly
	*/

	updatePortsCounter = 0;
	neighborSwitches = {};
	modifiedUISwitches = {};
	showNotification('ca-card-update', 'Renaming switch ports for connected APs...', 'bottom', 'center', 'info');

	$.each(csvData, function() {
		var currentSerial = this['SERIAL'].trim();
		var hostname = this['DEVICE NAME'].trim();
		var device = findDeviceInMonitoring(currentSerial);
		if (deviceType === 'IAP') {
			$.when(getTopologyNeighbors(currentSerial)).then(function() {
				if (!neighborSwitches[currentSerial]) {
					updatePortsCounter = updatePortsCounter + 1;
					checkForUpdatePortCompletion();
				} else {
					// Need to check if switch is UI group or Template Group
					var neighborSwitch = findDeviceInMonitoring(neighborSwitches[currentSerial].neighborSerial);
					var switchGroup = {};
					$.each(groups, function() {
						if (this.group === neighborSwitch.group_name) {
							switchGroup = this;
						}
					});
					//console.log(neighborSwitch)

					if (switchGroup['template_details']['Wired']) {
						logInformation('Template Group');
						// If using Templates for switches

						var portName = 'int' + neighborSwitches[currentSerial].remotePort + '_name';
						var variables = {};
						if (magic) {
							// running enhanced naming workflow
							hostname = magicNames[currentSerial];
						}
						variables[portName] = hostname;
						variables['_sys_serial'] = neighborSwitch.serial;
						variables['_sys_lan_mac'] = neighborSwitch.macaddr;

						// Update port description with AP hostname
						var settings = {
							url: getAPIURL() + '/tools/patchCommand',
							method: 'POST',
							timeout: 0,
							headers: {
								'Content-Type': 'application/json',
							},
							data: JSON.stringify({
								url: localStorage.getItem('base_url') + '/configuration/v1/devices/' + neighborSwitches[currentSerial].neighborSerial + '/template_variables',
								access_token: localStorage.getItem('access_token'),
								data: JSON.stringify({ variables: variables }),
							}),
						};

						$.ajax(settings).done(function(response, textStatus, jqXHR) {
							if (response.hasOwnProperty('status')) {
								if (response.status === '503') {
									apiErrorCount++;
									logError('Central Server Error (503): ' + response.reason + ' (/configuration/v1/devices/<SERIAL>/template_variables)');
								}
							}
							if (response !== 'Success') {
								logError('The switch port for AP (' + currentSerial + ') was not able to be renamed');
								apiErrorCount++;
							}
							updatePortsCounter = updatePortsCounter + 1;
							checkForUpdatePortCompletion();
						});
					} else if (neighborSwitch.switch_type === 'AOS-S') {
						// If using UI Group for AOS-S switches
						logInformation('AOS-S UI Group');

						if (magic) {
							// running enhanced naming workflow
							hostname = magicNames[currentSerial];
						}

						// if already obtained the switch ports for this switch then just update the port name
						if (modifiedUISwitches[neighborSwitches[currentSerial].neighborSerial]) {
							$.each(modifiedUISwitches[neighborSwitches[currentSerial].neighborSerial].ports, function() {
								if (this['port_id'] === neighborSwitches[currentSerial].remotePort.toString()) {
									this['name'] = hostname;
									updateSwitchPorts(currentSerial);
								}
							});
						} else {
							// get the port details for connected switch
							$.when(getSwitchPorts(neighborSwitches[currentSerial].neighborSerial)).then(function() {
								// then just update the port name
								$.each(modifiedUISwitches[neighborSwitches[currentSerial].neighborSerial].ports, function() {
									if (this['port_id'] === neighborSwitches[currentSerial].remotePort.toString()) {
										this['name'] = hostname;
										updateSwitchPorts(currentSerial);
									}
								});
							});
						}
					} else {
						logInformation('AOS-CX UI Group');
						logError('The switch port for AP (' + currentSerial + ') was not able to be renamed as it is a CX Switch in a UI Group');
						apiErrorCount++;
						updatePortsCounter = updatePortsCounter + 1;
						checkForUpdatePortCompletion();

						// Based on Goldman Sachs UI APIs
						/*
						var variables =  {};
						if (magic) {  // running enhanced naming workflow
							hostname = magicNames[currentSerial];
						}
						
						// Update port description with AP hostname
						var settings = {
							"url": getAPIURL() + "/tools/postCommand",
							"method": "POST",
							"timeout": 0,
							 "headers": {
								"Content-Type": "application/json"
							},
							"data": JSON.stringify({
								"url": localStorage.getItem('base_url') + "/configuration/v1/switch/cx/interfaces?device_serial=" + neighborSwitches[currentSerial].neighborSerial,
								"access_token": localStorage.getItem('access_token'),
								"data": JSON.stringify({"update": {neighborSwitches[currentSerial].remotePort: {"description": hostname}}})
								
							})
						};
						
						$.ajax(settings).done(function (response, textStatus, jqXHR) {
							if (response.hasOwnProperty('status')) {
								if (response.status === '503') {
									apiErrorCount++;
									logError('Central Server Error (503): ' + response.reason + ' (api)');
								}
							}
						  if (response !== "Success") {
							   logError("The switch port for AP ("+ currentSerial  + ") was not able to be renamed")
							   apiErrorCount++;			
						   }
						   updatePortsCounter = updatePortsCounter + 1;
						   checkForUpdatePortCompletion();	
						});
						*/
					}
				}
			});
		} else {
			updatePortsCounter = updatePortsCounter + 1;
			checkForUpdatePortCompletion();
		}
	});
	if (currentWorkflow !== '') {
		return autoPortPromise.promise();
	}
}

function updateDeviceVariables() {
	/*  
		Update template variables using CSV headers for variable names.
	*/

	updateVariablesCounter = 0;
	showNotification('ca-setup-tools', 'Updating Device Variables...', 'bottom', 'center', 'info');

	$.each(csvData, function() {
		var variables = {};
		for (let k in this) {
			if (k === 'DEVICE NAME') {
				var hostname_variable = '_sys_hostname';
				variables[hostname_variable] = this[k];
			} else if (k === 'IP ADDRESS') {
				var ip_variable = '_sys_ip_address';
				variables[ip_variable] = this[k];
			} else if (k === 'SERIAL') {
				var serial_variable = '_sys_serial';
				variables[serial_variable] = this[k];
			} else if (k === 'MAC') {
				var mac_variable = '_sys_lan_mac';
				variables[mac_variable] = this[k];
			} else if (k !== 'SERIAL' && k !== 'MAC' && k !== 'GROUP' && k !== 'SITE' && k !== 'LICENSE' && this[k] !== '') {
				variables[k] = this[k];
			}
		}
		//console.log(variables)

		var settings = {
			url: getAPIURL() + '/tools/patchCommand',
			method: 'POST',
			timeout: 0,
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify({
				url: localStorage.getItem('base_url') + '/configuration/v1/devices/' + currentSerial + '/template_variables',
				access_token: localStorage.getItem('access_token'),
				data: JSON.stringify({ variables: variables }),
			}),
		};

		$.ajax(settings).done(function(response, textStatus, jqXHR) {
			if (response.hasOwnProperty('status')) {
				if (response.status === '503') {
					apiErrorCount++;
					logError('Central Server Error (503): ' + response.reason + ' (/configuration/v1/devices/<SERIAL>/template_variables)');
				}
			}
			if (response !== 'Success') {
				logError('The variables for ' + currentSerial + ' were not able to be updated');
				apiErrorCount++;
			}
			updateVariablesCounter = updateVariablesCounter + 1;
			checkForUpdateVariablesCompletion();
		});
	});
	if (currentWorkflow !== '') {
		return autoVariablesPromise.promise();
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Zone functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function checkForZoneCompletion() {
	var zoneProgress = (zoneCounter / csvData.length) * 100;
	zoneNotification.update({ progress: zoneProgress });

	if (zoneCounter == csvData.length) {
		zoneNotification.close();
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Zone/SSID Configuration Failure',
					text: 'Some or all devices failed to be set to the correct Zones/SSIDs',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Zone/SSID Configuration Success',
					text: 'All devices were set to the correct Zones/SSIDs',
					icon: 'success',
				});
			}
		} /* else if (currentWorkflow === "auto-site-rename"){
			console.log("Automation: Renaming complete")
			autoZonePromise.resolve();
		} else if (currentWorkflow === "auto-site-autorename"){
			console.log("Automation: Magic Renaming complete")
			autoMagicRenamePromise.resolve();
		} else if (currentWorkflow === "auto-site-autorenameap-portdescriptions"){
			console.log("Automation: Magic Renaming complete")
			autoMagicRenamePromise.resolve();
		}*/
	}
}

function setAPZone() {
	/*  
		if AP - grab ap settings via API, then update the zonename
	*/

	zoneCounter = 0;
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		zoneNotification = showProgressNotification('ca-setup-tools', 'Setting AP Zones/SSIDs...', 'bottom', 'center', 'info');

		$.each(csvData, function() {
			// find device in inventory to get device type
			if (this['SERIAL']) {
				var currentSerial = this['SERIAL'].trim();
				var newZonename = this['ZONE'].trim();
				newZonename = newZonename.replace(/\s*,\s*/g, ',');
				if (!newZonename || newZonename === '-') {
					// "-" zone comes from the downloaded CSV from Central - equals to no configured zone.
					logInformation('Device with Serial Number: ' + currentSerial + ' has no AP Zone/SSIDs in the CSV file');
					zoneCounter = zoneCounter + 1;
					checkForZoneCompletion();
				} else {
					var device = findDeviceInInventory(currentSerial);
					if (!device) {
						logError('Unable to find device ' + currentSerial + ' in the device inventory');
						apiErrorCount++;
						zoneCounter = zoneCounter + 1;
						checkForZoneCompletion();
					} else if (deviceType === 'IAP') {
						// if AP then get AP settings
						var settings = {
							url: getAPIURL() + '/tools/getCommandwHeaders',
							method: 'POST',
							timeout: 0,
							headers: {
								'Content-Type': 'application/json',
							},
							data: JSON.stringify({
								url: localStorage.getItem('base_url') + '/configuration/v2/ap_settings/' + currentSerial,
								access_token: localStorage.getItem('access_token'),
							}),
						};

						$.ajax(settings).done(function(commandResults, statusText, xhr) {
							if (commandResults.hasOwnProperty('headers')) {
								updateAPILimits(JSON.parse(commandResults.headers));
							}
							if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
								logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v2/ap_settings/<SERIAL>)');
								apiErrorCount++;
								return;
							} else if (commandResults.hasOwnProperty('error_code')) {
								logError(commandResults.description);
								apiErrorCount++;
								return;
							}
							var response = JSON.parse(commandResults.responseBody);

							//console.log(response, textStatus, jqXHR);
							if (response.hasOwnProperty('error_code')) {
								logError(response.description);
								apiErrorCount++;
								zoneCounter = zoneCounter + 1;
								checkForZoneCompletion();
							} else if (response.zonename === newZonename) {
								// no need to do anything as the name already matches
								logInformation('Device ' + currentSerial + " AP Zone/SSIDs doesn't need to be updated");
								zoneCounter = zoneCounter + 1;
								checkForZoneCompletion();
							} else {
								// Check if we need to set the Zone back to all SSIDs (AOS10 SSID per AP support)
								if (newZonename === '*') newZonename = '_#ALL#_';

								// Update ap settings
								var settings = {
									url: getAPIURL() + '/tools/postCommand',
									method: 'POST',
									timeout: 0,
									headers: {
										'Content-Type': 'application/json',
									},
									data: JSON.stringify({
										url: localStorage.getItem('base_url') + '/configuration/v2/ap_settings/' + currentSerial,
										access_token: localStorage.getItem('access_token'),
										data: JSON.stringify({ achannel: response.achannel, atxpower: response.atxpower, dot11a_radio_disable: response.dot11a_radio_disable, dot11g_radio_disable: response.dot11g_radio_disable, gchannel: response.gchannel, gtxpower: response.gtxpower, ip_address: response.ip_address, usb_port_disable: response.usb_port_disable, zonename: newZonename, hostname: response.hostname }),
									}),
								};

								$.ajax(settings).done(function(response, textStatus, jqXHR) {
									if (response.hasOwnProperty('status')) {
										if (response.status === '503') {
											apiErrorCount++;
											logError('Central Server Error (503): ' + response.reason + ' (/configuration/v2/ap_settings/<SERIAL>)');
										}
									}
									if (response !== currentSerial) {
										logError(currentSerial + ' was not assigned to AP Zone/SSIDs "' + newZonename + '". Reason: ' + response.reason);
										//console.log(response.reason);
										apiErrorCount++;
									} else {
										logInformation(currentSerial + ' was assigned to AP Zone/SSIDs "' + newZonename + '"');
									}
									zoneCounter = zoneCounter + 1;
									checkForZoneCompletion();
								});
							}
						});
					} else {
						// Either switch or controller/gateway
						zoneCounter = zoneCounter + 1;
						checkForZoneCompletion();
					}
				}
			} else {
				zoneCounter = zoneCounter + 1;
				checkForZoneCompletion();
			}
		});
	});
	if (currentWorkflow !== '') {
		return autoZonePromise.promise();
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		RF Profile functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function checkForRFCompletion() {
	var profileProgress = (rfCounter / csvData.length) * 100;
	profileNotification.update({ progress: profileProgress });

	if (rfCounter == csvData.length) {
		profileProgress.close();
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'RF Profile Configuration Failure',
					text: 'Some or all devices failed to be set to the correct RF Profiles',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'RF Profile Configuration Success',
					text: 'All devices were set to the correct RF Profiles',
					icon: 'success',
				});
			}
		} /* else if (currentWorkflow === "auto-site-rename"){
			console.log("Automation: Renaming complete")
			autoZonePromise.resolve();
		} else if (currentWorkflow === "auto-site-autorename"){
			console.log("Automation: Magic Renaming complete")
			autoMagicRenamePromise.resolve();
		} else if (currentWorkflow === "auto-site-autorenameap-portdescriptions"){
			console.log("Automation: Magic Renaming complete")
			autoMagicRenamePromise.resolve();
		}*/
	}
}

function setRFProfile() {
	/*  
		if AP - grab ap settings via API, then update the rf-zone
	*/

	rfCounter = 0;
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		profileNotification = showProgressNotification('ca-antenna', 'Setting RF Profiles...', 'bottom', 'center', 'info');

		$.each(csvData, function() {
			// find device in inventory to get device type
			if (this['SERIAL']) {
				var currentSerial = this['SERIAL'].trim();
				var newProfileName = this['RF PROFILE'].trim();
				if (!newProfileName || newProfileName === '-') {
					// "-" zone comes from the downloaded CSV from Central - equals to no configured zone.
					logInformation('Device with Serial Number: ' + currentSerial + ' has no RF Profile in the CSV file');
					rfCounter++;
					checkForRFCompletion();
				} else {
					var device = findDeviceInInventory(currentSerial);
					if (!device) {
						logError('Unable to find device ' + currentSerial + ' in the device inventory');
						apiErrorCount++;
						rfCounter++;
						checkForRFCompletion();
					} else if (deviceType === 'IAP') {
						// if AP then get AP settings
						var settings = {
							url: getAPIURL() + '/tools/getCommandwHeaders',
							method: 'POST',
							timeout: 0,
							headers: {
								'Content-Type': 'application/json',
							},
							data: JSON.stringify({
								url: localStorage.getItem('base_url') + '/configuration/v1/ap_settings_cli/' + currentSerial,
								access_token: localStorage.getItem('access_token'),
							}),
						};

						$.ajax(settings).done(function(commandResults, statusText, xhr) {
							if (commandResults.hasOwnProperty('headers')) {
								updateAPILimits(JSON.parse(commandResults.headers));
							}
							if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
								logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v1/ap_settings_cli/<SERIAL>)');
								apiErrorCount++;
								return;
							} else if (commandResults.hasOwnProperty('error_code')) {
								logError(commandResults.description);
								apiErrorCount++;
								return;
							}
							var response = JSON.parse(commandResults.responseBody);

							if (response.hasOwnProperty('error_code')) {
								logError(response.description);
								apiErrorCount++;
								rfCounter++;
								checkForRFCompletion();
							} else {
								// Add profile to the response
								var apCLIResponse = response;
								apCLIResponse.push('  rf-zone ' + newProfileName);

								// Update ap settings
								var settings = {
									url: getAPIURL() + '/tools/postCommand',
									method: 'POST',
									timeout: 0,
									headers: {
										'Content-Type': 'application/json',
									},
									data: JSON.stringify({
										url: localStorage.getItem('base_url') + '/configuration/v1/ap_settings_cli/' + currentSerial,
										access_token: localStorage.getItem('access_token'),
										data: JSON.stringify({ clis: apCLIResponse }),
									}),
								};

								$.ajax(settings).done(function(response, statusText, xhr) {
									if (response.hasOwnProperty('status')) {
										if (response.status === '503') {
											apiErrorCount++;
											logError('Central Server Error (503): ' + response.reason + ' (/configuration/v1/ap_settings_cli/<SERIAL>)');
										}
									}
									if (response !== currentSerial) {
										logError(currentSerial + ' was not assigned the RF Profile "' + newProfileName + '". Reason: ' + response.reason);
										//console.log(response.reason);
										apiErrorCount++;
									} else {
										logInformation(currentSerial + ' was assigned the RF Profile "' + newProfileName + '"');
									}
									rfCounter++;
									checkForRFCompletion();
								});
							}
						});
					} else {
						// Either switch or controller/gateway
						rfCounter++;
						checkForRFCompletion();
					}
				}
			} else {
				rfCounter++;
				checkForRFCompletion();
			}
		});
	});
	if (currentWorkflow !== '') {
		return autoRFPromise.promise();
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Radio Mode functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function checkForRadioModeCompletion() {
	var radioProgress = (radioModeCounter / csvData.length) * 100;
	radioNotification.update({ progress: radioProgress });

	if (radioModeCounter >= csvData.length) {
		radioNotification.close();
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Radio Mode Configuration Failure',
					text: 'Some or all devices failed to be set to the correct Radio Modes',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Radio Mode Configuration Success',
					text: 'All devices were set to the correct Radio Modes',
					icon: 'success',
				});
			}
		}
	}
}

function setRadioMode(specificMode) {
	/*  
		if AP - grab ap settings via API, then update the wifi0-mode, wifi1-mode, wifi2-mode, split-5ghz-mode and dual-5ghz-mode
	*/
	var settingsList = {};
	radioModeCounter = 0;
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		radioNotification = showProgressNotification('ca-router', 'Setting Radio Mode...', 'bottom', 'center', 'info');
		if (csvData.length == 0) showNotification('ca-router', 'No matching APs available', 'bottom', 'center', 'warning');
		$.each(csvData, function() {
			// find device in inventory to get device type
			if (this['SERIAL']) {
				var currentSerial = this['SERIAL'].trim();
				var newRadio0Mode = this['RADIO 0 MODE'];
				var newRadio1Mode = this['RADIO 1 MODE'];
				var newRadio2Mode = this['RADIO 2 MODE'];
				var dualRadioMode = this['DUAL 5GHZ MODE'];
				var splitRadioMode = this['SPLIT 5GHZ MODE'];
				if ((!newRadio0Mode || newRadio0Mode === '-') && (!newRadio1Mode || newRadio1Mode === '-') && (!newRadio2Mode || newRadio2Mode === '-')) {
					// "-" zone comes from the downloaded CSV from Central - equals to no configured zone.
					logInformation('Device with Serial Number: ' + currentSerial + ' has no Radio Mode in the CSV file');
					radioModeCounter++;
					checkForRadioModeCompletion();
				} else {
					var device = findDeviceInInventory(currentSerial);
					if (!device) {
						logError('Unable to find device ' + currentSerial + ' in the device inventory');
						apiErrorCount++;
						radioModeCounter++;
						checkForRadioModeCompletion();
					} else if (deviceType === 'IAP') {
						settingsList[device.macaddr.toLowerCase()] = this;
						// if AP then get AP settings
						var settings = {
							url: getAPIURL() + '/tools/getCommandwHeaders',
							method: 'POST',
							timeout: 0,
							headers: {
								'Content-Type': 'application/json',
							},
							data: JSON.stringify({
								url: localStorage.getItem('base_url') + '/configuration/v1/ap_settings_cli/' + currentSerial,
								access_token: localStorage.getItem('access_token'),
							}),
						};

						$.ajax(settings).done(function(commandResults, statusText, xhr) {
							if (commandResults.hasOwnProperty('headers')) {
								updateAPILimits(JSON.parse(commandResults.headers));
							}
							if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
								logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v1/ap_settings_cli/<SERIAL>)');
								apiErrorCount++;
								return;
							} else if (commandResults.hasOwnProperty('error_code')) {
								logError(commandResults.description);
								apiErrorCount++;
								return;
							}
							var response = JSON.parse(commandResults.responseBody);

							if (response.hasOwnProperty('error_code')) {
								logError(response.description);
								apiErrorCount++;
								radioModeCounter++;
								checkForRadioModeCompletion();
							} else {
								var apCLIResponse = response;
								// Pull in the new settings from the settingsList (ensures correct settings are used)
								var newSettingsKey = [apCLIResponse[0].replace('per-ap-settings ', '')];
								var newSettings = settingsList[newSettingsKey];

								var currentSerial = newSettings['SERIAL'].trim();
								var newRadio0Mode = newSettings['RADIO 0 MODE'];
								var newRadio1Mode = newSettings['RADIO 1 MODE'];
								var newRadio2Mode = newSettings['RADIO 2 MODE'];
								var dualRadioMode = newSettings['DUAL 5GHZ MODE'];
								var splitRadioMode = newSettings['SPLIT 5GHZ MODE'];

								// rebuild each line required for the radio config
								var wifi0mode = -1;
								var wifi1mode = -1;
								var wifi2mode = -1;
								// Radio 0
								if (newRadio0Mode && newRadio0Mode !== '-' && (specificMode === 'all' || specificMode === 'split' || specificMode === 'dual')) {
									// remove the old settings
									if (apCLIResponse.indexOf('  radio-0-disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  radio-0-disable'), 1);
									if (apCLIResponse.indexOf('  dot11a-radio-disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  dot11a-radio-disable'), 1);
									for (i = 0; i < apCLIResponse.length; i++) {
										if (apCLIResponse[i].includes('wifi0-mode')) wifi0mode = i;
									}
									if (wifi0mode != -1) apCLIResponse.splice(wifi0mode, 1);

									// add in the new config but only on supported AP models
									var newRadioMode = newRadio0Mode.trim().toLowerCase();
									if (newRadioMode === 'access' || newRadioMode === 'monitor' || newRadioMode === 'spectrum') {
										apCLIResponse.push('  wifi0-mode ' + newRadioMode);
									} else if (newRadioMode === 'off') {
										if (device.model.includes('635') || device.model.includes('655')) apCLIResponse.push('  radio-0-disable');
										else apCLIResponse.push('  dot11a-radio-disable');
									}
								}

								// Radio 1
								if (newRadio1Mode && newRadio1Mode !== '-' && (specificMode === 'all' || specificMode === 'dual')) {
									// remove the old settings
									if (apCLIResponse.indexOf('  radio-1-disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  radio-1-disable'), 1);
									if (apCLIResponse.indexOf('  dot11g-radio-disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  dot11g-radio-disable'), 1);
									for (i = 0; i < apCLIResponse.length; i++) {
										if (apCLIResponse[i].includes('wifi1-mode')) wifi1mode = i;
									}
									if (wifi1mode != -1) apCLIResponse.splice(wifi1mode, 1);

									// add in the new config but only on supported AP models
									var newRadioMode = newRadio1Mode.trim().toLowerCase();
									if (newRadioMode === 'access' || newRadioMode === 'monitor' || newRadioMode === 'spectrum') {
										apCLIResponse.push('  wifi1-mode ' + newRadioMode);
									} else if (newRadioMode === 'off') {
										if (device.model.includes('635') || device.model.includes('655')) apCLIResponse.push('  radio-1-disable');
										else apCLIResponse.push('  dot11g-radio-disable');
									}
								}

								// Radio 2
								if (newRadio2Mode && newRadio2Mode !== '-' && (specificMode === 'all' || specificMode === 'split')) {
									// remove the old settings
									if (apCLIResponse.indexOf('  radio-2-disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  radio-2-disable'), 1);
									for (i = 0; i < apCLIResponse.length; i++) {
										if (apCLIResponse[i].includes('wifi2-mode')) wifi2mode = i;
									}
									if (wifi2mode != -1) apCLIResponse.splice(wifi2mode, 1);

									// Check if Split radio is enabled - which allow use of radio2
									var split555 = false;
									if (splitRadioMode && splitRadioMode !== '-') {
										var newRadioMode = splitRadioMode.trim().toLowerCase();
										if (newRadioMode === 'true' || newRadioMode === 'yes' || newRadioMode === 'y' || newRadioMode === 'enabled' || newRadioMode === 'enable') split555 = true;
									}
									// add in the new config but only on supported AP models
									if (device.model.includes('635') || device.model.includes('655') || split555) {
										var newRadioMode = newRadio2Mode.trim().toLowerCase();
										if (newRadioMode === 'access' || newRadioMode === 'monitor' || newRadioMode === 'spectrum') {
											apCLIResponse.push('  wifi2-mode ' + newRadioMode);
										} else if (newRadioMode === 'off') {
											apCLIResponse.push('  radio-2-disable');
										}
									}
								}

								// Dual 5GHz Mode
								if (dualRadioMode && dualRadioMode !== '-' && (specificMode === 'all' || specificMode === 'dual')) {
									// remove the old settings
									if (apCLIResponse.indexOf('  dual-5GHz-mode disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  dual-5GHz-mode disable'), 1);
									if (apCLIResponse.indexOf('  dual-5GHz-mode enable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  dual-5GHz-mode enable'), 1);

									// add in the new config but only on supported AP models
									if (device.model.includes('344') || device.model.includes('345')) {
										// Standardize inputs for correct setting
										var newRadioMode = dualRadioMode.trim().toLowerCase();
										if (newRadioMode === 'true' || newRadioMode === 'yes' || newRadioMode === 'y' || newRadioMode === 'enabled') newRadioMode = 'enable';
										if (newRadioMode === 'false' || newRadioMode === 'no' || newRadioMode === 'n' || newRadioMode === 'disabled') newRadioMode = 'disable';
										if (newRadioMode === 'enable' || newRadioMode === 'disable') {
											apCLIResponse.push('  dual-5GHz-mode ' + newRadioMode);
										}
									}
								}

								// Split 5GHz Mode on 555
								if (splitRadioMode && splitRadioMode !== '-' && (specificMode === 'all' || specificMode === 'split')) {
									// remove the old settings
									if (apCLIResponse.indexOf('  split-5ghz-mode enabled') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  split-5ghz-mode enabled'), 1);

									// add in the new config but only on supported AP models
									if (device.model.includes('555')) {
										// Standardize inputs for correct setting
										var newRadioMode = splitRadioMode.trim().toLowerCase();
										if (newRadioMode === 'true' || newRadioMode === 'yes' || newRadioMode === 'y' || newRadioMode === 'enabled') newRadioMode = 'enable';
										if (newRadioMode === 'enable') {
											apCLIResponse.push('  split-5ghz-mode enabled');
										}
									}
								}
								//console.log(apCLIResponse);

								// Update ap settings
								var settings = {
									url: getAPIURL() + '/tools/postCommand',
									method: 'POST',
									timeout: 0,
									headers: {
										'Content-Type': 'application/json',
									},
									data: JSON.stringify({
										url: localStorage.getItem('base_url') + '/configuration/v1/ap_settings_cli/' + currentSerial,
										access_token: localStorage.getItem('access_token'),
										data: JSON.stringify({ clis: apCLIResponse }),
									}),
								};

								$.ajax(settings).done(function(response, statusText, xhr) {
									if (response.hasOwnProperty('status')) {
										if (response.status === '503') {
											apiErrorCount++;
											logError('Central Server Error (503): ' + response.reason + ' (/configuration/v1/ap_settings_cli/<SERIAL>)');
										}
									}
									if (response !== currentSerial) {
										logError(currentSerial + ' was not assigned the new Radio Modes. Reason: ' + response.reason);
										//console.log(response.reason);
										apiErrorCount++;
									} else {
										logInformation(currentSerial + ' was assigned the new Radio Modes ');
									}
									radioModeCounter++;
									checkForRadioModeCompletion();
								});
							}
						});
					} else {
						// Either switch or controller/gateway
						radioModeCounter++;
						checkForRadioModeCompletion();
					}
				}
			} else {
				radioModeCounter++;
				checkForRadioModeModeCompletion();
			}
		});
	});
	if (currentWorkflow !== '') {
		return autoRadioModeModePromise.promise();
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Antenna functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// Build the list of AP models that support external antennas from the supplied CSV
function buildAntennaAPList() {
	select = document.getElementById('apSelector');
	if (select) select.options.length = 0;
	if ($('#apSelector')) {
		$('#apSelector').append($('<option>', { value: 'All', text: 'All External Antenna AP Models' }));
	}

	if (csvData.length == 0) {
		showNotification('ca-router', 'No external antenna APs available', 'bottom', 'center', 'warning');
		return;
	}
	var apModels = [];
	$.each(csvData, function() {
		var device = findDeviceInMonitoring(this['SERIAL']);
		if (deviceType === 'IAP' && device['model'] && (device['model'].match(/^..4.*$/gi) || device['model'].match(/^..8.*$/gi))) {
			if (!apModels.includes(device['model'])) apModels.push(device['model']);
		}
	});

	if ($('#apSelector')) {
		apModels.sort((a, b) => {
			const apA = a.toUpperCase(); // ignore upper and lowercase
			const apB = b.toUpperCase(); // ignore upper and lowercase
			// Sort on Group name
			if (apA < apB) {
				return -1;
			}
			if (apA > apB) {
				return 1;
			}
			return 0;
		});
		$.each(apModels, function() {
			// Add group to the dropdown selector
			$('#apSelector').append($('<option>', { value: this.toString(), text: this.toString() }));
			if ($('#apSelector').length != 0) {
				$('#apSelector').selectpicker('refresh');
			}
		});
	}
}

// Load up the supported Antennas
function loadAntennas() {
	document.getElementById('antennaGain0').value = 0;
	document.getElementById('antennaGain1').value = 0;
	select = document.getElementById('antennaSelector');
	if (select) select.options.length = 0;
	var antennaKeys = Object.keys(antennas);
	$.each(antennaKeys, function() {
		$('#antennaSelector').append($('<option>', { value: this, text: this }));
	});
	$('#antennaSelector').selectpicker('refresh');
}

// Update the UI with selected antenna gain values
function antennaSelected() {
	var selectedAntenna = antennas[document.getElementById('antennaSelector').value];
	if (selectedAntenna.five) document.getElementById('antennaGain0').value = selectedAntenna.five;
	if (selectedAntenna.two) document.getElementById('antennaGain1').value = selectedAntenna.two;
}

function applyAntennaGains() {
	apiErrorCount = 0;
	// CSV header
	var serialKey = 'SERIAL';
	var macKey = 'MAC';
	var antenna0Key = 'RADIO 0 GAIN';
	var antenna1Key = 'RADIO 1 GAIN';
	var antenna2Key = 'RADIO 2 GAIN';

	var csvDataBuild = [];

	var selectedAPModel = document.getElementById('apSelector').value;

	// For each row in the supplied device CSV
	// Rebuild the CSV only having selected APs and set antenna gains
	$.each(csvData, function() {
		var device = findDeviceInMonitoring(this['SERIAL']);
		if (device['model'].match(/^..4.*$/gi) || device['model'].match(/^..8.*$/gi)) {
			if (selectedAPModel === device['model'] || selectedAPModel === 'All') csvDataBuild.push({ [serialKey]: device['serial'], [macKey]: device['macaddr'], [antenna0Key]: document.getElementById('antennaGain0').value, [antenna1Key]: document.getElementById('antennaGain1').value });
		}
	});

	csvData = csvDataBuild;
	setAntennaGain();
}

function checkForAntennaCompletion() {
	var antennaProgress = (antennaCounter / csvData.length) * 100;
	antennaNotification.update({ progress: antennaProgress });

	if (antennaCounter >= csvData.length) {
		if ($('#AntennaConfigModal')) $('#AntennaConfigModal').modal('hide');
		antennaNotification.close();
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Antenna Configuration Failure',
					text: 'Some or all devices failed to be set to the correct antenna gains. Please reboot any successful APs for change to take effect.',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Antenna Configuration Success',
					text: 'All devices were set to the correct antenna gains. Please reboot APs for change to take effect.',
					icon: 'success',
					showCancelButton: true,
					cancelButtonColor: '#d33',
					cancelButtonText: "I'll reboot later",
					confirmButtonColor: '#3085d6',
					confirmButtonText: 'Reboot them!',
				}).then(result => {
					if (result.isConfirmed) {
						// Need to confirm config has made it to each AP
						confirmEnvConfigSync(ConfigType.Antenna, true);
						//setTimeout(rebootDevices, 5000);
					}
				});
			}
		}
	}
}

function setAntennaGain() {
	/*  
		if AP - grab ap settings via API, then update the antenna gain values
	*/
	var settingsList = {};
	antennaCounter = 0;
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		antennaNotification = showProgressNotification('ca-antenna', 'Setting Antenna Gains...', 'bottom', 'center', 'info');
		if (csvData.length == 0) showNotification('ca-router', 'No external antenna APs available', 'bottom', 'center', 'warning');
		$.each(csvData, function() {
			// find device in inventory to get device type
			if (this['SERIAL']) {
				var currentSerial = this['SERIAL'].trim();

				// Determine Radio 0 gain
				var newRadio0Gain = this['RADIO 0 GAIN'];

				// Determine Radio 1 gain
				var newRadio1Gain = this['RADIO 1 GAIN'];

				if ((!newRadio0Gain || newRadio0Gain === '-') && (!newRadio1Gain || newRadio1Gain === '-')) {
					// "-" zone comes from the downloaded CSV from Central - equals to no configured zone.
					logInformation('Device with Serial Number: ' + currentSerial + ' has no antenna gain in the CSV file');
					antennaCounter++;
					checkForAntennaCompletion();
				} else {
					var device = findDeviceInInventory(currentSerial);
					if (!device) {
						logError('Unable to find device ' + currentSerial + ' in the device inventory');
						apiErrorCount++;
						antennaCounter++;
						checkForAntennaCompletion();
					} else if (deviceType === 'IAP') {
						settingsList[device.macaddr.toLowerCase()] = this;
						// if AP then get AP settings
						var settings = {
							url: getAPIURL() + '/tools/getCommandwHeaders',
							method: 'POST',
							timeout: 0,
							headers: {
								'Content-Type': 'application/json',
							},
							data: JSON.stringify({
								url: localStorage.getItem('base_url') + '/configuration/v1/ap_settings_cli/' + currentSerial,
								access_token: localStorage.getItem('access_token'),
							}),
						};

						$.ajax(settings).done(function(commandResults, statusText, xhr) {
							if (commandResults.hasOwnProperty('headers')) {
								updateAPILimits(JSON.parse(commandResults.headers));
							}
							if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
								logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v1/ap_settings_cli/<SERIAL>)');
								apiErrorCount++;
								return;
							} else if (commandResults.hasOwnProperty('error_code')) {
								logError(commandResults.description);
								apiErrorCount++;
								return;
							}
							var response = JSON.parse(commandResults.responseBody);

							if (response.hasOwnProperty('error_code')) {
								logError(response.description);
								apiErrorCount++;
								antennaCounter++;
								checkForAntennaCompletion();
							} else {
								var apCLIResponse = response;
								// Pull in the new settings from the settingsList (ensures correct settings are used)
								var newSettingsKey = [apCLIResponse[0].replace('per-ap-settings ', '')];
								var newSettings = settingsList[newSettingsKey];

								var currentSerial = newSettings['SERIAL'].trim();
								var newRadio0Gain = newSettings['RADIO 0 GAIN'];
								var newRadio1Gain = newSettings['RADIO 1 GAIN'];

								// rebuild each line required for the radio config
								var gAntenna = -1;
								var aAntenna = -1;
								// Radio 0
								if (newRadio0Gain && newRadio0Gain !== '-') {
									// remove the old settings
									for (i = 0; i < apCLIResponse.length; i++) {
										if (apCLIResponse[i].includes('a-external-antenna')) aAntenna = i;
									}
									if (aAntenna != -1) apCLIResponse.splice(aAntenna, 1);

									// add in the new config but only on supported AP models
									var newRadioGain = newRadio0Gain.trim();
									apCLIResponse.push('  a-external-antenna ' + newRadioGain);
								}

								// Radio 1
								if (newRadio1Gain && newRadio1Gain !== '-') {
									// remove the old settings
									for (i = 0; i < apCLIResponse.length; i++) {
										if (apCLIResponse[i].includes('g-external-antenna')) gAntenna = i;
									}
									if (gAntenna != -1) apCLIResponse.splice(gAntenna, 1);

									// add in the new config but only on supported AP models
									var newRadioGain = newRadio1Gain.trim();
									apCLIResponse.push('  g-external-antenna ' + newRadioGain);
								}

								// Update ap settings
								var settings = {
									url: getAPIURL() + '/tools/postCommand',
									method: 'POST',
									timeout: 0,
									headers: {
										'Content-Type': 'application/json',
									},
									data: JSON.stringify({
										url: localStorage.getItem('base_url') + '/configuration/v1/ap_settings_cli/' + currentSerial,
										access_token: localStorage.getItem('access_token'),
										data: JSON.stringify({ clis: apCLIResponse }),
									}),
								};

								$.ajax(settings).done(function(response, statusText, xhr) {
									if (response.hasOwnProperty('status')) {
										if (response.status === '503') {
											apiErrorCount++;
											logError('Central Server Error (503): ' + response.reason + ' (/configuration/v1/ap_settings_cli/<SERIAL>)');
										}
									}
									if (response !== currentSerial) {
										logError(currentSerial + ' was not assigned the new Antenna gain values. Reason: ' + response.reason);
										//console.log(response.reason);
										apiErrorCount++;
									} else {
										logInformation(currentSerial + ' was assigned the new Antenna gain values');
									}
									antennaCounter++;
									checkForAntennaCompletion();
								});
							}
						});
					} else {
						// Either switch or controller/gateway
						antennaCounter++;
						checkForAntennaCompletion();
					}
				}
			} else {
				antennaCounter++;
				checkForAntennaCompletion();
			}
		});
	});
	if (currentWorkflow !== '') {
		return autoAntennaPromise.promise();
	}
}

function testAntennaGain() {
	var select = document.getElementById('siteselector');
	var selectedSite = select.value;
	var siteAPs = getAPsForSite(selectedSite);
	$('#ap-antenna-table')
		.DataTable()
		.rows()
		.remove();

	antennaNotification = showProgressNotification('ca-antenna', 'Checking APs at ' + selectedSite + '...', 'bottom', 'center', 'info');
	antennaCounter = 0;
	needAntennaConfig = [];
	var externalAPs = 0;
	$.each(siteAPs, function() {
		var currentSerial = this['serial'];
		// If external antenna model
		if (this['model'].match(/^..4.*$/gi) || this['model'].match(/^..8.*$/gi)) {
			externalAPs++;
			// Get current config for AP
			var settings = {
				url: getAPIURL() + '/tools/getCommandwHeaders',
				method: 'POST',
				timeout: 0,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify({
					url: localStorage.getItem('base_url') + '/configuration/v1/ap_settings_cli/' + currentSerial,
					access_token: localStorage.getItem('access_token'),
				}),
			};

			$.ajax(settings).done(function(commandResults, statusText, xhr) {
				if (commandResults.hasOwnProperty('headers')) {
					updateAPILimits(JSON.parse(commandResults.headers));
				}
				if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
					logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v1/ap_settings_cli/<SERIAL>)');
					apiErrorCount++;
					return;
				} else if (commandResults.hasOwnProperty('error_code')) {
					logError(commandResults.description);
					apiErrorCount++;
					return;
				}
				var response = JSON.parse(commandResults.responseBody);

				if (response.hasOwnProperty('error_code')) {
					logError(response.description);
					apiErrorCount++;
					antennaCounter++;
					checkForAntennaTestCompletion();
				} else {
					var apCLIResponse = response;
					var twoGain = '0';
					var fiveGain = '0';

					// Pull out antenna gain values
					for (i = 0; i < apCLIResponse.length; i++) {
						if (apCLIResponse[i].includes('g-external-antenna')) {
							twoGain = apCLIResponse[i].replace('g-external-antenna', '').trim();
						}
						if (apCLIResponse[i].includes('a-external-antenna')) {
							fiveGain = apCLIResponse[i].replace('a-external-antenna', '').trim();
						}
					}
					var needConfig = false;
					if (twoGain === '0') {
						twoGain = '<span class=text-danger>' + twoGain + 'dBi</span>';
						needConfig = true;
					} else twoGain += 'dBi';
					if (fiveGain === '0') {
						fiveGain = '<span class=text-danger>' + fiveGain + 'dBi</span>';
						needConfig = true;
					} else fiveGain += 'dBi';

					// Get AP info from Monitoring
					var ap = findDeviceInMonitoringForMAC(apCLIResponse[0].replace('per-ap-settings ', ''));
					if (needConfig) {
						needAntennaConfig.push(ap);
						if (document.querySelector('#missingAntennaGainBtn')) document.querySelector('#missingAntennaGainBtn').disabled = false;
					}

					// add to table
					var table = $('#ap-antenna-table').DataTable();

					var memoryUsage = (((ap['mem_total'] - ap['mem_free']) / ap['mem_total']) * 100).toFixed(0).toString();
					var status = '<i class="fa fa-circle text-danger"></i>';
					if (ap['status'] == 'Up') {
						status = '<span data-toggle="tooltip" data-placement="right" data-html="true" title="CPU Usage: ' + ap['cpu_utilization'] + '%<br>Memory Usage:' + memoryUsage + '%"><i class="fa fa-circle text-success"></i></span>';
					}
					var ip_address = ap['ip_address'];
					if (!ip_address) ip_address = '';

					// Make AP Name as a link to Central
					var name = encodeURI(ap['name']);
					var apiURL = localStorage.getItem('base_url');
					var centralURL = centralURLs[0][apiURL] + '/frontend/#/APDETAILV2/' + ap['serial'] + '?casn=' + ap['serial'] + '&cdcn=' + name + '&nc=access_point';

					table.row.add([ap['swarm_master'] ? '<a href="' + centralURL + '" target="_blank"><strong>' + ap['name'] + ' (VC)</strong></a>' : '<a href="' + centralURL + '" target="_blank"><strong>' + ap['name'] + '</strong></a>', status, ap['status'], ip_address, ap['model'], ap['serial'], ap['site'], ap['group_name'], ap['macaddr'], twoGain, fiveGain]);

					// Force reload of table data
					$('#ap-antenna-table')
						.DataTable()
						.rows()
						.draw();

					antennaCounter++;
					var antennaProgress = (antennaCounter / siteAPs.length) * 100;
					antennaNotification.update({ progress: antennaProgress });
					if (antennaCounter >= siteAPs.length) antennaNotification.close();
				}
			});

			$('[data-toggle="tooltip"]').tooltip();
		} else {
			antennaCounter++;
			var antennaProgress = (antennaCounter / siteAPs.length) * 100;
			antennaNotification.update({ progress: antennaProgress });
			if (antennaCounter >= siteAPs.length) antennaNotification.close();
		}
	});
	if (externalAPs != 0) {
		$('#APAntennaConfigModalLink').trigger('click');
	} else {
		antennaNotification.close();
		showNotification('ca-antenna', 'No external antenna APs found at ' + selectedSite, 'bottom', 'center', 'danger');
	}
}

function addMissingAntennaGain() {
	if ($('#APAntennaConfigModal')) $('#APAntennaConfigModal').modal('hide');
	// Build csvData with APs from needAntennaConfig
	var serialKey = 'SERIAL';
	var macKey = 'MAC';

	var csvDataBuild = [];

	// For each of the APs needing to be rebooted (stored in 'devicesToReboot')
	// Rebuild the CSV only having selected APs
	$.each(needAntennaConfig, function() {
		csvDataBuild.push({ [serialKey]: this['serial'], [macKey]: this['macaddr'] });
	});

	csvData = csvDataBuild;

	buildAntennaAPList();
	loadAntennas();
	currentWorkflow = '';
	$('#AntennaConfigModalLink').trigger('click');
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		2.4GHz Radio functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function checkForRadioCompletion() {
	var radioProgress = (radioCounter / csvData.length) * 100;
	radioNotification.update({ progress: radioProgress });

	if (radioCounter == csvData.length) {
		radioNotification.close();
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: '2.4GHz Radio Failure',
					text: 'Some or all devices failed to have the 2.4GHz radio configured',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: '2.4GHz Radio Success',
					text: 'All devices had the 2.4GHz radio configured',
					icon: 'success',
				});
			}
		}
	}
}

function disable24radios() {
	/*  
		if AP - grab AP settings via API, then disable the 2.4GHz radio
	*/

	radioCounter = 0;
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		radioNotification = showProgressNotification('ca-wifi-off', 'Disabling 2.4GHz radios...', 'bottom', 'center', 'info');

		$.each(csvData, function() {
			// find device in inventory to get device type
			if (this['SERIAL']) {
				var currentSerial = this['SERIAL'].trim();
				var device = findDeviceInInventory(currentSerial);
				if (!device) {
					logError('Unable to find device ' + currentSerial + ' in the device inventory');
					apiErrorCount++;
					radioCounter = radioCounter + 1;
					checkForRadioCompletion();
				} else if (deviceType === 'IAP') {
					// if AP then get AP settings
					var settings = {
						url: getAPIURL() + '/tools/getCommandwHeaders',
						method: 'POST',
						timeout: 0,
						headers: {
							'Content-Type': 'application/json',
						},
						data: JSON.stringify({
							url: localStorage.getItem('base_url') + '/configuration/v2/ap_settings/' + currentSerial,
							access_token: localStorage.getItem('access_token'),
						}),
					};

					$.ajax(settings).done(function(commandResults, statusText, xhr) {
						if (commandResults.hasOwnProperty('headers')) {
							updateAPILimits(JSON.parse(commandResults.headers));
						}
						if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
							logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v2/ap_settings/<SERIAL>)');
							apiErrorCount++;
							return;
						} else if (commandResults.hasOwnProperty('error_code')) {
							logError(commandResults.description);
							apiErrorCount++;
							return;
						}
						var response = JSON.parse(commandResults.responseBody);

						//console.log(response);
						if (response.hasOwnProperty('error_code')) {
							logError(response.description);
							apiErrorCount++;
							radioCounter = radioCounter + 1;
							checkForRadioCompletion();
						} else if (response.dot11g_radio_disable) {
							// no need to do anything as the name already matches
							logInformation('Device ' + currentSerial + ' 2.4GHz radio is already disabled');
							radioCounter = radioCounter + 1;
							checkForRadioCompletion();
						} else {
							// Update ap settings
							var settings = {
								url: getAPIURL() + '/tools/postCommand',
								method: 'POST',
								timeout: 0,
								headers: {
									'Content-Type': 'application/json',
								},
								data: JSON.stringify({
									url: localStorage.getItem('base_url') + '/configuration/v2/ap_settings/' + currentSerial,
									access_token: localStorage.getItem('access_token'),
									data: JSON.stringify({ achannel: response.achannel, atxpower: response.atxpower, dot11a_radio_disable: response.dot11a_radio_disable, dot11g_radio_disable: true, gchannel: response.gchannel, gtxpower: response.gtxpower, ip_address: response.ip_address, usb_port_disable: response.usb_port_disable, zonename: response.zonename, hostname: response.hostname }),
								}),
							};

							$.ajax(settings).done(function(response, textStatus, jqXHR) {
								if (response.hasOwnProperty('status')) {
									if (response.status === '503') {
										apiErrorCount++;
										logError('Central Server Error (503): ' + response.reason + ' (/configuration/v2/ap_settings/<SERIAL>)');
									}
								}
								if (response !== currentSerial) {
									logError('2.4GHz radio on AP "' + currentSerial + '" was not disabled. Reason: ' + response.reason);
									//console.log(response.reason);
									apiErrorCount++;
								} else {
									logInformation('2.4GHz radio on AP "' + currentSerial + '" was disabled');
								}
								radioCounter = radioCounter + 1;
								checkForRadioCompletion();
							});
						}
					});
				} else {
					// Either switch or controller/gateway
					radioCounter = radioCounter + 1;
					checkForRadioCompletion();
				}
			} else {
				radioCounter = radioCounter + 1;
				checkForRadioCompletion();
			}
		});
	});
	if (currentWorkflow !== '') {
		return autoRadioPromise.promise();
	}
}

function enable24radios() {
	/*  
		if AP - grab AP settings via API, then disable the 2.4GHz radio
	*/

	radioCounter = 0;
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		radioNotification = showProgressNotification('ca-wifi', 'Enabling 2.4GHz radios...', 'bottom', 'center', 'info');

		$.each(csvData, function() {
			// find device in inventory to get device type
			if (this['SERIAL']) {
				var currentSerial = this['SERIAL'].trim();
				var device = findDeviceInInventory(currentSerial);
				if (!device) {
					logError('Unable to find device ' + currentSerial + ' in the device inventory');
					apiErrorCount++;
					radioCounter = radioCounter + 1;
					checkForRadioCompletion();
				} else if (deviceType === 'IAP') {
					// if AP then get AP settings
					var settings = {
						url: getAPIURL() + '/tools/getCommandwHeaders',
						method: 'POST',
						timeout: 0,
						headers: {
							'Content-Type': 'application/json',
						},
						data: JSON.stringify({
							url: localStorage.getItem('base_url') + '/configuration/v2/ap_settings/' + currentSerial,
							access_token: localStorage.getItem('access_token'),
						}),
					};

					$.ajax(settings).done(function(commandResults, statusText, xhr) {
						if (commandResults.hasOwnProperty('headers')) {
							updateAPILimits(JSON.parse(commandResults.headers));
						}
						if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
							logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v2/ap_settings/<SERIAL>)');
							apiErrorCount++;
							return;
						} else if (commandResults.hasOwnProperty('error_code')) {
							logError(commandResults.description);
							apiErrorCount++;
							return;
						}
						var response = JSON.parse(commandResults.responseBody);
						//console.log(response);
						if (response.hasOwnProperty('error_code')) {
							logError(response.description);
							apiErrorCount++;
							radioCounter = radioCounter + 1;
							checkForRadioCompletion();
						} else if (!response.dot11g_radio_disable) {
							// no need to do anything as the name already matches
							logInformation('Device ' + currentSerial + ' 2.4GHz radio is already enabled');
							radioCounter = radioCounter + 1;
							checkForRadioCompletion();
						} else {
							// Update ap settings
							var settings = {
								url: getAPIURL() + '/tools/postCommand',
								method: 'POST',
								timeout: 0,
								headers: {
									'Content-Type': 'application/json',
								},
								data: JSON.stringify({
									url: localStorage.getItem('base_url') + '/configuration/v2/ap_settings/' + currentSerial,
									access_token: localStorage.getItem('access_token'),
									data: JSON.stringify({ achannel: response.achannel, atxpower: response.atxpower, dot11a_radio_disable: response.dot11a_radio_disable, dot11g_radio_disable: false, gchannel: response.gchannel, gtxpower: response.gtxpower, ip_address: response.ip_address, usb_port_disable: response.usb_port_disable, zonename: response.zonename, hostname: response.hostname }),
								}),
							};

							$.ajax(settings).done(function(response, textStatus, jqXHR) {
								if (response.hasOwnProperty('status')) {
									if (response.status === '503') {
										apiErrorCount++;
										logError('Central Server Error (503): ' + response.reason + ' (/configuration/v2/ap_settings/<SERIAL>)');
									}
								}
								if (response !== currentSerial) {
									logError('2.4GHz radio on AP "' + currentSerial + '" was not enabled. Reason: ' + response.reason);
									//console.log(response.reason);
									apiErrorCount++;
								} else {
									logInformation('2.4GHz radio on AP "' + currentSerial + '" was enabled');
								}
								radioCounter = radioCounter + 1;
								checkForRadioCompletion();
							});
						}
					});
				} else {
					// Either switch or controller/gateway
					radioCounter = radioCounter + 1;
					checkForRadioCompletion();
				}
			} else {
				radioCounter = radioCounter + 1;
				checkForRadioCompletion();
			}
		});
	});
	if (currentWorkflow !== '') {
		return autoRadioPromise.promise();
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Country Code functions
------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function updateCountryCodes() {
	var select = document.getElementById('siteselector');
	var selectedSite = select.value;
	$.when(configureSite(selectedSite)).then(function() {
		checkSiteUpdateDone();
	});
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Automated Tasks functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function addAndLicense() {
	autoAddPromise = new $.Deferred();
	autoLicensePromise = new $.Deferred();
	$.when(addDevices()).then(function() {
		// Add devices completed  - now license devices
		$.when(licenseDevices()).then(function() {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Automation Failure',
					text: 'Some or all devices failed to be added & licensed',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Automation Success',
					text: 'All devices were added & licensed',
					icon: 'success',
				});
			}
		});
	});
}

function addAndGroup() {
	autoAddPromise = new $.Deferred();
	autoGroupPromise = new $.Deferred();
	$.when(addDevices()).then(function() {
		// Add devices completed  - now move devices
		$.when(moveDevicesToGroup()).then(function() {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Automation Failure',
					text: 'Some or all devices failed to be added, and moved into a group',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Automation Success',
					text: 'All devices were added and moved into a group',
					icon: 'success',
				});
			}
			if (manualGroup) {
				manualGroup = '';
				var mgd = document.getElementById('manualGroupDiv');
				mgd.style.display = 'none';
			}
		});
	});
}

function addLicenseGroup() {
	autoAddPromise = new $.Deferred();
	autoLicensePromise = new $.Deferred();
	autoGroupPromise = new $.Deferred();
	$.when(addDevices()).then(function() {
		// Add devices completed  - now license devices
		$.when(licenseDevices()).then(function() {
			// licensing completed  - now move devices
			$.when(moveDevicesToGroup()).then(function() {
				if (apiErrorCount != 0) {
					showLog();
					Swal.fire({
						title: 'Automation Failure',
						text: 'Some or all devices failed to be added, licensed and moved into a group',
						icon: 'error',
					});
				} else {
					Swal.fire({
						title: 'Automation Success',
						text: 'All devices were added, licensed and moved into a group',
						icon: 'success',
					});
				}
				if (manualGroup) {
					manualGroup = '';
					var mgd = document.getElementById('manualGroupDiv');
					mgd.style.display = 'none';
				}
			});
		});
	});
}

function siteAndRename() {
	autoSitePromise = new $.Deferred();
	autoRenamePromise = new $.Deferred();
	$.when(moveDevicesToSite()).then(function() {
		// Add devices completed  - now license devices
		$.when(renameDevices()).then(function() {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Automation Failure',
					text: 'Some or all devices failed to be assigned to a site and renamed',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Automation Success',
					text: 'All devices were assigned to a site and renamed',
					icon: 'success',
				});
			}
		});
	});
}

function siteAndAutoRename() {
	autoSitePromise = new $.Deferred();
	autoMagicRenamePromise = new $.Deferred();
	$.when(moveDevicesToSite()).then(function() {
		// Add devices completed  - now license devices
		//  need the   auto  magical renaming  based  on  site name
		$.when(magicRenameDevices()).then(function() {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Automation Failure',
					text: 'Some or all devices failed to be assigned to a site and renamed',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Automation Success',
					text: 'All devices were assigned to a site and renamed',
					icon: 'success',
				});
			}
		});
	});
}

function renameAndPortDescriptions() {
	autoRenamePromise = new $.Deferred();
	autoPortPromise = new $.Deferred();
	$.when(renameDevices()).then(function() {
		// Add devices completed  - now license devices
		$.when(updatePortDescription()).then(function() {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Automation Failure',
					text: "Some or all devices failed to be renamed and/or port descriptions didn't update",
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Automation Success',
					text: 'All devices were renamed and port descriptions updated',
					icon: 'success',
				});
			}
		});
	});
}

function autoRenameAndPortDescriptions() {
	autoMagicRenamePromise = new $.Deferred();
	autoPortPromise = new $.Deferred();
	//  need the   auto  magical renaming  based  on  site name
	$.when(magicRenameDevices()).then(function() {
		// update port descriptions with magic AP Name
		$.when(updatePortDescription('magic')).then(function() {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Automation Failure',
					text: "Some or all devices failed to be move to site, renamed and/or port descriptions didn't update",
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Automation Success',
					text: 'All devices were moved to site, renamed and port descriptions updated',
					icon: 'success',
				});
			}
		});
	});
}

function siteAndAutoRenameAndPortDescriptions() {
	autoSitePromise = new $.Deferred();
	autoMagicRenamePromise = new $.Deferred();
	autoPortPromise = new $.Deferred();
	$.when(moveDevicesToSite()).then(function() {
		// Add devices completed  - now license devices
		//  need the   auto  magical renaming  based  on  site name
		$.when(magicRenameDevices()).then(function() {
			// update port descriptions with magic AP Name
			$.when(updatePortDescription('magic')).then(function() {
				if (apiErrorCount != 0) {
					showLog();
					Swal.fire({
						title: 'Automation Failure',
						text: "Some or all devices failed to be move to site, renamed and/or port descriptions didn't update",
						icon: 'error',
					});
				} else {
					Swal.fire({
						title: 'Automation Success',
						text: 'All devices were moved to site, renamed and port descriptions updated',
						icon: 'success',
					});
				}
			});
		});
	});
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Automated Tasks functions - using "ap_settings_cli"
------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function checkForNameAndRadioModeCompletion() {
	if (radioModeCounter == csvData.length) {
		if (apiErrorCount != 0) {
			showLog();
			Swal.fire({
				title: 'Automation Configuration Failure',
				text: 'Some or all devices failed to be set to the correct Hostname and Radio Modes',
				icon: 'error',
			});
		} else {
			Swal.fire({
				title: 'Automation Configuration Success',
				text: 'All devices were set to the correct Hostanme and Radio Modes',
				icon: 'success',
			});
		}
	}
}

function renameAndRadioMode() {
	/*  
		if AP - grab ap settings via API, then update the wifi0-mode, wifi1-mode, wifi2-mode, + hostname
		Modified version of setRadioMode function (includes Hostname changes)
	*/
	var settingsList = {};
	radioModeCounter = 0;
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		showNotification('ca-contactless-card', 'Setting Hostname and Radio Mode...', 'bottom', 'center', 'info');

		$.each(csvData, function() {
			// find device in inventory to get device type
			if (this['SERIAL']) {
				var currentSerial = this['SERIAL'].trim();
				var newAPHostname = this['DEVICE NAME'].trim();
				var newRadio0Mode = this['RADIO 0 MODE'];
				var newRadio1Mode = this['RADIO 1 MODE'];
				var newRadio2Mode = this['RADIO 2 MODE'];
				var dualRadioMode = this['DUAL 5GHZ MODE'];
				var splitRadioMode = this['SPLIT 5GHZ MODE'];
				if ((!newRadio0Mode || newRadio0Mode === '-') && (!newRadio1Mode || newRadio1Mode === '-') && (!newRadio2Mode || newRadio2Mode === '-') && (!newAPHostname || newAPHostname === '-')) {
					// "-" zone comes from the downloaded CSV from Central - equals to no configured zone.
					logInformation('Device with Serial Number: ' + currentSerial + ' has no Hostname AND Radio Mode in the CSV file');
					radioModeCounter++;
					checkForNameAndRadioModeCompletion();
				} else {
					var device = findDeviceInInventory(currentSerial);
					if (!device) {
						logError('Unable to find device ' + currentSerial + ' in the device inventory');
						apiErrorCount++;
						radioModeCounter++;
						checkForNameAndRadioModeCompletion();
					} else if (deviceType === 'IAP') {
						settingsList[device.macaddr.toLowerCase()] = this;
						// if AP then get AP settings
						var settings = {
							url: getAPIURL() + '/tools/getCommandwHeaders',
							method: 'POST',
							timeout: 0,
							headers: {
								'Content-Type': 'application/json',
							},
							data: JSON.stringify({
								url: localStorage.getItem('base_url') + '/configuration/v1/ap_settings_cli/' + currentSerial,
								access_token: localStorage.getItem('access_token'),
							}),
						};

						$.ajax(settings).done(function(commandResults, statusText, xhr) {
							if (commandResults.hasOwnProperty('headers')) {
								updateAPILimits(JSON.parse(commandResults.headers));
							}
							if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
								logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v1/ap_settings_cli/<SERIAL>)');
								apiErrorCount++;
								return;
							} else if (commandResults.hasOwnProperty('error_code')) {
								logError(commandResults.description);
								apiErrorCount++;
								return;
							}
							var response = JSON.parse(commandResults.responseBody);

							if (response.hasOwnProperty('error_code')) {
								logError(response.description);
								apiErrorCount++;
								radioModeCounter++;
								checkForNameAndRadioModeCompletion();
							} else {
								var apCLIResponse = response;
								// Pull in the new settings from the settingsList (ensures correct settings are used)
								var newSettingsKey = [apCLIResponse[0].replace('per-ap-settings ', '')];
								var newSettings = settingsList[newSettingsKey];

								var currentSerial = newSettings['SERIAL'].trim();
								var newAPHostname = newSettings['DEVICE NAME'].trim();
								var newRadio0Mode = newSettings['RADIO 0 MODE'];
								var newRadio1Mode = newSettings['RADIO 1 MODE'];
								var newRadio2Mode = newSettings['RADIO 2 MODE'];
								var dualRadioMode = newSettings['DUAL 5GHZ MODE'];
								var splitRadioMode = newSettings['SPLIT 5GHZ MODE'];

								// rebuild each line required for the radio config
								var wifi0mode = -1;
								var wifi1mode = -1;
								var wifi2mode = -1;
								// Radio 0
								if (newRadio0Mode && newRadio0Mode !== '-') {
									// remove the old settings
									if (apCLIResponse.indexOf('  radio-0-disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  radio-0-disable'), 1);
									if (apCLIResponse.indexOf('  dot11a-radio-disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  dot11a-radio-disable'), 1);
									for (i = 0; i < apCLIResponse.length; i++) {
										if (apCLIResponse[i].includes('wifi0-mode')) wifi0mode = i;
									}
									if (wifi0mode != -1) apCLIResponse.splice(wifi0mode, 1);

									// add in the new config but only on supported AP models
									var newRadioMode = newRadio0Mode.trim().toLowerCase();
									if (newRadioMode === 'access' || newRadioMode === 'monitor' || newRadioMode === 'spectrum') {
										apCLIResponse.push('  wifi0-mode ' + newRadioMode);
									} else if (newRadioMode === 'off') {
										if (device.model.includes('635') || device.model.includes('655')) apCLIResponse.push('  radio-0-disable');
										else apCLIResponse.push('  dot11a-radio-disable');
									}
								}

								// Radio 1
								if (newRadio1Mode && newRadio1Mode !== '-') {
									// remove the old settings
									if (apCLIResponse.indexOf('  radio-1-disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  radio-1-disable'), 1);
									if (apCLIResponse.indexOf('  dot11g-radio-disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  dot11g-radio-disable'), 1);
									for (i = 0; i < apCLIResponse.length; i++) {
										if (apCLIResponse[i].includes('wifi1-mode')) wifi1mode = i;
									}
									if (wifi1mode != -1) apCLIResponse.splice(wifi1mode, 1);

									// add in the new config but only on supported AP models
									var newRadioMode = newRadio1Mode.trim().toLowerCase();
									if (newRadioMode === 'access' || newRadioMode === 'monitor' || newRadioMode === 'spectrum') {
										apCLIResponse.push('  wifi1-mode ' + newRadioMode);
									} else if (newRadioMode === 'off') {
										if (device.model.includes('635') || device.model.includes('655')) apCLIResponse.push('  radio-1-disable');
										else apCLIResponse.push('  dot11g-radio-disable');
									}
								}

								// Radio 2
								if (newRadio2Mode && newRadio2Mode !== '-') {
									// remove the old settings
									if (apCLIResponse.indexOf('  radio-2-disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  radio-2-disable'), 1);
									for (i = 0; i < apCLIResponse.length; i++) {
										if (apCLIResponse[i].includes('wifi2-mode')) wifi2mode = i;
									}
									if (wifi2mode != -1) apCLIResponse.splice(wifi2mode, 1);

									// add in the new config but only on supported AP models
									var split555 = false;
									if (splitRadioMode && splitRadioMode !== '-') {
										var newRadioMode = splitRadioMode.trim().toLowerCase();
										if (newRadioMode === 'true' || newRadioMode === 'yes' || newRadioMode === 'y' || newRadioMode === 'enabled' || newRadioMode === 'enable') split555 = true;
									}
									if (device.model.includes('635') || device.model.includes('655') || split555) {
										var newRadioMode = newRadio2Mode.trim().toLowerCase();
										if (newRadioMode === 'access' || newRadioMode === 'monitor' || newRadioMode === 'spectrum') {
											apCLIResponse.push('  wifi2-mode ' + newRadioMode);
										} else if (newRadioMode === 'off') {
											apCLIResponse.push('  radio-2-disable');
										}
									}
								}

								// Dual 5GHz Mode
								if (dualRadioMode && dualRadioMode !== '-') {
									// remove the old settings
									if (apCLIResponse.indexOf('  dual-5GHz-mode disable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  dual-5GHz-mode disable'), 1);
									if (apCLIResponse.indexOf('  dual-5GHz-mode enable') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  dual-5GHz-mode enable'), 1);

									// add in the new config but only on supported AP models
									if (device.model.includes('344') || device.model.includes('345')) {
										var newRadioMode = dualRadioMode.trim().toLowerCase();
										// Standardize inputs for correct setting
										if (newRadioMode === 'true' || newRadioMode === 'yes' || newRadioMode === 'y' || newRadioMode === 'enabled') newRadioMode = 'enable';
										if (newRadioMode === 'false' || newRadioMode === 'no' || newRadioMode === 'n' || newRadioMode === 'disabled') newRadioMode = 'disable';
										if (newRadioMode === 'enable' || newRadioMode === 'disable') {
											apCLIResponse.push('  dual-5GHz-mode ' + newRadioMode);
										}
									}
								}

								// Split 5GHz Mode on 555
								if (splitRadioMode && splitRadioMode !== '-') {
									// remove the old settings
									if (apCLIResponse.indexOf('  split-5ghz-mode enabled') != -1) apCLIResponse.splice(apCLIResponse.indexOf('  split-5ghz-mode enabled'), 1);

									// add in the new config but only on supported AP models
									if (device.model.includes('555')) {
										var newRadioMode = splitRadioMode.trim().toLowerCase();
										// Standardize inputs for correct setting
										if (newRadioMode === 'true' || newRadioMode === 'yes' || newRadioMode === 'y' || newRadioMode === 'enabled') newRadioMode = 'enable';
										if (newRadioMode === 'enable') {
											apCLIResponse.push('  split-5ghz-mode enabled');
										}
									}
								}

								// Hostname
								if (newAPHostname && newAPHostname !== '-') {
									// remove the old hostname
									var hostnameIndex = -1;
									for (i = 0; i < apCLIResponse.length; i++) {
										if (apCLIResponse[i].includes('hostname')) hostnameIndex = i;
									}
									if (hostnameIndex != -1) apCLIResponse.splice(hostnameIndex, 1);

									// add in the new config but only on supported AP models
									var newAPHostname = newAPHostname.trim();
									apCLIResponse.push('  hostname ' + newAPHostname);
								}
								//console.log(apCLIResponse);

								// Update ap settings
								var settings = {
									url: getAPIURL() + '/tools/postCommand',
									method: 'POST',
									timeout: 0,
									headers: {
										'Content-Type': 'application/json',
									},
									data: JSON.stringify({
										url: localStorage.getItem('base_url') + '/configuration/v1/ap_settings_cli/' + currentSerial,
										access_token: localStorage.getItem('access_token'),
										data: JSON.stringify({ clis: apCLIResponse }),
									}),
								};

								$.ajax(settings).done(function(response, statusText, xhr) {
									if (response.hasOwnProperty('status')) {
										if (response.status === '503') {
											apiErrorCount++;
											logError('Central Server Error (503): ' + response.reason + ' (/configuration/v1/ap_settings_cli/<SERIAL>)');
										}
									}
									if (response !== currentSerial) {
										logError(currentSerial + ' was not assigned the new Hostname and Radio Modes. Reason: ' + response.reason);
										//console.log(response.reason);
										apiErrorCount++;
									} else {
										logInformation(currentSerial + ' was assigned the new Hostname and Radio Modes ');
									}
									radioModeCounter++;
									checkForNameAndRadioModeCompletion();
								});
							}
						});
					} else {
						// Either switch or controller/gateway
						radioModeCounter++;
						checkForNameAndRadioModeCompletion();
					}
				}
			} else {
				radioModeCounter++;
				checkForNameAndRadioModeCompletion();
			}
		});
	});
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		MSP functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
function getIDforCustomer(customer) {
	/*  
		get customer from customer monitoring data
		return customer_id for matching customer
	*/
	var customerId = -1; // used when the customer isn't found
	//console.log('looking for customer: '+customer)
	$.each(mspCustomers, function() {
		if (this['customer_name'] === customer) {
			customerId = this['customer_id'];
			return false;
		}
	});
	return customerId;
}

function csvContainsCustomer() {
	var containsCustomer = true;
	$.each(csvData, function() {
		if (!this['CUSTOMER']) containsCustomer = false;
		return false;
	});
	return containsCustomer;
}

function selectCustomer() {
	var select = document.getElementById('customerselector');
	manualCustomer = select.value;
	document.getElementById('manualCustomerParagraph').innerText = 'Manual Customer: ' + manualCustomer;
	var mcd = document.getElementById('manualCustomerDiv');
	mcd.style.display = 'block';
	showNotification('ca-folder-replace', manualCustomer + ' will be used for devices with no customer assigned. Please re-run the task.', 'top', 'center', 'warning');
}

function showMSPCard(display) {
	var x = document.getElementById('msp_card');
	if (display) {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}

function isMSP(offset) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/msp_api/v1/devices?limit=1&offset=0&device_allocation_status=0&device_type=iap',
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/msp_api/v1/devices)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		if (response.hasOwnProperty('message')) {
			if (response.message.includes('Permission denied')) {
				showMSPCard(false);
				logInformation('Not an MSP user - keeping MSP card hidden');
			} else {
				showMSPCard(true);
				logInformation('MSP user - enabling MSP card');
			}
		} else {
			showMSPCard(true);
			logInformation('MSP user - enabling MSP card');
		}
	});
}

function updateMSPData() {
	/*  
		Grab all inventories 
		after complete trigger promise
	*/
	showNotification('ca-dish', 'Updating MSP Data...', 'bottom', 'center', 'info');
	// Get the device inventories (IAP, Switch, Gateway) to determine device type
	getMSPResources();

	apPromise = new $.Deferred();
	switchPromise = new $.Deferred();
	gatewayPromise = new $.Deferred();
	customerPromise = new $.Deferred();
	inventoryPromise = new $.Deferred();
	$.when(getMSPAPData(0), getMSPSwitchData(0), getMSPGatewayData(0), getMSPCustomerData(0)).then(function() {
		//console.log('Got ALL Inventories');
		inventoryPromise.resolve();
	});

	updateGroupData();
	return inventoryPromise.promise();
}

function getMSPResources() {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/msp_api/v1/resource',
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/msp_api/v1/resource)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);
		//console.log(response);
		if (response.branding.logo_image_url) {
			document.getElementById('msp_logo').src = response.branding.logo_image_url;
			document.getElementById('msp_logo_card').style.display = 'block';
		} else {
			document.getElementById('msp_logo_card').style.display = 'none';
		}
	});
}

function getMSPAPData(offset) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/msp/devices?limit=' + apiMSPLimit + '&offset=' + offset + '&device_allocation_status=0&device_type=iap',
			access_token: localStorage.getItem('access_token'),
		}),
		complete: function() {
			if (mspAPs.length == mspAPCount) {
				apPromise.resolve();
			}
		},
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/platform/device_inventory/v1/msp/devices)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);
		if (response.hasOwnProperty('error') || response.hasOwnProperty('errorcode')) {
			$(document.getElementById('ap_icon')).removeClass('text-success');
			$(document.getElementById('ap_icon')).addClass('text-warning');
			if (document.getElementById('ap_count')) document.getElementById('ap_count').innerHTML = '-';
		} else if (response.hasOwnProperty('message')) {
			showNotification('ca-globe', response.message, 'bottom', 'center', 'danger');
		} else {
			if (document.getElementById('ap_count')) document.getElementById('ap_count').innerHTML = '' + response.total + '';
			if (offset === 0) {
				apNotification = showNotification('ca-wifi', 'Obtaining APs...', 'bottom', 'center', 'info');
				mspAPs = [];
				mspAPMonitoring = [];
				mspAPCount = response.total;
				$('#ap-table')
					.DataTable()
					.rows()
					.remove();
			}
			mspAPs = mspAPs.concat(response.devices);

			if (offset + apiMSPLimit < mspAPCount) {
				getMSPAPData(offset + apiMSPLimit);
				loadMSPAPUI();
			} else {
				loadMSPAPUI();

				$(document.getElementById('ap_icon')).removeClass('text-warning');
				$(document.getElementById('ap_icon')).removeClass('text-danger');
				$(document.getElementById('ap_icon')).addClass('text-success');
				apNotification.close();
			}
		}
	});
	return apPromise.promise();
}

function loadMSPAPUI() {
	$('#ap-table')
		.DataTable()
		.rows()
		.remove();

	$.each(mspAPs, function() {
		var table = $('#ap-table').DataTable();

		var monitoringInfo = findDeviceInMSPMonitoring(this['serial']);
		if (monitoringInfo) {
			var status = '<i class="fa fa-circle text-danger"></i>';
			if (monitoringInfo.status == 'Up') {
				status = '<i class="fa fa-circle text-success"></i>';
			}
			table.row.add([this.customer_name, '<strong>' + this.serial + '</strong>', this.macaddr, this.device_type, this.aruba_part_no, this.model, status, monitoringInfo.status, monitoringInfo.ip_address ? monitoringInfo.ip_address : '', monitoringInfo.name ? monitoringInfo.name : '', monitoringInfo.group_name ? monitoringInfo.group_name : '', monitoringInfo.site ? monitoringInfo.site : '', this.tier_type ? titleCase(this.tier_type) : '']);
		} else {
			var status = '<i class="fa fa-circle text-muted"></i>';
			table.row.add([this.customer_name, '<strong>' + this.serial + '</strong>', this.macaddr, this.device_type, this.aruba_part_no, this.model, status, '', '', '', '', '', this.tier_type ? titleCase(this.tier_type) : '']);
		}
	});

	$('[data-toggle="tooltip"]').tooltip();

	// Force reload of table data
	$('#ap-table')
		.DataTable()
		.rows()
		.draw();
}

function getCustomerAPData(offset, customerId) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/monitoring/v2/aps?calculate_total=true&show_resource_details=true&calculate_client_count=true&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
			tenantID: customerId,
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/monitoring/v2/aps)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);
		if (response.hasOwnProperty('error') || response.hasOwnProperty('errorcode')) {
		} else if (response.hasOwnProperty('message')) {
			showNotification('ca-globe', response.message, 'bottom', 'center', 'danger');
		} else {
			mspAPMonitoring = mspAPMonitoring.concat(response.aps);

			if (offset + apiLimit < response.total) {
				getCustomerAPData(offset + apiLimit);
			} else {
				loadMSPAPUI();
			}
		}
	});
}

function getMSPSwitchData(offset) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/msp/devices?limit=' + apiMSPLimit + '&offset=' + offset + '&device_allocation_status=0&device_type=switch',
			access_token: localStorage.getItem('access_token'),
		}),
		complete: function() {
			if (mspSwitches.length == mspSwitchCount) {
				switchPromise.resolve();
			}
		},
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/platform/device_inventory/v1/msp/devices)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);
		if (response.hasOwnProperty('error') || response.hasOwnProperty('errorcode')) {
			$(document.getElementById('switch_icon')).removeClass('text-success');
			$(document.getElementById('switch_icon')).addClass('text-warning');
			if (document.getElementById('switch_count')) document.getElementById('switch_count').innerHTML = '-';
		} else if (response.hasOwnProperty('message')) {
			showNotification('ca-globe', response.message, 'bottom', 'center', 'danger');
		} else {
			if (document.getElementById('switch_count')) document.getElementById('switch_count').innerHTML = '' + response.total + '';
			if (offset === 0) {
				switchNotification = showNotification('ca-switch-stack', 'Obtaining Switches...', 'bottom', 'center', 'info');
				mspSwitches = [];
				mspSwitchMonitoring = [];
				mspSwitchCount = response.total;
				$('#switch-table')
					.DataTable()
					.rows()
					.remove();
			}
			mspSwitches = mspSwitches.concat(response.devices);

			if (offset + apiMSPLimit < mspSwitchCount) {
				getMSPSwitchData(offset + apiMSPLimit);
				loadMSPSwitchUI();
			} else {
				loadMSPSwitchUI();

				$(document.getElementById('switch_icon')).removeClass('text-warning');
				$(document.getElementById('switch_icon')).removeClass('text-danger');
				$(document.getElementById('switch_icon')).addClass('text-success');
				switchNotification.close();
			}
		}
	});
	return switchPromise.promise();
}

function loadMSPSwitchUI() {
	$('#switch-table')
		.DataTable()
		.rows()
		.remove();

	$.each(mspSwitches, function() {
		var table = $('#switch-table').DataTable();

		var monitoringInfo = findDeviceInMSPMonitoring(this['serial']);
		if (monitoringInfo) {
			var status = '<i class="fa fa-circle text-danger"></i>';
			if (monitoringInfo.status == 'Up') {
				status = '<i class="fa fa-circle text-success"></i>';
			}
			table.row.add([this.customer_name, '<strong>' + this.serial + '</strong>', this.macaddr, this.device_type, this.aruba_part_no, this.model, status, monitoringInfo.status, monitoringInfo.ip_address ? monitoringInfo.ip_address : '', monitoringInfo.name ? monitoringInfo.name : '', monitoringInfo.group_name ? monitoringInfo.group_name : '', monitoringInfo.site ? monitoringInfo.site : '', this.tier_type ? titleCase(this.tier_type) : '']);
		} else {
			var status = '<i class="fa fa-circle text-muted"></i>';
			table.row.add([this.customer_name, '<strong>' + this.serial + '</strong>', this.macaddr, this.device_type, this.aruba_part_no, this.model, status, '', '', '', '', '', this.tier_type ? titleCase(this.tier_type) : '']);
		}
	});

	$('[data-toggle="tooltip"]').tooltip();

	// Force reload of table data
	$('#switch-table')
		.DataTable()
		.rows()
		.draw();
}

function getCustomerSwitchData(offset, customerId) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/monitoring/v1/switches?calculate_total=true&show_resource_details=true&calculate_client_count=true&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
			tenantID: customerId,
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/monitoring/v1/switches)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		if (response.hasOwnProperty('error') || response.hasOwnProperty('errorcode')) {
		} else if (response.hasOwnProperty('message')) {
			showNotification('ca-globe', response.message, 'bottom', 'center', 'danger');
		} else {
			mspSwitchMonitoring = mspSwitchMonitoring.concat(response.switches);

			if (offset + apiLimit < response.total) {
				getCustomerSwitchData(offset + apiLimit);
			} else {
				loadMSPSwitchUI();
			}
		}
	});
}

function getMSPGatewayData(offset) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/msp/devices?limit=' + apiMSPLimit + '&offset=' + offset + '&device_allocation_status=0&device_type=all_controller',
			access_token: localStorage.getItem('access_token'),
		}),
		complete: function() {
			if (mspGateways.length == mspGatewayCount) {
				gatewayPromise.resolve();
			}
		},
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/platform/device_inventory/v1/msp/devices)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);
		if (response.hasOwnProperty('error') || response.hasOwnProperty('errorcode')) {
			$(document.getElementById('gateway_icon')).removeClass('text-success');
			$(document.getElementById('gateway_icon')).addClass('text-warning');
			if (document.getElementById('gateway_count')) document.getElementById('gateway_count').innerHTML = '-';
		} else if (response.hasOwnProperty('message')) {
			showNotification('ca-globe', response.message, 'bottom', 'center', 'danger');
		} else {
			if (document.getElementById('gateway_count')) document.getElementById('gateway_count').innerHTML = '' + response.total + '';
			if (offset === 0) {
				gatewayNotification = showNotification('ca-content-delivery', 'Obtaining Gateways...', 'bottom', 'center', 'info');
				mspGateways = [];
				mspGatewayMonitoring = [];
				mspGatewayCount = response.total;
				$('#gateway-table')
					.DataTable()
					.rows()
					.remove();
			}
			mspGateways = mspGateways.concat(response.devices);

			if (offset + apiMSPLimit < mspGatewayCount) {
				getMSPGatewayData(offset + apiMSPLimit);
				loadMSPGatewayUI();
			} else {
				loadMSPGatewayUI();

				$(document.getElementById('gateway_icon')).removeClass('text-warning');
				$(document.getElementById('gateway_icon')).removeClass('text-danger');
				$(document.getElementById('gateway_icon')).addClass('text-success');
				gatewayNotification.close();
			}
		}
	});
	return gatewayPromise.promise();
}

function loadMSPGatewayUI() {
	$('#gateway-table')
		.DataTable()
		.rows()
		.remove();

	$.each(mspGateways, function() {
		var table = $('#gateway-table').DataTable();

		var monitoringInfo = findDeviceInMSPMonitoring(this['serial']);
		if (monitoringInfo) {
			var status = '<i class="fa fa-circle text-danger"></i>';
			if (monitoringInfo.status == 'Up') {
				status = '<i class="fa fa-circle text-success"></i>';
			}
			table.row.add([this.customer_name, '<strong>' + this.serial + '</strong>', this.macaddr, this.device_type, this.aruba_part_no, this.model, status, monitoringInfo.status, monitoringInfo.ip_address ? monitoringInfo.ip_address : '', monitoringInfo.name ? monitoringInfo.name : '', monitoringInfo.group_name ? monitoringInfo.group_name : '', monitoringInfo.site ? monitoringInfo.site : '', this.tier_type ? titleCase(this.tier_type) : '']);
		} else {
			var status = '<i class="fa fa-circle text-muted"></i>';
			table.row.add([this.customer_name, '<strong>' + this.serial + '</strong>', this.macaddr, this.device_type, this.aruba_part_no, this.model, status, '', '', '', '', '', this.tier_type ? titleCase(this.tier_type) : '']);
		}
	});

	$('[data-toggle="tooltip"]').tooltip();

	// Force reload of table data
	$('#gateway-table')
		.DataTable()
		.rows()
		.draw();
}

function getCustomerGatewayData(offset, customerId) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/monitoring/v1/gateways?calculate_total=true&limit=' + apiLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
			tenantID: customerId,
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/monitoring/v1/gateways)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);
		if (response.hasOwnProperty('error') || response.hasOwnProperty('errorcode')) {
		} else if (response.hasOwnProperty('message')) {
			showNotification('ca-globe', response.message, 'bottom', 'center', 'danger');
		} else {
			mspGatewayMonitoring = mspGatewayMonitoring.concat(response.gateways);

			if (offset + apiLimit < response.total) {
				getCustomerGatewayData(offset + apiLimit);
			} else {
				loadMSPGatewayUI();
			}
		}
	});
}

function getMSPCustomerData(offset) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/msp_api/v1/customers?limit=' + apiMSPLimit + '&offset=' + offset,
			access_token: localStorage.getItem('access_token'),
		}),
		complete: function() {
			if (mspGateways.length == mspGatewayCount) {
				customerPromise.resolve();
			}
		},
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/msp_api/v1/customers)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);
		if (response.hasOwnProperty('error')) {
			$(document.getElementById('customer_icon')).removeClass('text-success');
			$(document.getElementById('customer_icon')).addClass('text-warning');
			if (document.getElementById('customer_count')) document.getElementById('customer_count').innerHTML = '-';
		} else if (response.hasOwnProperty('message')) {
			showNotification('ca-globe', response.message, 'bottom', 'center', 'danger');
		} else {
			if (document.getElementById('customer_count')) document.getElementById('customer_count').innerHTML = '' + response.total + '';

			var path = window.location.pathname;
			var page = path.split('/').pop();

			if (offset === 0) {
				showNotification('ca-multiple-11', 'Obtaining Customers...', 'bottom', 'center', 'info');
				mspCustomers = [];
				mspCustomerCount = response.total;
				$('#customer-table')
					.DataTable()
					.rows()
					.remove();
				if (page.includes('workflow-msp')) {
					// remove old groups from the selector
					select = document.getElementById('customerselector');
					select.options.length = 0;
				}
			}
			mspCustomers = mspCustomers.concat(response.customers);
			$.each(response.customers, function() {
				// Cleanup string responses
				var clean = this['account_status'];
				if (clean) clean = titleCase(noUnderscore(clean));

				var customerGroup = '';
				if (this['group']) customerGroup = this.group.name;
				// Add row to table
				var table = $('#customer-table').DataTable();
				table.row.add([this['customer_name'], this['account_type'], clean, customerGroup, this['description']]);

				// Grab MSP ID for use later on
				mspID = this['msp_id'];

				if (page.includes('workflow-msp')) {
					// Add site to the dropdown selector
					$('#customerselector').append($('<option>', { value: this['customer_name'], text: this['customer_name'] }));
				}

				getCustomerAPData(0, this['customer_id']);
				getCustomerSwitchData(0, this['customer_id']);
				getCustomerGatewayData(0, this['customer_id']);
			});

			if (offset + apiMSPLimit < response.total) {
				getMSPCustomerData(offset + apiMSPLimit);
			} else {
				// Force reload of table data
				$('#customer-table')
					.DataTable()
					.rows()
					.draw();
				$(document.getElementById('customer_icon')).removeClass('text-warning');
				$(document.getElementById('customer_icon')).addClass('text-success');
			}
		}
	});
	return customerPromise.promise();
}

/*  
	Customer Assignment Functions
*/
function checkForCustomerMoveCompletion() {
	/*  
		UI cleanup after processing moves
	*/

	if (moveCounter == csvData.length) {
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Customer Assignment Failure',
					text: 'Some or all devices failed to move to the specified customer',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Customer Assignment Success',
					text: 'All devices were to moved to the specified customers',
					icon: 'success',
				});
			}
			if (manualCustomer) {
				manualCustomer = '';
				var mcd = document.getElementById('manualCustomerDiv');
				mcd.style.display = 'none';
			}
			updateMSPData();
		} else {
			logInformation('Automation: Customer assignment complete');
			autoCustomerPromise.resolve();
		}
	}
}

function unassignDeviceFromCustomer(device) {
	/*  
		Assign device back to MSP
	*/
	var deviceSerial = device['SERIAL'];
	var settings = {
		url: getAPIURL() + '/tools/putCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/msp/' + mspID + '/devices',
			access_token: localStorage.getItem('access_token'),
			data: JSON.stringify({ devices: [{ serial: device['serial'], mac: device['macaddr'] }] }),
		}),
	};

	return $.ajax(settings).done(function(response, textStatus, jqXHR) {
		if (response.status != 202) {
			if (response.status === '503') {
				apiErrorCount++;
				logError('Central Server Error (503): ' + response.reason + ' (/platform/device_inventory/v1/msp/<MSP_ID>/devices)');
			} else if (response.error_code) {
				logError(titleCase(noUnderscore(response.error_code)) + ' for device: ' + deviceSerial);
			} else {
				logError(response.reason);
			}
		}
	});
}

function assignDeviceToCustomer(device, customerId) {
	/*  
		Assign device to a customer (one at a time)
	*/
	var deviceSerial = device['SERIAL'];
	var settings = {
		url: getAPIURL() + '/tools/putCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/msp/' + customerId + '/devices',
			access_token: localStorage.getItem('access_token'),
			data: JSON.stringify({ devices: [{ serial: device['serial'], mac: device['macaddr'] }] }),
		}),
	};

	return $.ajax(settings).done(function(response, textStatus, jqXHR) {
		if (response.status != 202) {
			if (response.status === '503') {
				apiErrorCount++;
				logError('Central Server Error (503): ' + response.reason + ' (/platform/device_inventory/v1/msp/<CUSTOMER_ID/<devices)');
			} else if (response.error_code) {
				logError(titleCase(noUnderscore(response.error_code)) + ' for device: ' + deviceSerial);
			} else {
				logError(response.reason);
			}
		}
		moveCounter = moveCounter + 1;
		checkForCustomerMoveCompletion();
	});
}

function unassignDevicesFromCustomers(devices) {
	/*  
		Assign supplied devices back to MSP
	*/
	var settings = {
		url: getAPIURL() + '/tools/putCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/msp/' + mspID + '/devices',
			access_token: localStorage.getItem('access_token'),
			data: JSON.stringify({ devices: devices }),
		}),
	};

	return $.ajax(settings).done(function(response, textStatus, jqXHR) {
		if (response.status != 202) {
			if (response.status === '503') {
				apiErrorCount++;
				logError('Central Server Error (503): ' + response.reason + ' (/platform/device_inventory/v1/msp/<MSP_ID>/devices)');
			} else if (response.error_code) {
				logError(titleCase(noUnderscore(response.error_code)) + ' for supplied devices');
			} else {
				logError(response.reason);
			}
		}
	});
}

function assignDevicesToSingleCustomer(devices, customerId) {
	/*  
		Assign supplied devices back to a single customer
	*/
	var settings = {
		url: getAPIURL() + '/tools/putCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/platform/device_inventory/v1/msp/' + customerId + '/devices',
			access_token: localStorage.getItem('access_token'),
			data: JSON.stringify({ devices: devices }),
		}),
	};

	return $.ajax(settings).done(function(response, textStatus, jqXHR) {
		if (response.status != 202) {
			if (response.status === '503') {
				apiErrorCount++;
				logError('Central Server Error (503): ' + response.reason + ' (/platform/device_inventory/v1/msp/<CUSTOMER_ID>/devices)');
			} else if (response.error_code) {
				logError(titleCase(noUnderscore(response.error_code)) + ' for supplied devices');
			} else {
				logError(response.reason);
			}
		}
		moveCounter = moveCounter + 1;
		checkForCustomerMoveCompletion();
	});
}

function assignDevicesToCustomer() {
	/*  
		Move each device to the correct customer - either based on CSV or selected customer
	*/
	showNotification('ca-exchange', 'Assigning devices to customers...', 'bottom', 'center', 'info');
	moveCounter = 0;
	$.each(csvData, function() {
		var selectedCustomer = manualCustomer;
		var currentSerial = this['SERIAL'].trim();
		var foundDevice = findDeviceInMSPInventory(currentSerial);
		if (this['CUSTOMER']) selectedCustomer = this['CUSTOMER'].trim();

		if (foundDevice && foundDevice.customer_name === selectedCustomer) {
			console.log('No need to change Customer');
			moveCounter = moveCounter + 1;
			checkForCustomerMoveCompletion();
		} else if (foundDevice && foundDevice.customer_name !== selectedCustomer && getIDforCustomer(foundDevice.customer_name) != -1) {
			console.log('Assigning device back to MSP');
			$.when(unassignDeviceFromCustomer(foundDevice)).then(function() {
				// now assign to new Customer ID
				console.log('Assigning device to ' + selectedCustomer);
				assignDeviceToCustomer(foundDevice, getIDforCustomer(selectedCustomer));
			});
		} else {
			console.log('assigning customer');
			assignDeviceToCustomer(foundDevice, getIDforCustomer(selectedCustomer));
		}
	});
	if (currentWorkflow !== '') {
		return autoCustomerPromise.promise();
	}
}

function assignAllDevicesToCustomer() {
	/*  
		Move each device to the selected customer
	*/
	showNotification('ca-exchange', 'Assigning devices to a single customer...', 'bottom', 'center', 'info');
	moveCounter = 0;
	var devicesArray = [];
	var unassignDevicesArray = [];
	$.each(csvData, function() {
		var foundDevice = findDeviceInMSPInventory(this['SERIAL'].trim());
		if (foundDevice && getIDforCustomer(foundDevice.customer_name) != -1) {
			unassignDevicesArray.push({ serial: this['SERIAL'].trim(), mac: cleanMACAddress(this['MAC']) });
		}
		devicesArray.push({ serial: this['SERIAL'].trim(), mac: cleanMACAddress(this['MAC']) });
	});

	var selectedCustomer = manualCustomer;
	//console.log("assigning all devices back to MSP")
	if (unassignDevicesArray.length != 0) {
		$.when(unassignDevicesFromCustomers(unassignDevicesArray)).then(function() {
			// now assign to new Customer ID
			console.log('Assigning all devices to ' + selectedCustomer);
			assignDevicesToSingleCustomer(devicesArray, getIDforCustomer(selectedCustomer));
		});
	} else {
		assignDevicesToSingleCustomer(devicesArray, getIDforCustomer(selectedCustomer));
	}
	if (currentWorkflow !== '') {
		return autoCustomerPromise.promise();
	}
}

/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		MSP Automation functions
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function addAndCustomers() {
	autoAddPromise = new $.Deferred();
	autoCustomerPromise = new $.Deferred();
	$.when(addDevices()).then(function() {
		// Add devices completed  - now move devices
		$.when(updateMSPData()).then(function() {
			$.when(assignDevicesToCustomer()).then(function() {
				if (apiErrorCount != 0) {
					showLog();
					Swal.fire({
						title: 'Automation Failure',
						text: 'Some or all devices failed to be added, and moved into a group',
						icon: 'error',
					});
				} else {
					Swal.fire({
						title: 'Automation Success',
						text: 'All devices were added and moved into a group',
						icon: 'success',
					});
				}
				if (manualCustomer) {
					manualCustomer = '';
					var mcd = document.getElementById('manualCustomerDiv');
					mcd.style.display = 'none';
				}
				updateMSPData();
			});
		});
	});
}

function addAndCustomersAndLicense() {
	licenseCounter = 0;
	autoAddPromise = new $.Deferred();
	autoCustomerPromise = new $.Deferred();
	autoLicensePromise = new $.Deferred();
	$.when(addDevices()).then(function() {
		// need to refresh MSPData - will need to wait.
		$.when(updateMSPData()).then(function() {
			// Add devices completed  - now move devices
			$.when(assignDevicesToCustomer()).then(function() {
				$.when(updateMSPData()).then(function() {
					// Devices assigned to customers
					$.when(licenseDevicesFromCSV(true)).then(function() {
						// licensing completed
						if (apiErrorCount != 0) {
							showLog();
							Swal.fire({
								title: 'Automation Failure',
								text: 'Some or all devices failed to be added, assigned to customer and licensed',
								icon: 'error',
							});
						} else {
							Swal.fire({
								title: 'Automation Success',
								text: 'All devices were added, assigned and licensed',
								icon: 'success',
							});
						}
						if (manualCustomer) {
							manualCustomer = '';
							var mcd = document.getElementById('manualCustomerDiv');
							mcd.style.display = 'none';
						}
						updateMSPData();
					});
				});
			});
		});
	});
}

function addAndSingleCustomer() {
	autoAddPromise = new $.Deferred();
	autoCustomerPromise = new $.Deferred();
	$.when(addDevices()).then(function() {
		$.when(updateMSPData()).then(function() {
			// Add devices completed  - now move devices
			$.when(assignAllDevicesToCustomer()).then(function() {
				if (apiErrorCount != 0) {
					showLog();
					Swal.fire({
						title: 'Automation Failure',
						text: 'Some or all devices failed to be added, and moved into a group',
						icon: 'error',
					});
				} else {
					Swal.fire({
						title: 'Automation Success',
						text: 'All devices were added and moved into a group',
						icon: 'success',
					});
				}
				if (manualCustomer) {
					manualCustomer = '';
					var mcd = document.getElementById('manualCustomerDiv');
					mcd.style.display = 'none';
				}
				updateMSPData();
			});
		});
	});
}

function addAndSingleCustomerAndLicense() {
	licenseCounter = 0;
	autoAddPromise = new $.Deferred();
	autoCustomerPromise = new $.Deferred();
	autoLicensePromise = new $.Deferred();
	$.when(addDevices()).then(function() {
		$.when(updateMSPData()).then(function() {
			// Add devices completed  - now move devices
			$.when(assignAllDevicesToCustomer()).then(function() {
				$.when(updateMSPData()).then(function() {
					// Devices assigned to customers
					$.when(licenseDevicesFromCSV(true)).then(function() {
						// licensing completed
						if (apiErrorCount != 0) {
							showLog();
							Swal.fire({
								title: 'Automation Failure',
								text: 'Some or all devices failed to be added, assigned to customer and licensed',
								icon: 'error',
							});
						} else {
							Swal.fire({
								title: 'Automation Success',
								text: 'All devices were added, assigned and licensed',
								icon: 'success',
							});
						}
						if (manualCustomer) {
							manualCustomer = '';
							var mcd = document.getElementById('manualCustomerDiv');
							mcd.style.display = 'none';
						}
						updateMSPData();
					});
				});
			});
		});
	});
}

/*  
	MSP Administration Functions
*/

function createCustomer() {
	var customerName = document.getElementById('customerName').value;
	var customerDescription = document.getElementById('customerDescription').value;
	var addToGroupValue = document.getElementById('addToGroupCheckbox').checked;
	var selectedGroup = document.getElementById('groupselector').value;

	showNotification('ca-c-add', 'Adding new Customer...', 'bottom', 'center', 'info');

	var data;
	if (addToGroupValue) {
		data = JSON.stringify({ customer_name: customerName, description: customerDescription, group: { name: selectedGroup } });
	} else {
		data = JSON.stringify({ customer_name: customerName, description: customerDescription });
	}

	var settings = {
		url: getAPIURL() + '/tools/postCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/msp_api/v1/customers',
			access_token: localStorage.getItem('access_token'),
			data: data,
		}),
	};

	$.ajax(settings).done(function(response, textStatus, jqXHR) {
		if (response.status === '503') {
			apiErrorCount++;
			logError('Central Server Error (503): ' + response.reason + ' (/msp_api/v1/customers)');
		} else if (response.status_code == 200) {
			Swal.fire({
				title: 'Add Success',
				text: 'Customer was successfully created',
				icon: 'success',
			});
			// refresh group data to include new group
			getMSPCustomerData(0);
		} else {
			logError(response.status);
			Swal.fire({
				title: 'Add Failure',
				text: 'Customer was not able to be created',
				icon: 'error',
			});
		}
	});
}

function downloadMSPInventory() {
	mspCSVData = buildMSPCSVData();

	var csv = Papa.unparse(mspCSVData);

	var csvBlob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

	var csvURL = window.URL.createObjectURL(csvBlob);

	var csvLink = document.createElement('a');
	csvLink.href = csvURL;
	csvLink.setAttribute('download', 'msp-inventory.csv');
	csvLink.click();
	window.URL.revokeObjectURL(csvLink);
}

function buildMSPCSVData() {
	//CSV header
	var customerKey = 'CUSTOMER';
	var serialKey = 'SERIAL';
	var macKey = 'MAC';
	var typeKey = 'DEVICE TYPE';
	var skuKey = 'PART NUMBER';
	var modelKey = 'MODEL';
	var statusKey = 'STATUS';
	var uptimeKey = 'UPTIME';
	var ipKey = 'IP ADDRESS';
	var nameKey = 'DEVICE NAME';
	var groupKey = 'GROUP';
	var siteKey = 'SITE';
	var licenseKey = 'LICENSE';

	var csvDataBuild = [];

	// For each row MSP APs
	$.each(mspAPs, function() {
		var device = this;
		// Find monitoring data if there is any
		var monitoringInfo = findDeviceInMSPMonitoring(device.serial);
		if (monitoringInfo) {
			var groupToUse = monitoringInfo['group_name'] ? monitoringInfo['group_name'] : '';
			var siteToUse = monitoringInfo['site'] ? monitoringInfo['site'] : '';
			var uptime = monitoringInfo['uptime'] ? monitoringInfo['uptime'] : 0;
			var duration = moment.duration(uptime * 1000);

			csvDataBuild.push({ [customerKey]: device['customer_name'], [serialKey]: device['serial'], [macKey]: device['macaddr'], [typeKey]: device['device_type'], [skuKey]: device['aruba_part_no'], [modelKey]: device['model'], [statusKey]: monitoringInfo['status'] ? monitoringInfo['status'] : '', [uptimeKey]: duration.humanize(), [ipKey]: monitoringInfo['ip_address'] ? monitoringInfo['ip_address'] : '', [nameKey]: monitoringInfo['name'] ? monitoringInfo['name'] : '', [groupKey]: groupToUse, [siteKey]: siteToUse, [licenseKey]: device['tier_type'] ? titleCase(device['tier_type']) : '' });
		} else {
			var groupToUse = '';
			var siteToUse = '';

			csvDataBuild.push({ [customerKey]: device['customer_name'], [serialKey]: device['serial'], [macKey]: device['macaddr'], [typeKey]: device['device_type'], [skuKey]: device['aruba_part_no'], [modelKey]: device['model'], [statusKey]: '', [uptimeKey]: '', [ipKey]: '', [nameKey]: '', [groupKey]: groupToUse, [siteKey]: siteToUse, [licenseKey]: device['tier_type'] ? titleCase(device['tier_type']) : '' });
		}
	});

	$.each(mspSwitches, function() {
		var device = this;
		// Find monitoring data if there is any
		var monitoringInfo = findDeviceInMSPMonitoring(device.serial);
		if (monitoringInfo) {
			var groupToUse = monitoringInfo['group_name'] ? monitoringInfo['group_name'] : '';
			var siteToUse = monitoringInfo['site'] ? monitoringInfo['site'] : '';

			csvDataBuild.push({ [customerKey]: device['customer_name'], [serialKey]: device['serial'], [macKey]: device['macaddr'], [typeKey]: device['device_type'], [skuKey]: device['aruba_part_no'], [modelKey]: device['model'], [statusKey]: monitoringInfo['status'] ? monitoringInfo['status'] : '', [ipKey]: monitoringInfo['ip_address'] ? monitoringInfo['ip_address'] : '', [nameKey]: monitoringInfo['name'] ? monitoringInfo['name'] : '', [groupKey]: groupToUse, [siteKey]: siteToUse, [licenseKey]: device['tier_type'] ? titleCase(device['tier_type']) : '' });
		} else {
			var groupToUse = '';
			var siteToUse = '';

			csvDataBuild.push({ [customerKey]: device['customer_name'], [serialKey]: device['serial'], [macKey]: device['macaddr'], [typeKey]: device['device_type'], [skuKey]: device['aruba_part_no'], [modelKey]: device['model'], [statusKey]: '', [ipKey]: '', [nameKey]: '', [groupKey]: groupToUse, [siteKey]: siteToUse, [licenseKey]: device['tier_type'] ? titleCase(device['tier_type']) : '' });
		}
	});

	$.each(mspGateways, function() {
		var device = this;
		// Find monitoring data if there is any
		var monitoringInfo = findDeviceInMSPMonitoring(device.serial);
		if (monitoringInfo) {
			var groupToUse = monitoringInfo['group_name'] ? monitoringInfo['group_name'] : '';
			var siteToUse = monitoringInfo['site'] ? monitoringInfo['site'] : '';

			csvDataBuild.push({ [customerKey]: device['customer_name'], [serialKey]: device['serial'], [macKey]: device['macaddr'], [typeKey]: device['device_type'], [skuKey]: device['aruba_part_no'], [modelKey]: device['model'], [statusKey]: monitoringInfo['status'] ? monitoringInfo['status'] : '', [ipKey]: monitoringInfo['ip_address'] ? monitoringInfo['ip_address'] : '', [nameKey]: monitoringInfo['name'] ? monitoringInfo['name'] : '', [groupKey]: groupToUse, [siteKey]: siteToUse, [licenseKey]: device['tier_type'] ? titleCase(device['tier_type']) : '' });
		} else {
			var groupToUse = '';
			var siteToUse = '';

			csvDataBuild.push({ [customerKey]: device['customer_name'], [serialKey]: device['serial'], [macKey]: device['macaddr'], [typeKey]: device['device_type'], [skuKey]: device['aruba_part_no'], [modelKey]: device['model'], [statusKey]: '', [ipKey]: '', [nameKey]: '', [groupKey]: groupToUse, [siteKey]: siteToUse, [licenseKey]: device['tier_type'] ? titleCase(device['tier_type']) : '' });
		}
	});

	return csvDataBuild;
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
						Site Functions
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
function getSwitchType(serial) {
	var currentSwitch = null;
	$.each(switches, function() {
		if (this['serial'] === serial) {
			currentSwitch = this;
			return false;
		}
	});
	if (currentSwitch['model'].includes('60') || currentSwitch['model'].includes('61') || currentSwitch['model'].includes('62') || currentSwitch['model'].includes('63') || currentSwitch['model'].includes('64') || currentSwitch['model'].includes('83') || currentSwitch['model'].includes('84')) {
		return 'AOS-CX';
	} else {
		return 'AOS-S';
	}
}

function getSwitchPortDetails(serial) {
	var url = '/monitoring/v1/switches/';
	if (getSwitchType(serial) === 'AOS-CX') url = '/monitoring/v1/cx_switches/';
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + url + serial + '/ports',
			access_token: localStorage.getItem('access_token'),
		}),
	};

	/* $.ajax returns a promise*/

	return $.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (' + url + ')');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
		} else {
			switchPortDetails[serial] = response.ports;
		}
	});
}

function showLayerOne() {
	showNotification('ca-cable', 'Finding LLDP Neighbours of every AP at the Site...', 'bottom', 'center', 'info');
	$('#layerone-table')
		.DataTable()
		.rows()
		.remove();
	$('#layerone-table')
		.DataTable()
		.clear();
	$('#layerone-table')
		.DataTable()
		.rows()
		.draw();
	$('#LayerOneModalLink').trigger('click');

	var select = document.getElementById('siteselector');
	var selectedSite = select.value;
	var siteAPs = getAPsForSite(selectedSite);
	neighborSwitches = {};
	switchPortDetails = {};
	$.each(siteAPs, function() {
		var currentSerial = this['serial'];
		var currentAP = this['name'];
		if (this['mesh_role'] !== 'Point') {
			$.when(getTopologyNeighbors(currentSerial)).then(function() {
				if (!neighborSwitches[currentSerial]) {
					//console.log("didnt find the switch")
				} else {
					// get switch port details
					$.when(getSwitchPortDetails(neighborSwitches[currentSerial].neighborSerial)).then(function() {
						$.each(switchPortDetails[neighborSwitches[currentSerial].neighborSerial], function() {
							if (this['port_number'] === neighborSwitches[currentSerial].remotePort) {
								// Buttons for each row
								var btnString = '<a class="btn btn-link btn-warning" data-toggle="tooltip" data-placement="top" title="PoE Bounce" onclick="poeBounce(\'' + neighborSwitches[currentSerial].neighborSerial + "', '" + this['port_number'] + '\')"><i class="fa-solid fa-plug-circle-bolt"></i></a>';
								btnString += '<a class="btn btn-link btn-warning" data-toggle="tooltip" data-placement="top" title="Interface Bounce" onclick="interfaceBounce(\'' + neighborSwitches[currentSerial].neighborSerial + "', '" + this['port_number'] + '\')"><i class="fa-solid fa-ethernet"></i></a>';
								if (getSwitchType(neighborSwitches[currentSerial].neighborSerial) === 'AOS-S') {
									btnString += '<a class="btn btn-link btn-warning" data-toggle="tooltip" data-placement="top" title="Cable Test" onclick="cableTest(\'' + neighborSwitches[currentSerial].neighborSerial + "', '" + this['port_number'] + '\')"><i class="fa-solid fa-microscope"></i></a>';
								}

								// add data to table!
								var poe = this['power_consumption'];
								if (!poe) poe = 'Unknown';
								var inErrors = this['in_errors'];
								if (!Number.isInteger(inErrors)) inErrors = '';
								var outErrors = this['out_errors'];
								if (!Number.isInteger(outErrors)) outErrors = '';

								var status = '<i class="fa fa-circle text-danger"></i>';
								if (this['status'] == 'Up') {
									status = '<i class="fa fa-circle text-success"></i>';
								}

								var table = $('#layerone-table').DataTable();
								table.row.add(['<strong>' + currentAP + '</strong>', status, neighborSwitches[currentSerial].neighborHostName, this['port_number'], poe, this['speed'], this['duplex_mode'], inErrors, outErrors, btnString]);
								$('#layerone-table')
									.DataTable()
									.rows()
									.draw();

								$('[data-toggle="tooltip"]').tooltip();
							}
						});
					});
				}
			});
		}
	});
}

function poeBounce(switchSerial, switchPort) {
	var data;
	if (getSwitchType(switchSerial) === 'AOS-S') {
		data = JSON.stringify({ device_type: 'switch', commands: [{ command_id: 1050, arguments: [{ name: 'Port', value: switchPort }] }] });
	} else {
		data = JSON.stringify({ device_type: 'switch', commands: [{ command_id: 6003, arguments: [{ name: 'Port', value: switchPort }] }] });
	}

	var settings = {
		url: getAPIURL() + '/tools/postCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/troubleshooting/v1/devices/' + switchSerial,
			access_token: localStorage.getItem('access_token'),
			data: data,
		}),
	};

	$.ajax(settings).done(function(response, textStatus, jqXHR) {
		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
		} else if (response.status === 'QUEUED') {
			showNotification('ca-window-code', response.message, 'bottom', 'center', 'info');
			setTimeout(checkTroubleshootingResult, 10000, response.session_id, response.serial, switchPort);
		} else {
			showNotification('ca-window-code', response.message, 'bottom', 'center', 'danger');
		}
	});
}

function interfaceBounce(switchSerial, switchPort) {
	var data;
	if (getSwitchType(switchSerial) === 'AOS-S') {
		data = JSON.stringify({ device_type: 'switch', commands: [{ command_id: 1051, arguments: [{ name: 'Port', value: switchPort }] }] });
	} else {
		data = JSON.stringify({ device_type: 'switch', commands: [{ command_id: 6004, arguments: [{ name: 'Port', value: switchPort }] }] });
	}

	var settings = {
		url: getAPIURL() + '/tools/postCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/troubleshooting/v1/devices/' + switchSerial,
			access_token: localStorage.getItem('access_token'),
			data: data,
		}),
	};

	$.ajax(settings).done(function(response, textStatus, jqXHR) {
		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
		} else if (response.status === 'QUEUED') {
			showNotification('ca-window-code', response.message, 'bottom', 'center', 'info');
			setTimeout(checkTroubleshootingResult, 10000, response.session_id, response.serial, switchPort);
		} else {
			showNotification('ca-window-code', response.message, 'bottom', 'center', 'danger');
		}
	});
}

function cableTest(switchSerial, switchPort) {
	Swal.fire({
		title: 'Are you sure?',
		text: 'Running a Cable Test will cause a disruption on the selected port.',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, run it!',
	}).then(result => {
		if (result.isConfirmed) {
			confirmCableTest(switchSerial, switchPort);
		}
	});
}

function confirmCableTest(switchSerial, switchPort) {
	var data;
	if (getSwitchType(switchSerial) === 'AOS-S') {
		data = JSON.stringify({ device_type: 'switch', commands: [{ command_id: 1205, arguments: [{ name: 'Port', value: switchPort }] }] });
	} else {
		// No CX Support for TDR command
		return false;
		//data = JSON.stringify({ device_type: 'switch', commands: [{ command_id: 6004, arguments: [{ name: 'Port', value: switchPort }] }] });
	}

	var settings = {
		url: getAPIURL() + '/tools/postCommand',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/troubleshooting/v1/devices/' + switchSerial,
			access_token: localStorage.getItem('access_token'),
			data: data,
		}),
	};

	$.ajax(settings).done(function(response, textStatus, jqXHR) {
		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
		} else if (response.status === 'QUEUED') {
			showNotification('ca-window-code', response.message, 'bottom', 'center', 'info');
			setTimeout(checkTroubleshootingResult, 10000, response.session_id, response.serial, switchPort);
		} else {
			showNotification('ca-window-code', response.message, 'bottom', 'center', 'danger');
		}
	});
}

function checkTroubleshootingResult(session_id, deviceSerial, switchPort) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/troubleshooting/v1/devices/' + deviceSerial + '?session_id=' + session_id,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/troubleshooting/v1/devices/)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
		} else {
			if (response.status === 'RUNNING' || response.status === 'QUEUED') {
				showNotification('ca-window-code', response.message.replace(' Please try after sometime', '.'), 'bottom', 'center', 'info');
				setTimeout(checkTroubleshootingResult, 30000, session_id, response.serial, switchPort);
			} else if (response.status === 'COMPLETED') {
				if (response.output.includes('cable_status')) {
					var results = JSON.parse(response.output);
					cableResult = results['result'][switchPort];
					console.log(cableResult);

					// Display cable test results for each pair of wires.

					var cableFault = false;
					var cableDetail = '';
					$.each(cableResult, function() {
						var cables = this['mdi_pair'].replace('(R1)', '');
						var cableStatus = this['cable_status'];
						if (cableStatus !== 'OK') cableFault = true;
						var cableLength = this['cable_length_in_meters'];
						cableDetail += 'Pair' + cables + ': ' + cableStatus + ' (' + cableLength + 'm), ';
					});

					Swal.fire({
						title: findDeviceInMonitoring(response.serial).name + ' Cable Test - Port: ' + switchPort,
						text: cableDetail.substring(0, cableDetail.length - 2),
						icon: cableFault ? 'error' : 'success',
					});
				}
				showNotification('ca-window-code', response.message, 'bottom', 'center', 'success');
			} else {
				showNotification('ca-window-code', response.message, 'bottom', 'center', 'danger');
			}
		}
	});
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	CSV Reboot Functions
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
function rebootDevices() {
	rebootedDevices = 0;
	rebootErrors = 0;
	skippedDevices = 0;

	rebootNotification = showProgressNotification('ca-reload', 'Rebooting devices...', 'bottom', 'center', 'info');
	logStart('Rebooting devices...');
	for (let i = 0; i < csvData.length; i++) {
		var device = csvData[i];
		setTimeout(rebootSingleDevice, apiDelay * i, device); // As to not go over the 7 calls/sec speed limit
	}
}

function rebootSiteDevices() {
	$('#RebootDeviceModalLink').trigger('click');
}

function rebootSpecificDevices() {
	rebootedDevices = 0;
	rebootErrors = 0;
	skippedDevices = 0;

	// process csvData for device types selected
	// CSV header
	var serialKey = 'SERIAL';
	var macKey = 'MAC';

	var csvDataBuild = [];

	// For each of the APs needing to be rebooted (stored in 'devicesToReboot')
	// Rebuild the CSV only having selected APs
	$.each(devicesToReboot, function() {
		csvDataBuild.push({ [serialKey]: this['serial'], [macKey]: this['macaddr'] });
	});

	csvData = csvDataBuild;

	rebootNotification = showProgressNotification('ca-reload', 'Rebooting devices...', 'bottom', 'center', 'info');
	logStart('Rebooting devices...');

	for (let i = 0; i < csvData.length; i++) {
		var device = csvData[i];
		setTimeout(rebootSingleDevice, apiDelay * i, device); // As to not go over the 7 calls/sec speed limit
	}
	$('#RebootDeviceModal').modal('hide');
}

function rebootSelectedDeviceTypes() {
	rebootedDevices = 0;
	rebootErrors = 0;
	skippedDevices = 0;

	// process csvData for device types selected
	var csvDataBuild = [];
	$.each(csvData, function() {
		var device = findDeviceInMonitoring(this['SERIAL']);
		if (document.getElementById('rebootAPs').checked && deviceType === 'IAP') csvDataBuild.push(this);
		if (document.getElementById('rebootSwitches').checked && deviceType === 'SWITCH') csvDataBuild.push(this);
		if (document.getElementById('rebootGateways').checked && deviceType === 'CONTROLLER') csvDataBuild.push(this);
	});
	csvData = csvDataBuild;

	rebootNotification = showProgressNotification('ca-reload', 'Rebooting devices...', 'bottom', 'center', 'info');
	logStart('Rebooting devices...');
	for (let i = 0; i < csvData.length; i++) {
		var device = csvData[i];
		console.log(device);
		setTimeout(rebootSingleDevice, apiDelay * i, device); // As to not go over the 7 calls/sec speed limit
	}
	$('#RebootDeviceModal').modal('hide');
}

function rebootSingleDevice(device) {
	// build array for uploading.
	console.log('Attempting Reboot of: ' + device['SERIAL']);
	if (!device['SERIAL']) {
		skippedDevices++;
	} else {
		var key = device['SERIAL'].trim();

		var settings = {
			url: getAPIURL() + '/tools/postCommand',
			method: 'POST',
			timeout: 0,
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify({
				url: localStorage.getItem('base_url') + '/device_management/v1/device/' + key + '/action/reboot',
				access_token: localStorage.getItem('access_token'),
			}),
		};

		$.ajax(settings).done(function(response) {
			//console.log('Device Reboot response: ' + JSON.stringify(response));
			if (response.hasOwnProperty('status')) {
				if (response.status === '503') {
					logError('Central Server Error (503): ' + response.reason + ' (/device_management/v1/device/<SERIAL>/action/reboot)');
					return;
				}
			}
			if (response['state'] && response['state'].toLowerCase() === 'success') {
				rebootedDevices++;
				logInformation('Rebooted ' + response['serial'] + ': ' + rebootedDevices + ' of ' + csvData.length);
			} else {
				rebootErrors++;
				logError('Device Reboot Failed ' + key + ': ' + JSON.stringify(response));
				//console.log('Failed to reboot ' + response['serial'] + ': ' + rebootErrors + ' of ' + csvData.length);
				//if (response['description']) logError(response['description']);
			}

			var rebootProgress = ((rebootedDevices + rebootErrors + skippedDevices) / csvData.length) * 100;
			rebootNotification.update({ progress: rebootProgress });

			// check if finished
			if (rebootedDevices + rebootErrors + skippedDevices == csvData.length) {
				rebootNotification.close();
				if (rebootErrors > 0) {
					showLog();
					Swal.fire({
						title: 'Reboot Failure',
						text: 'Some or all devices (' + rebootErrors + ') failed to be rebooted',
						icon: 'error',
					});
					if (skippedDevices > 0) console.log('CSV file contained ' + skippedDevices + ' empty rows');
				} else {
					Swal.fire({
						title: 'Reboot Success',
						text: 'All ' + rebootedDevices + ' devices were rebooted',
						icon: 'success',
					});
				}
			}
		});
	}
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	AP-ENV config sync checking
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
function confirmEnvConfigSync(configType, reboot) {
	// Uses csvData to get list of devices to check config sync has completed for ap-env

	// Reset counters for config check stage
	checkedDevices = {};
	commandCheckCounter = {};
	checkedCounter = 0;
	skippedDevices = 0;
	rebootCounter = 0;

	// Reset counters for the reboot stage
	rebootedDevices = 0;
	rebootErrors = 0;
	skippedDevices = 0;

	configNotification = showProgressNotification('ca-reload', 'Checking configuration sync status...', 'bottom', 'center', 'info');

	for (let i = 0; i < csvData.length; i++) {
		var device = csvData[i];
		setTimeout(checkConfigSync, apiDelay * i, device, configType, reboot); // As to not go over the 7 calls/sec speed limit
	}
}

function checkConfigSync(device, configType, reboot) {
	// build array for uploading.
	console.log('Checking config sync for: ' + device['SERIAL']);
	if (!device['SERIAL']) {
		skippedDevices++;
	} else {
		var key = device['SERIAL'].trim();
		var deviceMonitoring = findDeviceInMonitoring(key);
		if (deviceMonitoring && deviceMonitoring['status'] == 'Up') {
			checkedDevices[key] = device;
			commandCheckCounter[key] = 0;
			var data = JSON.stringify({ device_type: 'IAP', commands: [{ command_id: 53 }, { command_id: 60 }] });

			var settings = {
				url: getAPIURL() + '/tools/postCommand',
				method: 'POST',
				timeout: 0,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify({
					url: localStorage.getItem('base_url') + '/troubleshooting/v1/devices/' + key,
					access_token: localStorage.getItem('access_token'),
					data: data,
				}),
			};

			$.ajax(settings).done(function(response, textStatus, jqXHR) {
				//console.log(response);
				if (response.hasOwnProperty('error')) {
					showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
				} else if (response.status === 'QUEUED' || response.status === 'RUNNING') {
					//showNotification('ca-window-code', response.message, 'bottom', 'center', 'info');
					if (configType == ConfigType.Antenna) setTimeout(checkAntennaConfigResult, 10000, response.session_id, response.serial, reboot);
					else if (configType == ConfigType.IP) setTimeout(checkStaticIPConfigResult, 10000, response.session_id, response.serial, reboot);
				} else {
					showNotification('ca-window-code', response.message, 'bottom', 'center', 'danger');
				}
			});
		} else {
			logInformation(key + ' is marked as offline in the current Monitoring data. Device is skipped.');
			skippedDevices++;
			checkedCounter++;
			var checkedProgress = ((checkedCounter + skippedDevices) / csvData.length) * 100;
			configNotification.update({ progress: checkedProgress });
			if (checkedProgress > 99) configNotification.close();
		}
	}
}

function checkAntennaConfigResult(session_id, deviceSerial, reboot) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/troubleshooting/v1/devices/' + deviceSerial + '?session_id=' + session_id,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/troubleshooting/v1/devices/)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
		} else {
			var deviceKey = response.serial;
			var currentCheckCounter = commandCheckCounter[deviceKey];
			if (response.status === 'QUEUED') {
				console.log('Waiting for commands to be run against: ' + response.serial);
				commandCheckCounter[deviceKey] = currentCheckCounter++;
				if (currentCheckCounter >= commandRetries) {
					// we have waited long enough just give up checking and log it
					skippedDevices++;
					logError("Config Sync Check didn't start for " + response.serial + '. Manually check and reboot if required.');
				} else {
					setTimeout(checkAntennaConfigResult, 30000, session_id, response.serial, reboot);
				}
			} else if (response.status === 'RUNNING') {
				console.log('Commands still running against: ' + response.serial);
				commandCheckCounter[deviceKey] = currentCheckCounter++;
				if (currentCheckCounter >= commandRetries) {
					// we have waited long enough just give up checking and log it
					skippedDevices++;
					logError("Config Sync Check didn't finish for " + response.serial + '. Manually check and reboot if required.');
				} else {
					setTimeout(checkAntennaConfigResult, 30000, session_id, response.serial, reboot);
				}
			} else if (response.status === 'COMPLETED') {
				console.log('Processing results for: ' + response.serial);
				var currentDevice = checkedDevices[response.serial];
				//console.log(currentDevice);
				//console.log(response.output);

				// Antenna Gain Check
				// check contents of ap-env block for antenna gain

				// Get 'a' radio antenna
				var a_ant_gain = response.output.match(/a_ant_gain.*?:(.*$)/m);
				if (a_ant_gain) a_ant_gain = response.output.match(/a_ant_gain.*?:(.*$)/m)[1];
				// check for older ap-env variable

				// Get configured value from CSV for radio 0 (a)
				var original_a_gain = currentDevice['RADIO 0 GAIN'];
				if (!original_a_gain.includes('.')) original_a_gain += '.0';

				// Get 'g' radio antenna
				var g_ant_gain = response.output.match(/g_ant_gain.*?:(.*$)/m);
				if (g_ant_gain) g_ant_gain = response.output.match(/g_ant_gain.*?:(.*$)/m)[1];

				// Get configured value from CSV for radio 1 (g)
				var original_g_gain = currentDevice['RADIO 1 GAIN'];
				if (!original_g_gain.includes('.')) original_g_gain += '.0';

				// If antenna gain is same then config is synced
				if (a_ant_gain === original_a_gain && g_ant_gain === original_g_gain) {
					// Update Notification
					checkedCounter++;
					var checkedProgress = ((checkedCounter + skippedDevices) / csvData.length) * 100;
					configNotification.update({ progress: checkedProgress });
					if (checkedProgress > 99) configNotification.close();

					if (reboot) {
						// Add device to list of devices to reboot
						var ap = { serial: currentDevice['SERIAL'], macaddr: currentDevice['MAC'] };
						devicesToReboot.push(ap);
						console.log(currentDevice['SERIAL'] + ' is ready for reboot.');
						if (checkedCounter + skippedDevices >= csvData.length) {
							// if all devices are ready to be rebooted...
							if (skippedDevices > 0) logInformation('Some devices were not able to be verified for config sync. The rest are being rebooted...');
							else logInformation('All devices are being rebooted...');
							rebootSpecificDevices();
						}
					}
				} else {
					// if antenna gain or IP address doesn't match the CSV - run the command again (until it matches)
					console.log('Waiting for config to sync to ' + response.serial);
					checkConfigSync(checkedDevices[response.serial], ConfigType.Antenna, reboot);
				}
			} else {
				checkedCounter++;
				showNotification('ca-window-code', response.message, 'bottom', 'center', 'danger');
			}
		}
	});
}

function checkStaticIPConfigResult(session_id, deviceSerial, reboot) {
	var settings = {
		url: getAPIURL() + '/tools/getCommandwHeaders',
		method: 'POST',
		timeout: 0,
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify({
			url: localStorage.getItem('base_url') + '/troubleshooting/v1/devices/' + deviceSerial + '?session_id=' + session_id,
			access_token: localStorage.getItem('access_token'),
		}),
	};

	$.ajax(settings).done(function(commandResults, statusText, xhr) {
		if (commandResults.hasOwnProperty('headers')) {
			updateAPILimits(JSON.parse(commandResults.headers));
		}
		if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
			logError('Central Server Error (503): ' + commandResults.reason + ' (/troubleshooting/v1/devices/)');
			apiErrorCount++;
			return;
		} else if (commandResults.hasOwnProperty('error_code')) {
			logError(commandResults.description);
			apiErrorCount++;
			return;
		}
		var response = JSON.parse(commandResults.responseBody);

		//console.log(response);
		if (response.hasOwnProperty('error')) {
			showNotification('ca-unlink', response.error_description, 'top', 'center', 'danger');
		} else {
			var deviceKey = response.serial;
			var currentCheckCounter = commandCheckCounter[deviceKey];
			if (response.status === 'QUEUED') {
				console.log('Waiting for commands to be run against: ' + response.serial);
				commandCheckCounter[deviceKey] = currentCheckCounter++;
				if (currentCheckCounter > 10) {
					skippedDevices++;
					logError("Config Sync Check didn't start for " + response.serial + '. Manually check and reboot if required.');
				} else {
					setTimeout(checkStaticIPConfigResult, 30000, session_id, response.serial, reboot);
				}
			} else if (response.status === 'RUNNING') {
				console.log('Commands still running against: ' + response.serial);
				commandCheckCounter[deviceKey] = currentCheckCounter++;
				if (currentCheckCounter > 10) {
					skippedDevices++;
					logError("Config Sync Check didn't finish for " + response.serial + '. Manually check and reboot if required.');
				} else {
					setTimeout(checkStaticIPConfigResult, 30000, session_id, response.serial, reboot);
				}
			} else if (response.status === 'COMPLETED') {
				console.log('Processing results for: ' + response.serial);
				var currentDevice = checkedDevices[response.serial];
				//console.log(currentDevice);
				//console.log(response.output);

				// Check contents of ap-env block for IP Address
				// Get ip address from device
				var ipaddress = response.output.match(/ipaddr.*?:(.*$)/m);
				if (ipaddress) {
					// Grab found isolated IP address from AP-ENV
					ipaddress = response.output.match(/ipaddr.*?:(.*$)/m)[1];

					// if IP address in the AP-ENV doesn't match the config desired - run the command again (until it matches)
					if (currentDevice && currentDevice['IP ADDRESS'] && currentDevice['IP ADDRESS'] !== ipaddress) {
						console.log('Waiting for config to sync to ' + response.serial);
						checkConfigSync(currentDevice, ConfigType.IP, reboot);
					} else {
						// AP-ENV and CSV data match now check against active IP address from br0
						// Get configured value from 'show ip interface brief'
						var original_ipaddr = response.output.match(/br0\s*([0-9.]*)\s/m);
						if (original_ipaddr) original_ipaddr = response.output.match(/br0\s*([0-9.]*)\s/m)[1];

						// If IPs don't match then the AP needs to be rebooted so that the static IP can be installed
						if (ipaddress !== original_ipaddr) {
							// Update Notification
							checkedCounter++;
							checkForStaticIPCompletion();
							logError('Static IP for ' + response.serial + ' is not active.');

							var ap = findDeviceInMonitoring(response.serial);
							devicesToReboot.push(ap);
							if (reboot) {
								if (rebootCounter == 0) rebootNotification = showProgressNotification('ca-reload', 'Rebooting devices...', 'bottom', 'center', 'info');
								rebootCounter++;
								// Reboot AP as config is sync'd
								rebootSingleDevice(currentDevice);
							} else {
								$('#APStaticIPConfigModalLink').trigger('click');

								// add to table
								var table = $('#ap-static-table').DataTable();

								// Build strings
								var memoryUsage = (((ap['mem_total'] - ap['mem_free']) / ap['mem_total']) * 100).toFixed(0).toString();
								var status = '<i class="fa fa-circle text-danger"></i>';
								if (ap['status'] == 'Up') {
									status = '<span data-toggle="tooltip" data-placement="right" data-html="true" title="CPU Usage: ' + ap['cpu_utilization'] + '%<br>Memory Usage:' + memoryUsage + '%"><i class="fa fa-circle text-success"></i></span>';
								}
								var active_ip_address = ap['ip_address'];
								if (!active_ip_address) active_ip_address = '';

								// Make AP Name as a link to Central
								var name = encodeURI(ap['name']);
								var apiURL = localStorage.getItem('base_url');
								var centralURL = centralURLs[0][apiURL] + '/frontend/#/APDETAILV2/' + ap['serial'] + '?casn=' + ap['serial'] + '&cdcn=' + name + '&nc=access_point';

								table.row.add([ap['swarm_master'] ? '<a href="' + centralURL + '" target="_blank"><strong>' + ap['name'] + ' (VC)</strong></a>' : '<a href="' + centralURL + '" target="_blank"><strong>' + ap['name'] + '</strong></a>', status, ap['status'], active_ip_address, ipaddress, ap['serial'], ap['group_name'], ap['macaddr']]);

								// Force reload of table data
								$('#ap-static-table')
									.DataTable()
									.rows()
									.draw();

								$('[data-toggle="tooltip"]').tooltip();
							}
						} else {
							logInformation('Static IP for ' + response.serial + ' (' + ipaddress + ') is already active.');
							checkedCounter++;
							checkForStaticIPCompletion();
						}
					}
				} else {
					logInformation(response.serial + ' is not configured to use a static IP');
					checkedCounter++;
					checkForStaticIPCompletion();
				}
			} else {
				checkedCounter++;
				showNotification('ca-window-code', response.message, 'bottom', 'center', 'danger');
			}
		}
	});
}

function testStaticIPAddress() {
	var select = document.getElementById('siteselector');
	var selectedSite = select.value;
	var siteAPs = getAPsForSite(selectedSite);

	// Prep UI and counters
	devicesToReboot = [];
	$('#ap-static-table')
		.DataTable()
		.rows()
		.remove();

	showNotification('ca-square-pin', 'Checking APs at ' + selectedSite + '...', 'bottom', 'center', 'info');

	// CSV header
	var serialKey = 'SERIAL';
	var macKey = 'MAC';

	var csvDataBuild = [];

	// For each row in the supplied device CSV
	// Rebuild the CSV only having selected APs and set antenna gains
	$.each(siteAPs, function() {
		csvDataBuild.push({ [serialKey]: this['serial'], [macKey]: this['macaddr'] });
	});

	csvData = csvDataBuild;
	confirmEnvConfigSync(ConfigType.IP, false);
}

function checkForStaticIPCompletion() {
	var checkedProgress = ((checkedCounter + skippedDevices) / csvData.length) * 100;
	configNotification.update({ progress: checkedProgress });
	if (checkedProgress > 99) {
		configNotification.close();
		var table = $('#ap-static-table').DataTable();
		var icon = 'warning';
		if (!table.data().count()) {
			icon = 'success';
			showLog();
		}
		Swal.fire({
			title: 'Active Static IP',
			text: 'All APs using static IP have been checked.',
			icon: icon,
		});
	}
}

function checkForStaticIPConfigCompletion() {
	var ipProgress = (ipCounter / csvData.length) * 100;
	ipNotification.update({ progress: ipProgress });

	if (ipCounter >= csvData.length) {
		ipNotification.close();
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Static IP Configuration Failure',
					text: 'Some or all devices failed to be set to the correct static IP addresses. Please reboot any successful APs for change to take effect.',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Static IP Configuration Success',
					text: 'All devices were set to the supplied static IPs. Please reboot APs for change to take effect.',
					icon: 'success',
					showCancelButton: true,
					cancelButtonColor: '#d33',
					cancelButtonText: "I'll reboot later",
					confirmButtonColor: '#3085d6',
					confirmButtonText: 'Reboot them!',
				}).then(result => {
					if (result.isConfirmed) {
						// Build a CSV of only the APs that require a reboot
						var serialKey = 'SERIAL';
						var macKey = 'MAC';
						var ipKey = 'IP ADDRESS';
						var csvDataBuild = [];
						$.each(devicesToReboot, function() {
							csvDataBuild.push({ [serialKey]: this['serial'], [macKey]: this['macaddr'], [ipKey]: this['ip_address'] });
						});
						csvData = csvDataBuild;

						// Need to confirm config has made it to each AP
						confirmEnvConfigSync(ConfigType.IP, true);
					}
				});
			}
		}
	}
}

function setStaticIPConfig() {
	/*  
		if AP - grab ap settings via API, then update the IP address values
	*/
	var settingsList = {};
	devicesToReboot = [];
	ipCounter = 0;
	inventoryPromise = new $.Deferred();
	$.when(updateInventory()).then(function() {
		ipNotification = showProgressNotification('ca-square-pin', 'Setting static IP addresses...', 'bottom', 'center', 'info');
		$.each(csvData, function() {
			// find device in inventory to get device type
			if (this['SERIAL']) {
				var currentSerial = this['SERIAL'].trim();

				// get IP details
				var ipAddress = this['IP ADDRESS'];
				var subnetMask = this['SUBNET MASK'];
				var gateway = this['DEFAULT GATEWAY'];
				var dnsServer = this['DNS SERVER'];
				var domainName = this['DOMAIN NAME'];

				if (!ipAddress && !subnetMask && !gateway && !dnsServer) {
					logError('Device with Serial Number: ' + currentSerial + ' is missing static IP information in the CSV');
					ipCounter++;
					checkForStaticIPConfigCompletion();
				} else {
					var device = findDeviceInInventory(currentSerial);
					if (!device) {
						logError('Unable to find device ' + currentSerial + ' in the device inventory');
						apiErrorCount++;
						ipCounter++;
						checkForStaticIPConfigCompletion();
					} else if (deviceType === 'IAP') {
						settingsList[device.macaddr.toLowerCase()] = this;
						// if AP then get AP settings
						var settings = {
							url: getAPIURL() + '/tools/getCommandwHeaders',
							method: 'POST',
							timeout: 0,
							headers: {
								'Content-Type': 'application/json',
							},
							data: JSON.stringify({
								url: localStorage.getItem('base_url') + '/configuration/v1/ap_settings_cli/' + currentSerial,
								access_token: localStorage.getItem('access_token'),
							}),
						};

						$.ajax(settings).done(function(commandResults, statusText, xhr) {
							if (commandResults.hasOwnProperty('headers')) {
								updateAPILimits(JSON.parse(commandResults.headers));
							}
							if (commandResults.hasOwnProperty('status') && commandResults.status === '503') {
								logError('Central Server Error (503): ' + commandResults.reason + ' (/configuration/v1/ap_settings_cli/<SERIAL>)');
								apiErrorCount++;
								return;
							} else if (commandResults.hasOwnProperty('error_code')) {
								logError(commandResults.description);
								apiErrorCount++;
								return;
							}
							var response = JSON.parse(commandResults.responseBody);

							if (response.hasOwnProperty('error_code')) {
								logError(response.description);
								apiErrorCount++;
								ipCounter++;
								checkForStaticIPConfigCompletion();
							} else {
								var apCLIResponse = response;
								// Pull in the new settings from the settingsList (ensures correct settings are used)
								var newSettingsKey = [apCLIResponse[0].replace('per-ap-settings ', '')];
								var newSettings = settingsList[newSettingsKey];

								var currentSerial = newSettings['SERIAL'].trim();
								var newIpAddress = newSettings['IP ADDRESS'] ? newSettings['IP ADDRESS'].trim() : null;
								var newSubnetMask = newSettings['SUBNET MASK'] ? newSettings['SUBNET MASK'].trim() : null;
								var newGateway = newSettings['DEFAULT GATEWAY'] ? newSettings['DEFAULT GATEWAY'].trim() : null;
								var newDnsServer = newSettings['DNS SERVER'] ? newSettings['DNS SERVER'].trim() : null;
								if (newDnsServer) newDnsServer = newDnsServer.replace(/\s/g, ''); // remove any spaces in between multiple DNS servers
								var newDomainName = newSettings['DOMAIN NAME'] ? newSettings['DOMAIN NAME'].trim() : null;

								// rebuild ip address line
								var ipAddressLine = -1;
								// remove the old settings
								for (i = 0; i < apCLIResponse.length; i++) {
									if (apCLIResponse[i].includes('ip-address ')) ipAddressLine = i;
								}
								var originalLine = '';
								if (ipAddressLine != -1) originalLine = apCLIResponse.splice(ipAddressLine, 1);
								if (originalLine !== '') {
									var ipArray = originalLine[0].split(' ');
									if (!newIpAddress) newIpAddress = ipArray[3];
									if (!newSubnetMask) newSubnetMask = ipArray[4];
									if (!newGateway) newGateway = ipArray[5];
									if (!newDnsServer) newDnsServer = ipArray[6];
									if (!newDomainName) newDomainName = ipArray[7];

									if (newIpAddress === '0.0.0.0' || newSubnetMask === '0.0.0.0' || newGateway === '0.0.0.0' || newDnsServer === '0.0.0.0') {
										ipCounter++;
										logInformation(currentSerial + ' was not assigned the new static IP settings, as it is not configured for Static IP or is missing data in the CSV file');
										checkForStaticIPConfigCompletion();
										return true;
										console.log('shouldnt see this');
									}
								}

								// add in the new config
								apCLIResponse.push('  ip-address ' + newIpAddress + ' ' + newSubnetMask + ' ' + newGateway + ' ' + newDnsServer + ' ' + newDomainName);
								var combinedForOutput = newIpAddress + '/' + newSubnetMask + '/' + newGateway + ', ' + newDnsServer + ', ' + newDomainName;

								// Update ap settings
								var settings = {
									url: getAPIURL() + '/tools/postCommand',
									method: 'POST',
									timeout: 0,
									headers: {
										'Content-Type': 'application/json',
									},
									data: JSON.stringify({
										url: localStorage.getItem('base_url') + '/configuration/v1/ap_settings_cli/' + currentSerial,
										access_token: localStorage.getItem('access_token'),
										data: JSON.stringify({ clis: apCLIResponse }),
									}),
								};

								$.ajax(settings).done(function(response, statusText, xhr) {
									if (response.hasOwnProperty('status')) {
										if (response.status === '503') {
											apiErrorCount++;
											logError('Central Server Error (503): ' + response.reason + ' (/configuration/v1/ap_settings_cli/<SERIAL>)');
										}
									}
									if (response !== currentSerial) {
										logError(currentSerial + ' was not assigned the new static IP address. Reason: ' + response.reason);
										//console.log(response.reason);
										apiErrorCount++;
									} else {
										var ap = { serial: currentSerial, macaddr: newSettingsKey, ip_address: newIpAddress };
										devicesToReboot.push(ap);
										logInformation(currentSerial + ' was assigned the static IP address values (' + combinedForOutput + ')');
									}
									ipCounter++;
									checkForStaticIPConfigCompletion();
								});
							}
						});
					} else {
						// Either switch or controller/gateway
						ipCounter++;
						checkForStaticIPConfigCompletion();
					}
				}
			} else {
				ipCounter++;
				checkForStaticIPConfigCompletion();
			}
		});
	});
	if (currentWorkflow !== '') {
		return autoStaticIPPromise.promise();
	}
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Visitor Functions
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
function checkForVisitorCompletion() {
	var visitorProgress = (visitorCounter / csvData.length) * 100;
	visitorNotification.update({ progress: visitorProgress });
	if (visitorCounter >= csvData.length) {
		visitorNotification.close();
		if (currentWorkflow === '') {
			if (apiErrorCount != 0) {
				showLog();
				Swal.fire({
					title: 'Visitor Creation Failure',
					text: 'Some or all visitor accounts failed to be created.',
					icon: 'error',
				});
			} else {
				Swal.fire({
					title: 'Add Success',
					text: 'All visitor accounts were created.',
					icon: 'success',
				});
			}
			loadCurrentPageVisitors();
		}
	}
}

function createVisitors() {
	vistorCounter = 0;
	var apiDelay = 0;
	if (csvData.length == 0) showNotification('ca-multiple-11', 'No visitors in the CSV file', 'bottom', 'center', 'warning');
	else visitorNotification = showProgressNotification('ca-multiple-11', 'Creating Visitors...', 'bottom', 'center', 'info');
	$.each(csvData, function() {
		setTimeout(createVisitor, 250 * apiDelay, this);
		apiDelay++;
	});
}

function createVisitor(visitor) {
	if (visitor['NAME']) {
		var visitorData = {};
		var visitorName = visitor['NAME'].trim();
		visitorData['name'] = visitor['NAME'].trim();
		visitorData['company_name'] = visitor['COMPANY'].trim();
		if (visitor['PASSWORD'].trim()) visitorData['password'] = visitor['PASSWORD'].trim();

		var visitorPhone = visitor['PHONE'].trim();
		if (visitorPhone && visitorPhone.length > 0 && !visitorPhone.includes('+')) visitorPhone = '+' + visitorPhone;
		var visitorEmail = visitor['EMAIL'].trim();
		if (visitorPhone || visitorEmail) {
			var userData = {};
			if (visitorPhone) userData['phone'] = visitorPhone;
			if (visitorEmail) userData['email'] = visitorEmail;
			visitorData['user'] = userData;
		}

		visitorData['is_enabled'] = true;
		var visitorEnabled = visitor['ENABLED'].trim();
		if (visitorEnabled) {
			visitorEnabled = visitorEnabled.toLowerCase();
			if (visitorEnabled === 'no') visitorData['is_enabled'] = false;
			else if (visitorEnabled === 'false') visitorData['is_enabled'] = false;
			else if (visitorEnabled === '0') visitorData['is_enabled'] = false;
		}

		var visitorDays = parseInt(visitor['DAYS'].trim());
		if (!visitorDays) visitorDays = 0;
		var visitorHours = parseInt(visitor['HOURS'].trim());
		if (!visitorHours) visitorHours = 0;
		var visitorMinutes = parseInt(visitor['MINUTES'].trim());
		if (!visitorMinutes) visitorMinutes = 0;
		visitorData['valid_till_no_limit'] = false;
		if (visitorDays == 0 && visitorHours == 0 && visitorMinutes == 0) {
			visitorData['valid_till_no_limit'] = true;
			visitorData['valid_till_days'] = 0;
			visitorData['valid_till_hours'] = 0;
			visitorData['valid_till_minutes'] = 0;
		} else {
			visitorData['valid_till_days'] = visitorDays;
			visitorData['valid_till_hours'] = visitorHours;
			visitorData['valid_till_minutes'] = visitorMinutes;
		}

		var visitorNotify = visitor['NOTIFY'].trim();
		if (visitorNotify) {
			visitorNotify = visitorNotify.toLowerCase();
			if (visitorNotify === 'email') {
				visitorData['notify'] = true;
				visitorData['notify_to'] = 'email';
			} else if (visitorNotify === 'phone') {
				visitorData['notify'] = true;
				visitorData['notify_to'] = 'phone';
			}
		}

		var select = document.getElementById('portalselector');

		// Create visitor
		var settings = {
			url: getAPIURL() + '/tools/postCommand',
			method: 'POST',
			timeout: 0,
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify({
				url: localStorage.getItem('base_url') + '/guest/v1/portals/' + select.value + '/visitors',
				access_token: localStorage.getItem('access_token'),
				data: JSON.stringify(visitorData),
			}),
		};

		$.ajax(settings).done(function(response, statusText, xhr) {
			console.log(response);
			if (response.hasOwnProperty('error_code')) {
				if (response.error_code == 400) {
					apiErrorCount++;
					logError('Central Server Error (400): ' + response.description);
				}
				if (response.error_code == 503) {
					apiErrorCount++;
					logError('Central Server Error (503): ' + response.description + ' (/guest/v1/portals/<PORTAL_ID>/visitors)');
				}
				if (response.error_code == 500) {
					if (response.description.includes('id')) logError('Visitor account for "' + visitorName + '" was not created as to a duplicate account already exists.');
					else logError('Central Server Error (500): Internal Server Error on Central (/guest/v1/portals/<PORTAL_ID>/visitors)');
					apiErrorCount++;
				}
			}
			if (!('id' in response)) {
				//logInformation(currentSerial + ' was not assigned the new Antenna gain values. Reason: ' + response.reason);
				//console.log(response.reason);
				apiErrorCount++;
			}
			visitorCounter++;
			checkForVisitorCompletion();
		});
	} else {
		visitorCounter++;
		checkForVisitorCompletion();
	}
}
