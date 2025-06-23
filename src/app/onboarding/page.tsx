'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Head from 'next/head';
import Navbar from '@/components/ui/Navbar';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  bio: z.string().min(10, "Bio must be at least 10 characters."),
  categories: z.array(z.string()).refine(value => value.some(item => item), { message: "Please select at least one category." }),
  languages: z.array(z.string()).refine(value => value.some(item => item), { message: "Please select at least one language." }),
  feeRange: z.string({ required_error: "Please select a fee range." }),
  location: z.string().min(2, "Location is required."),
  profileImage: z.any().optional(),
});

const categoriesList = ["Singer", "Dancer", "Speaker", "DJ", "Musician", "Comedian"];
const languagesList = ["English", "Spanish", "French", "German", "Hindi"];

export default function OnboardingPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      location: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // 1. Get existing submissions from localStorage, or create an empty array
    const existingSubmissions = JSON.parse(localStorage.getItem('artistSubmissions') || '[]');
    
    // 2. Add the new submission with a unique ID
    const newSubmission = { ...values, id: Date.now() };
    existingSubmissions.push(newSubmission);
    
    // 3. Save the updated array back to localStorage
    localStorage.setItem('artistSubmissions', JSON.stringify(existingSubmissions));

    console.log('Saved to localStorage:', newSubmission);
    alert("Application submitted successfully!");
    form.reset();
  }

  return (
    <>
      <Head>
        <title>Artist Onboarding | Artistly.com</title>
        <meta name="description" content="Onboard as a performing artist on Artistly.com. Submit your profile, categories, languages, and more to get discovered by event planners." />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar dashboard />
        <main className="flex-1 flex items-center justify-center p-4 md:p-6 bg-muted">
          <div className="w-full max-w-2xl p-8 space-y-4 bg-card text-card-foreground rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center">Artist Onboarding</h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Artist Name</Label>
                <Input id="name" {...form.register("name")} />
                {form.formState.errors.name && <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" {...form.register("bio")} />
                {form.formState.errors.bio && <p className="text-red-500 text-sm">{form.formState.errors.bio.message}</p>}
              </div>
              <div>
                <Label>Categories (Multi-select)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {categoriesList.map((item) => (
                    <Controller
                      key={item}
                      name="categories"
                      control={form.control}
                      render={({ field }) => (
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`cat-${item}`}
                            checked={field.value?.includes(item)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...(field.value || []), item]
                                : (field.value || []).filter((value) => value !== item);
                              field.onChange(newValue);
                              form.trigger("categories");
                            }}
                          />
                           <Label htmlFor={`cat-${item}`} className="font-normal">{item}</Label>
                        </div>
                      )}
                    />
                  ))}
                </div>
                {form.formState.errors.categories && <p className="text-red-500 text-sm">{form.formState.errors.categories.message}</p>}
              </div>
               <div>
                <Label>Languages Spoken (Multi-select)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {languagesList.map((item) => (
                     <Controller
                      key={item}
                      name="languages"
                      control={form.control}
                      render={({ field }) => (
                        <div className="flex items-center space-x-2">
                          <Checkbox
                             id={`lang-${item}`}
                            checked={field.value?.includes(item)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...(field.value || []), item]
                                : (field.value || []).filter((value) => value !== item);
                              field.onChange(newValue);
                               form.trigger("languages");
                            }}
                          />
                          <Label htmlFor={`lang-${item}`} className="font-normal">{item}</Label>
                        </div>
                      )}
                    />
                  ))}
                </div>
                {form.formState.errors.languages && <p className="text-red-500 text-sm">{form.formState.errors.languages.message}</p>}
              </div>
              <div>
                <Label htmlFor="feeRange">Fee Range</Label>
                 <Controller
                    name="feeRange"
                    control={form.control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger id="feeRange">
                          <SelectValue placeholder="Select a fee range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="$500-$1000">$500 - $1000</SelectItem>
                          <SelectItem value="$1000-$2000">$1000 - $2000</SelectItem>
                          <SelectItem value="$2000-$5000">$2000 - $5000</SelectItem>
                          <SelectItem value="$5000+">$5000+</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                {form.formState.errors.feeRange && <p className="text-red-500 text-sm">{form.formState.errors.feeRange.message}</p>}
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" {...form.register("location")} />
                {form.formState.errors.location && <p className="text-red-500 text-sm">{form.formState.errors.location.message}</p>}
              </div>
               <div>
                  <Label htmlFor="profileImage">Profile Image (Optional)</Label>
                  <Input id="profileImage" type="file" {...form.register("profileImage")} />
              </div>
              <Button type="submit" className="w-full">Submit Application</Button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}