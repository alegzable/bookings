import styled from "styled-components";

type Props = {
	buttonType: "primary" | "secondary";
};

const Button = styled.button<Props>`
	background: ${({ buttonType }) => (buttonType === "primary" ? "#54deb3" : "transparent")};
	color: ${({ buttonType }) => (buttonType === "primary" ? "#fff" : null)};
	border-radius: 0.4rem;
`;

export default Button;
