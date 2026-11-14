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
- 756.000 ha, năm công nhận 2011 và ba vùng chức năng thuộc toàn Khu dự trữ sinh quyển Đồng Nai. Phần đa dạng sinh học dùng số liệu dongnaibr.vn có bảng đối chiếu Word; không gán làm số liệu riêng khu bảo tồn.
- Chức năng bảo tồn, phát triển, hỗ trợ và các nội dung văn hóa, giáo dục được biên tập từ tài liệu. Không bổ sung tên di tích, giờ hoạt động, giá vé hay thông tin liên hệ chưa xác nhận.
- Website giới thiệu độc lập, chưa có đặt vé, tour hoặc thanh toán.

## Chức năng

Menu di động; tab ba trụ cột và phân vùng; thư viện 10 ảnh lọc theo chủ đề; lightbox có phím mũi tên, Escape và quản lý focus; danh sách chuẩn bị lưu localStorage và xuất TXT; FAQ có đóng/mở; Google Maps tìm khu bảo tồn. Ảnh WebP cục bộ, bản nhỏ cho thư viện; tải lười và kích thước xác định. Hiệu ứng FadeContent từ React Bits; GSAP cho tiêu đề theo dòng, ảnh bìa parallax, mở ảnh theo cuộn và thanh tiến trình đọc; hạt sáng Canvas, ánh sáng khi rê chuột và số liệu đếm tăng. Tắt chuyển động khi prefers-reduced-motion.

## Tài nguyên

36 ảnh chọn lọc: public/images/photos. Nguồn và xác nhận địa điểm: public/images/photos/sources.json. Bản trích ảnh gốc giữ ngoài repo ở /workspace/photo-review. SVG minh họa cũ giữ lại để tránh xóa tài nguyên không cần thiết, giao diện mới không sử dụng.

FadeContent chuyển từ DavidHDev/react-bits; import React được điều chỉnh cho Vite, bỏ directive Next.js. Giấy phép MIT + Commons Clause giữ tại src/components/REACT-BITS-LICENSE.md. Không dùng mã GPL từ antigravity-animation. Font Be Vietnam Pro và Lora được tải cục bộ từ public/fonts, có glyph tiếng Việt đầy đủ; giấy phép OFL được giữ cùng font. Website không gửi yêu cầu Google Fonts.

## Kiểm tra

Build production và Chromium desktop/mobile: phạm vi nội dung, bộ lọc ảnh, lightbox và phím, tab chức năng/phân vùng, checklist lưu sau reload và nội dung tải xuống, FAQ, ảnh tải thành công, menu di động, không tràn ngang, giảm chuyển động và không lỗi JavaScript. Test thực thi trong /tmp/test-reserve.py; ảnh chụp kiểm tra ở /workspace/artifacts/khu-bao-ton-desktop.png và khu-bao-ton-mobile.png.


Cập nhật hình ảnh: bảng màu xanh ngọc, xanh lá sáng và vàng ấm; cỡ chữ lớn hơn, font tiếng Việt tự lưu trữ. Đã kiểm tra font tải từ cùng website và không có yêu cầu font bên ngoài; kiểm tra glyph tiếng Việt trên cả 5 tệp font, màn hình 320/390/768/1440px, bộ đếm và tương tác.


## Bổ sung từ dongnaibr.vn — 14/11/2026

Bổ sung cảnh quan Mã Đà – Trị An – Chiến khu Đ, ba địa danh văn hóa – lịch sử, hai chương trình thuộc khu bảo tồn, định hướng gắn bảo tồn với cộng đồng, email trung tâm và số điện thoại văn phòng khu DTSQ. Nguồn được đặt tại từng mục và chân trang. Chi tiết đối chiếu, khác biệt thống kê và giới hạn thông tin: docs/SOURCES-DONGNAIBR.md. Dữ liệu biên tập tập trung tại src/referenceContent.js.

Phần thống kê toàn khu DTSQ hiện dùng số trang nguồn giới thiệu (2.376 loài thực vật, 2.824 loài động vật) và có bảng đối chiếu tài liệu Word (2.353 / 2.061). Không mô tả như thống kê riêng khu bảo tồn hoặc kết quả kiểm kê mới. Không công bố giá tour, thời gian khởi hành, địa chỉ hành chính mới hay cam kết tuyến đang hoạt động.

Bản cập nhật được chuẩn bị để đẩy lên nhánh main theo yêu cầu đưa lên web. Netlify có thể tự deploy nếu dự án đã kết nối nhánh này; kiểm tra Deploys hoặc URL công khai để xác nhận.


## Giao diện xanh lam – kem – đồng

Bản tối ưu theo yêu cầu: tông xanh lam đậm, nền kem và điểm nhấn đồng; nội dung chính 14–15px, tăng chữ hướng dẫn và nguồn; logo Khu DTSQ Đồng Nai ở đầu trang, chân trang, phần sinh quyển và favicon. Nhãn cạnh logo nêu khu bảo tồn là thành phần vùng lõi, không đồng nhất hai đơn vị. Khẩu hiệu được biên tập cụ thể hơn về rừng Mã Đà, hồ Trị An, lịch sử Chiến khu Đ và tham quan có ý thức. Phương châm bảo tồn trích từ nguồn được giữ nguyên.

Tài nguyên logo: public/brand/dong-nai-biosphere.png, lấy nguyên từ ảnh nhúng trong https://dongnaibr.vn/background/logoDongnai.svg, trùng mẫu người dùng cung cấp. Không đổi màu hoặc vẽ lại logo; logo vẫn giữ màu xanh nguyên bản trong giao diện mới.

Kiểm tra: logo và ảnh tải được; font tiếng Việt cục bộ; 8 kích thước màn hình 320/360/390/768/820/900/1024/1440px; menu, gallery, lightbox, tab, checklist, nguồn tham khảo và chuyển động. Gói tải Cloudflare cục bộ: /workspace/artifacts/dong-nai-cloudflare.zip. Chưa push hoặc deploy bản thiết kế này.

## Xuất bản bằng Render Static Site

Cấu hình có sẵn tại render.yaml. Trong Render chọn New → Static Site, kết nối kho ngokhoi326-prog/dulich và chọn nhánh render-site chứa giao diện mới.

- Build command: npm ci && npm run build
- Publish directory: dist
- Node.js: 24
- Rewrite: /* → /index.html

Đây là website tĩnh, không cần Start Command, Web Service hoặc máy chủ Node chạy liên tục. Có thể dùng New → Blueprint để Render đọc render.yaml từ nhánh render-site. Việc đẩy mã chỉ chuẩn bị nguồn; cần kiểm tra trạng thái Live trên Render và URL thực tế trước khi xác nhận website đã công khai.


## Bố cục theo hành trình khám phá

Thứ tự chính: giới thiệu → điểm khám phá → chương trình trải nghiệm → ảnh thực tế → thông điệp bảo tồn → chuẩn bị tham quan → liên hệ → câu hỏi thường gặp. Menu đầu trang và thanh đi nhanh dẫn thẳng đến các bước này. Các thẻ giá trị trùng nội dung được rút thành ba ý ngắn trong giới thiệu. Chi tiết di tích nằm trong phần mở rộng ngay dưới điểm khám phá; sinh quyển, phân vùng, thống kê và cộng đồng nằm trong một nhóm mở rộng riêng. Nguồn tham khảo vẫn giữ ở cuối trang trong phần mở rộng.

Thư viện mặc định có 6 ảnh với lưới đầy đủ; nút xem thêm mở toàn bộ 10 ảnh, bộ lọc áp dụng trên toàn bộ ảnh. Bổ sung xử lý khi trình duyệt không cho lưu localStorage để tính năng checklist không làm ứng dụng mất giao diện. Đây là kiểm tra độ bền cục bộ, chưa đủ bằng chứng để khẳng định nguyên nhân trang trắng trên Render.

Kiểm tra production tại /tmp/test-page-flow.py bao gồm thứ tự mục, toàn bộ neo điều hướng, nhóm mở rộng, ảnh/lọc/lightbox, tab, nội dung Word đối chiếu, checklist/tải xuống, nguồn, mobile và trường hợp trình duyệt từ chối lưu trữ.


## Loại bỏ liên kết nguồn khỏi giao diện và đổi màu

Theo yêu cầu, đã bỏ toàn bộ liên kết nhấp ra dongnaibr.vn ở phần giới thiệu, thẻ cảnh quan, chương trình, phân vùng, thống kê, liên hệ và nguồn cuối trang. Nguồn vẫn ghi bằng văn bản, tài liệu đối chiếu trong docs vẫn giữ liên kết phục vụ biên tập. Dữ liệu giao diện không còn trường URL nguồn; liên kết bản đồ, mailto và tel được giữ lại.

Bảng màu hiện tại: đỏ đất, nền kem và nâu đậm; logo giữ màu gốc. Build production, luồng trang, thư viện/tabs/checklist và các kích thước màn hình được kiểm tra. Đã kiểm tra cả DOM của mục đang đóng: không có anchor nào trỏ tới dongnaibr.vn.


Bảng màu hiện hành đã chuyển sang xanh lá rừng, xanh non và nền kem sáng theo yêu cầu mới nhất. Logo giữ màu gốc; các liên kết ra dongnaibr.vn vẫn được loại bỏ.


## Thư viện 36 ảnh

Bổ sung 24 ảnh chọn lọc từ bộ ảnh Word gốc và đưa 2 ảnh văn hóa đã có vào thư viện. Tổng 36 ảnh, gồm cảnh quan, động vật, thực vật & nấm, văn hóa. Mọi ảnh đều từ tài liệu người dùng cung cấp, không lấy ảnh ngoài dự án. Không xác định tên loài hay tên công trình khi chưa có dữ liệu.

Ban đầu hiển thị 12 ảnh; nút xem thêm mở từng nhóm 12, cuối cùng có thể thu gọn. Bộ lọc luôn áp dụng trên toàn bộ 36 ảnh. Thumbnail 680px cho ảnh mới và ảnh phóng lớn tối đa 1600px, WebP, giữ tỉ lệ ảnh gốc. Thư viện dùng lazy loading và decoding async. Ảnh đầy đủ chỉ được yêu cầu khi mở. Tổng các bản ảnh tối ưu khoảng 9,9 MB, không tải toàn bộ cùng lúc.

Dữ liệu ảnh mới tại src/additionalPhotos.js; nguồn gốc từng ảnh được giữ trong public/images/photos/sources.json.
