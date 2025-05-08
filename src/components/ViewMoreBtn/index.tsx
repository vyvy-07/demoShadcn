const ViewMore = ({ dataLayout }: { dataLayout: any }) => {
  //   const [isEnable, setIsEnable] = useState(false);

  return (
    <div
      onClick={() => {
        // setIsEnable(true);
      }}
      className="flex justify-between items-center"
    >
      <hr className="block flex-1 text-grey" />
      <p className="block p-3 w-[100px] font-bold text-grey-bold ">Xem thêm</p>
      <hr className="block flex-1 text-grey" />
    </div>
  );
};

export default ViewMore;
