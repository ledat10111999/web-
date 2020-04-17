function savePost(){
    function catchEvent (){
        $('#savepost').click(function(e){
            var IDuser = $("#IDuser").val();
            var IDpost = $("#IDpost").val();
            var parmam = {
                IDusers:IDuser,
                IDpost:IDpost
            }
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            $.ajax({
                url: base_url+ '/savePost' ,
                type: 'post',
                data:parmam,
                dataType:'json',
                success: function(res){
                    if(res || res.statusCode == 200){
                        $('#savepost').html('<li class="nav-item" id="deleteSavePost"><a href="#" class="nav-link font-weight-bold text-info"> Bỏ Lưu</a></li>');
                    }
                }
            })
        })
    }
    function Post(){
        $("#deleteSavePost").click(function(e){
            var IDuser = $("#IDuser").val();
            var IDpost = $("#IDpost").val();
            var parmam = {
                IDusers:IDuser,
                IDpost:IDpost
            }
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            $.ajax({
                url: base_url+ '/deleteSavePost' ,
                type: 'delete',
                data:parmam,
                dataType:'json',
                success: function(res){
                    if(res || res.statusCode == 200){
                            $('#deleteSavePost').html('<li class="nav-item" id="savepost"><a href="" class="nav-link font-weight-bold text-info"> Lưu bài</a></li>');
                    }
                }
            })  
        })  
    }
    
catchEvent();
Post();
}
$(document).ready(function () {
    new savePost();
})