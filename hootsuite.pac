const proxyUrls = [
    '3.87.173.162',
    '*.hootops.com*'
]

function FindProxyForURL(url, host) {
    if (proxyUrls.some(pUrl => shExpMatch(url, pUrl))) {
        return "PROXY 192.168.2.28:8080";
    }
    return "DIRECT";
}