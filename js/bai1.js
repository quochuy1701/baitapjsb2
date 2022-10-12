// Bài 1 
/**khối 1: intput
 * khối 2:
    * B1: tạo hàm tính lương
    * B2 : gắn hàm vào sự kiện click button
    * b3 :trong hàm : lấy giá trị từ form
    * b4:trong hàm :lập công thức tinh toán
 *      Lương = số ngày làm * lương 1 ngày
 *        
 * khối 3: output
 * tiền lương
 */
function tinhLuong() {
    var luong1Ngay=document.getElementById("luong1ngay").value
    var soNgaylam=document.getElementById("songaylam").value
    var luong= luong1Ngay * soNgaylam
    document.getElementById("txtThongbao").innerHTML="Lương : " +luong;
}
document.getElementById("btnTinh").onclick = tinhLuong ;