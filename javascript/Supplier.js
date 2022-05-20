let apiSupplierApi = new TempApi.SupplierApi();import TempApi from '../src/index';let supplier = new TempApi.Supplier();document.getElementById('ir0lo').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Dashboard' ;}};document.getElementById('i7ads').onclick = (event) => {
    event.preventDefault();
    supplier['sName'] = document.querySelector("[annotationname = 'sName']").value;supplier['sContact'] = document.querySelector("[annotationname = 'sContact']").value;apiSupplierApi.createsupplier( supplier, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/Dashboard/'+response.body.query._id+'' ;}}});};window.onload = () => {};