let apiProductApi = new TempApi.ProductApi();import TempApi from '../src/index';document.getElementById('i53n').onclick = (event) => {
    event.preventDefault();
    { window.document.location = 'https://wabli.netlify.app/';}};document.getElementById('izgi1').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Count' ;}};document.getElementById('i16wk').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i16wk")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('iknyzh').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iknyzh")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/CountUpdate/' + transitionId;}};document.getElementById('ihf5uq').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ihf5uq")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('idyi7e').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("idyi7e")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/CountUpdate/' + transitionId;}};document.getElementById('if6wqm').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("if6wqm")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('ix6jqw').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ix6jqw")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/CountUpdate/' + transitionId;}};document.getElementById('iqgo3').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iqgo3")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('irmmx').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("irmmx")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/CountUpdate/' + transitionId;}};document.getElementById('ihyvs').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ihyvs")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('ixb8x').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ixb8x")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/CountUpdate/' + transitionId;}};document.getElementById('i7ctgj').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i7ctgj")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('iprlq9').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iprlq9")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/CountUpdate/' + transitionId;}};document.getElementById('ivf7wk').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ivf7wk")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('is61c3').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("is61c3")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/CountUpdate/' + transitionId;}};document.getElementById('i5k28l').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i5k28l")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('itrsaf').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("itrsaf")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/CountUpdate/' + transitionId;}};window.onload = () => {apiProductApi.getAllproduct((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iv3vc").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pImage']");
if(insideSubDataElement !== null && data[data.length -i -1].pImage !== undefined){
  insideSubDataElement.src = data[data.length -i -1].pImage.data;
  insideSubDataElement.name = data[data.length -i -1].pImage.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'pImage' && data[data.length -i -1].pImage !== undefined){
  subDataElements[i].src = data[data.length -i -1].pImage.data;
  subDataElements[i].name = data[data.length -i -1].pImage.name;
}
 } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'pSupplier']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'sName']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].pSupplier.sName;}} catch (e) {console.log(e);}; try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'sContact']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].pSupplier.sContact;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].pSupplier._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'pSupplier']"
          ).getAttribute("id"),
          data[data.length-i-1].pSupplier
        );
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};