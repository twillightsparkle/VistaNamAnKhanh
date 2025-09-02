
import Image from "next/image";

const images = [
  "https://bietthulienke.info/pl/img/59/tong-the-du-an-nam-an-khanh.jpg",
  "https://bietthulienke.info/pl/img/26/Tong-quan-nam-an-khanh-2.jpg",
  "https://bietthulienke.info/pl/img/26/giai-doan-2-nam-an-khanh.jpg",
  "https://bietthulienke.info/pl/img/26/du-an-nam-an-khanh-123.jpg",
  "https://bietthulienke.info/pl/img/26/giai-doan-mo-rong-nam-an-khanh.jpg",
  "https://bietthulienke.info/pl/img/26/nam-an-khanh-tien-ich.jpg",
  "https://bietthulienke.info/pl/img/59/Bi%E1%BB%87t_th%E1%BB%B1_nam_an_kh%C3%A1nh_0820255.jpg",
  "https://bietthulienke.info/pl/img/59/Bi%E1%BB%87t_th%E1%BB%B1_nam_an_kh%C3%A1nh_0820251jpg.jpg",
  "https://bietthulienke.info/pl/img/59/shophouse_nam_an_kh%C3%A1nh_0820251.jpg",
  "https://bietthulienke.info/pl/img/59/Li%E1%BB%81n_k%E1%BB%81_Nam_an_kh%C3%A1nh_0820251.jpg",
  "https://bietthulienke.info/pl/img/53/Ti%E1%BB%87n_%C3%ADch_nam_an_kh%C3%A1nh_0820251.jpg",
  "https://bietthulienke.info/pl/img/53/Ti%E1%BB%87n_%C3%ADch_nam_an_kh%C3%A1nh_0820252.jpg",
  "https://bietthulienke.info/pl/img/53/Bi%E1%BB%87t_th%E1%BB%B1_nam_an_kh%C3%A1nh_0820252.jpg",
  "https://bietthulienke.info/pl/img/53/Ti%E1%BB%87n_%C3%ADch_nam_an_kh%C3%A1nh_0820253.jpg",
  "https://bietthulienke.info/pl/img/59/Bi%E1%BB%87t_th%E1%BB%B1_nam_an_kh%C3%A1nh_0820253.jpg",
  "https://bietthulienke.info/pl/img/59/Bi%E1%BB%87t_th%E1%BB%B1_nam_an_kh%C3%A1nh_0820254.jpg",
];

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <header className="w-full bg-gradient-to-r from-green-700 to-blue-700 text-white py-8 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-center">Khu Đô Thị Nam An Khánh Sudico</h1>
          <p className="text-lg sm:text-2xl font-medium text-center">Miền đất xanh giữa lòng phố thị – Đẳng cấp sống xanh phía Tây Hà Nội</p>
        </div>
      </header>

      {/* Banner Gallery */}
      <section className="w-full bg-gray-100 py-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {images.slice(0, 6).map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="Nam An Khánh" className="w-full h-48 object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Tổng quan */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Tổng quan dự án</h2>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>Chủ đầu tư: Công ty CP Đầu tư Phát triển Đô thị & KCN Sông Đà (Sudico)</li>
          <li>Khởi công: 2008</li>
          <li>Vị trí: Km10 Đại lộ Thăng Long, xã An Khánh & An Thượng, Hoài Đức, Hà Nội</li>
          <li>Quy mô: 234,4 ha – 1793 căn nhà ở thấp tầng, chung cư cao cấp</li>
          <li>Thiết kế: Địa Trung Hải trẻ trung, cảnh quan hồ và nhiều mảng xanh, mật độ xây dựng thấp</li>
        </ul>
      </section>

      {/* Vị trí & Kết nối */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Vị trí & Kết nối giao thông</h2>
        <p className="text-lg mb-2">Nằm tại cửa ngõ phía Tây Thủ đô, ngay nút giao Đại lộ Thăng Long và Lê Trọng Tấn, kết nối thuận tiện tới trung tâm Hà Nội và các khu đô thị lớn.</p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>Phía Bắc: Giáp Đại lộ Thăng Long</li>
          <li>Phía Đông: Giáp đường Lê Trọng Tấn kéo dài</li>
          <li>Phía Nam: Giáp tỉnh lộ 72, KDC thôn Ngãi Cầu</li>
          <li>Phía Tây: Giáp đường liên khu 8 rộng 60m</li>
        </ul>
      </section>

      {/* Quy mô & Phân khu */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Quy mô & Phân khu</h2>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>Khu A: 189,7 ha – gồm 2 giai đoạn, nhiều phân khu biệt thự, liền kề, shophouse</li>
          <li>Khu B (mở rộng): 44,6 ha – đang phát triển, nhiều tiện ích mới</li>
          <li>Hồ điều hòa, công viên, trường học, trung tâm thương mại</li>
        </ul>
      </section>

      {/* Sản phẩm */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src="https://bietthulienke.info/pl/img/59/Bi%E1%BB%87t_th%E1%BB%B1_nam_an_kh%C3%A1nh_0820255.jpg" alt="Biệt thự Nam An Khánh" className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="font-semibold text-lg mb-1">Biệt thự Nam An Khánh</h3>
            <p className="text-sm text-gray-700">Diện tích đa dạng 210–700m², thiết kế sang trọng, vị trí đắc địa dọc Đại lộ Thăng Long.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src="https://bietthulienke.info/pl/img/59/shophouse_nam_an_kh%C3%A1nh_0820251.jpg" alt="Shophouse Nam An Khánh" className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="font-semibold text-lg mb-1">Shophouse Nam An Khánh</h3>
            <p className="text-sm text-gray-700">Khoảng 584 căn, cao 4 tầng, diện tích 129–212m², kiến trúc Tây Ban Nha & Italia, phù hợp kinh doanh & ở.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src="https://bietthulienke.info/pl/img/59/Li%E1%BB%81n_k%E1%BB%81_Nam_an_kh%C3%A1nh_0820251.jpg" alt="Liền kề Nam An Khánh" className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="font-semibold text-lg mb-1">Liền kề Nam An Khánh</h3>
            <p className="text-sm text-gray-700">Vị trí trung tâm, tiện ích hiện đại, kết nối nhanh tới trung tâm Hà Nội, diện tích linh hoạt.</p>
          </div>
        </div>
      </section>

      {/* Tiện ích */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Tiện ích nội khu & ngoại khu</h2>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>Trung tâm thương mại, spa, gym, yoga</li>
          <li>Khu vui chơi ngoài trời, công viên, hồ điều hòa</li>
          <li>Nhà hàng, cafe, nhà đỗ xe thông minh</li>
          <li>Hệ thống an ninh 3 lớp, PCCC hiện đại</li>
        </ul>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {images.slice(6, 14).map((src, i) => (
            <img key={i} src={src} alt="Tiện ích Nam An Khánh" className="w-full h-32 object-cover rounded shadow" loading="lazy" />
          ))}
        </div>
      </section>

      {/* Bảng giá & Liên hệ */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Bảng giá & Liên hệ</h2>
        <div className="bg-blue-50 rounded-lg p-6 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-lg font-semibold mb-2">Giá bán chỉ từ <span className="text-green-700 font-bold">15 tỷ/căn</span> (bao gồm cả đất & xây dựng)</p>
            <ul className="list-disc pl-6 text-base">
              <li>TT44 - 945m²: 200 triệu/m²</li>
              <li>TT37 - 745m²: 180 triệu/m²</li>
              <li>TT184 - 593m²: 41x tỷ (view hồ nhỏ)</li>
              <li>TT38 - 390m²: 200,x triệu/m² (view hồ Vistalogo)</li>
              <li>TT42 - 385m²: 200,x triệu/m² (view hồ điều hòa)</li>
              <li>TT6 - 586m²: 48,x tỷ (view hồ)</li>
              <li>TT26 - 415m²: 40,x tỷ (biệt thự đơn lập)</li>
              <li>TT8 - 310m²: 9x triệu/m²</li>
              <li>TT6 - 450m²: 8x triệu/m² (đã có sổ đỏ)</li>
              <li>TT21 - 390m²: 41,x tỷ (góc, pháp lý sắp ra sổ đỏ)</li>
              <li>TT29 - 408m²: 100 triệu/m² (căn góc hoàn thiện)</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">Hotline tư vấn</span>
            <a href="tel:0942993886" className="text-2xl font-bold text-green-700 hover:underline">0942.993.886</a>
            <span className="text-sm text-gray-600 mt-1">Email: quanlyduanmienbac@gmail.com</span>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-sm">© 2025 bietthulienke.info – Thiết kế bởi BDS.NET.VN</span>
          <span className="text-sm">Dự án: Khu Đô Thị Nam An Khánh Sudico</span>
        </div>
      </footer>
    </div>
  );
}
