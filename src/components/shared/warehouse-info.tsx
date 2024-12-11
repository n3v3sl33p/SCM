interface Props {
  className?: string;
}

export const WarehouseInfo: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h1>Склад</h1>
    </div>
  );
};
