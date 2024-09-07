import { useFetch } from '@/src/hooks/useFetch';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, Suspense, lazy } from 'react';

const Results = lazy(() => import('@/src/components/Results'));

const ResultPage = () => {
  const {
    query: { makeId, year },
  } = useRouter();

  const { data, fetchData } = useFetch(
    `/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}`
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-4 mb-4 sm:text-sm md:text-md lg:text-lg">
        Results
      </h1>
      <Suspense
        fallback={
          <h1 className="text-center mt-4 mb-4 sm:text-sm md:text-md lg:text-lg">
            Loading...
          </h1>
        }>
        <Results data={data?.Results} />
      </Suspense>

      <Link href={`/`}>
        <button className="sm:p-sm md:p-md lg:p-lg sm:text-sm md:text-md lg:text-lg bg-blue text-white border rounded-2xl border-transparent disabled:bg-gray">
          Back
        </button>
      </Link>
    </div>
  );
};

export default ResultPage;
