const Footer: React.FC = () => {
  return (
    <div id="footer">
      <div className="footer_container">
        <div className="footer_column">
          <h3>Về Chúng Tôi</h3>
          <ul>
            <li>
              <a href="#">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Tầm nhìn</a>
            </li>
            <li>
              <a href="#">Sứ mệnh</a>
            </li>
          </ul>
        </div>
        <div className="footer_column">
          <h3>Đào tạo</h3>
          <ul>
            <li>
              <a href="#">Đại học chính quy</a>
            </li>
            <li>
              <a href="#">Vừa học vừa làm</a>
            </li>
            <li>
              <a href="#">Đào tạo ngắn hạn</a>
            </li>
          </ul>
        </div>
        <div className="footer_column">
          <h3>Liên Hệ</h3>
          <ul>
            <li>
              <a href="#">Email: fit.hcmute.edu.vn</a>
            </li>
            <li>
              <a href="#">Điện thoại: 0123456789</a>
            </li>
            <li>
              <a href="#">
                Địa chỉ: 01, Võ Văn Ngân, Linh Chiểu, Thủ Đức
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
