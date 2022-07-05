function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*.hootops.com")) {
        return "PROXY 192.168.2.28:8080";
    }
    return "DIRECT";
}