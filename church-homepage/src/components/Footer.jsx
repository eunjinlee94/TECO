// Footer.jsx
import "../css/footer.css"; // フッター用CSS読み込み

function Footer() {
  return (
    <footer id="footer" className="footer mt-5 py-4 bg-dark text-center">
      <div className="container">
        {/* 教会名 */}
        <div className="tit">日本バプテスト連盟　水戸バプテスト教会</div>

        {/* 住所 */}
        <p className="address">〒310―0836　茨城県水戸市元吉田町2158-2</p>

        {/* 電話番号とFAX */}
        <p>
          <span><b>TEL</b>029-248-6751</span>
          <span><b>Fax</b>029-248-6753</span>
        </p>

        {/* メールアドレス */}
        <p>
          <span>
            <b>Email</b>
            <a href="mailto:mitobc@outlook.jp">mitobc@outlook.jp</a>
          </span>
        </p>

        {/* 注意事項 */}
        <p className="text">
          当教会は、エホバの証人、統一教会、新天地、その他の新興宗教とは関係ありません。
          <br />
          これらの組織、団体でお悩みの方は、お問い合わせ下さい。
        </p>
      </div>
    </footer>
  );
}

export default Footer;
