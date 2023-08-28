export const Routes = {
    /**
	 * Route for:
	 * - GET /loadtracks
	 */
    loadTracks(identifier: string) {
        return `/v3/loadtracks?identifier=${identifier}` as const;
    },
    /**
	 * Route for:
	 * - GET /decodetrack
	 */
    decodeTrack(track: string) {
        return `/v3/decodetrack?track=${track}` as const;
    },
    /**
	 * Route for:
	 * - POST /decodetracks
	 */
    decodeTracks() {
        return "/v3/decodetracks" as const;
    },
    /**
	 * Route for:
	 * - GET /routeplanner/status
	 */
    routePlannerStatus() {
        return "/v3/routeplanner/status" as const;
    },
    /**
	 * Route for:
	 * - POST /routeplanner/free/address
	 */
    routePlannerFreeAddress() {
        return "/v3/routeplanner/free/address" as const;
    },
    /**
	 * Route for:
	 * - POST /routeplanner/free/all
	 */
    routePlannerFreeAll() {
        return "/v3/routeplanner/free/all" as const;
    },

    version() {
        return "/version" as const;
    }
};
