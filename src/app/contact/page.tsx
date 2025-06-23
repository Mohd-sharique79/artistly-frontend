import Head from 'next/head';
import { useForm, FieldError } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  function renderError(error: unknown) {
    if (typeof error === 'string') return <p className="text-red-500 text-sm">{error}</p>;
    if (error && typeof error === 'object' && 'message' in error && typeof (error as FieldError).message === 'string') {
      return <p className="text-red-500 text-sm">{(error as FieldError).message}</p>;
    }
    return null;
  }

  return (
    <>
      <Head>
        <title>Contact | Artistly.com</title>
        <meta name="description" content="Contact Artistly.com for inquiries, support, or feedback. We&apos;re here to help you connect with the best performing artists." />
      </Head>
      <div className="flex flex-col min-h-screen items-center justify-center bg-muted py-12 px-4">
        <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
          {submitted ? (
            <div className="text-green-600 text-center mb-4">Thank you for contacting us! We&apos;ll get back to you soon.</div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register('name', { required: 'Name is required' })} />
                {renderError(errors.name?.message)}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register('email', { required: 'Email is required' })} />
                {renderError(errors.email?.message)}
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" {...register('subject', { required: 'Subject is required' })} />
                {renderError(errors.subject?.message)}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" {...register('message', { required: 'Message is required' })} />
                {renderError(errors.message?.message)}
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
} 