# Rebecca · Góc học tập | 学习空间

Workbench cá nhân dành cho Rebecca, với giao diện song ngữ Việt–Trung và tông hồng pastel.

## Sử dụng

Mở `index.html` bằng trình duyệt hiện đại hoặc phục vụ thư mục này bằng bất kỳ máy chủ web tĩnh nào. Không cần cài thư viện hay chạy bước build.

Website hiện tại: https://personal-workbench-calm-1104.fullpeace.chatgpt.site/

## Tính năng

- Bốn thẻ theo dõi giờ học, bài tập hoàn thành, mục tiêu tuần và chuỗi ngày học.
- Quản lý bài tập, ghi chú, mục tiêu và kho tài liệu.
- Hiển thị tiếng Trung giản thể cạnh tiếng Việt.
- Bộ đếm tập trung và phiên nghỉ 5 phút sau khi hoàn tất phiên học.
- Tìm kiếm bằng Ctrl/Cmd+K.
- Sao lưu và khôi phục bằng JSON.

### Lệnh nhanh

```text
/task Hoàn thành bài tập tiếng Anh trước 21 giờ
/note Ôn 10 từ vựng tiếng Anh trước khi ngủ
/timer 25
```

## Cấu trúc mã nguồn

| Tệp | Nội dung |
| --- | --- |
| `index.html` | Bố cục và nội dung giao diện |
| `styles.css` | Bố cục thích ứng và kiểu chữ |
| `theme.css` | Bảng màu hồng pastel |
| `app.js` | Bài tập, ghi chú, mục tiêu, lưu trữ và bộ đếm |
| `bilingual.js` | Bản dịch giao diện Việt–Trung |

## Lưu dữ liệu

Dữ liệu được lưu bằng localStorage trong trình duyệt trên từng thiết bị; không đồng bộ qua GitHub hay giữa các thiết bị. Dùng chức năng xuất bản sao lưu để giữ dữ liệu trước khi xóa bộ nhớ trình duyệt.

Các số liệu ban đầu và nội dung học tập được Rebecca cung cấp. Các bản dịch giao diện có sẵn không tự dịch mọi ghi chú mới do người dùng nhập.

Google Fonts được tải khi có kết nối mạng; trình duyệt dùng phông dự phòng nếu không tải được.
