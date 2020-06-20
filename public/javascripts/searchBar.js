function search() {
    function distric() {
        $("#selectCity").change(function (e) {
            var IDdis = $('#selectCity').val();
           
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            $.ajax({
                url: base_url + '/Distric',
                method: "POST",
                dataType: "json",
                data: {
                    tenTp: IDdis
                },
                success: function (res) {
                    if (res && res.statusCode == 200 && res.distric) {
                        $("#selectDistric").html(res.distric)
                    }

                }
            })
        })
    }
    function ward() {
        $('#selectDistric,#selectCity').change(function (e) {
            var province = $('#selectCity').val();
            var district = $('#selectDistric').val();
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            $.ajax({
                url: base_url + '/Ward',
                method: 'POST',
                dataType: 'json',
                data: {
                    tenTp: province,
                    tenQuan: district
                },
                success: function (res) {
                    if (res && res.statusCode == 200 && res.ward) {
                        $("#selectWard").html(res.ward)
                    }
                }
            })
        })
    }
    function street() {
        $('#selectDistric,#selectCity').change(function (e) {
            var province = $('#selectCity').val();
            var district = $('#selectDistric').val();
            var base_url = location.protocol + '//' + document.domain + ':' + location.port;
            $.ajax({
                url: base_url + '/street',
                method: 'POST',
                dataType: 'json',
                data: {
                    tenTp: province,
                    tenQuan: district
                },
                success: function (res) {
                    if (res && res.statusCode == 200 && res.ward) {
                        $("#selectStreet").html(res.ward)
                    }
                }
            })
        })
    }
    distric();
    ward();
    street();
   
    
}


$(document).ready(function () {
    new search();
})