// src/pages/Index.jsx
import React from "react";
import "../css/index.css";
import { Link } from "react-router-dom";

const links = [
  { icon: 'fa-calendar-days', text: '礼拝・定期集会案内' },
  { icon: 'fa-envelope', text: '礼拝メッセージ' },
  { icon: 'fa-clock', text: '各種教室・活動案内' },
  { icon: 'fa-circle-user', text: '初めての方へ' },
  { icon: 'fa-building', text: '茨城県にある\nバプテスト教会' }
];

export default function Index() {
  return (
    <div id="index">
      {/* メインビジュアル */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url("/main01_1.png")` }}
      >
        <div className="container">
          <div className="text">
            <p>
              疲れた者、重荷を負う者は、<br />
              だれでもわたしのもとに来なさい。<br />
              休ませてあげよう 。<br />
              (マタイ 11:28)
            </p>
          </div>
        </div>
      </section>

      {/* インデックステキスト */}
      <section className="index-text">
        <div className="container">
          <div className="main">WELCOME</div>
          <p>教会に来ると心が静まり、ほっとする．．．そんな場所。</p>
          <p>
            水戸バプテスト教会は、地域に開かれた教会として、皆様と共にありたいと願っています。
            <br />
            小さなお子さんから大人まで、どなたでもお越しください。
          </p>
          <p>隣びとであるお一人、お一人を、喜びをもってお迎えいたします。</p>
        </div>
      </section>

      {/* クイックリンク */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center justify-content-center quick-links">
            {links.map((item, idx) => (
              <div key={idx} className="cards col-md-2 col-sm-4 mb-4">
                <div className="card h-100">
                  <Link to="#" className="text-decoration-none text-dark d-block p-3">
                    <div className="icon mb-2">
                      <i className={`fa-solid ${item.icon} fa-2x`}></i>
                    </div>
                    <div className="text" style={{ whiteSpace: 'pre-line' }}>
                      {item.text}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* バナーセクション */}
      <section
        className="index-bn">
        <div className="container">
          <div className="img"></div>
          <p>
            毎週日曜日の主日第一礼拝（11:10～12:10）、第二礼拝（19:00～20:00）については、
            <br />
            教会礼拝堂において礼拝を行います。なお、第一礼拝のZOOM配信も行っています。
          </p>
          <p>ZOOM配信よる礼拝についても、どなたでも参加できます。</p>
          <p>ご希望があれば、下記のメールアドレスまでご連絡ください。</p>
          <a href="mailto:ycmitobc@gmail.com">ycmitobc@gmail.com</a>
        </div>
      </section>
    </div>
  );
}
