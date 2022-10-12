// Bài 1 
/**khối 1: intput
 * khối 2:
    * B1: tạo hàm quy đổi tiền
    * B2 : gắn hàm vào sự kiện click button
    * b3 :trong hàm : lấy giá trị từ form
    * b4:trong hàm :lập công thức tinh toán
 *      quyDoitien= số tiền USD * 23500
 *        
 * khối 3: output
 * tien quy đổi
 */
 function quyDoitien() {
    var soTienUSD=document.getElementById("sotienUSD").value
    var quyDoi= Number(soTienUSD) * 23500
    document.getElementById("txtThongbao2").innerHTML="Lương : " +quyDoi.toLocaleString() + "VND";
}
document.getElementById("btnTinh2").onclick = quyDoitien ;