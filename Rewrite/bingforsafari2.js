var modifiedHeaders = $request.headers;

modifiedHeaders['User-Agent'] = Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1';



$done({headers : modifiedHeaders});
