import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  features?: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [specifications, setSpecifications] = useState<BusinessSpecification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/business-specs')
      .then(response => {
        setSpecifications(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch business specifications:', err);
        setError('An error occurred while fetching the data.');
        setLoading(false);
      });
  }, []);

  const handleSpecificationChange = (specId: number, newValue: string) => {
    setSpecifications(prevSpecs =>
      prevSpecs.map(spec =>
        spec.id === specId ? { ...spec, description: newValue } : spec
      )
    );
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

  return (
    <div className={clsx('p-4', isMobile ? 'max-w-sm mx-auto' : 'max-w-3xl mx-auto')}>
      {specifications.map(spec => (
        <div key={spec.id} className="mb-6">
          <h2 className="text-xl font-bold mb-2">{spec.name}</h2>
          <p aria-label={`Description of ${spec.name}`} className="mb-4" contentEditable suppressContentEditableWarning onBlur={(e) => handleSpecificationChange(spec.id, e.currentTarget.textContent)}>
            {spec.description}
          </p>
          {spec.features && (
            <ul role="list">
              {spec.features.map(feature => (
                <li key={feature} aria-label={`Feature of ${spec.name}`} className="mb-2" contentEditable suppressContentEditableWarning onBlur={(e) => handleSpecificationChange(spec.id, e.currentTarget.textContent)}>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  features?: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [specifications, setSpecifications] = useState<BusinessSpecification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/business-specs')
      .then(response => {
        setSpecifications(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch business specifications:', err);
        setError('An error occurred while fetching the data.');
        setLoading(false);
      });
  }, []);

  const handleSpecificationChange = (specId: number, newValue: string) => {
    setSpecifications(prevSpecs =>
      prevSpecs.map(spec =>
        spec.id === specId ? { ...spec, description: newValue } : spec
      )
    );
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

  return (
    <div className={clsx('p-4', isMobile ? 'max-w-sm mx-auto' : 'max-w-3xl mx-auto')}>
      {specifications.map(spec => (
        <div key={spec.id} className="mb-6">
          <h2 className="text-xl font-bold mb-2">{spec.name}</h2>
          <p aria-label={`Description of ${spec.name}`} className="mb-4" contentEditable suppressContentEditableWarning onBlur={(e) => handleSpecificationChange(spec.id, e.currentTarget.textContent)}>
            {spec.description}
          </p>
          {spec.features && (
            <ul role="list">
              {spec.features.map(feature => (
                <li key={feature} aria-label={`Feature of ${spec.name}`} className="mb-2" contentEditable suppressContentEditableWarning onBlur={(e) => handleSpecificationChange(spec.id, e.currentTarget.textContent)}>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CreateBusinessSpecification;