function catchEvent(){
    function deletePost(){
       
        $('#deletepost').click(function(e){
            var  base_url = location.protocol + '//' + document.domain + ':' + location.port;
            var ID = $('#IDpost').val();  
            $.confirm({
                title: 'Xác nhận',
                content: 'Xóa Bài Viết',
                buttons: {
                    Xóa: function () {
                        $.ajax({
                            url:base_url +"/deletePost",
                            method:"DELETE",
                            dataType:'json',
                            data:{
                                ID:ID
                            },
                            success:function(res){
                                if(res&& res.statusCode == 200){
                                    $.alert('Đã xóa bài viết');
                                    
                                }
                                location = base_url;
                            }
                        })
                        
                    },
                    Hủy: function () {
                        return
                    }
                }
            });
        })
    }
    function status(){
        $("#updatestatus").click(()=>{
           var IDpost =  $("#IDpost").val();
           var  base_url = location.protocol + '//' + document.domain + ':' + location.port;
           $.confirm({
            title: 'Xác nhận',
            content: 'Cập nhật tình trạng thuê',
            buttons: {
                "Cập nhật": function () {
                    $.ajax({
                        url:base_url +"/updatestatus",
                        method:"POST",
                        dataType:'json',
                        data:{
                            ID:IDpost
                        },
                        success:function(res){
                            if(res&& res.statusCode == 200){
                                
                                $.alert('Cập nhật bài viết thành công');
                                document.querySelector("#btnstatus").textContent = "Đã cho thuê";
                                $("#updatestatus").attr('id','status');
                            }
                            
                        }
                    })
                    
                },
                Hủy: function () {
                    return
                }
            }
        });
        })
    }
    function updatestatus(){
        $('#status').click(()=>{
            var IDpost =  $("#IDpost").val();
            var  base_url = location.protocol + '//' + document.domain + ':' + location.port;
            $.confirm({
             title: 'Xác nhận',
             content: 'Cập nhật tình trạng thuê',
             buttons: {
                 "Cập nhật": function () {
                     $.ajax({
                         url:base_url +"/status",
                         method:"POST",
                         dataType:'json',
                         data:{
                             ID:IDpost
                         },
                         success:function(res){
                             if(res&& res.statusCode == 200){
                                 
                                 $.alert('Cập nhật bài viết thành công');
                                 document.querySelector("#btnnewstatus").textContent = "Đang cho thuê";
                                 $("#status").attr('id','updatestatus');
                             }
                             
                         }
                     })
                     
                 },
                 Hủy: function () {
                     return
                 }
             }
         });
        });
    }
    status();
    deletePost();
    updatestatus();
}
$(document).ready(function(){
    new catchEvent();
})