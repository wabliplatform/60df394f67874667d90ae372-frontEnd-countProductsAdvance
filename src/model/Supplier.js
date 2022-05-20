/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Supplier model module.
 * @module model/Supplier
 * @version 1.0.0
 */
class Supplier {
    /**
     * Constructs a new <code>Supplier</code>.
     * @alias module:model/Supplier
     * @param sName {String} 
     * @param sContact {String} 
     */
    constructor(sName, sContact) { 
        
        Supplier.initialize(this, sName, sContact);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sName, sContact) { 
        obj['sName'] = sName;
        obj['sContact'] = sContact;
    }

    /**
     * Constructs a <code>Supplier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Supplier} obj Optional instance to populate.
     * @return {module:model/Supplier} The populated <code>Supplier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Supplier();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('sName')) {
                obj['sName'] = ApiClient.convertToType(data['sName'], 'String');
            }
            if (data.hasOwnProperty('sContact')) {
                obj['sContact'] = ApiClient.convertToType(data['sContact'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Supplier.prototype['_id'] = undefined;

/**
 * @member {String} sName
 */
Supplier.prototype['sName'] = undefined;

/**
 * @member {String} sContact
 */
Supplier.prototype['sContact'] = undefined;






export default Supplier;

