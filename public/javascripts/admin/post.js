function catchEven(){
    del = ()=>{
        $("#delete").click(()=>{
            var ID = $('#ID').val();
            
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            $.confirm({
                title: 'Xác nhận',
                content: 'Xóa Bài Viết',
                buttons: {
                    Xóa: function () {
                        $.ajax({
                            url:base_url +"/admin/deletePost",
                            method:"DELETE",
                            dataType:'json',
                            data:{
                                ID:ID
                            },
                            success:function(res){
                                if(res&& res.statusCode == 200){
                                    $.alert('Đã xóa bài viết');
                                   location.reload();
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
    post = ()=>{
        $('#post').click(function(){
            var ID = $('#ID').val();
            
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            $.confirm({
                title: 'Xác nhận',
                content: 'Đăng bài',
                buttons: {
                    Đăng: function () {
                        $.ajax({
                            url:base_url +"/admin/PostUp",
                            method:"PUT",
                            dataType:'json',
                            data:{
                                ID:ID
                            },
                            success:function(res){
                                if(res&& res.statusCode == 200){
                                    $.alert('Bài viết đã được đăng',function(){
                                        location.reload();
                                    });
                                   
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
    del();
    post();
}
$(document).ready(function(){
    new catchEven();
})