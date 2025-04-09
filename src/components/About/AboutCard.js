import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            こんにちは, <span className="purple">陳至</span>と申します。
            <span className="purple">中国出身</span>です。
            <br />
            <br />
            <span className="purple">建築設計</span>を専攻していましたが、早稲田大学大学院では<span className="purple">Python</span>
            を用いて都市の医療リソース分布を可視化した経験をきっかけに、IT技術にのめり込むようになりました。
            <br />
            <br />今後は<span className="purple">フルスタックエンジニア</span>を目指しています。
            <br />
            <br />
            趣味としては
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 撮影
            </li>
            <li className="about-activity">
              <ImPointRight /> スノボ
            </li>
            <li className="about-activity">
              <ImPointRight /> 旅行
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you want it, get it!"{" "}
          </p>
          <footer className="blockquote-footer">Chenzhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
