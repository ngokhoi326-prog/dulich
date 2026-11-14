# Đồng Nai Explorer

Nền tảng khám phá du lịch Đồng Nai bằng React, Vite và GSAP.

## Chạy dự án

Node.js 24 và npm 11 đã được kiểm tra.

```sh
npm ci --cache /workspace/.npm
npm run dev
```

Máy chủ phát triển dùng cổng 5175. `npm run build` tạo thư mục `dist`; `npm run preview` chạy bản dựng ở cổng 4175.

## Chức năng

- 5 điểm đến, lọc danh mục và tìm kiếm không dấu.
- Chi tiết điểm đến, gợi ý trải nghiệm, lưu ý và liên kết Google Maps.
- Lưu lịch trình bằng localStorage trên từng trình duyệt, bỏ lưu, tải tệp văn bản.
- Giao diện di động, menu, điều hướng bàn phím, hộp thoại có quản lý focus và Escape.
- FadeContent từ React Bits; hạt sáng Canvas tự xây dựng, tạm dừng vẽ ngoài màn hình. Hỗ trợ prefers-reduced-motion.

## Nội dung và tài nguyên

Thông tin được biên tập từ hai tài liệu người dùng cung cấp: “KHU DTSQ ĐỒNGNAI.docx” và “dulich htlm html.docx”. Đây là website khám phá độc lập, không tuyên bố là cổng thông tin chính thức. Thời gian tham quan là gợi ý; chưa có đặt dịch vụ, giá vé hoặc lịch mở cửa xác minh.

Đã trích 78 ảnh từ anh1.docx và anh2.docx. Chọn 10 ảnh cho hero, 3 thẻ điểm đến, mục sinh quyển và thư viện 6 ảnh. Các ảnh được tối ưu WebP với phiên bản 720px cho thẻ/thư viện; metadata không cần thiết được loại bỏ khi xuất. Bản gốc giữ ở /workspace/photo-review. Nguồn từng ảnh lưu tại public/images/photos/sources.json.

Các tài liệu không có chú thích địa điểm; ảnh trên thẻ được ghi là ảnh chủ đề, không khẳng định địa điểm chụp. Bửu Long và Giang Điền vẫn dùng SVG minh họa vì chưa có ảnh xác định. Không cần Drive để tải các ảnh đã tích hợp: website dùng tệp cục bộ. Font Google có font hệ thống dự phòng.

FadeContent được chuyển từ DavidHDev/react-bits, điều chỉnh import React và bỏ directive Next.js. Giữ giấy phép tại src/components/REACT-BITS-LICENSE.md (MIT + Commons Clause). Không sao chép mã GPL của antigravity-animation; hiệu ứng hạt được viết riêng lấy cảm hứng chuyển động nổi.

## Đã xác minh

Build production; kiểm tra Chromium trên desktop và mobile: lọc, tìm không dấu, chi tiết, lưu và khôi phục lịch trình sau reload, xuất tệp có đúng nội dung, trạng thái không có kết quả, menu, không tràn ngang, giảm chuyển động và không có lỗi JavaScript runtime.
