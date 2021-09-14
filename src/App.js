import ItemDetails from 'pages/ItemDetails';
import styled from 'styled-components';

const RootView = styled.div`
  width: 100vw;
  height: 100vh;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <RootView>
      <ItemDetails
        name='Chả giò'
        imgUrl='https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/240100151_4598293746881941_7751986560763473968_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=b9115d&_nc_ohc=Kf3H7qYm50kAX-qEqqs&_nc_ht=scontent.fsgn2-2.fna&oh=abf5f4d5cc6b3e786ec475af1081b991&oe=6140EEE9'
        status='SẮP MỞ BÁN'
        statusDetails='Mở bán lúc 11h thứ bảy 05/09/2021'
        price={100000}
        currency='VNĐ'
        ship='Miễn phí giao hàng cho cư dân Lavita Garden'
        shopName='Shophouse TM 16'
        shopAddress='Block A, Chung cư Lavita Garden'
        likeCount={12}
        description='CHẢ GIÒ CUỐN bánh tráng xốp giòn. Nguyên liệu sạch lựa chọn kĩ lưỡng. Em tính qua tuần mới cuốn nhưng có vài chị đặt nên e nhận thêm 7 phần nữa ạ.'
      />
    </RootView>
  );
}

export default App;
