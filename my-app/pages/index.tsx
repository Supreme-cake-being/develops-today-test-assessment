import { useFetch } from '@/src/hooks/useFetch';
import Select from '@components/Select';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const years = [
  { id: '2015' },
  { id: '2016' },
  { id: '2017' },
  { id: '2018' },
  { id: '2019' },
  { id: '2020' },
  { id: '2021' },
  { id: '2022' },
  { id: '2023' },
  { id: '2024' },
];

const HomePage = () => {
  const [year, setYear] = useState<Record<string, any>>();
  const [make, setMake] = useState<Record<string, any>>();

  const { data, loading, error, fetchData } = useFetch(
    '/GetMakesForVehicleType/car'
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <>
      <div className="flex gap-8 sm:flex-col mb-8">
        <Select
          label="Year"
          options={years}
          onChange={setYear}
          selected={year}
        />

        <Select
          label="Make"
          options={data?.Results}
          displayNameField={'MakeName'}
          onChange={setMake}
          selected={make}
          loading={loading}
        />
      </div>

      <Link href={`result/${make?.MakeId}/${year?.id}`}>
        <button
          className="sm:p-sm md:p-md lg:p-lg sm:text-sm md:text-md lg:text-lg bg-blue text-white border rounded-2xl border-transparent disabled:bg-gray"
          disabled={!make || !year}>
          Next
        </button>
      </Link>
    </>
  );
};

export default HomePage;
