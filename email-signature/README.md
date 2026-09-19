# Chữ ký email — Meli Network

Chữ ký HTML đồng bộ nhận diện với website: nền trắng, vạch đỏ thương hiệu, logo tile tối.

## Hai bản chữ ký

| File | Dùng cho |
|---|---|
| `chu-ky-ca-nhan.html` | Hộp thư cá nhân — `thanhtam@melinetwork.vn` |
| `chu-ky-cong-ty.html` | Hộp thư chung — `contact@melinetwork.vn`, `info@`, `hotro@`… |

Khác nhau ở khối đầu: bản cá nhân là **tên người + chức danh**, bản công ty là
**tên thương hiệu + định vị**. Phần còn lại giống hệt nhau để nhìn vào là biết cùng một nhà.

**Nhấp đúp vào file** để mở bằng trình duyệt. Trang hiện ra có bản xem trước, nút sao chép
và hướng dẫn cài cho Gmail / Outlook / Apple Mail. File tự chứa mọi thứ — không cần cài đặt,
không cần chạy server. Vừa là bản xem trước vừa là mã nguồn nên không bao giờ lệch nhau.

Logo nằm ở `../public/email/logo-meli.png`, phục vụ công khai tại
`https://www.melinetwork.vn/email/logo-meli.png`.

## Trạng thái nội dung

| Mục | Bản cá nhân | Bản công ty |
|---|---|---|
| Dòng chính | Nguyễn Thanh Tâm | MELI NETWORK |
| Dòng phụ | Founder & CEO | MCN · Agency Truyền thông · Thương mại số |
| Email | thanhtam@melinetwork.vn | contact@melinetwork.vn |
| Điện thoại | 0967 773 300 | 0559 476 329 |
| Website | www.melinetwork.vn | www.melinetwork.vn |
| Địa chỉ | — | **chưa có, dòng đang bị ẩn** |
| Link mạng xã hội | **chưa có — đang để `#`** | **chưa có — đang để `#`** |

Bốn link YouTube / TikTok / Facebook / LinkedIn ở cả hai bản đang trỏ vào `#`, bấm vào không
đi đâu cả. Mở file bằng trình soạn thảo, tìm ghi chú `▼ CẦN SỬA` rồi thay bằng địa chỉ thật.
Chưa có kênh nào thì xoá hẳn dòng đó — thà không có còn hơn có link chết.

Bản công ty có sẵn dòng địa chỉ nhưng đang ẩn bằng dấu comment. Có địa chỉ chính thức thì
xoá hai dấu ngoặc comment bao quanh rồi điền vào.

Số điện thoại hiển thị dạng nội địa nhưng link bấm gọi dùng dạng quốc tế (`tel:+84…`), để đối
tác nước ngoài bấm vào vẫn gọi được. Nếu đổi số, nhớ sửa **cả hai chỗ**.

## Hộp thư chung nhiều người cùng trực

Cài đặt chữ ký lưu theo **tài khoản đăng nhập**, không theo hộp thư. Nên nếu `contact@` được
nhiều nhân sự truy cập, mỗi người phải tự cài trên máy mình. Riêng Google Workspace, quản trị
viên có thể áp chữ ký cho cả tổ chức: Admin console → Apps → Gmail → Compliance → Append footer.

## Làm chữ ký cho người khác trong công ty

Copy `chu-ky-ca-nhan.html` thành file mới (ví dụ `chu-ky-nguyenvana.html`), đổi tên, chức danh,
email, điện thoại. Giữ nguyên phần còn lại để cả công ty đồng bộ một kiểu.

## Vì sao viết bằng `<table>` chứ không phải `<div>` + flexbox

Outlook trên Windows dựng HTML bằng engine của Microsoft Word, không hỗ trợ flexbox,
grid, CSS biến, font web hay file CSS ngoài. Gmail thì xoá thẻ `<style>` trong nhiều
trường hợp. Nên chữ ký email bắt buộc phải dùng bảng với style viết thẳng vào từng thẻ —
trông cổ nhưng là cách duy nhất hiển thị giống nhau trên mọi ứng dụng.

Vì lý do đó, đừng sửa cấu trúc bảng nếu không cần; chỉ sửa phần chữ bên trong.

## Vì sao logo để link thay vì nhúng vào email

Logo được tải từ `www.melinetwork.vn`. Cách này giúp thư nhẹ, không bị coi là tệp đính kèm,
và nếu sau này đổi logo thì chỉ cần thay file trên website — mọi email gửi đi sau đó tự cập nhật.

Đánh đổi: một số ứng dụng chặn ảnh mặc định sẽ hiện chữ "Meli Network" thay cho logo cho tới
khi người nhận bấm hiện ảnh. Đây là lý do toàn bộ tên, chức danh và thông tin liên hệ đều là
**chữ thật** chứ không nằm trong ảnh — chặn ảnh thì chữ vẫn đọc được đầy đủ.

> ⚠️ Đừng xoá hoặc đổi tên `public/email/logo-meli.png`. Mọi email đã gửi đi đều trỏ tới
> đường dẫn đó; xoá file là logo trong các thư cũ biến mất theo.

## Kiểm tra sau khi cài

Tự gửi cho mình một email rồi mở bằng điện thoại. Cần thấy: logo hiện đúng, vạch đỏ thẳng
hàng, và bấm được vào email / số điện thoại / website.
