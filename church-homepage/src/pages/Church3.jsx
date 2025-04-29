// src/pages/Index.jsx
import React from "react";
import "../css/contents.css";
import { Link } from "react-router-dom";

function Church3() {
    return (
      <>
        {/* Sub Header */}
        <div id="sub_header">
          <div className="img"></div>
          <div className="container">
            <p>礼拝・定期集会案内</p>
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
                  <Link to="/church2" className="btn btn-light w-100 text-start">
                    水戸バプテスト教会について
                  </Link>
                </li>
                <li>
                  <Link to="/church3" className="btn btn-warning w-100 text-start text-white active">
                    礼拝・定期集会案内
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* 본문 */}
            <div id="contents" className="church3 col-12 col-md-9">
              <article className="ar1">
                <div className="area">
                  <div className="img"></div>
                  <p>教会はすべての人に開かれています。<br />初めての方でもお気軽にお越し下さい、お待ちしています。</p>
                </div>
              </article>
  
              <article className="ar2 container my-5">
                <div className="container my-5">
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start title-custom">
                    <h2 className="mb-0 me-2">主日礼拝</h2>
                    <span className="line mx-2 d-none d-md-inline"></span>
                    <span className="d-block d-md-inline text-muted">毎週日曜日</span>
                  </div>
                </div>
  
                {/* 子ども礼拝 */}
                <div className="mb-5">
                  <div className="d-flex flex-wrap align-items-center bg-light rounded shadow-sm p-3 mb-3">
                    <div className="fw-bold me-3">子ども礼拝</div>
                    <p className="mb-0">10時00分～10時20分</p>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <div>
                        <p>0才～12才対象<br />子ども向けの賛美とメッセージの楽しい礼拝です。</p>
                        <p>みんなで声を出して聖句の暗唱もします。</p>
                        <p>小さなお子様はお家のかたと一緒に参加しています。</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src="/public/church03_02.jpg" alt="" className="img-fluid rounded" />
                    </div>
                  </div>
                </div>
  
                {/* 第1礼拝 */}
                <div className="mb-5">
                  <div className="d-flex flex-wrap align-items-center bg-light rounded shadow-sm p-3 mb-3">
                    <div className="fw-bold me-3">第１礼拝</div>
                    <p className="mb-0">11時10分～12時10分</p>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img src="/public/church03_03.jpg" alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6 mt-4 mb-md-0">
                      <div>
                        <p>第1、2、4日曜日は比較的静かな雰囲気の中での伝統的礼拝<br />第3日曜日は現代的な賛美を多くする礼拝を行っています。</p>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* 第2礼拝 */}
                <div className="mb-5">
                  <div className="d-flex flex-wrap align-items-center bg-light rounded shadow-sm p-3 mb-3">
                    <div className="fw-bold me-3">第２礼拝</div>
                    <p className="mb-0">19時～20時</p>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <div>
                        <p>ドラムやギターの入ったバンドによる奏楽で、賛美する<br />現代的な礼拝です。</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src="/public/church03_04_1.jpg" alt="" className="img-fluid rounded" />
                    </div>
                  </div>
                </div>
              </article>
  
              <article className="ar3 container my-5">
                <div className="container my-5">
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start title-custom">
                    <h2 className="mb-0 me-2">教会学校（全年齢対象）</h2>
                    <span className="line mx-2 d-none d-md-inline"></span>
                    <span className="d-block d-md-inline text-muted">毎週日曜日</span>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center bg-light rounded shadow-sm p-3 mb-2">
                  <div className="fw-bold me-3">嬰児・幼児科、小学科</div>
                  <p className="mb-0">10時20分から10時50分</p>
                </div>
                <div className="d-flex flex-wrap align-items-center bg-light rounded shadow-sm p-3 mb-2">
                  <div className="fw-bold me-3">中学科、高校科、成人科</div>
                  <p className="mb-0">10時～10時50分</p>
                </div>
              </article>
  
              <article className="ar4 container my-5">
                <div className="container my-5">
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start title-custom">
                    <h2 className="mb-0 me-2">聖書の学びと祈り会</h2>
                    <span className="line mx-2 d-none d-md-inline"></span>
                    <span className="d-block d-md-inline text-muted">毎週水曜日</span>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center bg-light rounded shadow-sm p-3 mb-2">
                  <div className="fw-bold me-3">午前の部</div>
                  <p className="mb-0">10時30分～12時</p>
                </div>
                <div className="d-flex flex-wrap align-items-center bg-light rounded shadow-sm p-3 mb-2">
                  <div className="fw-bold me-3">夜の部</div>
                  <p className="mb-0">19時～20時</p>
                </div>
              </article>
  
            </div>
          </div>
        </div>
      </>
    );
}
  
export default Church3;
