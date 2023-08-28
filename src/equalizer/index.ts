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
