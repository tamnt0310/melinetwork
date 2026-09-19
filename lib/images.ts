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
  cases: ["", "", "", ""], // 900 × 640 mỗi ảnh — ảnh đại diện từng dự án
} as const;
