import { useFetch } from '@/src/hooks/useFetch';
import { Select } from '@components/Select';
import { useEffect, useState } from 'react';

const years = [
  { id: 2015 },
  { id: 2016 },
  { id: 2017 },
  { id: 2018 },
  { id: 2019 },
  { id: 2020 },
  { id: 2021 },
  { id: 2022 },
  { id: 2023 },
  { id: 2024 },
];

const HomePage = () => {
  const [year, setYear] = useState<number>();
  const [make, setMake] = useState<Record<string, any>>();

  const { data, loading, error, fetchData } = useFetch(
    '/GetMakesForVehicleType/car'
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex gap-8 sm:flex-col">
      <Select label="Year" options={years} onChange={setYear} selected={year} />

      <Select
        label="Make"
        options={data?.Results}
        displayNameField={'MakeName'}
        onChange={setMake}
        selected={make?.MakeName}
      />
    </div>
  );
};

// export async function getServerSideProps() {
//   const { data, loading, error, fetchData } = await useFetch(
//     '/GetMakesForVehicleType/car'
//   );

//   fetchData();

//   return {
//     props: {
//       data,
//       loading,
//       error,
//     },
//   };
// }

export default HomePage;
