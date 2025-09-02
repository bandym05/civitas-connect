'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { news, NewsArticle } from '@/lib/data';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Newspaper } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const emergencyAlerts = useMemo(() => news.filter(n => n.isEmergency), []);

  const filteredNews = useMemo(() => {
    return news
      .filter(n => !n.isEmergency)
      .filter(article => {
        const matchesCategory = category === 'All' || article.category === category;
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              article.content.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      });
  }, [searchTerm, category]);

  const categories = ['All', ...Array.from(new Set(news.map(n => n.category)))];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">News & Announcements</h1>
        <p className="text-lg text-muted-foreground mt-2">
          The latest updates and information from your municipality.
        </p>
      </div>

      {emergencyAlerts.length > 0 && (
        <div className="mb-12 space-y-4">
          {emergencyAlerts.map(alert => (
            <Alert key={alert.id} variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.content}</AlertDescription>
            </Alert>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(cat => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map(article => (
            <Card key={article.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">{article.title}</CardTitle>
                <CardDescription>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{article.content.substring(0, 150)}...</p>
              </CardContent>
              <CardFooter>
                 <Badge variant="secondary">{article.category}</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <Newspaper className="mx-auto h-12 w-12" />
          <h3 className="mt-4 text-lg font-semibold">No News Found</h3>
          <p className="mt-1 text-sm">Try adjusting your search or filter settings.</p>
        </div>
      )}
    </div>
  );
}
