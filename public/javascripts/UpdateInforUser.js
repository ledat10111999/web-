function catchEnven() {
    function updateFirstName() {
        $('#btn_FirstName').click(function () {
            var First_name = $('#First_name').val();
            if (First_name && First_name.length != 0) {
                var ID = $('#user-id').val();
                var base_url = location.protocol + '//' + document.domain + ':' + location.port;
                $.ajax({
                    url: base_url + '/updateFirstName',
                    method: 'PUT',
                    data: {
                        ID: ID,
                        First_name: First_name
                    },
                    dataType: "json",
                    success: function (res) {
                        if (res && res.statusCode == 200) {
                            
                            location.reload();
                        }
                    }

                })
            } else {       
 
                return;        
            }


        })
    }
    function updateLastName() {
        $('#btn_LastName').click(function () {
            var Last_name = $('#Last_name').val();
            console.log('vlik');

            if (Last_name && Last_name.length != 0) {
                var ID = $('#user-id').val();
                var base_url = location.protocol + '//' + document.domain + ':' + location.port;
                $.ajax({
                    url: base_url + '/updateLastName',
                    method: 'PUT',
                    data: {
                        ID: ID,
                        Last_name: Last_name
                    },
                    dataType: "json",
                    success: function (res) {
                        if (res && res.statusCode == 200) {
                            location.reload();
                        }else{
                            alert('Không thành công');
                        }
                    }

                })
            } else {
                return;
            }

        })
    }
    function updatePhoneNumber() {
        $('#btn_PhoneNumber').click(function () {
            var SDT = $('#PhoneNumber').val();
            if (SDT && SDT.length != 0) {
                var ID = $('#user-id').val();

                var base_url = location.protocol + '//' + document.domain + ':' + location.port;
                $.ajax({
                    url: base_url + '/updatePhoneNumber',
                    method: 'PUT',
                    data: {
                        ID: ID,
                        SDT: SDT
                    },
                    dataType: "json",
                    success: function (res) {
                        if (res && res.statusCode == 200) {
                            location.reload();
                        }else{
                            alert('Không thành công')
                        }
                    }

                })
            } else {
                return;
            }
        })
    }
    function updatePassWord(){
        $('#changepassword').click(function(){
            var oldpassword = $('#oldPassWord').val();
            var newpassword = $('#newPassWord').val();
            var renewpassword = $('#reNewPassWord').val();
            var ID = $('#user-id').val();
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            if(oldpassword.length !=0 && newpassword.length !=0 && newpassword == renewpassword){
                $.ajax({
                    url:base_url +'/ChangePass',
                    method:'put',
                    dataType:'json',
                    data:{
                        oldpassword:oldpassword,
                        newpassword:newpassword,
                        renewpassword:renewpassword,
                        ID:ID
                    },
                    success:(res)=>{
                        if(res && res.statusCode ==200){
                            alert("Thành công");
                        }else{
                            alert(res.err)
                        }
                    }    
                })
            }else{
                alert('Mat khau cu khong dung');
                location.reload();
                return;
            } 
        })
    }
    updateFirstName();
    updateLastName();
    updatePhoneNumber();
    updatePassWord();
}
$(document).ready(function () {
    new catchEnven();
})