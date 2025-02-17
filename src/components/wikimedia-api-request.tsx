import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WikimediaApiRequest: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://en.wikipedia.org/w/api.php',
          {
            params: {
              action: 'query',
              format: 'json',
              prop: 'extracts',
              titles: 'Kylix',
              origin: '*',
            },
          }
        );
        const pages = response.data.query.pages;
        const page = Object.values(pages)[0] as { extract: string };
        const firstParagraph = page.extract.split('\n')[0]; // Get the first paragraph
        setData(firstParagraph);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default WikimediaApiRequest;