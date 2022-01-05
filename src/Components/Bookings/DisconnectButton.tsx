import { ReactElement, useState } from "react";
import styled from "styled-components";

type Props = {
	onClick: () => void;
};

const Button = styled.button`
	border: 2px solid #54deb3;
	border-radius: 2rem;
	color: #54deb3;
	background: transparent;
	font-size: 1.4rem;
	text-transform: uppercase;
	padding: 0.6rem 2rem;

	&:hover {
		border-color: #e03535;
		color: #e03535;
	}
`;

const DisconnectButton = ({ onClick }: Props): ReactElement => {
	const defaultText = "connected";
	const [text, setText] = useState(defaultText);

	return (
		<Button onClick={onClick} onMouseEnter={() => setText("disconnect")} onMouseLeave={() => setText(defaultText)}>
			{text}
		</Button>
	);
};

export default DisconnectButton;
