import { Plugin } from 'vite';

/**
 * @param logging Whether or not to enable console output during build. Defaults to false
 * @param enforce Enforce plugin invocation tier similar to webpack loaders.
 */
interface PluginConfig {
    logging?: boolean;
    enforce?: Plugin["enforce"];
}
declare function espViteBuild(configParams?: PluginConfig): Plugin;

export { type PluginConfig, espViteBuild };
