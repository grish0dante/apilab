# DefaultApi

All URIs are relative to *https://api.finance-app.local/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountsGet**](#accountsget) | **GET** /accounts | Get list of accounts|
|[**accountsPost**](#accountspost) | **POST** /accounts | Create account|
|[**transactionsPost**](#transactionspost) | **POST** /transactions | Perform transaction|

# **accountsGet**
> accountsGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.accountsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsPost**
> accountsPost(accountInput)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AccountInput
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accountInput: AccountInput; //

const { status, data } = await apiInstance.accountsPost(
    accountInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountInput** | **AccountInput**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Account created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionsPost**
> transactionsPost(transactionInput)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TransactionInput
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let transactionInput: TransactionInput; //

const { status, data } = await apiInstance.transactionsPost(
    transactionInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionInput** | **TransactionInput**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Transaction successful |  -  |
|**400** | Insufficient funds or invalid data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

