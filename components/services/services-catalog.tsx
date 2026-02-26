"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { serviceCategories, services } from "@/data/services";
import { ServiceCard } from "@/components/services/service-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ServicesCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory = category === "All" ? true : service.category === category;
      const haystack = `${service.name} ${service.shortDescription} ${service.bestFor.join(" ")}`.toLowerCase();
      const matchesSearch = haystack.includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
        <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search departments, services, symptoms..." className="pl-9" />
      </div>

      <Tabs value={category} onValueChange={setCategory} className="space-y-5">
        <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto whitespace-nowrap">
          <TabsTrigger value="All">All</TabsTrigger>
          {serviceCategories.map((cat) => (
            <TabsTrigger key={cat} value={cat}>
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={category}>
          <div className="grid gap-5 lg:grid-cols-2">
            {filtered.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
