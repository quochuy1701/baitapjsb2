// Bài 1 
/**khối 1: intput
 * khối 2:
    * B1: tạo hàm tính giá trị trung bình
    * B2 : gắn hàm vào sự kiện click button
    * b3 :trong hàm : lấy giá trị từ form
    * b4:trong hàm :lập công thức tinh toán
 *      giá trị trung bình = (số thứ 1 + số thứ 2 +số thứ 3 + số thứ 4 +số thứ 5)/5
 * 
 *        
 * khối 3: output
 * giá trị trung bình
 * 
 */
function giaTritrungbinh(){
    var number1=document.getElementById("num1").value
    var number2=document.getElementById("num2").value
    var number3=document.getElementById("num3").value
    var number4=document.getElementById("num4").value
    var number5=document.getElementById("num5").value
    var giaTritrungbinh= (Number(number1)+ Number(number2)+Number(number3)+Number(number4)+Number(number5))/5
    document.getElementById("txtThongbao1").innerHTML="Gía trị trung bình là : "+giaTritrungbinh;
}
document.getElementById("btnTinh1").onclick = giaTritrungbinh;