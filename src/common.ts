/**
 * @description Official source identifier by lavalink itself
 */
export enum LavalinkSearchIdentifier {
    YTSearch = "ytsearch",
    YTMSearch = "ytmsearch",
    SCSearch = "scsearch"
}

/**
 * @description Official source supported by lavalink itself.
 */
export enum LavalinkSource {
    Youtube = "youtube",
    Soundcloud = "soundcloud",
    Bandcamp = "bandcamp",
    Local = "local",
    Vimeo = "vimeo",
    Twitch = "twitch"
}


/**
 * @description A Websocket event type sent by lavalink.
 */
export enum WebSocketType {
    WebSocketClosedEvent = "WebSocketClosedEvent",
    TrackStartEvent = "TrackStartEvent",
    TrackEndEvent = "TrackEndEvent",
    TrackExceptionEvent = "TrackExceptionEvent",
    TrackStuckEvent = "TrackStuckEvent"
}

/**
 * @description A Websocket close code sent by discord via lavalink.
 */
export enum WebsocketCloseCode {
    UnknownError = 4000,
    UnknownOpCode = 4001,
    DecodeError = 4002,
    NotAuthenticated = 4003,
    AuthenticatedError = 4004,
    AlreadyAuthenticated = 4005,
    SessionInvalid = 4006,
    SessionTimeout = 4009,
    ServerNotFound = 4011,
    UnknownProtocol = 4012,
    Disconnected = 4014,
    VoiceServerCrashed = 4015,
    UnknownEncryptionMode = 4016
}


/**
 * @description Routeplanner class.
 */
export enum RoutePlannerClass {
    RotatingIpRoutePlanner = "RotatingIpRoutePlanner",
    NanoIpRoutePlanner = "NanoIpRoutePlanner",
    RotatingNanoIpRoutePlanner = "RotatingNanoIpRoutePlanner",
    BalancingIpRoutePlanner = "BalancingIpRoutePlanner"
}

/**
 * @description IpBlockType.
 */
export enum IpBlockType {
    INet6Address = "Inet6Address",
    INet4Address = "Inet4Address"
}

export interface VoiceState {
    token: string;
    endpoint: string;
    sessionId: string;
}
