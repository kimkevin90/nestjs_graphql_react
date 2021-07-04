import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

type PageTopProps = {
  title: string;
  subtitle: string;
  deletePadding: boolean;
};

const PageTopWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${({ deletePadding }: { deletePadding: boolean }) =>
    deletePadding ? "0px" : "160px"};
  margin-top: ${({ deletePadding }: { deletePadding: boolean }) =>
    deletePadding ? "-160px" : "0"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageTopInner = styled.div`
  width: 100%;
  max-width: 1400px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const PageTop = ({ title, subtitle, deletePadding }: PageTopProps) => {
  return (
    <PageTopWrapper deletePadding={deletePadding}>
      <PageTopInner>
        <Typography gutterBottom variant="h2">
          {title}
        </Typography>
        <Typography variant="body1">{subtitle}</Typography>
      </PageTopInner>
    </PageTopWrapper>
  );
};

export default PageTop;
