'use client';

import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Head from 'next/head';
import Navbar from '@/components/ui/Navbar';

interface ArtistSubmission {
  id: number;
  name: string;
  bio: string;
  categories: string[];
  languages: string[];
  location: string;
  feeRange: string;
}

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState<ArtistSubmission[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<ArtistSubmission | null>(null);

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('artistSubmissions') || '[]');
    setSubmissions(storedSubmissions);
  }, []);

  const handleClearSubmissions = () => {
    if (confirm('Are you sure you want to clear all submissions? This cannot be undone.')) {
      localStorage.removeItem('artistSubmissions');
      setSubmissions([]);
      alert('All submissions have been cleared.');
    }
  };
  
  const handleViewDetails = (artist: ArtistSubmission) => {
    setSelectedArtist(artist);
  };

  return (
    <>
      <Head>
        <title>Manager Dashboard | Artistly.com</title>
        <meta name="description" content="View and manage artist submissions on Artistly.com. Artist managers can review, filter, and respond to booking leads." />
      </Head>
      <Dialog>
        <div className="flex flex-col min-h-screen">
          <Navbar dashboard />
          <main className="flex-1 p-4 md:p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Artist Submissions</h1>
              <Button onClick={handleClearSubmissions} variant="destructive" size="sm">
                Clear All Submissions
              </Button>
            </div>
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Fee</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.length > 0 ? (
                    submissions.map((artist) => (
                      <TableRow key={artist.id}>
                        <TableCell className="font-medium">{artist.name}</TableCell>
                        <TableCell>{artist.categories.join(', ')}</TableCell>
                        <TableCell>{artist.location}</TableCell>
                        <TableCell>{artist.feeRange}</TableCell>
                        <TableCell>
                          <DialogTrigger asChild>
                             <Button variant="outline" size="sm" onClick={() => handleViewDetails(artist)}>
                              View Details
                            </Button>
                          </DialogTrigger>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center h-24">
                        No submissions yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </main>
        </div>

        {selectedArtist && (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedArtist.name}</DialogTitle>
              <DialogDescription>
                {selectedArtist.location}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div>
                <h4 className="font-semibold">Bio</h4>
                <p className="text-sm text-muted-foreground">{selectedArtist.bio}</p>
              </div>
               <div>
                <h4 className="font-semibold">Categories</h4>
                <p className="text-sm text-muted-foreground">{selectedArtist.categories.join(', ')}</p>
              </div>
               <div>
                <h4 className="font-semibold">Languages Spoken</h4>
                <p className="text-sm text-muted-foreground">{selectedArtist.languages.join(', ')}</p>
              </div>
               <div>
                <h4 className="font-semibold">Fee Range</h4>
                <p className="text-sm text-muted-foreground">{selectedArtist.feeRange}</p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}