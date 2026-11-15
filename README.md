# Khu Bảo tồn Thiên nhiên – Văn hóa Đồng Nai

Website giới thiệu thiên nhiên, văn hóa, lịch sử và trải nghiệm tại khu bảo tồn. React 19, Vite, GSAP, Motion và Animate UI.

## Chạy và build

Node.js 24, npm 11. Dùng checkout hiện tại, không cần worktree hoặc chạy monorepo của các thư viện.

```sh
npm ci --cache /workspace/.npm
npm run dev
npm run build
npm run preview
```

Development: cổng 5175. Build tạo dist. Preview production: cổng 4175. Vite cấu hình JSX automatic và alias @ trỏ src. Font tiếng Việt Be Vietnam Pro và Lora nằm trong public/fonts; ảnh và logo đều tải từ cùng website.

## Render

Nhánh triển khai: render-site, kho ngokhoi326-prog/dulich. render.yaml cấu hình Static Site, build `npm ci && npm run build`, publish dist, Node.js 24, rewrite /* về /index.html. Không cần máy chủ Node chạy liên tục hoặc Start Command.

Đẩy Git chỉ cập nhật nguồn; trạng thái Live và URL Render cần kiểm tra riêng. Website trước đó từng hiển thị nền trống ở trình duyệt người dùng; chưa có Console của lần lỗi đó để xác định nguyên nhân. Code đã xử lý trường hợp localStorage bị từ chối và đã qua kiểm tra production cục bộ.

## Giao diện và ảnh

- Tông xanh lá rừng, xanh non, nền sáng; giữ nguyên màu logo Khu DTSQ Đồng Nai. Nhãn bên logo ghi khu bảo tồn thuộc vùng lõi, không đồng nhất hai phạm vi.
- Luồng đọc: giới thiệu → điểm khám phá → trải nghiệm → ảnh thực tế → bảo tồn → chuẩn bị tham quan → liên hệ → hỏi đáp.
- Ảnh bìa tách chữ và ảnh; giới thiệu ghép toàn cảnh với chi tiết. Ảnh gắn theo nội dung từng mục. Số liệu đặt ngoài ảnh.
- Thư viện 36 ảnh dạng dải ngang theo mẫu người dùng: khung 4:3 cao thấp xen kẽ, ảnh ló ở hai mép, chú thích trên ảnh, nút tròn trước/sau.
- Kéo chuột hoặc vuốt ngang để chuyển ảnh; chuyển động spring, không tự chạy. Phím trái/phải, Home/End được hỗ trợ; bộ lọc theo chủ đề giữ đủ 36 ảnh.
- Ảnh dọc dùng contain để giữ trọn chủ thể, nền mờ lấy từ chính ảnh đó. Chọn ảnh mở lightbox; phím trái/phải chuyển trong danh mục hiện tại, Escape đóng.
- Ảnh WebP có thumbnail và kích thước thực trong src/photoMetadata.js. srcset/sizes chọn độ phân giải theo màn hình; loading lazy và decoding async. Bản trích gốc nằm ngoài repo ở /workspace/photo-review.

## Hiệu ứng và tương tác

- React Bits AnimatedContent cho nội dung xuất hiện khi cuộn, chuyển động 36px/0,75 giây. Bản JS-CSS lấy từ registry chính thức có trong checkout React Bits do mạng chặn CLI trực tuyến. components.json và jsconfig.json hỗ trợ shadcn khi registry truy cập được.
- @animate-ui/react 2.4.3, Motion và Radix cho accordion hỏi đáp và các tab bảo tồn/phân vùng. Có chuyển trạng thái, điều khiển bàn phím, ARIA liên kết trigger/panel và chế độ giảm chuyển động.
- PhotoCarousel.jsx dùng Motion để trượt ngang, kéo và snap. VisualEffects.jsx dùng GSAP cho hero và hiệu ứng cuộn, tự đo lại khi bố cục thay đổi.
- Checklist lưu trên thiết bị và tải TXT. Trình duyệt từ chối lưu trữ vẫn dùng checklist trong phiên hiện tại. Menu điện thoại, các nhóm nội dung mở rộng và link bản đồ/email/điện thoại được giữ lại.
- Các thư viện được tách thành các chunk React, Motion, animated-controls và scroll-effects để cache riêng, tránh một bundle quá lớn.

## Nội dung và nguồn

Biên tập từ tài liệu “KHU DTSQ ĐỒNGNAI” và dongnaibr.vn; thông tin chi tiết và xử lý khác biệt ở docs/SOURCES-DONGNAIBR.md. Người dùng đã xác nhận bộ ảnh anh1.docx, anh2.docx thuộc khu bảo tồn. Không tự gán tên loài, tên công trình hay vị trí nhỏ chưa xác định.

Diện tích 100.571 ha là phần khu bảo tồn trong vùng lõi theo tài liệu. 756.000 ha, năm công nhận 2011, các phân vùng và thống kê đa dạng sinh học thuộc toàn Khu dự trữ sinh quyển Đồng Nai. Số liệu trang nguồn 2.376 loài thực vật / 2.824 loài động vật có bảng đối chiếu Word 2.353 / 2.061, không diễn giải như mức tăng hay kiểm kê mới.

Website giới thiệu độc lập, chưa cung cấp đặt vé, tour hoặc thanh toán. Không khẳng định giá, tuyến mở cửa, lịch khởi hành hoặc địa chỉ hành chính mới. Liên kết nhấp ra dongnaibr.vn đã được bỏ theo yêu cầu; tên nguồn còn dưới dạng văn bản.

## Giấy phép

Animate UI và React Bits: MIT + Commons Clause, dùng trong ứng dụng/website theo điều kiện của từng dự án. Bản giấy phép tại public/licenses/animate-ui.txt, public/licenses/react-bits.txt. Nguồn Animate UI: https://github.com/imskyleen/animate-ui, phiên bản cài qua npm. Font có giấy phép OFL trong public/fonts. Logo được lấy nguyên từ tài nguyên dongnaibr.vn, trùng mẫu người dùng cung cấp; không vẽ lại hoặc đổi màu. Nguồn từng ảnh trong public/images/photos/sources.json.

## Xác minh

Build production và Chromium: băng chuyền cao thấp, mũi tên/giới hạn, căn giữa, kéo chuột, vuốt cảm ứng thật, không mở nhầm ảnh sau kéo, phím Home/End, lọc và lightbox theo danh mục, ảnh dọc giữ trọn chủ thể, nhiều chiều rộng màn hình và giảm chuyển động. Accordion/tab Animate UI đã kiểm tra bàn phím, ARIA, chuyển nội dung, menu và không lỗi JavaScript. Các ảnh trước đó đều đã kiểm tra decode cho cả 36 ảnh lớn và thumbnail.
