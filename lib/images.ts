/* ============================================================================
 * TRUNG TÂM QUẢN LÝ ẢNH
 * ----------------------------------------------------------------------------
 * Để trống ("") => website tự vẽ một hình nền trừu tượng đỏ/đen thay thế.
 * Muốn dùng ảnh thật: bỏ ảnh vào thư mục `public/` rồi điền đường dẫn vào đây.
 * Ví dụ:  hero: "/images/hero.jpg"
 * Kích thước gợi ý ghi ngay cạnh mỗi dòng.
 * ==========================================================================*/

export const images = {
  hero: "",        // 1200 × 1500 (dọc 4:5) — ảnh ekip / studio / creator đang quay
  about: "",       // 1200 × 900  (ngang 4:3) — ảnh văn phòng hoặc buổi họp nội dung
  culture: "",     //  900 × 1100 (dọc)       — ảnh đội ngũ Meli
  cultureAlt: "",  //  900 × 700  (ngang)     — ảnh hoạt động nội bộ / team building
  // Bảng ghi rõ ảnh "số liệu minh chứng" kích thước 596 × 372 px — khớp đúng
  // khung 16:10 của thẻ dự án, nên thả vào là vừa khít, không bị cắt.
  cases: [
    "/images/cases/1-gmv-tiktok-shop.png",   // ẢNH 1 — bảng chỉ số GMV TikTok Shop
    "/images/cases/2-phanh-pheo-luu-ky.png", // ẢNH 2 — kênh Phanh phéo lưu ký
    "/images/cases/3-bau-troi-tich-cuc.png", // ẢNH 3 — kênh Bầu trời tích cực
    "/images/cases/4-kiot-khoi.png",         // ẢNH 4 — kênh Kiot khói
  ],
} as const;
