# Documentation

## Blocklist

blocklist -> Get information about blocklist
```
const api = require("adguard-api")
api.blocklist(url,user,pass);
```
set_blocklist
```
const api = require("adguard-api")
api.set_blocklist(url,user,pass,array of service); //more information in adguard API documentation
```
## Client

accesslist -> Get information about accesslist
```
const api = require("adguard-api")
api.accesslist(url,user,pass);
```

client -> Get information about clients
```
const api = require("adguard-api")
api.client(url,user,pass);
```

client_tags -> Get all client tags
```
const api = require("adguard-api")
api.client_tags(url,user,pass);
```
allowed -> Get all allowed client
```
const api = require("adguard-api")
api.allowed(url,user,pass);
```
disallowed -> Get all disallowed client
```
const api = require("adguard-api")
api.disallowed(url,user,pass);
```
remove -> remove a client from allowed list
```
const api = require("adguard-api")
api.client_tags(url,user,pass,ip); //ip must be a string
```
set -> Get allowed, disallowed and blocked clients through array of IP, all this parameters are mandatory, if you want put no IP in blacklist for example put an array of blank char like [""]
```
const api = require("adguard-api")
api.client_tags(url,user,pass,[allowed IP], [Disallowed IP], [Blocked IP]);
```
## DHCP

dhcp -> Get DHCP information
```
const api = require("adguard-api")
api.dhcp(url,user,pass);
```

interfaces -> Get interfaces of Adguard server
```
const api = require("adguard-api")
api.interfaces(url,user,pass);
```
some endopoints are missing because the complexity of parameters but I add it soon :-)
## DNS

dns_info -> Get DNS information
```
const api = require("adguard-api")
api.dns_info(url,user,pass);
```
dns_bootstrap -> Get bootstrap DNS
```
const api = require("adguard-api")
api.dns_bootstrap(url,user,pass);
```
dns_upstream -> Get upstream DNS
```
const api = require("adguard-api")
api.dns_upstream(url,user,pass);
```
## Filtering

filter_whitelist -> Get whitelist
```
const api = require("adguard-api")
api.filter_whitelist(url,user,pass);
```

list_filters -> Get filter list
```
const api = require("adguard-api")
api.list_filters(url,user,pass);
```
add_filter -> Add a filter to blacklist
```
const api = require("adguard-api")
api.add_filter(url,user,pass,name of filter,list url, whitelist); ///whitelist must be boolean 
```
filter_reload -> Reload filters
```
const api = require("adguard-api")
api.filter_reload(url,user,pass,whitelist); //whitelist must be boolean
```
filter_remove -> Remove a filter
```
const api = require("adguard-api")
api.filter_reload(url,user,pass,list url); 
```
set_filters -> Set the rules of filters
```
const api = require("adguard-api")
api.set_filters(url,user,pass,interval,active); //active must be boolean and indicate if filter are enable or not and interval must be an integer
```
user_filters -> Get user filters
```
const api = require("adguard-api")
api.user_filters(url,user,pass); 
```
filter_whitelist -> Get filters in whitelist
```
const api = require("adguard-api")
api.filter_whitelist(url,user,pass); 
```
## Parental control

parental_status -> Get status of parental control
```
const api = require("adguard-api")
api.parental_status(url,user,pass);
```

parental_enable -> Enable parental control
```
const api = require("adguard-api")
api.parental_enable(url,user,pass,number of filter); //see Adguard API documentation for number of filters, based on age
```

parental_disable -> Disable parental control
```
const api = require("adguard-api")
api.parental_disable(url,user,pass);
```

## Rewrite

rewrite_list -> Get list of rewrite
```
const api = require("adguard-api")
api.rewrite_list(url,user,pass);
```

rewrite_add -> add rewrite rules
```
const api = require("adguard-api")
api.rewrite_add(url,user,pass,domain,answer);
```

rewrite_remove -> Remove rewrite rules
```
const api = require("adguard-api")
api.rewrite_remove(url,user,pass,domain,answer);
```

## Safebrowsing

safebrowsing_status -> Get status of safebrowsing
```
const api = require("adguard-api")
api.safebrowsing_status(url,user,pass);
```

safebrowsing_enable -> Enable Safebrowsing
```
const api = require("adguard-api")
api.safebrowsing_enable(url,user,pass); 
```

safebrowsing_disable -> Disable Safebrowsing
```
const api = require("adguard-api")
api.safebrowsing_disable(url,user,pass);
```

## Safesearch

safesearch_status -> Get status of safesearch
```
const api = require("adguard-api")
api.safesearch_status(url,user,pass);
```

safesearch_enable -> Enable Safesearch
```
const api = require("adguard-api")
api.safesearch_enable(url,user,pass); 
```

safebrowsing_disable -> Disable Safesearch
```
const api = require("adguard-api")
api.safesearch_disable(url,user,pass);
```

## TLS

tls_status -> Get status of TLS
```
const api = require("adguard-api")
api.tls_status(url,user,pass);
```

## Status

status_address -> Get list of binded IP
```
const api = require("adguard-api")
api.status_address(url,user,pass);
```

status -> Get status of DNS server
```
const api = require("adguard-api")
api.status(url,user,pass);
```

## Stats

blocked_requests -> List blocked domain by Adguard
```
const api = require("adguard-api")
api.status(url,user,pass);
```

dns_query -> List all DNS query
```
const api = require("adguard-api")
api.dns_query(url,user,pass);
```

getinterval -> Get current interval of statistic
```
const api = require("adguard-api")
api.getinterval(url,user,pass);
```

processing -> Get avg processing time
```
const api = require("adguard-api")
api.processing(url,user,pass);
```

reset_stats -> Reset all statistics
```
const api = require("adguard-api")
api.reset_stats(url,user,pass);
```

stats -> Get all statistics of Adguard
```
const api = require("adguard-api")
api.stats(url,user,pass);
```

update -> Perform an update if available
```
const api = require("adguard-api")
api.update(url,user,pass);
```

version -> Get latest version if update is available
```
const api = require("adguard-api")
api.version(url,user,pass);
```
