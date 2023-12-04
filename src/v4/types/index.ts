/**
 * @description A lavalink severity level when there's an error
 */
export enum Severity {
    Common = "common",
    Suspicious = "suspicious",
    Fault = "fault"
}

/**
 * @description A load type returned by lavalink in loadtracks route.
 */
export enum LoadType {
    Track = "track",
    Playlist = "playlist",
    Search = "search",
    Empty = "empty",
    Error = "error"
}

/**
 * @description A track reason when ended, sent by the lavalink server.
 */
export enum TrackEndReason {
    Finished = "finished",
    LoadFailed = "loadFailed",
    Stopped = "stopped",
    Replaced = "replaced",
    Cleanup = "cleanup"
}

export enum WebSocketOp {
    Ready = "ready",
    PlayerUpdate = "playerUpdate",
    Stats = "stats",
    Event = "event"
}
