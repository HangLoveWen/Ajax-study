$(function(){
    $("#btnsend").on("click",function(){
        var text=$("#ipt").val().trim()
        if(text.length<=0){
            return $("#ipt").val("") 
        }
        $("#talk_list").append('<li class="right_word"><img src="聊天机器人/img/person02.png"/><span>'+text+'</span></li>')
        $("#ipt").val("")
        getmsg(text)
    })
    function getmsg(text){
        $.ajax({
            method:"GET",
            url:" https://ajax-base-api-t.itheima.net/api/robot",
            data:{
                spoken:text
            },
            success:function(res){
                if(res.message==="success"){
                    var message=res.data.info.text()
                    console.log(message);
                    $("#talk_list").append('<li class="left_word"><img src="聊天机器人/img/person01.png" /><span>'+message+'</span></li>')
                    getvoice(text)
                }
            }
        })
    }
    function getvoice(text){
        $.ajax({
            method:"GET",
            url:"https://ajax-base-api-t.itheima.net/api/synthesize",
            data:{
                text:text
            },
            success:function(res){
                if(res.status===200){
                    $("#voice").attr("src",res.voiceUrl)
                }
            }
        })
    }
    $("#ip").on("keyup",function(e){
       if(e.KeyCode==13){
        $("#btnsend").click()
       }
    })
}) 
