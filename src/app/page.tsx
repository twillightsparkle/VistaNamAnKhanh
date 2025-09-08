export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <header className="w-full relative bg-gradient-to-r from-green-700 to-blue-700 text-white py-8 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-center">
            Khu đô thị Nam An Khánh
            <br />
            <span className="text-xl sm:text-2xl font-normal">
              ( Vista Nam An Khánh – Công ty cổ phần SJ Group )
            </span>
          </h1>
        </div>

        {/* Phone number positioned bottom-right */}
        <div className="absolute bottom-2 right-4 text-sm sm:text-base font-semibold">
          ☏ 0984 704 988
        </div>
      </header>


      {/* Tổng quan */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Tổng quan Vista Nam An Khánh Hà Nội</h2>
        
        <div className="mb-8">
          <video 
            src="/videoduan.mp4" 
            controls 
            className="w-full rounded-lg shadow-lg mb-4"
            poster="/tongquankdt.jpg"
          >
            Your browser does not support the video tag.
          </video>
          <p className="text-center text-gray-600 italic">Video tổng thể Khu đô thị Vista Nam An Khánh</p>
        </div>

        <div className="mb-8 bg-yellow-50 rounded-lg p-6 shadow text-gray-900">
          <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">💥 THÔNG TIN DỰ ÁN VISTA NAM AN KHÁNH 💥</h3>
          <ul className="space-y-2 text-lg">
            <li><strong>Chủ đầu tư:</strong> Công ty cổ phần SJ Group</li>
            <li><strong>Vị trí:</strong> xã An Khánh, huyện Hoài Đức, TP. Hà Nội</li>
            <li><strong>Quy mô:</strong> 288,8 ha gồm 8 Phân khu:</li>
            <ul className="list-decimal pl-6 space-y-1">
              <li>La Vista – Nam An Khanh Ha Noi</li>
              <li>Vista Serena – Nam An Khanh Ha Noi</li>
              <li>Vista Lago – Nam An Khanh Ha Noi</li>
              <li>Vista Palma – Nam An Khanh Ha Noi</li>
              <li>Vista Valley – Nam An Khanh Ha Noi</li>
              <li>Vista Sky Lakeview – Nam An Khanh Ha Noi</li>
              <li>Vista Complex – Nam An Khanh Ha Noi</li>
              <li>Vista Garden – Nam An Khanh Ha Noi</li>
            </ul>
            <li className="mt-2"><strong>Mở bán đợt 2 gồm 2 phân khu:</strong></li>
            <ul className="list-disc pl-6 space-y-1">
              <li>Phân khu Vista Serena và Vista Palma: 241 căn nhà thấp tầng</li>
              <li>Phân khu Vista Serena dự kiến bàn giao 160 căn vào tháng 9/2026</li>
              <li>Phân khu Vista Palma đã sẵn sàng bàn giao</li>
            </ul>
            <li className="mt-2"><strong>Cơ cấu sản phẩm phân khu:</strong> Biệt thự đơn lập, biệt thự song lập, nhà liền kề có sân vườn, shophouse chiều cao từ 3 - 4 tầng.</li>
            <li><strong>Mật độ xây dựng:</strong> 42%</li>
          </ul>
          <div className="mt-8 space-y-6">
            <div className="w-full">
              <img src="/tongmatbangANK.jpg" alt="Tổng mặt bằng Nam An Khánh" className="w-full rounded-lg shadow-lg" />
              <p className="text-center text-gray-600 italic mt-3">Tổng mặt bằng Khu đô thị Vista Nam An Khánh</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img src="/tongmatbangPalma.jpg" alt="Tổng mặt bằng Vista Palma" className="w-full rounded-lg shadow-lg" />
                <p className="text-center text-gray-600 italic mt-3">Tổng mặt bằng Vista Palma</p>
              </div>
              <div>
                <img src="/tongmatbangSerena.jpg" alt="Tổng mặt bằng Vista Serena" className="w-full rounded-lg shadow-lg" />
                <p className="text-center text-gray-600 italic mt-3">Tổng mặt bằng Vista Serena</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Thiết kế & Quy mô</h3>
          <p className="text-gray-700 mb-4">Cảnh quan theo mô hình gồm các cung đường rộng uốn lượn ôm lấy hồ (có 3 hồ lớn nhỏ) và rất nhiều khoảng &ldquo;xanh&rdquo; trong khu đô thị với mật độ xây dựng thấp. Từng biệt thự được thiết kế theo phong cách Địa Trung Hải trẻ trung, ấn tượng.</p>
          
          <p className="text-gray-700 mb-4">Khu đô thị Vista Nam An Khánh có tổng cộng 1793 căn nhà ở thấp tầng và các căn hộ chung cư cao cấp đáp ứng đầy đủ, đa dạng nhu cầu sử dụng của mỗi gia đình. Trong đó có:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>228 căn Biệt thự Đơn Lập (03 tầng cao, diện tích từ 356m² – 1200m²)</li>
            <li>417 căn Biệt thự Song Lập (cao 03 tầng, diện tích từ 333m² – 600m²)</li>
            <li>564 căn Liền kề Nam An Khánh Nhà Vườn (cao 04 tầng, diện tích từ 130m² – 348m²)</li>
            <li>584 căn Shophouse Nam An Khánh (cao 04 tầng, diện tích từ 129m² – 212m²) chức năng vừa sử dụng để ở hoặc kinh doanh bám theo trục đường lớn</li>
          </ul>
        </div>

        <div className="mb-8">
          <img src="https://bietthulienke.info/pl/img/26/Tong-quan-nam-an-khanh-2.jpg" alt="Phối cảnh tổng thể" className="w-full rounded-lg shadow-lg mb-4" />
          <p className="text-center text-gray-600 italic">Phối cảnh tổng thể Khu đô thị Vista Nam An Khánh 3D (234ha)</p>
        </div>
      </section>

      {/* Vị trí & Kết nối giao thông */}
      <section className="max-w-5xl mx-auto px-4 py-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Vị trí & kết nối giao thông</h2>
        
        <p className="text-gray-700 mb-6">Khu đô thị Vista Nam An Khánh nằm tại vị trí đắc địa cửa ngõ phía Tây Thủ Đô, ngay nút giao giữa Đại Lộ Thăng Long và trục đường Lê Trọng Tấn. Giáp khu đô thị Vinhomes Smart City, Geleximco Lê Trọng Tấn, cách Trung tâm Hội nghị Quốc gia 5 km. Chạy dọc 2 km chiều dài tuyến đường cao tốc Láng – Hòa Lạc, tuyến đường cao tốc trọng điểm kết nối trung tâm thủ đô tới Khu CNC và hệ thống trường ĐHQG Hà Nội tại Hòa Lạc. Việc kết nối giao thông đi lại giữa Khu đô thị Vista Nam An Khánh đến trung tâm Hà Nội và các khu đô thị lân cận rất thuận tiện.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
        <h3 className="text-xl font-semibold mb-3 text-green-700">Ranh giới dự án</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Phía Bắc:</strong> Giáp Đại lộ Thăng Long</li>
          <li><strong>Phía Đông:</strong> Giáp đường Lê Trọng Tấn kéo dài</li>
          <li><strong>Phía Nam:</strong> Giáp đường tỉnh lộ 72 và KDC thôn Ngãi Cầu</li>
          <li><strong>Phía Tây:</strong> Giáp đường liên khu 8 rộng 60m</li>
        </ul>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <img src="/bandoketnoi.jpg" alt="Bản đồ kết nối Vista Nam An Khánh" className="w-full rounded-lg shadow-lg" />
            <p className="text-center text-gray-600 italic mt-2">Bản đồ kết nối giao thông Vista Nam An Khánh</p>
          </div>
          <div>
            <img src="/huongketnoigt.jpg" alt="Hướng kết nối giao thông" className="w-full rounded-lg shadow-lg" />
            <p className="text-center text-gray-600 italic mt-2">Hướng kết nối giao thông</p>
          </div>
          <div>
            <img src="/metro5.jpg" alt="Tuyến Metro số 5" className="w-full rounded-lg shadow-lg" />
            <p className="text-center text-gray-600 italic mt-2">Tuyến metro số 5 có 2 nhà ga An Khánh 1 và An Khánh 2 tại dự án</p>
          </div>
            <div>
            <img src="cactuyenduongminhhoa.jpg" alt="Các tuyến đường kết nối" className="w-full rounded-lg shadow-lg" />
            <p className="text-center text-gray-600 italic mt-2">Các tuyến đường kết nối chính</p>
            
            <div className="mt-6 bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-green-700">Các tuyến đường xung quanh dự án</h4>
              <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span><strong>Đại lộ Thăng Long:</strong> rộng 140m với 6 làn xe</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span><strong>Đường Lê Trọng Tấn – Hoàng Tùng:</strong> rộng 50m, 6 làn xe (Vành đai 3.5)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span><strong>Đường liên khu LK8:</strong> rộng 50m, 6 làn xe</span>
              </li>
              </ul>
              
              <div className="mt-6">
              <h5 className="text-lg font-semibold mb-3 text-blue-600">Cửa ngõ phía tây của thủ đô Hà Nội kết nối vô cùng thuận tiện:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                <span className="text-green-600 mr-2 text-lg">🚗</span>
                <span className="text-gray-700"><strong>20 phút</strong> di chuyển đến các quận trung tâm thành phố</span>
                </div>
                <div className="flex items-center">
                <span className="text-green-600 mr-2 text-lg">🏢</span>
                <span className="text-gray-700"><strong>10 phút</strong> đến trung tâm Hội nghị Quốc gia</span>
                </div>
                <div className="flex items-center">
                <span className="text-green-600 mr-2 text-lg">✈️</span>
                <span className="text-gray-700"><strong>35 phút</strong> đến sân bay quốc tế Nội Bài</span>
                </div>
                <div className="flex items-center">
                <span className="text-green-600 mr-2 text-lg">🏭</span>
                <span className="text-gray-700"><strong>20 phút</strong> đến khu công nghệ cao Láng Hoà Lạc</span>
                </div>
              </div>
              </div>
            </div>
            </div>
        </div>
      </section>

      {/* Quy mô & phân khu */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Quy mô & phân khu (A/B)</h2>
        
        <p className="text-gray-700 mb-6">Khu đô thị Vista Nam An Khánh chia hai khu: khu A và khu B.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Khu A Vista Nam An Khánh khoảng 189,7ha (hiển thị phần hình nét)</li>
              <li>Dự án Vista Nam An Khánh khu B (Khu mở rộng) hiển thị phần hình mờ</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">Khu A Vista Nam An Khánh (189,7ha)</h3>
          <p className="text-gray-700 mb-4">Được chia làm 2 giai đoạn:</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-green-600">Giai đoạn 1:</h4>
            <p className="text-gray-700 mb-4">Xây quanh khu hồ nhỏ Từ TT1 đến TT32 Bán cho một số chủ đầu tư cấp 2 như PVSD, BIDV, Taseco, Đất Quảng, Thăng Long ITC… Tiến độ một số thứ cấp này có đơn vị xây xong thô, đơn vị bàn giao đất cho người mua nhưng chưa xây dựng và cũng có đơn vị bàn giao đất cho dân tự xây (đặc biệt có một số lô đã có sổ đỏ)</p>
            
            <img src="https://bietthulienke.info/pl/img/26/nam-an-khanh_giai-doan-1.jpg" alt="Giai đoạn 1" className="w-full rounded-lg shadow-lg mb-4" />
            <p className="text-center text-gray-600 italic">Mặt bằng tổng thể Dự án Vista Nam An Khánh khu A giai đoạn 1 (51ha)</p>
            
            <p className="text-gray-700 mt-4"><strong>Tiến độ giai đoạn 1:</strong> Hiện SJ Group đang làm hạ tầng tương đối nhanh (khách hàng có thể cảm nhận được khi ra thực địa hiện hữu)</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-green-600">Giai đoạn 2:</h4>
            <img src="https://bietthulienke.info/pl/img/26/giai-doan-2-nam-an-khanh.jpg" alt="Giai đoạn 2" className="w-full rounded-lg shadow-lg mb-4" />
            <p className="text-center text-gray-600 italic">Mặt bằng tổng thể Dự án Vista Nam An Khánh khu A giai đoạn 2 (106ha)</p>
            
            <p className="text-gray-700 mt-4">SJ Group tự xây một bên mặt hồ Lớn bao gồm các biệt thự, Shophouse và Vinhomes (Vinhomes Thăng Long) làm bên còn lại.</p>
            
            <img src="https://bietthulienke.info/pl/img/26/du-an-nam-an-khanh-123.jpg" alt="Phân khu Vinhomes" className="w-full rounded-lg shadow-lg mb-4 mt-6" />
            <p className="text-center text-gray-600 italic">Dự án Vista Nam An Khánh với Phân khu Vinhomes (Vinhomes Thăng Long) 24ha</p>
            
            <p className="text-gray-700 mt-4"><strong>Tiến độ:</strong> Hiện tại Hồ Vista Nam An Khánh đã làm xong ở cả 2 bên hồ cùng hạ tầng xung quanh. Bên Vingroup tháng 12/2016 nhận nhà còn bên SJ Group giữa năm 2017 sẽ xong hoàn toàn hạ tầng toàn khu (bao gồm đường đi, cây xanh và công trình phụ trợ như trường học, nhà trẻ) và đến cuối năm 2017 đã bàn giao toàn bộ tiện ích cùng nhà ở</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">Dự án Vista Nam An Khánh Khu B (Khu mở rộng) - 44,6 ha</h3>
          
          <img src="https://bietthulienke.info/pl/img/26/giai-doan-mo-rong-nam-an-khanh.jpg" alt="Khu mở rộng" className="w-full rounded-lg shadow-lg mb-4" />
          <p className="text-center text-gray-600 italic">Mặt bằng tổng thể Dự án Vista Nam An Khánh Khu B(Khu mở rộng)</p>
          
          <p className="text-gray-700 mt-4">Dự án Vista Nam An Khánh phần mở rộng khu B (44,6ha) mới chỉ đang tiến hành giải phóng mặt bằng (được 24ha), chưa xây dựng hạ tầng kỹ thuật cũng như công trình nào.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">Khu hỗn hợp - 33ha</h3>
          <p className="text-gray-700 mb-4">Khu hỗn hợp của dự án Vista Nam An Khánh: Từ HH1 đến HH6 trong đó HH1 đã được Phúc Hà xây dựng chung cư The Victory (xây xong 2 tòa trên tổng 5 tòa) và HH6 được Sông Đà Hoàng Long xây Chung cư Golden An Khánh (đã xây xong 2 tòa và 3 tòa đang làm phần thân)</p>
          
          <p className="text-gray-700 mb-4">Khu đô thị Vista Nam An Khánh sau khi lấy đất nông nghiệp thì dân được đền bù đất dịch vụ, gồm đất dịch vụ 4 làng sau: Vân Lũng, An Thọ, Yên Lũng, Phú Vinh</p>
          
          <p className="text-gray-700 mb-4">Hiện tại đất dịch vụ Vista Nam An Khánh đã hoàn thành (do Vingroup làm) bao gồm (Tiện ích này chung cho khu đô thị nên cư dân ngoài Vinhomes vẫn được hưởng):</p>
          
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Đại siêu thị Vinmart nằm tại tầng 1 Golden An Khánh</li>
            <li>Trường Vinschool ngay sau Trạm Xá đang trong quá trình hoàn thiện</li>
          </ol>
        </div>

        <div className="mb-8">
          <img src="https://bietthulienke.info/pl/img/26/nam-an-khanh-tien-ich.jpg" alt="Tiện ích Vista Nam An Khánh" className="w-full rounded-lg shadow-lg mb-4" />
          <p className="text-center text-gray-600 italic">Tiện ích và các khu đô thị lân cận</p>
        </div>
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="max-w-5xl mx-auto px-4 py-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Sản phẩm nổi bật</h2>

        <div className="space-y-8 mb-8">
          <div>
            <img src="/bietthudonlap.jpg" alt="Biệt thự đơn lập" className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow" />
            <p className="text-center text-gray-600 italic mt-3 text-lg font-medium">Biệt thự đơn lập</p>
          </div>
          <div>
            <img src="/bietthusonglap.jpg" alt="Biệt thự song lập" className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow" />
            <p className="text-center text-gray-600 italic mt-3 text-lg font-medium">Biệt thự song lập</p>
          </div>
          <div>
            <img src="/maunhavuon.jpg" alt="Mẫu nhà liền kề sân vườn" className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow" />
            <p className="text-center text-gray-600 italic mt-3 text-lg font-medium">Mẫu nhà liền kề sân vườn</p>
          </div>
          <div>
            <img src="/nhalienke.jpg" alt="Nhà shophouse" className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow" />
            <p className="text-center text-gray-600 italic mt-3 text-lg font-medium">Nhà shophouse</p>
          </div>
        </div>
        
        {/* Biệt thự */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Biệt thự Nam An Khánh</h3>
          
          <p className="text-gray-700 mb-4">Biệt thự Nam An Khánh là sản phẩm đắt giá của SJ Group bởi khu này có lợi thế về giao thông vô cùng thuận tiện vì sản phẩm này chạy dọc theo Đại lộ Thăng Long trục giao thông trọng điểm Tây Hà Nội kết nối nội đô tới trung tâm công nghệ cao Hòa Lạc và các tỉnh Tây, Tây Bắc.</p>
          
          <p className="text-gray-700 mb-4">Thiết kế biệt thự Nam An Khánh đa dạng với các dòng sản phẩm cao cấp, sang trọng:</p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Biệt thự nhà vườn với các loại diện tích: 210 – 483m²</li>
            <li>Biệt thự đơn lập có diện tích: 400 – 700m²</li>
            <li>Biệt thự song lập có diện tích: 355 – 681m²</li>
          </ul>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img src="https://bietthulienke.info/pl/img/59/Bi%E1%BB%87t_th%E1%BB%B1_nam_an_kh%C3%A1nh_0820255.jpg" alt="Biệt thự Nam An Khánh" className="w-full rounded-lg shadow-lg" />
            </div>
            <div>
              <img src="https://bietthulienke.info/pl/img/59/Bi%E1%BB%87t_th%E1%BB%B1_nam_an_kh%C3%A1nh_0820251jpg.jpg" alt="Biệt thự Nam An Khánh" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
          
          <p className="text-gray-700 mt-4">Biệt thự Nam An Khánh đa dạng về diện tích, thiết kế chính vì thế sản phẩm này là mặt hàng đắt giá của SJ Group.</p>
        </div>

        {/* Shophouse */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Shophouse Nam An Khánh</h3>
          
          <p className="text-gray-700 mb-4">Shophouse Nam An Khánh khoảng 584 căn, thiết kế cao 4 tầng với diện tích dao động từ 129 – 212m² với hai phong cách kiến trúc Tây Ban Nha và Italia làm nổi bật nét sang trọng, cổ điển nhưng vẫn luôn hiện đại. Đặc điểm thiết kế như một nhà phố truyền thống với diện tích vô cùng rộng rãi, thoải mái trong việc kinh doanh và ở. Mặt bằng kinh doanh ở tầng 1, 2, 3, tầng 4 có thể để ở.</p>
          
          <img src="https://bietthulienke.info/pl/img/59/shophouse_nam_an_kh%C3%A1nh_0820251.jpg" alt="Shophouse Nam An Khánh" className="w-full rounded-lg shadow-lg mb-4" />
          
          <p className="text-gray-700">Shophouse Nam An Khánh sở hữu vị trí nằm ngay trục đường lớn. cùng kiến trúc của cả khu đô thị và giao thông khu vực hứa hẹn sẽ là những phố buôn sôi động tiềm năng.</p>
        </div>

        {/* Liền kề */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Liền kề sân vườn Nam An Khánh</h3>
          
          <p className="text-gray-700 mb-4">Liền kề sân vườn Nam An Khánh là một điểm đột phá mới của khu đô thị Vista Nam An Khánh. Khu vực này có lợi thế giao thông vô cùng thuận tiện đó là nơi đây chỉ cách trung tâm hội nghị Quốc Gia có 4,5km và chạy dọc đến 2km trên tuyến đường Đại lộ Thăng Long chính vì điều này mà việc di chuyển đến trung tâm thành phố chỉ mất khoảng 20 – 25 phút đi xe. Điều này khiến cho nhiều khách hàng phải ưu ái lựa chọn khu liền kề này.</p>
          
          <img src="https://bietthulienke.info/pl/img/59/Li%E1%BB%81n_k%E1%BB%81_Nam_an_kh%C3%A1nh_0820251.jpg" alt="Liền kề sân vườn Nam An Khánh" className="w-full rounded-lg shadow-lg mb-4" />
          
          <p className="text-gray-700 mb-4">Liền kề sân vườn Nam An Khánh đặc biệt nổi bật đó là việc tiếp giáp rất gần với hàng loạt các khu đô thị khác như: Geleximco Lê Trọng Tấn, Hà Đô Charm Villas, Đại Đô thị Vinhomes Smart City, KĐT Bảo Sơn, Khu Biệt thự Hoa Phượng, KĐT Splendora Bắc An Khánh, Anlac Green Symphony… Ở những nơi này luôn đầy đủ những tiện ích giải trí mà không nơi nào có được…</p>
          
          <p className="text-gray-700">Liền kề sân vườn Nam An Khánh sở hữu các diện tích, tiện ích phù hợp với khách hàng có tài chính tốt. Bởi nơi đây hội tụ đầy đủ những dịch vụ, thiết kế hiện đại bậc nhất thế giới hiện nay.</p>
        </div>
      </section>

      {/* Tiện ích */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Tiện ích nội khu & ngoại khu</h2>
        <div className="mb-8">
          <img src="tienichintro.jpg" alt="Đơn vị vận hành và quản lý dự án" className="w-full rounded-lg shadow-lg mb-4" />
          <p className="text-center text-gray-600 italic">Savills - Đơn vị vận hành và quản lý dự án</p>
        </div>
        <div className="mb-8">
          <img src="/tienichchung.jpg" alt="Tiện ích chung khu đô thị Vista Nam An Khánh" className="w-full rounded-lg shadow-lg mb-4" />
          <p className="text-center text-gray-600 italic">Tiện ích chung khu đô thị Vista Nam An Khánh</p>
        </div>
        
        <div className="mb-8">
          <img src="/tienich.jpg" alt="Tiện ích Vista Nam An Khánh" className="w-full rounded-lg shadow-lg mb-4" />
          <p className="text-center text-gray-600 italic">Tiện ích Vista Nam An Khánh</p>
        </div>
      </section>

      {/* Chính sách bán hàng */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold mb-6 text-green-700">Chính sách bán hàng dự kiến</h2>
          
          <div className="mb-8">
            <img src="/chinhsachbanhang.jpg" alt="Chính sách bán hàng Vista Nam An Khánh" className="w-full rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Liên hệ */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Liên hệ tư vấn</h2>
        <div className="bg-blue-50 rounded-lg p-6 shadow flex flex-col md:flex-row md:items-center md:justify-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">Hotline tư vấn</span>
            <a href="tel:0942993886" className="text-2xl font-bold text-green-700 hover:underline">☏ 0984 704 988</a>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-sm">Dự án: Khu Đô Thị Vista Nam An Khánh</span>
        </div>
      </footer>
    </div>
  );
}
