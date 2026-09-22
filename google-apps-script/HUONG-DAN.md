# Nhận liên hệ từ website vào Google Sheet + Gmail

Mỗi lần khách gửi biểu mẫu trên www.melinetwork.vn:

- một dòng mới được ghi vào trang tính **Khách hàng** (thời gian, họ tên, email, điện thoại,
  nhu cầu, nội dung, cột "Trạng thái xử lý" để bạn tự đánh dấu)
- một email thông báo được gửi về Gmail của bạn — bấm **Trả lời** là phản hồi thẳng cho khách

Hoàn toàn miễn phí. Giới hạn của Google: tài khoản Gmail thường gửi được 100 email/ngày,
Google Workspace 1.500 email/ngày. Vượt mức thì email thông báo dừng nhưng dữ liệu vẫn ghi
đủ vào bảng.

## Bước 1 — Tạo bảng tính và dán script

1. Vào https://sheets.new để tạo Google Sheet mới, đặt tên, ví dụ **Meli — Khách hàng liên hệ**
2. Menu **Tiện ích mở rộng → Apps Script**
3. Xoá hết nội dung có sẵn, dán toàn bộ file `lien-he.gs`
4. Ở dòng `const SECRET = 'DAN_MA_BI_MAT_VAO_DAY';` thay bằng mã bí mật của bạn
   (một chuỗi ngẫu nhiên dài, chỉ chữ và số). Ghi lại mã này — bước 3 cần dùng
5. Bấm biểu tượng 💾 để lưu

## Bước 2 — Cấp quyền và chạy thử

1. Ở ô chọn hàm phía trên, chọn **chayThu**, bấm **Chạy**
2. Google hỏi quyền: **Xem xét quyền** → chọn tài khoản → **Nâng cao** →
   **Đi tới … (không an toàn)** → **Cho phép**
   (Cảnh báo "không an toàn" là bình thường vì đây là script bạn tự tạo, chưa qua Google duyệt)
3. Kiểm tra: bảng tính có thêm trang **Khách hàng**, và Gmail nhận được một email thử

## Bước 3 — Xuất bản thành ứng dụng web

1. **Triển khai → Tùy chọn triển khai mới**
2. Bánh răng ⚙ → **Ứng dụng web**
3. **Thực thi dưới tên**: *Tôi*  ·  **Người có quyền truy cập**: *Bất kỳ ai*
4. **Triển khai** → sao chép **URL ứng dụng web** (dạng `https://script.google.com/macros/s/…/exec`)

"Bất kỳ ai" ở đây nghĩa là máy chủ website gọi được vào script mà không cần đăng nhập.
Người ngoài không đọc được bảng tính, và không có mã bí mật thì không ghi được gì.

## Bước 4 — Khai báo trên Vercel

Vercel → project **melinetwork** → **Settings → Environment Variables**, thêm:

| Tên biến | Giá trị |
|---|---|
| `GOOGLE_SHEET_WEBHOOK_URL` | URL ứng dụng web ở bước 3 |
| `GOOGLE_SHEET_SECRET` | mã bí mật ở bước 1 (giống hệt) |

Rồi **Deployments** → **⋯** ở bản mới nhất → **Redeploy**.

## Sửa script về sau

Mỗi lần sửa script phải **Triển khai → Quản lý các lần triển khai → ✏ → Phiên bản: Mới →
Triển khai** thì thay đổi mới có hiệu lực. URL giữ nguyên, không phải sửa lại trên Vercel.

## Khi có lỗi

Nếu script lỗi hoặc sai mã bí mật, biểu mẫu trên website báo "Gửi chưa thành công" để khách
biết mà liên hệ qua email khác — chứ không báo thành công giả. Nội dung khách gửi vẫn được ghi
vào Vercel → Logs làm bản dự phòng.
