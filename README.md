# Khu Bảo tồn Thiên nhiên – Văn hóa Đồng Nai

Website giới thiệu riêng khu bảo tồn, thiết kế lại từ nội dung tài liệu “KHU DTSQ ĐỒNGNAI” và bộ ảnh người dùng cung cấp qua anh1.docx, anh2.docx. Người dùng đã xác nhận ảnh thuộc địa điểm này. Chưa xác định tên từng vị trí nhỏ, công trình hay từng loài trong ảnh.

## Chạy và xuất bản

Node.js 24, npm 11.

```sh
npm ci --cache /workspace/.npm
npm run dev
npm run build
```

Vite development ở cổng 5175. Build tạo dist. Netlify đọc netlify.toml: npm run build, publish dist. Có thể import kho ngokhoi326-prog/dulich, nhánh main. Netlify cần tài khoản người dùng; đẩy Git không xác nhận đã deploy nếu chưa kiểm tra Netlify. ZIP tải thủ công: downloads/dong-nai-netlify.zip (nội dung build nằm ngay gốc ZIP).

## Nội dung và phạm vi số liệu

- Chủ đề duy nhất: Khu Bảo tồn Thiên nhiên – Văn hóa Đồng Nai. Không còn danh mục địa điểm toàn tỉnh, lịch trình Cát Tiên, Bửu Long, Giang Điền.
- Tài liệu ghi 100.571 ha cho phần khu bảo tồn trong vùng lõi.
- 756.000 ha, năm công nhận 2011, 2.353 loài thực vật, 2.061 loài động vật, 55 loài thực vật trong Sách đỏ Việt Nam và ba vùng chức năng đều được trình bày đúng phạm vi toàn Khu dự trữ sinh quyển Đồng Nai; không gán làm số liệu riêng của khu bảo tồn.
- Chức năng bảo tồn, phát triển, hỗ trợ và các nội dung văn hóa, giáo dục được biên tập từ tài liệu. Không bổ sung tên di tích, giờ hoạt động, giá vé hay thông tin liên hệ chưa xác nhận.
- Website giới thiệu độc lập, chưa có đặt vé, tour hoặc thanh toán.

## Chức năng

Menu di động; tab ba trụ cột và phân vùng; thư viện 10 ảnh lọc theo chủ đề; lightbox có phím mũi tên, Escape và quản lý focus; danh sách chuẩn bị lưu localStorage và xuất TXT; FAQ có đóng/mở; Google Maps tìm khu bảo tồn. Ảnh WebP cục bộ, bản nhỏ cho thư viện; tải lười và kích thước xác định. Hiệu ứng FadeContent từ React Bits, tắt khi prefers-reduced-motion.

## Tài nguyên

11 ảnh chọn lọc: public/images/photos. Nguồn và xác nhận địa điểm: public/images/photos/sources.json. Bản trích ảnh gốc giữ ngoài repo ở /workspace/photo-review. SVG minh họa cũ giữ lại để tránh xóa tài nguyên không cần thiết, giao diện mới không sử dụng.

FadeContent chuyển từ DavidHDev/react-bits; import React được điều chỉnh cho Vite, bỏ directive Next.js. Giấy phép MIT + Commons Clause giữ tại src/components/REACT-BITS-LICENSE.md. Không dùng mã GPL từ antigravity-animation. Font Google có font hệ thống dự phòng.

## Kiểm tra

Build production và Chromium desktop/mobile: phạm vi nội dung, bộ lọc ảnh, lightbox và phím, tab chức năng/phân vùng, checklist lưu sau reload và nội dung tải xuống, FAQ, ảnh tải thành công, menu di động, không tràn ngang, giảm chuyển động và không lỗi JavaScript. Test thực thi trong /tmp/test-reserve.py; ảnh chụp kiểm tra ở /workspace/artifacts/khu-bao-ton-desktop.png và khu-bao-ton-mobile.png.
