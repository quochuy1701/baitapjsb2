
/**khối 1: intput
 * khối 2:
    * B1: tạo hàm tính diện tích và chu vi
    * B2 : gắn hàm vào sự kiện click button
    * b3 :trong hàm : lấy giá trị từ form
    * b4:trong hàm :lập công thức tinh toán
 *      diện tích = chiều dài * chiều rộng
 *      chu vi = (chiều dài + chiều rộng)*2
 *        
 * khối 3: output
 *diện tích và chu vi
 */
 function tinh() {
    var chieuDai=document.getElementById("chieudai").value
    var chieuRong=document.getElementById("chieurong").value
    var dienTich= chieuDai * chieuRong;
    var chuVi=(Number(chieuDai) + Number(chieuRong))*2
    document.getElementById("txtThongbao3").innerHTML="Diện Tích : " + dienTich + "; Chu vi :" + chuVi;
}
document.getElementById("btnTinh3").onclick = tinh;
