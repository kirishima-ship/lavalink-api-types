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
 * @description A lavalink op that sent by client.
 */
export enum WebSocketOp {
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

