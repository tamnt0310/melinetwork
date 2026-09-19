# Chữ ký email — Meli Network

Chữ ký HTML đồng bộ nhận diện với website: nền trắng, vạch đỏ thương hiệu, logo tile tối.

## Cách dùng

**Nhấp đúp vào `chu-ky-meli.html`** để mở bằng trình duyệt. Trang hiện ra sẽ có bản xem trước,
nút sao chép và hướng dẫn cài cho Gmail / Outlook / Apple Mail.

File tự chứa mọi thứ — không cần cài đặt gì, không cần chạy server. Vừa là bản xem trước,
vừa là mã nguồn chữ ký, nên không bao giờ lệch nhau giữa hai bản.

Logo nằm ở `../public/email/logo-meli.png`, phục vụ công khai tại
`https://www.melinetwork.vn/email/logo-meli.png`.

## Trạng thái nội dung

| Mục | Giá trị |
|---|---|
| Họ và tên | Nguyễn Thanh Tâm |
| Chức danh | Founder & CEO |
| Email | thanhtam@melinetwork.vn |
| Điện thoại | 0967 773 300 |
| Website | www.melinetwork.vn |
| **Link mạng xã hội** | **chưa có — đang để `#`** |

Bốn link YouTube / TikTok / Facebook / LinkedIn ở cuối chữ ký đang trỏ vào `#`, bấm vào
không đi đâu cả. Mở `chu-ky-meli.html` bằng trình soạn thảo, tìm ghi chú `▼ CẦN SỬA`
rồi thay bằng địa chỉ thật. Chưa có kênh nào thì xoá hẳn dòng đó — thà không có còn hơn
có link chết.

Số điện thoại hiển thị dạng nội địa `0967 773 300` nhưng link bấm gọi dùng dạng quốc tế
`tel:+84967773300`, để đối tác nước ngoài bấm vào vẫn gọi được. Nếu đổi số, nhớ sửa **cả hai**.

## Làm chữ ký cho người khác trong công ty

Copy `chu-ky-meli.html` thành file mới (ví dụ `chu-ky-nguyenvana.html`), đổi tên, chức danh,
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
