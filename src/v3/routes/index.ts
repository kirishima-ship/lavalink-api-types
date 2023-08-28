export const Routes = {
    /**
	 * Route for:
	 * - GET /v3/loadtracks
	 */
    loadTracks(identifier: string) {
        return `/v3/loadtracks?identifier=${identifier}` as const;
    },
    /**
	 * Route for:
	 * - GET /v3/decodetrack
	 */
    decodeTrack(track: string) {
        return `/v3/decodetrack?track=${track}` as const;
    },
    /**
	 * Route for:
	 * - POST /v3/decodetracks
	 */
    decodeTracks() {
        return "/v3/decodetracks" as const;
    },
    /**
	 * Route for:
	 * - GET /v3/routeplanner/status
	 */
    routePlannerStatus() {
        return "/v3/routeplanner/status" as const;
    },
    /**
	 * Route for:
	 * - POST /v3/routeplanner/free/address
	 */
    routePlannerFreeAddress() {
        return "/v3/routeplanner/free/address" as const;
    },
    /**
	 * Route for:
	 * - POST /v3/routeplanner/free/all
	 */
    routePlannerFreeAll() {
        return "/v3/routeplanner/free/all" as const;
    },
    /**
	 * Route for:
	 * - WebSocket /v3/websocket
	 */
    websocket() {
        return "/v3/websocket" as const;
    },

    /**
	 * Route for:
	 * - GET /version
	 */
    version() {
        return "/version" as const;
    }
};
