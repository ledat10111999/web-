function signout(){
    function catchEvent(){
        $('#signout').click(function(e){
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            $.ajax({
                url:  base_url+ '/logout',
                type : 'DELETE',
                dataType:"json",
                success:function(res){
                    if(res && res.statusCode == 200){
                        location.reload();
                    }
                }  
            })
        })
    }
    catchEvent();
}
$(document).ready(function(){
    new signout();
})