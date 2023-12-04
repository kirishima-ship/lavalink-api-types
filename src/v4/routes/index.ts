export const Routes = {
    /**
    * Route for:
    * - GET /v4/loadtracks
    */
    loadTracks(identifier: string) {
        return `/v4/loadtracks?identifier=${identifier}` as const;
    },
    /**
    * Route for:
    * - GET /v4/decodetrack
    */
    decodeTrack(track: string) {
        return `/v4/decodetrack?track=${track}` as const;
    },
    /**
    * Route for:
    * - POST /v4/decodetracks
    */
    decodeTracks() {
        return "/v4/decodetracks" as const;
    },
    /**
    * Route for:
    * - GET /v4/routeplanner/status
    */
    routePlannerStatus() {
        return "/v4/routeplanner/status" as const;
    },
    /**
    * Route for:
    * - POST /v4/routeplanner/free/address
    */
    routePlannerFreeAddress() {
        return "/v4/routeplanner/free/address" as const;
    },
    /**
    * Route for:
    * - POST /v4/routeplanner/free/all
    */
    routePlannerFreeAll() {
        return "/v4/routeplanner/free/all" as const;
    },
    /**
    * Route for:
    * - WebSocket /v4/websocket
    */
    websocket() {
        return "/v4/websocket" as const;
    },
    /**
    * Route for:
    * - GET /v4/sessions/sessionId/players
    */
    players(sessionId: string) {
        return `/v4/sessions/${sessionId}/players` as const;
    },
    /**
    * Route for:
    * - POST /v4/sessions/{sessionId}/players/{guildId}
    * - PATCH /v4/sessions/{sessionId}/players/{guildId}?noReplace={boolean}
    * - DELETE /v4/sessions/{sessionId}/players/{guildId}
    */
    player(sessionId: string, guildId: string, noReplace?: boolean) {
        return `/v4/sessions/${sessionId}/players/${guildId}${
            typeof noReplace === "boolean" ? `?noReplace=${noReplace}` : ""
        }` as const;
    },
    /**
    * Route for:
    * - PATCH /v4/sessions/{sessionId}
    */
    session(sessionId: string) {
        return `/v4/sessions/${sessionId}` as const;
    },
    /**
    * Route for:
    * - GET /v4/version
    */
    info() {
        return "/v4/info" as const;
    },
    /**
    * Route for:
    * - GET /v4/stats
    */
    stats() {
        return "/v4/stats" as const;
    },
    /**
    * Route for:
    * - GET /version
    */
    version() {
        return "/version" as const;
    }
};
