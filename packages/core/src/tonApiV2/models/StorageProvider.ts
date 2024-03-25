/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface StorageProvider
 */
export interface StorageProvider {
    /**
     * 
     * @type {string}
     * @memberof StorageProvider
     */
    address: string;
    /**
     * 
     * @type {boolean}
     * @memberof StorageProvider
     */
    acceptNewContracts: boolean;
    /**
     * 
     * @type {number}
     * @memberof StorageProvider
     */
    ratePerMbDay: number;
    /**
     * 
     * @type {number}
     * @memberof StorageProvider
     */
    maxSpan: number;
    /**
     * 
     * @type {number}
     * @memberof StorageProvider
     */
    minimalFileSize: number;
    /**
     * 
     * @type {number}
     * @memberof StorageProvider
     */
    maximalFileSize: number;
}

/**
 * Check if a given object implements the StorageProvider interface.
 */
export function instanceOfStorageProvider(value: object): boolean {
    if (!('address' in value)) return false;
    if (!('acceptNewContracts' in value)) return false;
    if (!('ratePerMbDay' in value)) return false;
    if (!('maxSpan' in value)) return false;
    if (!('minimalFileSize' in value)) return false;
    if (!('maximalFileSize' in value)) return false;
    return true;
}

export function StorageProviderFromJSON(json: any): StorageProvider {
    return StorageProviderFromJSONTyped(json, false);
}

export function StorageProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): StorageProvider {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'],
        'acceptNewContracts': json['accept_new_contracts'],
        'ratePerMbDay': json['rate_per_mb_day'],
        'maxSpan': json['max_span'],
        'minimalFileSize': json['minimal_file_size'],
        'maximalFileSize': json['maximal_file_size'],
    };
}

export function StorageProviderToJSON(value?: StorageProvider | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'address': value['address'],
        'accept_new_contracts': value['acceptNewContracts'],
        'rate_per_mb_day': value['ratePerMbDay'],
        'max_span': value['maxSpan'],
        'minimal_file_size': value['minimalFileSize'],
        'maximal_file_size': value['maximalFileSize'],
    };
}

