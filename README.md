# Học Đầu Tư Chứng Khoán

Web quản lý việc học. Dữ liệu lưu trong `data.json` của repo private này (đọc/ghi qua GitHub API).

## Cách dùng
1. Mở `index.html` trên máy tính bằng trình duyệt (Chrome/Edge).
2. Tab **Cài đặt GitHub**: nhập `hoanglap040205/Invest` và Fine-grained token
   (chỉ chọn repo `Invest`, quyền Contents: Read and write).

Mỗi thay đổi sẽ tự động commit vào `data.json`, nên lịch sử học tập được lưu trong git.

## Bài học
- `lessons/m1.js` … `m4.js`: 112 buổi học (16 tuần × 7 buổi), có hình minh họa SVG, ví dụ và quiz.
- `lessons/refs.js`: sách và tài liệu tham khảo theo tuần.
- Quy định thị trường đối chiếu với nguồn chính thức tại thời điểm 10/2026; có thể thay đổi, hãy kiểm tra lại với CTCK/HOSE.
- Tab **Cài đặt** → "Ngày bắt đầu học" để web tự gợi ý bài theo lịch.

## Muốn xem trên điện thoại sau này
Tạo thêm repo public `invest-study` chỉ chứa `index.html` và bật GitHub Pages,
chuyển dữ liệu sang repo private riêng (ví dụ `invest-study-data`) rồi nhập tên repo đó ở tab Cài đặt.
