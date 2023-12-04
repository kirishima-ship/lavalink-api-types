import { RoutePlannerClass, IpBlockType, VoiceState, WebSocketType, WebsocketCloseCode } from "../common";
import { Filters } from "../equalizer";
import { LoadType, Severity, TrackEndReason, WebSocketOp } from "./types";

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
            failingAddress: string;
            failingTimestamp: number;
            failingTime: string;
        }[];
        blockIndex: number;
        currentAddressIndex: string;
    };
}

/**
 * @description Lavalink exception object.
 */
export interface Exception {
    severity: Severity;
    message: string;
    cause: string;
}

export interface TrackInfo {
    identifier: string;
    isSeekable: boolean;
    author: string;
    length: number;
    isStream: boolean;
    position: number;
    title: string;
    uri?: string;
    artworkUrl?: string;
    isrc?: string;
}

export interface Track {
    encoded: string;
    info: TrackInfo;
    pluginInfo: Record<string, unknown>;
    userData: Record<string, unknown>;
}

export interface PlaylistInfo {
    name: string;
    selectedTrack: number;
}

export interface LoadTrackResponse {
    loadType: LoadType.Track;
    data: TrackInfo;
}

export interface LoadPlaylistResponse {
    loadType: LoadType.Playlist;
    data: {
        info: PlaylistInfo;
        plugInfo: Record<string, unknown>;
        tracks: TrackInfo;
    };
}

export interface LoadErrorResponse {
    loadType: LoadType.Error;
    data: Exception;
}

export interface LoadSearchResponse {
    loadType: LoadType.Search;
    data: TrackInfo[];
}

export type LoadTracksResponse = LoadTrackResponse | LoadPlaylistResponse | LoadErrorResponse | LoadSearchResponse;

export interface Player {
    guildId: string;
    track?: Track;
    volume: number;
    paused: boolean;
    state: PlayerState;
    voice: VoiceState;
    filters?: Filters;
}

export interface PlayerState {
    time: number;
    position: number;
    connected: boolean;
    ping: number;
}

export interface InfoResponse {
    version: {
        string: string;
        major: number;
        minor: number;
        patch: number;
        preRelease: string;
        build: string;
    };
    buildTime: number;
    git: {
        branch: string;
        commit: string;
        commitTime: string;
    };
    jvm: string;
    lavaplayer: string;
    sourceManages: string[];
    filters: string[];
    plugins: { name: string; version: string }[];
}

export interface StatsPayload {
    players: number;
    playingPlayers: number;
    uptime: number;
    memory: {
        free: number;
        used: number;
        allocated: number;
        reservable: number;
    };
    cpu: {
        cores: number;
        systemLoad: number;
        lavalinkLoad: number;
    };
    frameStats: {
        sent: number;
        nulled: number;
        deficit: number;
    };
}

export type StatsResponse = Omit<StatsPayload, "frameStats">;

export interface ReadyPayload {
    op: WebSocketOp.Ready;
    resumed: boolean;
    sessionId: string;
}

export interface PlayerUpdatePayload {
    op: WebSocketOp.PlayerUpdate;
    state: PlayerState;
}

export interface EventPayload {
    op: WebSocketOp.Event;
    guildId: string;
    type: WebSocketType;
}

export interface TrackStartEventPayload extends EventPayload {
    track: TrackInfo;
    type: WebSocketType.TrackStartEvent;
}

export interface TrackEndEventPayload extends EventPayload {
    track: TrackInfo;
    reason: TrackEndReason;
    type: WebSocketType.TrackEndEvent;
}

export interface TrackExceptionEventPayload extends EventPayload {
    track: TrackInfo;
    exception: Exception;
    type: WebSocketType.TrackExceptionEvent;
}

export interface TrackStuckEventPayload extends EventPayload {
    track: TrackInfo;
    thresholdMs: number;
    type: WebSocketType.TrackStartEvent;
}

export interface WebSocketClosedEventPayload extends EventPayload {
    code: WebsocketCloseCode;
    reason: string;
    byRemote: boolean;
}

export * from "./routes";
export * from "../common";
