/**khối 1: intput
 * khối 2:
    * B1: tạo hàm tính tổng 2 ký số 
    * B2 : gắn hàm vào sự kiện click button
    * b3 :trong hàm : lấy giá trị từ form
    * b4:trong hàm :lập công thức tinh toán
 *     +lấy hàng chục
 *        - lấy phần Nguyên trong phép chia 10
 *
 *     +lấy hàng đơn vị
          - lấy phần dư trong phép chia 10
 *        
 * khối 3: output
 * tổng của 2 ký số
 */
          function tinhTong() {
            var so2Chuso=document.getElementById("number").value
            var ten= Math.floor(so2Chuso / 10);
            var unit = so2Chuso % 10;
            var total= ten + unit;
            document.getElementById("txtThongbao4").innerHTML="Tổng bằng  : " + total;
        }
        document.getElementById("btnTinh4").onclick = tinhTong;