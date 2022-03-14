/**
 * @description Official source identifier by lavalink itself
 */
export type LavalinkSearchIdentifier = 'ytsearch' | 'ytmsearch' | 'scsearch';

/**
 * @description Official source identifier by lavalink itself
 */
export enum LavalinkSearchIdentifierEnum {
	YT_SEARCH = 'ytsearch',
	YTM_SEARCH = 'ytmsearch',
	SC_SEARCH = 'scsearch'
}

/**
 * @description Official source supported by lavalink itself.
 */
export type LavalinkSource = 'youtube' | 'soundcloud' | 'bandcamp' | 'local' | 'vimeo' | 'twitch' | string;

/**
 * @description Official source supported by lavalink itself.
 */
export enum LavalinkSourceEnum {
	Youtube = 'youtube',
	Soundcloud = 'soundcloud',
	Bandcamp = 'bandcamp',
	Local = 'local',
	Vimeo = 'vimeo',
	Twitch = 'twitch'
}

/**
 * @description A lavalink severity level when there's an error
 */
export type Severity = 'COMMON' | 'SUSPICIOUS' | 'FAULT';

/**
 * @description A lavalink severity level when there's an error
 */
export enum SeverityEnum {
	COMMON = 'COMMON',
	SUSPICIOUS = 'SUSPICIOUS',
	FAULT = 'FAULT'
}

/**
 * @description A track reason when ended, sent by the lavalink server.
 */
export type TrackEndReason = 'FINISHED' | 'LOAD_FAILED' | 'STOPPED' | 'REPLACED' | 'CLEANUP';

/**
 * @description A track reason when ended, sent by the lavalink server.
 */
export enum TrackEndReasonEnum {
	FINISHED = 'FINISHED',
	LOAD_FAILED = 'LOAD_FAILED',
	STOPPED = 'STOPPED',
	REPLACED = 'REPLACED',
	CLEANUP = 'CLEANUP'
}

/**
 * @description A load type returned by lavalink in loadtracks route.
 */
export type LoadType = 'SEARCH_RESULT ' | 'TRACK_LOADED' | 'PLAYLIST_LOADED' | 'NO_MATCHES' | 'LOAD_FAILED';

/**
 * @description A load type returned by lavalink in loadtracks route.
 */
export enum LoadTypeEnum {
	SEARCH_RESULT = 'SEARCH_RESULT',
	TRACK_LOADED = 'TRACK_LOADED',
	PLAYLIST_LOADED = 'PLAYLIST_LOADED',
	NO_MATCHES = 'NO_MATCHES',
	LOAD_FAILED = 'LOAD_FAILED'
}

/**
 * @description A Websocket event type sent by lavalink.
 */
export type WebSocketType = 'WebSocketClosedEvent' | 'TrackStartEvent' | 'TrackEndEvent' | 'TrackExceptionEvent' | 'TrackStuckEvent';

/**
 * @description A Websocket event type sent by lavalink.
 */
export enum WebSocketTypeEnum {
	WebSocketClosedEvent = 'WebSocketClosedEvent',
	TrackStartEvent = 'TrackStartEvent',
	TrackEndEvent = 'TrackEndEvent',
	TrackExceptionEvent = 'TrackExceptionEvent',
	TrackStuckEvent = 'TrackStuckEvent'
}

/**
 * @description A Websocket close code sent by discord via lavalink.
 */
export type WebsocketCloseCode = 4006 | 4001 | 4002 | 4003 | 4004 | 4005 | 4006 | 4009 | 4011 | 4012 | 4014 | 4015 | 4016;

export enum WebsocketCloseCodeEnum {
	UNKNOWN_ERROR = 4006,
	UNKNOWN_OPCODE = 4001,
	DECODE_ERROR = 4002,
	NOT_AUTHENTICATED = 4003,
	AUTHENTICATION_FAILED = 4004,
	ALREADY_AUTHENTICATED = 4005,
	SESSION_INVALID = 4006,
	SESSION_TIMEOUT = 4009,
	SERVER_NOT_FOUND = 4011,
	UNKNOWN_PROTOCOL = 4012,
	DISCONNECTED = 4014,
	VOICE_SERVER_CRASHED = 4015,
	UNKNOWN_ENCRYPTION_MODE = 4016
}

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

/**
 * @description A lavalink op that sent by client. note: `volume` op is deprecated.
 */
export enum WebsocketOpEnum {
	PAUSE = 'pause',
	STOP = 'stop',
	PLAY = 'play',
	SEEK = 'seek',
	/** @deprecated Will be removed on lavalink major update */
	VOLUME = 'volume',
	FILTERS = 'filters',
	DESTROY = 'destroy',
	PLAYER_UPDATE = 'playerUpdate',
	STATS = 'stats',
	CONFIGURE_RESUMING = 'configureResuming',
	VOICE_UPDATE = 'voiceUpdate'
}

/**
 * @description Lavalink track object.
 */
export interface LavalinkTrack {
	track: string;
	info: {
		identifier: string;
		isSeekable: boolean;
		author: string;
		length: number;
		isStream: boolean;
		position: number;
		title: string;
		uri: string;
		sourceName: LavalinkSource;
	};
}

/**
 * @description Lavalink response when calling loadtracks route.
 */
export interface LoadTrackResponse {
	loadType: LoadType;
	playlistInfo?: { name: string; selectedTrack: number };
	tracks: LavalinkTrack[];
	exception?: Omit<Exception, 'cause'>;
}

/**
 * @description Lavalink response when PlayerUpdate event received.
 */
export interface PlayerUpdatePayload {
	op: WebsocketOpEnum.PLAYER_UPDATE;
	guildId: string;
	state: {
		time: number;
		position: number;
		connected?: boolean;
	};
}

/**
 * @description lavalink stats payload sent by lavalink.
 */
export interface LavalinkStatsPayload {
	op: WebsocketOpEnum.STATS;
	players: number;
	playingPlayers: number;
	uptime: number;
	memory: {
		free: number;
		allocated: number;
		used: number;
		reservable: number;
	};
	cpu: {
		cores: number;
		systemLoad: number;
		lavalinkLoad: number;
	};
	frameStats: { sent: number; nulled: number; deficit: number } | null;
}

/**
 * @description Lavalink exception object.
 */
export interface Exception {
	severity: Severity;
	message: string;
	cause: string;
}

/**
 * @description Lavalink main payload sent by lavalink.
 */
export interface LavalinkPlayerPayload {
	op: 'event';
	type: WebSocketType;
	guildId: string;
}

/**
 * @description Lavalink track start payload sent by lavalink.
 */
export interface TrackStartEventPayload extends LavalinkPlayerPayload {
	type: WebSocketTypeEnum.TrackStartEvent;
	track: string;
}

/**
 * @description Lavalink track end payload sent by lavalink.
 */
export interface TrackEndEventPayload extends LavalinkPlayerPayload {
	type: WebSocketTypeEnum.TrackEndEvent;
	track: string;
	reason: TrackEndReason;
}

/**
 * @description Lavalink track exception payload sent by lavalink.
 */
export interface TrackExceptionEventPayload extends LavalinkPlayerPayload {
	type: WebSocketTypeEnum.TrackExceptionEvent;
	exception?: Exception;
	error: string;
}

/**
 * @description Lavalink track stuck payload sent by lavalink.
 */
export interface TrackStuckEventPayload extends LavalinkPlayerPayload {
	type: WebSocketTypeEnum.TrackStuckEvent;
	thresholdMs: number;
}

/**
 * @description Lavalink websocket close payload sent by lavalink.
 */
export interface WebSocketClosedEventPayload extends LavalinkPlayerPayload {
	type: WebSocketTypeEnum.WebSocketClosedEvent;
	code: WebsocketCloseCode;
	byRemote: boolean;
	reason: string;
}

/**
 * @description Equalizer filter payload.
 */
export interface Equalizer {
	band: number;
	gain: number;
}

/**
 * @description karaoke filter payload.
 */
export interface KaraokeEqualizer {
	level: number;
	monoLevel: number;
	filterBand: number;
	filterWidth: number;
}

/**
 * @description timescale filter payload.
 */
export interface TimeScaleEqualizer {
	speed: number;
	pitch: number;
	rate: number;
}

/**
 * @description Tremolo filter payload.
 */
export interface TremoloEqualizer {
	depth: number;
	frequency: number;
}

/**
 * @description Vibrato filter payload.
 */
export interface VibratoEqualizer {
	depth: number;
	frequency: number;
}

/**
 * @description Rotation filter payload.
 */
export interface RotationEqualizer {
	rotationHz: number;
}

/**
 * @description Distortion filter payload.
 */
export interface DistortionEqualizer {
	sinOffset: number;
	sinScale: number;
	cosOffset: number;
	cosScale: number;
	tanOffset: number;
	tanScale: number;
	offset: number;
	scale: number;
}

/**
 * @description channelMix filter payload.
 */
export interface ChannelMixEqualizer {
	leftToLeft: number;
	leftToRight: number;
	rightToRight: number;
	rightToLeft: number;
}

/**
 * @description Lowpass filter payload.
 */
export interface LowPassEqualizer {
	smoothing: number;
}

/**
 * @description Routeplanner class.
 */
export type RoutePlannerClass = 'RotatingNanoIpRoutePlanner';

/**
 * @description Routeplanner class.
 */
export enum RoutePlannerClassEnum {
	ROTATING_NANO_IP_ROUTE_PLANNER = 'RotatingNanoIpRoutePlanner'
}

/**
 * @description IpBlockType.
 */
export type IpBlockType = 'Inet6Address' | 'Inet4Address';

/**
 * @description RouteplannerStatus sent by lavalink.
 */
export interface RoutePlannerStatusResponse {
	class: RoutePlannerClass;
	details: {
		ipBlock: {
			type: IpBlockType;
			size: number;
		};
		failingAddresses: {
			address: string;
			failingTimestamp: number;
			failingTime: string;
		}[];
		blockIndex: number;
		currentAddressIndex: string;
	};
}
