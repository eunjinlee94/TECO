// src/pages/Index.jsx
import React from "react";
import "../css/contents.css";
import { Link } from "react-router-dom";

function Church2() {
  return (
    <>
      {/* Sub Header */}
      <div id="sub_header">
        <div className="img"></div>
        <div className="container">
          <p>水戸バプテスト教会について</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Left 메뉴 */}
          <div id="left" className="col-12 col-md-3 mb-4 mb-md-0">
            <ul className="list-unstyled d-flex d-md-block flex-wrap gap-2">
              <li>
                <Link to="/church1" className="btn btn-light w-100 text-start">
                  教会とは
                </Link>
              </li>
              <li>
                <Link to="/church2" className="btn btn-warning w-100 text-start text-white active">
                  水戸バプテスト教会について
                </Link>
              </li>
              <li>
                <Link to="/church3" className="btn btn-light w-100 text-start">
                  礼拝・定期集会案内
                </Link>
              </li>
            </ul>
          </div>

          {/* 본문 */}
          <div id="contents" className="church2 col-12 col-md-9">
            <p>水戸バプテスト教会は、1952年４月に初代牧師・横手元夫牧師とトム・ガラット宣教師が水戸の地に派遣され、５月から礼拝を開始したことに始まります。</p>
            <p>翌年の８月、橦木町（現・五軒町）に教会堂が建てられて、本格的なキリスト教の活動が始められました。現在、教会は元吉田町にあります。1991年12月、この地に教会堂を移しました。</p>
            <p>水戸バプテスト教会は、日本バプテスト連盟（以降「連盟」）に加盟しています。</p>
            <p>連盟は、アメリカ南部バプテスト連盟から派遣されたJ.W.マッコーラム宣教師とJ.A.ブランソン宣教師が1889年横浜に上陸し、その歴史が始まりました。1941年には、日本キリスト教団設立に参加しましたが、敗戦後の1947年４月に当時の16教会が集まって、連盟を結成しました。以後、日本全国に322の教会・伝道所を有するまでに成長しました。</p>
            <p>バプテスト教会というのは、16世紀の宗教改革時代に起源をもつプロテスタント教会のひとつの団体です。聖書のことばを信仰の基盤とし、イエス・キリストが神であると信じ、信仰を自らの言葉で言い表すこととし、幼児洗礼を行ないません。</p>
            <p>また、バプテストというのは浸礼派という意味もあります。洗礼の語源は、新約聖書の「βαπτσμα・バプティスマ」で、水にしずめるという意味です。従って、バプテスト教会は、聖書にならってクリスチャンになる人の洗礼（バプテスマ）を、水にしずめるという仕方で行っています。</p>
            <p>私たちは、多くの方々がイエス・キリストとの信仰による出会いを経験し、クリスチャンとして、こころ豊かな歩みをされるように、こころからお祈りし、ご来会をお待ちしております。</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Church2;
