# EnglishTutor Pro - Sàn Giáo Dục Tiếng Anh 1-1

## Tổng Quan Dự Án

EnglishTutor Pro là một sàn giáo dục tiếng Anh trực tuyến cho phép người học tìm kiếm và đặt lịch học với các giáo viên bản ngữ một cách dễ dàng. Dự án được xây dựng với ReactJS (frontend) và NestJS (backend).

## Đặc Điểm Nổi Bật

### 🎯 Tệp Khách Hàng Mục Tiêu
- **Học viên cá nhân**: Người muốn cải thiện tiếng Anh giao tiếp, IELTS, TOEFL
- **Phụ huynh**: Tìm giáo viên chất lượng cho con em
- **Doanh nghiệp**: Đào tạo tiếng Anh cho nhân viên

### 🚀 Lợi Thế Cạnh Tranh
1. **Học Thử Miễn Phí**: 30 phút đầu tiên không mất phí
2. **Matching Algorithm**: Tìm giáo viên phù hợp với nhu cầu
3. **Lịch Học Linh Hoạt**: Đặt lịch theo thời gian rảnh
4. **Giá Cả Minh Bạch**: Không phí ẩn, thanh toán rõ ràng
5. **Đánh Giá Thực Tế**: Review từ học viên có thật

### 📈 Chiến Lược Kéo Traffic
1. **SEO Content**: Blog tips học tiếng Anh
2. **Social Media**: Video ngắn, success stories
3. **Referral Program**: Giảm giá khi giới thiệu bạn bè
4. **Free Resources**: Tài liệu học tập miễn phí
5. **Webinar Events**: Sự kiện trực tuyến định kỳ

## Cấu Trúc Dự Án

```
english-tutor-pro/
├── frontend/          # React TypeScript Application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Main application pages
│   │   └── services/     # API integration
├── backend/           # NestJS Application
│   ├── src/
│   │   ├── tutors/       # Tutor management module
│   │   └── bookings/     # Booking system module
└── README.md
```

## Công Nghệ Sử Dụng

### Frontend
- **React 18** với TypeScript
- **Material-UI (MUI)** cho UI components
- **React Router** cho navigation
- **Axios** cho API calls

### Backend
- **NestJS** framework
- **TypeScript** 
- **RESTful API** architecture
- **CORS** enabled cho frontend integration

## Hướng Dẫn Cài Đặt

### Yêu Cầu Hệ Thống
- Node.js >= 16.0.0
- npm >= 8.0.0

### Cài Đặt và Chạy

1. **Clone repository**:
   ```bash
   git clone <repository-url>
   cd english-tutor-pro
   ```

2. **Cài đặt dependencies cho Backend**:
   ```bash
   cd backend
   npm install
   ```

3. **Cài đặt dependencies cho Frontend**:
   ```bash
   cd frontend
   npm install
   ```

4. **Chạy Backend Server** (Port 3001):
   ```bash
   cd backend
   npm run start:dev
   ```

5. **Chạy Frontend Development Server** (Port 3000):
   ```bash
   cd frontend
   npm start
   ```

6. **Truy cập ứng dụng**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## API Endpoints

### Tutors
- `GET /tutors` - Lấy danh sách tất cả giáo viên
- `GET /tutors/:id` - Lấy thông tin chi tiết giáo viên
- `GET /tutors/search` - Tìm kiếm giáo viên theo điều kiện
- `POST /tutors` - Tạo profile giáo viên mới
- `PATCH /tutors/:id` - Cập nhật thông tin giáo viên
- `DELETE /tutors/:id` - Xóa (vô hiệu hóa) giáo viên

### Bookings
- `POST /bookings` - Tạo booking mới
- `GET /bookings/tutor/:tutorId` - Lấy bookings theo giáo viên

## Tính Năng Hiện Tại

### ✅ Đã Hoàn Thành
- [x] Landing page với hero section hấp dẫn
- [x] Hiển thị danh sách giáo viên nổi bật
- [x] Navigation header với routing
- [x] RESTful API cho tutors management
- [x] Responsive design với Material-UI
- [x] CORS configuration cho development

### 🚧 Đang Phát Triển
- [ ] Trang tìm kiếm giáo viên với filter
- [ ] Chi tiết profile giáo viên
- [ ] Hệ thống đặt lịch học
- [ ] Tích hợp thanh toán
- [ ] Hệ thống đánh giá và review
- [ ] Authentication và authorization

## Roadmap Phát Triển

### Phase 1 (Tuần 1): MVP Core
- ✅ Basic landing page
- ✅ Tutor listing and profile
- 🚧 Booking system basics
- 🚧 Simple search functionality

### Phase 2 (Tuần 2-3): Enhanced Features
- [ ] User authentication
- [ ] Advanced search and filters
- [ ] Payment integration
- [ ] Email notifications
- [ ] Calendar integration

### Phase 3 (Tuần 4+): Advanced Features
- [ ] Video call integration
- [ ] Learning materials upload
- [ ] Progress tracking
- [ ] Mobile app (React Native)
- [ ] Admin dashboard

## Deployment

### Development
- Frontend: `npm start` (localhost:3000)
- Backend: `npm run start:dev` (localhost:3001)

### Production Build
```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm run build
npm run start:prod
```



## Liên Hệ

- Email: buiminhquang246@gmail.com


## License

Dự án này được phát triển cho mục đích giáo dục và thương mại.

---

### Ghi Chú Kỹ Thuật

- Sử dụng TypeScript để đảm bảo type safety
- Material-UI để tạo UI nhất quán và responsive
- NestJS cho architecture có thể mở rộng
- RESTful API design cho easy integration
- CORS enabled cho cross-origin requests trong development

**Trạng thái hiện tại**: Core structure hoàn thành, ready for feature development
