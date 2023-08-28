import { IpBlockType, LavalinkSource, RoutePlannerClass, WebSocketType, WebsocketCloseCode } from "../common";
import { LoadType, Severity, TrackEndReason, WebsocketOp } from "./types/index";

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
    exception?: Omit<Exception, "cause">;
}

/**
 * @description Lavalink response when PlayerUpdate event received.
 */
export interface PlayerUpdatePayload {
    op: WebsocketOp.PlayerUpdate;
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
    op: WebsocketOp.Stats;
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
    op: "event";
    type: WebSocketType;
    guildId: string;
}

/**
 * @description Lavalink track start payload sent by lavalink.
 */
export interface TrackStartEventPayload extends LavalinkPlayerPayload {
    type: WebSocketType.TrackStartEvent;
    track: string;
}

/**
 * @description Lavalink track end payload sent by lavalink.
 */
export interface TrackEndEventPayload extends LavalinkPlayerPayload {
    type: WebSocketType.TrackEndEvent;
    track: string;
    reason: TrackEndReason;
}

/**
 * @description Lavalink track exception payload sent by lavalink.
 */
export interface TrackExceptionEventPayload extends LavalinkPlayerPayload {
    type: WebSocketType.TrackExceptionEvent;
    exception?: Exception;
    error: string;
}

/**
 * @description Lavalink track stuck payload sent by lavalink.
 */
export interface TrackStuckEventPayload extends LavalinkPlayerPayload {
    type: WebSocketType.TrackStuckEvent;
    thresholdMs: number;
}

/**
 * @description Lavalink websocket close payload sent by lavalink.
 */
export interface WebSocketClosedEventPayload extends LavalinkPlayerPayload {
    type: WebSocketType.WebSocketClosedEvent;
    code: WebsocketCloseCode | number;
    byRemote: boolean;
    reason: string;
}

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

export * from "../common";
export * from "./types/index";
export * from "./types/index";
export * from "./routes/index";
