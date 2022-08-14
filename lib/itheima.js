function resolvedata(data){
    var arr=[]
    for(k in data){
        arr.push(k+"="+data[k])
    }
    return arr.join("&")
}
function itheima(options){
    var xhr=new XMLHttpRequest()
    var qs=resolvedata(options.data)//外界传递过来的参数对象转化为查询字符串
    if(options.method.toUpperCase()==="GET"){
        xhr.open("GET",options.url+"?"+qs)
        xhr.send()
    }else if(options.method.toUpperCase()==="POST"){
        xhr.open("POST",options.url)
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
        xhr.send(qs)
    }
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&xhr.status==200){
            var result=JSON.parse(xhr.responseText)
            options.success(result)        
        }
    }
}