import {additionalPhotos} from './additionalPhotos';
export const asset = name => `${import.meta.env.BASE_URL}images/photos/${name}.webp`;
export const photos = [
 {id:'forest-canopy',title:'Miền xanh nhìn từ trên cao',category:'Cảnh quan',description:'Những tầng tán rừng nối tiếp nhau, tạo nên không gian sống của nhiều loài sinh vật.'},
 {id:'forest-road',title:'Con đường xuyên rừng',category:'Cảnh quan',description:'Đi chậm dưới tán cây, dành thời gian quan sát và lắng nghe thiên nhiên.'},
 {id:'ancient-tree',title:'Dấu thời gian trên thân cây',category:'Thực vật & nấm',description:'Những thân cây lớn là một phần của cấu trúc rừng và nơi cư trú của nhiều loài.'},
 {id:'birds',title:'Sắc màu hoang dã',category:'Động vật',description:'Thế giới các loài chim góp phần làm nên sự phong phú của hệ sinh thái rừng.'},
 {id:'woodpecker',title:'Một nhịp sống giữa rừng',category:'Động vật',description:'Quan sát từ khoảng cách phù hợp, giữ yên lặng và không tác động đến động vật.'},
 {id:'butterflies',title:'Những cánh bướm bên nước',category:'Động vật',description:'Một khoảnh khắc nhỏ gợi nhắc mối liên hệ giữa sinh vật và môi trường sống.'},
 {id:'waterfall',title:'Dòng nước giữa màu xanh',category:'Cảnh quan',description:'Rừng và dòng nước cùng tạo nên những cảnh quan đặc trưng của miền sinh quyển.'},
 {id:'sailing',title:'Khoảng trời trên mặt hồ',category:'Cảnh quan',description:'Không gian mặt nước mở ra một góc nhìn khác về cảnh quan khu bảo tồn.'},
 {id:'forest-path',title:'Lối đi dưới tán rừng',category:'Thực vật & nấm',description:'Ánh sáng, thảm thực vật và những tầng tán tạo nên chiều sâu của rừng.'},
 {id:'forest-trail',title:'Theo dấu những lối mòn',category:'Cảnh quan',description:'Mỗi chuyến khám phá cần tôn trọng tuyến tham quan và quy định của đơn vị quản lý.'},
 ...additionalPhotos
];
export const pillars=[
 {title:'Bảo tồn',number:'01',subtitle:'Gìn giữ nền tảng của sự sống',text:'Bảo tồn cảnh quan, hệ sinh thái, loài và nguồn gen. Duy trì các sinh cảnh quan trọng, bảo vệ những giá trị thiên nhiên cho các thế hệ hiện tại và tương lai.',items:['Bảo vệ đa dạng sinh học','Duy trì các sinh cảnh quan trọng','Giữ gìn cảnh quan tự nhiên']},
 {title:'Phát triển',number:'02',subtitle:'Để con người cùng thiên nhiên phát triển',text:'Thúc đẩy phát triển kinh tế, xã hội và văn hóa gắn với trách nhiệm môi trường. Kết nối sinh kế cộng đồng với việc gìn giữ tài nguyên và bản sắc địa phương.',items:['Sinh kế bền vững cho cộng đồng','Kinh tế ít chất thải, các bon thấp','Gìn giữ giá trị văn hóa truyền thống']},
 {title:'Hỗ trợ',number:'03',subtitle:'Lan tỏa tri thức, nuôi dưỡng nhận thức',text:'Hỗ trợ nghiên cứu khoa học, giáo dục môi trường và quan trắc. Tạo cơ hội học tập, trao đổi thông tin và nâng cao nhận thức cộng đồng về bảo tồn.',items:['Nghiên cứu và quan trắc môi trường','Giáo dục và trải nghiệm thực tiễn','Trao đổi tri thức và hợp tác']}
];
export const zones=[
 {title:'Vùng lõi',area:'171.759 ha',description:'Ưu tiên bảo tồn đa dạng sinh học, nghiên cứu và giám sát hệ sinh thái với các hoạt động không làm ảnh hưởng tới các giá trị bảo tồn.',detail:'Theo tài liệu: gồm Vườn quốc gia Cát Tiên (71.188 ha) và Khu Bảo tồn Thiên nhiên – Văn hóa Đồng Nai (100.571 ha).'},
 {title:'Vùng đệm',area:'286.247 ha',description:'Bao quanh vùng lõi, hạn chế tác động bất lợi và hỗ trợ các hoạt động phù hợp như giáo dục, nghiên cứu, du lịch sinh thái và sinh kế cộng đồng.',detail:'Các hoạt động được tổ chức trong giới hạn cho phép, gắn phát triển với gìn giữ tài nguyên.'},
 {title:'Vùng chuyển tiếp',area:'297.994 ha',description:'Khuyến khích hợp tác phát triển bền vững với sự tham gia của cộng đồng, cơ sở kinh tế, các nhà khoa học và tổ chức xã hội.',detail:'Là không gian kết nối con người, văn hóa và các mô hình kinh tế dựa trên bảo tồn.'}
];
export const checklist=['Xác nhận tuyến được phép tham quan với đơn vị quản lý','Kiểm tra thời tiết và chuẩn bị trang phục phù hợp','Mang bình nước cá nhân và túi đựng rác','Giữ khoảng cách, không cho động vật hoang dã ăn','Tôn trọng di tích, không lấy mẫu vật hoặc hái cây','Mang toàn bộ rác trở về sau chuyến đi'];
