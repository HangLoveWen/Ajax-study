$(function(){
    function pad(n){
        if(n<10){
            return "0"+n
        }else{
            return n
        }
    }
    template.defaults.imports.dataformat=function(date){
        var dt=new Date(date)
        var y=date.getFullYear()
        var x=pad(date.getMonth()+1)
        var d=pad(date.getDate())
        var hh=pad(date.getHours())
        var mm =pad(date.getMinutes())
        var ss=date.getSeconds()
        return y+"-"+x+"-"+d+" "+hh+":"+mm+":"+ss
    }
    function getnews(){
        $.get("http://www.liulongbin.top:3306/api/news",function(res){
            if(res.status!==200){
                return alert("获取新闻列表失败")
            }
            for(var i=0;i<res.data.length;i++){
                res.data[i].tags=res.data[i].tags.split(",")
            }
           var htmlstr= template('tpl-news',res)
           $("#new_list").html(htmlstr)
        })
    }
    getnews()
})