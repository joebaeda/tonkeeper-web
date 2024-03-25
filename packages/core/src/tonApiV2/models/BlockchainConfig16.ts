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
 * The limits on the number of validators in the TON blockchain.
 * @export
 * @interface BlockchainConfig16
 */
export interface BlockchainConfig16 {
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig16
     */
    maxValidators: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig16
     */
    maxMainValidators: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig16
     */
    minValidators: number;
}

/**
 * Check if a given object implements the BlockchainConfig16 interface.
 */
export function instanceOfBlockchainConfig16(value: object): boolean {
    if (!('maxValidators' in value)) return false;
    if (!('maxMainValidators' in value)) return false;
    if (!('minValidators' in value)) return false;
    return true;
}

export function BlockchainConfig16FromJSON(json: any): BlockchainConfig16 {
    return BlockchainConfig16FromJSONTyped(json, false);
}

export function BlockchainConfig16FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig16 {
    if (json == null) {
        return json;
    }
    return {
        
        'maxValidators': json['max_validators'],
        'maxMainValidators': json['max_main_validators'],
        'minValidators': json['min_validators'],
    };
}

export function BlockchainConfig16ToJSON(value?: BlockchainConfig16 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'max_validators': value['maxValidators'],
        'max_main_validators': value['maxMainValidators'],
        'min_validators': value['minValidators'],
    };
}

