# Chữ ký email — Meli Network

Chữ ký HTML đồng bộ nhận diện với website: nền trắng, vạch đỏ thương hiệu, logo tile tối.

## Cách dùng

**Nhấp đúp vào `chu-ky-meli.html`** để mở bằng trình duyệt. Trang hiện ra sẽ có bản xem trước,
nút sao chép và hướng dẫn cài cho Gmail / Outlook / Apple Mail.

File tự chứa mọi thứ — không cần cài đặt gì, không cần chạy server. Vừa là bản xem trước,
vừa là mã nguồn chữ ký, nên không bao giờ lệch nhau giữa hai bản.

Logo nằm ở `../public/email/logo-meli.png`, phục vụ công khai tại
`https://www.melinetwork.vn/email/logo-meli.png`.

## Cần sửa trước khi dùng

Mở `chu-ky-meli.html` bằng trình soạn thảo văn bản, tìm khối
`>>> BẮT ĐẦU CHỮ KÝ <<<` rồi sửa 3 chỗ có ghi chú `▼ THAY`:

1. **Họ và tên** — đang để *Nguyễn Thành Tâm*
2. **Chức danh** — đang để *Nhà sáng lập & Giám đốc điều hành*
3. **Số điện thoại** — đang để *+84 900 000 000*. Sửa **cả hai chỗ**: phần `tel:+84900000000`
   trong link và phần chữ hiển thị bên dưới

Ngoài ra thay 4 dấu `#` ở cuối khối chữ ký bằng link YouTube / TikTok / Facebook / LinkedIn thật.

Email `thanhtam@melinetwork.vn` và website đã điền sẵn, không cần sửa.

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
