
type Params = {
  params: {
    query: string;
  };
};

const page = ({ params }: Params) => {
  const { query } = params;
  return <div>{query}</div>;
};

export default page;
