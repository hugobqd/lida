import React from "react";
import Container from "../Container";
import { Row, Col } from "../GridSystem";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const TeamList = ({ list }) => {
  return (
    <>
      {list && (
        <Container>
          <Row>
            {list.map((member, i) => (
              <Col key={i}>
                <div
                  style={{
                    maxWidth: "11rem",
                    marginBottom: "1rem",
                  }}
                >
                  <PreviewCompatibleImage imageInfo={member.team_portrait} />
                </div>
                <h3>{member.team_name}</h3>
                <h4>{member.team_title}</h4>
                {member.team_text}
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default TeamList;
