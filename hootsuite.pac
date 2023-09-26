function FindProxyForURL(url, host) {
    if (
        shExpMatch(url, '*.hootops.com*') ||
        shExpMatch(url, '3.87.173.162*')
    ) {
        return "PROXY 192.168.2.28:8080";
        // return "PROXY 10.0.0.49:8080";
    }
    return "DIRECT";
}