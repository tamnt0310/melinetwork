/* ============================================================================
 * TRUNG TÂM QUẢN LÝ ẢNH
 * ----------------------------------------------------------------------------
 * Để trống ("") => website tự vẽ một hình nền trừu tượng đỏ/đen thay thế.
 * Muốn dùng ảnh thật: bỏ ảnh vào thư mục `public/` rồi điền đường dẫn vào đây.
 * Ví dụ:  hero: "/images/hero.jpg"
 * Kích thước gợi ý ghi ngay cạnh mỗi dòng.
 * ==========================================================================*/

export const images = {
  hero: "/images/hero.jpg",                          // 1000 × 1000 (vuông) — góc studio sản xuất
  about: "/images/so-do-he-sinh-thai.jpg",           //  903 × 677 (ngang 4:3) — sơ đồ hệ sinh thái
  // Khối "Con người Meli" nay không dùng ảnh. Hai file dưới vẫn nằm trong
  // public/images/ nếu sau này cần dùng lại:
  //   founder-nguyen-thanh-tam.jpg (914 × 1218) — chân dung Founder
  //   doi-ngu-meli.jpg             (1413 × 795) — đội ngũ & cộng đồng
  // Ảnh gốc 596 × 372 px đã được phóng 1,6 lần và làm nét (954 × 595) để chữ
  // trong ảnh chụp màn hình không bị mờ trên màn hình Retina.
  cases: [
    "/images/cases/1-gmv-tiktok-shop.png",   // ẢNH 1 — bảng chỉ số GMV TikTok Shop
    "/images/cases/2-phanh-pheo-luu-ky.jpg", // ẢNH 2 — kênh Phanh phéo lưu ký
    "/images/cases/3-bau-troi-tich-cuc.jpg", // ẢNH 3 — kênh Bầu trời tích cực
    "/images/cases/4-kiot-khoi.jpg",         // ẢNH 4 — kênh Kiot khói
  ],
} as const;
