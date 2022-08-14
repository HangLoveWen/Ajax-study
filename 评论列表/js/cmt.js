function getcommenlist(){
        $.ajax({
            method:"GET",
            url:"http://www.liulongbin.top:3306/api/cmtlist",
            data:{},
            success:function(res){
                if(res.status!==200){
                    return alert("获取评论失败！")
                }
                alert("获取评论成功！")
                var rows=[]
                $.each(res.data,function(i,item){
                    var str='<li class="list-group-item"><span class="badge" style="background-color: #f0ad4e">'+item.time+'</span><span class="badge" style="background-color: #5bc0de">'+item.username+'</span>'+item.content+'</li>'
                    rows.push(str)
                })
                $("#cmt-list").empty.append(rows.join(""))
            }
        })
}
getcommenlist
$(function(){
    $("#formaddcmt").on("submit",function(e){
        e.preventDefault();
        var data=$(this).serialize()
        $.post("http://www.liulongbin.top:3306/api/addcmt",data,function(res){
            if(res.status!==201){
                return alert("发表评论失败！")
            }
            getcommenlist()
            $("#formaddcmt")[0].reset()
        })
    })
})