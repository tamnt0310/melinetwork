# Meli Network — Landing Page

Landing page hồ sơ năng lực cho hệ sinh thái Meli Network (MCN · Agency Truyền thông · Thương mại số).
Song ngữ Việt – Anh, giao diện tối với tông đỏ – trắng thương hiệu.

Công nghệ: **Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript**.

---

## 1. Chạy thử trên máy

```bash
npm install
npm run dev
```

Mở http://localhost:3000

Kiểm tra bản build thật trước khi deploy:

```bash
npm run build && npm start
```

> ⚠️ Đừng chạy `npm run build` khi `npm run dev` đang bật — cả hai cùng ghi vào thư mục `.next` và sẽ gây lỗi.
> Nếu lỡ chạy, xoá `.next` rồi khởi động lại.

---

## 2. Đưa lên GitHub và deploy Vercel

```bash
git init
git add .
git commit -m "Meli Network landing page"
git branch -M main
git remote add origin https://github.com/<tài-khoản>/<tên-repo>.git
git push -u origin main
```

> ⚠️ **Vercel chặn deploy nếu Next.js dính lỗi bảo mật đã công bố.** Trước mỗi lần deploy lớn,
> chạy `npm audit` — nếu báo lỗi ở `next`, nâng phiên bản trong `package.json` rồi `npm install`.
> Dự án đang dùng `overrides` để ép `postcss` về bản đã vá vì Next ghim sẵn một bản cũ.

Trên [vercel.com](https://vercel.com): **Add New → Project → Import** repo vừa đẩy lên.
Vercel tự nhận diện Next.js, không cần cấu hình gì thêm. Bấm **Deploy**.

Gắn tên miền riêng: **Project → Settings → Domains → Add**.

---

## 3. Sửa nội dung chữ

**Toàn bộ chữ trên trang nằm trong một file duy nhất: [`lib/content.ts`](lib/content.ts)**

File có hai phần `vi` (tiếng Việt) và `en` (tiếng Anh) với cấu trúc giống hệt nhau —
sửa ở phần nào thì nhớ sửa phần còn lại tương ứng.

Mọi vị trí có ghi chú `⚠️ MẪU` là nội dung giả định tôi điền tạm, **cần thay bằng dữ liệu thật**:

| Vị trí | Nội dung cần thay |
|---|---|
| `hero.badge.value` | Năm thành lập (đang để "Since 2019") |
| `stats.items` | 4 con số năng lực (đang để 250+ / 1.2 tỷ / 180+ / 6) |
| `stats.note` | Mốc thời gian của số liệu |
| `about.body` | Câu chuyện hình thành thật của Meli |
| `cases.items` | 4 dự án tiêu biểu thật — **xin phép khách hàng trước khi nêu tên** |
| `partners.logos` | Danh sách đối tác thật |
| `partners.testimonial` | Trích dẫn, tên và chức danh người nhận xét thật |
| `culture.jobs.count` | Số vị trí đang tuyển |
| `contact.info` | Địa chỉ, email, hotline thật |
| `footer.socials` | Link YouTube / TikTok / Facebook / LinkedIn thật |
| `footer.company` | Tên pháp nhân và mã số thuế |

**Mẹo về xuống dòng tiếng Việt:** trong các tiêu đề tôi dùng ` ` (dấu cách không cho xuống dòng)
để từ ghép không bị tách đôi giữa hai dòng, ví dụ `"tăng trưởng bền vững"`.
Khi viết tiêu đề mới, cứ dùng dấu cách thường; chỉ thêm ` ` nếu thấy chữ bị ngắt xấu.

---

## 4. Thay ảnh

Hiện trang chưa dùng ảnh thật — mọi khung ảnh đang hiển thị một hình đồ hoạ trừu tượng
đỏ/đen do website tự vẽ, nên trang vẫn chỉn chu khi chưa có bộ ảnh.

Khi có ảnh thật:

1. Bỏ file ảnh vào thư mục `public/` (ví dụ `public/images/hero.jpg`)
2. Điền đường dẫn vào [`lib/images.ts`](lib/images.ts)

```ts
export const images = {
  hero: "/images/hero.jpg",
  about: "/images/van-phong.jpg",
  ...
};
```

Kích thước gợi ý (đã ghi sẵn trong file):

| Khung | Tỉ lệ | Kích thước đề xuất |
|---|---|---|
| `hero` | 4:5 dọc | 1200 × 1500 |
| `about` | 4:3 ngang | 1200 × 900 |
| `culture` | dọc | 900 × 1100 |
| `cultureAlt` | ngang | 900 × 700 |
| `cases[0..3]` | ~16:10 | 900 × 640 |

Nên nén ảnh xuống dưới ~300 KB mỗi tấm (dùng [squoosh.app](https://squoosh.app)) để trang tải nhanh.

---

## 5. Thay logo

Logo hiện là bản vẽ SVG mô phỏng biểu tượng "M" của Meli, nằm trong
[`components/Logo.tsx`](components/Logo.tsx).

Muốn dùng file logo gốc: bỏ file vào `public/logo.svg` rồi thay phần `<svg>…</svg>`
trong `LogoMark` bằng:

```tsx
return <img src="/logo.svg" alt="Meli Network" className={className} />;
```

Favicon nằm ở [`app/icon.svg`](app/icon.svg) — thay file này là xong.

### Logo đối tác

8 logo thật nằm trong `public/logos/`, khai báo tại `partners.logos` trong
[`lib/content.ts`](lib/content.ts). Thêm hoặc bớt thì sửa mảng đó, dải logo tự chạy lại.

Logo gốc là ảnh **nền trắng chữ đen** nên được đặt trên thẻ trắng bo góc — để thẳng lên nền
tối của web thì chữ đen sẽ chìm mất. Logo mới nên giữ đúng khổ **176 × 80 px** cho đồng bộ.

---

## 6. Nhận email từ biểu mẫu liên hệ

Mặc định, thông tin khách gửi được ghi vào log của Vercel (**Project → Logs**) — không mất lead,
nhưng phải vào xem thủ công.

Để nhận email tự động:

1. Đăng ký [resend.com](https://resend.com) (miễn phí 3.000 email/tháng), xác thực tên miền
2. Vào Vercel → **Settings → Environment Variables**, thêm 3 biến:

```
RESEND_API_KEY = re_xxxxxxxxxxxx
CONTACT_TO     = contact@melinetwork.vn
CONTACT_FROM   = website@melinetwork.vn
```

3. Deploy lại. Không cần sửa dòng code nào — [`app/api/contact/route.ts`](app/api/contact/route.ts)
   tự động chuyển sang gửi email khi thấy đủ 3 biến.

Biểu mẫu đã có sẵn: kiểm tra dữ liệu đầu vào, bẫy bot (trường ẩn), và nút bấm khoá khi đang gửi.

---

## 7. Đổi tên miền cho SEO

Website đang chạy tại **https://www.melinetwork.vn** (domain gốc `melinetwork.vn`
được Vercel 308-redirect về bản `www`).

Hằng số `SITE_URL` đã được đặt là `https://www.melinetwork.vn` trong 3 file dưới đây.
Nếu sau này đổi tên miền, sửa cả 3 cho khớp — và phải dùng đúng bản chính (bản **không**
bị redirect), vì Zalo và một số trình thu thập không theo redirect khi lấy ảnh xem trước:

- [`app/layout.tsx`](app/layout.tsx)
- [`app/sitemap.ts`](app/sitemap.ts)
- [`app/robots.ts`](app/robots.ts)

Ảnh hiển thị khi chia sẻ link (Facebook/Zalo/LinkedIn) được sinh tự động tại
[`app/opengraph-image.tsx`](app/opengraph-image.tsx) — xem trước tại `/opengraph-image`.
Muốn dùng ảnh thiết kế riêng: xoá file đó và đặt `app/opengraph-image.jpg` (1200 × 630).

---

## 8. Đổi màu thương hiệu

Bảng màu khai báo tập trung trong khối `@theme` ở đầu [`app/globals.css`](app/globals.css):

```css
--color-brand-500: #e81123;  /* đỏ chính */
--color-ink-950:   #07070a;  /* nền trang */
```

Sửa ở đây là toàn bộ trang đổi theo.

---

## 9. Cấu trúc thư mục

```
app/
  layout.tsx            Khung trang, font, thẻ SEO
  page.tsx              Thứ tự các khối trên landing page
  globals.css           Bảng màu, font, hiệu ứng dùng chung
  icon.svg              Favicon
  opengraph-image.tsx   Ảnh chia sẻ mạng xã hội (tự sinh)
  robots.ts, sitemap.ts SEO
  api/contact/route.ts  Xử lý biểu mẫu liên hệ
components/
  Header, Hero, Stats, About, Services,
  Cases, Partners, Culture, Contact, Footer
  Logo.tsx              Biểu tượng + chữ ký thương hiệu
  MediaSlot.tsx         Khung ảnh dùng chung (có nền dự phòng)
  Reveal.tsx            Hiệu ứng hiện dần khi cuộn
  SectionHeading.tsx    Tiêu đề mục dùng chung
lib/
  content.ts            ★ TOÀN BỘ NỘI DUNG SONG NGỮ
  images.ts             ★ Khai báo đường dẫn ảnh
  lang.tsx              Chuyển đổi VI / EN
```

---

## 10. Việc cần làm trước khi công bố

Đã xong:

- [x] Nội dung 5 khối chính, lấy từ bảng Google Sheets của Meli
- [x] Thông tin liên hệ thật (địa chỉ, email, điện thoại)
- [x] Pháp nhân và mã số thuế ở footer
- [x] 4 ảnh dự án tiêu biểu trong `public/images/cases/`
- [x] 8 logo đối tác thật trong `public/logos/`

Còn lại:

- [ ] **Dải 4 con số dưới hero vẫn là số mẫu** (250+ kênh · 1.2 tỷ view ·
      180+ chiến dịch · 6 nền tảng) — chủ dự án chọn giữ tạm, cần thay bằng
      số thật. Sửa ở `stats.items` trong `lib/content.ts`
- [ ] Tiêu đề hero, 3 giá trị văn hoá, số vị trí đang tuyển
- [ ] Ảnh hero, ảnh giới thiệu, ảnh đội ngũ (`lib/images.ts` còn để trống,
      website đang tự vẽ hình trừu tượng thay thế)
- [ ] Tên và chức danh người nói trong 3 trích dẫn đối tác
- [ ] Thay logo Meli bằng file gốc
- [ ] Cấu hình Resend để nhận email từ biểu mẫu
- [ ] Xin phép khách hàng trước khi đăng tên/logo của họ
- [ ] Gắn Google Analytics hoặc Meta Pixel nếu cần đo lường
- [ ] Chạy `npm audit` và xử lý hết cảnh báo trước khi deploy
