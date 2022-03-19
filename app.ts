//blocklist API
exports.blocklist = require("./src/blocked/list.js") //get blocklist
exports.set_blocklist = require("./src/blocked/set.js") //set a new block
//client API
exports.accesslist = require("./src/clients/accesslist.js") //get accesslist
exports.allowed = require("./src/clients/allowed.js") //set allowed 
exports.blocked = require("./src/clients/blocked.js") //set blocked
exports.client = require("./src/clients/client.js") //get all clients
exports.client_tags = require("./src/clients/client_tags.js") //get client tags
exports.disallowed = require("./src/clients/remove.js") //set a disallowed
exports.remove = require("./src/clients/remove.js") //remove a client
exports.set = require("./src/clients/set.js") //set allowed,blocked and disallowed clients
// DHCP API
exports.dhcp = require("./src/dhcp/dhcp.js") //get DHCP details
exports.interfaces = require("./src/dhcp/interfaces.js")    //get interfaces details
//DNS API
exports.dns_bootstrap = require("./src/dns/bootstrap.js")   //set bootstrap DNS
exports.dns_info = require("./src/dns/info.js") //get DNS info
exports.dns_upstream = require("./src/dns/upstream.js") //set upstream DNS
//filtering API
exports.add_filter = require("./src/filtering/add.js") //add a new filter
exports.filters = require("./src/filtering/filters.js") 
exports.list_filters = require("./src/filtering/list.js") //list filter
exports.filter_reload = require("./src/filtering/reload.js") //reload filters
exports.filter_remove = require("./src/filtering/remove.js") //remove filter
exports.set_filters = require("./src/filtering/set.js") //set a new filter
exports.user_filters = require("./src/filtering/user.js")
exports.filter_whitelist = require("./src/filtering/whitelist.js") //get whitelist of filter
//parental control API
exports.parental_status = require("./src/parental/status.js") //get status of parental control
exports.parental_enable = require("./src/parental/enable.js") //enable parental control
exports.parental_disable = require("./src/parental/disable.js") //disalbe parental control
//rewrite API
exports.rewrite_list = require("./src/rewrite/list.js") //list all rewrite
exports.rewrite_add = require("./src/rewrite/add.js") //add a rewrite rules
exports.rewrite_remove = require("./src/rewrite/remove.js") //remove a rewrite rules
//safebrowsing API
exports.safebrowsing_status = require("./src/safebrowsing/status.js") //status of safebrowsing
exports.safebrowsing_enable = require("./src/safebrowsing/enable.js") //enable safebrowsing
exports.safebrowsing_disable = require("./src/safebrowsing/disable.js") //disable safebrowsing
//safesearch API
exports.safesearch_status = require("./src/safesearch/status.js") //status of safesearch
exports.safesearch_enable = require("./src/safesearch/enable.js") //enable safesearch
exports.safesearch_disable = require("./src/safesearch/disable.js") //disable safesearch
//TLS api
exports.tls_status = require("./src/tls/status.js") //status of TLS
//status API
exports.status_address = require("./src/status/address.js") //address binded
exports.status = require("./src/status/status.js") //status of DNS server
//stats API
exports.blocked_requests = require("./src/stats/blocked.js") //blocked domain by adguard
exports.dnsquery = require("./src/stats/dnsquery.js") //list all DNS query
exports.getinterval = require("./src/stats/getinterval.js") //get current statistic interval 
exports.processing = require("./src/stats/processing.js")
exports.reset_stats = require("./src/stats/reset.js") //reset all statistic
exports.stats = require("./src/stats/stats.js") //all stats
exports.update = require("./src/stats/update.js") //perform an update if available
exports.version = require("./src/stats/version.js") //get last adguard version information
