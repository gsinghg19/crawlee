// For more information, see https://crawlee.dev/
import { CheerioCrawler, KeyValueStore, log, ProxyConfiguration } from 'crawlee';
import { router } from './routes.js';

const { startUrls = ['https://crawlee.dev'], debug } = await KeyValueStore.getInput() ?? {};

if (debug) {
    log.setLevel(log.LEVELS.DEBUG);
}

const crawler = new CheerioCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    // Be nice to the websites. Remove to unleash full power.
    maxConcurrency: 50,
    requestHandler: router,
});

await crawler.run(startUrls);
