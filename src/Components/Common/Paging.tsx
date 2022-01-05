import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import styled from "styled-components";

type Props = {
	data: PagingData;
	updatePageNumber: (page: number) => void;
};

export type PagingData = {
	pageNumber: number;
	pageSize: number;
	totalCount: number;
};

type PageButtonProps = {
	isActive?: boolean;
};

const PageButton = styled.button<PageButtonProps>`
	width: 4rem;
	height: 4rem;
	background-color: ${({ isActive }) => (isActive ? "#54deb3" : "transparent")};
	color: ${({ isActive }) => (isActive ? "#fff" : null)};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Paging = ({ data, updatePageNumber }: Props): ReactElement => {
	const { pageNumber, pageSize, totalCount } = data;

	const pageCount = Math.ceil(totalCount / pageSize);

	const buttons = [
		<PageButton onClick={() => updatePageNumber(pageNumber - 1)} disabled={pageNumber === 1} key="prev">
			<FontAwesomeIcon icon={faChevronLeft} />
		</PageButton>,
	];

	for (let i = 1; i <= pageCount; i++) {
		const button = (
			<PageButton isActive={i === pageNumber} onClick={() => updatePageNumber(i)} key={i}>
				{i}
			</PageButton>
		);
		buttons.push(button);
	}

	buttons.push(
		<PageButton onClick={() => updatePageNumber(pageNumber + 1)} disabled={pageNumber === pageCount} key="next">
			<FontAwesomeIcon icon={faChevronRight} />
		</PageButton>
	);

	return <div style={{ display: "flex" }}>{[...buttons]}</div>;
};

export default Paging;
