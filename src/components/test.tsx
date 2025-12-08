import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/Test';

interface WriteTestProps {
  onTestCreated?: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onTestCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [createTest] = useMutation(CREATE_TEST, {
    update(cache, { data: { createTest } }) {
      cache.writeQuery({
        query: GET_TESTS,
        data: { tests: [...cache.readQuery({ query: GET_TESTS }).tests, createTest] },
      });
    },
    onCompleted(data) {
      if (onTestCreated && data.createTest) {
        onTestCreated(data.createTest);
      }
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createTest({ variables: { input: { title, description } } });
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Failed to create test:', error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      <form onSubmit={handleSubmit} className="space-y-6" aria-label="Test creation form">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            aria-label="Test title input"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            aria-label="Test description input"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Create Test
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/Test';

interface WriteTestProps {
  onTestCreated?: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onTestCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [createTest] = useMutation(CREATE_TEST, {
    update(cache, { data: { createTest } }) {
      cache.writeQuery({
        query: GET_TESTS,
        data: { tests: [...cache.readQuery({ query: GET_TESTS }).tests, createTest] },
      });
    },
    onCompleted(data) {
      if (onTestCreated && data.createTest) {
        onTestCreated(data.createTest);
      }
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createTest({ variables: { input: { title, description } } });
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Failed to create test:', error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      <form onSubmit={handleSubmit} className="space-y-6" aria-label="Test creation form">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            aria-label="Test title input"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            aria-label="Test description input"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Create Test
        </button>
      </form>
    </div>
  );
};

export default WriteTests;