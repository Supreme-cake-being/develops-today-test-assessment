interface IProps {
  data: Record<string, any>[];
}

const Results = ({ data }: IProps) => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      {data?.map(({ Make_Name, Model_Name }: any) => (
        <div className="flex gap-2 w-auto sm:p-sm md:p-md lg:p-lg border rounded-2xl border-gray">
          <h2>{Make_Name}</h2>
          <p>{Model_Name}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
