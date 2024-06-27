const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'


const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}


// fetch  => promise

export const tiger = async (options) => {

  const {url,...restOptions} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }


  const response = await fetch(url,restOptions);

  if(response.ok){
    response.data = await response.json();
  }

  return response;
}



const result = await tiger({url:ENDPOINT});

console.log( result );




// 나는 tiger.get(url) 처럼 쓰고 싶음! 그래서 아래처럼
tiger.get = (url, options) => {
  return tiger({url, ...options})
}

tiger.post = (url, body, options) => {
  return tiger({method:'POST',url, ...options, body:JSON.stringify(body)})
}
// 왜 바디에 JSON.stringify씀..? 그 fetch안에 .json 형태로 가져올 수 있다매

tiger.delete = (url, options) => {
  return tiger({method:'DELETE', url, ...options})
}

tiger.put = (url, options) => {
  return tiger({method:'PUT', url, body:JSON.stringify(body)})
}

tiger.patch = (url,body,options) => {
  return tiger({
    method:'PATCH',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}







// IIAFE

// (async function(){



  
  

// })()