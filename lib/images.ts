/* ============================================================================
 * TRUNG TÂM QUẢN LÝ ẢNH
 * ----------------------------------------------------------------------------
 * Để trống ("") => website tự vẽ một hình nền trừu tượng đỏ/đen thay thế.
 * Muốn dùng ảnh thật: bỏ ảnh vào thư mục `public/` rồi điền đường dẫn vào đây.
 * Ví dụ:  hero: "/images/hero.jpg"
 * Kích thước gợi ý ghi ngay cạnh mỗi dòng.
 * ==========================================================================*/

export const images = {
  hero: "/images/hero.webp",                         // 1254 × 1254 (vuông) — cái bắt tay qua màn hình
  about: "/images/doi-ngu-meli.webp",                // 1024 × 1536 (dọc 2:3) — đội ngũ chụm tay
  // Khối "Con người Meli" nay không dùng ảnh. Hai file dưới vẫn nằm trong
  // public/images/ nếu sau này cần dùng lại:
  //   founder-nguyen-thanh-tam.jpg (914 × 1218) — chân dung Founder
  //   doi-ngu-meli.jpg             (1413 × 795) — đội ngũ & cộng đồng
  // Ảnh gốc 596 × 372 px đã được phóng 1,6 lần và làm nét (954 × 595) để chữ
  // trong ảnh chụp màn hình không bị mờ trên màn hình Retina.
  cases: [
    "/images/cases/1-gmv-tiktok-shop.png",   // ẢNH 1 — bảng chỉ số GMV TikTok Shop
    "/images/cases/2-phanh-phieu-luu-ky.webp", // ẢNH 2 — kênh Phanh Phiêu Lưu Ký
    // ⚠️ CHỜ ẢNH: kênh Khói suyngam. Để trống thay vì dùng ảnh kênh khác —
    //    ảnh một kênh đặt cạnh chữ nói về kênh khác là sai lệch với người xem.
    "",                                      // ẢNH 3 — kênh Khói suyngam
    "/images/cases/4-livestream-kiot-khoi.webp", // ẢNH 4 — chỉ số phiên livestream Kiot Khói
  ],
} as const;
