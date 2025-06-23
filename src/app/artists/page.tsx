'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import artistsData from '@/data/artists.json';
import Link from 'next/link';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';

interface Artist {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
}

export default function ArtistListPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [price, setPrice] = useState('all');
  const [location, setLocation] = useState('');
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>(artistsData);

  useEffect(() => {
    setCategory(searchParams.get('category') || 'all');
    // eslint-disable-next-line
  }, [searchParams.get('category')]);

  useEffect(() => {
    let filtered = artistsData;

    if (category !== 'all') {
      filtered = filtered.filter(artist => artist.category === category);
    }

    if (price !== 'all') {
      const [min, max] = price.split('-').map(p => parseInt(p.replace('$', '')));
      filtered = filtered.filter(artist => {
        const artistPrice = parseInt(artist.priceRange.split(' - ')[0].replace('$', ''));
        return artistPrice >= min && artistPrice <= (max || Infinity);
      });
    }

    if (location) {
      filtered = filtered.filter(artist =>
        artist.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    setFilteredArtists(filtered);
  }, [category, price, location]);

  const clearFilters = () => {
    setCategory('all');
    setPrice('all');
    setLocation('');
  };

  return (
    <>
      <Head>
        <title>Browse Artists | Artistly.com</title>
        <meta name="description" content="Browse and filter performing artists by category, price, and location. Find the perfect artist for your event on Artistly.com." />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="bg-background border-b px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="/">
            <span className="font-semibold">Artistly</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/artists">
              Artists
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/onboarding">
              For Artists
            </Link>
          </nav>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Artists
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Singer">Singer</SelectItem>
                  <SelectItem value="Dancer">Dancer</SelectItem>
                  <SelectItem value="Speaker">Speaker</SelectItem>
                  <SelectItem value="DJ">DJ</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="price">Price Range</Label>
              <Select value={price} onValueChange={setPrice}>
                <SelectTrigger id="price">
                  <SelectValue placeholder="Select a price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="$0-1000">$0 - $1000</SelectItem>
                  <SelectItem value="$1000-2000">$1000 - $2000</SelectItem>
                  <SelectItem value="$2000-100000">$2000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Enter a city or state"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtists.map((artist) => (
              <Card key={artist.id}>
                <CardHeader>
                  <CardTitle>{artist.name}</CardTitle>
                  <CardDescription>{artist.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{artist.location}</p>
                  <p className="text-sm font-semibold">{artist.priceRange}</p>
                  <Button className="w-full mt-4">Ask for Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">© 2024 Artistly. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}