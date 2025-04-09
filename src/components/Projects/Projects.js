import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hilunch from "../../Assets/Projects/hilunch.png";
import quickdrop from "../../Assets/Projects/quickdrop.png";
import myarchsite from "../../Assets/Projects/myarchsite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">個人開発　</strong>実績
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myarchsite}
              isBlog={false}
              title="建築Portfolioサイト"
              description="HTML / CSS / Java / Spring Boot / MySQL / Docker / AWS を使用し、建築作品を公開・閲覧者がコメントできるサイトを0から設計・開発しました。インフラ構築まで一人で対応し、Nginxによるリバースプロキシも導入しました。"
              ghLink="https://github.com/chenzhi1011/MyWebSite"
              demoLink="https://chenzhi.site/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickdrop}
              isBlog={false}
              title="QuickDrop（ファイル転送）"
              description="HTML / CSS / JavaScript / Java / Spring Boot / H2 / Vercel / Render を用いて、異なるデバイス間で一時的にファイルを高速転送できるWebアプリを0から構築。CI/CDで自動デプロイを実現し、軽量化にも配慮しました。"
              ghLink="https://github.com/chenzhi1011/QuickDrop"
              demoLink="https://a-quickdrop.vercel.app/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hilunch}
              isBlog={false}
              title="Hi-Lunch（弁当販売と管理）"
              description="Java / Spring Boot / MyBatis / MySQL / Redis を使用し、社員が日替わり弁当を予約・管理者が在庫管理できるシステムのバックエンドを0から開発。JWT認証・悲観的ロック・Redisキャッシュなど実装し、業務効率化を図りました。"
              ghLink="https://github.com/chenzhi1011/Hi-Lunch"            
            />
          </Col>
        </Row>
        <h5 >
           <strong className="purple">新しいプロジェクト開発中...　</strong>
        </h5>
      </Container>
    </Container>
  );
}

export default Projects;
