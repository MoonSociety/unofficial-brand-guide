"use client";

import { useState } from "react";
import { Download, Sun, Moon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface LogoPreviewProps {
  name: string;
  description: string;
  imageUrl: string;
  formats: string[];
  downloadUrl?: string;
  defaultBackground?: "light" | "dark" | "checker";
}

export function LogoPreview({
  name,
  description,
  imageUrl,
  formats,
  downloadUrl,
  defaultBackground = "light",
}: LogoPreviewProps) {
  const [background, setBackground] = useState<"light" | "dark" | "checker">(defaultBackground);

  const bgClasses = {
    light: "bg-white",
    dark: "bg-gray-900",
    checker: "bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%3E%3Crect%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22%23f0f0f0%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%2210%22%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22%23f0f0f0%22%2F%3E%3Crect%20x%3D%2210%22%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22%23e0e0e0%22%2F%3E%3Crect%20y%3D%2210%22%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22%23e0e0e0%22%2F%3E%3C%2Fsvg%3E')]",
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = name.toLowerCase().replace(/\s+/g, "-") + ".png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="overflow-visible" data-testid={`logo-preview-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="p-3 border-b flex items-center justify-between gap-2">
        <h3 className="font-heading font-semibold text-sm">{name}</h3>
        <ToggleGroup
          type="single"
          value={background}
          onValueChange={(value) => value && setBackground(value as "light" | "dark" | "checker")}
          className="gap-1"
        >
          <ToggleGroupItem value="light" size="sm" aria-label="Light background" data-testid="toggle-bg-light">
            <Sun className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="dark" size="sm" aria-label="Dark background" data-testid="toggle-bg-dark">
            <Moon className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="checker" size="sm" aria-label="Checkered background" data-testid="toggle-bg-checker">
            <div className="h-3 w-3 rounded-sm bg-gradient-to-br from-gray-200 to-gray-400" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <CardContent className="p-0">
        <div className={`h-40 flex items-center justify-center p-6 ${bgClasses[background]}`}>
          <img
            src={imageUrl}
            alt={`${name} logo`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </CardContent>
      <CardFooter className="p-3 flex flex-col items-start gap-3">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex gap-1">
            {formats.map((format) => (
              <Badge key={format} variant="secondary" className="text-xs">
                {format}
              </Badge>
            ))}
          </div>
          {downloadUrl && (
            <Button size="sm" onClick={handleDownload} data-testid={`button-download-logo-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}