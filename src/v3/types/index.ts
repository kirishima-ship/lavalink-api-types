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
 * @description A lavalink severity level when there's an error
 */
export enum Severity {
    Common = "COMMON",
    Suspicious = "SUSPICIOUS",
    Fault = "FAULT"
}

/**
 * @description A load type returned by lavalink in loadtracks route.
 */
export enum LoadType {
    SearchResult = "SEARCH_RESULT",
    TrackLoaded = "TRACK_LOADED",
    PlaylistLoaded = "PLAYLIST_LOADED",
    NoMatches = "NO_MATCHES",
    LoadFailed = "LOAD_FAILED"
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
 * @description A lavalink op that sent by client.
 */
export enum WebsocketOp {
    Pause = "pause",
    Stop = "stop",
    Play = "play",
    Seek = "seek",
    Volume = "volume",
    Filters = "filters",
    Destroy = "destroy",
    PlayerUpdate = "playerUpdate",
    Stats = "stats",
    ConfigureResuming = "configureResuming",
    VoiceUpdate = "voiceUpdate"
}

/**
 * @description A track reason when ended, sent by the lavalink server.
 */
export enum TrackEndReason {
    Finished = "FINISHED",
    LoadFailed = "LOAD_FAILED",
    Stopped = "STOPPED",
    Replaced = "REPLACED",
    Cleanup = "CLEANUP"
}

/**
 * @description Routeplanner class.
 */
export enum RoutePlannerClass {
    RotatingNanoIPRoutePlanner = "RotatingNanoIpRoutePlanner"
}

/**
 * @description IpBlockType.
 */
export enum IpBlockType {
    INet6Address = "Inet6Address",
    INet4Address = "Inet4Address"
}
