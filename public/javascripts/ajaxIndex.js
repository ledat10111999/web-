

function _Event(){
    function catchEven(){
        $('#selectCity').children().remove();
        $('#selectCity').click(function(e){
         
            // $('#selectCity').append( " <option selected>Tỉnh thành</option>")
            // $('#selectCity').children().remove()
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            $.ajax({
                url: base_url + '/index3',
                dataType:'json',
                success: function(res){
                    if(res || res.statuscode == 200){
                        $('#selectCity').append("<option selected >Tỉnh thành</option>")    
                        for(var i = 0 ; i< res.cities.length;i++){
                            $('#selectCity').append("<option value="+"'" + res.cities[i].tenTp +"'"+">"+res.cities[i].tenTp+"</option>");
                        }  
                    }
                      
                }
            })
            
        })
    }
    catchEven()
}

$(document).ready(function(){
    new _Event();
})