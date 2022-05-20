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
import ProductPImage from './ProductPImage';
import Supplier from './Supplier';

/**
 * The Product model module.
 * @module model/Product
 * @version 1.0.0
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     * @param pImage {module:model/ProductPImage} 
     * @param pCount {Number} 
     * @param pSupplier {module:model/Supplier} 
     * @param pTitle {String} 
     */
    constructor(pImage, pCount, pSupplier, pTitle) { 
        
        Product.initialize(this, pImage, pCount, pSupplier, pTitle);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pImage, pCount, pSupplier, pTitle) { 
        obj['pImage'] = pImage;
        obj['pCount'] = pCount;
        obj['pSupplier'] = pSupplier;
        obj['pTitle'] = pTitle;
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('pImage')) {
                obj['pImage'] = ProductPImage.constructFromObject(data['pImage']);
            }
            if (data.hasOwnProperty('pCount')) {
                obj['pCount'] = ApiClient.convertToType(data['pCount'], 'Number');
            }
            if (data.hasOwnProperty('pSupplier')) {
                obj['pSupplier'] = ApiClient.convertToType(data['pSupplier'], Supplier);
            }
            if (data.hasOwnProperty('pTitle')) {
                obj['pTitle'] = ApiClient.convertToType(data['pTitle'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Product.prototype['_id'] = undefined;

/**
 * @member {module:model/ProductPImage} pImage
 */
Product.prototype['pImage'] = undefined;

/**
 * @member {Number} pCount
 */
Product.prototype['pCount'] = undefined;

/**
 * @member {module:model/Supplier} pSupplier
 */
Product.prototype['pSupplier'] = undefined;

/**
 * @member {String} pTitle
 */
Product.prototype['pTitle'] = undefined;






export default Product;

