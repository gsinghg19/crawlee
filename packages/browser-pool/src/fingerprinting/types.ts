import type { BrowserFingerprintWithHeaders as Fingerprint } from 'fingerprint-generator';

export interface FingerprintGenerator {
    getFingerprint: (fingerprintGeneratorOptions?: FingerprintGeneratorOptions) => GetFingerprintReturn;
}

export interface GetFingerprintReturn {
    fingerprint: Fingerprint;
}

export interface FingerprintGeneratorOptions {
    browsers?: BrowserName[] | BrowserSpecification[];
    operatingSystems?: OperatingSystemsName[];
    devices?: DeviceCategory[];
    locales?: string[];
}

export const enum BrowserName {
    chrome = 'chrome',
    firefox = 'firefox',
    safari = 'safari',
}

export interface BrowserSpecification {
    name: BrowserName;
    minVersion?: number;
    maxVersion?: number;
}

export const enum OperatingSystemsName {
    linux = 'linux',
    macos = 'macos',
    windows = 'windows',
}

export const enum DeviceCategory {
    mobile = 'mobile',
    desktop = 'desktop',
}
