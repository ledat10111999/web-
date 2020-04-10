
function updatePost() {
    function catchEvent() {
        $('#update').click(function (e) {
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            var parmams = {
                ID: $('#valID').val(),
                tenTp: $('#selectCity').val(),
                tenQuan: $('#selectDistric').val(),
                tenPhuong: $('#selectWard').val(),
                tenDuong: $('#selectStreet').val(),
                soNha: $('#numberaddress').val(),
                DiaChiChinhXac: $('#excelentAddress').val(),
                ThongTinMoTa: $('#ThongTinMoTa').val(),
                DienTich: $('#Acreage').val(),
                TieuDe: $('#infoTitle').val(),
                NoiDung: $('#infoContent').val(),
                DoiTuongChoThue: $('#doituong').val(),
                Gia: $('#gia').val(),
                SDT: $('#phoneNumber').val()
            }
            $.ajax({
                url: base_url + '/updatePost',
                method: 'PUT',
                dataType: 'json',
                data: parmams,
                success: function (res) {
                    if (res || res.statusCode == 200) {
                        alert("Cập nhật thành công");
                        location = base_url + '/DangTin/post/' + parmams.ID;
                    } else {
                        alert(res.err);
                    }
                }
            })
        })
    }
    catchEvent();
}
$(document).ready(function () {
    new updatePost();
})