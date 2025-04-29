// src/pages/Index.jsx
import React from "react";
import "../css/contents.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Church1() {
    return (
      <>
        {/* Sub Header */}
        <div id="sub_header">
          <div className="img"></div>
          <div className="container">
            <p>教会とは</p>
          </div>
        </div>
  
        <div className="container my-5">
          <div className="row">
            {/* Left 메뉴 */}
            <div id="left" className="col-12 col-md-3 mb-4 mb-md-0">
              <ul className="list-unstyled d-flex d-md-block flex-wrap gap-2">
                <li>
                  <Link
                    to="/church1"
                    className="btn btn-warning w-100 text-start text-white active"
                  >
                    教会とは
                  </Link>
                </li>
                <li>
                  <Link
                    to="/church2"
                    className="btn btn-light w-100 text-start"
                  >
                    水戸バプテスト教会について
                  </Link>
                </li>
                <li>
                  <Link
                    to="/church3"
                    className="btn btn-light w-100 text-start"
                  >
                    礼拝・定期集会案内
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* 본문 */}
            <div id="contents" className="church1 col-12 col-md-9">
              <div className="title">教会はこんなところです</div>
              <article>
                <div>主なる神に会うところ</div>
                <p>
                  教会は、全てのものを創造された、生ける神を礼拝するところです。<br />
                  厳粛な神、愛の神が真実に働かれることを知る場です。
                </p>
              </article>
              <div className="line"></div>
              <article>
                <div>救いと解決を得るところ</div>
                <p>
                  教会で語られるのは、あなたの人生を変える力のある生きた神の言葉です。<br />
                  もしあなたが何かを求めているのなら、生ける神の前で真剣に追求してみませんか。
                </p>
              </article>
              <div className="line"></div>
              <article>
                <div>安らぎといやしがあるところ</div>
                <p>
                  牧師、役員そして多くのクリスチャンたちがあなたの良き隣人になりたいと願っています。<br />
                  喜びを分かちあえば倍になり、苦しみを分かち合えば半分になると思いませんか。
                </p>
              </article>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Church1;
