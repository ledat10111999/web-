function catchEvent(){
    function deletePost(){
        $('#deletepost').click(function(e){
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
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
    deletePost();
}
$(document).ready(function(){
    new catchEvent();
})