/**
 * ============================================================================
 * MELI NETWORK — NHẬN THÔNG TIN TỪ BIỂU MẪU LIÊN HỆ
 * ----------------------------------------------------------------------------
 * Mỗi lần khách gửi biểu mẫu trên www.melinetwork.vn, script này sẽ:
 *   1. Ghi thêm một dòng vào trang tính "Khách hàng" của Google Sheet này
 *   2. Gửi email thông báo về Gmail của bạn
 *
 * Cách cài: xem google-apps-script/HUONG-DAN.md
 * ==========================================================================*/

// ▼ BẮT BUỘC: dán mã bí mật vào giữa hai dấu nháy. Phải GIỐNG HỆT biến
//   GOOGLE_SHEET_SECRET khai báo trên Vercel. Mã này chặn người lạ gửi rác
//   thẳng vào bảng tính của bạn.
const SECRET = 'DAN_MA_BI_MAT_VAO_DAY';

// ▼ Email nhận thông báo. Để trống = gửi về chính tài khoản Google đang sở
//   hữu bảng tính này. Nhiều người nhận thì cách nhau bằng dấu phẩy.
const NOTIFY_TO = '';

const SHEET_NAME = 'Khách hàng';
const HEADERS = [
  'Thời gian', 'Họ và tên', 'Email', 'Điện thoại',
  'Quan tâm', 'Nội dung', 'Ngôn ngữ', 'Trạng thái xử lý',
];

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply({ ok: false, error: 'bad_json' });
  }
  if (data.secret !== SECRET) return reply({ ok: false, error: 'forbidden' });

  // Khoá để hai khách gửi cùng lúc không ghi đè dòng của nhau
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const time = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm');
    getSheet().appendRow([
      time,
      cell(data.name), cell(data.email), cell(data.phone),
      cell(data.topic), cell(data.message), cell(data.lang),
      'Mới',
    ]);
  } finally {
    lock.releaseLock();
  }

  try {
    sendMail(data);
  } catch (err) {
    // Hết hạn mức gửi mail trong ngày thì dữ liệu vẫn đã nằm trong bảng
    console.error('Gửi email thất bại: ' + err);
  }
  return reply({ ok: true });
}

/** Chạy hàm này MỘT LẦN trong trình soạn thảo để cấp quyền và gửi thử. */
function chayThu() {
  getSheet();
  sendMail({
    name: 'Khách thử nghiệm',
    email: 'khach@example.com',
    phone: '0900 000 000',
    topic: 'Kiểm tra cài đặt',
    message: 'Nếu bạn nhận được email này thì đã cài đặt thành công.',
    lang: 'vi',
  });
}

function getSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = book.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold').setBackground('#e81123').setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, HEADERS.length, 160);
    sheet.setColumnWidth(6, 420);
  }
  return sheet;
}

function sendMail(d) {
  const to = NOTIFY_TO || Session.getEffectiveUser().getEmail();
  const rows = [
    ['Họ và tên', d.name], ['Email', d.email], ['Điện thoại', d.phone || '—'],
    ['Quan tâm', d.topic || '—'], ['Ngôn ngữ', d.lang || 'vi'],
  ];
  const html =
    '<div style="font-family:Arial,sans-serif;font-size:14px;color:#222">' +
    '<h2 style="margin:0 0 12px;color:#e81123">Liên hệ mới từ website Meli Network</h2>' +
    '<table style="border-collapse:collapse">' +
    rows.map(function (r) {
      return '<tr><td style="padding:4px 16px 4px 0;color:#777">' + r[0] +
        '</td><td style="padding:4px 0"><b>' + esc(r[1]) + '</b></td></tr>';
    }).join('') +
    '</table>' +
    '<p style="margin-top:16px;white-space:pre-wrap">' + esc(d.message) + '</p>' +
    '<p style="margin-top:20px;color:#999;font-size:12px">Bấm Trả lời để phản hồi thẳng cho khách. ' +
    'Toàn bộ danh sách nằm trong trang tính "' + SHEET_NAME + '".</p></div>';

  MailApp.sendEmail({
    to: to,
    subject: '[Website] ' + (d.name || 'Khách') + ' — ' + (d.topic || 'Liên hệ'),
    htmlBody: html,
    replyTo: d.email || undefined,
    name: 'Website Meli Network',
  });
}

/** Chặn chèn công thức: ô bắt đầu bằng = + - @ sẽ bị Sheets hiểu là công thức. */
function cell(v) {
  const s = String(v == null ? '' : v).slice(0, 4000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function esc(v) {
  return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
