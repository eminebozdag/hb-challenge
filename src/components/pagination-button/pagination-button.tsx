import './pagination-button.css';

interface Props {
   text: number | string;
   selected?: boolean;
   onClick?(text: string | number): void;
}

const PaginationButton = ({ text, selected = false, onClick }: Props) => {
   return (
      <div className={'pagination-button' + (selected ? ' selected' : '')} onClick={() => onClick && onClick(text)}>
         <p data-testid="pagination-button-value">{text}</p>
      </div>
   );
};
export default PaginationButton;
