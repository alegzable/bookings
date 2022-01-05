import styled from "styled-components";

type Props = {
	remSize: number;
};

const Thumbnail = styled.img<Props>`
	width: ${({ remSize }) => remSize}rem;
	height: ${({ remSize }) => remSize}rem;
	border-radius: 1rem;
`;

export default Thumbnail;
