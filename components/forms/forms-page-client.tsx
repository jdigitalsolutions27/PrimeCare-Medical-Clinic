"use client";

import { useState } from "react";
import { Download, FileUp, Lock, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { images } from "@/data/images";
import { toast } from "@/hooks/use-toast";

const downloadableForms = [
  "New Patient Registration Form",
  "Consent and Privacy Form",
  "Insurance and Billing Information Form",
  "Medical Records Request Form",
];

export function FormsPageClient() {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    setUploading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setUploading(false);
    toast({
      title: "Upload received",
      description: "This is a UI mock. Connect backend storage to process files.",
    });
  };

  return (
    <>
      <PageHero
        title="Patient Forms"
        description="Download required forms ahead of your visit and submit completed copies."
        image={images.reception}
      />

      <section className="container mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Download forms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {downloadableForms.map((formName) => (
              <div key={formName} className="flex items-center justify-between rounded-xl border p-3">
                <p className="text-sm">{formName}</p>
                <Button size="sm" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  PDF
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload completed forms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Upload file</label>
              <Input type="file" />
            </div>
            <Button onClick={handleUpload}>
              <FileUp className="mr-2 h-4 w-4" />
              Upload form
            </Button>
            {uploading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-40" />
              </div>
            ) : null}
            <div className="rounded-xl border border-dashed p-3 text-xs text-muted-foreground">
              Upload flow is currently a UI mock. Integrate secure storage API for production.
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container mt-6">
        <Card className="bg-secondary/40">
          <CardContent className="flex flex-wrap items-center justify-between gap-4 p-6">
            <div className="space-y-2">
              <Badge variant="secondary" className="w-fit">
                Privacy
              </Badge>
              <p className="text-sm text-muted-foreground">
                Patient data should be processed with confidentiality, secure transfer, and role-based access controls.
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Lock className="mr-2 h-4 w-4" />
                  View privacy note
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Privacy and Data Handling</DialogTitle>
                  <DialogDescription>
                    This demo UI does not store uploaded files permanently. In production, implement encrypted storage, audit logging, and access controls.
                  </DialogDescription>
                </DialogHeader>
                <div className="rounded-xl border p-4 text-sm text-muted-foreground">
                  <p className="mb-2 font-medium text-foreground">Recommended minimum controls:</p>
                  <p>1) Encryption in transit and at rest.</p>
                  <p>2) Time-limited file access links.</p>
                  <p>3) Role-based permissions and retention policies.</p>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Do not upload sensitive records in demo environments.
        </div>
      </section>
    </>
  );
}
