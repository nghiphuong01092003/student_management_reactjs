import Button from './Button';
const NavigationBar: React.FC = () => {
  return (
    <div id="nav">
      <li>
        <a href="#">TRANG CHỦ</a>
      </li>
      <Button>ĐĂNG NHẬP</Button>
    </div>
  );
}
export default NavigationBar;