import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface RequirementsForm {
  featureName: string;
  description: string;
  priorityLevel: 'high' | 'medium' | 'low';
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<RequirementsForm>();
  const router = useRouter();

  const onSubmit = async (data: RequirementsForm) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to success page or perform further actions
      router.push('/success');
    } catch (err) {
      setError('An error occurred while submitting your requirements.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      <div>
        <label htmlFor="featureName" className="block text-sm font-medium text-gray-700">Feature Name</label>
        <input
          id="featureName"
          type="text"
          {...register('featureName', { required: true })}
          aria-invalid={errors.featureName ? 'true' : 'false'}
          className={`form-input ${errors.featureName ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:text-red-900 focus:placeholder-red-500 focus:outline-none' : ''}`}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          rows={3}
          {...register('description', { required: true })}
          aria-invalid={errors.description ? 'true' : 'false'}
          className={`form-textarea ${errors.description ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:text-red-900 focus:placeholder-red-500 focus:outline-none' : ''}`}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="priorityLevel" className="block text-sm font-medium text-gray-700">Priority Level</label>
        <select
          id="priorityLevel"
          {...register('priorityLevel', { required: true })}
          aria-invalid={errors.priorityLevel ? 'true' : 'false'}
          className={`form-select ${errors.priorityLevel ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:text-red-900 focus:placeholder-red-500 focus:outline-none' : ''}`}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" aria-live="assertive">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className={`inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${loading ? 'cursor-not-allowed opacity-60' : ''}`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface RequirementsForm {
  featureName: string;
  description: string;
  priorityLevel: 'high' | 'medium' | 'low';
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<RequirementsForm>();
  const router = useRouter();

  const onSubmit = async (data: RequirementsForm) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to success page or perform further actions
      router.push('/success');
    } catch (err) {
      setError('An error occurred while submitting your requirements.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      <div>
        <label htmlFor="featureName" className="block text-sm font-medium text-gray-700">Feature Name</label>
        <input
          id="featureName"
          type="text"
          {...register('featureName', { required: true })}
          aria-invalid={errors.featureName ? 'true' : 'false'}
          className={`form-input ${errors.featureName ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:text-red-900 focus:placeholder-red-500 focus:outline-none' : ''}`}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          rows={3}
          {...register('description', { required: true })}
          aria-invalid={errors.description ? 'true' : 'false'}
          className={`form-textarea ${errors.description ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:text-red-900 focus:placeholder-red-500 focus:outline-none' : ''}`}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="priorityLevel" className="block text-sm font-medium text-gray-700">Priority Level</label>
        <select
          id="priorityLevel"
          {...register('priorityLevel', { required: true })}
          aria-invalid={errors.priorityLevel ? 'true' : 'false'}
          className={`form-select ${errors.priorityLevel ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:text-red-900 focus:placeholder-red-500 focus:outline-none' : ''}`}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" aria-live="assertive">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className={`inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${loading ? 'cursor-not-allowed opacity-60' : ''}`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;