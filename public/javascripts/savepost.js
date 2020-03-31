function savePost(){
    function catchEvent (){
        $('#savepost').click(function(e){
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            $.ajax({
                url: base_url+ '/',
                type: 'PUT',
                dataType:'json',
                success: function(res){
                    
                }
            })
        })
    }
}