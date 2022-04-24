/**
 * @description Official source identifier by lavalink itself
 */
export type LavalinkSearchIdentifier = 'ytsearch' | 'ytmsearch' | 'scsearch' | string;

/**
 * @description Official source supported by lavalink itself.
 */
export type LavalinkSource = 'youtube' | 'soundcloud' | 'bandcamp' | 'local' | 'vimeo' | 'twitch' | string;

/**
 * @description A lavalink severity level when there's an error
 */
export type Severity = 'COMMON' | 'SUSPICIOUS' | 'FAULT';

/**
 * @description A track reason when ended, sent by the lavalink server.
 */
export type TrackEndReason = 'FINISHED' | 'LOAD_FAILED' | 'STOPPED' | 'REPLACED' | 'CLEANUP';

/**
 * @description A load type returned by lavalink in loadtracks route.
 */
export type LoadType = 'SEARCH_RESULT ' | 'TRACK_LOADED' | 'PLAYLIST_LOADED' | 'NO_MATCHES' | 'LOAD_FAILED';

/**
 * @description A Websocket event type sent by lavalink.
 */
export type WebSocketType = 'WebSocketClosedEvent' | 'TrackStartEvent' | 'TrackEndEvent' | 'TrackExceptionEvent' | 'TrackStuckEvent';

/**
 * @description A Websocket close code sent by discord via lavalink.
 */
export type WebsocketCloseCode = 4006 | 4001 | 4002 | 4003 | 4004 | 4005 | 4006 | 4009 | 4011 | 4012 | 4014 | 4015 | 4016;

/**
 * @description A lavalink op that sent by client. note: `volume` op is deprecated.
 */
export type WebsocketOp =
	| 'pause'
	| 'stop'
	| 'play'
	| 'seek'
	| 'volume'
	| 'filters'
	| 'destroy'
	| 'playerUpdate'
	| 'stats'
	| 'configureResuming'
	| 'voiceUpdate';
