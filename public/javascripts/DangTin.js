var socket = io.connect('http://localhost:3000');/*kết nối tới socket*/
    
function myFunction() {
     var x = document.getElementById('mySelect').value; /*lấy giá trị id "mySelect"*/
     
     socket.emit('takeSelect',x); /*gửi giá trị về socket*/
     
    socket.on("result",function(data){   /*lấy giá trọ khi socket xử lý xong*/
     $("#selectDis").children().remove(); /*xóa hết dữ liệu cũ của id "mySelct"*/
     
     var a = [];
        if(data.length == 0 || data == undefined){
 
         $("#selectDis").children().remove();
         $("#selectWard").children().remove();

         $("#selectDis").append('" <option selected>Quận huyện</option>"');
         $("#selectWard").append('" <option selected>Phường xã</option>"')
       
        }else if(data.length > 1 || data != undefined){
         $("#selectDis").append('" <option selected>Quận huyện</option>"');
         for(var i = 0 ; i< data.length; i++){
             a.push( data[i].tenQuan)
         $("#selectDis").append( "<option value="+"'" + a[i] +"'"+">"+a[i]+"</option>");
        }
        }      
    });
 }
function functionDis(){
 var y = document.getElementById('selectDis').value;
 
     socket.emit('selectDis',y);
     
    socket.on("updatewards",function(datas){
        var a =[];

        $("#selectWard").children().remove();

        if(datas.length == 0 || datas == undefined){
         $("#selectWard").children().remove();
         $("#selectWard").append('" <option selected>Phường xã</option>"')

        }else if(datas.length > 1 || datas != undefined){
         $("#selectWard").append('" <option selected>Phường xã</option>"')
         for(var i = 0 ; i< datas.length; i++){
             a.push(datas[i].tenPhuong)
         $("#selectWard").append( "<option value="+"'" + a[i] +"'"+">"+a[i]+"</option>");
        }
        }
    });
 }