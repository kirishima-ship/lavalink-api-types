import type { WebsocketOpEnum, WebSocketTypeEnum } from './enums';
import type { LavalinkSource, LoadType, Severity, WebSocketType, TrackEndReason, WebsocketCloseCode } from './types';

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
