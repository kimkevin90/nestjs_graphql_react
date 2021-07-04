import React from "react";
import styled from "styled-components";

const Wallpaper = styled.div`
  height: 100vh;
  max-height: 100%;
  overflow: auto;
`;
const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

function CenterLayout({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <Wallpaper>
      <Wrapper>{children}</Wrapper>
    </Wallpaper>
  );
}

export { CenterLayout };

export const ContentArea = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-left: 48px;
  margin-right: 48px;
  display: flex;
  flex-direction: column;
`;

export const HorizontalDivider = styled.div`
  height: 1px;
  width: 100%;
  flex-grow: 0;
  border-bottom: 1px solid black;
`;

const SquareBorderButtonBase = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease-out;
  height: 48px;
  padding: 0px 24px;
  cursor: pointer;
  color: ${(props: any) => props["data-text-color"] || "black"};
  border: 1px solid ${(props: any) => props["data-color"] || "black"};

  * {
    color: ${(props: any) => props["data-text-color"] || "black"};
  }
`;

const SquareButtonBase = styled.div`
  background: ${(props: any) => props["data-color"] || "transparent"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease-out;
  height: 48px;
  padding: 0px 24px;
  cursor: pointer;

  &[data-bordered="true"] {
    border: 1px solid ${(props: any) => props["data-color"] || "black"};
  }

  * {
    color: ${(props: any) => props["data-text-color"] || "black"};
  }
`;

type SquareButtonProps = {
  color?: string;
  contrastColor?: string;
  onClick: () => void;
  children?: string;
  textColor?: string;
  bordered?: boolean;
  disabled?: boolean;
  contrastTextColor?: string;
};

export const SquareBorderButton = ({
  color,
  textColor = "black",
  contrastColor,
  contrastTextColor = "white",
  children,
  onClick,
  disabled,
  ...restProps
}: SquareButtonProps) => (
  <SquareBorderButtonBase
    {...restProps}
    data-disabled={disabled}
    data-color={color}
    data-text-color={textColor}
    data-contrast-color={contrastColor}
    data-contrast-text-color={contrastTextColor}
    onClick={disabled ? () => {} : onClick}
  >
    {children}
  </SquareBorderButtonBase>
);

export const SquareButton = ({
  color,
  contrastColor,
  textColor = "white",
  contrastTextColor = "white",
  children,
  onClick,
  bordered,
  disabled,
  ...restProps
}: SquareButtonProps) => (
  <SquareButtonBase
    {...restProps}
    data-disabled={disabled}
    data-color={color}
    data-bordered={bordered}
    data-contrast-color={contrastColor}
    data-text-color={textColor}
    data-contrast-text-color={contrastTextColor}
    onClick={disabled ? () => {} : onClick}
  >
    {children}
  </SquareButtonBase>
);
