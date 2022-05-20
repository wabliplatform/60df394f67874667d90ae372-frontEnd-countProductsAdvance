# TempApi.SupplierApi

All URIs are relative to *http://83.212.100.226:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createsupplier**](SupplierApi.md#createsupplier) | **POST** /supplier | Creates the data
[**deletesupplier**](SupplierApi.md#deletesupplier) | **DELETE** /supplier/{supplierId} | Delete the element
[**getAllsupplier**](SupplierApi.md#getAllsupplier) | **GET** /supplier/getAll | Get all the data
[**getsupplier**](SupplierApi.md#getsupplier) | **GET** /supplier/{supplierId} | Get the element
[**updatesupplier**](SupplierApi.md#updatesupplier) | **PUT** /supplier/{supplierId} | Updates the element



## createsupplier

> Supplier createsupplier(supplier)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SupplierApi();
let supplier = new TempApi.Supplier(); // Supplier | data to be created
apiInstance.createsupplier(supplier, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**Supplier**](Supplier.md)| data to be created | 

### Return type

[**Supplier**](Supplier.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletesupplier

> deletesupplier(supplierId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SupplierApi();
let supplierId = "supplierId_example"; // String | the Id parameter
apiInstance.deletesupplier(supplierId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllsupplier

> [Supplier] getAllsupplier()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SupplierApi();
apiInstance.getAllsupplier((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Supplier]**](Supplier.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getsupplier

> Supplier getsupplier(supplierId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SupplierApi();
let supplierId = "supplierId_example"; // String | the Id parameter
apiInstance.getsupplier(supplierId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **String**| the Id parameter | 

### Return type

[**Supplier**](Supplier.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatesupplier

> Supplier updatesupplier(supplierId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SupplierApi();
let supplierId = "supplierId_example"; // String | the Id parameter
let opts = {
  'supplier': new TempApi.Supplier() // Supplier | data to be updated
};
apiInstance.updatesupplier(supplierId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplierId** | **String**| the Id parameter | 
 **supplier** | [**Supplier**](Supplier.md)| data to be updated | [optional] 

### Return type

[**Supplier**](Supplier.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

